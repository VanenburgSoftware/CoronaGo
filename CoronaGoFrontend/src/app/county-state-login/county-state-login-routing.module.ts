import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountyStateLoginDetailComponent } from './county-state-login-detail/county-state-login-detail.component';


const routes: Routes = [
	{
		path: 'county-state-login',
		redirectTo: 'countystatelogindetail',
		pathMatch: 'full'
	},
	{
		path: 'countystatelogindetail',
		component: CountyStateLoginDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "COUNTY_STATE_LOGIN_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CountyStateLoginRoutingModule
 {

}
