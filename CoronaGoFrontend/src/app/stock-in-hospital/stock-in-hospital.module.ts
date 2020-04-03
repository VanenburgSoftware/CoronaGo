import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { StockInHospitalRoutingModule } from './stock-in-hospital-routing.module';
import { StockInHospitalListComponent } from './stock-in-hospital-list/stock-in-hospital-list.component';
import { StockInHospitalListMobileViewComponent } from './stock-in-hospital-list/stock-in-hospital-list-mobile-view/stock-in-hospital-list-mobile-view.component';


@NgModule({
  declarations: [
    StockInHospitalListComponent,
StockInHospitalListMobileViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    StockInHospitalRoutingModule

  ],
  entryComponents: [StockInHospitalListMobileViewComponent
  ],
  exports: [
    
  ]
})
export class StockInHospitalModule{ }
