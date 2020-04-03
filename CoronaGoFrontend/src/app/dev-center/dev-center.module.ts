import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DevCenterRoutingModule } from './dev-center-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [ ErrorPageComponent ],
  imports: [
    CommonModule,
    WidgetModule,
    ReactiveFormsModule,
    FormsModule,
    DevCenterRoutingModule
  ]
})
export class DevCenterModule { }
