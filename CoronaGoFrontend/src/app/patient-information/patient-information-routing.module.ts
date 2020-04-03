import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientInformationDetailComponent } from './patient-information-detail/patient-information-detail.component';


const routes: Routes = [
	{
		path: 'patient-information',
		redirectTo: 'patientinformationdetail',
		pathMatch: 'full'
	},
	{
		path: 'patientinformationdetail',
		component: PatientInformationDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "PATIENT_INFORMATION_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PatientInformationRoutingModule
 {

}
