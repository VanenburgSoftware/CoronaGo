import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoronaTrackerDetailComponent } from './corona-tracker-detail/corona-tracker-detail.component';


const routes: Routes = [
	{
		path: 'corona-tracker',
		redirectTo: 'coronatrackerdetail',
		pathMatch: 'full'
	},
	{
		path: 'coronatrackerdetail',
		component: CoronaTrackerDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "CORONA_TRACKER_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CoronaTrackerRoutingModule
 {

}
