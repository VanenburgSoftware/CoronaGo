import { Router } from '@angular/router';
import { NotificationService } from '@app/shared/services/notification.service';
import { AppGlobalService } from './../../../app-global.service';
import { PatientInformationService } from './../../../patient-information/patient-information.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-homescreen',
	templateUrl: './homescreen.component.html',
	styleUrls: [ './homescreen.component.scss' ]
})
export class HomeScreenComponent implements OnInit {
	patientName: string;
	age: Number;
	gender: string;
	status: string;

	askConfirmation = false;

	tiles = [ {
		path: '/patientquestionaire/patientdetailsdetail',
		name: 'Risk Assessment',
		class: 'risk'
	}, {
		path: '/patientinformation/patientinformationdetail',
		name: 'Personal Details',
		class: 'patient-info'
	}, {
		path: '/coronatracker/coronatrackerdetail',
		name: 'Corona Tracker',
		class: 'corona-tracker'
	}, {
		path: '/resources/resourcesdetail',
		name: 'Resources',
		class: 'resources'
	} ];
	constructor(private patientInformationService: PatientInformationService,
		private appGlobalService: AppGlobalService,
		private router: Router,
		private notify: NotificationService
	) { }

	call911() {
		this.askConfirmation = true;
	}

	triggerCall() {
		setTimeout(() => {
			this.askConfirmation = false;
		}, 500);
	}

	navigateToUrl(url) {
		if (this.appGlobalService.get('currentUser').pat) {
			if (!this.appGlobalService.get('patientInfo') && url !== '/patientquestionaire/patientdetailsdetail') {
				this.notify.error('Please fill Personal Information');
			} else {
				this.router.navigateByUrl(url);
			}
		} else {
			this.router.navigateByUrl(url);
		}
	}

	private getPatientData() {
		const params = {
			sid: this.appGlobalService.get('currentUser').email
		};
		return this.patientInformationService.getPatientInformationBySid(params);
	}
	ngOnInit() {
		this.getPatientData().subscribe((response: any) => {
			this.appGlobalService.write('patientInfo', response);
			let patientInfo = this.appGlobalService.get('patientInfo');
			if (patientInfo) {
				this.patientName = patientInfo.patientName;
				this.age = patientInfo.age;
				this.gender = patientInfo.gender;
				this.status = patientInfo.status;
			} else {
				var user = this.appGlobalService.get('currentUser');
				this.patientName = user.firstName + " " + user.lastName;
			}

		});
	}
}
