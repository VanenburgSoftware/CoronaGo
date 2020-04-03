import { Component, OnInit, forwardRef, Input, Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { UtilService } from '@app/core/util.service';

@Component({
  selector: 'app-input-link',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputLinkComponent),
      multi: true
    }
  ]
})
export class InputLinkComponent implements ControlValueAccessor {

  @Input() multivalue: boolean;
  @Input() element: any;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  private link: any = null;
  public editing: boolean;
  public urlError: boolean;
  public disabled: boolean;

  constructor(private Utils: UtilService, private renderer: Renderer, private elementRef: ElementRef) {
    this.editing = false;
    this.urlError = false;
  }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this.setValueToLink(value);
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

  makeEditable() {
    if (this.multivalue && this.link) {
      this.link = this.link.join(', ');
    }
    this.editing = true;
  }

  finishEditing() {
    if (this.multivalue) {
      console.log(this.link);
      const linkArr = [];
      let tempLinkArr;
      if (!(this.link instanceof Array)) {
        tempLinkArr = this.link.split(',');
      } else {
        tempLinkArr = this.link;
      }

      if (!tempLinkArr.length) {
        this.editing = false;
        this.urlError = false;
      } else {
        tempLinkArr.forEach(link => {
          if (!this.Utils.isValidUrl(link)) {
            this.urlError = true;
            return;
          } else {
            linkArr.push(this.makeUrlAbsolute(link));
          }
        });

        this.link = linkArr;
        console.log(this.link);
        this._model = this.link;
        this.onChange(this._model);
        this.editing = false;
        this.urlError = false;
      }
    } else {
      if (this.link && !this.Utils.isValidUrl(this.link)) {
        this.urlError = true;
      } else if (this.link && this.Utils.isValidUrl(this.link)) {
        this.editing = false;
        this.urlError = false;
        this.link = this.makeUrlAbsolute(this.link);
        this._model = this.link;
        this.onChange(this._model);
      } else {
        this.editing = false;
        this.urlError = false;
      }
    }
  }

  makeUrlAbsolute(link) {
    const httppattern = /^(https?|http):\/\/[^\s$.?#].[^\s]*$/gm;
    link = link.trim();
    if (!link.match(httppattern)) {
      return `http://${link}`;
    }
    return link;
  }

  setValueToLink(value) {
    this.link = value;
  }

}
