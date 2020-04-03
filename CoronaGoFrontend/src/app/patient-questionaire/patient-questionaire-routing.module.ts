import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPatientsNotScheduledListComponent } from './all-patients-not-scheduled-list/all-patients-not-scheduled-list.component';
import { AllPatientsNotScheduledListMobileViewComponent } from './all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component';
import { MyPatientsScheduledListComponent } from './my-patients-scheduled-list/my-patients-scheduled-list.component';
import { MyPatientsScheduledListMobileViewComponent } from './my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component';
import { AllPatientsScheduledListComponent } from './all-patients-scheduled-list/all-patients-scheduled-list.component';
import { AllPatientsScheduledListMobileViewComponent } from './all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component';
import { PatientQuestionaireListComponent } from './patient-questionaire-list/patient-questionaire-list.component';
import { PatientQuestionaireListMobileViewComponent } from './patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component';
import { MyPatientsNotScheduledListComponent } from './my-patients-not-scheduled-list/my-patients-not-scheduled-list.component';
import { MyPatientsNotScheduledListMobileViewComponent } from './my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component';
import { PatientDetailsDetailComponent } from './patient-details-detail/patient-details-detail.component';
import { NotYetAssignedComponent } from './not-yet-assigned/not-yet-assigned.component';


const routes: Routes = [
	{
		path: 'patient-questionaire',
		redirectTo: 'allpatientsnotscheduledlist',
		pathMatch: 'full'
	},
	{
		path: 'allpatientsnotscheduledlist',
		component: AllPatientsNotScheduledListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "ALL_PATIENTS_NOT_SCHEDULED_LIST",
			expectedRoles: []
		}
	},
	{
		path: 'mypatientsscheduledlist',
		component: MyPatientsScheduledListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "MY_PATIENTS_SCHEDULED_LIST",
			expectedRoles: []
		}
	},
	{
		path: 'allpatientsscheduledlist',
		component: AllPatientsScheduledListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "ALL_PATIENTS_SCHEDULED_LIST",
			expectedRoles: []
		}
	},
	{
		path: 'patientquestionairelist',
		component: PatientQuestionaireListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "PATIENT_QUESTIONAIRE_LIST",
			expectedRoles: []
		}
	},
	{
		path: 'mypatientsnotscheduledlist',
		component: MyPatientsNotScheduledListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "MY_PATIENTS_NOT_SCHEDULED_LIST",
			expectedRoles: []
		}
	},
	{
		path: 'allpatientsnotassignedlist',
		component: NotYetAssignedComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "ALL_PATIENTS_NOT_YET_ASSIGNED_LIST",
			expectedRoles: []
		}
	},
	{
		path: 'patientdetailsdetail',
		component: PatientDetailsDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "PATIENT_DETAILS_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PatientQuestionaireRoutingModule {

}
