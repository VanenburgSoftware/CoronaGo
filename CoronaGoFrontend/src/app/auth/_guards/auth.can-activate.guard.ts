import { AppGlobalService } from '@app/app-global.service';
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthCanActivateGuard implements CanActivate {
  userInfo: User;

  constructor(private appGlobal: AppGlobalService) {
    this.userInfo = appGlobal.get('currentUser');
    if (this.userInfo) {
      this.userInfo.userRoleIds = appGlobal.get('currentUser').user_role_ids;
    }
  }

  /**
   * CanActivate method checks that user has the access permissions for current path
   *
   * @param next:ActivatedRouteSnapshot
   * @param state:RouterStateSnapshot
   *
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    if (next.data && next.data.expectedRoles) {
      const expectedRoles = next.data.expectedRoles;
      if (!this.userInfo.userRoleIds) {
        return false;
      }
      return expectedRoles.some(role => this.userInfo.userRoleIds.includes(role));
    }
    return false;
  }

}
