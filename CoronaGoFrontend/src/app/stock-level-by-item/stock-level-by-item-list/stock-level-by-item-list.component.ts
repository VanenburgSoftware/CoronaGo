import { StockInHospitalService } from './../../stock-in-hospital/stock-in-hospital.service';
import { StockLevelByHospitalService } from './../../stock-level-by-hospital/stock-level-by-hospital.service';
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

import { StockLevelByItemListHandler } from '@custom/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.handler';
import { StockLevelByItemService } from '../stock-level-by-item.service';
import { StockLevelByItemListMobileViewComponent } from './stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component';
import { VsSearchService } from '@app/widget/vs-search/vs-search.service';

@Component({
  selector: 'app-stock-level-by-item-list',
  templateUrl: './stock-level-by-item-list.component.html',
  styleUrls: [ './stock-level-by-item-list.component.scss' ]
})
export class StockLevelByItemListComponent extends StockLevelByItemListHandler implements OnInit, AfterViewInit {


  public gridConfig: any = {};
  public actionBarconf: any = [];
  private refreshGrid: any;
  private dtTable: any;
  private subscriptions: any = [];
  public pageName = 'STOCK_LEVEL_BY_ITEM_LIST';
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
  public hospitalItems: any[] = [];
  private selectedItem: string;


  @ViewChild(VsGridComponent)
  private gridComponent: any = VsGridComponent;

  @HostListener('document:mousedown', [ '$event' ])
  onGlobalClick(event): void {
    const target = $(event.target);
    if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
      this.showAdditionalListButtons = false;
    }
  }

  constructor(
    public util: UtilService,
    private stockLevelByItemService: StockLevelByItemService,
    private _http: BaseService,
    private route: Router,
    private acRoute: ActivatedRoute,
    private location: Location,
    private appGlobal: AppGlobalService,
    private element: ElementRef,
    private modalPopupService: ModalPopupService,
    private searchService: VsSearchService,
    private stockLevelByHospitalService: StockLevelByHospitalService,
    private stockInHospitalService: StockInHospitalService
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
    this.getStockItemOptions();
    var me = this;
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
      mobileTemplate: StockLevelByItemListMobileViewComponent,
      mobileContent: this.mobileContent.bind(this),

      columns: [
        {
          data: 'hospitalName',
          name: 'hospitalName',
          title: 'Hospital',
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
      gridConfig.data = this.stockLevelByItemService.getPrototypingData(gridConfig.columns);
      this.kanbanData = gridConfig.data;
    } else {
      gridConfig.ajaxMethod = 'POST';
      gridConfig.ajaxUrl = '/' + AppConstants.apihost + '/' + ApiConstants.getStockLevelByItemAll_StockLevelByItem.url + '/4529272d-e78d-4889-81a8-030b5bbd8ecf';
    }

    if (this.isMobile) {
      const isStatusField = gridConfig.columns.filter(col => col.data === 'status');
      if (isStatusField.length) {
        const status = gridConfig.columns.splice(gridConfig.columns.indexOf(isStatusField[ 0 ]), 1);
        gridConfig.columns.splice(1, 0, isStatusField[ 0 ]);
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
      selectedRowIds.push(row[ uniqueIdField ]);
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
      this.actionBtns[ key ].permission = permission;
    }

  }

  private loadActionBar(): any {

    let actionBarconf = {
      buttons: {
        primary: [],
        secondary: [
          [ {
            label: 'NEW',
            action: 'create',
            show: true,
            class: 'create-btn hidden',
            name: 'create'
          } ],
          [ {
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
          } ],
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
      const btnConfig = this.actionBtns[ btn ];
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
    const thisRow = this.gridConfig.uniqueIdField ? data[ this.gridConfig.uniqueIdField ] : data.id;
  }


  private navigateToDetail(id?: string) {
    const url = this.route.url;
    const pathParams: any = {
      id: id ? id : '',
      fp: url.substring(url.lastIndexOf('/') + 1)
    };
    if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
      if (this.route[ 'browserUrlTree' ].queryParams) {
        $.extend(pathParams, this.route[ 'browserUrlTree' ].queryParams);
      }

      this.route.navigate([ '', pathParams ], { relativeTo: this.acRoute });
    } else {
      this.route.navigate([ '../', pathParams ], { relativeTo: this.acRoute });
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
        const deleteSubscription = this.stockLevelByItemService.deleteStockLevelByItem(params);
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
    const updateSubscriber = this.stockLevelByItemService.updateStockLevelByItem(params);
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
    kanbanOptions.lanes = [ 'Registration', 'Waitroom', 'In treatment', 'Completed' ];
    kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
    return kanbanOptions;
  }

  loadKanbanOptions() {
    const config = {
      url: this.isPrototyping ? '' : '/' + AppConstants.apihost + '/' + ApiConstants.getStockLevelByItemAll_StockLevelByItem.url,
      template: '',
      lanes: [],
      groupBy: '',
      laneBy: '',
      gridColumns: this.gridConfig.columns
    };

    if (!config.url || this.isPrototyping) {
      // tslint:disable-next-line:no-string-literal
      config[ 'data' ] = this.gridConfig.data;
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


  getStockItemOptions() {
    this.stockInHospitalService.getAllItems(null).subscribe((items: any) => {
      const convertedItems = [];
      items.map(item => {
        convertedItems.push({
          label: item.itemName,
          value: item.itemId
        });
      });
      this.hospitalItems = convertedItems;
    });
  }

  filterByItem(value) {
    this.selectedItem = value;
    this.gridConfig.ajaxUrl = '/' + AppConstants.apihost + '/' + ApiConstants.getStockLevelByItemAll_StockLevelByItem.url + '/' + this.selectedItem;
    this.refreshGrid();
  };

  handleItemChange(e) {
    const val = e.currentTarget.value;
    if (val) {
      this.searchService.changeGlobalSearchKey(val);
    }
  }
}
