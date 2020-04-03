import { AppGlobalService } from './../../app-global.service';
import { User } from '../user.model';
import { Injectable, OnInit } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCanLoadGuard implements CanLoad {
  userInfo: User;

  constructor(private appGlobal: AppGlobalService) {
    this.userInfo = appGlobal.get('currentUser');
    if (this.userInfo) {
      this.userInfo.userRoleIds = appGlobal.get('currentUser').user_role_ids;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    if (route.data && route.data.expectedRoles) {
      const expectedRoles = route.data.expectedRoles;
      if (!this.userInfo.userRoleIds) {
        return false;
      }
      return expectedRoles.some(role => this.userInfo.userRoleIds.includes(role));
    }
    return false;
  }
}
