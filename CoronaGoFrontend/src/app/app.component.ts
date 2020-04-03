import { AppGlobalService } from './app-global.service';
import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { VsMenuService } from './widget/vs-menu/vs-menu.service';
import { AuthenticationService } from './auth/authentication.service';
import { User } from './auth/user.model';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { AppConstants } from './app-constants';

// tslint:disable-next-line:ban-types
declare let ga: Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Libraries';

  public topbarConfig: any;

  isExpandedMenu: boolean;
  /** Check menu is sticky or not */
  isStickyMenu: boolean;

  menuStateChangeSub: Subscription;
  userSubscription: Subscription;
  isTab: boolean;
  isMobile: boolean;
  tabs: any = [];
  isShowTabList = false;
  isCollapsedMenu = false;
  showLogin = true;

  constructor(private menuService: VsMenuService, private translate: TranslateService,

    private auth: AuthenticationService, private route: ActivatedRoute, private router: Router, private appGlobalService: AppGlobalService) {
    /* fallback language when a translation isn't found in the current language */
    translate.setDefaultLang('en');
    translate.use('en');

    /**
     * Expand and collpase page container area based on the menustate change value
     */
    this.menuStateChangeSub = this.menuService.menuStateChange.subscribe(data => {
      this.isExpandedMenu = (data === 'open');
    });

  }

  handleLogin() {
    this.userSubscription = this.auth.authenticate().subscribe(
      (data: User) => {
        if (data) {
          this.showLogin = false;
          let userName = '';
          userName = data.firstName ? (userName + data.firstName) : userName;
          userName = data.lastName ? (userName + ' ' + data.lastName) : userName;

          if (!userName) {
            userName = data.email;
          }

          this.topbarConfig.data = {};
          this.topbarConfig.data.userName = userName;

          this.topbarConfig.menuConfig = data.menu;
          this.isStickyMenu = this.topbarConfig.menuConfig.sticky;
          //this.router.navigateByUrl('/homescreen/homescreendetail');
        }
      }, (err) => {
        this.showLogin = true;
      });
  }


  ngOnInit() {

    this.loadTopbarConfig();
    this.isMobile = AppConstants.isMobile;
    this.showLogin = true;

    /* this.userSubscription = this.auth.authenticate().subscribe(
      (data: User) => {
        if (data) {
          let userName = '';
          userName = data.firstName ? (userName + data.firstName) : userName;
          userName = data.lastName ? (userName + ' ' + data.lastName) : userName;

          if (!userName) {
            userName = 'Admin';
          }

          this.topbarConfig.data = {};
          this.topbarConfig.data.userName = userName;

          this.topbarConfig.menuConfig = data.menu;
          this.isStickyMenu = this.topbarConfig.menuConfig.sticky;
        }
      }, (err) => {
        this.showLogin = true;
      }); */

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // TODO: add file for hook handler and show spinner
      }

      if (event instanceof NavigationEnd) {
        // TODO: add file for hook handler and hide spinner
        this.isTab = false;
        if (event.urlAfterRedirects.indexOf('/tab/') > -1 || event.urlAfterRedirects === '/tab') {
          this.isTab = true;
        }

        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

        this.handleNavigationEnd(event);
      }

      if (event instanceof NavigationError) {
        // TODO: add file for hook handler and show notification
        console.log(event.error);
      }
    });

    this.loginUser();

  }

  handleNavigationEnd(event) {
    let route = this.route.firstChild;
    let child = route;

    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
        route = child;
      } else {
        child = null;
      }
    }

    route.data.subscribe(data => {
      this.resetAllTabs();
      console.log(route);
      if (!AppConstants.isFromTab && !this.checkIfTabExists(data, event).length) {

        this.tabs.push({
          label: data.label || event.urlAfterRedirects,
          url: window.location.hash.substr(1), // event.urlAfterRedirects,
          component: route.component,
          fromTab: true,
          active: true,
          params: route.snapshot.params || ''
        });
      } else {
        this.loadTabFromList(data.label || event.urlAfterRedirects);
      }
      AppConstants.isFromTab = false;
    });
  }

  checkIfTabExists(data, event) {
    return this.tabs.filter(tab => {
      return tab.label === data.label || tab.label === event.urlAfterRedirects;
    });
  }

  resetAllTabs() {
    this.tabs.map(tab => {
      tab.active = false;
      return tab;
    });
  }

  loadTabFromList(label) {
    this.tabs.map(tab => {
      if (tab.label === label) {
        tab.active = true;
      }
      return tab;
    });
  }

  loadThisTab(tab) {
    AppConstants.isFromTab = true;
    this.resetAllTabs();
    tab.active = true;
    if (tab.url.indexOf(';')) {
      tab.url = tab.url.split(';')[ 0 ];
    }
    this.router.navigate([ tab.url, tab.params ]);
    this.isShowTabList = false;
  }

  removeThisTab(tab) {
    this.tabs = this.tabs.filter(item => item.label !== tab.label);
  }

  toggleLeftMenu() {
    this.isCollapsedMenu = !this.isCollapsedMenu;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }

  move(direction) {
    const elem = $('#openedTabsHorzWrap');
    const scrollLeft = elem.scrollLeft();
    if (direction === 'left') {
      //elem.scrollLeft(scrollLeft - 100);
      elem.animate({ scrollLeft: '-=200' }, 500);
    } else if (direction === 'right') {
      //elem.scrollLeft(scrollLeft + 100);
      elem.animate({ scrollLeft: '+=200' }, 500);
    }
  }

  private loadTopbarConfig(): void {
    this.topbarConfig = {
      langConfig: [
        {
          label: 'EN',
          flagIcon: 'en',
          value: 'en'
        },
        {
          label: 'FR',
          flagIcon: 'fr',
          value: 'fr'
        },
        {
          label: 'NL',
          flagIcon: 'nl',
          value: 'nl'
        },
      ]
    };
  }

  loginUser() {
    this.handleLogin();
  }

  ngOnDestroy() {
    this.menuStateChangeSub.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
