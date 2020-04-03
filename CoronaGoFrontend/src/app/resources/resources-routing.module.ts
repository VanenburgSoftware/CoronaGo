import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';


const routes: Routes = [
	{
		path: 'resources',
		redirectTo: 'resourcesdetail',
		pathMatch: 'full'
	},
	{
		path: 'resourcesdetail',
		component: ResourcesDetailComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "RESOURCES_DETAIL",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ResourcesRoutingModule
 {

}
