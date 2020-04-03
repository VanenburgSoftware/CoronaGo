import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notification-container" *ngIf="notification.msg" (click)="hideNotification()" >
      <div [ngClass]="notification.type" translate [translateParams]="notification.params">{{notification.msg}}</div>
    </div>
  `,
  styles: [
  ]
})
export class NotificationComponent implements OnInit {

  @ViewChild('notificationContainer') notificationContainer: ElementRef;

  constructor(public notification: NotificationService) { }

  public hideNotification() {
    this.notification.hide();
  }

  ngOnInit() {
  }


}
