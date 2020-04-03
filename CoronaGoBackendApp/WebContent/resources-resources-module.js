(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "./src/app/custom/resources/resources-detail/resources-detail.handler.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/custom/resources/resources-detail/resources-detail.handler.ts ***!
  \*******************************************************************************/
/*! exports provided: ResourcesDetailHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesDetailHandler", function() { return ResourcesDetailHandler; });
var ResourcesDetailHandler = /** @class */ (function () {
    function ResourcesDetailHandler() {
    }
    ResourcesDetailHandler.prototype.updateActionBarConfig = function (actionConfig, type) {
        var actionBarconf = {
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
                        }]
                ],
                secondary: []
            }
        };
        return actionBarconf;
    };
    ResourcesDetailHandler.prototype.updateCaptionConfig = function (captionConfig, type) {
        return captionConfig;
    };
    ResourcesDetailHandler.prototype.customCaptionbarAction = function (data) { };
    ResourcesDetailHandler.prototype.customCaptionbarInitComplete = function (data) {
        this.customCaption = data;
    };
    ResourcesDetailHandler.prototype.customActionbarInitComplete = function (data) {
        this.actionbarMap = data;
    };
    ResourcesDetailHandler.prototype.customWorkflowActionbarInitComplete = function (data) { };
    ResourcesDetailHandler.prototype.updateFormConfig = function (currentConfig, localPlaceHolder) {
        return currentConfig;
    };
    ResourcesDetailHandler.prototype.updateFormdata = function (data) {
        return data;
    };
    ResourcesDetailHandler.prototype.validateDataBeforeSave = function (data) {
        return data;
    };
    ResourcesDetailHandler.prototype.customFormInitComplete = function (form) {
        this.customFormConfig = form;
    };
    ResourcesDetailHandler.prototype.customDataChanged = function (data) { };
    ResourcesDetailHandler.prototype.handleCustomEvents = function (e, form) { };
    ResourcesDetailHandler.prototype.onAfterServiceResponse = function (data) { };
    ResourcesDetailHandler.prototype.onAfterResponseData = function (data) { };
    ResourcesDetailHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    ResourcesDetailHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return ResourcesDetailHandler;
}());



/***/ }),

/***/ "./src/app/resources/resources-detail/resources-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/resources/resources-detail/resources-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container detailcontainer\">\r\n\t<div class=\"page-header-part\">\r\n\t\t<div class=\"detail-page-header\">\r\n\t\t\t<span class=\"detail-page-header-label\">{{pagename | translate}}</span>\r\n\t\t\t\t\t\t    <div class=\"detail-page-captionbar float-right\" *ngIf=\"!isMobile\">\r\n\t\t\t      <app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t\t\t        (callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t\t\t    </div>\r\n\t\t\t<div class=\"float-right\">\r\n\t\t\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"workflowActionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t\t\t(initComplete)=\"workflowActionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div class=\"detail-page-actionbar\">\r\n\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t(initComplete)=\"actionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t</div>\r\n\t    <div class=\"detail-page-captionbar\" *ngIf=\"isMobile\">\r\n\t      <app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t        (callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t    </div>\r\n\t</div>\r\n\t<div class=\"detail-page-content \">\r\n\t\t<div class=\"detail-page-form\">\r\n\t\t\t<app-vs-form [formConfig]=\"formConfig\" [formData]=\"data\" [formModalChange]=\"dataChanged\"></app-vs-form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/resources/resources-detail/resources-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/resources/resources-detail/resources-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-page-header-label {\n  text-transform: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VzL3Jlc291cmNlcy1kZXRhaWwvRDpcXFBST0pFQ1RTX0ZPTERFUlxcRVZBXFxjb3JvbmFnb2Zyb250ZW5kX2xhdGVzdC9zcmNcXGFwcFxccmVzb3VyY2VzXFxyZXNvdXJjZXMtZGV0YWlsXFxyZXNvdXJjZXMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXNvdXJjZXMvcmVzb3VyY2VzLWRldGFpbC9yZXNvdXJjZXMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbC1wYWdlLWhlYWRlci1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/resources/resources-detail/resources-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/resources/resources-detail/resources-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResourcesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesDetailComponent", function() { return ResourcesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_widget_vs_form_vs_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/widget/vs-form/vs-form.component */ "./src/app/widget/vs-form/vs-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_widget_services_upload_attachment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/widget/services/upload-attachment.service */ "./src/app/widget/services/upload-attachment.service.ts");
/* harmony import */ var _app_core_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/util.service */ "./src/app/core/util.service.ts");
/* harmony import */ var _app_core_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_app_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/app-global.service */ "./src/app/app-global.service.ts");
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/app-constants */ "./src/app/app-constants.ts");
/* harmony import */ var angular_expressions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-expressions */ "./node_modules/angular-expressions/lib/main.js");
/* harmony import */ var angular_expressions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular_expressions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_security_resources_resources_detail_resources_detail_security__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/security/resources/resources-detail/resources-detail.security */ "./src/app/security/resources/resources-detail/resources-detail.security.js");
/* harmony import */ var _app_custom_resources_resources_detail_resources_detail_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/custom/resources/resources-detail/resources-detail.handler */ "./src/app/custom/resources/resources-detail/resources-detail.handler.ts");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../resources.service */ "./src/app/resources/resources.service.ts");
/* harmony import */ var _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/shared/services/modal-popup.service */ "./src/app/shared/services/modal-popup.service.ts");

















var ResourcesDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResourcesDetailComponent, _super);
    function ResourcesDetailComponent(location, http, route, router, uploadService, utilService, baseService, appGlobalService, resourcesService, modalPopupService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.http = http;
        _this.route = route;
        _this.router = router;
        _this.uploadService = uploadService;
        _this.utilService = utilService;
        _this.baseService = baseService;
        _this.appGlobalService = appGlobalService;
        _this.resourcesService = resourcesService;
        _this.modalPopupService = modalPopupService;
        _this.data = {};
        _this.captionElement = {};
        _this.fileFields = [];
        _this.local = {};
        _this.subscriptions = [];
        _this.dataChanged = function (data) {
            _this.customDataChanged(data);
        };
        _this.captionbarAction = function (data) {
            _this.customCaptionbarAction(data);
        };
        _this.captionBarInitComplete = function (data) {
            var captionConf = _this.updateCaptionConfig(data, 'init');
            _this.captionElement = captionConf.elementMap;
            _this.customCaptionbarInitComplete(data);
        };
        _this.actionBarInitComplete = function (data) {
            _this.customActionbarInitComplete(data);
        };
        _this.workflowActionBarInitComplete = function (data) {
            _this.customWorkflowActionbarInitComplete(data);
        };
        _this.buttonAction = function (btn) {
            if (btn.action === 'back') {
                _this.goBack();
            }
            else if (btn.action === 'save') {
                _this.saveData();
            }
            else if (btn.action === 'cancel') {
                _this.resetData();
            }
            else if (btn.action === 'create') {
                _this.navigateToDetail('', btn.page);
            }
            else if (btn.action === 'refresh') {
            }
        };
        return _this;
    }
    /**
     * action bar configuration settings.
     */
    ResourcesDetailComponent.prototype.actionBarConfiguration = function () {
        var actionBarconf = {
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
                secondary: []
            }
        };
        actionBarconf = this.updateActionBarConfig(actionBarconf, 'init');
        return actionBarconf;
    };
    /**
     * workflow action bar configuration settings.
     */
    ResourcesDetailComponent.prototype.workflowActionBarConfiguration = function () {
        var workflowActionbarconf = {
            buttons: {
                primary: []
            }
        };
        return workflowActionbarconf;
    };
    /**
     * Caption bar configuration
     */
    ResourcesDetailComponent.prototype.captionbarConfiguration = function () {
        var captionbarconf = {
            modules: [],
            moduleclass: 'pull-left horz-padding',
            detailclass: 'iar-caption-detail pull-right',
            details: [],
            currentModule: ' '
        };
        captionbarconf = this.updateCaptionConfig(captionbarconf, 'init');
        return captionbarconf;
    };
    ResourcesDetailComponent.prototype.goBack = function () {
        var _this = this;
        if (this.child.form.pristine) {
            this.location.back();
        }
        else {
            this.modalPopupService.openConfirmationModal('Cofirm', 'Do you want to discard all unsaved changes?', null, null, null).subscribe(function (isConfirmed) {
                if (isConfirmed) {
                    _this.location.back();
                }
            });
        }
    };
    ResourcesDetailComponent.prototype.navigateToDetail = function (id, page) {
        var pathParams = {
            id: id ? id : ''
        };
        if (this.router.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.router['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.router['browserUrlTree'].queryParams);
            }
            this.router.navigate([page + "/" + page + "detail", pathParams]);
        }
        else {
            this.router.navigate([page + "/" + page + "detail", pathParams]);
        }
    };
    ResourcesDetailComponent.prototype.getFormConfig = function (securityJson) {
        this.local.formConfig = {};
        this.local.formConfig.resources = {
            security_code: 'resources',
            label: 'Resources',
            type: 'customelement',
            name: 'resources',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: false,
            toolbar: true,
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
            subLabel: '',
            component: 'resources'
        };
        var config = {
            initCallback: this.ResourcesDetailFormInitComplete.bind(this),
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
                    columns: '0',
                    label: '',
                    disableRights: false,
                    columnsWidth: 12,
                    items: [
                        this.local.formConfig.resources
                    ]
                }
            ]
        };
        config = this.updateFormConfig(config, this.local.formConfig);
        return config;
    };
    ResourcesDetailComponent.prototype.ResourcesDetailFormInitComplete = function (form) {
        this.customFormInitComplete(form);
    };
    ResourcesDetailComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    ResourcesDetailComponent.prototype.normalizeData = function (data) {
        data = this.updateFormdata(data);
        return data;
    };
    ResourcesDetailComponent.prototype.updateCaptionBarWithData = function (data) {
        if (!this.captionbarconf) {
            return;
        }
        var tempCaption = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.captionbarconf);
        tempCaption.details.map(function (detail) {
            detail.content = data[detail.name];
            return detail;
        });
        this.captionbarconf = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tempCaption);
    };
    ResourcesDetailComponent.prototype.responseDataManipulation = function (data, dontPatch) {
        if (!data) {
            this.child.form.reset();
            return;
        }
        this.infolabel = angular_expressions__WEBPACK_IMPORTED_MODULE_11___default.a.compile('')(data);
        if (!this.route.snapshot.params.id && !this.id) {
            this.id = data.sid;
            this.location.replaceState(this.location.path() + data.sid);
        }
        var pagespec = '';
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
    };
    ResourcesDetailComponent.prototype.getData = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        var params = {
            sid: this.id
        };
        this.resourcesService.getResourcesBySid(params).subscribe(function (response) {
            _this.child.form.patchValue(response);
            _this.responseDataManipulation(response, true);
        });
    };
    ResourcesDetailComponent.prototype.saveAddedFiles = function (splittedData) {
        var _this = this;
        this.uploadService.saveAddedFiles(splittedData, this.id, this.child.form).subscribe(function (res) {
            var fData = {};
            for (var key in res) {
                if (res[key] instanceof Array) {
                    fData[key] = lodash__WEBPACK_IMPORTED_MODULE_12__["compact"](lodash__WEBPACK_IMPORTED_MODULE_12__["uniq"](res[key].flat()));
                }
                else {
                    fData[key] = [res[key]];
                }
            }
            var finalData = { data: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, splittedData.data, fData) };
            _this.saveDataThenFiles('put', finalData, false);
        });
    };
    ResourcesDetailComponent.prototype.saveDataThenFiles = function (method, splittedData, saveFiles) {
        var _this = this;
        var service;
        if (method === 'post') {
            service = this.resourcesService.createResources(splittedData.data);
        }
        else if (method === 'put') {
            if (!splittedData.data.sid) {
                splittedData.data.sid = this.id;
            }
            service = this.resourcesService.updateResources(splittedData.data);
        }
        service.subscribe(function (res) {
            if (saveFiles) {
                var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, splittedData.data, res);
                splittedData.data = data;
                _this.child.form.markAsPristine();
                _this.saveAddedFiles(splittedData);
            }
            _this.responseDataManipulation(res, false);
        });
    };
    ResourcesDetailComponent.prototype.saveData = function () {
        var submitButton = this.child.submitButton.nativeElement;
        submitButton.click();
        if (!this.child.form.valid) {
            return;
        }
        var splittedData = this.utilService.splitFileAndData(this.child.form.value, this.fileFields);
        var saveData = this.validateDataBeforeSave(splittedData.data);
        if (!saveData) {
            return;
        }
        if (this.id) {
            if (splittedData.files) {
                this.saveDataThenFiles('put', splittedData, true);
            }
            else {
                this.saveDataThenFiles('put', splittedData, false);
            }
        }
        else {
            if (splittedData.files) {
                this.saveDataThenFiles('post', splittedData, true);
            }
            else {
                this.saveDataThenFiles('post', splittedData, false);
            }
        }
    };
    ResourcesDetailComponent.prototype.resetData = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.modalPopupService.openConfirmationModal('Cofirm', 'Do you really want to cancel the changes?', null, null, null).subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.responseDataManipulation(_this.backupData);
            }
        });
    };
    ResourcesDetailComponent.prototype.getSecurityJSON = function () {
        var currentUser = this.getCurrentUser();
        var securityJson = _app_security_resources_resources_detail_resources_detail_security__WEBPACK_IMPORTED_MODULE_13__["default"];
        var roles = [];
        var userStepJsonList = [];
        for (var role in securityJson) {
            if (securityJson.hasOwnProperty(role)) {
                if (currentUser[role] === true) {
                    //return securityJson[role];
                    userStepJsonList.push(securityJson[role]);
                }
            }
        }
        return userStepJsonList.length > 0 ? userStepJsonList : null;
    };
    ResourcesDetailComponent.prototype.getCurrentUser = function () {
        return this.appGlobalService.get('currentUser');
    };
    ResourcesDetailComponent.prototype.onCreateAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Create?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var createSubscriber = _this.resourcesService.createResources(_this.id);
                createSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(createSubscriber);
            }
        });
    };
    ResourcesDetailComponent.prototype.onUpdateAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Update?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var updateSubscriber = _this.resourcesService.updateResources(_this.id);
                updateSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(updateSubscriber);
            }
        });
    };
    ResourcesDetailComponent.prototype.onDeleteAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Delete?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var deleteSubscriber = _this.resourcesService.deleteResources(_this.id);
                deleteSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(deleteSubscriber);
            }
        });
    };
    ResourcesDetailComponent.prototype.setFileFields = function () {
        for (var field in this.local.formConfig) {
            if (this.local.formConfig.hasOwnProperty(field)) {
                var element = this.local.formConfig[field];
                if (element.type === 'image' || element.type === 'file' || element.file === 'carousel') {
                    this.fileFields.push(element.name);
                }
            }
        }
    };
    ResourcesDetailComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].isMobile;
        this.id = this.route.snapshot.params.id;
        this.actionBarconf = this.actionBarConfiguration();
        this.workflowActionBarconf = this.workflowActionBarConfiguration();
        this.captionbarconf = this.captionbarConfiguration();
        this.pagename = 'Resources';
        this.getData();
        this.formConfig = this.getFormConfig(this.getSecurityJSON());
        this.setFileFields();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_widget_vs_form_vs_form_component__WEBPACK_IMPORTED_MODULE_2__["VsFormComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResourcesDetailComponent.prototype, "child", void 0);
    ResourcesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resources-detail',
            template: __webpack_require__(/*! ./resources-detail.component.html */ "./src/app/resources/resources-detail/resources-detail.component.html"),
            styles: [__webpack_require__(/*! ./resources-detail.component.scss */ "./src/app/resources/resources-detail/resources-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _app_widget_services_upload_attachment_service__WEBPACK_IMPORTED_MODULE_6__["UploadAttachmentService"],
            _app_core_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _app_core_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_9__["AppGlobalService"],
            _resources_service__WEBPACK_IMPORTED_MODULE_15__["ResourcesService"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__["ModalPopupService"]])
    ], ResourcesDetailComponent);
    return ResourcesDetailComponent;
}(_app_custom_resources_resources_detail_resources_detail_handler__WEBPACK_IMPORTED_MODULE_14__["ResourcesDetailHandler"]));



/***/ }),

/***/ "./src/app/resources/resources-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/resources/resources-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ResourcesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesRoutingModule", function() { return ResourcesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/_guards/auth.can-activate.guard */ "./src/app/auth/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resources_detail_resources_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources-detail/resources-detail.component */ "./src/app/resources/resources-detail/resources-detail.component.ts");





var routes = [
    {
        path: 'resources',
        redirectTo: 'resourcesdetail',
        pathMatch: 'full'
    },
    {
        path: 'resourcesdetail',
        component: _resources_detail_resources_detail_component__WEBPACK_IMPORTED_MODULE_4__["ResourcesDetailComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "RESOURCES_DETAIL",
            expectedRoles: []
        }
    }
];
var ResourcesRoutingModule = /** @class */ (function () {
    function ResourcesRoutingModule() {
    }
    ResourcesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ResourcesRoutingModule);
    return ResourcesRoutingModule;
}());



/***/ }),

/***/ "./src/app/resources/resources.module.ts":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.module.ts ***!
  \***********************************************/
/*! exports provided: ResourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesModule", function() { return ResourcesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _resources_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-routing.module */ "./src/app/resources/resources-routing.module.ts");
/* harmony import */ var _resources_detail_resources_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-detail/resources-detail.component */ "./src/app/resources/resources-detail/resources-detail.component.ts");








var ResourcesModule = /** @class */ (function () {
    function ResourcesModule() {
    }
    ResourcesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _resources_detail_resources_detail_component__WEBPACK_IMPORTED_MODULE_7__["ResourcesDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _resources_routing_module__WEBPACK_IMPORTED_MODULE_6__["ResourcesRoutingModule"]
            ],
            entryComponents: [],
            exports: []
        })
    ], ResourcesModule);
    return ResourcesModule;
}());



/***/ }),

/***/ "./src/app/resources/resources.service.ts":
/*!************************************************!*\
  !*** ./src/app/resources/resources.service.ts ***!
  \************************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/api-constants */ "./src/app/api-constants.ts");





var ResourcesService = /** @class */ (function () {
    function ResourcesService(baseService) {
        this.baseService = baseService;
    }
    ResourcesService.prototype.getRandomData = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };
    ResourcesService.prototype.getRandomIndex = function (arr) {
        return Math.round(Math.random() * (arr.length - 1));
    };
    // CRUD operations starts
    ResourcesService.prototype.getPrototypingData = function (columns) {
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
    ResourcesService.prototype.createResources = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].createResources;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    ResourcesService.prototype.deleteResources = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].deleteResources;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    ResourcesService.prototype.getResourcesBySid = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getResourcesBySid;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    ResourcesService.prototype.updateResources = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].updateResources;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    ResourcesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], ResourcesService);
    return ResourcesService;
}());



/***/ }),

/***/ "./src/app/security/resources/resources-detail/resources-detail.security.js":
/*!**********************************************************************************!*\
  !*** ./src/app/security/resources/resources-detail/resources-detail.security.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	"pat" : 	{
    	"enableonlyfields": ["*"],
    	"disableonlyfields": [],
    	"hide": []
    },
	"devadmin" : 	{
    	"enableonlyfields": ["*"],
    	"disableonlyfields": [],
    	"hide": []
    },
	"doc" : 	{
    	"enableonlyfields": ["*"],
    	"disableonlyfields": [],
    	"hide": []
    },
	"ha" : 	{
    	"enableonlyfields": ["*"],
    	"disableonlyfields": [],
    	"hide": []
    },
	"admin" : 	{
    	"enableonlyfields": ["*"],
    	"disableonlyfields": [],
    	"hide": []
    },
	"scl" : 	{
    	"enableonlyfields": ["*"],
    	"disableonlyfields": [],
    	"hide": []
    }});

/***/ })

}]);
//# sourceMappingURL=resources-resources-module.js.map