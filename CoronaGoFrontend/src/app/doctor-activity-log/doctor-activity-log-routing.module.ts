import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorActivityLogListComponent } from './doctor-activity-log-list/doctor-activity-log-list.component';
import { DoctorActivityLogListMobileViewComponent } from './doctor-activity-log-list/doctor-activity-log-list-mobile-view/doctor-activity-log-list-mobile-view.component';


const routes: Routes = [
	{
		path: 'doctor-activity-log',
		redirectTo: 'doctoractivityloglist',
		pathMatch: 'full'
	},
	{
		path: 'doctoractivityloglist',
		component: DoctorActivityLogListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "DOCTOR_ACTIVITY_LOG_LIST",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DoctorActivityLogRoutingModule
 {

}
