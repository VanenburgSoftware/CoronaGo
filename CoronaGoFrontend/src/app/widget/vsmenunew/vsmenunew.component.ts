import { Component, OnInit, Input, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppConstants } from '@app/app-constants';
import { VsTabmenuIntegrationService } from '@app/widget/vs-tabmenu-integration.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';

@Component({
  selector: 'app-vsmenunew',
  templateUrl: './vsmenunew.component.html',
  styleUrls: ['./vsmenunew.component.scss'],
  animations: [
    trigger('fade', [
      state('close', style({ width: 0, display: 'none' })),
      state('open', style({ opacity: 1, display: 'block' })),
      transition('close => open, void => open', [
        style({ width: '0px' }),
        animate(`${AppConstants.animationDuration} linear`, style({ width: '350px' }))
      ]),
      transition('open => close, close => void', [
        style({ width: '350px' }),
        animate(`${AppConstants.animationDuration} linear`, style({ width: '0px' }))
      ]),
    ])
  ]
})
export class VsmenunewComponent implements OnInit, AfterViewInit {


  @Input() menuConfig: any = [];
  @Input() isMenuOpen: boolean;

  loadCount = 0;
  menuState: string;
  isInit = true;
  currentMenu: any;
  isMobile: boolean;

  getHeight(elem, id) {
    const curelem = document.getElementById(elem + id);
    const height = window.innerHeight - curelem.offsetTop;
    return height;
  }

  handleMouseEnter(e) {
    const curTarget = $(e.currentTarget).children('.submenu-wrap');
    $(curTarget).addClass('active');
    const ht = $(curTarget).height();
    const top = $(curTarget).offset() ? $(curTarget).offset().top : 0;
    if (ht + top > $(window).height()) {
      $(curTarget).css({
        top: 'auto',
        bottom: '0px'
      });
    }
    $('.opened-tabs').css('z-index', 9);
  }

  handleMouseLeave(e) {
    $(e.currentTarget).children('.submenu-wrap').removeClass('active');
    $('.opened-tabs').css('z-index', 9999);
  }

  constructor(private tabMenuIntegration: VsTabmenuIntegrationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  checkIfDetailPage(path, url) {
    if (!path) return false;
    const detailPagePath = path.substring(path.lastIndexOf('/') + 1);
    if (url.indexOf('fp=' + detailPagePath) > -1) {
      return true;
    }
    return false;
  }

  isTabMenu(menu) {
    return menu.filter(m => m.tab === true);
  }

  shouldLoadTab(menu, url) {
    let tabToLoad = [];
    for (let i = 0; i < menu.length; i++) {
      const curMenu = menu[i];
      if (curMenu.path === url) {
        tabToLoad = this.isTabMenu(menu).length ? menu : curMenu;
        break;
      } else if (this.checkIfDetailPage(curMenu.path, url)) {
        tabToLoad = this.isTabMenu(menu).length ? menu : curMenu;
        break;
      } else if (curMenu.subMenus && curMenu.subMenus.length) {
        this.currentMenu = curMenu;
        this.shouldLoadTab(curMenu.subMenus, url);
      } else if (curMenu.subTabs && curMenu.subTabs.length) {
        this.currentMenu = curMenu;
        this.shouldLoadTab(curMenu.subTabs, url);
      }
    }

    if (tabToLoad.length) {
      this.tabMenuIntegration.changeTab({
        subTabs: [this.currentMenu]
      });
    } else {
      if (!this.loadCount) {
        this.router.navigateByUrl(window.location.hash.substring(1));
        this.loadCount++;
      }
    }

  }

  watchRouteChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: NavigationEnd) => {
        this.shouldLoadTab(this.menuConfig.menuItems, event.url);
      });
  }

  setActiveForParent(child, parent) {
    const parentId = child.parentId;
    let isParentFound = false;
    parent.map(item => {
      if (item.id === parentId) {
        item.active = true;
        isParentFound = true;
        if (item.parentId) {
          this.setActiveForParent(item.parentId, parent);
        }
      }
      return item;
    });

    if (!isParentFound) {
      // do logic to find parent
    }

  }

  setActiveMenus(menus: any[]) {
    const href = window.location.href;
    menus.map(menu => {
      if (menu.path && href.indexOf(menu.path) > -1) {
        menu.active = true;
        this.setActiveForParent(menu, menus);
      } else if (menu.subMenus && menu.subMenus.length) {
        this.setActiveMenus(menu.subMenus);
      } else if (menu.subTabs && menu.subTabs.length) {
        this.setActiveMenus(menu.subTabs);
      }
      return menu;
    });
  }

  checkIfReloaded() {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        return true;
      } else {
        return true;
      }
    }
    return false;
  }

  watchMenuOpenState() {
    this.tabMenuIntegration.menuOpenChanges.subscribe(data => {
      this.isMenuOpen = data;
    });
  }

  closeMenu() {
    // this.isMenuOpen = false;
    this.tabMenuIntegration.changeMenuOpenState(false);
  }

  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
    this.watchRouteChange();
    this.watchMenuOpenState();
  }

  ngAfterViewInit(): void {
    this.setActiveMenus(this.menuConfig.menuItems);
  }

}
