import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppUserPrivilegesListComponent } from './app-user-privileges-list/app-user-privileges-list.component';
import { AppUserPrivilegesListMobileViewComponent } from './app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component';
import { AppUserPrivilegesDetailComponent } from './app-user-privileges-detail/app-user-privileges-detail.component';


const routes: Routes = [
	{
		path: 'app-user-privileges',
		redirectTo: 'appuserprivilegeslist',
		pathMatch: 'full'
	},
	{
		path: 'appuserprivilegeslist',
		component: AppUserPrivilegesListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "APP_USER_PRIVILEGES_LIST",
			expectedRoles: []
		}
	},
	{
		path: 'appuserprivilegesdetail',
		component: AppUserPrivilegesDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "APP_USER_PRIVILEGES_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppUserPrivilegesRoutingModule
 {

}
