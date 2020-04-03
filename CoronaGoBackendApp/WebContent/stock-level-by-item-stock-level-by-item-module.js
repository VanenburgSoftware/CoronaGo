(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-level-by-item-stock-level-by-item-module"],{

/***/ "./src/app/custom/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.handler.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/custom/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.handler.ts ***!
  \*********************************************************************************************************/
/*! exports provided: StockLevelByItemListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLevelByItemListHandler", function() { return StockLevelByItemListHandler; });
var StockLevelByItemListHandler = /** @class */ (function () {
    function StockLevelByItemListHandler(util) {
        this.util = util;
    }
    StockLevelByItemListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    StockLevelByItemListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    StockLevelByItemListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    StockLevelByItemListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    StockLevelByItemListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    StockLevelByItemListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    StockLevelByItemListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    StockLevelByItemListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    StockLevelByItemListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    StockLevelByItemListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    StockLevelByItemListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    StockLevelByItemListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    StockLevelByItemListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    StockLevelByItemListHandler.prototype.onBeforeBackAction = function () {
    };
    StockLevelByItemListHandler.prototype.onAfterBackAction = function () {
    };
    StockLevelByItemListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    StockLevelByItemListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    StockLevelByItemListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    StockLevelByItemListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    StockLevelByItemListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    StockLevelByItemListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
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
    StockLevelByItemListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    StockLevelByItemListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    StockLevelByItemListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return StockLevelByItemListHandler;
}());



/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWxldmVsLWJ5LWl0ZW0vc3RvY2stbGV2ZWwtYnktaXRlbS1saXN0L3N0b2NrLWxldmVsLWJ5LWl0ZW0tbGlzdC1tb2JpbGUtdmlldy9zdG9jay1sZXZlbC1ieS1pdGVtLWxpc3QtbW9iaWxlLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: StockLevelByItemListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLevelByItemListMobileViewComponent", function() { return StockLevelByItemListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StockLevelByItemListMobileViewComponent = /** @class */ (function () {
    function StockLevelByItemListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'StockLevelByItemListMobileViewComponent';
    }
    StockLevelByItemListMobileViewComponent.prototype.ngOnInit = function () {
    };
    StockLevelByItemListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-level-by-item-list-mobile-view',
            template: __webpack_require__(/*! ./stock-level-by-item-list-mobile-view.component.html */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./stock-level-by-item-list-mobile-view.component.scss */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StockLevelByItemListMobileViewComponent);
    return StockLevelByItemListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button>\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\"\r\n        [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\"\r\n        (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\"\r\n              [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\"\r\n              [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-3\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Select Item</label>\r\n        <select class=\"form-control form-control-sm\" name=\"item\" (change)=\"handleItemChange($event)\">\r\n          <option value=\"Apron\">Apron</option>\r\n          <option value=\"Gloves for examination protective\">Gloves for examination (protective)</option>\r\n          <option value=\"Glove powder\">Glove powder</option>\r\n          <option value=\"Gloves for heavy duty tasks domestic\">Gloves for heavy duty tasks (domestic)</option>\r\n          <option value=\"Cotton wool buds Qtips, cotton buds\">Cotton wool buds (Q-tips, cotton buds)</option>\r\n          <option value=\"Applicator sticks\">Applicator sticks</option>\r\n          <option value=\"PVC sheeting\">PVC sheeting</option>\r\n          <option value=\"Sanitizer\">Sanitizer</option>\r\n          <option value=\"Soap\">Soap</option>\r\n          <option value=\"N95 Masks\">N95 Masks</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWxldmVsLWJ5LWl0ZW0vc3RvY2stbGV2ZWwtYnktaXRlbS1saXN0L3N0b2NrLWxldmVsLWJ5LWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: StockLevelByItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLevelByItemListComponent", function() { return StockLevelByItemListComponent; });
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
/* harmony import */ var _custom_stock_level_by_item_stock_level_by_item_list_stock_level_by_item_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.handler */ "./src/app/custom/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.handler.ts");
/* harmony import */ var _stock_level_by_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stock-level-by-item.service */ "./src/app/stock-level-by-item/stock-level-by-item.service.ts");
/* harmony import */ var _stock_level_by_item_list_mobile_view_stock_level_by_item_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.ts");
/* harmony import */ var _app_widget_vs_search_vs_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/widget/vs-search/vs-search.service */ "./src/app/widget/vs-search/vs-search.service.ts");















var StockLevelByItemListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StockLevelByItemListComponent, _super);
    function StockLevelByItemListComponent(util, stockLevelByItemService, _http, route, acRoute, location, appGlobal, element, modalPopupService, searchService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.stockLevelByItemService = stockLevelByItemService;
        _this._http = _http;
        _this.route = route;
        _this.acRoute = acRoute;
        _this.location = location;
        _this.appGlobal = appGlobal;
        _this.element = element;
        _this.modalPopupService = modalPopupService;
        _this.searchService = searchService;
        _this.gridConfig = {};
        _this.actionBarconf = [];
        _this.subscriptions = [];
        _this.pageName = 'STOCK_LEVEL_BY_ITEM_LIST';
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
    StockLevelByItemListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    StockLevelByItemListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    StockLevelByItemListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    StockLevelByItemListComponent.prototype.getDetailFormConfig = function () {
    };
    StockLevelByItemListComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _stock_level_by_item_list_mobile_view_stock_level_by_item_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["StockLevelByItemListMobileViewComponent"],
            mobileContent: this.mobileContent.bind(this),
            columns: [
                {
                    data: 'hospital',
                    name: 'hospital',
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
            gridConfig.data = this.stockLevelByItemService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getStockLevelByItemAll_StockLevelByItem.url;
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
    StockLevelByItemListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    StockLevelByItemListComponent.prototype.getSelectedRows = function () {
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
    StockLevelByItemListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    StockLevelByItemListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    StockLevelByItemListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    StockLevelByItemListComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    StockLevelByItemListComponent.prototype.loadActionBar = function () {
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
    StockLevelByItemListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    StockLevelByItemListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    StockLevelByItemListComponent.prototype.actionBarAction = function (btn) {
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
    StockLevelByItemListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
    };
    StockLevelByItemListComponent.prototype.navigateToDetail = function (id) {
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
    StockLevelByItemListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    StockLevelByItemListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    StockLevelByItemListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
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
                var deleteSubscription = _this.stockLevelByItemService.deleteStockLevelByItem(params);
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
    StockLevelByItemListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.stockLevelByItemService.updateStockLevelByItem(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    StockLevelByItemListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    StockLevelByItemListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    StockLevelByItemListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    StockLevelByItemListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getStockLevelByItemAll_StockLevelByItem.url,
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
    StockLevelByItemListComponent.prototype.toggleKanbanView = function (type) {
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
    StockLevelByItemListComponent.prototype.handleItemChange = function (e) {
        var val = e.currentTarget.value;
        if (val) {
            this.searchService.changeGlobalSearchKey(val);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_widget_vs_grid_vs_grid_component__WEBPACK_IMPORTED_MODULE_4__["VsGridComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StockLevelByItemListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], StockLevelByItemListComponent.prototype, "onGlobalClick", null);
    StockLevelByItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-level-by-item-list',
            template: __webpack_require__(/*! ./stock-level-by-item-list.component.html */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.html"),
            styles: [__webpack_require__(/*! ./stock-level-by-item-list.component.scss */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _stock_level_by_item_service__WEBPACK_IMPORTED_MODULE_12__["StockLevelByItemService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"],
            _app_widget_vs_search_vs_search_service__WEBPACK_IMPORTED_MODULE_14__["VsSearchService"]])
    ], StockLevelByItemListComponent);
    return StockLevelByItemListComponent;
}(_custom_stock_level_by_item_stock_level_by_item_list_stock_level_by_item_list_handler__WEBPACK_IMPORTED_MODULE_11__["StockLevelByItemListHandler"]));



/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: StockLevelByItemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLevelByItemRoutingModule", function() { return StockLevelByItemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/_guards/auth.can-activate.guard */ "./src/app/auth/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_level_by_item_list_stock_level_by_item_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-level-by-item-list/stock-level-by-item-list.component */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.ts");





var routes = [
    {
        path: 'stock-level-by-item',
        redirectTo: 'stocklevelbyitemlist',
        pathMatch: 'full'
    },
    {
        path: 'stocklevelbyitemlist',
        component: _stock_level_by_item_list_stock_level_by_item_list_component__WEBPACK_IMPORTED_MODULE_4__["StockLevelByItemListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "STOCK_LEVEL_BY_ITEM_LIST",
            expectedRoles: []
        }
    }
];
var StockLevelByItemRoutingModule = /** @class */ (function () {
    function StockLevelByItemRoutingModule() {
    }
    StockLevelByItemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], StockLevelByItemRoutingModule);
    return StockLevelByItemRoutingModule;
}());



/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item.module.ts ***!
  \*******************************************************************/
/*! exports provided: StockLevelByItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLevelByItemModule", function() { return StockLevelByItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _stock_level_by_item_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-level-by-item-routing.module */ "./src/app/stock-level-by-item/stock-level-by-item-routing.module.ts");
/* harmony import */ var _stock_level_by_item_list_stock_level_by_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-level-by-item-list/stock-level-by-item-list.component */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list.component.ts");
/* harmony import */ var _stock_level_by_item_list_stock_level_by_item_list_mobile_view_stock_level_by_item_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component */ "./src/app/stock-level-by-item/stock-level-by-item-list/stock-level-by-item-list-mobile-view/stock-level-by-item-list-mobile-view.component.ts");









var StockLevelByItemModule = /** @class */ (function () {
    function StockLevelByItemModule() {
    }
    StockLevelByItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _stock_level_by_item_list_stock_level_by_item_list_component__WEBPACK_IMPORTED_MODULE_7__["StockLevelByItemListComponent"],
                _stock_level_by_item_list_stock_level_by_item_list_mobile_view_stock_level_by_item_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["StockLevelByItemListMobileViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _stock_level_by_item_routing_module__WEBPACK_IMPORTED_MODULE_6__["StockLevelByItemRoutingModule"]
            ],
            entryComponents: [_stock_level_by_item_list_stock_level_by_item_list_mobile_view_stock_level_by_item_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["StockLevelByItemListMobileViewComponent"]
            ],
            exports: []
        })
    ], StockLevelByItemModule);
    return StockLevelByItemModule;
}());



/***/ }),

/***/ "./src/app/stock-level-by-item/stock-level-by-item.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/stock-level-by-item/stock-level-by-item.service.ts ***!
  \********************************************************************/
/*! exports provided: StockLevelByItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLevelByItemService", function() { return StockLevelByItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/api-constants */ "./src/app/api-constants.ts");





var StockLevelByItemService = /** @class */ (function () {
    function StockLevelByItemService(baseService) {
        this.baseService = baseService;
    }
    StockLevelByItemService.prototype.getRandomData = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };
    StockLevelByItemService.prototype.getRandomIndex = function (arr) {
        return Math.round(Math.random() * (arr.length - 1));
    };
    // CRUD operations starts
    StockLevelByItemService.prototype.getPrototypingData = function (columns) {
        var e_1, _a;
        var gridData = [];
        var dummyData = {
            hospital: [
                'Anna Jaques Hospital',
                'Atlanta Medical Center',
                'BRANDON REGIONAL HOSPITAL',
                'Bay Area Medical Center',
                'Beaumont Hospital, Dearborn',
                'Bon Secours St. Francis Hospital',
                'CHI St. Joseph Health Regional',
                'Carroll Hospital Center',
                'City Hospital at White Rock',
                'Columbus Community Hospital'
            ],
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
                        else if (column.name.indexOf('hospital') > -1) {
                            colName = dummyData.hospital[this.getRandomIndex(dummyData.hospital)];
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
    StockLevelByItemService.prototype.createStockLevelByItem = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].createStockLevelByItem;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    StockLevelByItemService.prototype.getStockLevelByItemAll_StockLevelByItem = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getStockLevelByItemAll_StockLevelByItem;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    StockLevelByItemService.prototype.updateStockLevelByItem = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].updateStockLevelByItem;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    StockLevelByItemService.prototype.deleteStockLevelByItem = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].deleteStockLevelByItem;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    StockLevelByItemService.prototype.getStockLevelByItemBySid = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getStockLevelByItemBySid;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    StockLevelByItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], StockLevelByItemService);
    return StockLevelByItemService;
}());



/***/ })

}]);
//# sourceMappingURL=stock-level-by-item-stock-level-by-item-module.js.map