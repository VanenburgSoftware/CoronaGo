import { Component, OnInit, forwardRef, Input, ViewEncapsulation, Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class FileUploaderComponent implements ControlValueAccessor {

  @Input() objectKey: string;
  @Input() multivalue: boolean;
  @Input() fieldName: string;
  @Input() element: any;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  selectedFile: any = undefined;
  fileName: string;
  fileNameArr = [];
  public disabled: boolean;

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this.showUrlsFromData(value);
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

  onFileSelected(event) {
    if (!this.multivalue) {
      this.selectedFile = event.target.files[0] as File;
      if (this.selectedFile) {
        this.fileName = this.selectedFile.name;
        // tslint:disable-next-line:no-string-literal
        this.selectedFile['objectKey'] = this.objectKey;
        // tslint:disable-next-line:no-string-literal
        this.selectedFile['fieldName'] = this.fieldName;
        this._model = this.selectedFile;
        this.onChange(this._model);
      }
    } else {
      if (this.selectedFile === undefined) {
        this.selectedFile = [];
      }
      const files = event.target.files;

      if (files) {
        const tempArr = [];
        for (const file of files) {
          this.fileNameArr.push(file.name);
          // tslint:disable-next-line:no-string-literal
          file['objectKey'] = this.objectKey;
          // tslint:disable-next-line:no-string-literal
          file['fieldName'] = this.fieldName;
          tempArr.push(file);
        }
        if (!this._model) {
          this._model = [];
        }
        this._model = [...this._model, ...tempArr];
        this.onChange(this._model);
      }
    }
  }

  removeFile(file) {
    let tempArr = this._model;
    this.fileNameArr = [];
    tempArr = tempArr.filter(f => {
      console.log(f.name);
      if ((f.name !== file && f.name) || (!f.name && f !== file)) {
        this.fileNameArr.push(f.name);
      }
      return (f.name && f.name !== file) || (!f.name && f !== file);
    });
    this._model = tempArr.filter(arr => !!arr);
    this.onChange(this._model);
  }

  private showUrlsFromData(urls) {
    if (urls && urls.length) {
      this.fileNameArr = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < urls.length; i++) {
        if (urls[i]) {
          this.fileNameArr.push(urls[i]);
        }
      }
    }
  }

}
