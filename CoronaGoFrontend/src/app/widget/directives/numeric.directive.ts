import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel, NgControl } from '@angular/forms';
import { formatNumber } from '@angular/common';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[numeric]'
})

export class NumericDirective implements OnInit {

  defaultRegex = /^[0-9]+[\.]{0,1}[0-9]*$/g;
  constructor(private el: ElementRef, private control: NgControl) {

  }

  // tslint:disable-next-line:no-input-rename
  @Input('numericType') numericType: string; // number | decimal

  private specialKeys = {
    number: ['Backspace', 'Delete', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
    decimal: ['Backspace', 'Delete', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
  };

  private getDecimalSeparator = () => ','; //  (1.1).toLocaleString().substring(1, 2);

  private getRegExBasedOnUserLocale = () => {
    const n = ','; // this.getDecimalSeparator();
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
    return 'de';
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
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

  @HostListener('focus', ['$event'])
  onFocus(event: Event) {
    const value = this.control.control.value;
    const decimal = this.getDecimalSeparator();
    let valueToSet;
    if (decimal === ',') {
      valueToSet = String(value).replace(/\./g, '').replace(/,/g, '.');
    } else {
      valueToSet = String(value).replace(/,/g, '').replace(/\./g, ',');
    }
    this.control.control.setValue(parseFloat(valueToSet));
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event) {
    const value = this.control.control.value;
    this.control.control.setValue(this.getFormattedValue(value));
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {

    if (this.specialKeys[this.numericType].indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.defaultRegex)) {
      event.preventDefault();
    }
  }

  @HostListener('change', ['$event'])
  onChange(event: Event) {
    console.log(this.control.control.value);
    /* const value = this.control.control.value;
    this.control.control.setValue(this.getFormattedValue(value));
    event.stopImmediatePropagation();
    event.stopPropagation(); */
  }

  ngOnInit(): void {
    const value = String(this.control.control.value);
    this.control.control.setValue(this.getFormattedValue(value));
  }
}
