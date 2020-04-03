import { Component, OnInit, forwardRef, Input, ViewChild, ViewEncapsulation, Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from '@app/app-constants';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageCarouselComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class ImageCarouselComponent implements OnInit, ControlValueAccessor {

  @Input() objectKey: string;
  @Input() fieldName: string;
  @Input() uploadUrl: string;
  @Input() downloadUrl: string;

  @ViewChild('carousel', { read: true }) carousel: NgbCarousel;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;


  images = [];
  selectedFile = [];
  selectedFileDisplay: string;
  isFromUrl = false;
  loading = false;
  disabled: boolean;

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  get model() {
    return this._model;
  }

  writeValue(value: any): void {
    this.setImagesToCarousel(value);
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
    const files = event.target.files;
    console.log(files);
    if (files) {

      for (const file of files) {
        // tslint:disable-next-line:no-string-literal
        file['objectKey'] = this.objectKey;
        // tslint:disable-next-line:no-string-literal
        file['fieldName'] = this.fieldName;
        this.selectedFile.push(file);
        this.previewImage(file);
      }
      this._model = [...this._model, ...this.selectedFile];
      this.onChange(this._model);
    }
  }

  private previewImage(file) {
    if (file) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.loading = false;
        this.isFromUrl = false;
        this.images.push(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  removeImage(image) {
    this.images = this.images.filter(img => img !== image);
    this.onChange(this.images);
  }

  setImagesToCarousel(imageArr) {
    if (!imageArr) {
      return;
    }
    const baseUrl = '';
    this.images = [];
    imageArr.forEach(element => {
      // TODO: append baseUrl and element
      if (element) {
        this.selectedFile.push(element);
        this.images.push(AppConstants.apihost + AppConstants.fileDownloadUrl + element.id);
      }
    });
    //this._model = this.selectedFile;
    //this.onChange(this._model);
  }

  ngOnInit() {
    if (this.carousel) {
      this.carousel.pause();
    }
  }

}
