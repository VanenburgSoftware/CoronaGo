import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';


@NgModule({
  declarations: [
    ResourcesDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    ResourcesRoutingModule

  ],
  entryComponents: [
  ],
  exports: [
    
  ]
})
export class ResourcesModule{ }
