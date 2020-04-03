/**
 * @author Linta Augustine
 *
 * Menu Component
 *
 * @example
 *  <app-vs-menu
 *   [sticky]="topbarConfig?.menuConfig?.sticky"
 *   [menuConfig]='topbarConfig?.menuConfig'>
 *  </app-vs-menu>
 * @attributes,
 * menuConfig - list of menuitems with all its properties and definition for menu type.
 * toggleMenu - Based on menu type open/close | open/Collapse menu.
 */

import { VsMenuService } from './vs-menu.service';
import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';
import { AppConstants } from '@app/app-constants';

@Component({
  selector: 'app-vs-menu',
  templateUrl: './vs-menu.component.html',
  styleUrls: ['./vs-menu.component.scss'],
  animations: [
    /**
     * Animation definitions for Menu actions
     * Open, Close, Collapse, Overlay
     */
    trigger('fade', [
      state('close', style({ opacity: 0, display: 'none' })),
      state('open', style({ opacity: 1, display: 'block' })),
      state('collapse', style({ display: 'none', width: AppConstants.collapsedMenuWidth })),
      state('overlay', style({ display: 'block', width: AppConstants.menuWidth, 'z-index': 1000 })),
      transition('open => collapse', [
        style({ width: AppConstants.menuWidth }),
        animate(`${AppConstants.animationDuration} linear`, style({ width: AppConstants.collapsedMenuWidth }))
      ]),
      transition('collapse => open', [
        style({ width: AppConstants.collapsedMenuWidth, display: 'block' }),
        animate(`${AppConstants.animationDuration} linear`, style({ width: AppConstants.menuWidth }))
      ]),
      transition('close => void,open => close', [
        animate(`${AppConstants.animationDuration} linear`, style({ opacity: 0, display: 'none' }))
      ]),
      transition('close => open,open => open,void => open', [
        style({ opacity: 0.1, display: 'block' }),
        animate(`${AppConstants.animationDuration} linear`, style({ opacity: 1 }))
      ]),
      transition('collapse=>overlay', [
        style({ width: AppConstants.collapsedMenuWidth }),
        animate(`${AppConstants.animationDuration} linear`, style({ width: AppConstants.menuWidth }))
      ]),
      transition('overlay => collapse', [
        style({ width: AppConstants.menuWidth }),
        animate(`${AppConstants.animationDuration} linear`, style({ width: AppConstants.collapsedMenuWidth }))
      ])
    ])
  ]
})
export class VsMenuComponent implements OnInit {
  menuState: string;
  @Input() sticky: boolean;
  @Input() menuConfig: any;
  menu: MenuItem[];
  hasMenuItems: boolean;

  constructor(private menuService: VsMenuService) { }

  ngOnInit() {
    this.menuState = 'close';
    this.menu = this.menuConfig.menuItems;
    this.hasMenuItems = this.menu && this.menu.length > 0;
    if (AppConstants.isMobile) {
      this.sticky = true;
    }
    if (this.sticky && !AppConstants.isMobile) {
      this.menuState = 'open';
    }
    if (this.sticky && !this.menuConfig.left) {
      throw console.error('Menu configured incorrectly.Right side sticky menu is not possible');
    }
  }

  /*
   *  Open / Close Menu based on animation states for non sticky menus
   *
   *  Open / Collapse Menu based on animation states for sticky menus
   *
   */
  toggleMenu() {
    this.menuState = (this.menuState === 'open') ? !this.sticky ? 'close' : 'collapse' : 'open';
    if (this.sticky) {
      this.menuService.emit(this.menuState);
    }
  }

  /*
   * Checks menu is in collapsed state or not
   */
  isCollapsed() {
    return this.menuState === 'collapse';
  }

  /*
   * Checks menu is nonsticky
   */
  isLeftNonStickyMenu() {
    return this.menuConfig.left && !this.sticky;
  }

  /**
   * Open /collapse overlay menu while hovering collapsed menu
   */
  toggleOverlayStickyMenu() {
    if ((this.sticky && this.menuState === 'open') || !this.sticky) {
      return;
    }
    this.menuState = (this.menuState === 'overlay') ? 'collapse' : 'overlay';
  }

}
