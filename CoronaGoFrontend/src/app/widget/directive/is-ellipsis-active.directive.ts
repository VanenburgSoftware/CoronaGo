import { Directive, AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[appIsEllipsisActive]'
})
export class IsEllipsisActiveDirective {
  @ViewChild('t') tooltip: NgbTooltip;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter', [ '$event' ])
  showContent(event) {
    const element = this.elementRef.nativeElement;
    if (element.offsetWidth < element.scrollWidth) {
      element.title = element.innerHTML;
    }
  }
}
