import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDateService {
  format: string;
  constructor() { }

  setFormat(format: string): void {
    this.format = format;
  }

  getFormat(): any {
    return this.format;
  }

}
