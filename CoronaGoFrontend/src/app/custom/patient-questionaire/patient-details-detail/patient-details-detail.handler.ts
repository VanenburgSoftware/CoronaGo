import { AppGlobalService } from '@app/app-global.service';

export class PatientDetailsDetailHandler {

	actionbarMap: any;
	customFormConfig: any;
	customCaption: any;
	public id: any;
	constructor(
		public appGlobalService: AppGlobalService,
	) { }

	public updateActionBarConfig(actionConfig: any, type): any {
		actionConfig.buttons.primary[ 1 ][ 0 ][ 'class' ] = 'pge-primary';
		return actionConfig;
	}

	public updateCaptionConfig(captionConfig: any, type): any {
		return captionConfig;
	}

	public customCaptionbarAction(data: any) { }

	public customCaptionbarInitComplete(data: any) {
		this.customCaption = data;
	}

	public customActionbarInitComplete(data: any) {
		// this.actionbarMap = data;
		/* if (this['child'].form && this['child'].form.value) {
			if (!this['child'].form.value.sid) {
				this.hideButtons(data, ['needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation']);
			}
		} else {
			this.hideButtons(data, ['needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultationschedule_consultation']);
		} */

	}

	public customWorkflowActionbarInitComplete(data: any) { }

	public updateFormConfig(currentConfig, localPlaceHolder): any {
		return currentConfig;
	}

	public updateFormdata(data: any): any {
		return data;
	}

	public validateDataBeforeSave(data: any): any {
		return data;
	}

	public customFormInitComplete(form: any) {
		this.customFormConfig = form;
	}

	public customDataChanged(data: any) { }

	public handleCustomEvents(e: Event, form?: any) { }

	public onAfterServiceResponse(data: any): any {
		this.hideBtnsOnStatus(data);
	}

	public onAfterResponseData(data: any): any { }

	public hideButtons(data: any, btnsToHide: any[]) {
		if (!data) {
			return;
		}
		btnsToHide.map(btn => {
			if (data.elementMap[ btn ]) {
				data.elementMap[ btn ].show = false;
			}
		});
	}

	public showButtons(data: any, btnsToShow: any[]) {
		if (!data) {
			return;
		}
		btnsToShow.map(btn => {
			if (data.elementMap[ btn ]) {
				data.elementMap[ btn ].show = true;
			}
		});
	}

	public customActionHandler(btn: any) {
		return false;
	}
	public isDoctor() {

		const user = this.appGlobalService.get('currentUser');
		return user.doc && (this.id !== user.email);
	}

	public hideBtnsOnStatus(data: any) {
		if (!data || !data.status) {
			return;
		}
		const status = data.status.toLowerCase();
		switch (status) {
			case 'risk score to be calculated': {
				this.hideButtons(this.actionbarMap, [ 'needs_consultation', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation' ]);
				this.showButtons(this.actionbarMap, [ 'save', 'cancel' ]);
				break;
			}
			case 'risk self accessed': {
				this.hideButtons(this.actionbarMap, [ 'calculate_risk_score', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation', 'save', 'cancel' ]);
				if (this.isDoctor()) {
					this.showButtons(this.actionbarMap, [ 'needs_consultation' ]);
				} else {
					this.hideButtons(this.actionbarMap, [ 'needs_consultation' ]);
				}
				break;
			}
			case 'consultation required': {
				this.hideButtons(this.actionbarMap, [ 'calculate_risk_score', 'needs_consultation', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation', 'save', 'cancel' ]);
				break;
			}

			case 'consultation not required': {
				this.hideButtons(this.actionbarMap, [ 'calculate_risk_score', 'needs_consultation', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation', 'save', 'cancel' ]);
				if (this.isDoctor()) {
					this.showButtons(this.actionbarMap, [ 'do_weekly_monitoring' ]);
				} else {
					this.hideButtons(this.actionbarMap, [ 'do_weekly_monitoring' ]);
				}
				break;
			}
			case 'consultation scheduled': {
				this.hideButtons(this.actionbarMap, [ 'calculate_risk_score', 'needs_consultation', 'download_report', 'schedule_consultation', 'save', 'cancel' ]);
				if (this.isDoctor()) {
					this.showButtons(this.actionbarMap, [ 'prescribe_test', 'do_weekly_monitoring' ]);
				} else {
					this.hideButtons(this.actionbarMap, [ 'prescribe_test', 'do_weekly_monitoring' ]);
				}
				break;
			}

			case 'consultation completed (test prescribed)': {
				this.hideButtons(this.actionbarMap, [ 'calculate_risk_score', 'needs_consultation', 'download_report', 'schedule_consultation', 'prescribe_test', 'do_weekly_monitoring', 'save', 'cancel' ]);
				break;
			}

			case 'consultation completed (weekly monitoring)': {
				this.hideButtons(this.actionbarMap, [ 'calculate_risk_score', 'needs_consultation', 'download_report', 'schedule_consultation', 'prescribe_test', 'do_weekly_monitoring' ]);
				if (!this.isDoctor()) {
					this.showButtons(this.actionbarMap, [ 'save', 'cancel' ]);
				}
				break;
			}

			default: {
				this.hideButtons(this.actionbarMap, [ 'needs_consultation', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation' ]);
				if (!this.isDoctor()) {
					this.showButtons(this.actionbarMap, [ 'save', 'cancel' ]);
				}
				break;
			}
		}
	}

	public customConfirmConfig(confirmConfig: any, btn) {
		return confirmConfig;
	}
}