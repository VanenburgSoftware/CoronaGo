import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockInHospitalListComponent } from './stock-in-hospital-list/stock-in-hospital-list.component';
import { StockInHospitalListMobileViewComponent } from './stock-in-hospital-list/stock-in-hospital-list-mobile-view/stock-in-hospital-list-mobile-view.component';


const routes: Routes = [
	{
		path: 'stock-in-hospital',
		redirectTo: 'stockinhospitallist',
		pathMatch: 'full'
	},
	{
		path: 'stockinhospitallist',
		component: StockInHospitalListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "STOCK_IN_HOSPITAL_LIST",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StockInHospitalRoutingModule
 {

}
