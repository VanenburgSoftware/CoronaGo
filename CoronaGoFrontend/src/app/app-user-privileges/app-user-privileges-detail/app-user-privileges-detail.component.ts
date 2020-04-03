import { Component, OnInit, ViewChild } from '@angular/core';
import { VsFormComponent } from '@app/widget/vs-form/vs-form.component';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadAttachmentService } from '@app/widget/services/upload-attachment.service';
import { UtilService } from '@app/core/util.service';
import { BaseService } from '@app/core/base.service';
import { AppGlobalService } from '@app/app-global.service';
import { ApiConstants } from '@app/api-constants';
import { AppConstants } from '@app/app-constants';
import expressions from 'angular-expressions';
import * as _ from 'lodash';
		
import  SecurityJson  from '@app/security/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.security';
import { AppUserPrivilegesDetailHandler } from '@app/custom/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.handler';
import { AppUserPrivilegesService } from '../app-user-privileges.service';

import { ModalPopupService } from '@app/shared/services/modal-popup.service';

@Component({
  selector: 'app-app-user-privileges-detail',
  templateUrl: './app-user-privileges-detail.component.html',
  styleUrls: ['./app-user-privileges-detail.component.scss']
})
export class AppUserPrivilegesDetailComponent extends AppUserPrivilegesDetailHandler implements OnInit {


  public formConfig: any;
  public id: any;
  public pagename: any;
  public infolabel: any;
  public data = {};
  public backupData: any;
  public captionElement = {};
  private fileFields: any[] = [];
  public actionBarconf: any;
  public workflowActionBarconf: any;
  public captionbarconf: any;
  public local: any = {};
  private subscriptions: any = [];
  public isMobile: boolean;

  @ViewChild(VsFormComponent) child;

  constructor(
    private location: Location,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private uploadService: UploadAttachmentService,
    private utilService: UtilService,
    private baseService: BaseService,
    private appGlobalService: AppGlobalService,
    private appUserPrivilegesService: AppUserPrivilegesService,

    private modalPopupService: ModalPopupService
  ) { super(); }

  /**
   * action bar configuration settings.
   */
  actionBarConfiguration() {
   let actionBarconf = {
   	  showMobilePrimary: true,
      buttons: {
        primary: [
          // Default buttons starts
          [{
            label: '',
            show: true,
            icon: 'fa-arrow-left',
            iconFont: 'font_awesome',
            action: 'back'
          }],
          [{
            label: 'Save',
            action: 'save',
            show: true
          }, {
            label: 'Cancel',
            action: 'cancel',
            show: true
          }]
        ],
		secondary: [
		]
      }
    };
    actionBarconf = this.updateActionBarConfig(actionBarconf, 'init');
    return actionBarconf;
  }

  /**
   * workflow action bar configuration settings.
   */
  workflowActionBarConfiguration() {
    const workflowActionbarconf = {
      buttons: {
        primary: [
          

        ]
      }
    };
    return workflowActionbarconf;
  }

  /**
   * Caption bar configuration
   */
  captionbarConfiguration() {
    let captionbarconf = {
      modules: [],
      moduleclass: 'pull-left horz-padding',
      detailclass: 'iar-caption-detail pull-right',
      details: [],
      currentModule: ' '
    };
    captionbarconf = this.updateCaptionConfig(captionbarconf, 'init');
    return captionbarconf;
  }

  dataChanged = (data) => { 
   this.customDataChanged(data);
  };
  captionbarAction = (data) => {
   this.customCaptionbarAction(data);
  };
  captionBarInitComplete = (data) => {
    const captionConf = this.updateCaptionConfig(data, 'init');
    this.captionElement = captionConf.elementMap;
    this.customCaptionbarInitComplete(data);
  }
  actionBarInitComplete = (data) => { 
    this.customActionbarInitComplete(data);
  };
  workflowActionBarInitComplete = (data) => {
    this.customWorkflowActionbarInitComplete(data);
  };
  buttonAction = (btn) => {
    if (btn.action === 'back') {
       this.goBack();
    } else if (btn.action === 'save') {
      this.saveData();
    } else if (btn.action === 'cancel') {
      this.resetData();
    } else if(btn.action === 'create'){
    	this.navigateToDetail('', btn.page);
    } else if(btn.action === 'refresh'){
    
    } 
  }
  
  private goBack() {

    if (this.child.form.pristine) {
      this.location.back();
    } else {
      this.modalPopupService.openConfirmationModal(
        'Cofirm', 'Do you want to discard all unsaved changes?', null, null, null
        ).subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.location.back();
        }
      });
    }
  }

	private navigateToDetail(id?: string, page?: string) {
	    const pathParams: any = {
	      id: id ? id : ''
	    };
	    if (this.router.routerState.snapshot.url.indexOf('/tab/') > -1) {
	      if (this.router['browserUrlTree'].queryParams) {
	        $.extend(pathParams, this.router['browserUrlTree'].queryParams);
	      }
	
	      this.router.navigate([page + "/"+page+"detail", pathParams]);
	    } else {
	      this.router.navigate([page + "/"+page+"detail", pathParams]);
	    }
	  }

  private getFormConfig(securityJson?: any) {
    this.local.formConfig = {};

   	this.local.formConfig.email = {

      security_code: 'email',
      label: 'User Email',
      type: 'email',
      name: 'email',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	required: true,
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };

   	this.local.formConfig.firstName = {

      security_code: 'firstName',
      label: 'First Name',
      type: 'text',
      name: 'firstName',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	required: true,
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };

   	this.local.formConfig.lastName = {

      security_code: 'lastName',
      label: 'Last Name',
      type: 'text',
      name: 'lastName',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	required: true,
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };

   	this.local.formConfig.pat = {

      security_code: 'pat',
      label: 'Patient',
      type: 'checkbox',
      name: 'pat',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };

   	this.local.formConfig.doc = {

      security_code: 'doc',
      label: 'Doctor',
      type: 'checkbox',
      name: 'doc',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };

   	this.local.formConfig.ha = {

      security_code: 'ha',
      label: 'Hospital Admin',
      type: 'checkbox',
      name: 'ha',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };

   	this.local.formConfig.admin = {

      security_code: 'admin',
      label: 'App Admin',
      type: 'checkbox',
      name: 'admin',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };

   	this.local.formConfig.scl = {

      security_code: 'scl',
      label: 'State County Login',
      type: 'checkbox',
      name: 'scl',
      placeholder: '',
      
      infoBubble: '',
      values:[],
      options:[],
      disabled: false,
      toolbar: true,
      validations: {
      	      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },
      
      
    };
    let config= {
      initCallback: this.AppUserPrivilegesDetailFormInitComplete.bind(this),
      collapsible: false,
      submit: 'saveBasicDetails',
      class: 'no-margin form-elements-group',
      securityEvaluation: true,
      staticSecurityJson: securityJson,
      disabledForm: false,
      columns: 100,
      groups: [
       	  		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '100',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '100',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
this.local.formConfig.email,         
this.local.formConfig.firstName,         
this.local.formConfig.lastName         
          ]
        }

                    
          ]
        }

                    
          ]
        }
,        
       	  		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '100',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero max-25',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
this.local.formConfig.pat         
          ]
        }
,
                    
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero min-75',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
          ]
        }

                    
          ]
        }
,        
       	  		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '100',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero max-25',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
this.local.formConfig.doc         
          ]
        }
,
                    
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero min-75',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
          ]
        }

                    
          ]
        }
,        
       	  		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '100',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero max-25',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
this.local.formConfig.ha         
          ]
        }
,
                    
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero min-75',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
          ]
        }

                    
          ]
        }
,        
       	  		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '100',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero max-25',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
this.local.formConfig.admin         
          ]
        }
,
                    
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero min-75',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
          ]
        }

                    
          ]
        }
,        
       	  		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '100',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero max-25',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
this.local.formConfig.scl         
          ]
        }
,
                    
             		{

  		    groupHeaderClass: 'hidden hidden',  		  
          groupContentClass: 'paddingZero min-75',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [
          ]
        }

                    
          ]
        }
        

      ]
    };
    config = this.updateFormConfig(config, this.local.formConfig);
    return config;
  }
  
  public AppUserPrivilegesDetailFormInitComplete(form: any) {
  	this.customFormInitComplete(form);
  }

  private displayBooleanData(data: any, type: any, row: any): string {
    return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
  }

  private normalizeData(data: any) {
    data = this.updateFormdata(data);
    return data;
  }

  private updateCaptionBarWithData(data: any) {
    if (!this.captionbarconf) {
      return;
    }

    const tempCaption = { ...this.captionbarconf };

    tempCaption.details.map(detail => {
      detail.content = data[detail.name];
      return detail;
    });

    this.captionbarconf = { ...tempCaption };
  }

  private responseDataManipulation(data: any, dontPatch?: boolean) {
    if (!data) {
      this.child.form.reset();
      return;
    }
	this.infolabel = expressions.compile('')(data);
    if (!this.route.snapshot.params.id && !this.id) {
      this.id = data.sid;      
      this.location.replaceState(this.location.path() + data.sid);
    }

    let pagespec = '';
    if (this.pagename && data.projects) {
      pagespec = " - Define Logic here please";
      this.pagename = this.pagename + pagespec;
    }
    this.backupData = data;
    if (!dontPatch) {
      this.child.form.patchValue(this.normalizeData(data));
    }
    this.updateCaptionBarWithData(data);
	this.onAfterResponseData(data);
    // this.data = this.normalizeData(data); // Object.assign({}, this.normalizeData(data));
  }

  private getData() {
    if (!this.id) {
      return;
    }

    const params = {
      sid: this.id
    };

      this.appUserPrivilegesService.getAppUserPrivilegesBySid(params).subscribe((response: any) => {
      this.child.form.patchValue(response);
      this.responseDataManipulation(response, true);
    });
  }

  private saveAddedFiles(splittedData) {
    this.uploadService.saveAddedFiles(splittedData, this.id, this.child.form).subscribe(res => {
		let fData = {};
		for (const key in res) {
			if (res[key] instanceof Array) {
				fData[key] = _.compact(_.uniq(res[key].flat()));
			} else {
				fData[key] = [res[key]];
			}
		}



		const finalData = { data: { ...splittedData.data, ...fData } };
		this.saveDataThenFiles('put', finalData, false);
	});
  }

  private saveDataThenFiles(method, splittedData, saveFiles?: boolean) {
    let service;
	if (method === 'post') {
		service = this.appUserPrivilegesService.createAppUserPrivileges(splittedData.data);

	} else if (method === 'put') {
		if (!splittedData.data.sid) {
			splittedData.data.sid = this.id;
		}
		service = this.appUserPrivilegesService.updateAppUserPrivileges(splittedData.data);


	}
	service.subscribe(res => {
		if (saveFiles) {
			const data = { ...splittedData.data, ...res };
			splittedData.data = data;
			this.child.form.markAsPristine();
			this.saveAddedFiles(splittedData);
		}

		this.responseDataManipulation(res, false);
	});
  }


  private saveData() {
    const submitButton: HTMLButtonElement = this.child.submitButton.nativeElement;
    submitButton.click();
    if (!this.child.form.valid) {
      return;
    }
    const splittedData = this.utilService.splitFileAndData(this.child.form.value, this.fileFields);
    const saveData = this.validateDataBeforeSave(splittedData.data);

    if (!saveData) {
      return;
    }

    if (this.id) {
      if (splittedData.files) {
        this.saveDataThenFiles('put', splittedData, true);
      } else {
        this.saveDataThenFiles('put', splittedData, false);
      }
    } else {
      if (splittedData.files) {
        this.saveDataThenFiles('post', splittedData, true);
      } else {
        this.saveDataThenFiles('post', splittedData, false);
      }
    }

  }

  private resetData() {
    // tslint:disable-next-line: max-line-length
    this.modalPopupService.openConfirmationModal('Cofirm', 'Do you really want to cancel the changes?', null, null, null).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.responseDataManipulation(this.backupData);
      }
    });
  }

  getSecurityJSON() {

    const currentUser = this.getCurrentUser();
    const securityJson = SecurityJson;
    const roles = [];
    const userStepJsonList = [];
    for (const role in securityJson) {
      if (securityJson.hasOwnProperty(role)) {
        if (currentUser[role] === true) {
          //return securityJson[role];
          userStepJsonList.push(securityJson[role]);
        }
      }
    }
    return userStepJsonList.length > 0 ? userStepJsonList : null;
  }

  getCurrentUser() {
    return this.appGlobalService.get('currentUser');
  }
  
  private onCreateAction(btn: any): void {
  
  	let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Create?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
    
    confirm.subscribe((isConfirmed: boolean) => {
    	if (isConfirmed) {
    		const createSubscriber = this.appUserPrivilegesService.createAppUserPrivileges(this.id);
		    createSubscriber.subscribe(
		
		      (res: any) => {        
		        this.onAfterServiceResponse(res);
		      },
		      (error: string) => {
		      }
		    );
		    this.subscriptions.push(createSubscriber);
    	}
    });
  	
    
  }
  
  private onUpdateAction(btn: any): void {
  
  	let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Update?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
    
    confirm.subscribe((isConfirmed: boolean) => {
    	if (isConfirmed) {
    		const updateSubscriber = this.appUserPrivilegesService.updateAppUserPrivileges(this.id);
		    updateSubscriber.subscribe(
		
		      (res: any) => {        
		        this.onAfterServiceResponse(res);
		      },
		      (error: string) => {
		      }
		    );
		    this.subscriptions.push(updateSubscriber);
    	}
    });
  	
    
  }
  
  private onDeleteAction(btn: any): void {
  
  	let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Delete?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
    
    confirm.subscribe((isConfirmed: boolean) => {
    	if (isConfirmed) {
    		const deleteSubscriber = this.appUserPrivilegesService.deleteAppUserPrivileges(this.id);
		    deleteSubscriber.subscribe(
		
		      (res: any) => {        
		        this.onAfterServiceResponse(res);
		      },
		      (error: string) => {
		      }
		    );
		    this.subscriptions.push(deleteSubscriber);
    	}
    });
  	
    
  }
  

  setFileFields() {
    for (const field in this.local.formConfig) {
      if (this.local.formConfig.hasOwnProperty(field)) {
        const element = this.local.formConfig[field];
        if (element.type === 'image' || element.type === 'file' || element.file === 'carousel') {
          this.fileFields.push(element.name);
        }
      }
    }
  }
  	
  ngOnInit() {
  	this.isMobile = AppConstants.isMobile;
    this.id = this.route.snapshot.params.id;
    this.actionBarconf = this.actionBarConfiguration();
    this.workflowActionBarconf = this.workflowActionBarConfiguration();
    this.pagename = 'APP_USER_PRIVILEGES_DETAIL';
    this.getData();
    this.formConfig = this.getFormConfig(this.getSecurityJSON());
    this.setFileFields();
  }

}
