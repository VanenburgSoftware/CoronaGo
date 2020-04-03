import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenDetailComponent } from './home-screen-detail/home-screen-detail.component';


const routes: Routes = [
	{
		path: 'home-screen',
		redirectTo: 'homescreendetail',
		pathMatch: 'full'
	},
	{
		path: 'homescreendetail',
		component: HomeScreenDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "HOME_SCREEN_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeScreenRoutingModule
 {

}
