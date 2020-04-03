import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-vs-scanner',
  templateUrl: './vs-scanner.component.html',
  styleUrls: ['./vs-scanner.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VsScannerComponent),
      multi: true
    }
  ]
})
export class VsScannerComponent implements OnInit, ControlValueAccessor {

  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  public barcodeValue;

  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  public scanEnabled = false;

  public allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX]

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

  scanSuccessHandler(e: Event) {
    console.log('Success ', e);
    this.scanEnabled = false;
  }

  scanErrorHandler(e: Event) {
    console.log('Error ', e);
    this.scanEnabled = false;
  }

  scanFailureHandler(e: Event) {
    console.log('Failure ', e);
    this.scanEnabled = false;
  }

  scanCompleteHandler(e: Event) {
    console.log('Complete ', e);
    this.scanEnabled = false;
  }

  toggleScan() {
    if (this.scanEnabled) {
      this.scanEnabled = false;
      this.barecodeScanner.stop();
    } else {
      this.scanEnabled = true;
      this.barecodeScanner.start();
    }

  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started) {
    console.log(started);
  }

  ngOnInit() {
  }

}
