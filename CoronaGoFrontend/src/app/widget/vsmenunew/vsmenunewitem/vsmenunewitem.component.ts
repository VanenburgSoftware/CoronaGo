import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VsTabmenuIntegrationService } from '@app/widget/vs-tabmenu-integration.service';
import { AppConstants } from '@app/app-constants';
import { uniq } from 'lodash';

@Component({
  selector: 'app-vsmenunewitem',
  templateUrl: './vsmenunewitem.component.html',
  styleUrls: ['./vsmenunewitem.component.scss']
})
export class VsmenunewitemComponent implements OnInit {

  @Input() menu: any;
  @Input() menuLevel: number;

  @ViewChild('menuRouter') menuRouter: ElementRef;

  isMobile: boolean;

  constructor(private activatedRoute: ActivatedRoute, private tabMenuIntegration: VsTabmenuIntegrationService) { }

  getIconClass(menu) {
    const fontBaseClass = menu.useIconFrom ? this.getFontBaseClass(menu.useIconFrom) : 'fa';
    const icon = menu.icon ? menu.icon : 'fa-database';
    return `${fontBaseClass} ${icon}`;
  }

  getFontBaseClass(iconfrom) {
    switch (iconfrom) {
      case 'Font Awesome': return 'fa';
      case 'Material': return 'fa';
      default: return 'fa';
    }
  }

  checkIfActive(menuObj: any): boolean {

    const menu = menuObj.path;
    if (!menu) {
      return false;
    }
    const paths = menu.split('/');
    let isActive = false;
    const href = window.location.href;
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      if (path && href.indexOf(path) > -1) {
        this.tabMenuIntegration.changeTab(menuObj);
        menuObj.active = true;
        isActive = true;
        break;
      }
    }

    return isActive;
  }

  checkForActive(menuObj: any): boolean {
    const path = menuObj.path;
    const url = window.location.href;
    if (url.indexOf(path) > -1) {
      return true;
    }
    return false;
  }

  handleMenuClick(e: Event, menu: any) {
    if (menu.subTabs) {
      this.tabMenuIntegration.changeTab(menu);
      this.tabMenuIntegration.changeMenuOpenState(false);
    } else {
      this.tabMenuIntegration.changeTab([]);
    }

    if (menu.subMenus && menu.subMenus.length) {
      this.tabMenuIntegration.changeMenuOpenState(true);
    } else if (menu.path && menu.path.length) {
      this.tabMenuIntegration.changeMenuOpenState(false);
    } else {
      this.tabMenuIntegration.changeMenuOpenState(false);
    }
    e.stopPropagation();
  }

  isActive(menu) {
    // console.log("MENU :: ", menu);
    const urlHash = window.location.hash;
    const hashArr = urlHash.split('/').splice(1);
    if (menu.pathsInvolved && menu.pathsInvolved.length) {
      const matched = menu.pathsInvolved.filter((p) => {
        const pArr = p.split('/');
        const finalArr = [...pArr, ...hashArr];
        return uniq(finalArr).length !== finalArr.length;
      });
      if (matched.length) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
  }

}
