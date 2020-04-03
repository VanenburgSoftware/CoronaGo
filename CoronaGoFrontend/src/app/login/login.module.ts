import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { LoginRoutingModule } from './login-routing.module';
import { LoginDetailComponent } from './login-detail/login-detail.component';


@NgModule({
  declarations: [
    LoginDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    LoginRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class LoginModule{ }
