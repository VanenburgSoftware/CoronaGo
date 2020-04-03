import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { CoronaTrackerRoutingModule } from './corona-tracker-routing.module';
import { CoronaTrackerDetailComponent } from './corona-tracker-detail/corona-tracker-detail.component';


@NgModule({
  declarations: [
    CoronaTrackerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    CoronaTrackerRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class CoronaTrackerModule{ }
