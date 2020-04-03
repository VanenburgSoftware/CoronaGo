/**
 * Caption Bar Component
 * @example
 * <app-vs-captionbar [captionbarConfig]="captionbarData" (clickAction)='captionbarAction($event)'
 * (callback)='captionBarInitComplete($event)'></app-vs-captionbar>
 * @params,
 * captionConfig - list of caption bar contents and its properties
 * clickAction - Action on when clicking on the captionbar content.
 * callback - callback method invoked when caption bar is loaded
 */

import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { AppConstants } from '@app/app-constants';

@Component({
  selector: 'app-vs-captionbar',
  templateUrl: './vs-captionbar.component.html',
  styleUrls: [ './vs-captionbar.component.scss' ]
})
export class VsCaptionbarComponent implements OnInit, AfterViewInit {
  captionbarData: any[];
  cSelected: string;
  cDetails: any[];
  cModules: any[];
  moduleClass: any;
  detailClass: any;
  currentModule: string;
  hasDetails: boolean;
  hasModules: boolean;
  selectModule: (option: any) => void;
  status: { isopen: boolean; };
  capElemMap: any;
  isMobile: boolean;
  incHeight: boolean;

  constructor() { }

  @Input() captionbarConfig: [];

  @Output() callback: any = new EventEmitter();

  @Output() clickAction: any = new EventEmitter();

  buildCaptionBar(captionbarData: any) {
    if (typeof captionbarData.details === 'undefined') {
      return;
    }
    this.cSelected = captionbarData.currentModule;
    this.cDetails = captionbarData.details;
    this.cModules = captionbarData.modules;
    this.moduleClass = captionbarData.moduleClass ? captionbarData.moduleClass : 'col-md-3';
    this.detailClass = captionbarData.detailClass ? captionbarData.detailClass : 'col-md-9';
    this.currentModule = this.cSelected;

    this.hasDetails = (this.cDetails.length > 0) ? true : false;
    this.hasModules = (this.cModules.length > 0) ? true : false;

    this.selectModule = function (option) {
      this.currentModule = option.label;
    };
    this.status = {
      isopen: false
    };
    this.captionbarData = captionbarData;
  }
  getTitle(content: any) {
    //return $($.parseHTML(content)).text();
  }
  captionClick(caption: any): void {
    this.clickAction.emit(caption);
  }
  /**
   * Method to set captions to map a single object for easy manipulation
   * @param caption array
   */
  mapCaptionElement(captions: any) {
    if (captions && captions.length > 0) {
      for (const val of captions) {
          this.capElemMap[val.name] = val;
      }
    }
  }
  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
    this.capElemMap = {};
    this.buildCaptionBar(this.captionbarConfig);
  }

  ngAfterViewInit(): void {
    this.mapCaptionElement(this.cDetails);
    this.callback.emit({
      config: this.captionbarData,
      elementMap: this.capElemMap
    });
  }

}
