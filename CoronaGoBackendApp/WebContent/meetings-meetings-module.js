(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meetings-meetings-module"],{

/***/ "./src/app/custom/meetings/meetings-list/meetings-list.handler.ts":
/*!************************************************************************!*\
  !*** ./src/app/custom/meetings/meetings-list/meetings-list.handler.ts ***!
  \************************************************************************/
/*! exports provided: MeetingsListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsListHandler", function() { return MeetingsListHandler; });
var MeetingsListHandler = /** @class */ (function () {
    function MeetingsListHandler(util) {
        this.util = util;
    }
    MeetingsListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    MeetingsListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    MeetingsListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    MeetingsListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    MeetingsListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    MeetingsListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    MeetingsListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    MeetingsListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    MeetingsListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    MeetingsListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    MeetingsListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    MeetingsListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    MeetingsListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    MeetingsListHandler.prototype.onBeforeBackAction = function () {
    };
    MeetingsListHandler.prototype.onAfterBackAction = function () {
    };
    MeetingsListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    MeetingsListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    MeetingsListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    MeetingsListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    MeetingsListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    MeetingsListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
        mobileContent.innerContent = {};
        Object.keys(data).map(function (item) {
            if (!mobileContent.mainContent.hasOwnProperty(item)) {
                mobileContent.innerContent[item] = {
                    data: data[item]
                };
            }
            return item;
        });
    };
    MeetingsListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    MeetingsListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    MeetingsListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return MeetingsListHandler;
}());



/***/ }),

/***/ "./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXRpbmdzL21lZXRpbmdzLWxpc3QvbWVldGluZ3MtbGlzdC1tb2JpbGUtdmlldy9tZWV0aW5ncy1saXN0LW1vYmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MeetingsListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsListMobileViewComponent", function() { return MeetingsListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MeetingsListMobileViewComponent = /** @class */ (function () {
    function MeetingsListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'MeetingsListMobileViewComponent';
    }
    MeetingsListMobileViewComponent.prototype.ngOnInit = function () {
    };
    MeetingsListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meetings-list-mobile-view',
            template: __webpack_require__(/*! ./meetings-list-mobile-view.component.html */ "./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./meetings-list-mobile-view.component.scss */ "./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MeetingsListMobileViewComponent);
    return MeetingsListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/meetings/meetings-list/meetings-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/meetings/meetings-list/meetings-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button>\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/meetings/meetings-list/meetings-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/meetings/meetings-list/meetings-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXRpbmdzL21lZXRpbmdzLWxpc3QvbWVldGluZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/meetings/meetings-list/meetings-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/meetings/meetings-list/meetings-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MeetingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsListComponent", function() { return MeetingsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _widget_vs_grid_vs_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @widget/vs-grid/vs-grid.component */ "./src/app/widget/vs-grid/vs-grid.component.ts");
/* harmony import */ var _core_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/util.service */ "./src/app/core/util.service.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app-constants */ "./src/app/app-constants.ts");
/* harmony import */ var _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/app-global.service */ "./src/app/app-global.service.ts");
/* harmony import */ var _app_api_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/api-constants */ "./src/app/api-constants.ts");
/* harmony import */ var _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/services/modal-popup.service */ "./src/app/shared/services/modal-popup.service.ts");
/* harmony import */ var _custom_meetings_meetings_list_meetings_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/meetings/meetings-list/meetings-list.handler */ "./src/app/custom/meetings/meetings-list/meetings-list.handler.ts");
/* harmony import */ var _meetings_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../meetings.service */ "./src/app/meetings/meetings.service.ts");
/* harmony import */ var _meetings_list_mobile_view_meetings_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meetings-list-mobile-view/meetings-list-mobile-view.component */ "./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.ts");














var MeetingsListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MeetingsListComponent, _super);
    function MeetingsListComponent(util, meetingsService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.meetingsService = meetingsService;
        _this._http = _http;
        _this.route = route;
        _this.acRoute = acRoute;
        _this.location = location;
        _this.appGlobal = appGlobal;
        _this.element = element;
        _this.modalPopupService = modalPopupService;
        _this.gridConfig = {};
        _this.actionBarconf = [];
        _this.subscriptions = [];
        _this.pageName = 'MEETINGS_LIST';
        _this.enableBtnsIfRecordSelected = [];
        _this.lane = [];
        _this.kanbanData = [];
        _this.kanbanFields = [];
        _this.kanbanOptions = {};
        _this.showKanban = false;
        _this.showGrid = true;
        _this.showAdditionalListButtons = false;
        _this.extendedPageConfig = {};
        _this.gridComponent = _widget_vs_grid_vs_grid_component__WEBPACK_IMPORTED_MODULE_4__["VsGridComponent"];
        return _this;
    }
    MeetingsListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    MeetingsListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    MeetingsListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    MeetingsListComponent.prototype.getDetailFormConfig = function () {
    };
    MeetingsListComponent.prototype.loadGridConfig = function () {
        var _this = this;
        var self = this;
        var gridHeight;
        var currentEl = this.element.nativeElement;
        var gridEl = currentEl.querySelector('app-vs-grid');
        var gridElOffsetTop = gridEl.querySelector('div').offsetTop + (_app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile ? 40 : 80);
        gridHeight = window.innerHeight - gridElOffsetTop;
        var gridConfig = {
            ordering: this.isPrototyping ? true : false,
            customOrdering: this.isPrototyping ? false : true,
            mobileTemplate: _meetings_list_mobile_view_meetings_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["MeetingsListMobileViewComponent"],
            mobileContent: this.mobileContent.bind(this),
            columns: [
                {
                    data: 'patientHid',
                    name: 'patient_hid',
                    title: 'PATIENT_HID',
                    type: 'string',
                },
                {
                    data: 'patientName',
                    name: 'patient_name',
                    title: 'PATIENT_NAME',
                    type: 'string',
                },
                {
                    data: 'patientEmail',
                    name: 'patient_email',
                    title: 'PATIENT_EMAIL',
                    type: 'string',
                },
                {
                    data: 'meetingId',
                    name: 'meeting_id',
                    title: 'MEETING_ID',
                    type: 'string',
                },
                {
                    data: 'doctorId',
                    name: 'doctor_id',
                    title: 'DOCTOR_ID',
                    type: 'string',
                },
                {
                    data: 'doctorName',
                    name: 'doctor_name',
                    title: 'DOCTOR_NAME',
                    type: 'string',
                },
                {
                    data: 'doctorEmail',
                    name: 'doctor_email',
                    title: 'DOCTOR_EMAIL',
                    type: 'string',
                },
                {
                    data: 'meetingStartTime',
                    name: 'meeting_start_time',
                    title: 'MEETING_START_TIME',
                    type: 'datetime',
                },
                {
                    data: 'meetingEndTime',
                    name: 'meeting_end_time',
                    title: 'MEETING_END_TIME',
                    type: 'datetime',
                },
                {
                    data: 'meetingStatus',
                    name: 'meeting_status',
                    title: 'MEETING_STATUS',
                    type: 'string',
                },
                {
                    data: 'meetingUrl',
                    name: 'meeting_url',
                    title: 'MEETING_URL',
                    type: 'string',
                },
                {
                    data: 'recordingInfo',
                    name: 'recording_info',
                    title: 'RECORDING_INFO',
                    type: 'string',
                },
                {
                    data: 'meetingDate',
                    name: 'meeting_date',
                    title: 'MEETING_DATE',
                    type: 'date',
                },
            ],
            disableSelection: false,
            onRowSelect: function (selectedRows, id) {
                _this.updateBtnPermission(selectedRows);
                _this.onAfterRowSelect(selectedRows, id);
            },
            onRowDeselect: function (selectedRows) {
                _this.updateBtnPermission(selectedRows);
            },
            onInitComplete: function (dtTable, settings, json) {
                self.dtTable = dtTable;
                self.createRefreshMethod(settings, json, dtTable);
            },
            onRowClick: function (event, id) {
                _this.navigateToDetail(id);
            },
            maxRowsAllowedForSelection: _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].maxRowsAllowedToSelect,
            rowMenuOptions: [],
            beforeRowMenuShow: function (option, data, row) {
                return self.onBeforeRowMenuShow(option, data, row);
            },
            onRowMenuClick: function (option, row, data) {
                self.onRowMenuAction(option, row, data);
            },
            onMobileRowDisplay: function (row, data, index) {
                return row;
            },
            complexHeader: []
        };
        if (gridConfig.complexHeader && gridConfig.complexHeader.length) {
            gridConfig.scrollY = gridHeight - 60;
        }
        else if (this.isMobile) {
            gridConfig.scrollY = gridHeight + 60;
        }
        else {
            gridConfig.scrollY = gridHeight;
        }
        if (this.isPrototyping) {
            gridConfig.data = this.meetingsService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getMeetingsAll_Meetings.url;
        }
        if (this.isMobile) {
            var isStatusField = gridConfig.columns.filter(function (col) { return col.data === 'status'; });
            if (isStatusField.length) {
                var status_1 = gridConfig.columns.splice(gridConfig.columns.indexOf(isStatusField[0]), 1);
                gridConfig.columns.splice(1, 0, isStatusField[0]);
            }
        }
        var extendedConfig = this.extendedGridConfig(gridConfig);
        return extendedConfig;
    };
    MeetingsListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    MeetingsListComponent.prototype.getSelectedRows = function () {
        var e_1, _a;
        var selectedRowIds = [];
        var rows = this.dtTable.rows('.selected').data();
        var uniqueIdField = this.gridConfig.uniqueIdField ? this.gridConfig.uniqueIdField : 'sid';
        try {
            for (var rows_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
                var row = rows_1_1.value;
                selectedRowIds.push(row[uniqueIdField]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return selectedRowIds.join(',');
    };
    MeetingsListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    MeetingsListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    MeetingsListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    MeetingsListComponent.prototype.updateBtnPermission = function (selectedRows) {
        var e_2, _a;
        var permission = selectedRows.ids().length ? true : false;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.enableBtnsIfRecordSelected), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                this.actionBtns[key].permission = permission;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MeetingsListComponent.prototype.loadActionBar = function () {
        var actionBarconf = {
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
                            label: !_app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile ? 'DELETE' : '',
                            action: 'delete',
                            icon: 'fa-trash-o',
                            iconFont: 'font_awesome',
                            permission: false,
                            enableIfRecordsSelected: true,
                            show: true,
                            name: 'delete'
                        }, {
                            label: !_app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile ? 'REFRESH' : '',
                            action: 'refresh',
                            icon: 'fa-refresh',
                            iconFont: 'font_awesome',
                            show: true,
                            name: 'refresh'
                        }],
                ]
            }
        };
        if (!this.isMobile) {
            actionBarconf.buttons.secondary.shift();
        }
        actionBarconf = this.extendedActionbarConfig(actionBarconf);
        return actionBarconf;
    };
    MeetingsListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    MeetingsListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    MeetingsListComponent.prototype.actionBarAction = function (btn) {
        this.showAdditionalListButtons = false;
        this.onBeforeButtonAction(btn);
        if (btn.action === 'back') {
            this.onBeforeBackAction();
            this.location.back();
            this.onAfterBackAction();
        }
        else if (btn.action === 'refresh') {
            if (this.refreshGrid) {
                this.refreshGrid(btn);
            }
        }
        else if (btn.action === 'create') {
            this.onBeforeCreateAction(btn);
            this.onCreateAction(btn);
            this.onAfterCreateAction(btn);
        }
        else if (btn.action === 'delete') {
            var selectedRowIds = this.getSelectedRows();
            this.onBeforeDeleteAction(selectedRowIds, btn, 'action_bar');
            this.onDeleteAction(selectedRowIds, btn, 'action_bar');
            this.onAfterDeleteAction(selectedRowIds, btn, 'action_bar');
        }
    };
    MeetingsListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
    };
    MeetingsListComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../', pathParams], { relativeTo: this.acRoute });
        }
    };
    MeetingsListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    MeetingsListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    MeetingsListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to delete the selected record(s)?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, config);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                if (!source) {
                    source = 'action_bar';
                }
                var params = {
                    ids: selectedRowIds
                };
                var deleteSubscription = _this.meetingsService.deleteMeetings(params);
                deleteSubscription.subscribe(function (res) {
                    _this.refreshGrid();
                    _this.onAfterServiceResponse(res, config, source);
                }, function (error) {
                    _this.refreshGrid();
                });
                _this.subscriptions.push(deleteSubscription);
            }
        });
    };
    MeetingsListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.meetingsService.updateMeetings(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    MeetingsListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    MeetingsListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    MeetingsListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    MeetingsListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getMeetingsAll_Meetings.url,
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
    };
    MeetingsListComponent.prototype.toggleKanbanView = function (type) {
        if (type === 'list') {
            this.showGrid = true;
            this.showKanban = false;
        }
        else if (type === 'kanban') {
            this.showGrid = false;
            this.showKanban = true;
        }
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_widget_vs_grid_vs_grid_component__WEBPACK_IMPORTED_MODULE_4__["VsGridComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingsListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MeetingsListComponent.prototype, "onGlobalClick", null);
    MeetingsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meetings-list',
            template: __webpack_require__(/*! ./meetings-list.component.html */ "./src/app/meetings/meetings-list/meetings-list.component.html"),
            styles: [__webpack_require__(/*! ./meetings-list.component.scss */ "./src/app/meetings/meetings-list/meetings-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _meetings_service__WEBPACK_IMPORTED_MODULE_12__["MeetingsService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], MeetingsListComponent);
    return MeetingsListComponent;
}(_custom_meetings_meetings_list_meetings_list_handler__WEBPACK_IMPORTED_MODULE_11__["MeetingsListHandler"]));



/***/ }),

/***/ "./src/app/meetings/meetings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/meetings/meetings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MeetingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsRoutingModule", function() { return MeetingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/_guards/auth.can-activate.guard */ "./src/app/auth/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meetings-list/meetings-list.component */ "./src/app/meetings/meetings-list/meetings-list.component.ts");





var routes = [
    {
        path: 'meetings',
        redirectTo: 'meetingslist',
        pathMatch: 'full'
    },
    {
        path: 'meetingslist',
        component: _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "MEETINGS_LIST",
            expectedRoles: []
        }
    }
];
var MeetingsRoutingModule = /** @class */ (function () {
    function MeetingsRoutingModule() {
    }
    MeetingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], MeetingsRoutingModule);
    return MeetingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/meetings/meetings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/meetings/meetings.module.ts ***!
  \*********************************************/
/*! exports provided: MeetingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsModule", function() { return MeetingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _meetings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meetings-routing.module */ "./src/app/meetings/meetings-routing.module.ts");
/* harmony import */ var _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meetings-list/meetings-list.component */ "./src/app/meetings/meetings-list/meetings-list.component.ts");
/* harmony import */ var _meetings_list_meetings_list_mobile_view_meetings_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component */ "./src/app/meetings/meetings-list/meetings-list-mobile-view/meetings-list-mobile-view.component.ts");









var MeetingsModule = /** @class */ (function () {
    function MeetingsModule() {
    }
    MeetingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsListComponent"],
                _meetings_list_meetings_list_mobile_view_meetings_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsListMobileViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _meetings_routing_module__WEBPACK_IMPORTED_MODULE_6__["MeetingsRoutingModule"]
            ],
            entryComponents: [_meetings_list_meetings_list_mobile_view_meetings_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsListMobileViewComponent"]
            ],
            exports: []
        })
    ], MeetingsModule);
    return MeetingsModule;
}());



/***/ }),

/***/ "./src/app/meetings/meetings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/meetings/meetings.service.ts ***!
  \**********************************************/
/*! exports provided: MeetingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsService", function() { return MeetingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/api-constants */ "./src/app/api-constants.ts");





var MeetingsService = /** @class */ (function () {
    function MeetingsService(baseService) {
        this.baseService = baseService;
    }
    MeetingsService.prototype.getRandomData = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };
    MeetingsService.prototype.getRandomIndex = function (arr) {
        return Math.round(Math.random() * (arr.length - 1));
    };
    // CRUD operations starts
    MeetingsService.prototype.getPrototypingData = function (columns) {
        var e_1, _a;
        var gridData = [];
        var dummyData = {
            email: ['jack@test.com', 'hugo@vg.com', 'tom@gmail.com', 'hanks@gmail.com', 'tony@gmail.com'],
            customer: ['Valeo', 'Google', 'Ford', 'BMW', 'MS', 'Daimler'],
            vehicle: ['Ford', 'BMW', 'Daimler'],
            global: ['ABC', 'Customer', 'Vendor', 'XYZ', 'Viewport', 'Service', 'Basic', 'Vehicle'],
            status: ['Draft', 'In Progress', 'Waiting', 'Approved', 'Completed'],
            number: [100, 200, 300, 400, 500],
            date: [new Date().getTime(), new Date().getTime(), new Date().getTime(), new Date().getTime()],
            name: ['Tom', 'Hanks', 'Jack', 'Slayer', 'Hugo', 'Tony']
        };
        var possibleValues = {};
        var currencyCodes = {};
        // const status = ['Draft', 'In Progress', 'Completed', 'Waiting', 'New Status', 'New Status One'];
        for (var i = 0; i < 20; i++) {
            var data = {};
            data.firstName = dummyData.name[this.getRandomIndex(dummyData.name)];
            data.lastName = dummyData.name[this.getRandomIndex(dummyData.name)];
            data.sId = i;
            try {
                for (var columns_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
                    var column = columns_1_1.value;
                    if (possibleValues[column.data]) {
                        data[column.data] = this.getRandomData(possibleValues[column.data]);
                    }
                    else if (currencyCodes[column.data]) {
                        data[column.data] = Math.random() * 100;
                        var formatField = column.data + 'CurrencyFormat';
                        data[formatField] = this.getRandomData(currencyCodes[column.data]);
                    }
                    else if (column.type === 'string' || !column.type) {
                        var colName = '';
                        if (column.name.indexOf('email') > -1) {
                            colName = dummyData.email[this.getRandomIndex(dummyData.email)];
                        }
                        else if (column.name.indexOf('customer') > -1) {
                            colName = dummyData.customer[this.getRandomIndex(dummyData.customer)];
                        }
                        else if (column.name.indexOf('vehicle') > -1) {
                            colName = dummyData.vehicle[this.getRandomIndex(dummyData.vehicle)];
                        }
                        else if (column.name.indexOf('name') > -1) {
                            colName = dummyData.name[this.getRandomIndex(dummyData.name)];
                        }
                        else {
                            colName = dummyData.global[this.getRandomIndex(dummyData.global)];
                        }
                        data[column.data] = colName;
                    }
                    else if (column.type === 'number' || column.type === 'currency') {
                        data[column.data] = dummyData.number[this.getRandomIndex(dummyData.number)];
                    }
                    else if (column.type === 'date' || column.type === 'datetime') {
                        data[column.data] = dummyData.date[this.getRandomIndex(dummyData.date)];
                    }
                    else if (column.type === 'boolean') {
                        data[column.data] = (Math.round((Math.random() * 1) + 0) === 0);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            gridData.push(data);
        }
        return gridData;
    };
    MeetingsService.prototype.updateMeetings = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].updateMeetings;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    MeetingsService.prototype.createMeetings = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].createMeetings;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    MeetingsService.prototype.getMeetingsBySid = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getMeetingsBySid;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    MeetingsService.prototype.deleteMeetings = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].deleteMeetings;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    MeetingsService.prototype.getMeetingsAll_Meetings = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getMeetingsAll_Meetings;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    MeetingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], MeetingsService);
    return MeetingsService;
}());



/***/ })

}]);
//# sourceMappingURL=meetings-meetings-module.js.map