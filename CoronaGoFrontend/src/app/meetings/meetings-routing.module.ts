import { AuthCanActivateGuard } from './../auth/_guards/auth.can-activate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsListMobileViewComponent } from './meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component';


const routes: Routes = [
	{
		path: 'meetings',
		redirectTo: 'meetingslist',
		pathMatch: 'full'
	},
	{
		path: 'meetingslist',
		component: MeetingsListComponent,
		canActivate: [ AuthCanActivateGuard ],
		data: {
			label: "MEETINGS_LIST",
			expectedRoles: []
		}
	}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MeetingsRoutingModule
 {

}
