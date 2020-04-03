import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { StockLevelByHospitalRoutingModule } from './stock-level-by-hospital-routing.module';
import { StockLevelByHospitalDetailComponent } from './stock-level-by-hospital-detail/stock-level-by-hospital-detail.component';


@NgModule({
  declarations: [
    StockLevelByHospitalDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    StockLevelByHospitalRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class StockLevelByHospitalModule{ }
