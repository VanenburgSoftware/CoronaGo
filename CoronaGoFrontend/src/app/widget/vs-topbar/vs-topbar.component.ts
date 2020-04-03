import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { VsMenuComponent } from '../vs-menu/vs-menu.component';
import { AppConstants } from '@app/app-constants';
import { VsTabmenuIntegrationService } from '../vs-tabmenu-integration.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './vs-topbar.component.html',
  styleUrls: ['./vs-topbar.component.scss']
})
export class VsTopbarComponent implements OnInit, AfterViewInit {
  selectedLang: any;

  @Input() topbarConfig: any;

  @ViewChild(VsMenuComponent) menuComponent: VsMenuComponent;

  public userName: string;
  hasMenu: boolean;
  isMobile: boolean;
  isMobileMenuShow: boolean;
  isMobileMenuOpen: boolean;

  constructor(private translate: TranslateService, private tabMenuIntegration: VsTabmenuIntegrationService) {
  }


  ngOnInit() {
    this.selectedLang = {
      label: 'EN',
      flagIcon: 'en',
      value: 'en'
    };
    this.hasMenu = !!this.topbarConfig.menuConfig;
    this.isMobile = AppConstants.isMobile;
    this.watchMenuOpenState();
  }

  watchMenuOpenState() {
    this.tabMenuIntegration.menuOpenChanges.subscribe(data => {
      this.isMobileMenuOpen = data;
    });
  }

  onLanguageSwitch(lang: any) {
    this.selectedLang = lang;
    this.translate.use(this.selectedLang.value);
  }

  toggleLeftMenu() {
    if (!this.isRightMenu()) {
      // this.menuComponent.toggleMenu();
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }

  toggleRightMenu() {
    if (this.isRightMenu()) {
      this.menuComponent.toggleMenu();
    }
  }

  isRightMenu() {
    if (!this.hasMenu) {
      return false;
    }
    return !this.topbarConfig.menuConfig.left;
  }

  openIssueReporter(){
    console.log('clicked');
    this.tabMenuIntegration.openJira(true);
  }

  ngAfterViewInit(): void {
    const po = document.createElement('script'); 
    po.type = 'text/javascript'; 
    po.async = true; 
    po.setAttribute('id', 'collabr')
    po.src = 'https://apis.google.com/js/platform.js?onload=renderButtons';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
  }
}
