import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formAttributes]'
})

export class FormAttributeDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('formAttributes') formAttributes: any;
  @Output() e = new EventEmitter();


  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover', ['$event']) onMouseOver() {
    if (this.formAttributes && this.formAttributes.mouseover) {
      this.formAttributes.mouseover(event);
    }
  }

  @HostListener('mouseout', ['$event']) onMouseOut() {
    if (this.formAttributes && this.formAttributes.mouseout) {
      this.formAttributes.mouseout(event);
    }
  }

  @HostListener('click', ['$event']) onClick() {
    if (this.formAttributes && this.formAttributes.click) {
      this.formAttributes.click(event);
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    if (this.formAttributes && this.formAttributes.keydown) {
      this.formAttributes.keydown(event);
    }
  }

  @HostListener('change', ['$event']) onChange(event) {
    if (this.formAttributes && this.formAttributes.change) {
      this.formAttributes.change(event);
    }
  }

  @HostListener('focus', ['$event']) onFocus(event) {
    if (this.formAttributes && this.formAttributes.focus) {
      this.formAttributes.focus(event);
    }
  }

  @HostListener('blur', ['$event']) onBlur(event) {
    if (this.formAttributes && this.formAttributes.blur) {
      this.formAttributes.blur(event);
    }
  }

}
