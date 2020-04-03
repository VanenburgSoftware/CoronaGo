import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeatMapDetailComponent } from './heat-map-detail/heat-map-detail.component';


const routes: Routes = [
	{
		path: 'heat-map',
		redirectTo: 'heatmapdetail',
		pathMatch: 'full'
	},
	{
		path: 'heatmapdetail',
		component: HeatMapDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "HEAT_MAP_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeatMapRoutingModule
 {

}
