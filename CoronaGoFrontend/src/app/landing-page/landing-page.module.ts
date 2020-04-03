import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageDetailComponent } from './landing-page-detail/landing-page-detail.component';


@NgModule({
  declarations: [
    LandingPageDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    DataTablesModule,
    LandingPageRoutingModule
  ],
  entryComponents: [
  ],
  exports: [

  ]
})
export class LandingPageModule { }
