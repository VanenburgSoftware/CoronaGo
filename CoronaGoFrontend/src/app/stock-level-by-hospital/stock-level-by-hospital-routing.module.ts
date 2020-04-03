import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockLevelByHospitalDetailComponent } from './stock-level-by-hospital-detail/stock-level-by-hospital-detail.component';


const routes: Routes = [
	{
		path: 'stock-level-by-hospital',
		redirectTo: 'stocklevelbyhospitaldetail',
		pathMatch: 'full'
	},
	{
		path: 'stocklevelbyhospitaldetail',
		component: StockLevelByHospitalDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "STOCK_LEVEL_BY_HOSPITAL_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StockLevelByHospitalRoutingModule
 {

}
