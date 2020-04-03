import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VsTabmenuIntegrationService {

  private currentTab: any = {};
  private isMenuOpen: boolean;
  private triggerJira: boolean;


  private tabSource = new BehaviorSubject(this.currentTab);
  public tabChanges = this.tabSource.asObservable();

  private menuOpenFlag = new BehaviorSubject(this.isMenuOpen);
  public menuOpenChanges = this.menuOpenFlag.asObservable();

  public ticketOpenFlag = new BehaviorSubject(this.triggerJira);
  public ticketOpenChanges = this.ticketOpenFlag.asObservable();

  constructor() { }

  changeTab(tab: any) {
    if (tab.tab || tab.subTabs) {
      // console.log('Tab ', tab);
      if (tab.subTabs) {
        this.tabSource.next(tab.subTabs);
      } else {
        this.tabSource.next(tab.subMenus);
      }
    } else {
      this.tabSource.next([]);
    }
  }

  changeMenuOpenState(isOpen: boolean) {
    this.menuOpenFlag.next(isOpen);
  }

  openJira(isOpen: boolean) {
    this.ticketOpenFlag.next(isOpen);
  }
}
