import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { PatientQuestionaireRoutingModule } from './patient-questionaire-routing.module';
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
import { NotYetAssignedListMobileViewComponent } from './not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component';

@NgModule({
  declarations: [
    AllPatientsNotScheduledListComponent,
    AllPatientsNotScheduledListMobileViewComponent,
    MyPatientsScheduledListComponent,
    MyPatientsScheduledListMobileViewComponent,
    AllPatientsScheduledListComponent,
    AllPatientsScheduledListMobileViewComponent,
    PatientQuestionaireListComponent,
    PatientQuestionaireListMobileViewComponent,
    MyPatientsNotScheduledListComponent,
    MyPatientsNotScheduledListMobileViewComponent,

    PatientDetailsDetailComponent,
    NotYetAssignedComponent,
    NotYetAssignedListMobileViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    DataTablesModule,
    PatientQuestionaireRoutingModule

  ],
  entryComponents: [ AllPatientsNotScheduledListMobileViewComponent,
    MyPatientsScheduledListMobileViewComponent,
    AllPatientsScheduledListMobileViewComponent,
    PatientQuestionaireListMobileViewComponent,
    MyPatientsNotScheduledListMobileViewComponent,
    NotYetAssignedListMobileViewComponent
  ],
  exports: [

  ]
})
export class PatientQuestionaireModule { }
