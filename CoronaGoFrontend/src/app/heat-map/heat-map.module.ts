import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { HeatMapRoutingModule } from './heat-map-routing.module';
import { HeatMapDetailComponent } from './heat-map-detail/heat-map-detail.component';


@NgModule({
  declarations: [
    HeatMapDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    HeatMapRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class HeatMapModule{ }
