import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsListMobileViewComponent } from './meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component';


@NgModule({
  declarations: [
    MeetingsListComponent,
MeetingsListMobileViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    MeetingsRoutingModule

  ],
  entryComponents: [MeetingsListMobileViewComponent
  ],
  exports: [
    
  ]
})
export class MeetingsModule{ }
