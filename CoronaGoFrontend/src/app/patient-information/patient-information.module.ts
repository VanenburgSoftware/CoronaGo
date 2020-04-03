import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { PatientInformationRoutingModule } from './patient-information-routing.module';
import { PatientInformationDetailComponent } from './patient-information-detail/patient-information-detail.component';


@NgModule({
  declarations: [
    PatientInformationDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    PatientInformationRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class PatientInformationModule{ }
