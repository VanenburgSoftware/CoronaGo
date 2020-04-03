import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageDetailComponent } from './landing-page-detail/landing-page-detail.component';


const routes: Routes = [
	{
		path: 'landing-page',
		redirectTo: 'landingpagedetail',
		pathMatch: 'full'
	},
	{
		path: 'landingpagedetail',
		component: LandingPageDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "LANDING_PAGE_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LandingPageRoutingModule
 {

}
