import { Component, OnInit, forwardRef, Input, Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppConstants } from '@app/app-constants';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploaderComponent),
      multi: true
    }
  ]
})
export class ImageUploaderComponent implements ControlValueAccessor {

  @Input() objectKey: string;
  @Input() fieldName: string;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  selectedFile: File = null;
  selectedFileDisplay: string;
  isFromUrl = false;
  loading = false;
  disabled: boolean;

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this.showImageFromUrl(value);
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

  public onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      // If selected file exist make upload request
      // tslint:disable-next-line:no-string-literal
      this.selectedFile['objectKey'] = this.objectKey;
      // tslint:disable-next-line:no-string-literal
      this.selectedFile['fieldName'] = this.fieldName;
      console.log(this.selectedFile);
      this.loading = true;
      this.previewImage();
      this._model = this.selectedFile;
      this.onChange(this._model);
    }
  }

  private previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.loading = false;
        this.isFromUrl = false;
        this.selectedFileDisplay = event.target.result;
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  public removeSelectedImage(event: MouseEvent) {
    this.selectedFile = null;
    this.selectedFileDisplay = null;
    this._model = this.selectedFile;
    this.onChange(this._model);
    event.preventDefault();
  }

  private showImageFromUrl(url) {
    if (url) {
      this.isFromUrl = true;
      if (url instanceof Array && url[0]) {
        this.selectedFileDisplay = AppConstants.apihost + AppConstants.fileDownloadUrl + (url[0].id ? url[0].id : url[0]);
      }
    }
  }

}
