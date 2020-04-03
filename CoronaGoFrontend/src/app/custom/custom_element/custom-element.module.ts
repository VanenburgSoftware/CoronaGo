import { HomeScreenComponent } from './homescreen/homescreen.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { LandingPage } from './../../landing-page/landing-page.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomElementComponent } from './custom-element.component';
import { ResourcesComponent } from './resources/resources.component';
import { SearchPipe } from './landingpage/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeatMapComponent } from './heatmap/heatmap.component';
import { StockLevelByHospitalComponent } from './stocklevelbyhospital/stocklevelbyhospital.component';
import { CoronaTrackerComponent } from './coronatracker/coronatracker.component';
import { RouterModule } from '@angular/router';
import { CurrentConsultationComponent } from './currentconsultation/currentconsultation.component';
import { VsSchedulerComponent } from '@app/widget/vs-scheduler/vs-scheduler.component';

@NgModule({
	declarations: [
		CustomElementComponent,
		ResourcesComponent,
		HeatMapComponent,
		StockLevelByHospitalComponent,
		LandingPageComponent,
		HomeScreenComponent,
		SearchPipe,
		CoronaTrackerComponent,
		CurrentConsultationComponent,
		VsSchedulerComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule
	],
	exports: [
		CustomElementComponent
	]
})
export class CustomFormModule { }