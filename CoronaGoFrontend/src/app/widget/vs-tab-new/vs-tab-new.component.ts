import { Component, OnInit, Input, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { VsTabmenuIntegrationService } from '@app/widget/vs-tabmenu-integration.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vs-tab-new',
  templateUrl: './vs-tab-new.component.html',
  styleUrls: ['./vs-tab-new.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VsTabNewComponent implements OnInit, AfterViewChecked {


  public tabConfig: any;
  public tabHeight = {
    height: '0px'
  };

  constructor(private tabMenuIntegration: VsTabmenuIntegrationService, private router: Router) { }

  isAlreadyNavigated: boolean;
  firstPath: string;

  checkIfDetailPage(path, url) {
    if (!path) return false;
    const detailPagePath = path.substring(path.lastIndexOf('/') + 1);
    if (url.indexOf('fp=' + detailPagePath) > -1) {
      return true;
    }
    return false;
  }

  navigateToFirstPath(tab, url): void {
    if (tab.path && (url.indexOf(tab.path) > -1) && !this.isAlreadyNavigated) {
      console.log('tab.path ', tab.path);

      this.router.navigateByUrl(tab.path);
      this.isAlreadyNavigated = true;
    } else if (tab.path && (this.checkIfDetailPage(tab.path, url)) && !this.isAlreadyNavigated) {
      let urlToNavigate = url;
      if (/(http(s?)):\/\//gi.test(url)) {
        urlToNavigate = window.location.hash.substring(1);;
      }
      this.router.navigateByUrl(urlToNavigate);
      this.isAlreadyNavigated = true;
    } else if (tab.path && !this.firstPath) {
      this.firstPath = tab.path;
    }

    const iterator = tab.subTabs ? tab.subTabs : Array.isArray(tab) ? tab : [];
    if (iterator) {
      iterator.map(subtab => {
        this.navigateToFirstPath(subtab, url);
      });
    }
  }

  subscribeForTabChanges() {
    this.tabMenuIntegration.tabChanges.subscribe(tab => {
      const href = window.location.href;
      if (tab && tab.length) {
        this.tabConfig = tab;
        this.firstPath = '';
        this.navigateToFirstPath(tab, href);
        if (!this.isAlreadyNavigated) {
          console.log('First Path ', this.firstPath);
          if (!this.firstPath) {
            this.firstPath = href.split('#')[1];
          }
          this.router.navigateByUrl(this.firstPath);
        }
        this.isAlreadyNavigated = false;
      } else {
        this.tabConfig = [];
        //this.router.navigateByUrl(href.split('#')[1]);
      }

    });
  }

  removeAllActive() {
    this.tabConfig.map(tb => {
      tb.active = false;
    });
  }

  handleTabClick(tab, tabConfig, tabGrandConfig?) {
    this.removeAllActive();
    tab.active = true;

    this.tabMenuIntegration.changeTab({
      subMenus: tabGrandConfig ? tabGrandConfig : tabConfig
    });
  }

  handleSubTabClick(tab, tabConfig, tabGrandConfig?) {
    console.log('tab :: ', tab, tabConfig);
    this.removeAllActive();
    tab.active = true;
  }

  getHeight() {
    const firstLevel = document.querySelector('.tab-fl');
    const secondLevel = document.querySelector('.tab-sl');

    return (firstLevel && secondLevel)
      ? '80px'
      : (!firstLevel && !secondLevel)
        ? '0'
        : '45px';
  }

  ngOnInit() {
    this.subscribeForTabChanges();
  }

  ngAfterViewChecked(): void {
    this.tabHeight.height = this.getHeight();
  }

}
