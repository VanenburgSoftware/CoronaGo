/**
 * Tab Bar Component
 * @example
 * <app-vs-tab [tabConfig]="tabConfig" (loadTab)='tabAction($event)' (initComplete)='tabInitComplete($event)'></app-vs-tab>
 * @attributes,
 * tabConfig - list of tabs with all properties
 * loadTab - Action on when clicking on the Tab.
 * initComplete - Method will be invoked when tab is loaded
 */

import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ActionsecurityService } from '../securityevaluation.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-vs-tab',
  templateUrl: './vs-tab.component.html',
  styleUrls: ['./vs-tab.component.scss']
})
export class VsTabComponent implements OnInit, AfterViewInit {
  tabdata: any[];
  workflowMatrix: any;
  level: any;
  constructor(private securityService: ActionsecurityService, private router: Router) {
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    if (snapshot && snapshot['_root']){
      this.level = snapshot['_root'].value.queryParams.m;
    }
    if (!this.level) {
      let urlSplit = window.location.href.split(';');
      if (urlSplit.length > 1) {
        urlSplit = urlSplit.splice(1);
        for (const val in urlSplit) {
          if (urlSplit[val].indexOf('m=') > -1) {
            this.level = urlSplit[val].split('m=')[1];
          }
        }
      }
    }
  }

  /**
   * Get the Tab configuration information from components
   */
  @Input() tabConfig: any;

  /**
   * Emit an event when the component is loaded.
   */
  @Output() initComplete: any = new EventEmitter();

  /**
   * Emit an event when user click on a tab.
   */
  @Output() loadTab: any = new EventEmitter();

  /**
   * Mehod to build the tab with all security evaluation
   * @param tabData
   */
  buildTab(tabData: any) {
    if (!tabData) { return; }
    if (tabData.securityEvaluation !== false && tabData.securityJson) {
      this.workflowMatrix = tabData.securityJson;
      this.tabdata = this.securityService.evaluateSecurityRights(tabData, tabData.securityJson);
    } else {
      this.tabdata = tabData;
    }
  }
  /**
   * Method to handlle click event on each tab
   * @param Tab
   */
  tabClick(Tab: any): void {
    Tab.active = true;
    this.loadTab.emit(Tab);
  }
  ngOnInit() {
    this.buildTab(this.tabConfig.tabItems);
  }
  ngAfterViewInit(): void {
    /**
     * When the navigation happened from menu we need to hide the respective tabs and its parent tabs
     */
    if (this.level) {
      const levels = ['first', 'second', 'third', 'fourth'];
      let val = 0;
      for (const itm of levels) {
        if (Number(val) === this.level - 1) {
          $('.vs-tab ul.' + itm).addClass('main');
          break;
        }
        $('.vs-tab ul.' + itm).addClass('hidden');
        val++;
      }
    }
    this.initComplete.emit(this.tabdata);
  }
}
