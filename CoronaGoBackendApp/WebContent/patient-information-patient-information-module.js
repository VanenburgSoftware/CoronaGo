(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-information-patient-information-module"],{

/***/ "./src/app/custom/patient-information/patient-information-detail/patient-information-detail.handler.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/custom/patient-information/patient-information-detail/patient-information-detail.handler.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PatientInformationDetailHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInformationDetailHandler", function() { return PatientInformationDetailHandler; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var PatientInformationDetailHandler = /** @class */ (function () {
    function PatientInformationDetailHandler() {
    }
    PatientInformationDetailHandler.prototype.updateActionBarConfig = function (actionConfig, type) {
        actionConfig.buttons.primary[1][0]['class'] = 'pge-primary';
        return actionConfig;
    };
    PatientInformationDetailHandler.prototype.updateCaptionConfig = function (captionConfig, type) {
        return captionConfig;
    };
    PatientInformationDetailHandler.prototype.customCaptionbarAction = function (data) { };
    PatientInformationDetailHandler.prototype.customCaptionbarInitComplete = function (data) {
        this.customCaption = data;
    };
    PatientInformationDetailHandler.prototype.customActionbarInitComplete = function (data) {
        this.actionbarMap = data;
    };
    PatientInformationDetailHandler.prototype.customWorkflowActionbarInitComplete = function (data) { };
    PatientInformationDetailHandler.prototype.updateFormConfig = function (currentConfig, localPlaceHolder) {
        return currentConfig;
    };
    PatientInformationDetailHandler.prototype.updateFormdata = function (data) {
        return data;
    };
    PatientInformationDetailHandler.prototype.validateDataBeforeSave = function (data) {
        return data;
    };
    PatientInformationDetailHandler.prototype.customFormInitComplete = function (form) {
        this.customFormConfig = form;
    };
    PatientInformationDetailHandler.prototype.customDataChanged = function (data) { };
    PatientInformationDetailHandler.prototype.handleCustomEvents = function (e, form) {
        if (!this.customFormConfig) {
            return;
        }
        this.customFormConfig.patchValue({
            age: moment__WEBPACK_IMPORTED_MODULE_0___default()().diff(e.value, 'years', false)
        });
    };
    PatientInformationDetailHandler.prototype.onAfterServiceResponse = function (data) { };
    PatientInformationDetailHandler.prototype.onAfterResponseData = function (data) { };
    PatientInformationDetailHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    PatientInformationDetailHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return PatientInformationDetailHandler;
}());



/***/ }),

/***/ "./src/app/patient-information/patient-information-detail/patient-information-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/patient-information/patient-information-detail/patient-information-detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container detailcontainer\">\r\n\t<div class=\"page-header-part\">\r\n\t\t<div class=\"detail-page-header\">\r\n\t\t\t<span class=\"detail-page-header-label\">{{pagename | translate}}</span>\r\n\t\t\t\t\t\t    <div class=\"detail-page-captionbar float-right\" *ngIf=\"!isMobile\">\r\n\t\t\t      <app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t\t\t        (callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t\t\t    </div>\r\n\t\t\t<div class=\"float-right\">\r\n\t\t\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"workflowActionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t\t\t(initComplete)=\"workflowActionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div class=\"detail-page-actionbar\">\r\n\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t(initComplete)=\"actionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t</div>\r\n\t    <div class=\"detail-page-captionbar\" *ngIf=\"isMobile\">\r\n\t      <app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t        (callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t    </div>\r\n\t</div>\r\n\t<div class=\"detail-page-content \">\r\n\t\t<div class=\"detail-page-form\">\r\n\t\t\t<app-vs-form [formConfig]=\"formConfig\" [formData]=\"data\" [formModalChange]=\"dataChanged\"></app-vs-form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-information/patient-information-detail/patient-information-detail.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/patient-information/patient-information-detail/patient-information-detail.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtaW5mb3JtYXRpb24vcGF0aWVudC1pbmZvcm1hdGlvbi1kZXRhaWwvcGF0aWVudC1pbmZvcm1hdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-information/patient-information-detail/patient-information-detail.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/patient-information/patient-information-detail/patient-information-detail.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PatientInformationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInformationDetailComponent", function() { return PatientInformationDetailComponent; });
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
/* harmony import */ var _app_security_patient_information_patient_information_detail_patient_information_detail_security__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/security/patient-information/patient-information-detail/patient-information-detail.security */ "./src/app/security/patient-information/patient-information-detail/patient-information-detail.security.js");
/* harmony import */ var _app_custom_patient_information_patient_information_detail_patient_information_detail_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/custom/patient-information/patient-information-detail/patient-information-detail.handler */ "./src/app/custom/patient-information/patient-information-detail/patient-information-detail.handler.ts");
/* harmony import */ var _patient_information_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../patient-information.service */ "./src/app/patient-information/patient-information.service.ts");
/* harmony import */ var _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/shared/services/modal-popup.service */ "./src/app/shared/services/modal-popup.service.ts");

















var PatientInformationDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientInformationDetailComponent, _super);
    function PatientInformationDetailComponent(location, http, route, router, uploadService, utilService, baseService, appGlobalService, patientInformationService, modalPopupService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.http = http;
        _this.route = route;
        _this.router = router;
        _this.uploadService = uploadService;
        _this.utilService = utilService;
        _this.baseService = baseService;
        _this.appGlobalService = appGlobalService;
        _this.patientInformationService = patientInformationService;
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
    PatientInformationDetailComponent.prototype.actionBarConfiguration = function () {
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
    PatientInformationDetailComponent.prototype.workflowActionBarConfiguration = function () {
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
    PatientInformationDetailComponent.prototype.captionbarConfiguration = function () {
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
    PatientInformationDetailComponent.prototype.goBack = function () {
        var _this = this;
        this.router.navigateByUrl('/homescreen/homescreendetail');
        return;
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
    PatientInformationDetailComponent.prototype.navigateToDetail = function (id, page) {
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
    PatientInformationDetailComponent.prototype.getFormConfig = function (securityJson) {
        this.local.formConfig = {};
        this.local.formConfig.patientName = {
            security_code: 'patientName',
            label: 'Patient Name',
            type: 'text',
            name: 'patientName',
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
        this.local.formConfig.patientEmail = {
            security_code: 'patientEmail',
            label: 'Patient Email',
            type: 'email',
            name: 'patientEmail',
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
        this.local.formConfig.patientHid = {
            security_code: 'patientHid',
            label: 'Patient HId',
            type: 'text',
            name: 'patientHid',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: false,
            toolbar: true,
            validations: {
                required: false,
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.dateOfBirth = {
            security_code: 'dateOfBirth',
            label: 'Date of Birth',
            type: 'date',
            name: 'dateOfBirth',
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
                change: this.handleCustomEvents.bind(this),
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.age = {
            security_code: 'age',
            label: 'Age',
            type: 'number',
            name: 'age',
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
        this.local.formConfig.gender = {
            security_code: 'gender',
            label: 'Gender',
            type: 'select',
            name: 'gender',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [{
                    label: 'Male',
                    value: 'Male'
                }, {
                    label: 'Female',
                    value: 'Female'
                }],
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
        this.local.formConfig.bloodGroup = {
            security_code: 'bloodGroup',
            label: 'Blood group',
            type: 'select',
            name: 'bloodGroup',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [{
                    label: 'A',
                    value: 'A'
                }, {
                    label: 'B',
                    value: 'B'
                }, {
                    label: 'O',
                    value: 'O'
                }, {
                    label: 'AB',
                    value: 'AB'
                }],
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
        this.local.formConfig.address = {
            security_code: 'address',
            label: 'Address',
            type: 'textarea',
            name: 'address',
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
        this.local.formConfig.city = {
            security_code: 'city',
            label: 'City',
            type: 'text',
            name: 'city',
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
        this.local.formConfig.zipcode = {
            security_code: 'zipcode',
            label: 'Zipcode',
            type: 'number',
            name: 'zipcode',
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
        this.local.formConfig.insuranceProvider = {
            security_code: 'insuranceProvider',
            label: 'Insurance Provider',
            type: 'text',
            name: 'insuranceProvider',
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
        this.local.formConfig.subscriberNumber = {
            security_code: 'subscriberNumber',
            label: 'Subscriber Number',
            type: 'number',
            name: 'subscriberNumber',
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
        this.local.formConfig.groupNumber = {
            security_code: 'groupNumber',
            label: 'Group Number',
            type: 'number',
            name: 'groupNumber',
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
        this.local.formConfig.insuranceCoverage = {
            security_code: 'insuranceCoverage',
            label: 'Insurance Coverage',
            type: 'date',
            name: 'insuranceCoverage',
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
        this.local.formConfig.insuranceType = {
            security_code: 'insuranceType',
            label: 'Insurance type',
            type: 'select',
            name: 'insuranceType',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [{
                    label: '0-3 days',
                    value: '0-3 days'
                }, {
                    label: '3-7 days',
                    value: '3-7 days'
                }, {
                    label: '>7 days',
                    value: '>7 days'
                }],
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
        this.local.formConfig.status = {
            security_code: 'status',
            label: 'Status',
            type: 'select',
            name: 'status',
            placeholder: '',
            hidden: true,
            infoBubble: '',
            values: [],
            options: [{
                    label: 'Risk score to be calculated',
                    value: 'Risk score to be calculated'
                }, {
                    label: 'Risk self accessed',
                    value: 'Risk self accessed'
                }, {
                    label: 'Consultation required',
                    value: 'Consultation required'
                }, {
                    label: 'Consultation not required',
                    value: 'Consultation not required'
                }, {
                    label: 'Consultation scheduled',
                    value: 'Consultation scheduled'
                }, {
                    label: 'Consultation completed (Test prescribed)',
                    value: 'Consultation completed (Test prescribed)'
                }, {
                    label: 'Consultation completed (Weekly monitoring',
                    value: 'Consultation completed (Weekly monitoring'
                }],
            disabled: false,
            toolbar: true,
            validations: {},
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.riskLevel = {
            security_code: 'riskLevel',
            label: 'Risk Level',
            type: 'select',
            name: 'riskLevel',
            placeholder: '',
            hidden: true,
            infoBubble: '',
            values: [],
            options: [{
                    label: 'Low',
                    value: 'Low'
                }, {
                    label: 'Medium',
                    value: 'Medium'
                }, {
                    label: 'High',
                    value: 'High'
                }],
            disabled: false,
            toolbar: true,
            validations: {},
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.diabetes = {
            security_code: 'diabetes',
            label: 'Diabetes',
            type: 'radio',
            name: 'diabetes',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.highBloodPressure = {
            security_code: 'highBloodPressure',
            label: 'High Blood Pressure',
            type: 'radio',
            name: 'highBloodPressure',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.asthma = {
            security_code: 'asthma',
            label: 'Asthma',
            type: 'radio',
            name: 'asthma',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.heartDisease = {
            security_code: 'heartDisease',
            label: 'Heart Disease',
            type: 'radio',
            name: 'heartDisease',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.immunocompromised = {
            security_code: 'immunocompromised',
            label: 'Immunocompromised',
            type: 'radio',
            name: 'immunocompromised',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.pregnant = {
            security_code: 'pregnant',
            label: 'Pregnant',
            type: 'radio',
            name: 'pregnant',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.travelledRecently = {
            security_code: 'travelledRecently',
            label: 'Travelled recently',
            type: 'radio',
            name: 'travelledRecently',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.memberInHouseholdTravelledRecently = {
            security_code: 'memberInHouseholdTravelledRecently',
            label: 'Member in household travelled recently',
            type: 'radio',
            name: 'memberInHouseholdTravelledRecently',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.areYouAHealthcareWorker = {
            security_code: 'areYouAHealthcareWorker',
            label: 'Are you a healthcare worker',
            type: 'radio',
            name: 'areYouAHealthcareWorker',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.memberInHouseholdAHealthcareWorker = {
            security_code: 'memberInHouseholdAHealthcareWorker',
            label: 'Member in household a healthcare worker',
            type: 'radio',
            name: 'memberInHouseholdAHealthcareWorker',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.airportStaff = {
            security_code: 'airportStaff',
            label: 'Airport staff',
            type: 'radio',
            name: 'airportStaff',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.memberInHouseholdAAirportStaff = {
            security_code: 'memberInHouseholdAAirportStaff',
            label: 'Member in household a airport staff',
            type: 'radio',
            name: 'memberInHouseholdAAirportStaff',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.doYouWorkInCrowdedAreasLikeMallEtc = {
            security_code: 'doYouWorkInCrowdedAreasLikeMallEtc',
            label: 'Do you work in crowded areas like mall etc',
            type: 'radio',
            name: 'doYouWorkInCrowdedAreasLikeMallEtc',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        this.local.formConfig.doesMemberInHouseholdWorkInCrowdedArea = {
            security_code: 'doesMemberInHouseholdWorkInCrowdedArea',
            label: 'Does member in household work in crowded area',
            type: 'radio',
            name: 'doesMemberInHouseholdWorkInCrowdedArea',
            placeholder: '',
            infoBubble: '',
            values: [{
                    label: 'Yes',
                    value: true
                }, {
                    label: 'No',
                    value: false
                }],
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
        var config = {
            initCallback: this.PatientInformationDetailFormInitComplete.bind(this),
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
                        {
                            groupHeaderClass: 'form-group-subheader',
                            groupContentClass: 'paddingZero',
                            collapsible: 'false',
                            columns: '50',
                            label: 'Basic Details',
                            disableRights: false,
                            columnsWidth: 12,
                            items: [
                                this.local.formConfig.patientName,
                                this.local.formConfig.gender,
                                this.local.formConfig.patientHid,
                                this.local.formConfig.dateOfBirth,
                                this.local.formConfig.age,
                                this.local.formConfig.bloodGroup,
                                this.local.formConfig.address,
                                this.local.formConfig.city,
                                this.local.formConfig.zipcode,
                                this.local.formConfig.insuranceProvider,
                                this.local.formConfig.subscriberNumber,
                                this.local.formConfig.groupNumber,
                                this.local.formConfig.insuranceCoverage,
                                this.local.formConfig.insuranceType,
                                this.local.formConfig.status,
                                this.local.formConfig.riskLevel
                            ]
                        },
                        {
                            groupHeaderClass: 'form-group-subheader hidden',
                            groupContentClass: 'paddingZero',
                            collapsible: 'false',
                            columns: '50',
                            label: '',
                            disableRights: false,
                            columnsWidth: 12,
                            items: [
                                {
                                    groupHeaderClass: 'form-group-subheader',
                                    groupContentClass: 'paddingZero',
                                    collapsible: 'false',
                                    columns: '0',
                                    label: 'Pre existing conditions',
                                    disableRights: false,
                                    columnsWidth: 12,
                                    items: [
                                        this.local.formConfig.diabetes,
                                        this.local.formConfig.highBloodPressure,
                                        this.local.formConfig.asthma,
                                        this.local.formConfig.heartDisease,
                                        this.local.formConfig.immunocompromised,
                                        this.local.formConfig.pregnant
                                    ]
                                },
                                {
                                    groupHeaderClass: 'form-group-subheader',
                                    groupContentClass: 'paddingZero',
                                    collapsible: 'false',
                                    columns: '0',
                                    label: 'Other Factors',
                                    disableRights: false,
                                    columnsWidth: 12,
                                    items: [
                                        this.local.formConfig.travelledRecently,
                                        this.local.formConfig.memberInHouseholdTravelledRecently,
                                        this.local.formConfig.areYouAHealthcareWorker,
                                        this.local.formConfig.memberInHouseholdAHealthcareWorker,
                                        this.local.formConfig.airportStaff,
                                        this.local.formConfig.memberInHouseholdAAirportStaff,
                                        this.local.formConfig.doYouWorkInCrowdedAreasLikeMallEtc,
                                        this.local.formConfig.doesMemberInHouseholdWorkInCrowdedArea
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        config = this.updateFormConfig(config, this.local.formConfig);
        return config;
    };
    PatientInformationDetailComponent.prototype.PatientInformationDetailFormInitComplete = function (form) {
        this.customFormInitComplete(form);
    };
    PatientInformationDetailComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    PatientInformationDetailComponent.prototype.normalizeData = function (data) {
        data = this.updateFormdata(data);
        return data;
    };
    PatientInformationDetailComponent.prototype.updateCaptionBarWithData = function (data) {
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
    PatientInformationDetailComponent.prototype.responseDataManipulation = function (data, dontPatch) {
        if (!data) {
            this.child.form.reset();
            return;
        }
        this.infolabel = angular_expressions__WEBPACK_IMPORTED_MODULE_11___default.a.compile('')(data);
        if (!this.route.snapshot.params.id && !this.id) {
            this.id = data.sid;
            this.location.replaceState(this.location.path() + "?id=" + data.sid);
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
    PatientInformationDetailComponent.prototype.getData = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        var params = {
            sid: this.id
        };
        this.patientInformationService.getPatientInformationBySid(params).subscribe(function (response) {
            _this.child.form.patchValue(response);
            _this.appGlobalService.write('patientInfo', response);
            _this.responseDataManipulation(response);
        });
    };
    PatientInformationDetailComponent.prototype.saveAddedFiles = function (splittedData) {
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
    PatientInformationDetailComponent.prototype.saveDataThenFiles = function (method, splittedData, saveFiles) {
        var _this = this;
        var service;
        if (!splittedData.data.status) {
            splittedData.data.status = 'Risk score to be calculated';
        }
        if (method === 'post') {
            service = this.patientInformationService.createPatientInformation(splittedData.data);
        }
        else if (method === 'put') {
            if (!splittedData.data.sid) {
                splittedData.data.sid = this.id;
            }
            service = this.patientInformationService.updatePatientInformation(splittedData.data);
        }
        service.subscribe(function (res) {
            if (saveFiles) {
                var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, splittedData.data, res);
                splittedData.data = data;
                _this.child.form.markAsPristine();
                _this.saveAddedFiles(splittedData);
            }
            _this.appGlobalService.write('patientInfo', res);
            _this.responseDataManipulation(res, false);
        });
    };
    PatientInformationDetailComponent.prototype.saveData = function () {
        var submitButton = this.child.submitButton.nativeElement;
        submitButton.click();
        if (!this.child.form.valid) {
            return;
        }
        var splittedData = this.utilService.splitFileAndData(this.child.form.value, this.fileFields);
        splittedData.data.patientEmail = this.appGlobalService.get('currentUser').email;
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
    PatientInformationDetailComponent.prototype.resetData = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.modalPopupService.openConfirmationModal('Cofirm', 'Do you really want to cancel the changes?', null, null, null).subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.responseDataManipulation(_this.backupData);
            }
        });
    };
    PatientInformationDetailComponent.prototype.getSecurityJSON = function () {
        var currentUser = this.getCurrentUser();
        var securityJson = _app_security_patient_information_patient_information_detail_patient_information_detail_security__WEBPACK_IMPORTED_MODULE_13__["default"];
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
    PatientInformationDetailComponent.prototype.getCurrentUser = function () {
        return this.appGlobalService.get('currentUser');
    };
    PatientInformationDetailComponent.prototype.onCreateAction = function (btn) {
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
                var createSubscriber = _this.patientInformationService.createPatientInformation(_this.id);
                createSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(createSubscriber);
            }
        });
    };
    PatientInformationDetailComponent.prototype.onUpdateAction = function (btn) {
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
                var updateSubscriber = _this.patientInformationService.updatePatientInformation(_this.id);
                updateSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(updateSubscriber);
            }
        });
    };
    PatientInformationDetailComponent.prototype.onDeleteAction = function (btn) {
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
                var deleteSubscriber = _this.patientInformationService.deletePatientInformation(_this.id);
                deleteSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(deleteSubscriber);
            }
        });
    };
    PatientInformationDetailComponent.prototype.setFileFields = function () {
        for (var field in this.local.formConfig) {
            if (this.local.formConfig.hasOwnProperty(field)) {
                var element = this.local.formConfig[field];
                if (element.type === 'image' || element.type === 'file' || element.file === 'carousel') {
                    this.fileFields.push(element.name);
                }
            }
        }
    };
    PatientInformationDetailComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].isMobile;
        this.id = this.route.snapshot.params.id || this.appGlobalService.get('currentUser').email;
        this.actionBarconf = this.actionBarConfiguration();
        this.workflowActionBarconf = this.workflowActionBarConfiguration();
        this.captionbarconf = this.captionbarConfiguration();
        this.pagename = 'PATIENT_INFORMATION_DETAIL';
        this.getData();
        this.formConfig = this.getFormConfig(this.getSecurityJSON());
        this.setFileFields();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_widget_vs_form_vs_form_component__WEBPACK_IMPORTED_MODULE_2__["VsFormComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PatientInformationDetailComponent.prototype, "child", void 0);
    PatientInformationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-information-detail',
            template: __webpack_require__(/*! ./patient-information-detail.component.html */ "./src/app/patient-information/patient-information-detail/patient-information-detail.component.html"),
            styles: [__webpack_require__(/*! ./patient-information-detail.component.scss */ "./src/app/patient-information/patient-information-detail/patient-information-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _app_widget_services_upload_attachment_service__WEBPACK_IMPORTED_MODULE_6__["UploadAttachmentService"],
            _app_core_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _app_core_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_9__["AppGlobalService"],
            _patient_information_service__WEBPACK_IMPORTED_MODULE_15__["PatientInformationService"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_16__["ModalPopupService"]])
    ], PatientInformationDetailComponent);
    return PatientInformationDetailComponent;
}(_app_custom_patient_information_patient_information_detail_patient_information_detail_handler__WEBPACK_IMPORTED_MODULE_14__["PatientInformationDetailHandler"]));



/***/ }),

/***/ "./src/app/patient-information/patient-information-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/patient-information/patient-information-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PatientInformationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInformationRoutingModule", function() { return PatientInformationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/_guards/auth.can-activate.guard */ "./src/app/auth/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_information_detail_patient_information_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-information-detail/patient-information-detail.component */ "./src/app/patient-information/patient-information-detail/patient-information-detail.component.ts");





var routes = [
    {
        path: 'patient-information',
        redirectTo: 'patientinformationdetail',
        pathMatch: 'full'
    },
    {
        path: 'patientinformationdetail',
        component: _patient_information_detail_patient_information_detail_component__WEBPACK_IMPORTED_MODULE_4__["PatientInformationDetailComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "PATIENT_INFORMATION_DETAIL",
            expectedRoles: []
        }
    }
];
var PatientInformationRoutingModule = /** @class */ (function () {
    function PatientInformationRoutingModule() {
    }
    PatientInformationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], PatientInformationRoutingModule);
    return PatientInformationRoutingModule;
}());



/***/ }),

/***/ "./src/app/patient-information/patient-information.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/patient-information/patient-information.module.ts ***!
  \*******************************************************************/
/*! exports provided: PatientInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInformationModule", function() { return PatientInformationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _patient_information_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-information-routing.module */ "./src/app/patient-information/patient-information-routing.module.ts");
/* harmony import */ var _patient_information_detail_patient_information_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-information-detail/patient-information-detail.component */ "./src/app/patient-information/patient-information-detail/patient-information-detail.component.ts");








var PatientInformationModule = /** @class */ (function () {
    function PatientInformationModule() {
    }
    PatientInformationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _patient_information_detail_patient_information_detail_component__WEBPACK_IMPORTED_MODULE_7__["PatientInformationDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _patient_information_routing_module__WEBPACK_IMPORTED_MODULE_6__["PatientInformationRoutingModule"]
            ],
            entryComponents: [],
            exports: []
        })
    ], PatientInformationModule);
    return PatientInformationModule;
}());



/***/ }),

/***/ "./src/app/security/patient-information/patient-information-detail/patient-information-detail.security.js":
/*!****************************************************************************************************************!*\
  !*** ./src/app/security/patient-information/patient-information-detail/patient-information-detail.security.js ***!
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
//# sourceMappingURL=patient-information-patient-information-module.js.map