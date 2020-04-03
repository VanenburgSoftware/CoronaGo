/*  tslint:disable */
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import moment from 'moment';
import { ApiConstants } from '@app/api-constants';
import { AppGlobalService } from '@app/app-global.service';
import { PatientQuestionaireService } from '@app/patient-questionaire/patient-questionaire.service';
import { NotificationService } from '@app/shared/services/notification.service';

@Component({
	selector: 'app-currentconsultation',
	templateUrl: './currentconsultation.component.html',
	styleUrls: ['./currentconsultation.component.scss']
})
export class CurrentConsultationComponent implements OnInit {

	@Input() cForm: any;

	@ViewChild('meetingId') meetingId: ElementRef;
	@ViewChild('meetingDate') meetingDate: ElementRef;
	@ViewChild('doctorNotes') doctorNotes: ElementRef;
	@ViewChild('meetingUrl') meetingUrl: ElementRef;
	@ViewChild('meetingTime') meetingTime: ElementRef;
	@ViewChild('doctorName') doctorName: ElementRef;


	selectedSlots = [];
	meetingStartTime: any;
	meetingEndTime: any;
	errorMsg = '';
	blockedSlots = [];
	hasMeetingUrl = false;

	data: any = {};

	constructor(
		private appGlobalService: AppGlobalService,
		private patientQuestionaireService: PatientQuestionaireService,
		private notify: NotificationService
	) { }

	getCurrentUser() {
		return this.appGlobalService.get('currentUser');
	}

	setDataToForm(data: any) {
		if (!data) {
			return;
		}
		this.data = data;
		this.meetingDate.nativeElement.value = moment(data.meetingDate).local().format('YYYY-MM-DD');
		this.meetingTime.nativeElement.value = moment(data.meetingStartTime).local().format('hh:mmA') + ' - ' + moment(data.meetingEndTime).local().
			format('hh:mmA');
		this.getCurrentSlotsForDate(data.meetingDate);

		this.doctorName.nativeElement.value = data.doctorName;
		this.doctorNotes.nativeElement.value = data.doctorNotes ? data.doctorNotes : '';
		this.appGlobalService.write('meetingObject', data);
		this.appGlobalService.write('doctorNotes', data.doctorNotes);
		if (data.meetingUrl) {
			this.hasMeetingUrl = true;
			setTimeout(() => {
				this.meetingUrl.nativeElement.innerHTML = data.meetingUrl ? data.meetingUrl : '';
				this.meetingUrl.nativeElement.setAttribute('href', (data.meetingUrl ? data.meetingUrl : ''));
			}, 500);
		} else {
			this.hasMeetingUrl = false;
		}

	}

	getScheduledMeetingForPatient() {
		const currentUser = {
			email: this.appGlobalService.get('patientInfo').patientEmail
		};
		const currentMeetingSchedule = this.patientQuestionaireService.getScheduledMeetingForPatient(currentUser);
		currentMeetingSchedule.subscribe(data => {
			this.setDataToForm(data);
		});
	}

	isFormValidated() {
		let isValidated = true;
		this.errorMsg = '';
		if (!this.meetingDate.nativeElement.value) {
			isValidated = false;
			this.errorMsg += 'Please select a date. ';
		}
		if (!this.selectedSlots.length) {
			this.errorMsg += 'Please select time slot. ';
			isValidated = false;
		}
		return isValidated;
	}

	scheduleConsultation() {
		if (!this.isFormValidated()) {
			this.notify.error(this.errorMsg);
			return;
		}

		this.errorMsg = '';
		const currentUser = this.getCurrentUser();
		const patientEmail = this.appGlobalService.get('patientInfo').patientEmail;
		const patientName = this.appGlobalService.get('patientInfo').patientName;
		const patientHid = this.appGlobalService.get('patientInfo').patientHid;

		const startTime = moment(this.meetingDate.nativeElement.value + ' ' + this.selectedSlots[0][0], 'YYYY-MM-DD hh:mmA')
			.toDate()
			.getTime();
		const endTime = moment(this.meetingDate.nativeElement.value + ' ' + this.selectedSlots[0][1], 'YYYY-MM-DD hh:mmA')
			.toDate()
			.getTime();
		const meetingDate = moment(this.meetingDate.nativeElement.value, 'YYYY-MM-DD')
			.toDate()
			.getTime();

		const dToSend = {
			patientHid,
			patientName,
			patientEmail,
			doctorName: `${currentUser.firstName} ${currentUser.lastName}`,
			doctorEmail: currentUser.email,
			meetingStartTime: startTime,
			meetingEndTime: endTime,
			meetingDate,
			meetingStatus: 'scheduled',
			doctorNotes: this.doctorNotes.nativeElement.value
		}

		const scheduleMeeting = this.patientQuestionaireService.createMeetingForPatient(dToSend);
		scheduleMeeting.subscribe(data => {
			this.setDataToForm(data);
			this.patientQuestionaireService.scheduleMeeting(data);
		});
	}

	getCurrentSlotsForDate(d) {
		const data = {
			date: d
		};
		const existingMeeting = this.patientQuestionaireService.getScheduledMeetingsForDate(data);
		existingMeeting.subscribe(data => {
			const blkd = [];
			data.map(cd => {
				const stTime = moment(cd.stTime).local().format('hh:mmA');
				const endTime = moment(cd.endTime).local().format('hh:mmA');
				blkd.push([
					stTime,
					endTime
				]);
			});

			this.blockedSlots = blkd;
		});
	}

	handleDateChange(e) {

		if (e.currentTarget.value) {
			const dateToSend = moment(e.currentTarget.value, 'YYYY-MM-DD').toDate().getTime();
			this.getCurrentSlotsForDate(dateToSend);
			this.patientQuestionaireService.changeConsultForm(true);
		}
	}

	selectedTimeSlots(slots) {
		this.selectedSlots = slots;
		this.meetingTime.nativeElement.value = slots[0][0] + ' - ' + slots[0][1];
		this.patientQuestionaireService.changeConsultForm(true);
	}

	checkIfDisabled() {
		return !(this.getCurrentUser().doc);
	}

	handleDocNotesChange(e) {
		const notes = this.doctorNotes.nativeElement.value;
		this.appGlobalService.write('doctorNotes', notes);
		this.patientQuestionaireService.changeConsultForm(true);
	}

	getMinDate() {
		const date = new Date();
		return moment().format('YYYY-MM-DD');
	}

	ngOnInit() {
		this.patientQuestionaireService.changeConsultForm(false);
		this.getScheduledMeetingForPatient();/* 
		this.blockedSlots = [["07:30AM", "08:00AM"], ["07:30PM", "08:00PM"]]; */

	}
}
