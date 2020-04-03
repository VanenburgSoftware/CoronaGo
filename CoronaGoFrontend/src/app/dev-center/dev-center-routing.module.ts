import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthCanActivateGuard } from '@app/auth/_guards';

const routes: Routes = [
  {
    path: 'warnings',
    component: ErrorPageComponent,
    canActivate: [ AuthCanActivateGuard ],
    data: {
      expectedRoles: [ 1 ]
    }
  },
  {
    path: '',
    redirectTo: 'warnings',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevCenterRoutingModule { }
