import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCanLoadGuard } from './auth/_guards';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'homescreen',
    pathMatch: 'full'
  },
  {
    path: 'devcenter',
    canLoad: [ AuthCanLoadGuard ],
    data: {
      expectedRoles: [ 999 ]
    },
    loadChildren: () => import('./dev-center/dev-center.module').then(mod => mod.DevCenterModule)
  },
  {
    path: 'stocklevelbyhospital',
    /** loadChildren: () => import('./stock-level-by-hospital/stock-level-by-hospital.module').then(mod => mod.StockLevelByHospitalModule) */
    loadChildren: './stock-level-by-hospital/stock-level-by-hospital.module#StockLevelByHospitalModule'
  },
  {
    path: 'stocklevelbyitem',
    /** loadChildren: () => import('./stock-level-by-item/stock-level-by-item.module').then(mod => mod.StockLevelByItemModule) */
    loadChildren: './stock-level-by-item/stock-level-by-item.module#StockLevelByItemModule'
  },
  {
    path: 'countystatelogin',
    /** loadChildren: () => import('./county-state-login/county-state-login.module').then(mod => mod.CountyStateLoginModule) */
    loadChildren: './county-state-login/county-state-login.module#CountyStateLoginModule'
  },
  {
    path: 'meetings',
    /** loadChildren: () => import('./meetings/meetings.module').then(mod => mod.MeetingsModule) */
    loadChildren: './meetings/meetings.module#MeetingsModule'
  },
  {
    path: 'doctoractivitylog',
    /** loadChildren: () => import('./doctor-activity-log/doctor-activity-log.module').then(mod => mod.DoctorActivityLogModule) */
    loadChildren: './doctor-activity-log/doctor-activity-log.module#DoctorActivityLogModule'
  },
  {
    path: 'coronatracker',
    /** loadChildren: () => import('./corona-tracker/corona-tracker.module').then(mod => mod.CoronaTrackerModule) */
    loadChildren: './corona-tracker/corona-tracker.module#CoronaTrackerModule'
  },
  {
    path: 'login',
    /** loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) */
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'stockinhospital',
    /** loadChildren: () => import('./stock-in-hospital/stock-in-hospital.module').then(mod => mod.StockInHospitalModule) */
    loadChildren: './stock-in-hospital/stock-in-hospital.module#StockInHospitalModule'
  },
  {
    path: 'heatmap',
    /** loadChildren: () => import('./heat-map/heat-map.module').then(mod => mod.HeatMapModule) */
    loadChildren: './heat-map/heat-map.module#HeatMapModule'
  },
  {
    path: 'appuserprivileges',
    /** loadChildren: () => import('./app-user-privileges/app-user-privileges.module').then(mod => mod.AppUserPrivilegesModule) */
    loadChildren: './app-user-privileges/app-user-privileges.module#AppUserPrivilegesModule'
  },
  {
    path: 'patientinformation',
    /** loadChildren: () => import('./patient-information/patient-information.module').then(mod => mod.PatientInformationModule) */
    loadChildren: './patient-information/patient-information.module#PatientInformationModule'
  },
  {
    path: 'patientquestionaire',
    /** loadChildren: () => import('./patient-questionaire/patient-questionaire.module').then(mod => mod.PatientQuestionaireModule) */
    loadChildren: './patient-questionaire/patient-questionaire.module#PatientQuestionaireModule'
  },
  {
    path: 'doctor',
    /** loadChildren: () => import('./patient-questionaire/patient-questionaire.module').then(mod => mod.PatientQuestionaireModule) */
    loadChildren: './patient-questionaire/patient-questionaire.module#PatientQuestionaireModule'
  },
  {
    path: 'landingpage',
    /** loadChildren: () => import('./landing-page/landing-page.module').then(mod => mod.LandingPageModule) */
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: 'homescreen',
    /** loadChildren: () => import('./home-screen/home-screen.module').then(mod => mod.HomeScreenModule) */
    loadChildren: './home-screen/home-screen.module#HomeScreenModule'
  },
  {
    path: 'resources',
    /** loadChildren: () => import('./resources/resources.module').then(mod => mod.ResourcesModule) */
    loadChildren: './resources/resources.module#ResourcesModule'
  },
];

const config = {
  useHash: true
};

@NgModule({
  imports: [ RouterModule.forRoot(routes, config) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }