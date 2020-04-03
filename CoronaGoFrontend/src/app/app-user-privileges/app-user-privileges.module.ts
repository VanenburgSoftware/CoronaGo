import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { AppUserPrivilegesRoutingModule } from './app-user-privileges-routing.module';
import { AppUserPrivilegesListComponent } from './app-user-privileges-list/app-user-privileges-list.component';
import { AppUserPrivilegesListMobileViewComponent } from './app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component';
import { AppUserPrivilegesDetailComponent } from './app-user-privileges-detail/app-user-privileges-detail.component';


@NgModule({
  declarations: [
    AppUserPrivilegesListComponent,
AppUserPrivilegesListMobileViewComponent,
AppUserPrivilegesDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    AppUserPrivilegesRoutingModule

  ],
  entryComponents: [AppUserPrivilegesListMobileViewComponent
  ],
  exports: [
    
  ]
})
export class AppUserPrivilegesModule{ }
