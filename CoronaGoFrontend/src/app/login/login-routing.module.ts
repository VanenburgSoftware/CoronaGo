import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDetailComponent } from './login-detail/login-detail.component';


const routes: Routes = [
	{
		path: 'login',
		redirectTo: 'logindetail',
		pathMatch: 'full'
	},
	{
		path: 'logindetail',
		component: LoginDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "LOGIN_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule
 {

}
