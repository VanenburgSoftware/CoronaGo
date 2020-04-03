import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { take } from 'rxjs-compat/operator/take';


import { environment } from '@env/environment';
import user from '@assets/menu/menu.json';

import { User } from './user.model';
import { BaseService } from '../core/base.service';
import { ApiConstants } from '@app/api-constants';
import { UtilService } from '@app/core/util.service';
import { AppGlobalService } from '@app/app-global.service';
import { AppLoaderService } from '@app/shared/services/app-loader.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public currentUser: User;
  constructor(private bs: BaseService, private util: UtilService, private appGlobal: AppGlobalService, private loader: AppLoaderService) {
  }

  public authenticate(): any {
    this.loader.show();

    if (environment.prototype) {

      const prototypeUser = user;
      this.appGlobal.write('prototyping', true);
      this.appGlobal.write('currentUser', prototypeUser);

      this.loader.hide();

      return of(prototypeUser);

    } else {
      const currentUserSubject = new Observable(observer => {
        this.bs.get(ApiConstants.login).subscribe(
          (data: User) => {
            this.currentUser = data;
            this.appGlobal.write('prototyping', false);
            this.appGlobal.write('currentUser', data);
            
            this.loader.hide();

            observer.next(data);
          },
          (error: any) => {

            this.loader.hide();
            
            observer.error(error);
          }
        );
      });

      return currentUserSubject;
    }
  }

  public getcurrentUser(): User {
    return this.currentUser;
  }

  public logout(): void {
    // TODO
  }

}


