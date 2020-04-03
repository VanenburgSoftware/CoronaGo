export class IncidentsDetailHandler {
 public updateActionBarConfig(actionConfig: any, type): any {
	return actionConfig;
 }

 public updateCaptionConfig(captionConfig: any, type): any {
 	return captionConfig;
 }

 public customCaptionbarAction(data: any) {

 }

 public customCaptionbarInitComplete(data: any) {

 }

 public customActionbarInitComplete(data: any) {

 }

 public customWorkflowActionbarInitComplete(data: any) {

 }

 public updateFormConfig(currentConfig, localPlaceHolder): any {
	return currentConfig;
 }

 public updateFormdata(data: any): any {
 	return data;
 }
 public validateDataBeforeSave(data: any): any {
	return data;
 }

 public customDataChanged(data: any) {
 
 }

 public handleCustomEvents(e: Event, form?: any) {
	console.log('CUSTOM EVENT::: ', e);
	console.log('CURRENT FORM:::', form);

 }
 public onAfterServiceResponse(data:any):any{
 }

 public onAfterResponseData(data: any): any {
	 
 }
 
}