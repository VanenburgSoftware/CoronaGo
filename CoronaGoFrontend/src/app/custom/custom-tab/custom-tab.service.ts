import { Injectable } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTabService {

  private currentTab: any;

  private tabSource = new BehaviorSubject(this.currentTab);
  public tabChanges = this.tabSource.asObservable();

  constructor() { }

  handleTabChange(event: NgbTabChangeEvent) {
    this.tabSource.next(event);
    console.log('Tab Changed : ', event);
  }
}
