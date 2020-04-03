export class ResourcesDetailHandler {

	actionbarMap: any;
	customFormConfig: any;
	customCaption: any;

	public updateActionBarConfig(actionConfig: any, type): any {
		let actionBarconf = {
			showMobilePrimary: true,
			buttons: {
				primary: [
					// Default buttons starts
					[ {
						label: '',
						show: true,
						icon: 'fa-arrow-left',
						iconFont: 'font_awesome',
						action: 'back'
					} ]
				],
				secondary: [
				]
			}
		};
		return actionBarconf;
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

	public handleCustomEvents(e: Event, form?: any) { }

	public onAfterServiceResponse(data: any): any { }

	public onAfterResponseData(data: any): any { }

	public customActionHandler(btn: any) {
		return false;
	}

	public customConfirmConfig(confirmConfig: any, btn) {
		return confirmConfig;
	}
}