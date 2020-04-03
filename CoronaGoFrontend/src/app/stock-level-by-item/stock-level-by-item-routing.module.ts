import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockLevelByItemListComponent } from './stock-level-by-item-list/stock-level-by-item-list.component';
import { StockLevelByItemListMobileViewComponent } from './stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component';


const routes: Routes = [
	{
		path: 'stock-level-by-item',
		redirectTo: 'stocklevelbyitemlist',
		pathMatch: 'full'
	},
	{
		path: 'stocklevelbyitemlist',
		component: StockLevelByItemListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "STOCK_LEVEL_BY_ITEM_LIST",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StockLevelByItemRoutingModule
 {

}
