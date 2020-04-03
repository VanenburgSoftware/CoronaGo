import { Component, OnInit, forwardRef, Input, Renderer, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormDateService } from './form-date.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDateComponent),
      multi: true
    }
  ]
})
export class FormDateComponent implements ControlValueAccessor, OnInit {

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  @Input() format;
  @Input() viewType;
  @Input() mandatoryCondition;
  @Input() disabled: boolean;
  @Input() fromDate;
  @Input() toDate;
  @Input() formAttributes;

  DEFAULT_FORMAT = {
    date: 'dd-MMM-yyyy',
    month: 'MMM yyyy',
    year: 'yyyy',
    datetime: 'dd-MMM-yyy hh:mm:ss',
    time: 'hh:mm:ss'
  };

  DATEVIEWTYPES = {
    DEFAULT: 'date',
    MONTH: 'month',
    YEAR: 'year',
    DATETIME: 'datetime',
    TIME: 'time'
  };

  selectedDate: any;
  selectedViewDate: any;
  showPicker = false;
  showTime = false;
  isTimeOnly = false;

  minDate = new Date();
  maxDate = new Date();


  constructor(private renderer: Renderer, private elementRef: ElementRef) {

  }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this.setViewDate(value);
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

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showPicker = false;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    this.disabled = isDisabled;
  }

  validateRange(date) {
    const selDt = new Date(date).getTime();
    if (this.fromDate || this.toDate) {
      if (this.fromDate) {
        const fd = new Date(this.fromDate).getTime();
        if (selDt < fd) {
          return false;
        }
      }
      if (this.toDate) {
        const td = new Date(this.toDate).getTime();
        if (selDt > td) {
          return false;
        }
      }
    }

    return true;
  }

  handleDateChange(event) {
    if (event && event.value) {
      if (this.validateRange(event.value)) {
        this.showPicker = false;
        this._model = new Date(event.value).getTime();
        this.onChange(this._model);
        this.setViewDate(event.value);
        if (this.formAttributes.change) {
          this.formAttributes.change(event);
        }
      } else {
        this.showPicker = true;
      }
    }
  }

  getValueFromEvent(e) {
    switch (this.viewType) {
      case this.DATEVIEWTYPES.YEAR:
        return new Date(e).getFullYear();
      case this.DATEVIEWTYPES.MONTH:
        return new Date(e).getMonth();
      case this.DATEVIEWTYPES.DATETIME:
      case this.DATEVIEWTYPES.TIME:
      case this.DATEVIEWTYPES.DEFAULT:
      default:
        return new Date(e);
    }
  }

  getPlaceHolder() {
    return !this.format ? this.DEFAULT_FORMAT[this.viewType] : this.format;
  }

  setViewDate(value) {
    if (value) {
      const format = !this.format ? this.DEFAULT_FORMAT[this.viewType] : this.format;
      this.selectedViewDate = formatDate(value, format, 'en-US');
    } else {
      this.selectedViewDate = '';
    }
  }

  getDateViews() {
    switch (this.viewType) {
      case this.DATEVIEWTYPES.MONTH:
        return {
          startView: 'month',
          minView: 'month',
          maxView: 'month'
        };
        break;
      case this.DATEVIEWTYPES.YEAR:
        return {
          startView: 'year',
          minView: 'year',
          maxView: 'year'
        };
        break;
      case this.DATEVIEWTYPES.DATETIME:
        return {
          startView: 'day',
          minView: 'minute',
          maxView: 'day'
        };
        break;
      case this.DATEVIEWTYPES.TIME:
        return {
          startView: 'hour',
          minView: 'minute',
          maxView: 'hour'
        };
        break;

      case this.DATEVIEWTYPES.DEFAULT:
      default:
        return {
          startView: 'day',
          minView: 'day',
          maxView: 'year'
        };
        break;
    }
  }

  getMinDate() {
    if (this.fromDate) {
      const fd = new Date(this.fromDate);
      this.minDate.setDate(1);
      this.minDate.setMonth(6);
      this.minDate.setFullYear(2019);
    } else {
      this.minDate = null;
    }

  }

  getMaxDate() {
    if (this.toDate) {
      const td = new Date(this.toDate);
      this.maxDate.setMonth(9);
      this.maxDate.setFullYear(2019);
    } else {
      this.maxDate = null;
    }

  }

  getViewType(viewType) {
    switch (viewType) {
      case 'date':
        return 'date';
      case 'month':
        return 'month';
      case 'year':
        return 'month';
      case 'datetime':
        this.showTime = true;
        return 'date';
      case 'time':
        this.isTimeOnly = true;
        return 'time';
    }
  }

  onClickedOutside(event) {
    console.log('clicked outside ', event);
  }

  ngOnInit(): void {
    /* this.selectedDate = new Date(new Date().getTime()); */
  }

}
