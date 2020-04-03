import { Injectable } from '@angular/core';
import { AppConstants } from '@app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public msg: string;
  public type: 'info' | 'success' | 'warning' | 'error' = 'info';
  public params: any = {
    max_rows : 10
  };
  constructor() { }

  public success(msg: string, params?: any): void {
    this.type = 'success';
    this.notify(msg, params ? params : '');
  }

  public info(msg: string, params?: any): void {
    this.type = 'info';
    this.notify(msg, params ? params : '');
  }

  public warn(msg: string, params?: any): void {
    this.type = 'warning';
    this.notify(msg, params ? params : '');
  }

  public error(msg: string, params?: any): void {
    this.type = 'error';
    this.notify(msg, params ? params : '');
  }

  private notify(msg: string, params: any): void {
    this.msg = msg;
    this.params = params ? params : '';

    setTimeout(() => {
      this.msg = null;
    }, AppConstants.notificationTimeInterval);
  }

  public hide(): void {
    this.msg = null;
  }

}
