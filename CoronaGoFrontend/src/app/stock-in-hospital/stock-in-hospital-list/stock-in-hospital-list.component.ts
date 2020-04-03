import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { VsGridComponent } from '@widget/vs-grid/vs-grid.component';
import { UtilService } from '@core/util.service';
import { BaseService } from '@core/base.service';
import { AppConstants } from '@app/app-constants';
import { AppGlobalService } from '@app/app-global.service';
import { ApiConstants } from '@app/api-constants';
import { ModalPopupService } from '@app/shared/services/modal-popup.service';

import { StockInHospitalListHandler } from '@custom/stock-in-hospital/stock-in-hospital-list/stock-in-hospital-list.handler';
import { StockInHospitalService } from '../stock-in-hospital.service';
import { StockInHospitalListMobileViewComponent } from './stock-in-hospital-list-mobile-view/stock-in-hospital-list-mobile-view.component';
import { VsFormComponent } from '@app/widget/vs-form/vs-form.component';
import * as _ from 'lodash';
@Component({
  selector: 'app-stock-in-hospital-list',
  templateUrl: './stock-in-hospital-list.component.html',
  styleUrls: ['./stock-in-hospital-list.component.scss']
})
export class StockInHospitalListComponent extends StockInHospitalListHandler implements OnInit, AfterViewInit {


  public gridConfig: any = {};
  public actionBarconf: any = [];
  private refreshGrid: any;
  private dtTable: any;
  private subscriptions: any = [];
  public pageName = 'STOCK_IN_HOSPITAL_LIST';
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
  public formConfig: any = {};
  public data = {};
  public local: any = {};
  public stockItemOptions: any = [];
  private selectedItemName: string;
  private gridItems: any[] = [];
  public dataChanged: any;

  @ViewChild(VsGridComponent) private gridComponent: any = VsGridComponent;

  @ViewChild(VsFormComponent) child;

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    const target = $(event.target);
    if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
      this.showAdditionalListButtons = false;
    }
  }

  constructor(
    public util: UtilService,
    private stockInHospitalService: StockInHospitalService,
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

  getStockItemOptions() {
    this.stockInHospitalService.getAllItems(null).subscribe((items: any) => {
      const convertedItems = [];
      items.map(item => {
        convertedItems.push({
          label: item.itemName,
          value: item.itemId
        });
      });
      this.stockItemOptions = convertedItems;
      this.formConfig = this.getFormConfig();
    }, (err) => {
      // tslint:disable-next-line: max-line-length
      this.stockItemOptions = [{ "label": "Gloves for examination(protective)", "value": "4529272d-e78d-4889-81a8-030b5bbd8ecf" }, { "label": "Sanitizer", "value": "564ed826-9017-4673-886e-5719957b9d15" }, { "label": "Gloves for heavy duty tasks(domestic)", "value": "604e8f0a-90b3-43d2-9b5c-fb7dde79a265" }, { "label": "N95 Masks", "value": "76830ca6-c504-4015-b996-1a6ef45d8019" }, { "label": "Soap", "value": "7684d5b0-47a4-4181-9951-4c0904dbee85" }, { "label": "Glove powder", "value": "815d3b28-d5a6-4a5f-9a79-f9d28669618a" }, { "label": "PVC sheeting", "value": "ad624609-56dd-4aa2-83be-8cf635e14506" }, { "label": "Cotton wool", "value": "cecfccb4-83c4-4ea8-9a1a-b0ddbb122904" }, { "label": "Applicator stick", "value": "d4186465-9bd6-47b3-82d8-339bef162ae0" }, { "label": "buds(Q - tips, cotton buds)", "value": "ecef0877-1005-46c6-96a3-06b9affbf81e" }];
      this.formConfig = this.getFormConfig();
    });
  }

  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
    this.isPrototyping = this.appGlobal.get('prototyping');
    this.getStockItemOptions();
    this.gridConfig = this.loadGridConfig();
    this.searchconfig = this.loadSearchConfig();
    this.actionBarconf = this.loadActionBar();
    this.kanbanOptions = this.loadKanban();
    this.extendedPageConfig = this.configureExtendedPageConfig();
    //this.formConfig = this.getFormConfig();
  }

  ngAfterViewInit(): void {
    this.showAdditionalListButtons = true;
    setTimeout(() => {
      this.showAdditionalListButtons = false;
    }, 100);
  }
  getDetailFormConfig() {
  }
  handleCustomEvents(e) {
    if (e.srcElement.name === 'itemId') {
      this.selectedItemName = e.srcElement.selectedOptions[0].label;
    }
    console.log(e);
  }
  getFormConfig() {
    this.local.formConfig = {};
    this.local.formConfig.item = {
      security_code: 'item',
      label: 'Item Name',
      type: 'select',
      name: 'itemId',
      options: this.stockItemOptions,
      validations: {
        required: true,
      },
      formAttributes: {
        change: this.handleCustomEvents
      },
    };

    this.local.formConfig.stockinhand = {
      security_code: 'stockinhand',
      label: 'Stock In Hand',
      type: 'number',
      name: 'stockInHand',
      placeholder: '',
      infoBubble: '',
      values: [],
      options: [],
      disabled: false,
      toolbar: true,
      validations: {
        required: true,
      }
    };

    this.local.formConfig.stockrequired = {
      security_code: 'stockrequired',
      label: 'Stock Required',
      type: 'number',
      name: 'stockRequired',
      placeholder: '',
      infoBubble: '',
      values: [],
      options: [],
      disabled: false,
      toolbar: true,
      validations: {
        required: true,
      }
    };

    this.local.formConfig.create = {
      security_code: 'add',
      label: 'Add',
      type: 'formbutton',
      name: 'add',
      class: 'btn btn-primary pge-primary create-button',
    };

    let config = {
      collapsible: false,
      submit: 'saveBasicDetails',
      class: 'no-margin form-elements-group',
      securityEvaluation: true,
      disabledForm: false,
      columns: 100,
      groups: [
        {

          groupHeaderClass: 'hidden hidden',
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '25',
          label: '',
          disableRights: false,
          columnsWidth: 3,
          items: [
            this.local.formConfig.item,
            this.local.formConfig.stockinhand,
            this.local.formConfig.stockrequired,
            this.local.formConfig.create
          ]
        }
      ]
    };
    return config;
  }
  getItemName(itemId) {
    const item = _.find(this.stockItemOptions, (obj => {
      return obj.value === itemId;
    }));
    return item.label;
  }

  handleFormBtnClick(element) {

    //  const that = this;
    if (element.data) {
      const saveData = { ...element.data };
      if (saveData.itemId === '' || saveData.stockInHand === '' || saveData.stockRequired === '') {
        return;
      }
      delete saveData.add;
      saveData.item = this.getItemName(saveData.itemId);
      let listContainsItem = _.find(this.gridItems, (obj) => {
        return obj.itemId === saveData.itemId;
      });
      const service = listContainsItem ? this.stockInHospitalService.updateStockInHospital(saveData) : this.stockInHospitalService.createStockInHospital(saveData);
      service.subscribe(resq => {
        this.refreshGrid();
        //this.child.form.reset();
        this.child.form.markAsPristine();
        this.child.form.markAsUntouched();
      });
    }
    console.log(element);

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
      mobileTemplate: StockInHospitalListMobileViewComponent,
      mobileContent: this.mobileContent.bind(this),

      columns: [
        {
          data: 'item',
          name: 'item',
          title: 'ITEM',
          type: 'string',
        },
        {
          data: 'stockInHand',
          name: 'stock_in_hand',
          title: 'STOCK_IN_HAND',
          type: 'number',
        },
        {
          data: 'stockRequired',
          name: 'stock_required',
          title: 'STOCK_REQUIRED',
          type: 'number',
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
        //this.navigateToDetail(id);
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
      ajaxSucess: (data) => {
        self.gridItems = data;
      },
      complexHeader: [
      ]
    };

    if (gridConfig.complexHeader && gridConfig.complexHeader.length) {
      gridConfig.scrollY = gridHeight - 60;
    } else if (this.isMobile) {
      gridConfig.scrollY = gridHeight + 60;
    } else {
      gridConfig.scrollY = gridHeight;
    }

    if (this.isPrototyping) {
      gridConfig.data = this.stockInHospitalService.getPrototypingData(gridConfig.columns);
      this.kanbanData = gridConfig.data;
    } else {
      gridConfig.ajaxMethod = 'POST';
      gridConfig.ajaxUrl = '/' + AppConstants.apihost + '/' + ApiConstants.getStockInHospitalAll_StockInHospital.url;
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
            show: false,
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


  private navigateToDetail(id?: string) {
    const url = this.route.url;
    const pathParams: any = {
      id: id ? id : '',
      fp: url.substring(url.lastIndexOf('/') + 1)
    };
    if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
      if (this.route['browserUrlTree'].queryParams) {
        $.extend(pathParams, this.route['browserUrlTree'].queryParams);
      }

      this.route.navigate(['', pathParams], { relativeTo: this.acRoute });
    } else {
      this.route.navigate(['../', pathParams], { relativeTo: this.acRoute });
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
      if (isConfirmed) {
        if (!source) { source = 'action_bar'; }
        const params = {
          ids: selectedRowIds
        };
        const deleteSubscription = this.stockInHospitalService.deleteStockInHospital(params);
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
      id: selectedRowIds
    };
    const updateSubscriber = this.stockInHospitalService.updateStockInHospital(params);
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
      url: this.isPrototyping ? '' : '/' + AppConstants.apihost + '/' + ApiConstants.getStockInHospitalAll_StockInHospital.url,
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

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }
}
