(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["county-state-login-county-state-login-module"],{

/***/ "./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container detailcontainer\">\r\n\t<div class=\"page-header-part\">\r\n\t\t<div class=\"detail-page-header\">\r\n\t\t\t<span class=\"detail-page-header-label\">{{pagename | translate}}</span>\r\n\t\t\t\t\t\t    <div class=\"detail-page-captionbar float-right\" *ngIf=\"!isMobile\">\r\n\t\t\t      <app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t\t\t        (callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t\t\t    </div>\r\n\t\t\t<div class=\"float-right\">\r\n\t\t\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"workflowActionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t\t\t(initComplete)=\"workflowActionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div class=\"detail-page-actionbar\">\r\n\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t(initComplete)=\"actionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t</div>\r\n\t    <div class=\"detail-page-captionbar\" *ngIf=\"isMobile\">\r\n\t      <app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t        (callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t    </div>\r\n\t</div>\r\n\t<div class=\"detail-page-content \">\r\n\t\t<div class=\"detail-page-form\">\r\n\t\t\t<app-vs-form [formConfig]=\"formConfig\" [formData]=\"data\" [formModalChange]=\"dataChanged\"></app-vs-form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50eS1zdGF0ZS1sb2dpbi9jb3VudHktc3RhdGUtbG9naW4tZGV0YWlsL2NvdW50eS1zdGF0ZS1sb2dpbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CountyStateLoginDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountyStateLoginDetailComponent", function() { return CountyStateLoginDetailComponent; });
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
/* harmony import */ var _app_security_county_state_login_county_state_login_detail_county_state_login_detail_security__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/security/county-state-login/county-state-login-detail/county-state-login-detail.security */ "./src/app/security/county-state-login/county-state-login-detail/county-state-login-detail.security.js");
/* harmony import */ var _app_custom_county_state_login_county_state_login_detail_county_state_login_detail_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/custom/county-state-login/county-state-login-detail/county-state-login-detail.handler */ "./src/app/custom/county-state-login/county-state-login-detail/county-state-login-detail.handler.ts");
/* harmony import */ var _county_state_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../county-state-login.service */ "./src/app/county-state-login/county-state-login.service.ts");
/* harmony import */ var _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/shared/services/modal-popup.service */ "./src/app/shared/services/modal-popup.service.ts");

















var CountyStateLoginDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CountyStateLoginDetailComponent, _super);
    function CountyStateLoginDetailComponent(location, http, route, router, uploadService, utilService, baseService, appGlobalService, countyStateLoginService, modalPopupService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.http = http;
        _this.route = route;
        _this.router = router;
        _this.uploadService = uploadService;
        _this.utilService = utilService;
        _this.baseService = baseService;
        _this.appGlobalService = appGlobalService;
        _this.countyStateLoginService = countyStateLoginService;
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
    CountyStateLoginDetailComponent.prototype.actionBarConfiguration = function () {
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
    CountyStateLoginDetailComponent.prototype.workflowActionBarConfiguration = function () {
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
    CountyStateLoginDetailComponent.prototype.captionbarConfiguration = function () {
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
    CountyStateLoginDetailComponent.prototype.goBack = function () {
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
    CountyStateLoginDetailComponent.prototype.navigateToDetail = function (id, page) {
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
    CountyStateLoginDetailComponent.prototype.getFormConfig = function (securityJson) {
        this.local.formConfig = {};
        this.local.formConfig.countyStateLogin = {
            security_code: 'countyStateLogin',
            label: 'County State Login',
            type: 'customelement',
            name: 'countyStateLogin',
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
            component: 'countystatelogin'
        };
        var config = {
            initCallback: this.CountyStateLoginDetailFormInitComplete.bind(this),
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
                        this.local.formConfig.countyStateLogin
                    ]
                }
            ]
        };
        config = this.updateFormConfig(config, this.local.formConfig);
        return config;
    };
    CountyStateLoginDetailComponent.prototype.CountyStateLoginDetailFormInitComplete = function (form) {
        this.customFormInitComplete(form);
    };
    CountyStateLoginDetailComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    CountyStateLoginDetailComponent.prototype.normalizeData = function (data) {
        data = this.updateFormdata(data);
        return data;
    };
    CountyStateLoginDetailComponent.prototype.updateCaptionBarWithData = function (data) {
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
    CountyStateLoginDetailComponent.prototype.responseDataManipulation = function (data, dontPatch) {
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
    CountyStateLoginDetailComponent.prototype.getData = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        var params = {
            sid: this.id
        };
        this.countyStateLoginService.getCountyStateLoginBySid(params).subscribe(function (response) {
            _this.child.form.patchValue(response);
            _this.responseDataManipulation(response, true);
        });
    };
    CountyStateLoginDetailComponent.prototype.saveAddedFiles = function (splittedData) {
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
    CountyStateLoginDetailComponent.prototype.saveDataThenFiles = function (method, splittedData, saveFiles) {
        var _this = this;
        var service;
        if (method === 'post') {
            service = this.countyStateLoginService.createCountyStateLogin(splittedData.data);
        }
        else if (method === 'put') {
            if (!splittedData.data.sid) {
                splittedData.data.sid = this.id;
            }
            service = this.countyStateLoginService.updateCountyStateLogin(splittedData.data);
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
    CountyStateLoginDetailComponent.prototype.saveData = function () {
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
    CountyStateLoginDetailComponent.prototype.resetData = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.modalPopupService.openConfirmationModal('Cofirm', 'Do you really want to cancel the changes?', null, null, null).subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.responseDataManipulation(_this.backupData);
            }
        });
    };
    CountyStateLoginDetailComponent.prototype.getSecurityJSON = function () {
        var currentUser = this.getCurrentUser();
        var securityJson = _app_security_county_state_login_county_state_login_detail_county_state_login_detail_security__WEBPACK_IMPORTED_MODULE_13__["default"];
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
    CountyStateLoginDetailComponent.prototype.getCurrentUser = function () {
        return this.appGlobalService.get('currentUser');
    };
    CountyStateLoginDetailComponent.prototype.onCreateAction = function (btn) {
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
                var createSubscriber = _this.countyStateLoginService.createCountyStateLogin(_this.id);
                createSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(createSubscriber);
            }
        });
    };
    CountyStateLoginDetailComponent.prototype.onUpdateAction = function (btn) {
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
                var updateSubscriber = _this.countyStateLoginService.updateCountyStateLogin(_this.id);
                updateSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(updateSubscriber);
            }
        });
    };
    CountyStateLoginDetailComponent.prototype.onDeleteAction = function (btn) {
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
                var deleteSubscriber = _this.countyStateLoginService.deleteCountyStateLogin(_this.id);
                deleteSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(deleteSubscriber);
            }
        });
    };
    CountyStateLoginDetailComponent.prototype.setFileFields = function () {
        for (var field in this.local.formConfig) {
            if (this.local.formConfig.hasOwnProperty(field)) {
                var element = this.local.formConfig[field];
                if (element.type === 'image' || element.type === 'file' || element.file === 'carousel') {
                    this.fileFields.push(element.name);
                }
            }
        }
    };
    CountyStateLoginDetailComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].isMobile;
        this.id = this.route.snapshot.params.id;
        this.actionBarconf = this.actionBarConfiguration();
        this.workflowActionBarconf = this.workflowActionBarConfiguration();
        this.captionbarconf = this.captionbarConfiguration();
        this.pagename = 'COUNTY_STATE_LOGIN_DETAIL';
        this.getData();
        this.formConfig = this.getFormConfig(this.getSecurityJSON());
        this.setFileFields();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_widget_vs_form_vs_form_component__WEBPACK_IMPORTED_MODULE_2__["VsFormComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CountyStateLoginDetailComponent.prototype, "child", void 0);
    CountyStateLoginDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-county-state-login-detail',
            template: __webpack_require__(/*! ./county-state-login-detail.component.html */ "./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.html"),
            styles: [__webpack_require__(/*! ./county-state-login-detail.component.scss */ "./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _app_widget_services_upload_attachment_service__WEBPACK_IMPORTED_MODULE_6__["UploadAttachmentService"],
            _app_core_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _app_core_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_9__["AppGlobalService"],
            _county_state_login_service__WEBPACK_IMPORTED_MODULE_15__["CountyStateLoginService"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__["ModalPopupService"]])
    ], CountyStateLoginDetailComponent);
    return CountyStateLoginDetailComponent;
}(_app_custom_county_state_login_county_state_login_detail_county_state_login_detail_handler__WEBPACK_IMPORTED_MODULE_14__["CountyStateLoginDetailHandler"]));



/***/ }),

/***/ "./src/app/county-state-login/county-state-login-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/county-state-login/county-state-login-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CountyStateLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountyStateLoginRoutingModule", function() { return CountyStateLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/_guards/auth.can-activate.guard */ "./src/app/auth/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _county_state_login_detail_county_state_login_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./county-state-login-detail/county-state-login-detail.component */ "./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.ts");





var routes = [
    {
        path: 'county-state-login',
        redirectTo: 'countystatelogindetail',
        pathMatch: 'full'
    },
    {
        path: 'countystatelogindetail',
        component: _county_state_login_detail_county_state_login_detail_component__WEBPACK_IMPORTED_MODULE_4__["CountyStateLoginDetailComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "COUNTY_STATE_LOGIN_DETAIL",
            expectedRoles: []
        }
    }
];
var CountyStateLoginRoutingModule = /** @class */ (function () {
    function CountyStateLoginRoutingModule() {
    }
    CountyStateLoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], CountyStateLoginRoutingModule);
    return CountyStateLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/county-state-login/county-state-login.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/county-state-login/county-state-login.module.ts ***!
  \*****************************************************************/
/*! exports provided: CountyStateLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountyStateLoginModule", function() { return CountyStateLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _county_state_login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./county-state-login-routing.module */ "./src/app/county-state-login/county-state-login-routing.module.ts");
/* harmony import */ var _county_state_login_detail_county_state_login_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./county-state-login-detail/county-state-login-detail.component */ "./src/app/county-state-login/county-state-login-detail/county-state-login-detail.component.ts");








var CountyStateLoginModule = /** @class */ (function () {
    function CountyStateLoginModule() {
    }
    CountyStateLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _county_state_login_detail_county_state_login_detail_component__WEBPACK_IMPORTED_MODULE_7__["CountyStateLoginDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _county_state_login_routing_module__WEBPACK_IMPORTED_MODULE_6__["CountyStateLoginRoutingModule"]
            ],
            entryComponents: [],
            exports: []
        })
    ], CountyStateLoginModule);
    return CountyStateLoginModule;
}());



/***/ }),

/***/ "./src/app/county-state-login/county-state-login.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/county-state-login/county-state-login.service.ts ***!
  \******************************************************************/
/*! exports provided: CountyStateLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountyStateLoginService", function() { return CountyStateLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/api-constants */ "./src/app/api-constants.ts");





var CountyStateLoginService = /** @class */ (function () {
    function CountyStateLoginService(baseService) {
        this.baseService = baseService;
    }
    CountyStateLoginService.prototype.getRandomData = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };
    CountyStateLoginService.prototype.getRandomIndex = function (arr) {
        return Math.round(Math.random() * (arr.length - 1));
    };
    // CRUD operations starts
    CountyStateLoginService.prototype.getPrototypingData = function (columns) {
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
        var possibleValues = {
            county: ['County 1', 'County 2']
        };
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
    CountyStateLoginService.prototype.deleteCountyStateLogin = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].deleteCountyStateLogin;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    CountyStateLoginService.prototype.getCountyStateLoginBySid = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].getCountyStateLoginBySid;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    CountyStateLoginService.prototype.createCountyStateLogin = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].createCountyStateLogin;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    CountyStateLoginService.prototype.updateCountyStateLogin = function (params) {
        var _this = this;
        var serviceOpts = _app_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiConstants"].updateCountyStateLogin;
        var subject = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            });
        });
        return subject;
    };
    CountyStateLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], CountyStateLoginService);
    return CountyStateLoginService;
}());



/***/ }),

/***/ "./src/app/custom/county-state-login/county-state-login-detail/county-state-login-detail.handler.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/custom/county-state-login/county-state-login-detail/county-state-login-detail.handler.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CountyStateLoginDetailHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountyStateLoginDetailHandler", function() { return CountyStateLoginDetailHandler; });
var CountyStateLoginDetailHandler = /** @class */ (function () {
    function CountyStateLoginDetailHandler() {
    }
    CountyStateLoginDetailHandler.prototype.updateActionBarConfig = function (actionConfig, type) {
        return actionConfig;
    };
    CountyStateLoginDetailHandler.prototype.updateCaptionConfig = function (captionConfig, type) {
        return captionConfig;
    };
    CountyStateLoginDetailHandler.prototype.customCaptionbarAction = function (data) { };
    CountyStateLoginDetailHandler.prototype.customCaptionbarInitComplete = function (data) {
        this.customCaption = data;
    };
    CountyStateLoginDetailHandler.prototype.customActionbarInitComplete = function (data) {
        this.actionbarMap = data;
    };
    CountyStateLoginDetailHandler.prototype.customWorkflowActionbarInitComplete = function (data) { };
    CountyStateLoginDetailHandler.prototype.updateFormConfig = function (currentConfig, localPlaceHolder) {
        return currentConfig;
    };
    CountyStateLoginDetailHandler.prototype.updateFormdata = function (data) {
        return data;
    };
    CountyStateLoginDetailHandler.prototype.validateDataBeforeSave = function (data) {
        return data;
    };
    CountyStateLoginDetailHandler.prototype.customFormInitComplete = function (form) {
        this.customFormConfig = form;
    };
    CountyStateLoginDetailHandler.prototype.customDataChanged = function (data) { };
    CountyStateLoginDetailHandler.prototype.handleCustomEvents = function (e, form) { };
    CountyStateLoginDetailHandler.prototype.onAfterServiceResponse = function (data) { };
    CountyStateLoginDetailHandler.prototype.onAfterResponseData = function (data) { };
    CountyStateLoginDetailHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    CountyStateLoginDetailHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return CountyStateLoginDetailHandler;
}());



/***/ }),

/***/ "./src/app/security/county-state-login/county-state-login-detail/county-state-login-detail.security.js":
/*!*************************************************************************************************************!*\
  !*** ./src/app/security/county-state-login/county-state-login-detail/county-state-login-detail.security.js ***!
  \*************************************************************************************************************/
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
//# sourceMappingURL=county-state-login-county-state-login-module.js.map