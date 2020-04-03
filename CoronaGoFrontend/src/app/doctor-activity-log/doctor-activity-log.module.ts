import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { DoctorActivityLogRoutingModule } from './doctor-activity-log-routing.module';
import { DoctorActivityLogListComponent } from './doctor-activity-log-list/doctor-activity-log-list.component';
import { DoctorActivityLogListMobileViewComponent } from './doctor-activity-log-list/doctor-activity-log-list-mobile-view/doctor-activity-log-list-mobile-view.component';


@NgModule({
  declarations: [
    DoctorActivityLogListComponent,
DoctorActivityLogListMobileViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    DoctorActivityLogRoutingModule

  ],
  entryComponents: [DoctorActivityLogListMobileViewComponent
  ],
  exports: [
    
  ]
})
export class DoctorActivityLogModule{ }
