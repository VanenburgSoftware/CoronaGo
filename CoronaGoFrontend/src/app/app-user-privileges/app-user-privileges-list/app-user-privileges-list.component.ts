import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit  } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { VsGridComponent } from '@widget/vs-grid/vs-grid.component';
import { UtilService } from '@core/util.service';
import { BaseService } from '@core/base.service';
import { AppConstants } from '@app/app-constants';
import { AppGlobalService } from '@app/app-global.service';
import { ApiConstants } from '@app/api-constants';
import { ModalPopupService } from '@app/shared/services/modal-popup.service';

import { AppUserPrivilegesListHandler } from '@custom/app-user-privileges/app-user-privileges-list/app-user-privileges-list.handler';
import { AppUserPrivilegesService } from '../app-user-privileges.service';
import { AppUserPrivilegesListMobileViewComponent } from './app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component';

@Component({
  selector: 'app-app-user-privileges-list',
  templateUrl: './app-user-privileges-list.component.html',
  styleUrls: ['./app-user-privileges-list.component.scss']
})
export class AppUserPrivilegesListComponent extends AppUserPrivilegesListHandler implements OnInit, AfterViewInit {


  public gridConfig: any = {};
  public actionBarconf: any = [];
  private refreshGrid: any;
  private dtTable: any;
  private subscriptions: any = [];
  public pageName = 'APP_USER_PRIVILEGES_LIST';
  private enableBtnsIfRecordSelected: any = [];
  private actionBtns: any;
  private isPrototyping: boolean;
  public searchconfig: any;

  public lane: any[] = [];
  public kanbanData: any[] = [];
  public kanbanFields: any[] = [];
  public kanbanOptions: any = {};
  public showKanban = false;
  public showGrid = true;
  public showAdditionalListButtons = false;
  public isMobile: boolean;
  public extendedPageConfig = {};
  public showSearchForMobile: boolean;
  
  @ViewChild(VsGridComponent)
  private gridComponent: any = VsGridComponent;
  
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    const target = $(event.target);
    if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
      this.showAdditionalListButtons = false;
    }
  }

  constructor(
  	public util: UtilService, 
  	private appUserPrivilegesService: AppUserPrivilegesService, 
  	private _http: BaseService, 
  	private route: Router,
    private acRoute: ActivatedRoute, 
    private location: Location, 
    private appGlobal: AppGlobalService, 
    private element: ElementRef,
    private modalPopupService: ModalPopupService
    ) {
    super(util);
  }

  ngOnInit() {
	this.isMobile = AppConstants.isMobile;
    this.isPrototyping = this.appGlobal.get('prototyping');
    this.gridConfig = this.loadGridConfig();
    this.searchconfig = this.loadSearchConfig();
    this.actionBarconf = this.loadActionBar();
    this.kanbanOptions = this.loadKanban();
    this.extendedPageConfig = this.configureExtendedPageConfig();
  }
  
   ngAfterViewInit(): void {
    this.showAdditionalListButtons = true;
    setTimeout(() => {
      this.showAdditionalListButtons = false;
    }, 100);
  }
  
  getDetailFormConfig() {

  }

  private loadGridConfig(): any {
    const self = this;
    let gridHeight: number;

    const currentEl = this.element.nativeElement;
    const gridEl = currentEl.querySelector('app-vs-grid');
    const gridElOffsetTop = gridEl.querySelector('div').offsetTop + (AppConstants.isMobile ? 40 : 80);
    gridHeight = window.innerHeight - gridElOffsetTop;
  

    const gridConfig: any = {
      ordering: this.isPrototyping ? true : false,
      customOrdering: this.isPrototyping ? false : true,
	  mobileTemplate: AppUserPrivilegesListMobileViewComponent,
      mobileContent: this.mobileContent.bind(this),

      columns: [
      	{
      		data: 'firstName',
      		name: 'first_name',
      		title: 'FIRST_NAME',
      		type: 'string',
      	},
      	{
      		data: 'admin',
      		name: 'app_admin',
      		title: 'APP_ADMIN',
      		type: 'boolean',
      		render: this.displayBooleanData
      	},
      	{
      		data: 'doc',
      		name: 'doctor',
      		title: 'DOCTOR',
      		type: 'boolean',
      		render: this.displayBooleanData
      	},
      	{
      		data: 'pat',
      		name: 'patient',
      		title: 'PATIENT',
      		type: 'boolean',
      		render: this.displayBooleanData
      	},
      	{
      		data: 'ha',
      		name: 'hospital_admin',
      		title: 'HOSPITAL_ADMIN',
      		type: 'boolean',
      		render: this.displayBooleanData
      	},
      	{
      		data: 'scl',
      		name: 'state_county_login',
      		title: 'STATE_COUNTY_LOGIN',
      		type: 'boolean',
      		render: this.displayBooleanData
      	},
      ],     
      disableSelection: false,
      onRowSelect: (selectedRows: any, id: any) => {
		this.updateBtnPermission(selectedRows);
		this.onAfterRowSelect(selectedRows, id);
      },
      onRowDeselect: (selectedRows: any) => {
		this.updateBtnPermission(selectedRows);
	  },
      onInitComplete: (dtTable: any, settings: any, json: any) => {
        self.dtTable = dtTable;
        self.createRefreshMethod(settings, json, dtTable);
      },
      onRowClick: (event: any, id: any) => {
       this.navigateToDetail(id);
      },
      maxRowsAllowedForSelection: AppConstants.maxRowsAllowedToSelect,
      rowMenuOptions: [
      ],
      beforeRowMenuShow: (option: any, data: any, row: any) => {
        return self.onBeforeRowMenuShow(option, data, row);
      },
      onRowMenuClick: (option: any, row: any, data: any) => {
        self.onRowMenuAction(option, row, data);
      },
	  onMobileRowDisplay: (row: Node, data: any[] | object, index: number) => {
        return row;
      },
      complexHeader: [
      ]
    };
    

    if (gridConfig.complexHeader && gridConfig.complexHeader.length){
     	gridConfig.scrollY = gridHeight - 60;
    } else if (this.isMobile) {
      	gridConfig.scrollY = gridHeight + 60;
    } else {
    	gridConfig.scrollY = gridHeight;
    }

    if (this.isPrototyping) {
      gridConfig.data = this.appUserPrivilegesService.getPrototypingData(gridConfig.columns);
	  this.kanbanData = gridConfig.data;
    } else {
      gridConfig.ajaxMethod = 'POST';
      gridConfig.ajaxUrl = '/' + AppConstants.apihost + '/' + ApiConstants.getAppUserPrivilegesAll_AppUserPrivileges.url;
    }

	if (this.isMobile) {
      const isStatusField = gridConfig.columns.filter(col => col.data === 'status');
      if (isStatusField.length) {
        const status = gridConfig.columns.splice(gridConfig.columns.indexOf(isStatusField[0]), 1);
        gridConfig.columns.splice(1, 0, isStatusField[0]);
      }
    }
    const extendedConfig: any = this.extendedGridConfig(gridConfig);
    return extendedConfig;
  }

  private onBeforeRowMenuShow(option: any, data: any, row: any) {
    return this.beforeRowMenuOptionShow(option, data, row);
  }

  private getSelectedRows() {
    const selectedRowIds: any = [];
    const rows = this.dtTable.rows('.selected').data();
    const uniqueIdField = this.gridConfig.uniqueIdField ? this.gridConfig.uniqueIdField : 'sid';
    for (const row of rows) {
      selectedRowIds.push(row[uniqueIdField]);
    }

    return selectedRowIds.join(',');
  }

  private createRefreshMethod(settings: any, json: any, dtTable: any) {
     this.refreshGrid = (config: any) => {
        this.gridComponent.refreshGrid();
    };
  }

  public onFilterChange(e: any): void {
    this.dtTable.fnDestroy();
    this.dtTable();
  }

  public loadSearchConfig() {
    let searchConfig: any = {};
    searchConfig.advSearch = [
     {
		security_code: 'email',
        label: 'User Email',
        type: 'email',
        name: 'email'
     },
     {
		security_code: 'firstName',
        label: 'First Name',
        type: 'text',
        name: 'firstName'
     },
     {
		security_code: 'lastName',
        label: 'Last Name',
        type: 'text',
        name: 'lastName'
     },
     {
		security_code: 'devadmin',
        label: 'Development Administrator',
        type: 'checkbox',
        name: 'devadmin'
     },
     {
		security_code: 'pat',
        label: 'Patient',
        type: 'checkbox',
        name: 'pat'
     },
     {
		security_code: 'doc',
        label: 'Doctor',
        type: 'checkbox',
        name: 'doc'
     },
     {
		security_code: 'ha',
        label: 'Hospital Admin',
        type: 'checkbox',
        name: 'ha'
     },
     {
		security_code: 'admin',
        label: 'App Admin',
        type: 'checkbox',
        name: 'admin'
     },
     {
		security_code: 'scl',
        label: 'State County Login',
        type: 'checkbox',
        name: 'scl'
     },
    ];
	searchConfig = this.extendedSearchConfig(searchConfig);
    return searchConfig;
  }

  private updateBtnPermission(selectedRows: any) {
	const permission = selectedRows.ids().length ? true : false;
	for (const key of this.enableBtnsIfRecordSelected) {
		this.actionBtns[key].permission = permission;
   	}

  }

  private loadActionBar(): any {

    let actionBarconf = {
      buttons: {
        primary: [],
		secondary: [
		[{
	      label: 'NEW',
	      action: 'create',
	      show: true,
	      class: 'create-btn hidden',
	      name: 'create'
	    }],
		[{
          label: !AppConstants.isMobile ? 'DELETE' : '',
          action: 'delete',
          icon: 'fa-trash-o',
          iconFont: 'font_awesome',
          permission: false,
          enableIfRecordsSelected: true,
          show: true,
          name: 'delete'
        }, {
          label: !AppConstants.isMobile ? 'REFRESH' : '',
          action: 'refresh',
          icon: 'fa-refresh',
          iconFont: 'font_awesome',
          show: true,
          name: 'refresh'
        }],
          // Default buttons ends
          // Form buttons in the list page
        
		]
      }
    };
	if (!this.isMobile) {
      actionBarconf.buttons.secondary.shift();
    }
    
    actionBarconf = this.extendedActionbarConfig(actionBarconf);

    return actionBarconf;
  }

  public actionBarInitComplete(e: any): void {
	this.actionBtns = e.elementMap;

   	for (const btn in this.actionBtns) {
    	const btnConfig = this.actionBtns[btn];
     	if (btnConfig.enableIfRecordsSelected) {
       		this.enableBtnsIfRecordSelected.push(btn);
     	}
   	}

  }

  public createRecord() {
    this.actionBarAction({
      action: 'create'
    });
  }
  
  public actionBarAction(btn: any): void {
	this.showAdditionalListButtons = false;
    this.onBeforeButtonAction(btn);
    if (btn.action === 'back') {
      this.onBeforeBackAction();
      this.location.back();
      this.onAfterBackAction();
    } else if (btn.action === 'refresh') {
      if (this.refreshGrid) {
        this.refreshGrid(btn);
      }
    } else if (btn.action === 'create') {
      this.onBeforeCreateAction(btn);
      this.onCreateAction(btn);
      this.onAfterCreateAction(btn);
    } else if (btn.action === 'delete') {
      const selectedRowIds = this.getSelectedRows();
      
      this.onBeforeDeleteAction(selectedRowIds, btn, 'action_bar');
      this.onDeleteAction(selectedRowIds, btn, 'action_bar');
      this.onAfterDeleteAction(selectedRowIds, btn, 'action_bar');
      
    }
  }
  

  private onRowMenuAction(option: any, row: any, data: any) {
    const thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
  }
  

  private navigateToDetail(id?: string){
  	const url = this.route.url;
    const pathParams : any = {
      id : id ? id : '',
      fp: url.substring(url.lastIndexOf('/') + 1)
    };
    if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
		if (this.route['browserUrlTree'].queryParams) {
			$.extend(pathParams, this.route['browserUrlTree'].queryParams);
		}

		this.route.navigate(['appuserprivilegesdetail', pathParams], { relativeTo: this.acRoute });
	} else {
		this.route.navigate(['../appuserprivilegesdetail', pathParams], { relativeTo: this.acRoute});
	}
  }
  

  private onCreateAction(config: any): void {
     this.navigateToDetail();
  }
  

  private displayBooleanData(data: any, type: any, row: any): string {
    return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
  }

  private onDeleteAction(selectedRowIds: string, config: any, source?: string): void {
    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to delete the selected record(s)?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, config);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
    confirm.subscribe((isConfirmed: boolean) => {
    	if(isConfirmed){
	    	if (!source) { source = 'action_bar'; }
		 	const params = {
		      ids : selectedRowIds
		    };
		    const deleteSubscription = this.appUserPrivilegesService.deleteAppUserPrivileges(params);
		    deleteSubscription.subscribe(
		      (res: any) => {
		        this.refreshGrid();
		        this.onAfterServiceResponse(res, config, source);
		      },
		      (error: string) => {
				this.refreshGrid();
		      }
		    );
		
		    this.subscriptions.push(deleteSubscription);
	    }
    });
  }

  private onUpdateAction(selectedRowIds: string, config: any, source?: string): void {

    if (!source) { source = 'action_bar'; }
 	const params = {
      id : selectedRowIds
    };
    const updateSubscriber = this.appUserPrivilegesService.updateAppUserPrivileges(params);
    updateSubscriber.subscribe(


      (res: any) => {
        this.refreshGrid();
        this.onAfterServiceResponse(res, config, source);
      },
      (error: string) => {

      }
    );

    this.subscriptions.push(updateSubscriber);
  }
  

  private onAfterServiceResponse(res: any, config: any, source: string) {
    if (source === 'action_bar') {
      this.onAfterButtonAction(config, res);
    } else {
      this.onAfterRowMenuAction(config, res);
    }
  }

  ngOnDestory() {
    this.onBeforeComponentDestroy();
    this.subscriptions.forEach((subs: { unsubscribe: () => void; }) => subs.unsubscribe());
  }

/**
   * For Kanban
   * TODO
   */

  loadKanban() {
    let kanbanOptions = this.loadKanbanOptions();
    kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
    kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
    return kanbanOptions;
  }

  loadKanbanOptions() {
    const config = {
      url: this.isPrototyping ? '' : '/' + AppConstants.apihost + '/' + ApiConstants.getAppUserPrivilegesAll_AppUserPrivileges.url,
      template: '',
      lanes: [],
      groupBy: '',
      laneBy: '',
      gridColumns: this.gridConfig.columns
    };

    if (!config.url || this.isPrototyping) {
      // tslint:disable-next-line:no-string-literal
      config['data'] = this.gridConfig.data;
    }
    return config;
  }

  toggleKanbanView(type) {

    if (type === 'list') {
      this.showGrid = true;
      this.showKanban = false;
    } else if (type === 'kanban') {
      this.showGrid = false;
      this.showKanban = true;
    }
    
    setTimeout( () => {
      window.dispatchEvent(new Event('resize'));
    });
  }
}
