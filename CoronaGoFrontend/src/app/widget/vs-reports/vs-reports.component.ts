import { Component, OnInit, Input, ViewChild, Host, ElementRef } from '@angular/core';
import { VsFormComponent } from '../vs-form/vs-form.component';
import * as _ from 'lodash';
import { AppGlobalService } from '@app/app-global.service';
import { VsGridComponent } from '../vs-grid/vs-grid.component';

@Component({
  selector: 'app-vs-reports',
  templateUrl: './vs-reports.component.html',
  styleUrls: ['./vs-reports.component.scss']
})
export class VsReportsComponent implements OnInit {

  @Input() filterConf: any;

  public formConfig: any;
  public historyFormConfig: any;
  public data = {};
  public historyData = {};
  public backupData: any;
  public actionBarconf: any;
  public historyActionBarconf: any;
  public gridConfig: any;
  public actionBtns: any;
  public local: any = {};
  public reportTypes: any;
  public currentReportTable: any;
  public currentReportType: any;
  public currentDynamicFilter: any = [];
  public currentForm: any;
  public reportFilters: any = [];
  public showReportHistory = false;
  public reportStatus: any = [];
  public currentUser: any;
  public historyTable: any;
  private refreshGrid: any;

  @ViewChild(VsFormComponent) child;

  @ViewChild(VsGridComponent)
  private gridComponent: any = VsGridComponent;

  constructor(private element: ElementRef, private appGlobalService: AppGlobalService) { }

  getReportActionConfig() {
    const buttonConfig = {
      buttons: {
        primary: [
          [{
            label: 'RUNREPORT',
            action: 'runreport',
            show: true,
            name: 'runreport'
          }],
          [{
            label: 'SHOWHISTORY',
            action: 'showhistory',
            show: true,
            name: 'showhistory',
          }]
        ]
      }
    };
    return buttonConfig;
  }

  getHistoryActionBarConfig() {
    const buttonConfig = {
      buttons: {
        primary: [
          [{
            label: '',
            action: 'back',
            show: true,
            icon: 'fa-arrow-left',
            iconFont: 'font_awesome',
            name: 'back'
          }],
          [{
            label: '',
            action: 'refresh',
            show: true,
            icon: 'fa-refresh',
            iconFont: 'font_awesome',
            name: 'refresh'
          }]
        ]
      }
    };
    return buttonConfig;
  }

  public actionBarInitComplete(e: any): void {
    this.actionBtns = e.elementMap;
  }

  public actionBarAction(btn: any): void {

    if (btn.action === 'runreport') {
      this.runReport();
    } else if (btn.action === 'newreport') {

    } else if (btn.action === 'showhistory') {
      this.showHistory();
    } else if (btn.action === 'back') {
      this.showReportHistory = false;
    } else if (btn.action === 'refresh') {
      this.refreshGrid();
    }
  }

  runReport() {
    console.log(this.currentForm.value);
    const submitButton: HTMLButtonElement = this.child.submitButton.nativeElement;
    submitButton.click();
    if (!this.child.form.valid) {
      return;
    }
    let dataToSend = this.currentForm.value;
    if (this.filterConf.callbacks && this.filterConf.callbacks.onRunReport) {
      dataToSend = this.filterConf.callbacks.onRunReport(this.currentForm.value);
    }
    // Run the report this.filterConf.runReportUrl
  }

  showHistory() {
    this.showReportHistory = true;
    this.gridConfig = this.getReportHistoryGridConfig();
    this.historyFormConfig = this.getHistoryFormConfig();
    // this.filterConf.reportHistoryUrl
  }

  getReportTableAndTypes() {
    console.log('Filter Config', this.filterConf);
    const tables = [];
    const types = [];
    this.reportFilters.map((item) => {
      tables.push({
        label: item.table,
        value: item.table
      });
      types.push({
        label: item.reportType,
        value: item.reportType
      });
      return item;
    });

    return {
      tables: _.uniqBy(tables, 'label'),
      types: _.uniqBy(types, 'label')
    };
  }

  getReportFormBasedOnFilters() {
    console.log(this.currentUser);
    if (this.currentReportTable && this.currentReportType) {
      const filterForm = this.reportFilters.filter(item => {
        return item.table === this.currentReportTable && item.reportType === this.currentReportType;
      });

      const allowedRoles = filterForm[0].allowedRoles;
      const isAllowed = allowedRoles.filter(role => {
        return this.currentUser[role];
      });
      if (isAllowed.length) {
        this.currentDynamicFilter = filterForm[0].filters;
      } else {
        this.currentDynamicFilter = [];
      }
      this.formConfig = this.getFormConfig();
    }
  }

  IncidentsDetailFormInitComplete(form) {
    this.currentForm = form;
    this.setData();
    this.currentForm.valueChanges
      .distinctUntilChanged()
      .subscribe(val => {
        if (val.report !== this.currentReportTable || val.reporttype !== this.currentReportType) {
          this.currentReportTable = val.report;
          this.currentReportType = val.reporttype;
          this.getReportFormBasedOnFilters();
        }
      });
  }

  setData() {
    this.currentForm.patchValue({
      report: this.currentReportTable,
      reporttype: this.currentReportType
    }, { emitEvent: false });
  }

  getFormConfig() {
    this.local.formConfig = {};
    this.local.formConfig.report = {
      label: 'Report',
      type: 'select',
      name: 'report',
      options: this.reportTypes.tables,
      disabled: false,
      validations: {
        required: true,
      }
    };

    this.local.formConfig.reporttype = {
      label: 'Report Type',
      type: 'select',
      name: 'reporttype',
      options: this.reportTypes.types,
      disabled: false,
      validations: {
        required: true,
      }
    };

    const config = {
      initCallback: this.IncidentsDetailFormInitComplete.bind(this),
      collapsible: false,
      submit: 'saveBasicDetails',
      class: 'form-elements-group',
      securityEvaluation: false,
      staticSecurityJson: {},
      disabledForm: false,
      columns: 100,
      groups: [
        {
          groupHeaderClass: 'form-group-subheader',
          groupContentClass: 'paddingZero',
          collapsible: false,
          columns: '100',
          label: 'Filters',
          disableRights: false,
          columnsWidth: 12,
          items: [
            {
              groupHeaderClass: 'hidden',
              groupContentClass: 'paddingZero',
              collapsible: 'false',
              columns: '50',
              label: '',
              disableRights: false,
              columnsWidth: 12,
              items: [{
                groupHeaderClass: 'hidden',
                groupContentClass: 'paddingZero',
                collapsible: 'false',
                columns: '100',
                label: '',
                disableRights: false,
                columnsWidth: 12,
                items: [
                  this.local.formConfig.report,
                  this.local.formConfig.reporttype
                ]
              }]
            },
            {
              groupHeaderClass: 'hidden',
              groupContentClass: 'paddingZero',
              collapsible: 'false',
              columns: '25',
              label: '',
              disableRights: false,
              columnsWidth: 12,
              items: this.currentDynamicFilter
            }
          ]
        }
      ]
    };

    return config;
  }

  getReportHistoryGridConfig() {
    const self = this;
    const gridConfig: any = {
      ordering: false,
      customOrdering: false,
      scrollX: true,
      scrollCollapse: true,
      columns: [
        {
          data: 'created_by',
          name: 'created_by',
          title: 'Run By',
          type: 'string',
        },
        {
          data: 'created_on',
          name: 'created_on',
          title: 'Run On',
          type: 'string',
        },
        {
          data: 'report',
          name: 'report',
          title: 'Report Name',
          type: 'string',
        },
        {
          data: 'report_type',
          name: 'report_type',
          title: 'Report Type',
          type: 'string',
        },
        {
          title: 'View/ Download',
          render: (data: any, type: any, full: any) => {
            return '<a href="#">View</a>';
          }
        }
      ],
      disableSelection: true,
      ajaxUrl: this.filterConf.reportHistoryUrl,
      ajaxMethod: 'POST',
      onRowSelect: (selectedRows: any, id: any) => {

      },
      onRowDeselect: (selectedRows: any) => {

      },
      onInitComplete: (dtTable: any, settings: any, json: any) => {
        self.historyTable = dtTable;
        self.createRefreshMethod(settings, json, dtTable);
      },
      onRowClick: (event: any, id: any) => {
      },
      maxRowsAllowedForSelection: 5,
      rowMenuOptions: [],
      beforeRowMenuShow: (option: any, data: any, row: any) => {
      },
      onRowMenuClick: (option: any, row: any, data: any) => {
      }
    };

    // gridConfig.data = this.incidentsService.getSampleReportHistory(gridConfig.columns);
    return gridConfig;
  }

  private createRefreshMethod(settings: any, json: any, dtTable: any) {
    this.refreshGrid = (config: any) => {
      this.gridComponent.refreshGrid();
    };
  }

  getHistoryFormConfig() {
    const config = {
      initCallback: 'this.IncidentsDetailFormInitComplete.bind(this)',
      collapsible: false,
      submit: 'saveBasicDetails',
      class: 'form-elements-group',
      securityEvaluation: false,
      staticSecurityJson: {},
      disabledForm: false,
      columns: 100,
      disableSelection: true,
      groups: [
        {
          groupHeaderClass: 'form-group-subheader hidden',
          groupContentClass: '',
          collapsible: false,
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: [{
            label: 'Report Run By',
            type: 'select',
            name: 'run_by',
            options: this.reportStatus,
            disabled: false
          }, {
            label: 'Report Status',
            type: 'select',
            name: 'status',
            options: this.reportStatus,
            disabled: false
          }
          ]
        }
      ]
    };

    return config;
  }

  getCurrentUser() {
    return this.appGlobalService.get('currentUser');
  }

  ngOnInit() {
    this.currentUser = this.getCurrentUser();
    this.actionBarconf = this.getReportActionConfig();
    this.historyActionBarconf = this.getHistoryActionBarConfig();
    this.reportFilters = this.filterConf.filters;
    this.reportTypes = this.getReportTableAndTypes();
    this.reportStatus = [{
      label: 'Initiated',
      value: 'initiated'
    }, {
      label: 'In Progress',
      value: 'inprogress'
    }, {
      label: 'Completed',
      value: 'completed'
    }];
    this.formConfig = this.getFormConfig();
  }

}
