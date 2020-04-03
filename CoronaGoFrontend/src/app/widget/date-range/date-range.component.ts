import { Component, OnInit, forwardRef, HostListener, Input, Renderer, ElementRef } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements ControlValueAccessor, OnInit {

  @Input() format;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;
  public disabled: boolean;

  selectedDate;
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  isShown = false;
  placeholder: string;

  constructor(calendar: NgbCalendar, private renderer: Renderer, private elementRef: ElementRef) {

  }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
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

  toggleDp() {
    this.isShown = !this.isShown;
  }

  @HostListener('document:click', ['$event'])
  onclick(e: Event) {
    if (!(e.target as HTMLInputElement).closest('.date-range-wrapper') && !(e.target as HTMLInputElement).closest('.date-range-outer')) {
      this.isShown = false;
    }
    e.stopPropagation();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    if (this.fromDate && this.toDate) {
      this.isShown = false;


      this.selectedDate = this.getFormattedSelectedDate();

      this._model = this.getDate();
      this.onChange(this._model);
    }
  }

  getFormattedSelectedDate() {
    const fd = this.fromDate;
    const td = this.toDate;
    const format = this.format || 'dd-MMM-yyyy';
    const locale = 'en-US';
    if (fd && td) {

      return `${formatDate(this.getDateObj(this.fromDate), format, locale)} - ${formatDate(this.getDateObj(this.toDate), format, locale)}`;
    } else if (fd && !td) {
      return `${formatDate(this.getDateObj(this.fromDate), format, locale)}`;
    }
    return '';
  }

  getDate(): any {
    return {
      from: this.getDateInMilliseconds(this.fromDate),
      to: this.getDateInMilliseconds(this.toDate),
    };
  }

  getDateInMilliseconds(d: NgbDate): any {
    return new Date(`${d.month}/${d.day}/${d.year}`).getTime();
  }

  getDateObj(d: NgbDate): Date {
    return new Date(`${d.month}/${d.day}/${d.year}`);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit(): void {
    this.placeholder = this.format ? `${this.format} - ${this.format}` : 'DD-MM-YYYY - DD-MMM-YYYY';
  }
}
