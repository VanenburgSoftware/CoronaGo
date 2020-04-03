import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetModule } from '../widget/widget.module';
import { DataTablesModule } from 'angular-datatables';

import { StockLevelByItemRoutingModule } from './stock-level-by-item-routing.module';
import { StockLevelByItemListComponent } from './stock-level-by-item-list/stock-level-by-item-list.component';
import { StockLevelByItemListMobileViewComponent } from './stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component';


@NgModule({
  declarations: [
    StockLevelByItemListComponent,
StockLevelByItemListMobileViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
	DataTablesModule,
    StockLevelByItemRoutingModule

  ],
  entryComponents: [StockLevelByItemListMobileViewComponent
  ],
  exports: [
    
  ]
})
export class StockLevelByItemModule{ }
