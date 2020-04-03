import { AppConstants } from '@app/app-constants';
import { MenuItem } from './../menu-item.model';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';
export enum IconTypes {
  FontAwesome,
  Material,
  AppDirectory
}

@Component({
  selector: 'app-vs-nav-item',
  templateUrl: './vs-nav-item.component.html',
  styleUrls: [ './vs-nav-item.component.scss' ],
  animations: [
    trigger('fadeIn', [
      transition('void<=>*', [
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class VsNavItemComponent implements OnInit {
  @Input() menuItems: MenuItem[];
  @Input() level: number;

  @Input() sticky: boolean;
  @Input() menuState: string;

  @Output() toggle = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('menu item ', this.menuItems);
  }

  /**
   * Check for identifying first element in the menu array
   *
   * @param first:boolean ,level:number
   */
  checkForFirstElement(first: boolean, level: number) {
    return (first && level === 1);
  }

  /**
   * Open or collapse menu item and navigate to the given url
   *
   * @Param menuItem:any ,$event
   */

  loadNextLevelMenuAndDoAction(menuItem: MenuItem, $event) {
    $event.stopPropagation();
    if (this.sticky && this.menuState === 'collapse') {
      this.emitEventForToggle();
    }

    if (menuItem.isCollapsed === undefined) {
      menuItem.isCollapsed = false;
    }

    this.collapseMenuItem(menuItem);

    if (menuItem.path || menuItem.link) {
      this.navigateToGivenPath(menuItem);
      if (!this.sticky && menuItem.subMenus.length === 0) {
        this.emitEventForToggle();
      }
    }
  }

  /**
   * Collapse child menu items while collapsing parent menu Item.
   *
   * @Param menuItem:MenuItem, value:boolean - optional
   *
   * Optional parameter value is used for iterating over the  child menus.
   * If it is not set considering the menu item as the root menu item on which user takes action.
   */
  collapseMenuItem(menuItem: MenuItem, value?: boolean) {
    if (value === undefined) {
      menuItem.isCollapsed = menuItem.isCollapsed ? false : true;
      this.menuItems.map(menuItemObj => {
        if (menuItemObj.subMenus && menuItemObj.subMenus.length === 0 && menuItem.id !== menuItemObj.id) {
          menuItemObj.isCollapsed = false;
        }
      });
    }
    if (!menuItem.isCollapsed) {
      menuItem.subMenus.map(menuItemObj => {
        menuItemObj.isCollapsed = false;
        this.collapseMenuItem(menuItemObj, false);
      });
    }
  }

  /**
   * Change menuItems Active State
   *
   */
  changeActiveState(menuItem: MenuItem, value?: boolean) {
    if (value === undefined) {
      const isActive = menuItem.isCollapsed ? menuItem.isActive ? false : true : false;
      this.menuItems.map(menuItemObj => menuItemObj.isActive = false);
      menuItem.isActive = isActive;
    }
    if (!menuItem.isActive) {
      menuItem.subMenus.map(menuItemObj => {
        menuItemObj.isActive = false;
        this.changeActiveState(menuItemObj, false);
      });
    }
  }

  /**
   * Navigate to the given path based on external or to  a given state
   *
   * @param menuItem:any
   *
   */
  navigateToGivenPath(menuItem: MenuItem) {
    if (menuItem.path) {
      this.router.navigate([ menuItem.path ]);
    }
    if (menuItem.link) {
      window.open(menuItem.link, '_blank');
    }
  }

  /**
   * Set class names corresponding to icons from different icon set. binding class names dynamically
   * If no icons configured set default icon
   *
   * @Param menuItem:MenuItem
   */
  setIconClasses(menuItem: MenuItem) {
    const iconType: string = menuItem.useIconFrom ? menuItem.useIconFrom.replace(/ /g, '') : '';
    if (!menuItem.useIconFrom) {
      menuItem.useIconFrom = IconTypes[ IconTypes.FontAwesome ];
      menuItem.icon = AppConstants.defaultMenuItemIcon;
    }
    const classes = {
      'material-icons': iconType === IconTypes[ IconTypes.Material ],
      // tslint:disable-next-line: object-literal-key-quotes
      'invisible-icon': !iconType,
      'icon-from-disk': iconType === IconTypes[ IconTypes.AppDirectory ]
    };
    if (iconType === IconTypes[ IconTypes.FontAwesome ]) {
      // tslint:disable-next-line: no-unused-expression
      classes[ menuItem.icon ] = true;
    }
    return classes;
  }

  /**
   * Get Icon name of material icon and set it in ui element
   * @param menuItem:MenuItem
   */
  getIconLabelForMaterialIcons(menuItem: MenuItem) {
    const iconType: string = menuItem.useIconFrom ? menuItem.useIconFrom.replace(/ /g, '') : '';
    return iconType === IconTypes[ IconTypes.Material ] ? menuItem.icon : '';
  }

  /**
   * Get image url and set it as background image
   */
  getIconImage(menuItem: MenuItem) {
    const iconType: string = menuItem.useIconFrom ? menuItem.useIconFrom.replace(/ /g, '') : '';
    return iconType === IconTypes[ IconTypes.AppDirectory ] ? AppConstants.appDirectoryRoot + menuItem.icon : '';
  }

  /**
   * Emitting toggle event to the parent to change menu view from collapsible to open when clicking on collapsed menu
   */
  emitEventForToggle() {
    this.toggle.emit(this.menuState);
  }


  isFirstLevel(level) {
    return level === 1;
  }


  hasSubMenus(menuItem: MenuItem) {
    return menuItem.subMenus && menuItem.subMenus.length > 0;
  }

  hasPath(menuItem: MenuItem) {
    return menuItem.path;
  }

  hasLink(menuItem: MenuItem) {
    return menuItem.link;
  }

  closeNonstickyMenu() {
    if (!this.sticky || AppConstants.isMobile) {
      this.emitEventForToggle();
    }
  }

}
