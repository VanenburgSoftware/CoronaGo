import { UtilService } from '@core/util.service';

export class DoctorActivityLogListHandler {

  constructor(public util: UtilService) { }

  public configureExtendedPageConfig() {
    return {};
  }

  public extendedGridConfig(gridConfig: any): any {
    for (const idx in gridConfig.columns) {
    }
    return gridConfig;
  }

  public beforeRowMenuOptionShow(option: any, data: any, row: any): any {
    return option;
  }

  public onAfterGridInitComplete(dtTable: any, settings: any, json: any) {
  }

  public onAfterRowSelect(rows: any, idx: any) {
  }

  public onAfterRowClick(event: any, id: any) {
  }


  public onBeforeButtonAction(btn: any): any {
    return;
  }


  public onAfterButtonAction(btn: any, response: any): any {
    return;
  }


  public onAfterRowMenuAction(option: any, response: any): any {
  }


  public onBeforeComponentDestroy() {

  }

  public extendedSearchConfig(config: any): any {
    return config;
  }

  public extendedActionbarConfig(config: any): any {
    return config;
  }

  public extendedKanbanConfig(config: any): any {
    return config;
  }
  
  public onBeforeBackAction() {

  }

  public onAfterBackAction() {

  }

  public onBeforeCreateAction(btn: any) {

  }

  public onAfterCreateAction(btn: any) {

  }

  public onBeforeDeleteAction(selectedRowIds, btn, type) {

  }

  public onAfterDeleteAction(selectedRowIds, btn, type) {

  }

  // TODO
  public setDefaultFields(field, showLabel, classes, mobileContent, data) {
    mobileContent.mainContent[field] = {
      data: data[field],
      showLabel,
      classes
    }
  }

  public setAdditionalFields(mobileContent, data) {
    mobileContent.innerContent = {};
    Object.keys(data).map(item => {
      if (!mobileContent.mainContent.hasOwnProperty(item)) {
        mobileContent.innerContent[item] = {
          data: data[item]
        };
      }
      return item;
    });
  }

  public mobileContent(row: Node | any, data: any[] | object, index: number, mobileContent: any) {

    /* mobileContent.mainContent = {};
 
     this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
     this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
     this.setDefaultFields('status', false, 'col-6', mobileContent, data);
     this.setDefaultFields('category', false, 'col-6', mobileContent, data);
     this.setAdditionalFields(mobileContent, data);*/


    return mobileContent;


  }
  
  public customActionHandler(btn: any) {
		return false;
	}
	public customConfirmConfig(confirmConfig: any, btn) {
		return confirmConfig;
	}	
}
