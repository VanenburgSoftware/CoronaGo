(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-user-privileges-app-user-privileges-module"],{

/***/ "./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container detailcontainer\">\r\n\t<div class=\"page-header-part\">\r\n\t\t<div class=\"detail-page-header\">\r\n\t\t\t<span class=\"detail-page-header-label\">{{pagename | translate}}</span>\r\n\t\t\t\t\t\t<div class=\"float-right\">\r\n\t\t\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"workflowActionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t\t\t(initComplete)=\"workflowActionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div class=\"detail-page-actionbar\">\r\n\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t(initComplete)=\"actionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t</div>\r\n\t</div>\r\n\t<div class=\"detail-page-content  application-user\">\r\n\t\t<div class=\"detail-page-form\">\r\n\t\t\t<app-vs-form [formConfig]=\"formConfig\" [formData]=\"data\" [formModalChange]=\"dataChanged\"></app-vs-form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC11c2VyLXByaXZpbGVnZXMvYXBwLXVzZXItcHJpdmlsZWdlcy1kZXRhaWwvYXBwLXVzZXItcHJpdmlsZWdlcy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AppUserPrivilegesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesDetailComponent", function() { return AppUserPrivilegesDetailComponent; });
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
/* harmony import */ var _app_security_app_user_privileges_app_user_privileges_detail_app_user_privileges_detail_security__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/security/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.security */ "./src/app/security/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.security.js");
/* harmony import */ var _app_custom_app_user_privileges_app_user_privileges_detail_app_user_privileges_detail_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/custom/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.handler */ "./src/app/custom/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.handler.ts");
/* harmony import */ var _app_user_privileges_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app-user-privileges.service */ "./src/app/app-user-privileges/app-user-privileges.service.ts");
/* harmony import */ var _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/shared/services/modal-popup.service */ "./src/app/shared/services/modal-popup.service.ts");

















var AppUserPrivilegesDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppUserPrivilegesDetailComponent, _super);
    function AppUserPrivilegesDetailComponent(location, http, route, router, uploadService, utilService, baseService, appGlobalService, appUserPrivilegesService, modalPopupService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.http = http;
        _this.route = route;
        _this.router = router;
        _this.uploadService = uploadService;
        _this.utilService = utilService;
        _this.baseService = baseService;
        _this.appGlobalService = appGlobalService;
        _this.appUserPrivilegesService = appUserPrivilegesService;
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
    AppUserPrivilegesDetailComponent.prototype.actionBarConfiguration = function () {
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
    AppUserPrivilegesDetailComponent.prototype.workflowActionBarConfiguration = function () {
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
    AppUserPrivilegesDetailComponent.prototype.captionbarConfiguration = function () {
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
    AppUserPrivilegesDetailComponent.prototype.goBack = function () {
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
    AppUserPrivilegesDetailComponent.prototype.navigateToDetail = function (id, page) {
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
    AppUserPrivilegesDetailComponent.prototype.getFormConfig = function (securityJson) {
        this.local.formConfig = {};
        this.local.formConfig.email = {
            security_code: 'email',
            label: 'User Email',
            type: 'email',
            name: 'email',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
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
            values: [],
            options: [],
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
            values: [],
            options: [],
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
            values: [],
            options: [],
            disabled: false,
            toolbar: true,
            validations: {},
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
            values: [],
            options: [],
            disabled: false,
            toolbar: true,
            validations: {},
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
            values: [],
            options: [],
            disabled: false,
            toolbar: true,
            validations: {},
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
            values: [],
            options: [],
            disabled: false,
            toolbar: true,
            validations: {},
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
            values: [],
            options: [],
            disabled: false,
            toolbar: true,
            validations: {},
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        var config = {
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
                },
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
                        },
                        {
                            groupHeaderClass: 'hidden hidden',
                            groupContentClass: 'paddingZero min-75',
                            collapsible: 'false',
                            columns: '50',
                            label: '',
                            disableRights: false,
                            columnsWidth: 12,
                            items: []
                        }
                    ]
                },
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
                        },
                        {
                            groupHeaderClass: 'hidden hidden',
                            groupContentClass: 'paddingZero min-75',
                            collapsible: 'false',
                            columns: '50',
                            label: '',
                            disableRights: false,
                            columnsWidth: 12,
                            items: []
                        }
                    ]
                },
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
                        },
                        {
                            groupHeaderClass: 'hidden hidden',
                            groupContentClass: 'paddingZero min-75',
                            collapsible: 'false',
                            columns: '50',
                            label: '',
                            disableRights: false,
                            columnsWidth: 12,
                            items: []
                        }
                    ]
                },
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
                        },
                        {
                            groupHeaderClass: 'hidden hidden',
                            groupContentClass: 'paddingZero min-75',
                            collapsible: 'false',
                            columns: '50',
                            label: '',
                            disableRights: false,
                            columnsWidth: 12,
                            items: []
                        }
                    ]
                },
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
                        },
                        {
                            groupHeaderClass: 'hidden hidden',
                            groupContentClass: 'paddingZero min-75',
                            collapsible: 'false',
                            columns: '50',
                            label: '',
                            disableRights: false,
                            columnsWidth: 12,
                            items: []
                        }
                    ]
                }
            ]
        };
        config = this.updateFormConfig(config, this.local.formConfig);
        return config;
    };
    AppUserPrivilegesDetailComponent.prototype.AppUserPrivilegesDetailFormInitComplete = function (form) {
        this.customFormInitComplete(form);
    };
    AppUserPrivilegesDetailComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    AppUserPrivilegesDetailComponent.prototype.normalizeData = function (data) {
        data = this.updateFormdata(data);
        return data;
    };
    AppUserPrivilegesDetailComponent.prototype.updateCaptionBarWithData = function (data) {
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
    AppUserPrivilegesDetailComponent.prototype.responseDataManipulation = function (data, dontPatch) {
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
    AppUserPrivilegesDetailComponent.prototype.getData = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        var params = {
            sid: this.id
        };
        this.appUserPrivilegesService.getAppUserPrivilegesBySid(params).subscribe(function (response) {
            _this.child.form.patchValue(response);
            _this.responseDataManipulation(response, true);
        });
    };
    AppUserPrivilegesDetailComponent.prototype.saveAddedFiles = function (splittedData) {
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
    AppUserPrivilegesDetailComponent.prototype.saveDataThenFiles = function (method, splittedData, saveFiles) {
        var _this = this;
        var service;
        if (method === 'post') {
            service = this.appUserPrivilegesService.createAppUserPrivileges(splittedData.data);
        }
        else if (method === 'put') {
            if (!splittedData.data.sid) {
                splittedData.data.sid = this.id;
            }
            service = this.appUserPrivilegesService.updateAppUserPrivileges(splittedData.data);
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
    AppUserPrivilegesDetailComponent.prototype.saveData = function () {
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
    AppUserPrivilegesDetailComponent.prototype.resetData = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.modalPopupService.openConfirmationModal('Cofirm', 'Do you really want to cancel the changes?', null, null, null).subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.responseDataManipulation(_this.backupData);
            }
        });
    };
    AppUserPrivilegesDetailComponent.prototype.getSecurityJSON = function () {
        var currentUser = this.getCurrentUser();
        var securityJson = _app_security_app_user_privileges_app_user_privileges_detail_app_user_privileges_detail_security__WEBPACK_IMPORTED_MODULE_13__["default"];
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
    AppUserPrivilegesDetailComponent.prototype.getCurrentUser = function () {
        return this.appGlobalService.get('currentUser');
    };
    AppUserPrivilegesDetailComponent.prototype.onCreateAction = function (btn) {
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
                var createSubscriber = _this.appUserPrivilegesService.createAppUserPrivileges(_this.id);
                createSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(createSubscriber);
            }
        });
    };
    AppUserPrivilegesDetailComponent.prototype.onUpdateAction = function (btn) {
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
                var updateSubscriber = _this.appUserPrivilegesService.updateAppUserPrivileges(_this.id);
                updateSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(updateSubscriber);
            }
        });
    };
    AppUserPrivilegesDetailComponent.prototype.onDeleteAction = function (btn) {
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
                var deleteSubscriber = _this.appUserPrivilegesService.deleteAppUserPrivileges(_this.id);
                deleteSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(deleteSubscriber);
            }
        });
    };
    AppUserPrivilegesDetailComponent.prototype.setFileFields = function () {
        for (var field in this.local.formConfig) {
            if (this.local.formConfig.hasOwnProperty(field)) {
                var element = this.local.formConfig[field];
                if (element.type === 'image' || element.type === 'file' || element.file === 'carousel') {
                    this.fileFields.push(element.name);
                }
            }
        }
    };
    AppUserPrivilegesDetailComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].isMobile;
        this.id = this.route.snapshot.params.id;
        this.actionBarconf = this.actionBarConfiguration();
        this.workflowActionBarconf = this.workflowActionBarConfiguration();
        this.pagename = 'APP_USER_PRIVILEGES_DETAIL';
        this.getData();
        this.formConfig = this.getFormConfig(this.getSecurityJSON());
        this.setFileFields();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_widget_vs_form_vs_form_component__WEBPACK_IMPORTED_MODULE_2__["VsFormComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppUserPrivilegesDetailComponent.prototype, "child", void 0);
    AppUserPrivilegesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-user-privileges-detail',
            template: __webpack_require__(/*! ./app-user-privileges-detail.component.html */ "./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.html"),
            styles: [__webpack_require__(/*! ./app-user-privileges-detail.component.scss */ "./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _app_widget_services_upload_attachment_service__WEBPACK_IMPORTED_MODULE_6__["UploadAttachmentService"],
            _app_core_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _app_core_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_9__["AppGlobalService"],
            _app_user_privileges_service__WEBPACK_IMPORTED_MODULE_15__["AppUserPrivilegesService"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__["ModalPopupService"]])
    ], AppUserPrivilegesDetailComponent);
    return AppUserPrivilegesDetailComponent;
}(_app_custom_app_user_privileges_app_user_privileges_detail_app_user_privileges_detail_handler__WEBPACK_IMPORTED_MODULE_14__["AppUserPrivilegesDetailHandler"]));



/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC11c2VyLXByaXZpbGVnZXMvYXBwLXVzZXItcHJpdmlsZWdlcy1saXN0L2FwcC11c2VyLXByaXZpbGVnZXMtbGlzdC1tb2JpbGUtdmlldy9hcHAtdXNlci1wcml2aWxlZ2VzLWxpc3QtbW9iaWxlLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: AppUserPrivilegesListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesListMobileViewComponent", function() { return AppUserPrivilegesListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppUserPrivilegesListMobileViewComponent = /** @class */ (function () {
    function AppUserPrivilegesListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'AppUserPrivilegesListMobileViewComponent';
    }
    AppUserPrivilegesListMobileViewComponent.prototype.ngOnInit = function () {
    };
    AppUserPrivilegesListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-user-privileges-list-mobile-view',
            template: __webpack_require__(/*! ./app-user-privileges-list-mobile-view.component.html */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./app-user-privileges-list-mobile-view.component.scss */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppUserPrivilegesListMobileViewComponent);
    return AppUserPrivilegesListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button>\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC11c2VyLXByaXZpbGVnZXMvYXBwLXVzZXItcHJpdmlsZWdlcy1saXN0L2FwcC11c2VyLXByaXZpbGVnZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AppUserPrivilegesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesListComponent", function() { return AppUserPrivilegesListComponent; });
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
/* harmony import */ var _custom_app_user_privileges_app_user_privileges_list_app_user_privileges_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/app-user-privileges/app-user-privileges-list/app-user-privileges-list.handler */ "./src/app/custom/app-user-privileges/app-user-privileges-list/app-user-privileges-list.handler.ts");
/* harmony import */ var _app_user_privileges_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app-user-privileges.service */ "./src/app/app-user-privileges/app-user-privileges.service.ts");
/* harmony import */ var _app_user_privileges_list_mobile_view_app_user_privileges_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.ts");














var AppUserPrivilegesListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppUserPrivilegesListComponent, _super);
    function AppUserPrivilegesListComponent(util, appUserPrivilegesService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.appUserPrivilegesService = appUserPrivilegesService;
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
        _this.pageName = 'APP_USER_PRIVILEGES_LIST';
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
    AppUserPrivilegesListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    AppUserPrivilegesListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    AppUserPrivilegesListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    AppUserPrivilegesListComponent.prototype.getDetailFormConfig = function () {
    };
    AppUserPrivilegesListComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _app_user_privileges_list_mobile_view_app_user_privileges_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["AppUserPrivilegesListMobileViewComponent"],
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
            gridConfig.data = this.appUserPrivilegesService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getAppUserPrivilegesAll_AppUserPrivileges.url;
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
    AppUserPrivilegesListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    AppUserPrivilegesListComponent.prototype.getSelectedRows = function () {
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
    AppUserPrivilegesListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    AppUserPrivilegesListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    AppUserPrivilegesListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
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
    };
    AppUserPrivilegesListComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    AppUserPrivilegesListComponent.prototype.loadActionBar = function () {
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
    AppUserPrivilegesListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    AppUserPrivilegesListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    AppUserPrivilegesListComponent.prototype.actionBarAction = function (btn) {
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
    AppUserPrivilegesListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
    };
    AppUserPrivilegesListComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['appuserprivilegesdetail', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../appuserprivilegesdetail', pathParams], { relativeTo: this.acRoute });
        }
    };
    AppUserPrivilegesListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    AppUserPrivilegesListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    AppUserPrivilegesListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
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
                var deleteSubscription = _this.appUserPrivilegesService.deleteAppUserPrivileges(params);
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
    AppUserPrivilegesListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.appUserPrivilegesService.updateAppUserPrivileges(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    AppUserPrivilegesListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    AppUserPrivilegesListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    AppUserPrivilegesListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    AppUserPrivilegesListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getAppUserPrivilegesAll_AppUserPrivileges.url,
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
    AppUserPrivilegesListComponent.prototype.toggleKanbanView = function (type) {
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
    ], AppUserPrivilegesListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppUserPrivilegesListComponent.prototype, "onGlobalClick", null);
    AppUserPrivilegesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-user-privileges-list',
            template: __webpack_require__(/*! ./app-user-privileges-list.component.html */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.html"),
            styles: [__webpack_require__(/*! ./app-user-privileges-list.component.scss */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _app_user_privileges_service__WEBPACK_IMPORTED_MODULE_12__["AppUserPrivilegesService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], AppUserPrivilegesListComponent);
    return AppUserPrivilegesListComponent;
}(_custom_app_user_privileges_app_user_privileges_list_app_user_privileges_list_handler__WEBPACK_IMPORTED_MODULE_11__["AppUserPrivilegesListHandler"]));



/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AppUserPrivilegesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesRoutingModule", function() { return AppUserPrivilegesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/_guards/auth.can-activate.guard */ "./src/app/auth/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_user_privileges_list_app_user_privileges_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-user-privileges-list/app-user-privileges-list.component */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.ts");
/* harmony import */ var _app_user_privileges_detail_app_user_privileges_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-user-privileges-detail/app-user-privileges-detail.component */ "./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.ts");






var routes = [
    {
        path: 'app-user-privileges',
        redirectTo: 'appuserprivilegeslist',
        pathMatch: 'full'
    },
    {
        path: 'appuserprivilegeslist',
        component: _app_user_privileges_list_app_user_privileges_list_component__WEBPACK_IMPORTED_MODULE_4__["AppUserPrivilegesListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "APP_USER_PRIVILEGES_LIST",
            expectedRoles: []
        }
    },
    {
        path: 'appuserprivilegesdetail',
        component: _app_user_privileges_detail_app_user_privileges_detail_component__WEBPACK_IMPORTED_MODULE_5__["AppUserPrivilegesDetailComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "APP_USER_PRIVILEGES_DETAIL",
            expectedRoles: []
        }
    }
];
var AppUserPrivilegesRoutingModule = /** @class */ (function () {
    function AppUserPrivilegesRoutingModule() {
    }
    AppUserPrivilegesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppUserPrivilegesRoutingModule);
    return AppUserPrivilegesRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges.module.ts ***!
  \*******************************************************************/
/*! exports provided: AppUserPrivilegesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesModule", function() { return AppUserPrivilegesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _app_user_privileges_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-user-privileges-routing.module */ "./src/app/app-user-privileges/app-user-privileges-routing.module.ts");
/* harmony import */ var _app_user_privileges_list_app_user_privileges_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-user-privileges-list/app-user-privileges-list.component */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list.component.ts");
/* harmony import */ var _app_user_privileges_list_app_user_privileges_list_mobile_view_app_user_privileges_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component */ "./src/app/app-user-privileges/app-user-privileges-list/app-user-privileges-list-mobile-view/app-user-privileges-list-mobile-view.component.ts");
/* harmony import */ var _app_user_privileges_detail_app_user_privileges_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-user-privileges-detail/app-user-privileges-detail.component */ "./src/app/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.component.ts");










var AppUserPrivilegesModule = /** @class */ (function () {
    function AppUserPrivilegesModule() {
    }
    AppUserPrivilegesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_user_privileges_list_app_user_privileges_list_component__WEBPACK_IMPORTED_MODULE_7__["AppUserPrivilegesListComponent"],
                _app_user_privileges_list_app_user_privileges_list_mobile_view_app_user_privileges_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["AppUserPrivilegesListMobileViewComponent"],
                _app_user_privileges_detail_app_user_privileges_detail_component__WEBPACK_IMPORTED_MODULE_9__["AppUserPrivilegesDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _app_user_privileges_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppUserPrivilegesRoutingModule"]
            ],
            entryComponents: [_app_user_privileges_list_app_user_privileges_list_mobile_view_app_user_privileges_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["AppUserPrivilegesListMobileViewComponent"]
            ],
            exports: []
        })
    ], AppUserPrivilegesModule);
    return AppUserPrivilegesModule;
}());



/***/ }),

/***/ "./src/app/app-user-privileges/app-user-privileges.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-user-privileges/app-user-privileges.service.ts ***!
  \********************************************************************/
/*! exports provided: AppUserPrivilegesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesService", function() { return AppUserPrivilegesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/api-constants */ "./src/app/api-constants.ts");





var AppUserPrivilegesService = /** @class */ (function () {
    function AppUserPrivilegesService(baseService) {
        this.baseService = baseService;
    }
    AppUserPrivilegesService.prototype.getRandomData = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };
    AppUserPrivilegesService.prototype.getRandomIndex = function (arr) {
        return Math.round(Math.random() * (arr.length - 1));
    };
    // CRUD operations starts
    AppUserPrivilegesService.prototype.getPrototypingData = function (columns) {
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
    AppUserPrivilegesService.prototype.updateAppUserPrivileges = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].updateAppUserPrivileges;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    AppUserPrivilegesService.prototype.getCurrentUser = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getCurrentUser;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    AppUserPrivilegesService.prototype.getAppUserPrivilegesBySid = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getAppUserPrivilegesBySid;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    AppUserPrivilegesService.prototype.getAppUserPrivilegesByEmail = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getAppUserPrivilegesByEmail;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    AppUserPrivilegesService.prototype.getAppUserPrivilegesAll_AppUserPrivileges = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getAppUserPrivilegesAll_AppUserPrivileges;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    AppUserPrivilegesService.prototype.deleteAppUserPrivileges = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].deleteAppUserPrivileges;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    AppUserPrivilegesService.prototype.createAppUserPrivileges = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].createAppUserPrivileges;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    AppUserPrivilegesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], AppUserPrivilegesService);
    return AppUserPrivilegesService;
}());



/***/ }),

/***/ "./src/app/custom/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.handler.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/custom/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.handler.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AppUserPrivilegesDetailHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesDetailHandler", function() { return AppUserPrivilegesDetailHandler; });
var AppUserPrivilegesDetailHandler = /** @class */ (function () {
    function AppUserPrivilegesDetailHandler() {
    }
    AppUserPrivilegesDetailHandler.prototype.updateActionBarConfig = function (actionConfig, type) {
        return actionConfig;
    };
    AppUserPrivilegesDetailHandler.prototype.updateCaptionConfig = function (captionConfig, type) {
        return captionConfig;
    };
    AppUserPrivilegesDetailHandler.prototype.customCaptionbarAction = function (data) { };
    AppUserPrivilegesDetailHandler.prototype.customCaptionbarInitComplete = function (data) {
        this.customCaption = data;
    };
    AppUserPrivilegesDetailHandler.prototype.customActionbarInitComplete = function (data) {
        this.actionbarMap = data;
    };
    AppUserPrivilegesDetailHandler.prototype.customWorkflowActionbarInitComplete = function (data) { };
    AppUserPrivilegesDetailHandler.prototype.updateFormConfig = function (currentConfig, localPlaceHolder) {
        return currentConfig;
    };
    AppUserPrivilegesDetailHandler.prototype.updateFormdata = function (data) {
        return data;
    };
    AppUserPrivilegesDetailHandler.prototype.validateDataBeforeSave = function (data) {
        return data;
    };
    AppUserPrivilegesDetailHandler.prototype.customFormInitComplete = function (form) {
        this.customFormConfig = form;
    };
    AppUserPrivilegesDetailHandler.prototype.customDataChanged = function (data) { };
    AppUserPrivilegesDetailHandler.prototype.handleCustomEvents = function (e, form) { };
    AppUserPrivilegesDetailHandler.prototype.onAfterServiceResponse = function (data) { };
    AppUserPrivilegesDetailHandler.prototype.onAfterResponseData = function (data) { };
    AppUserPrivilegesDetailHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    AppUserPrivilegesDetailHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return AppUserPrivilegesDetailHandler;
}());



/***/ }),

/***/ "./src/app/custom/app-user-privileges/app-user-privileges-list/app-user-privileges-list.handler.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/custom/app-user-privileges/app-user-privileges-list/app-user-privileges-list.handler.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AppUserPrivilegesListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserPrivilegesListHandler", function() { return AppUserPrivilegesListHandler; });
var AppUserPrivilegesListHandler = /** @class */ (function () {
    function AppUserPrivilegesListHandler(util) {
        this.util = util;
    }
    AppUserPrivilegesListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    AppUserPrivilegesListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    AppUserPrivilegesListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    AppUserPrivilegesListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    AppUserPrivilegesListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    AppUserPrivilegesListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    AppUserPrivilegesListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    AppUserPrivilegesListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    AppUserPrivilegesListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    AppUserPrivilegesListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    AppUserPrivilegesListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    AppUserPrivilegesListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    AppUserPrivilegesListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    AppUserPrivilegesListHandler.prototype.onBeforeBackAction = function () {
    };
    AppUserPrivilegesListHandler.prototype.onAfterBackAction = function () {
    };
    AppUserPrivilegesListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    AppUserPrivilegesListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    AppUserPrivilegesListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    AppUserPrivilegesListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    AppUserPrivilegesListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    AppUserPrivilegesListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
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
    AppUserPrivilegesListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    AppUserPrivilegesListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    AppUserPrivilegesListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return AppUserPrivilegesListHandler;
}());



/***/ }),

/***/ "./src/app/security/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.security.js":
/*!****************************************************************************************************************!*\
  !*** ./src/app/security/app-user-privileges/app-user-privileges-detail/app-user-privileges-detail.security.js ***!
  \****************************************************************************************************************/
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
//# sourceMappingURL=app-user-privileges-app-user-privileges-module.js.map