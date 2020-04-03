import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { HomeScreenDetailComponent } from './home-screen-detail/home-screen-detail.component';


@NgModule({
  declarations: [
    HomeScreenDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    HomeScreenRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class HomeScreenModule{ }
