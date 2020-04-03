import moment from 'moment';
import { AppGlobalService } from '@app/app-global.service';

export class PatientInformationDetailHandler {

	actionbarMap: any;
	customFormConfig: any;
	customCaption: any;

	public updateActionBarConfig(actionConfig: any, type): any {
		actionConfig.buttons.primary[1][0]['class'] = 'pge-primary';
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
		this.actionbarMap = data;
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

	public handleCustomEvents(e: Event | any, form?: any) {
		if (!this.customFormConfig) { return; }
		this.customFormConfig.patchValue({
			age: moment().diff(e.value, 'years', false)
		});

	}

	public onAfterServiceResponse(data: any): any { }

	public onAfterResponseData(data: any): any { }

	public customActionHandler(btn: any) {
		return false;
	}

	public customConfirmConfig(confirmConfig: any, btn) {
		return confirmConfig;
	}
}