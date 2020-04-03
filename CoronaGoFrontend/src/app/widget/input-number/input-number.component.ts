import { Component, OnInit, forwardRef, Input, Renderer, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: [ './input-number.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ]
})
export class InputNumberComponent implements ControlValueAccessor, OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('numericType') numericType: string;
  @Input() customMin: number;
  @Input() customMax: number;
  @Input() mandatoryCondition: any;
  @Input() element: any;
  @Input() displayFormat: string;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  public number: any = null;
  private defaultRegex = /^[0-9]+[\.]{0,1}[0-9]*$/g;
  public disabled: boolean;

  private specialKeys = {
    number: [ 'Backspace', 'Delete', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight' ],
    decimal: [ 'Backspace', 'Delete', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight' ],
  };

  private getDecimalSeparator = (1.1).toLocaleString().substring(1, 2);

  constructor(private renderer: Renderer, private elementRef: ElementRef) {

  }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this.setValueToField(value);
    this._model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  set(value: any) {
    this._model = value;
    this.onChange(this._model);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    this.disabled = isDisabled;
  }

  private getRegExBasedOnUserLocale = () => {
    const n = this.getDecimalSeparator;
    if (n === ',') {
      return new RegExp('^[0-9]+[,]{0,1}[0-9]*$', 'g');
    } else {
      return new RegExp('^[0-9]+[\.]{0,1}[0-9]*$', 'g');
    }
    return new RegExp('^[0-9]+\.[0-9]*$', 'g');
  }

  private regex = () => {
    return {
      number: new RegExp(/^\d+$/),
      decimal: this.getRegExBasedOnUserLocale()
    };
  }

  private getUserLocaleFromBrowser = () => {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[ 0 ];
    } else {
      return navigator.language || 'en';
    }
  }

  private getFormattedValue = (value) => {
    if (!value) { return value; }
    value = String(value).replace(/,/g, '.');
    const formatted = formatNumber(value, this.getUserLocaleFromBrowser());
    return formatted;
  }

  private getDBTypedValue = (value) => {
    let valueToSet;
    if (this.getDecimalSeparator === ',') {
      valueToSet = String(value).replace(/\./g, '').replace(/,/g, '.');
    } else {
      valueToSet = String(value).replace(/,/g, '');
    }
    return valueToSet;
  }

  onFocus = (event) => {
    if (this.number == null) {
      this.number = "";
    }
    const value = this.number;
    const decimal = this.getDecimalSeparator;
    let valueToSet;
    if (decimal === ',') {
      valueToSet = String(value).replace(/\./g, '');
    } else {
      valueToSet = String(value).replace(/,/g, '');
    }
    this.number = valueToSet;
  }

  onBlur = (event) => {
    const value = this.number;
    this.number = this.getFormattedValue(value);
    this._model = this.getDBTypedValue(value);
    this.onChange(this._model);
  }

  onKeyDown = (event) => {
    if (this.specialKeys[ this.numericType ].indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.number;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex()[ this.numericType ])) {
      event.preventDefault();
    }
  }

  setValueToField(value) {
    this.number = this.getFormattedValue(value);
  }

  onAccept(mask) {
    console.log('accept ', mask);
  }

  onComplete(mask) {
    console.log('complete ', mask);
  }

  ngOnInit() {
  }

}
