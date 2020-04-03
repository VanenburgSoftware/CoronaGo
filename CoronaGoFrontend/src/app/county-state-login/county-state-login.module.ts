import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { CountyStateLoginRoutingModule } from './county-state-login-routing.module';
import { CountyStateLoginDetailComponent } from './county-state-login-detail/county-state-login-detail.component';


@NgModule({
  declarations: [
    CountyStateLoginDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    CountyStateLoginRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class CountyStateLoginModule{ }
