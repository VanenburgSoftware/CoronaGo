import { Component, OnInit, Input, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { VsFormComponent } from '@app/widget/vs-form/vs-form.component';

@Component({
  selector: 'app-form-tabs',
  templateUrl: './form-tabs.component.html',
  styleUrls: ['./form-tabs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTabsComponent),
      multi: true
    }
  ]
})
export class FormTabsComponent implements ControlValueAccessor, OnInit {
  @Input() tabconfig: any;

  tabdata: any = {};

  public _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  data: any;

  constructor() { }

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

  dataChanged(data) {
    console.log(data);
  }

  ngOnInit() {
    console.log(this.tabconfig);
    console.log(this.tabdata);
  }

}
