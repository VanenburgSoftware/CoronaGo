(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-questionaire-patient-questionaire-module"],{

/***/ "./src/app/custom/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.handler.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/custom/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.handler.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AllPatientsNotScheduledListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPatientsNotScheduledListHandler", function() { return AllPatientsNotScheduledListHandler; });
var AllPatientsNotScheduledListHandler = /** @class */ (function () {
    function AllPatientsNotScheduledListHandler(util) {
        this.util = util;
    }
    AllPatientsNotScheduledListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    AllPatientsNotScheduledListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    AllPatientsNotScheduledListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    AllPatientsNotScheduledListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    AllPatientsNotScheduledListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    AllPatientsNotScheduledListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    AllPatientsNotScheduledListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    AllPatientsNotScheduledListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    AllPatientsNotScheduledListHandler.prototype.onBeforeBackAction = function () {
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterBackAction = function () {
    };
    AllPatientsNotScheduledListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    AllPatientsNotScheduledListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    AllPatientsNotScheduledListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    AllPatientsNotScheduledListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    AllPatientsNotScheduledListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
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
    AllPatientsNotScheduledListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    AllPatientsNotScheduledListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    AllPatientsNotScheduledListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return AllPatientsNotScheduledListHandler;
}());



/***/ }),

/***/ "./src/app/custom/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.handler.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/custom/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.handler.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AllPatientsScheduledListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPatientsScheduledListHandler", function() { return AllPatientsScheduledListHandler; });
var AllPatientsScheduledListHandler = /** @class */ (function () {
    function AllPatientsScheduledListHandler(util) {
        this.util = util;
    }
    AllPatientsScheduledListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    AllPatientsScheduledListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    AllPatientsScheduledListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    AllPatientsScheduledListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    AllPatientsScheduledListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    AllPatientsScheduledListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    AllPatientsScheduledListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    AllPatientsScheduledListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    AllPatientsScheduledListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    AllPatientsScheduledListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    AllPatientsScheduledListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    AllPatientsScheduledListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    AllPatientsScheduledListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    AllPatientsScheduledListHandler.prototype.onBeforeBackAction = function () {
    };
    AllPatientsScheduledListHandler.prototype.onAfterBackAction = function () {
    };
    AllPatientsScheduledListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    AllPatientsScheduledListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    AllPatientsScheduledListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    AllPatientsScheduledListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    AllPatientsScheduledListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    AllPatientsScheduledListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
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
    AllPatientsScheduledListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    AllPatientsScheduledListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    AllPatientsScheduledListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return AllPatientsScheduledListHandler;
}());



/***/ }),

/***/ "./src/app/custom/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.handler.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/custom/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.handler.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: MyPatientsNotScheduledListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsNotScheduledListHandler", function() { return MyPatientsNotScheduledListHandler; });
var MyPatientsNotScheduledListHandler = /** @class */ (function () {
    function MyPatientsNotScheduledListHandler(util) {
        this.util = util;
    }
    MyPatientsNotScheduledListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    MyPatientsNotScheduledListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    MyPatientsNotScheduledListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    MyPatientsNotScheduledListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    MyPatientsNotScheduledListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    MyPatientsNotScheduledListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    MyPatientsNotScheduledListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    MyPatientsNotScheduledListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    MyPatientsNotScheduledListHandler.prototype.onBeforeBackAction = function () {
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterBackAction = function () {
    };
    MyPatientsNotScheduledListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    MyPatientsNotScheduledListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    MyPatientsNotScheduledListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    MyPatientsNotScheduledListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    MyPatientsNotScheduledListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
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
    MyPatientsNotScheduledListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    MyPatientsNotScheduledListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    MyPatientsNotScheduledListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return MyPatientsNotScheduledListHandler;
}());



/***/ }),

/***/ "./src/app/custom/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.handler.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/custom/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.handler.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MyPatientsScheduledListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsScheduledListHandler", function() { return MyPatientsScheduledListHandler; });
var MyPatientsScheduledListHandler = /** @class */ (function () {
    function MyPatientsScheduledListHandler(util) {
        this.util = util;
    }
    MyPatientsScheduledListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    MyPatientsScheduledListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    MyPatientsScheduledListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    MyPatientsScheduledListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    MyPatientsScheduledListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    MyPatientsScheduledListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    MyPatientsScheduledListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    MyPatientsScheduledListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    MyPatientsScheduledListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    MyPatientsScheduledListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    MyPatientsScheduledListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    MyPatientsScheduledListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    MyPatientsScheduledListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    MyPatientsScheduledListHandler.prototype.onBeforeBackAction = function () {
    };
    MyPatientsScheduledListHandler.prototype.onAfterBackAction = function () {
    };
    MyPatientsScheduledListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    MyPatientsScheduledListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    MyPatientsScheduledListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    MyPatientsScheduledListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    MyPatientsScheduledListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    MyPatientsScheduledListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
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
    MyPatientsScheduledListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    MyPatientsScheduledListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    MyPatientsScheduledListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return MyPatientsScheduledListHandler;
}());



/***/ }),

/***/ "./src/app/custom/patient-questionaire/patient-details-detail/patient-details-detail.handler.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/custom/patient-questionaire/patient-details-detail/patient-details-detail.handler.ts ***!
  \******************************************************************************************************/
/*! exports provided: PatientDetailsDetailHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailsDetailHandler", function() { return PatientDetailsDetailHandler; });
var PatientDetailsDetailHandler = /** @class */ (function () {
    function PatientDetailsDetailHandler(appGlobalService) {
        this.appGlobalService = appGlobalService;
    }
    PatientDetailsDetailHandler.prototype.updateActionBarConfig = function (actionConfig, type) {
        actionConfig.buttons.primary[1][0]['class'] = 'pge-primary';
        return actionConfig;
    };
    PatientDetailsDetailHandler.prototype.updateCaptionConfig = function (captionConfig, type) {
        return captionConfig;
    };
    PatientDetailsDetailHandler.prototype.customCaptionbarAction = function (data) { };
    PatientDetailsDetailHandler.prototype.customCaptionbarInitComplete = function (data) {
        this.customCaption = data;
    };
    PatientDetailsDetailHandler.prototype.customActionbarInitComplete = function (data) {
        this.actionbarMap = data;
        /* if (this['child'].form && this['child'].form.value) {
            if (!this['child'].form.value.sid) {
                this.hideButtons(data, ['needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation']);
            }
        } else {
            this.hideButtons(data, ['needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultationschedule_consultation']);
        } */
    };
    PatientDetailsDetailHandler.prototype.customWorkflowActionbarInitComplete = function (data) { };
    PatientDetailsDetailHandler.prototype.updateFormConfig = function (currentConfig, localPlaceHolder) {
        return currentConfig;
    };
    PatientDetailsDetailHandler.prototype.updateFormdata = function (data) {
        return data;
    };
    PatientDetailsDetailHandler.prototype.validateDataBeforeSave = function (data) {
        return data;
    };
    PatientDetailsDetailHandler.prototype.customFormInitComplete = function (form) {
        this.customFormConfig = form;
    };
    PatientDetailsDetailHandler.prototype.customDataChanged = function (data) { };
    PatientDetailsDetailHandler.prototype.handleCustomEvents = function (e, form) { };
    PatientDetailsDetailHandler.prototype.onAfterServiceResponse = function (data) {
        this.hideBtnsOnStatus(data);
    };
    PatientDetailsDetailHandler.prototype.onAfterResponseData = function (data) { };
    PatientDetailsDetailHandler.prototype.hideButtons = function (data, btnsToHide) {
        if (!data) {
            return;
        }
        btnsToHide.map(function (btn) {
            if (data.elementMap[btn]) {
                data.elementMap[btn].show = false;
            }
        });
    };
    PatientDetailsDetailHandler.prototype.showButtons = function (data, btnsToShow) {
        if (!data) {
            return;
        }
        btnsToShow.map(function (btn) {
            if (data.elementMap[btn]) {
                data.elementMap[btn].show = true;
            }
        });
    };
    PatientDetailsDetailHandler.prototype.customActionHandler = function (btn) {
        /* if (btn.action === 'calculate_risk_score') {
            this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation']);
            this.showButtons(this.actionbarMap, ['needs_consultation', 'consultation_not_required']);
            this.customFormConfig.patchValue({
                status: 'Risk self accessed'
            });
            if (this.customCaption.elementMap.status) {
                this.customCaption.elementMap.status.content = 'Risk self accessed';
            }
        } else if (btn.action === 'needs_consultation') {
            this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation']);
            this.showButtons(this.actionbarMap, ['schedule_consultation']);
            this.customFormConfig.patchValue({
                status: 'Consultation required'
            });
            if (this.customCaption.elementMap.status) {
                this.customCaption.elementMap.status.content = 'Consultation required';
            }
        } else if (btn.action === 'consultation_not_required') {
            this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation']);
            this.showButtons(this.actionbarMap, ['do_weekly_monitoring']);
            this.customFormConfig.patchValue({
                status: 'Consultation not required'
            });
            this.customCaption.elementMap.status.content = 'Consultation not required';
        } else if (btn.action === 'schedule_consultation') {
            this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'download_report', 'schedule_consultation']);
            this.showButtons(this.actionbarMap, ['prescribe_test', 'do_weekly_monitoring']);
            this.customFormConfig.patchValue({
                status: 'Consultation scheduled'
            });
            if (this.customCaption.elementMap.status) {
                this.customCaption.elementMap.status.content = 'Consultation scheduled';
            }
        } else if (btn.action === 'prescribe_test') {
            this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'download_report', 'schedule_consultation', 'prescribe_test', 'do_weekly_monitoring']);
            this.customFormConfig.patchValue({
                status: 'Consultation completed (Test prescribed)'
            });
            if (this.customCaption.elementMap.status) {
                this.customCaption.elementMap.status.content = 'Consultation completed (Test prescribed)';
            }
        } else if (btn.action === 'do_weekly_monitoring') {
            this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'download_report', 'schedule_consultation', 'prescribe_test', 'do_weekly_monitoring']);
            this.customFormConfig.patchValue({
                status: 'Consultation completed (Weekly monitoring)'
            });
            if (this.customCaption.elementMap.status) {
                this.customCaption.elementMap.status.content = 'Consultation completed (Weekly monitoring)';
            }
        } */
        return false;
    };
    PatientDetailsDetailHandler.prototype.isDoctor = function () {
        var user = this.appGlobalService.get('currentUser');
        return user.doc && (this.id !== user.email);
    };
    PatientDetailsDetailHandler.prototype.hideBtnsOnStatus = function (data) {
        if (!data.status) {
            return;
        }
        var status = data.status.toLowerCase();
        switch (status) {
            case 'risk score to be calculated': {
                this.hideButtons(this.actionbarMap, ['needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation']);
                this.showButtons(this.actionbarMap, ['save', 'cancel']);
                break;
            }
            case 'risk self accessed': {
                this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation', 'save', 'cancel']);
                if (this.isDoctor()) {
                    this.showButtons(this.actionbarMap, ['needs_consultation', 'consultation_not_required']);
                }
                else {
                    this.hideButtons(this.actionbarMap, ['needs_consultation', 'consultation_not_required']);
                }
                break;
            }
            case 'consultation required': {
                this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation', 'save', 'cancel']);
                break;
            }
            case 'consultation not required': {
                this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation', 'save', 'cancel']);
                if (this.isDoctor()) {
                    this.showButtons(this.actionbarMap, ['do_weekly_monitoring']);
                }
                else {
                    this.hideButtons(this.actionbarMap, ['do_weekly_monitoring']);
                }
                break;
            }
            case 'consultation scheduled': {
                this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'download_report', 'schedule_consultation', 'save', 'cancel']);
                if (this.isDoctor()) {
                    this.showButtons(this.actionbarMap, ['prescribe_test', 'do_weekly_monitoring']);
                }
                else {
                    this.hideButtons(this.actionbarMap, ['prescribe_test', 'do_weekly_monitoring']);
                }
                break;
            }
            case 'consultation completed (test prescribed)': {
                this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'download_report', 'schedule_consultation', 'prescribe_test', 'do_weekly_monitoring', 'save', 'cancel']);
                break;
            }
            case 'consultation completed (weekly monitoring)': {
                this.hideButtons(this.actionbarMap, ['calculate_risk_score', 'needs_consultation', 'consultation_not_required', 'download_report', 'schedule_consultation', 'prescribe_test', 'do_weekly_monitoring']);
                if (!this.isDoctor()) {
                    this.showButtons(this.actionbarMap, ['save', 'cancel']);
                }
                break;
            }
            default: {
                this.hideButtons(this.actionbarMap, ['needs_consultation', 'consultation_not_required', 'prescribe_test', 'do_weekly_monitoring', 'download_report', 'schedule_consultation']);
                if (!this.isDoctor()) {
                    this.showButtons(this.actionbarMap, ['save', 'cancel']);
                }
                break;
            }
        }
    };
    PatientDetailsDetailHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return PatientDetailsDetailHandler;
}());



/***/ }),

/***/ "./src/app/custom/patient-questionaire/patient-questionaire-list/patient-questionaire-list.handler.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/custom/patient-questionaire/patient-questionaire-list/patient-questionaire-list.handler.ts ***!
  \************************************************************************************************************/
/*! exports provided: PatientQuestionaireListHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientQuestionaireListHandler", function() { return PatientQuestionaireListHandler; });
var PatientQuestionaireListHandler = /** @class */ (function () {
    function PatientQuestionaireListHandler(util) {
        this.util = util;
    }
    PatientQuestionaireListHandler.prototype.configureExtendedPageConfig = function () {
        return {};
    };
    PatientQuestionaireListHandler.prototype.extendedGridConfig = function (gridConfig) {
        for (var idx in gridConfig.columns) {
        }
        return gridConfig;
    };
    PatientQuestionaireListHandler.prototype.beforeRowMenuOptionShow = function (option, data, row) {
        return option;
    };
    PatientQuestionaireListHandler.prototype.onAfterGridInitComplete = function (dtTable, settings, json) {
    };
    PatientQuestionaireListHandler.prototype.onAfterRowSelect = function (rows, idx) {
    };
    PatientQuestionaireListHandler.prototype.onAfterRowClick = function (event, id) {
    };
    PatientQuestionaireListHandler.prototype.onBeforeButtonAction = function (btn) {
        return;
    };
    PatientQuestionaireListHandler.prototype.onAfterButtonAction = function (btn, response) {
        return;
    };
    PatientQuestionaireListHandler.prototype.onAfterRowMenuAction = function (option, response) {
    };
    PatientQuestionaireListHandler.prototype.onBeforeComponentDestroy = function () {
    };
    PatientQuestionaireListHandler.prototype.extendedSearchConfig = function (config) {
        return config;
    };
    PatientQuestionaireListHandler.prototype.extendedActionbarConfig = function (config) {
        return config;
    };
    PatientQuestionaireListHandler.prototype.extendedKanbanConfig = function (config) {
        return config;
    };
    PatientQuestionaireListHandler.prototype.onBeforeBackAction = function () {
    };
    PatientQuestionaireListHandler.prototype.onAfterBackAction = function () {
    };
    PatientQuestionaireListHandler.prototype.onBeforeCreateAction = function (btn) {
    };
    PatientQuestionaireListHandler.prototype.onAfterCreateAction = function (btn) {
    };
    PatientQuestionaireListHandler.prototype.onBeforeDeleteAction = function (selectedRowIds, btn, type) {
    };
    PatientQuestionaireListHandler.prototype.onAfterDeleteAction = function (selectedRowIds, btn, type) {
    };
    // TODO
    PatientQuestionaireListHandler.prototype.setDefaultFields = function (field, showLabel, classes, mobileContent, data) {
        mobileContent.mainContent[field] = {
            data: data[field],
            showLabel: showLabel,
            classes: classes
        };
    };
    PatientQuestionaireListHandler.prototype.setAdditionalFields = function (mobileContent, data) {
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
    PatientQuestionaireListHandler.prototype.mobileContent = function (row, data, index, mobileContent) {
        /* mobileContent.mainContent = {};
     
         this.setDefaultFields('firstName', false, 'col-6 custom', mobileContent, data);
         this.setDefaultFields('lastName', false, 'col-6', mobileContent, data);
         this.setDefaultFields('status', false, 'col-6', mobileContent, data);
         this.setDefaultFields('category', false, 'col-6', mobileContent, data);
         this.setAdditionalFields(mobileContent, data);*/
        return mobileContent;
    };
    PatientQuestionaireListHandler.prototype.customActionHandler = function (btn) {
        return false;
    };
    PatientQuestionaireListHandler.prototype.customConfirmConfig = function (confirmConfig, btn) {
        return confirmConfig;
    };
    return PatientQuestionaireListHandler;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL2FsbC1wYXRpZW50cy1ub3Qtc2NoZWR1bGVkLWxpc3QvYWxsLXBhdGllbnRzLW5vdC1zY2hlZHVsZWQtbGlzdC1tb2JpbGUtdmlldy9hbGwtcGF0aWVudHMtbm90LXNjaGVkdWxlZC1saXN0LW1vYmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: AllPatientsNotScheduledListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPatientsNotScheduledListMobileViewComponent", function() { return AllPatientsNotScheduledListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllPatientsNotScheduledListMobileViewComponent = /** @class */ (function () {
    function AllPatientsNotScheduledListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'AllPatientsNotScheduledListMobileViewComponent';
    }
    AllPatientsNotScheduledListMobileViewComponent.prototype.ngOnInit = function () {
    };
    AllPatientsNotScheduledListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-patients-not-scheduled-list-mobile-view',
            template: __webpack_require__(/*! ./all-patients-not-scheduled-list-mobile-view.component.html */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./all-patients-not-scheduled-list-mobile-view.component.scss */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllPatientsNotScheduledListMobileViewComponent);
    return AllPatientsNotScheduledListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button>\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL2FsbC1wYXRpZW50cy1ub3Qtc2NoZWR1bGVkLWxpc3QvYWxsLXBhdGllbnRzLW5vdC1zY2hlZHVsZWQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AllPatientsNotScheduledListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPatientsNotScheduledListComponent", function() { return AllPatientsNotScheduledListComponent; });
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
/* harmony import */ var _custom_patient_questionaire_all_patients_not_scheduled_list_all_patients_not_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.handler */ "./src/app/custom/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.handler.ts");
/* harmony import */ var _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../patient-questionaire.service */ "./src/app/patient-questionaire/patient-questionaire.service.ts");
/* harmony import */ var _all_patients_not_scheduled_list_mobile_view_all_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.ts");














var AllPatientsNotScheduledListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AllPatientsNotScheduledListComponent, _super);
    function AllPatientsNotScheduledListComponent(util, patientQuestionaireService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.patientQuestionaireService = patientQuestionaireService;
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
        _this.pageName = 'ALL_PATIENTS_NOT_SCHEDULED_LIST';
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
    AllPatientsNotScheduledListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    AllPatientsNotScheduledListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    AllPatientsNotScheduledListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    AllPatientsNotScheduledListComponent.prototype.getDetailFormConfig = function () {
    };
    AllPatientsNotScheduledListComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _all_patients_not_scheduled_list_mobile_view_all_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["AllPatientsNotScheduledListMobileViewComponent"],
            mobileContent: this.mobileContent.bind(this),
            uniqueIdField: 'patientEmail',
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
                    data: 'dateOfBirth',
                    name: 'date_of_birth',
                    title: 'DATE_OF_BIRTH',
                    type: 'string',
                },
                {
                    data: 'riskLevel',
                    name: 'risk_level',
                    title: 'RISK_LEVEL',
                    type: 'string',
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
            gridConfig.data = this.patientQuestionaireService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_AllPatientsNotScheduled.url;
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
    AllPatientsNotScheduledListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    AllPatientsNotScheduledListComponent.prototype.getSelectedRows = function () {
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
    AllPatientsNotScheduledListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    AllPatientsNotScheduledListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    AllPatientsNotScheduledListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    AllPatientsNotScheduledListComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    AllPatientsNotScheduledListComponent.prototype.loadActionBar = function () {
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
    AllPatientsNotScheduledListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    AllPatientsNotScheduledListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    AllPatientsNotScheduledListComponent.prototype.actionBarAction = function (btn) {
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
    AllPatientsNotScheduledListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
    };
    AllPatientsNotScheduledListComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
    };
    AllPatientsNotScheduledListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    AllPatientsNotScheduledListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    AllPatientsNotScheduledListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
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
                var deleteSubscription = _this.patientQuestionaireService.deletePatientQuestionaire(params);
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
    AllPatientsNotScheduledListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.patientQuestionaireService.updatePatientQuestionaire(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    AllPatientsNotScheduledListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    AllPatientsNotScheduledListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    AllPatientsNotScheduledListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    AllPatientsNotScheduledListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_AllPatientsNotScheduled.url,
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
    AllPatientsNotScheduledListComponent.prototype.toggleKanbanView = function (type) {
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
    ], AllPatientsNotScheduledListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AllPatientsNotScheduledListComponent.prototype, "onGlobalClick", null);
    AllPatientsNotScheduledListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-patients-not-scheduled-list',
            template: __webpack_require__(/*! ./all-patients-not-scheduled-list.component.html */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.html"),
            styles: [__webpack_require__(/*! ./all-patients-not-scheduled-list.component.scss */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__["PatientQuestionaireService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], AllPatientsNotScheduledListComponent);
    return AllPatientsNotScheduledListComponent;
}(_custom_patient_questionaire_all_patients_not_scheduled_list_all_patients_not_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__["AllPatientsNotScheduledListHandler"]));



/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.scss ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL2FsbC1wYXRpZW50cy1zY2hlZHVsZWQtbGlzdC9hbGwtcGF0aWVudHMtc2NoZWR1bGVkLWxpc3QtbW9iaWxlLXZpZXcvYWxsLXBhdGllbnRzLXNjaGVkdWxlZC1saXN0LW1vYmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: AllPatientsScheduledListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPatientsScheduledListMobileViewComponent", function() { return AllPatientsScheduledListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllPatientsScheduledListMobileViewComponent = /** @class */ (function () {
    function AllPatientsScheduledListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'AllPatientsScheduledListMobileViewComponent';
    }
    AllPatientsScheduledListMobileViewComponent.prototype.ngOnInit = function () {
    };
    AllPatientsScheduledListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-patients-scheduled-list-mobile-view',
            template: __webpack_require__(/*! ./all-patients-scheduled-list-mobile-view.component.html */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./all-patients-scheduled-list-mobile-view.component.scss */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllPatientsScheduledListMobileViewComponent);
    return AllPatientsScheduledListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button>\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL2FsbC1wYXRpZW50cy1zY2hlZHVsZWQtbGlzdC9hbGwtcGF0aWVudHMtc2NoZWR1bGVkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AllPatientsScheduledListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPatientsScheduledListComponent", function() { return AllPatientsScheduledListComponent; });
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
/* harmony import */ var _custom_patient_questionaire_all_patients_scheduled_list_all_patients_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.handler */ "./src/app/custom/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.handler.ts");
/* harmony import */ var _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../patient-questionaire.service */ "./src/app/patient-questionaire/patient-questionaire.service.ts");
/* harmony import */ var _all_patients_scheduled_list_mobile_view_all_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.ts");














var AllPatientsScheduledListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AllPatientsScheduledListComponent, _super);
    function AllPatientsScheduledListComponent(util, patientQuestionaireService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.patientQuestionaireService = patientQuestionaireService;
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
        _this.pageName = 'ALL_PATIENTS_SCHEDULED_LIST';
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
    AllPatientsScheduledListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    AllPatientsScheduledListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    AllPatientsScheduledListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    AllPatientsScheduledListComponent.prototype.getDetailFormConfig = function () {
    };
    AllPatientsScheduledListComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _all_patients_scheduled_list_mobile_view_all_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["AllPatientsScheduledListMobileViewComponent"],
            mobileContent: this.mobileContent.bind(this),
            uniqueIdField: 'patientEmail',
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
                    data: 'dateOfBirth',
                    name: 'date_of_birth',
                    title: 'DATE_OF_BIRTH',
                    type: 'string',
                },
                {
                    data: 'riskLevel',
                    name: 'risk_level',
                    title: 'RISK_LEVEL',
                    type: 'string',
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
            rowMenuOptions: [
                { label: 'NEEDS_CONSULTATION', action: 'needs_consultation', icon: 'fa-flag', iconFont: 'font_awesome' },
            ],
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
            gridConfig.data = this.patientQuestionaireService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_AllPatientsScheduled.url;
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
    AllPatientsScheduledListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    AllPatientsScheduledListComponent.prototype.getSelectedRows = function () {
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
    AllPatientsScheduledListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    AllPatientsScheduledListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    AllPatientsScheduledListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    AllPatientsScheduledListComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    AllPatientsScheduledListComponent.prototype.loadActionBar = function () {
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
                    // Default buttons ends
                    // Form buttons in the list page
                    [{
                            label: 'NEEDS_CONSULTATION',
                            action: 'needs_consultation',
                            show: true,
                            name: 'needs_consultation',
                            icon: '',
                        }]
                ]
            }
        };
        if (!this.isMobile) {
            actionBarconf.buttons.secondary.shift();
        }
        actionBarconf = this.extendedActionbarConfig(actionBarconf);
        return actionBarconf;
    };
    AllPatientsScheduledListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    AllPatientsScheduledListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    AllPatientsScheduledListComponent.prototype.actionBarAction = function (btn) {
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
        else if (btn.action === 'needs_consultation') {
            var selectedRowIds = this.getSelectedRows();
            if (!this.customActionHandler(btn)) {
                this.onNeedsConsultationAction(selectedRowIds, btn, 'action_bar');
            }
        }
    };
    AllPatientsScheduledListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
        if (option.action === 'needs_consultation') {
            this.onNeedsConsultationAction(thisRow, option, 'row_menu_click');
        }
    };
    AllPatientsScheduledListComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
    };
    AllPatientsScheduledListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    AllPatientsScheduledListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    AllPatientsScheduledListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
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
                var deleteSubscription = _this.patientQuestionaireService.deletePatientQuestionaire(params);
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
    AllPatientsScheduledListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.patientQuestionaireService.updatePatientQuestionaire(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    AllPatientsScheduledListComponent.prototype.onNeedsConsultationAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var NeedsConsultationSubscriber = this.patientQuestionaireService.allPatientsScheduledRowNeedsConsultation(params);
        NeedsConsultationSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(NeedsConsultationSubscriber);
    };
    AllPatientsScheduledListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    AllPatientsScheduledListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    AllPatientsScheduledListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    AllPatientsScheduledListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_AllPatientsScheduled.url,
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
    AllPatientsScheduledListComponent.prototype.toggleKanbanView = function (type) {
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
    ], AllPatientsScheduledListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AllPatientsScheduledListComponent.prototype, "onGlobalClick", null);
    AllPatientsScheduledListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-patients-scheduled-list',
            template: __webpack_require__(/*! ./all-patients-scheduled-list.component.html */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.html"),
            styles: [__webpack_require__(/*! ./all-patients-scheduled-list.component.scss */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__["PatientQuestionaireService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], AllPatientsScheduledListComponent);
    return AllPatientsScheduledListComponent;
}(_custom_patient_questionaire_all_patients_scheduled_list_all_patients_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__["AllPatientsScheduledListHandler"]));



/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL215LXBhdGllbnRzLW5vdC1zY2hlZHVsZWQtbGlzdC9teS1wYXRpZW50cy1ub3Qtc2NoZWR1bGVkLWxpc3QtbW9iaWxlLXZpZXcvbXktcGF0aWVudHMtbm90LXNjaGVkdWxlZC1saXN0LW1vYmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: MyPatientsNotScheduledListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsNotScheduledListMobileViewComponent", function() { return MyPatientsNotScheduledListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyPatientsNotScheduledListMobileViewComponent = /** @class */ (function () {
    function MyPatientsNotScheduledListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'MyPatientsNotScheduledListMobileViewComponent';
    }
    MyPatientsNotScheduledListMobileViewComponent.prototype.ngOnInit = function () {
    };
    MyPatientsNotScheduledListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-patients-not-scheduled-list-mobile-view',
            template: __webpack_require__(/*! ./my-patients-not-scheduled-list-mobile-view.component.html */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./my-patients-not-scheduled-list-mobile-view.component.scss */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyPatientsNotScheduledListMobileViewComponent);
    return MyPatientsNotScheduledListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <!-- <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button> -->\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL215LXBhdGllbnRzLW5vdC1zY2hlZHVsZWQtbGlzdC9teS1wYXRpZW50cy1ub3Qtc2NoZWR1bGVkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: MyPatientsNotScheduledListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsNotScheduledListComponent", function() { return MyPatientsNotScheduledListComponent; });
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
/* harmony import */ var _custom_patient_questionaire_my_patients_not_scheduled_list_my_patients_not_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.handler */ "./src/app/custom/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.handler.ts");
/* harmony import */ var _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../patient-questionaire.service */ "./src/app/patient-questionaire/patient-questionaire.service.ts");
/* harmony import */ var _my_patients_not_scheduled_list_mobile_view_my_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.ts");














var MyPatientsNotScheduledListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyPatientsNotScheduledListComponent, _super);
    function MyPatientsNotScheduledListComponent(util, patientQuestionaireService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.patientQuestionaireService = patientQuestionaireService;
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
        _this.pageName = 'MY_PATIENTS_NOT_SCHEDULED_LIST';
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
    MyPatientsNotScheduledListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    MyPatientsNotScheduledListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    MyPatientsNotScheduledListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    MyPatientsNotScheduledListComponent.prototype.getDetailFormConfig = function () {
    };
    MyPatientsNotScheduledListComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _my_patients_not_scheduled_list_mobile_view_my_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["MyPatientsNotScheduledListMobileViewComponent"],
            mobileContent: this.mobileContent.bind(this),
            uniqueIdField: 'patientEmail',
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
                    data: 'dateOfBirth',
                    name: 'date_of_birth',
                    title: 'DATE_OF_BIRTH',
                    type: 'string',
                    render: function (data, type, row, meta) {
                        return _this.util.formatDate(data, 'DD-MMM-YYYY');
                    }
                },
                {
                    data: 'riskLevel',
                    name: 'risk_level',
                    title: 'RISK_LEVEL',
                    type: 'string',
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
            gridConfig.data = this.patientQuestionaireService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_MyPatientsNotScheduled.url;
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
    MyPatientsNotScheduledListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    MyPatientsNotScheduledListComponent.prototype.getSelectedRows = function () {
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
    MyPatientsNotScheduledListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    MyPatientsNotScheduledListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    MyPatientsNotScheduledListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    MyPatientsNotScheduledListComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    MyPatientsNotScheduledListComponent.prototype.loadActionBar = function () {
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
    MyPatientsNotScheduledListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    MyPatientsNotScheduledListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    MyPatientsNotScheduledListComponent.prototype.actionBarAction = function (btn) {
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
    MyPatientsNotScheduledListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
    };
    MyPatientsNotScheduledListComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
    };
    MyPatientsNotScheduledListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    MyPatientsNotScheduledListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    MyPatientsNotScheduledListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
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
                var deleteSubscription = _this.patientQuestionaireService.deletePatientQuestionaire(params);
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
    MyPatientsNotScheduledListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.patientQuestionaireService.updatePatientQuestionaire(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    MyPatientsNotScheduledListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    MyPatientsNotScheduledListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    MyPatientsNotScheduledListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    MyPatientsNotScheduledListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_MyPatientsNotScheduled.url,
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
    MyPatientsNotScheduledListComponent.prototype.toggleKanbanView = function (type) {
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
    ], MyPatientsNotScheduledListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MyPatientsNotScheduledListComponent.prototype, "onGlobalClick", null);
    MyPatientsNotScheduledListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-patients-not-scheduled-list',
            template: __webpack_require__(/*! ./my-patients-not-scheduled-list.component.html */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.html"),
            styles: [__webpack_require__(/*! ./my-patients-not-scheduled-list.component.scss */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__["PatientQuestionaireService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], MyPatientsNotScheduledListComponent);
    return MyPatientsNotScheduledListComponent;
}(_custom_patient_questionaire_my_patients_not_scheduled_list_my_patients_not_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__["MyPatientsNotScheduledListHandler"]));



/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL215LXBhdGllbnRzLXNjaGVkdWxlZC1saXN0L215LXBhdGllbnRzLXNjaGVkdWxlZC1saXN0LW1vYmlsZS12aWV3L215LXBhdGllbnRzLXNjaGVkdWxlZC1saXN0LW1vYmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: MyPatientsScheduledListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsScheduledListMobileViewComponent", function() { return MyPatientsScheduledListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyPatientsScheduledListMobileViewComponent = /** @class */ (function () {
    function MyPatientsScheduledListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'MyPatientsScheduledListMobileViewComponent';
    }
    MyPatientsScheduledListMobileViewComponent.prototype.ngOnInit = function () {
    };
    MyPatientsScheduledListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-patients-scheduled-list-mobile-view',
            template: __webpack_require__(/*! ./my-patients-scheduled-list-mobile-view.component.html */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./my-patients-scheduled-list-mobile-view.component.scss */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyPatientsScheduledListMobileViewComponent);
    return MyPatientsScheduledListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <!-- <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button> -->\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL215LXBhdGllbnRzLXNjaGVkdWxlZC1saXN0L215LXBhdGllbnRzLXNjaGVkdWxlZC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MyPatientsScheduledListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPatientsScheduledListComponent", function() { return MyPatientsScheduledListComponent; });
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
/* harmony import */ var _custom_patient_questionaire_my_patients_scheduled_list_my_patients_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.handler */ "./src/app/custom/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.handler.ts");
/* harmony import */ var _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../patient-questionaire.service */ "./src/app/patient-questionaire/patient-questionaire.service.ts");
/* harmony import */ var _my_patients_scheduled_list_mobile_view_my_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.ts");














var MyPatientsScheduledListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyPatientsScheduledListComponent, _super);
    function MyPatientsScheduledListComponent(util, patientQuestionaireService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.patientQuestionaireService = patientQuestionaireService;
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
        _this.pageName = 'MY_PATIENTS_SCHEDULED_LIST';
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
    MyPatientsScheduledListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    MyPatientsScheduledListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    MyPatientsScheduledListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    MyPatientsScheduledListComponent.prototype.getDetailFormConfig = function () {
    };
    MyPatientsScheduledListComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _my_patients_scheduled_list_mobile_view_my_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["MyPatientsScheduledListMobileViewComponent"],
            mobileContent: this.mobileContent.bind(this),
            uniqueIdField: 'patientEmail',
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
                    data: 'dateOfBirth',
                    name: 'date_of_birth',
                    title: 'DATE_OF_BIRTH',
                    type: 'string',
                    render: function (data, type, row, meta) {
                        return _this.util.formatDate(data, 'DD-MMM-YYYY');
                    }
                },
                {
                    data: 'riskLevel',
                    name: 'risk_level',
                    title: 'RISK_LEVEL',
                    type: 'string',
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
            rowMenuOptions: [
                { label: 'NEEDS_CONSULTATION', action: 'needs_consultation', icon: 'fa-flag', iconFont: 'font_awesome' },
            ],
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
            gridConfig.data = this.patientQuestionaireService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_MyPatientsScheduled.url;
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
    MyPatientsScheduledListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    MyPatientsScheduledListComponent.prototype.getSelectedRows = function () {
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
    MyPatientsScheduledListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    MyPatientsScheduledListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    MyPatientsScheduledListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    MyPatientsScheduledListComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    MyPatientsScheduledListComponent.prototype.loadActionBar = function () {
        var actionBarconf = {
            buttons: {
                primary: [],
                secondary: [
                    [{
                            label: !_app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile ? 'REFRESH' : '',
                            action: 'refresh',
                            icon: 'fa-refresh',
                            iconFont: 'font_awesome',
                            show: true,
                            name: 'refresh'
                        }],
                    // Default buttons ends
                    // Form buttons in the list page
                    [{
                            label: 'NEEDS_CONSULTATION',
                            action: 'needs_consultation',
                            show: true,
                            permission: false,
                            enableIfRecordsSelected: true,
                            name: 'needs_consultation',
                            icon: '',
                        }]
                ]
            }
        };
        if (!this.isMobile) {
            actionBarconf.buttons.secondary.shift();
        }
        actionBarconf = this.extendedActionbarConfig(actionBarconf);
        return actionBarconf;
    };
    MyPatientsScheduledListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    MyPatientsScheduledListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    MyPatientsScheduledListComponent.prototype.actionBarAction = function (btn) {
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
        else if (btn.action === 'needs_consultation') {
            var selectedRowIds = this.getSelectedRows();
            if (!this.customActionHandler(btn)) {
                this.onNeedsConsultationAction(selectedRowIds, btn, 'action_bar');
            }
        }
    };
    MyPatientsScheduledListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
        if (option.action === 'needs_consultation') {
            this.onNeedsConsultationAction(thisRow, option, 'row_menu_click');
        }
    };
    MyPatientsScheduledListComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
    };
    MyPatientsScheduledListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    MyPatientsScheduledListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    MyPatientsScheduledListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
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
                var deleteSubscription = _this.patientQuestionaireService.deletePatientQuestionaire(params);
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
    MyPatientsScheduledListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.patientQuestionaireService.updatePatientQuestionaire(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    MyPatientsScheduledListComponent.prototype.onNeedsConsultationAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var NeedsConsultationSubscriber = this.patientQuestionaireService.myPatientsScheduledRowNeedsConsultation(params);
        NeedsConsultationSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(NeedsConsultationSubscriber);
    };
    MyPatientsScheduledListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    MyPatientsScheduledListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    MyPatientsScheduledListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    MyPatientsScheduledListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_MyPatientsScheduled.url,
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
    MyPatientsScheduledListComponent.prototype.toggleKanbanView = function (type) {
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
    ], MyPatientsScheduledListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MyPatientsScheduledListComponent.prototype, "onGlobalClick", null);
    MyPatientsScheduledListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-patients-scheduled-list',
            template: __webpack_require__(/*! ./my-patients-scheduled-list.component.html */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.html"),
            styles: [__webpack_require__(/*! ./my-patients-scheduled-list.component.scss */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__["PatientQuestionaireService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], MyPatientsScheduledListComponent);
    return MyPatientsScheduledListComponent;
}(_custom_patient_questionaire_my_patients_scheduled_list_my_patients_scheduled_list_handler__WEBPACK_IMPORTED_MODULE_11__["MyPatientsScheduledListHandler"]));



/***/ }),

/***/ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-yet-assigned-list-mobile-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL25vdC15ZXQtYXNzaWduZWQvbm90LXlldC1hc3NpZ25lZC1saXN0LW1vYmlsZS12aWV3L25vdC15ZXQtYXNzaWduZWQtbGlzdC1tb2JpbGUtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: NotYetAssignedListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotYetAssignedListMobileViewComponent", function() { return NotYetAssignedListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotYetAssignedListMobileViewComponent = /** @class */ (function () {
    function NotYetAssignedListMobileViewComponent() {
    }
    NotYetAssignedListMobileViewComponent.prototype.ngOnInit = function () {
    };
    NotYetAssignedListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-yet-assigned-list-mobile-view',
            template: __webpack_require__(/*! ./not-yet-assigned-list-mobile-view.component.html */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./not-yet-assigned-list-mobile-view.component.scss */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotYetAssignedListMobileViewComponent);
    return NotYetAssignedListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button>\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL25vdC15ZXQtYXNzaWduZWQvbm90LXlldC1hc3NpZ25lZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NotYetAssignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotYetAssignedComponent", function() { return NotYetAssignedComponent; });
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
/* harmony import */ var _not_yet_assigned_list_mobile_view_not_yet_assigned_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.ts");
/* harmony import */ var _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../patient-questionaire.service */ "./src/app/patient-questionaire/patient-questionaire.service.ts");













var NotYetAssignedComponent = /** @class */ (function () {
    function NotYetAssignedComponent(util, patientQuestionaireService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        this.util = util;
        this.patientQuestionaireService = patientQuestionaireService;
        this._http = _http;
        this.route = route;
        this.acRoute = acRoute;
        this.location = location;
        this.appGlobal = appGlobal;
        this.element = element;
        this.modalPopupService = modalPopupService;
        this.gridConfig = {};
        this.actionBarconf = [];
        this.subscriptions = [];
        this.pageName = 'NOT_YET_ASSIGNED_LIST';
        this.enableBtnsIfRecordSelected = [];
        this.lane = [];
        this.kanbanData = [];
        this.kanbanFields = [];
        this.kanbanOptions = {};
        this.showKanban = false;
        this.showGrid = true;
        this.showAdditionalListButtons = false;
        this.extendedPageConfig = {};
        this.gridComponent = _widget_vs_grid_vs_grid_component__WEBPACK_IMPORTED_MODULE_4__["VsGridComponent"];
        // super(util);
    }
    NotYetAssignedComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    NotYetAssignedComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
    };
    NotYetAssignedComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    NotYetAssignedComponent.prototype.getDetailFormConfig = function () {
    };
    NotYetAssignedComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _not_yet_assigned_list_mobile_view_not_yet_assigned_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_11__["NotYetAssignedListMobileViewComponent"],
            //mobileContent: this.mobileContent.bind(this),
            uniqueIdField: 'patientEmail',
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
                    data: 'dateOfBirth',
                    name: 'date_of_birth',
                    title: 'DATE_OF_BIRTH',
                    type: 'string',
                    render: function (data, type, row, meta) {
                        return _this.util.formatDate(data, 'dd-MMM-yyyy');
                    }
                },
                {
                    data: 'riskLevel',
                    name: 'risk_level',
                    title: 'RISK_LEVEL',
                    type: 'string',
                },
            ],
            disableSelection: false,
            onRowSelect: function (selectedRows, id) {
                _this.updateBtnPermission(selectedRows);
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
            rowMenuOptions: [
                { label: 'NEEDS_CONSULTATION', action: 'needs_consultation', icon: 'fa-flag', iconFont: 'font_awesome' },
            ],
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
            gridConfig.data = this.patientQuestionaireService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_NotYetAssigned.url;
        }
        if (this.isMobile) {
            var isStatusField = gridConfig.columns.filter(function (col) { return col.data === 'status'; });
            if (isStatusField.length) {
                var status_1 = gridConfig.columns.splice(gridConfig.columns.indexOf(isStatusField[0]), 1);
                gridConfig.columns.splice(1, 0, isStatusField[0]);
            }
        }
        //const extendedConfig: any = this.extendedGridConfig(gridConfig);
        return gridConfig;
    };
    NotYetAssignedComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        //return this.beforeRowMenuOptionShow(option, data, row);
    };
    NotYetAssignedComponent.prototype.getSelectedRows = function () {
        var e_1, _a;
        var selectedRowIds = [];
        var rows = this.dtTable.rows('.selected').data();
        var uniqueIdField = this.gridConfig.uniqueIdField ? this.gridConfig.uniqueIdField : 'sId';
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
    NotYetAssignedComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    NotYetAssignedComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    NotYetAssignedComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        // searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    NotYetAssignedComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    NotYetAssignedComponent.prototype.loadActionBar = function () {
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
                    // Default buttons ends
                    // Form buttons in the list page
                    [{
                            label: 'NEEDS_CONSULTATION',
                            action: 'needs_consultation',
                            show: true,
                            name: 'needs_consultation',
                            icon: '',
                        }]
                ]
            }
        };
        if (!this.isMobile) {
            actionBarconf.buttons.secondary.shift();
        }
        //actionBarconf = this.extendedActionbarConfig(actionBarconf);
        return actionBarconf;
    };
    NotYetAssignedComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    NotYetAssignedComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    NotYetAssignedComponent.prototype.actionBarAction = function (btn) {
        this.showAdditionalListButtons = false;
        // this.onBeforeButtonAction(btn);
        if (btn.action === 'back') {
            // this.onBeforeBackAction();
            this.location.back();
            // this.onAfterBackAction();
        }
        else if (btn.action === 'refresh') {
            if (this.refreshGrid) {
                this.refreshGrid(btn);
            }
        }
        else if (btn.action === 'create') {
            //this.onBeforeCreateAction(btn);
            this.onCreateAction(btn);
            // this.onAfterCreateAction(btn);
        }
        else if (btn.action === 'delete') {
            var selectedRowIds = this.getSelectedRows();
            // this.onBeforeDeleteAction(selectedRowIds, btn, 'action_bar');
            this.onDeleteAction(selectedRowIds, btn, 'action_bar');
            // this.onAfterDeleteAction(selectedRowIds, btn, 'action_bar');
        }
        else if (btn.action === 'needs_consultation') {
            var selectedRowIds = this.getSelectedRows();
            // if (!this.customActionHandler(btn)) {
            this.onNeedsConsultationAction(selectedRowIds, btn, 'action_bar');
            //}
        }
    };
    NotYetAssignedComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
        if (option.action === 'needs_consultation') {
            this.onNeedsConsultationAction(thisRow, option, 'row_menu_click');
        }
    };
    NotYetAssignedComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
    };
    NotYetAssignedComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    NotYetAssignedComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    NotYetAssignedComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to delete the selected record(s)?',
            prop: null,
            buttons: null,
            methods: null
        };
        //co = this.customConfirmConfig(co, config);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                if (!source) {
                    source = 'action_bar';
                }
                var params = {
                    ids: selectedRowIds
                };
                var deleteSubscription = _this.patientQuestionaireService.deletePatientQuestionaire(params);
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
    NotYetAssignedComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.patientQuestionaireService.updatePatientQuestionaire(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    NotYetAssignedComponent.prototype.onNeedsConsultationAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var NeedsConsultationSubscriber = this.patientQuestionaireService.myPatientsScheduledRowNeedsConsultation(params);
        NeedsConsultationSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(NeedsConsultationSubscriber);
    };
    NotYetAssignedComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            //  this.onAfterButtonAction(config, res);
        }
        else {
            // this.onAfterRowMenuAction(config, res);
        }
    };
    NotYetAssignedComponent.prototype.ngOnDestory = function () {
        //this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    NotYetAssignedComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        // kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    NotYetAssignedComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_MyPatientsScheduled.url,
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
    NotYetAssignedComponent.prototype.toggleKanbanView = function (type) {
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
    ], NotYetAssignedComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NotYetAssignedComponent.prototype, "onGlobalClick", null);
    NotYetAssignedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-yet-assigned',
            template: __webpack_require__(/*! ./not-yet-assigned.component.html */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.html"),
            styles: [__webpack_require__(/*! ./not-yet-assigned.component.scss */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__["PatientQuestionaireService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], NotYetAssignedComponent);
    return NotYetAssignedComponent;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container detailcontainer\">\r\n\t<div class=\"page-header-part\">\r\n\t\t<div class=\"detail-page-header\">\r\n\t\t\t<span class=\"detail-page-header-label\">{{pagename | translate}}</span>\r\n\t\t\t<div class=\"detail-page-captionbar float-right\" *ngIf=\"!isMobile\">\r\n\t\t\t\t<app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t\t\t\t\t(callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"float-right\">\r\n\t\t\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"workflowActionBarconf\"\r\n\t\t\t\t\t(onBtnClick)=\"buttonAction($event)\" (initComplete)=\"workflowActionBarInitComplete($event)\">\r\n\t\t\t\t</app-vs-actionbar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"detail-page-actionbar\">\r\n\t\t\t<app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)=\"buttonAction($event)\"\r\n\t\t\t\t(initComplete)=\"actionBarInitComplete($event)\"></app-vs-actionbar>\r\n\t\t</div>\r\n\t\t<div class=\"detail-page-captionbar\" *ngIf=\"isMobile\">\r\n\t\t\t<app-vs-captionbar [captionbarConfig]=\"captionbarconf\" (clickAction)=\"captionbarAction($event)\"\r\n\t\t\t\t(callback)=\"captionBarInitComplete($event)\"></app-vs-captionbar>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"detail-page-content \">\r\n\t\t<div class=\"detail-page-form patient-details-form\">\r\n\t\t\t<app-vs-form [formConfig]=\"formConfig\" [formData]=\"data\" [formModalChange]=\"dataChanged\"></app-vs-form>\r\n\t\t</div>\r\n\t</div>\r\n\t<ng-template #highalert>\r\n\t<div class=\"high-alert m-2 p-2\">\r\n    <div class=\"modal-title\">Based on your risk assessment, it looks like you are in the high risk group. We will connect you to a physician shortly. In the meantime, we recommend you to follow these steps to ensure your safety.</div>\r\n    <div class=\"modal-body\">\r\n\t\t<ul class='high-risk-info'>\r\n          <li>\r\n          Avoid leaving your house during this time and interacting with others unless its absolutely necessary\r\n          </li>\r\n          <li>\r\n          Always wear mask and gloves while shopping for essential supplies\r\n          </li>\r\n          <li>\r\n          Wash your hands thoroughly (for about 20 seconds) frequently\r\n          </li>\r\n        </ul>\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t<button (click)=\"cancelModal()\" class=\"btn btn-primary pge-primary\">OK</button>\r\n\t</div>\r\n\t</div>\r\n\t</ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----------------------------------------Bootstrap Variables-----------------------------------------------------*/\n.high-alert {\n  background-color: #f5f3f3;\n  font-size: 12px; }\n.high-alert .modal-body {\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 0; }\n.high-alert .modal-body ul {\n      -webkit-padding-start: unset;\n              padding-inline-start: unset; }\n.high-alert .modal-body ul li {\n        list-style-type: none;\n        background-color: #fff;\n        padding: 10px;\n        border-bottom: 1px solid #f5f3f3; }\n.high-alert .modal-footer {\n    padding-bottom: 0;\n    padding-top: 6px; }\n@media (max-width: 575.98px) {\n  .modal-high-alert {\n    width: 90%; }\n  .high-alert {\n    background-color: #f5f3f3;\n    font-size: 12px; }\n    .high-alert .modal-body {\n      padding-left: 0;\n      padding-right: 0; }\n      .high-alert .modal-body ul {\n        -webkit-padding-start: unset;\n                padding-inline-start: unset; }\n        .high-alert .modal-body ul li {\n          list-style-type: none;\n          background-color: #fff;\n          padding: 10px;\n          border-bottom: 1px solid #f5f3f3; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1xdWVzdGlvbmFpcmUvcGF0aWVudC1kZXRhaWxzLWRldGFpbC9EOlxcUFJPSkVDVFNfRk9MREVSXFxFVkFcXGNvcm9uYWdvZnJvbnRlbmRfbGF0ZXN0L3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYXRpZW50LXF1ZXN0aW9uYWlyZS9wYXRpZW50LWRldGFpbHMtZGV0YWlsL0Q6XFxQUk9KRUNUU19GT0xERVJcXEVWQVxcY29yb25hZ29mcm9udGVuZF9sYXRlc3Qvc3JjXFxhcHBcXHBhdGllbnQtcXVlc3Rpb25haXJlXFxwYXRpZW50LWRldGFpbHMtZGV0YWlsXFxwYXRpZW50LWRldGFpbHMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXRpZW50LXF1ZXN0aW9uYWlyZS9wYXRpZW50LWRldGFpbHMtZGV0YWlsL0Q6XFxQUk9KRUNUU19GT0xERVJcXEVWQVxcY29yb25hZ29mcm9udGVuZF9sYXRlc3Qvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUhBQUE7QUNHQTtFQUNFLHlCQUFvQztFQUNwQyxlQUFlLEVBQUE7QUFGakI7SUFJSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0FBTnJCO01BUU0sNEJBQTJCO2NBQTNCLDJCQUEyQixFQUFBO0FBUmpDO1FBVVEscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZ0NBQTJDLEVBQUE7QUFibkQ7SUFrQkksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0FDbURoQjtFRC9DRjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UseUJBQW9DO0lBQ3BDLGVBQWUsRUFBQTtJQUZqQjtNQUlJLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtNQUxwQjtRQU9NLDRCQUEyQjtnQkFBM0IsMkJBQTJCLEVBQUE7UUFQakM7VUFTUSxxQkFBcUI7VUFDckIsc0JBQXNCO1VBQ3RCLGFBQWE7VUFDYixnQ0FBMkMsRUFBQSxFQUM1QyIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL3BhdGllbnQtZGV0YWlscy1kZXRhaWwvcGF0aWVudC1kZXRhaWxzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBWYXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vL0ZvbnRzXHJcbiRmb250LWZhbWlseS1iYXNlOiBcIm1vbnRzZXJyYXRcIjtcclxuJHRvcC1iYXItYmFja2dyb3VuZC1jb2xvcjogIzAyNjZiZDtcclxuJHNlbGVjdGVkLXRhYi1saW5lLWNvbG9yOiAjMzg1NDVmO1xyXG4kYnV0dG9uLWhvdmVyLWNvbG9yOiAjMmM1YjVmO1xyXG4kc3Bpbm5lci1jb2xvcjogIzM4NTQ1ZjtcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG4kcGFnZS1jb250YWluZXItY29sb3I6ICNmZmZmZmY7XHJcbiRtb2JpbGUtcHJpbWFyeS1idG4tY29sb3I6ICNmZjhiOGI7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbikgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuL21peGluc1wiO1xyXG5AaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcclxuLmhpZ2gtYWxlcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0MywgMjQzKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgdWwge1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdW5zZXQ7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjQ1LCAyNDMsIDI0Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgfVxyXG59XHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xyXG4gIC5tb2RhbC1oaWdoLWFsZXJ0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5oaWdoLWFsZXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0MywgMjQzKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHVuc2V0O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNDUsIDI0MywgMjQzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PatientDetailsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailsDetailComponent", function() { return PatientDetailsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _patient_information_patient_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../patient-information/patient-information.service */ "./src/app/patient-information/patient-information.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_widget_vs_form_vs_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/widget/vs-form/vs-form.component */ "./src/app/widget/vs-form/vs-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_widget_services_upload_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/widget/services/upload-attachment.service */ "./src/app/widget/services/upload-attachment.service.ts");
/* harmony import */ var _app_core_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/util.service */ "./src/app/core/util.service.ts");
/* harmony import */ var _app_core_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/base.service */ "./src/app/core/base.service.ts");
/* harmony import */ var _app_app_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/app-global.service */ "./src/app/app-global.service.ts");
/* harmony import */ var _app_api_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/api-constants */ "./src/app/api-constants.ts");
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/app-constants */ "./src/app/app-constants.ts");
/* harmony import */ var angular_expressions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-expressions */ "./node_modules/angular-expressions/lib/main.js");
/* harmony import */ var angular_expressions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_expressions__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app_security_patient_questionaire_patient_details_detail_patient_details_detail_security__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/security/patient-questionaire/patient-details-detail/patient-details-detail.security */ "./src/app/security/patient-questionaire/patient-details-detail/patient-details-detail.security.js");
/* harmony import */ var _app_custom_patient_questionaire_patient_details_detail_patient_details_detail_handler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/custom/patient-questionaire/patient-details-detail/patient-details-detail.handler */ "./src/app/custom/patient-questionaire/patient-details-detail/patient-details-detail.handler.ts");
/* harmony import */ var _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../patient-questionaire.service */ "./src/app/patient-questionaire/patient-questionaire.service.ts");
/* harmony import */ var _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/shared/services/modal-popup.service */ "./src/app/shared/services/modal-popup.service.ts");
/* harmony import */ var _app_custom_custom_tab_custom_tab_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/custom/custom-tab/custom-tab.service */ "./src/app/custom/custom-tab/custom-tab.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");






















var PatientDetailsDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientDetailsDetailComponent, _super);
    function PatientDetailsDetailComponent(location, http, route, router, uploadService, utilService, baseService, appGlobalService, patientQuestionaireService, modalPopupService, tabChangeService, patientInformationService, modalService, notify, util) {
        var _this = _super.call(this, appGlobalService) || this;
        _this.location = location;
        _this.http = http;
        _this.route = route;
        _this.router = router;
        _this.uploadService = uploadService;
        _this.utilService = utilService;
        _this.baseService = baseService;
        _this.appGlobalService = appGlobalService;
        _this.patientQuestionaireService = patientQuestionaireService;
        _this.modalPopupService = modalPopupService;
        _this.tabChangeService = tabChangeService;
        _this.patientInformationService = patientInformationService;
        _this.modalService = modalService;
        _this.notify = notify;
        _this.util = util;
        _this.data = {};
        _this.captionElement = {};
        _this.fileFields = [];
        _this.local = {};
        _this.subscriptions = [];
        _this.self = _this;
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
            _this.actionbarMap = data;
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
            else if (btn.action === 'calculate_risk_score') {
                if (!_this.customActionHandler(btn)) {
                    _this.onCalculateRiskScoreAction(btn);
                }
            }
            else if (btn.action === 'needs_consultation') {
                if (!_this.customActionHandler(btn)) {
                    _this.onNeedsConsultationAction(btn);
                }
            }
            else if (btn.action === 'consultation_not_required') {
                if (!_this.customActionHandler(btn)) {
                    _this.onConsultationNotRequiredAction(btn);
                }
            }
            else if (btn.action === 'schedule_consultation') {
                if (!_this.customActionHandler(btn)) {
                    _this.onScheduleConsultationAction(btn);
                }
            }
            else if (btn.action === 'prescribe_test') {
                if (!_this.customActionHandler(btn)) {
                    _this.onPrescribeTestAction(btn);
                }
            }
            else if (btn.action === 'do_weekly_monitoring') {
                if (!_this.customActionHandler(btn)) {
                    _this.onDoWeeklyMonitoringAction(btn);
                }
            }
            else if (btn.action === 'download_report') {
                if (!_this.customActionHandler(btn)) {
                    _this.onDownloadReportAction(btn);
                }
            }
        };
        return _this;
    }
    /**
     * action bar configuration settings.
     */
    PatientDetailsDetailComponent.prototype.actionBarConfiguration = function () {
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
                            label: 'Submit',
                            action: 'save',
                            show: true,
                            name: 'save'
                        }, {
                            label: 'Cancel',
                            action: 'cancel',
                            show: true,
                            name: 'cancel'
                        }]
                ],
                secondary: [
                    [{
                            label: 'Needs Consultation',
                            action: 'needs_consultation',
                            show: true,
                            name: 'needs_consultation',
                            icon: '',
                        }, {
                            label: 'Not Required',
                            action: 'consultation_not_required',
                            show: true,
                            name: 'consultation_not_required',
                            icon: '',
                        }],
                    [{
                            label: 'Schedule Consultation',
                            action: 'schedule_consultation',
                            show: true,
                            name: 'schedule_consultation',
                            icon: '',
                        }],
                    [{
                            label: 'Prescribe Test',
                            action: 'prescribe_test',
                            show: true,
                            name: 'prescribe_test',
                            icon: '',
                        }, {
                            label: 'Do Weekly Monitoring',
                            action: 'do_weekly_monitoring',
                            show: true,
                            name: 'do_weekly_monitoring',
                            icon: '',
                        }],
                    [{
                            label: 'Download Report',
                            action: 'download_report',
                            show: true,
                            name: 'download_report',
                            icon: '',
                        }]
                ]
            }
        };
        actionBarconf = this.updateActionBarConfig(actionBarconf, 'init');
        return actionBarconf;
    };
    /**
     * workflow action bar configuration settings.
     */
    PatientDetailsDetailComponent.prototype.workflowActionBarConfiguration = function () {
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
    PatientDetailsDetailComponent.prototype.captionbarConfiguration = function () {
        var captionbarconf = {
            modules: [],
            moduleclass: 'pull-left horz-padding',
            detailclass: 'iar-caption-detail pull-right',
            details: [{
                    header: 'Patient Name',
                    contentClass: '',
                    content: '',
                    headerClass: '',
                    name: 'patientName'
                }, {
                    header: 'Age',
                    contentClass: '',
                    content: '',
                    headerClass: '',
                    name: 'age'
                }, {
                    header: 'Blood group',
                    contentClass: '',
                    content: '',
                    headerClass: '',
                    name: 'bloodGroup'
                }, {
                    header: 'Risk Level',
                    contentClass: '',
                    content: '',
                    headerClass: '',
                    name: 'riskLevel'
                }, {
                    header: 'Status',
                    contentClass: '',
                    content: '',
                    headerClass: '',
                    name: 'status'
                }],
            currentModule: ' '
        };
        captionbarconf = this.updateCaptionConfig(captionbarconf, 'init');
        return captionbarconf;
    };
    PatientDetailsDetailComponent.prototype.goBack = function () {
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
    PatientDetailsDetailComponent.prototype.navigateToDetail = function (id, page) {
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
    PatientDetailsDetailComponent.prototype.getFormConfig = function (securityJson) {
        var _this = this;
        this.local.formConfig = {};
        this.local.formConfig.fever = {
            security_code: 'fever',
            label: 'Fever',
            type: 'radio',
            name: 'fever',
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
                required: true
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
            disabled: true,
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
        this.local.formConfig.cough = {
            security_code: 'cough',
            label: 'Cough',
            type: 'radio',
            name: 'cough',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.soreThroat = {
            security_code: 'soreThroat',
            label: 'Sore throat',
            type: 'radio',
            name: 'soreThroat',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.runnyNose = {
            security_code: 'runnyNose',
            label: 'Runny nose',
            type: 'radio',
            name: 'runnyNose',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.difficultyInBreathing = {
            security_code: 'difficultyInBreathing',
            label: 'Difficulty in breathing',
            type: 'radio',
            name: 'difficultyInBreathing',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.muscleAches = {
            security_code: 'muscleAches',
            label: 'Muscle Aches',
            type: 'radio',
            name: 'muscleAches',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.diarrhea = {
            security_code: 'diarrhea',
            label: 'Diarrhea',
            type: 'radio',
            name: 'diarrhea',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.coughWithMucus = {
            security_code: 'coughWithMucus',
            label: 'Cough with Mucus',
            type: 'radio',
            name: 'coughWithMucus',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.coughtWithMucusDuration = {
            security_code: 'coughtWithMucusDuration',
            label: 'Cough With Mucus Duration',
            type: 'select',
            name: 'coughtWithMucusDuration',
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
                mandatoryCondition: 'coughWithMucus == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.fatigue = {
            security_code: 'fatigue',
            label: 'Fatigue',
            type: 'radio',
            name: 'fatigue',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.fatigueDuration = {
            security_code: 'fatigueDuration',
            label: 'Fatigue Duration',
            type: 'select',
            name: 'fatigueDuration',
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
                mandatoryCondition: 'fatigue == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.headAche = {
            security_code: 'headAche',
            label: 'Headache',
            type: 'radio',
            name: 'headAche',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.headAcheDuration = {
            security_code: 'headAcheDuration',
            label: 'Headache Duration',
            type: 'select',
            name: 'headAcheDuration',
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
                mandatoryCondition: 'headAche == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.chills = {
            security_code: 'chills',
            label: 'Chills',
            type: 'radio',
            name: 'chills',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.chillsDuration = {
            security_code: 'chillsDuration',
            label: 'Chills Duration',
            type: 'select',
            name: 'chillsDuration',
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
                mandatoryCondition: 'chills == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.nausea = {
            security_code: 'nausea',
            label: 'Nausea',
            type: 'radio',
            name: 'nausea',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.nauseaDuration = {
            security_code: 'nauseaDuration',
            label: 'Nausea Duration',
            type: 'select',
            name: 'nauseaDuration',
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
                mandatoryCondition: 'nausea == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.nasalCongestion = {
            security_code: 'nasalCongestion',
            label: 'Nasal Congestion',
            type: 'radio',
            name: 'nasalCongestion',
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
                required: true
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.nasalCongestionDuration = {
            security_code: 'nasalCongestionDuration',
            label: 'Nasal Congestion Duration',
            type: 'select',
            name: 'nasalCongestionDuration',
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
                mandatoryCondition: 'nasalCongestion == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.feverDuration = {
            security_code: 'feverDuration',
            label: 'Fever Duration',
            type: 'select',
            name: 'feverDuration',
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
                mandatoryCondition: 'fever == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.coughDuration = {
            security_code: 'coughDuration',
            label: 'Cough Duration',
            type: 'select',
            name: 'coughDuration',
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
                mandatoryCondition: 'cough == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.soreThroatDuration = {
            security_code: 'soreThroatDuration',
            label: 'Sore throat Duration',
            type: 'select',
            name: 'soreThroatDuration',
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
                mandatoryCondition: 'soreThroat == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.runnyNoseDuration = {
            security_code: 'runnyNoseDuration',
            label: 'Runny nose Duration',
            type: 'select',
            name: 'runnyNoseDuration',
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
                mandatoryCondition: 'runnyNose == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.dibDuration = {
            security_code: 'dibDuration',
            label: 'DIB Duration',
            type: 'select',
            name: 'dibDuration',
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
                mandatoryCondition: 'difficultyInBreathing == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.muscleAchesDuration = {
            security_code: 'muscleAchesDuration',
            label: 'Muscle Aches Duration',
            type: 'select',
            name: 'muscleAchesDuration',
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
                mandatoryCondition: 'muscleAches == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.diarrheaDuration = {
            security_code: 'diarrheaDuration',
            label: 'Diarrhea Duration',
            type: 'select',
            name: 'diarrheaDuration',
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
                mandatoryCondition: 'diarrhea == true'
            },
            formAttributes: {
                change: this.handleCustomEvents,
                focus: this.handleCustomEvents,
                blur: this.handleCustomEvents
            },
        };
        this.local.formConfig.questionaireHistory = {
            type: 'childList',
            name: 'questionairehistory',
            label: 'Questionaire History',
            security_code: 'questionairehistory',
            actionBarconf: {
                buttons: {
                    primary: [],
                    secondary: []
                }
            },
            actionBarInitComplete: this.actionBarInitComplete.bind(this),
            actionBarAction: this.buttonAction.bind(this),
            gridConfig: {
                ordering: false,
                customOrdering: false,
                disableSelection: true,
                columns: [
                    {
                        data: 'createdDate',
                        name: 'createdDate',
                        title: 'CREATED_DATE',
                        type: 'datetime',
                        render: function (data, type, row, meta) {
                            return _this.util.formatDate(data, 'DD-MMM-YYYY HH:mm:ss');
                        }
                    },
                    {
                        data: 'riskLevel',
                        name: 'riskLevel',
                        title: 'RISK_LEVEL',
                        type: 'string',
                    }
                ],
                // tslint:disable-next-line: max-line-length
                ajaxUrl: '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_11__["ApiConstants"].getPatientAssessmentHistory.url + '/' + this.id,
                data: this.patientQuestionaireService.getPrototypingData([
                    {
                        data: 'createdDate',
                        name: 'createdDate',
                        title: 'CREATED_DATE',
                        type: 'datetime',
                    },
                    {
                        data: 'riskLevel',
                        name: 'riskLevel',
                        title: 'RISK_LEVEL',
                        type: 'string',
                    }
                ]),
                onRowClick: function (event, id) {
                },
                onInitComplete: function (dtTable, settings, json) {
                },
                complexHeader: []
            }
        };
        this.local.formConfig.questionaire = {
            groupHeaderClass: 'hidden',
            groupContentClass: '',
            collapsible: false,
            columns: '100',
            label: 'questionaire',
            name: 'questionaire',
            items: [
                {
                    groupHeaderClass: 'form-group-subheader hidden',
                    groupContentClass: 'paddingZero',
                    collapsible: false,
                    columns: '100',
                    label: '',
                    name: '',
                    items: [
                        {
                            groupHeaderClass: 'form-group-subheader',
                            groupContentClass: 'paddingZero',
                            collapsible: false,
                            columns: '50',
                            label: 'Symptoms',
                            name: 'Symptoms',
                            items: [
                                {
                                    groupHeaderClass: 'form-group-subheader hidden',
                                    groupContentClass: 'paddingZero',
                                    collapsible: false,
                                    columns: '100',
                                    label: '',
                                    name: '',
                                    items: [
                                        {
                                            groupHeaderClass: 'hidden hidden',
                                            groupContentClass: 'paddingZero',
                                            collapsible: false,
                                            columns: '50',
                                            label: '',
                                            name: '',
                                            items: [
                                                this.local.formConfig.fever,
                                                this.local.formConfig.feverDuration,
                                                this.local.formConfig.cough,
                                                this.local.formConfig.coughDuration,
                                                this.local.formConfig.coughWithMucus,
                                                this.local.formConfig.coughtWithMucusDuration,
                                                this.local.formConfig.soreThroat,
                                                this.local.formConfig.soreThroatDuration,
                                                this.local.formConfig.runnyNose,
                                                this.local.formConfig.runnyNoseDuration,
                                                this.local.formConfig.difficultyInBreathing,
                                                this.local.formConfig.dibDuration,
                                                this.local.formConfig.muscleAches,
                                                this.local.formConfig.muscleAchesDuration,
                                                this.local.formConfig.diarrhea,
                                                this.local.formConfig.diarrheaDuration,
                                                this.local.formConfig.fatigue,
                                                this.local.formConfig.fatigueDuration,
                                                this.local.formConfig.headAche,
                                                this.local.formConfig.headAcheDuration,
                                                this.local.formConfig.chills,
                                                this.local.formConfig.chillsDuration,
                                                this.local.formConfig.nausea,
                                                this.local.formConfig.nauseaDuration,
                                                this.local.formConfig.nasalCongestion,
                                                this.local.formConfig.nasalCongestionDuration
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    groupHeaderClass: 'hidden hidden',
                    groupContentClass: 'paddingZero',
                    collapsible: false,
                    columns: '100',
                    label: '',
                    name: '',
                    items: [
                        this.local.formConfig.questionaireHistory
                    ]
                }
            ]
        };
        this.local.formConfig.meetings = {
            type: 'childList',
            name: 'meetings',
            label: 'Consultation History',
            security_code: 'meetings',
            actionBarconf: {
                buttons: {
                    primary: [],
                    secondary: []
                }
            },
            actionBarInitComplete: this.actionBarInitComplete.bind(this),
            actionBarAction: this.buttonAction.bind(this),
            gridConfig: {
                ordering: false,
                customOrdering: false,
                disableSelection: true,
                columns: [
                    {
                        data: 'patientName',
                        name: 'patient_name',
                        title: 'PATIENT_NAME',
                        type: 'string',
                    },
                    {
                        data: 'doctorName',
                        name: 'doctor_name',
                        title: 'DOCTOR_NAME',
                        type: 'string',
                    },
                    {
                        data: 'meetingStartTime',
                        name: 'meeting_start_time',
                        title: 'MEETING_START_TIME',
                        type: 'datetime',
                        render: function (data, type, row, meta) {
                            return _this.util.formatDate(data, 'DD-MMM-YYYY HH:mm:ss');
                        }
                    },
                    {
                        data: 'meetingEndTime',
                        name: 'meeting_end_time',
                        title: 'MEETING_END_TIME',
                        type: 'datetime',
                        render: function (data, type, row, meta) {
                            return _this.util.formatDate(data, 'DD-MMM-YYYY HH:mm:ss');
                        }
                    },
                    {
                        data: 'recordingInfo',
                        name: 'recording_info',
                        title: 'RECORDING_INFO',
                        type: 'string',
                        render: function (data, type, row, meta) {
                            // tslint:disable-next-line: max-line-length
                            return "<a href=\"/" + _app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppConstants"].apihost + "/attachments/download/attachment/" + data.id + "\" target=\"_blank\" download (click)=\"$event.preventDefault()\">Download</a>";
                        }
                    }
                ],
                // tslint:disable-next-line: max-line-length
                ajaxUrl: '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_11__["ApiConstants"].getPatientMeetingHistory.url + '/' + this.appGlobalService.get('patientInfo').patientEmail,
                data: this.patientQuestionaireService.getPrototypingData([
                    {
                        data: 'patientName',
                        name: 'patient_name',
                        title: 'PATIENT_NAME',
                        type: 'string',
                    },
                    {
                        data: 'doctorName',
                        name: 'doctor_name',
                        title: 'DOCTOR_NAME',
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
                        data: 'recordingInfo',
                        name: 'recording_info',
                        title: 'RECORDING_INFO',
                        type: 'string',
                        render: function (data, type, row, meta) {
                            return "<a href=\"/" + _app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppConstants"].apihost + "/attachments/download/attachment/" + data.id + "\" target=\"_blank\">" + data.fileName + "</a>";
                        }
                    }
                ]),
                onRowClick: function (event, id) {
                },
                onInitComplete: function (dtTable, settings, json) {
                },
                complexHeader: []
            }
        };
        this.local.formConfig.currentconsultation = {
            security_code: 'currentconsultation',
            label: 'CurrentConsultation',
            type: 'customelement',
            name: 'currentconsultation',
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
            component: 'currentconsultation'
        };
        this.local.formConfig.doctorconsultations = {
            groupHeaderClass: 'hidden',
            groupContentClass: '',
            collapsible: false,
            columns: '100',
            label: 'doctorconsultations',
            name: 'doctorconsultations',
            items: [
                {
                    groupHeaderClass: 'hidden hidden',
                    groupContentClass: 'paddingZero',
                    collapsible: false,
                    columns: '0',
                    label: '',
                    name: '',
                    items: [
                        this.local.formConfig.meetings,
                        this.local.formConfig.currentconsultation
                    ]
                }
            ]
        };
        this.local.formConfig.patientName = {
            security_code: 'patientName',
            label: 'Patient Name',
            type: 'text',
            name: 'patientName',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
        this.local.formConfig.age = {
            security_code: 'age',
            label: 'Age',
            type: 'number',
            name: 'age',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
            disabled: true,
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
        this.local.formConfig.address = {
            security_code: 'address',
            label: 'Address',
            type: 'textarea',
            name: 'address',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
        this.local.formConfig.city = {
            security_code: 'city',
            label: 'City',
            type: 'text',
            name: 'city',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
        this.local.formConfig.zipcode = {
            security_code: 'zipcode',
            label: 'Zipcode',
            type: 'number',
            name: 'zipcode',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
        this.local.formConfig.insuranceProvider = {
            security_code: 'insuranceProvider',
            label: 'Insurance Provider',
            type: 'text',
            name: 'insuranceProvider',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
        this.local.formConfig.subscriberNumber = {
            security_code: 'subscriberNumber',
            label: 'Subscriber Number',
            type: 'number',
            name: 'subscriberNumber',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
        this.local.formConfig.groupNumber = {
            security_code: 'groupNumber',
            label: 'Group Number',
            type: 'number',
            name: 'groupNumber',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
        this.local.formConfig.insuranceCoverage = {
            security_code: 'insuranceCoverage',
            label: 'Insurance Coverage',
            type: 'date',
            name: 'insuranceCoverage',
            placeholder: '',
            infoBubble: '',
            values: [],
            options: [],
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
        this.local.formConfig.patientInformation = {
            groupHeaderClass: 'hidden',
            groupContentClass: '',
            collapsible: false,
            columns: '100',
            label: 'patientinformation',
            name: 'patientinformation',
            items: [
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
        this.local.formConfig.tabgroupone = {
            type: 'tab',
            name: 'tabgroupone',
            label: 'tabgroupone',
            security_code: 'tabgroupone',
            activeId: this.getActivateId(),
            tabs: [
                {
                    groupHeaderClass: 'hidden',
                    groupContentClass: '',
                    collapsible: 'false',
                    columns: '100',
                    label: 'patientinformation',
                    name: 'patientinformation',
                    disabled: !this.isDoctor(),
                    items: [
                        this.local.formConfig.patientInformation
                    ]
                },
                {
                    groupHeaderClass: 'hidden',
                    groupContentClass: '',
                    collapsible: false,
                    columns: '100',
                    label: 'questionaire',
                    name: 'questionaire',
                    items: [
                        this.local.formConfig.questionaire
                    ]
                },
                {
                    groupHeaderClass: 'hidden',
                    groupContentClass: '',
                    collapsible: false,
                    columns: '100',
                    label: 'doctorconsultations',
                    name: 'doctorconsultations',
                    disabled: !this.isDoctor(),
                    items: [
                        /* this.local.formConfig.currentconsultation, */
                        this.local.formConfig.doctorconsultations
                    ]
                }
            ]
        };
        var config = {
            initCallback: this.PatientDetailsDetailFormInitComplete.bind(this),
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
                    collapsible: false,
                    columns: '0',
                    label: '',
                    disableRights: false,
                    columnsWidth: 12,
                    items: [
                        this.local.formConfig.tabgroupone
                    ]
                }
            ]
        };
        config = this.updateFormConfig(config, this.local.formConfig);
        return config;
    };
    PatientDetailsDetailComponent.prototype.getActivateId = function () {
        var isDr = this.isDoctor();
        return isDr ? 'patientinformation' : 'questionaire';
    };
    PatientDetailsDetailComponent.prototype.PatientDetailsDetailFormInitComplete = function (form) {
        this.customFormInitComplete(form);
    };
    PatientDetailsDetailComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    PatientDetailsDetailComponent.prototype.normalizeData = function (data) {
        data = this.updateFormdata(data);
        return data;
    };
    PatientDetailsDetailComponent.prototype.updateCaptionBarWithData = function (data) {
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
    PatientDetailsDetailComponent.prototype.responseDataManipulation = function (data, dontPatch) {
        if (!data) {
            this.child.form.reset();
            this.child.form.markAsUntouched();
            this.child.form.markAsPristine();
            return;
        }
        this.infolabel = angular_expressions__WEBPACK_IMPORTED_MODULE_13___default.a.compile('')(data);
        if (!this.route.snapshot.params.id && !this.id) {
            this.id = data.sid;
            this.location.replaceState(this.location.path() + 'id=' + data.sid);
        }
        var pagespec = '';
        if (this.pagename && data.projects) {
            pagespec = ' - Define Logic here please';
            this.pagename = this.pagename + pagespec;
        }
        this.backupData = data;
        if (!dontPatch) {
            this.child.form.patchValue(this.normalizeData(data));
        }
        if (!data.status) {
            data.status = 'Risk score to be calculated';
        }
        this.updateCaptionBarWithData(data);
        this.onAfterResponseData(data);
        this.hideBtnsOnStatus(data);
        // this.data = this.normalizeData(data); // Object.assign({}, this.normalizeData(data));
    };
    PatientDetailsDetailComponent.prototype.getData = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        ;
        var params = {
            sid: this.id
        };
        this.patientQuestionaireService.getPatientQuestionaireBySid(params).subscribe(function (response) {
            _this.child.form.patchValue(response);
            _this.responseDataManipulation(response);
            if (response) {
                _this.actionBarconf.buttons.primary[1][0].show = false;
                _this.actionBarconf.buttons.primary[1][1].show = false;
            }
            else {
                _this.actionBarconf.buttons.primary[1][0].show = true;
                _this.actionBarconf.buttons.primary[1][1].show = true;
            }
        });
    };
    PatientDetailsDetailComponent.prototype.getPatientData = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        var params = {
            sid: this.id
        };
        this.patientInformationService.getPatientInformationBySid(params).subscribe(function (response) {
            _this.appGlobalService.write('patientInfo', response);
            var responseData;
            if (_this.data) {
                responseData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data, { response: response });
            }
            else {
                responseData = response;
            }
            _this.responseDataManipulation(responseData);
        });
    };
    PatientDetailsDetailComponent.prototype.saveAddedFiles = function (splittedData) {
        var _this = this;
        this.uploadService.saveAddedFiles(splittedData, this.id, this.child.form).subscribe(function (res) {
            var fData = {};
            for (var key in res) {
                if (res[key] instanceof Array) {
                    fData[key] = lodash__WEBPACK_IMPORTED_MODULE_14__["compact"](lodash__WEBPACK_IMPORTED_MODULE_14__["uniq"](res[key].flat()));
                }
                else {
                    fData[key] = [res[key]];
                }
            }
            var finalData = { data: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, splittedData.data, fData) };
            _this.saveDataThenFiles('put', finalData, false);
        });
    };
    PatientDetailsDetailComponent.prototype.getPatientEmail = function () {
        return this.appGlobalService.get('patientInfo') && this.appGlobalService.get('patientInfo').patientEmail;
    };
    PatientDetailsDetailComponent.prototype.getCurrentUserEmail = function () {
        return this.appGlobalService.get('currentUser').email;
    };
    PatientDetailsDetailComponent.prototype.saveDataThenFiles = function (method, splittedData, saveFiles) {
        var _this = this;
        var service;
        var patientInfoService;
        service = this.patientQuestionaireService.createPatientQuestionaire(this.getQuestionaireData(splittedData.data));
        service.subscribe(function (resq) {
            if (saveFiles) {
                var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, splittedData.data, resq);
                splittedData.data = data;
                _this.child.form.markAsPristine();
                _this.saveAddedFiles(splittedData);
            }
            _this.hideActionBarAction(resq);
            _this.hideBtnsOnStatus(resq);
            _this.showAlertOnRisk(resq);
            var params = {
                sid: _this.id
            };
            _this.patientInformationService.getPatientInformationBySid(params).subscribe(function (pinfo) {
                var response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, pinfo, resq);
                _this.child.form.patchValue(response);
                _this.responseDataManipulation(response);
                _this.appGlobalService.write('patientInfo', pinfo);
                _this.hideBtnsOnStatus(response);
            });
        });
    };
    PatientDetailsDetailComponent.prototype.openModal = function () {
        var options = {
            'backdrop': 'static',
            'centered': true,
            windowClass: 'modal-high-alert'
        };
        this.dialog = this.modalService.open(this.highAlert, options);
    };
    PatientDetailsDetailComponent.prototype.cancelModal = function () {
        if (this.dialog) {
            this.dialog.dismiss();
            this.dialog = null;
        }
    };
    PatientDetailsDetailComponent.prototype.showAlertOnRisk = function (data) {
        if (data.risk_level == 'High') {
            this.openModal();
        }
    };
    PatientDetailsDetailComponent.prototype.getPatientInfoData = function (data) {
        var patientInfo = {
            patientName: data.patientName,
            patientEmail: data.patientEmail || this.getPatientEmail() || this.getCurrentUserEmail(),
            dateOfBirth: data.dateOfBirth,
            age: data.age,
            patientHid: data.patientHid,
            gender: data.gender,
            bloodGroup: data.bloodGroup,
            address: data.address,
            zipcode: data.zipcode,
            city: data.city,
            insuranceProvider: data.insuranceProvider,
            subscriberNumber: data.subscriberNumber,
            groupNumber: data.groupNumber,
            insuranceCoverage: data.insuranceCoverage,
            insuranceType: data.insuranceType,
            status: data.status,
            riskLevel: data.riskLevel,
            diabetes: data.diabetes,
            highBloodPressure: data.highBloodPressure,
            asthma: data.asthma,
            heartDisease: data.heartDisease,
            immunocompromised: data.immunocompromised,
            pregnant: data.pregnant,
            travelledRecently: data.travelledRecently,
            memberInHouseholdTravelledRecently: data.memberInHouseholdTravelledRecently,
            areYouAHealthcareWorker: data.areYouAHealthcareWorker,
            memberInHouseholdAHealthcareWorker: data.memberInHouseholdAHealthcareWorker,
            airportStaff: data.airportStaff,
            memberInHouseholdAAirportStaff: data.memberInHouseholdAAirportStaff,
            doYouWorkInCrowdedAreasLikeMallEtc: data.doYouWorkInCrowdedAreasLikeMallEtc,
            doesMemberInHouseholdWorkInCrowdedArea: data.doesMemberInHouseholdWorkInCrowdedArea
        };
        return patientInfo;
    };
    PatientDetailsDetailComponent.prototype.getQuestionaireData = function (data) {
        var info = {
            fever: data.fever,
            feverDuration: data.feverDuration,
            cough: data.cough,
            coughDuration: data.coughDuration,
            coughWithMucus: data.coughWithMucus,
            coughtWithMucusDuration: data.coughtWithMucusDuration,
            soreThroat: data.soreThroat,
            soreThroatDuration: data.soreThroatDuration,
            nasalCongestionDuration: data.nasalCongestionDuration,
            nasalCongestion: data.nasalCongestion,
            nauseaDuration: data.nauseaDuration,
            nausea: data.nausea,
            chillsDuration: data.chillsDuration,
            chills: data.chills,
            headAcheDuration: data.headAcheDuration,
            headAche: data.headAche,
            fatigueDuration: data.fatigueDuration,
            fatigue: data.fatigue,
            diarrheaDuration: data.diarrheaDuration,
            diarrhea: data.diarrhea,
            muscleAchesDuration: data.muscleAchesDuration,
            muscleAches: data.muscleAches,
            dibDuration: data.dibDuration,
            difficultyInBreathing: data.difficultyInBreathing,
            runnyNoseDuration: data.runnyNoseDuration,
            runnyNose: data.runnyNose,
            patientEmail: this.appGlobalService.get('patientInfo').patientEmail,
            patientName: this.appGlobalService.get('patientInfo').patientName,
            patientHid: this.appGlobalService.get('patientInfo').patientHid
        };
        return info;
    };
    PatientDetailsDetailComponent.prototype.saveData = function () {
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
        this.saveDataThenFiles('post', splittedData, false);
    };
    PatientDetailsDetailComponent.prototype.resetData = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.modalPopupService.openConfirmationModal('Cofirm', 'Do you really want to cancel the changes?', null, null, null).subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.responseDataManipulation(_this.backupData);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.getSecurityJSON = function () {
        var currentUser = this.getCurrentUser();
        var securityJson = _app_security_patient_questionaire_patient_details_detail_patient_details_detail_security__WEBPACK_IMPORTED_MODULE_15__["default"];
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
    PatientDetailsDetailComponent.prototype.getCurrentUser = function () {
        return this.appGlobalService.get('currentUser');
    };
    PatientDetailsDetailComponent.prototype.onDownloadReportAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Download Report?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var DownloadReportSubscriber = _this.patientQuestionaireService.patientDetailsFormDownloadReport(_this.id);
                DownloadReportSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(DownloadReportSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onConsultationNotRequiredAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure, no consultaion is required?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var ConsultationNotRequiredSubscriber = _this.patientQuestionaireService.patientDetailsFormConsultationNotRequired(_this.id);
                ConsultationNotRequiredSubscriber.subscribe(function (res) {
                    _this.hideActionBarAction(res);
                    // this.hideBtnsOnStatus(res);
                    _this.responseDataManipulation(res, false);
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(ConsultationNotRequiredSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onScheduleConsultationAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Schedule Consultation?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var ScheduleConsultationSubscriber = _this.patientQuestionaireService.patientDetailsFormScheduleConsultation(_this.id);
                ScheduleConsultationSubscriber.subscribe(function (res) {
                    _this.hideActionBarAction(res);
                    // this.hideBtnsOnStatus(res);
                    _this.responseDataManipulation(res, false);
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(ScheduleConsultationSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onCreateAction = function (btn) {
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
                var createSubscriber = _this.patientQuestionaireService.createPatientQuestionaire(_this.id);
                createSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(createSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onUpdateAction = function (btn) {
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
                var updateSubscriber = _this.patientQuestionaireService.updatePatientQuestionaire(_this.id);
                updateSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(updateSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onCalculateRiskScoreAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Calculate Risk Score?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var CalculateRiskScoreSubscriber = _this.patientQuestionaireService.patientDetailsFormCalculateRiskScore(_this.id);
                CalculateRiskScoreSubscriber.subscribe(function (res) {
                    _this.hideActionBarAction(res);
                    // this.hideBtnsOnStatus(res);
                    _this.responseDataManipulation(res, false);
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(CalculateRiskScoreSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onDoWeeklyMonitoringAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Do Weekly Monitoring?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var dataToSend = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.appGlobalService.get('meetingObject'), { doctorNotes: _this.appGlobalService.get('doctorNotes') });
                var DoWeeklyMonitoringSubscriber = _this.patientQuestionaireService.patientDetailsFormDoWeeklyMonitoring(dataToSend);
                DoWeeklyMonitoringSubscriber.subscribe(function (res) {
                    if (!res) {
                        res = {};
                        res.status = 'Consultation completed (Weekly monitoring)';
                    }
                    else if (res.status === 'completed') {
                        res.status = 'Consultation completed (Weekly monitoring)';
                    }
                    _this.hideActionBarAction(res);
                    // this.hideBtnsOnStatus(res);
                    _this.responseDataManipulation(res, true);
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(DoWeeklyMonitoringSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onPrescribeTestAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want to Prescribe Test?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var dataToSend = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.appGlobalService.get('meetingObject'), { doctorNotes: _this.appGlobalService.get('doctorNotes') });
                var PrescribeTestSubscriber = _this.patientQuestionaireService.patientDetailsFormPrescribeTest(dataToSend);
                PrescribeTestSubscriber.subscribe(function (res) {
                    if (!res) {
                        res = {};
                        res.status = 'Consultation completed (Test prescribed)';
                    }
                    else if (res.status === 'completed') {
                        res.status = 'Consultation completed (Test prescribed)';
                    }
                    _this.hideActionBarAction(res);
                    // this.hideBtnsOnStatus(res);
                    _this.responseDataManipulation(res, true);
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(PrescribeTestSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onNeedsConsultationAction = function (btn) {
        var _this = this;
        var co = {
            header: 'Confirm?',
            message: 'Are you sure you want consult this patient?',
            prop: null,
            buttons: null,
            methods: null
        };
        co = this.customConfirmConfig(co, btn);
        var confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);
        confirm.subscribe(function (isConfirmed) {
            if (isConfirmed) {
                var NeedsConsultationSubscriber = _this.patientQuestionaireService.patientDetailsFormNeedsConsultation(_this.id);
                NeedsConsultationSubscriber.subscribe(function (res) {
                    if (!res) {
                        res = {};
                        res.status = 'Consultation required';
                    }
                    _this.hideActionBarAction(res);
                    // this.hideBtnsOnStatus(res);
                    _this.responseDataManipulation(res, true);
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(NeedsConsultationSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.onDeleteAction = function (btn) {
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
                var deleteSubscriber = _this.patientQuestionaireService.deletePatientQuestionaire(_this.id);
                deleteSubscriber.subscribe(function (res) {
                    _this.onAfterServiceResponse(res);
                }, function (error) {
                });
                _this.subscriptions.push(deleteSubscriber);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.setFileFields = function () {
        for (var field in this.local.formConfig) {
            if (this.local.formConfig.hasOwnProperty(field)) {
                var element = this.local.formConfig[field];
                if (element.type === 'image' || element.type === 'file' || element.file === 'carousel') {
                    this.fileFields.push(element.name);
                }
            }
        }
    };
    PatientDetailsDetailComponent.prototype.subscribeTabChanges = function () {
        var _this = this;
        this.tabChangeService.tabChanges.subscribe(function (tab) {
            if (!tab) {
                return;
            }
            _this.activeTabId = tab.activeId;
            if (_this.activeTabId === 'patientinformation' && _this.isDoctor()) {
                _this.hideActionBarAction(true);
            }
            if (tab.nextId === 'doctorconsultations') {
            }
        });
    };
    PatientDetailsDetailComponent.prototype.hideActionBarAction = function (data) {
        if (data) {
            this.actionBarconf.buttons.primary[1][0].show = false;
            this.actionBarconf.buttons.primary[1][1].show = false;
        }
        else {
            this.actionBarconf.buttons.primary[1][0].show = true;
            this.actionBarconf.buttons.primary[1][1].show = true;
        }
    };
    PatientDetailsDetailComponent.prototype.getAllData = function () {
        var _this = this;
        /* this.getData();
        this.getPatientData(); */
        if (!this.id) {
            this.data.status = 'Risk score to be calculated';
            this.hideBtnsOnStatus(this.data);
            return;
        }
        ;
        var params = {
            sid: this.id
        };
        this.patientInformationService.getPatientInformationBySid(params).subscribe(function (pinfo) {
            _this.child.form.patchValue(pinfo);
            _this.responseDataManipulation(pinfo);
            _this.appGlobalService.write('patientInfo', pinfo);
            _this.hideBtnsOnStatus(pinfo);
            _this.data = pinfo;
            _this.patientQuestionaireService.getPatientQuestionaireBySid(params).subscribe(function (pques) {
                _this.hideActionBarAction(pques);
                _this.hideBtnsOnStatus(pques);
                var responseData;
                if (pinfo) {
                    responseData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data, pques);
                }
                else {
                    responseData = pques;
                }
                _this.responseDataManipulation(responseData);
            }, function (err) {
                _this.responseDataManipulation(_this.data);
            });
        }, function (err) {
            _this.data.status = 'Risk score to be calculated';
            _this.hideBtnsOnStatus(_this.data);
            _this.responseDataManipulation(_this.data);
        });
    };
    PatientDetailsDetailComponent.prototype.subscribeMeetingChanges = function () {
        var _this = this;
        this.patientQuestionaireService.meetingChanges.subscribe(function (data) {
            if (data && data.meetingStatus === 'scheduled') {
                var d = {};
                d.status = 'Consultation Scheduled';
                _this.hideBtnsOnStatus(d);
                _this.responseDataManipulation(d);
            }
        });
    };
    PatientDetailsDetailComponent.prototype.ngOnInit = function () {
        if (!this.isDoctor()) {
            var patientInfo = this.getPatientEmail();
            if (!patientInfo) {
                this.notify.warn('Please fill Patient Information');
                this.router.navigateByUrl('/patientinformation/patientinformationdetail');
            }
        }
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_12__["AppConstants"].isMobile;
        this.id = this.route.snapshot.params.id;
        if (!this.id) {
            this.id = this.appGlobalService.get('currentUser').email;
        }
        this.actionBarconf = this.actionBarConfiguration();
        this.workflowActionBarconf = this.workflowActionBarConfiguration();
        this.captionbarconf = this.captionbarConfiguration();
        this.pagename = 'PATIENT_DETAILS_DETAIL';
        this.getAllData();
        this.formConfig = this.getFormConfig(this.getSecurityJSON());
        this.setFileFields();
        this.subscribeTabChanges();
        this.subscribeMeetingChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('highalert'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], PatientDetailsDetailComponent.prototype, "highAlert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_app_widget_vs_form_vs_form_component__WEBPACK_IMPORTED_MODULE_3__["VsFormComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PatientDetailsDetailComponent.prototype, "child", void 0);
    PatientDetailsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient-details-detail',
            template: __webpack_require__(/*! ./patient-details-detail.component.html */ "./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.html"),
            styles: [__webpack_require__(/*! ./patient-details-detail.component.scss */ "./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _app_widget_services_upload_attachment_service__WEBPACK_IMPORTED_MODULE_7__["UploadAttachmentService"],
            _app_core_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _app_core_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_10__["AppGlobalService"],
            _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_17__["PatientQuestionaireService"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_18__["ModalPopupService"],
            _app_custom_custom_tab_custom_tab_service__WEBPACK_IMPORTED_MODULE_19__["CustomTabService"],
            _patient_information_patient_information_service__WEBPACK_IMPORTED_MODULE_1__["PatientInformationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModal"],
            _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_21__["NotificationService"],
            _app_core_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]])
    ], PatientDetailsDetailComponent);
    return PatientDetailsDetailComponent;
}(_app_custom_patient_questionaire_patient_details_detail_patient_details_detail_handler__WEBPACK_IMPORTED_MODULE_16__["PatientDetailsDetailHandler"]));



/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mobile-row\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1 mobile-col-expander text-center p-0\"><i class=\"fa fa-chevron-down expand-row\">&nbsp;</i></div>\r\n    <div class=\"col-11 main-content pl-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of mainContent | keyvalue\" [ngClass]=\"item.value.classes\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 inner-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let item of innerContent | keyvalue\">\r\n          <span>{{item.value.data}}</span>\r\n          <label [translate]=\"item.key | uppercase\"></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL3BhdGllbnQtcXVlc3Rpb25haXJlLWxpc3QvcGF0aWVudC1xdWVzdGlvbmFpcmUtbGlzdC1tb2JpbGUtdmlldy9wYXRpZW50LXF1ZXN0aW9uYWlyZS1saXN0LW1vYmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: PatientQuestionaireListMobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientQuestionaireListMobileViewComponent", function() { return PatientQuestionaireListMobileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientQuestionaireListMobileViewComponent = /** @class */ (function () {
    function PatientQuestionaireListMobileViewComponent() {
        this.mainContent = {};
        this.innerContent = {};
        this.name = 'PatientQuestionaireListMobileViewComponent';
    }
    PatientQuestionaireListMobileViewComponent.prototype.ngOnInit = function () {
    };
    PatientQuestionaireListMobileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-questionaire-list-mobile-view',
            template: __webpack_require__(/*! ./patient-questionaire-list-mobile-view.component.html */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./patient-questionaire-list-mobile-view.component.scss */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PatientQuestionaireListMobileViewComponent);
    return PatientQuestionaireListMobileViewComponent;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container list-container\">\r\n  <div class=\"page-header-part\">\r\n    <div class=\"detail-page-header page-list-title\">\r\n      <span class=\"detail-page-header-label\">{{pageName | translate}}</span>\r\n\r\n      <ng-container *ngIf=\"!isMobile\">\r\n        <button class=\"btn btn-default create-btn\" (click)=\"createRecord()\">New</button>\r\n        <button class=\"btn btn-default more-btn\" (click)=\"showAdditionalListButtons = !showAdditionalListButtons\"><i\r\n            class=\"fa fa-ellipsis-v\"></i></button>\r\n        <div class=\"detail-page-actionbar page-list-action inline-block list-action-bar\"\r\n          *ngIf=\"showAdditionalListButtons\">\r\n          <app-vs-actionbar class=\"row list-vs-actions\" [actionbarConfig]=\"actionBarconf\"\r\n            (onBtnClick)='actionBarAction($event)' (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n        </div>\r\n      </ng-container>\r\n      <button class=\"btn btn-primary btn-sm show-search-mobile\" [ngClass]=\"{'mob-search-shown': isMobile && showSearchForMobile}\" *ngIf=\"isMobile\" (click)=\"showSearchForMobile = !showSearchForMobile\"><i class=\"fa fa-search\"></i></button>\r\n      <div class=\"advanced-filter float-right\" *ngIf=\"!isMobile || (isMobile && showSearchForMobile)\">\r\n        <div class=\"inline-block\">\r\n          <app-vs-search [searchconfig]=\"searchconfig\"></app-vs-search>\r\n        </div>\r\n        <div class=\"grid-kanban-toggle inline-block\" *ngIf=\"!isMobile\">\r\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-sm btn-secondary active\" (click)=\"toggleKanbanView('list')\" [ngClass]=\"{'active': showGrid}\">\r\n              <i class=\"fa fa-list\"></i>\r\n            </label>\r\n            <label class=\"btn btn-sm btn-secondary\" (click)=\"toggleKanbanView('kanban')\" [ngClass]=\"{'active': showKanban}\">\r\n              <i class=\"fa fa-columns\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"detail-page-actionbar page-list-action\" *ngIf=\"isMobile\">\r\n      <app-vs-actionbar class=\"row\" [actionbarConfig]=\"actionBarconf\" (onBtnClick)='actionBarAction($event)'\r\n        (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"custom-layout\" *ngIf=\"showKanban\">\r\n    <app-vs-kanban [data]=\"kanbanData\" [fieldMap]=\"kanbanFields\" [options]=\"kanbanOptions\"></app-vs-kanban>\r\n  </div>\r\n  <div class=\"detail-page-content\" [ngStyle]=\"{'display': showKanban ? 'none' : 'block'}\">\r\n    <app-vs-grid [gridConfig]=gridConfig></app-vs-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcXVlc3Rpb25haXJlL3BhdGllbnQtcXVlc3Rpb25haXJlLWxpc3QvcGF0aWVudC1xdWVzdGlvbmFpcmUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PatientQuestionaireListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientQuestionaireListComponent", function() { return PatientQuestionaireListComponent; });
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
/* harmony import */ var _custom_patient_questionaire_patient_questionaire_list_patient_questionaire_list_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custom/patient-questionaire/patient-questionaire-list/patient-questionaire-list.handler */ "./src/app/custom/patient-questionaire/patient-questionaire-list/patient-questionaire-list.handler.ts");
/* harmony import */ var _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../patient-questionaire.service */ "./src/app/patient-questionaire/patient-questionaire.service.ts");
/* harmony import */ var _patient_questionaire_list_mobile_view_patient_questionaire_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.ts");














var PatientQuestionaireListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientQuestionaireListComponent, _super);
    function PatientQuestionaireListComponent(util, patientQuestionaireService, _http, route, acRoute, location, appGlobal, element, modalPopupService) {
        var _this = _super.call(this, util) || this;
        _this.util = util;
        _this.patientQuestionaireService = patientQuestionaireService;
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
        _this.pageName = 'PATIENT_QUESTIONAIRE_LIST';
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
    PatientQuestionaireListComponent.prototype.onGlobalClick = function (event) {
        var target = $(event.target);
        if (!(target.hasClass('page-list-action') || target.parents('.page-list-action').length)) {
            this.showAdditionalListButtons = false;
        }
    };
    PatientQuestionaireListComponent.prototype.ngOnInit = function () {
        this.isMobile = _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].isMobile;
        this.isPrototyping = this.appGlobal.get('prototyping');
        this.gridConfig = this.loadGridConfig();
        this.searchconfig = this.loadSearchConfig();
        this.actionBarconf = this.loadActionBar();
        this.kanbanOptions = this.loadKanban();
        this.extendedPageConfig = this.configureExtendedPageConfig();
    };
    PatientQuestionaireListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showAdditionalListButtons = true;
        setTimeout(function () {
            _this.showAdditionalListButtons = false;
        }, 100);
    };
    PatientQuestionaireListComponent.prototype.getDetailFormConfig = function () {
    };
    PatientQuestionaireListComponent.prototype.loadGridConfig = function () {
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
            mobileTemplate: _patient_questionaire_list_mobile_view_patient_questionaire_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_13__["PatientQuestionaireListMobileViewComponent"],
            mobileContent: this.mobileContent.bind(this),
            uniqueIdField: 'patientEmail',
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
                    data: 'dateOfBirth',
                    name: 'date_of_birth',
                    title: 'DATE_OF_BIRTH',
                    type: 'string',
                },
                {
                    data: 'riskLevel',
                    name: 'risk_level',
                    title: 'RISK_LEVEL',
                    type: 'string',
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
            gridConfig.data = this.patientQuestionaireService.getPrototypingData(gridConfig.columns);
            this.kanbanData = gridConfig.data;
        }
        else {
            gridConfig.ajaxMethod = 'POST';
            gridConfig.ajaxUrl = '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_PatientQuestionaire.url;
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
    PatientQuestionaireListComponent.prototype.onBeforeRowMenuShow = function (option, data, row) {
        return this.beforeRowMenuOptionShow(option, data, row);
    };
    PatientQuestionaireListComponent.prototype.getSelectedRows = function () {
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
    PatientQuestionaireListComponent.prototype.createRefreshMethod = function (settings, json, dtTable) {
        var _this = this;
        this.refreshGrid = function (config) {
            _this.gridComponent.refreshGrid();
        };
    };
    PatientQuestionaireListComponent.prototype.onFilterChange = function (e) {
        this.dtTable.fnDestroy();
        this.dtTable();
    };
    PatientQuestionaireListComponent.prototype.loadSearchConfig = function () {
        var searchConfig = {};
        searchConfig.advSearch = [];
        searchConfig = this.extendedSearchConfig(searchConfig);
        return searchConfig;
    };
    PatientQuestionaireListComponent.prototype.updateBtnPermission = function (selectedRows) {
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
    PatientQuestionaireListComponent.prototype.loadActionBar = function () {
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
    PatientQuestionaireListComponent.prototype.actionBarInitComplete = function (e) {
        this.actionBtns = e.elementMap;
        for (var btn in this.actionBtns) {
            var btnConfig = this.actionBtns[btn];
            if (btnConfig.enableIfRecordsSelected) {
                this.enableBtnsIfRecordSelected.push(btn);
            }
        }
    };
    PatientQuestionaireListComponent.prototype.createRecord = function () {
        this.actionBarAction({
            action: 'create'
        });
    };
    PatientQuestionaireListComponent.prototype.actionBarAction = function (btn) {
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
    PatientQuestionaireListComponent.prototype.onRowMenuAction = function (option, row, data) {
        var thisRow = this.gridConfig.uniqueIdField ? data[this.gridConfig.uniqueIdField] : data.id;
    };
    PatientQuestionaireListComponent.prototype.navigateToDetail = function (id) {
        var url = this.route.url;
        var pathParams = {
            id: id ? id : '',
            fp: url.substring(url.lastIndexOf('/') + 1)
        };
        if (this.route.routerState.snapshot.url.indexOf('/tab/') > -1) {
            if (this.route['browserUrlTree'].queryParams) {
                $.extend(pathParams, this.route['browserUrlTree'].queryParams);
            }
            this.route.navigate(['patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
        else {
            this.route.navigate(['../patientdetailsdetail', pathParams], { relativeTo: this.acRoute });
        }
    };
    PatientQuestionaireListComponent.prototype.onCreateAction = function (config) {
        this.navigateToDetail();
    };
    PatientQuestionaireListComponent.prototype.displayBooleanData = function (data, type, row) {
        return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
    };
    PatientQuestionaireListComponent.prototype.onDeleteAction = function (selectedRowIds, config, source) {
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
                var deleteSubscription = _this.patientQuestionaireService.deletePatientQuestionaire(params);
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
    PatientQuestionaireListComponent.prototype.onUpdateAction = function (selectedRowIds, config, source) {
        var _this = this;
        if (!source) {
            source = 'action_bar';
        }
        var params = {
            id: selectedRowIds
        };
        var updateSubscriber = this.patientQuestionaireService.updatePatientQuestionaire(params);
        updateSubscriber.subscribe(function (res) {
            _this.refreshGrid();
            _this.onAfterServiceResponse(res, config, source);
        }, function (error) {
        });
        this.subscriptions.push(updateSubscriber);
    };
    PatientQuestionaireListComponent.prototype.onAfterServiceResponse = function (res, config, source) {
        if (source === 'action_bar') {
            this.onAfterButtonAction(config, res);
        }
        else {
            this.onAfterRowMenuAction(config, res);
        }
    };
    PatientQuestionaireListComponent.prototype.ngOnDestory = function () {
        this.onBeforeComponentDestroy();
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
    };
    /**
       * For Kanban
       * TODO
       */
    PatientQuestionaireListComponent.prototype.loadKanban = function () {
        var kanbanOptions = this.loadKanbanOptions();
        kanbanOptions.lanes = ['Registration', 'Waitroom', 'In treatment', 'Completed'];
        kanbanOptions = this.extendedKanbanConfig(kanbanOptions);
        return kanbanOptions;
    };
    PatientQuestionaireListComponent.prototype.loadKanbanOptions = function () {
        var config = {
            url: this.isPrototyping ? '' : '/' + _app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].apihost + '/' + _app_api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiConstants"].getPatientQuestionaireAll_PatientQuestionaire.url,
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
    PatientQuestionaireListComponent.prototype.toggleKanbanView = function (type) {
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
    ], PatientQuestionaireListComponent.prototype, "gridComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PatientQuestionaireListComponent.prototype, "onGlobalClick", null);
    PatientQuestionaireListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-questionaire-list',
            template: __webpack_require__(/*! ./patient-questionaire-list.component.html */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.html"),
            styles: [__webpack_require__(/*! ./patient-questionaire-list.component.scss */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _patient_questionaire_service__WEBPACK_IMPORTED_MODULE_12__["PatientQuestionaireService"],
            _core_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_app_global_service__WEBPACK_IMPORTED_MODULE_8__["AppGlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _app_shared_services_modal_popup_service__WEBPACK_IMPORTED_MODULE_10__["ModalPopupService"]])
    ], PatientQuestionaireListComponent);
    return PatientQuestionaireListComponent;
}(_custom_patient_questionaire_patient_questionaire_list_patient_questionaire_list_handler__WEBPACK_IMPORTED_MODULE_11__["PatientQuestionaireListHandler"]));



/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PatientQuestionaireRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientQuestionaireRoutingModule", function() { return PatientQuestionaireRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/_guards/auth.can-activate.guard */ "./src/app/auth/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_patients_not_scheduled_list_all_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-patients-not-scheduled-list/all-patients-not-scheduled-list.component */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.ts");
/* harmony import */ var _my_patients_scheduled_list_my_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-patients-scheduled-list/my-patients-scheduled-list.component */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.ts");
/* harmony import */ var _all_patients_scheduled_list_all_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-patients-scheduled-list/all-patients-scheduled-list.component */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.ts");
/* harmony import */ var _patient_questionaire_list_patient_questionaire_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-questionaire-list/patient-questionaire-list.component */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.ts");
/* harmony import */ var _my_patients_not_scheduled_list_my_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-patients-not-scheduled-list/my-patients-not-scheduled-list.component */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.ts");
/* harmony import */ var _patient_details_detail_patient_details_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patient-details-detail/patient-details-detail.component */ "./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.ts");
/* harmony import */ var _not_yet_assigned_not_yet_assigned_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-yet-assigned/not-yet-assigned.component */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.ts");











var routes = [
    {
        path: 'patient-questionaire',
        redirectTo: 'allpatientsnotscheduledlist',
        pathMatch: 'full'
    },
    {
        path: 'allpatientsnotscheduledlist',
        component: _all_patients_not_scheduled_list_all_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_4__["AllPatientsNotScheduledListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "ALL_PATIENTS_NOT_SCHEDULED_LIST",
            expectedRoles: []
        }
    },
    {
        path: 'mypatientsscheduledlist',
        component: _my_patients_scheduled_list_my_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_5__["MyPatientsScheduledListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "MY_PATIENTS_SCHEDULED_LIST",
            expectedRoles: []
        }
    },
    {
        path: 'allpatientsscheduledlist',
        component: _all_patients_scheduled_list_all_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_6__["AllPatientsScheduledListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "ALL_PATIENTS_SCHEDULED_LIST",
            expectedRoles: []
        }
    },
    {
        path: 'patientquestionairelist',
        component: _patient_questionaire_list_patient_questionaire_list_component__WEBPACK_IMPORTED_MODULE_7__["PatientQuestionaireListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "PATIENT_QUESTIONAIRE_LIST",
            expectedRoles: []
        }
    },
    {
        path: 'mypatientsnotscheduledlist',
        component: _my_patients_not_scheduled_list_my_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_8__["MyPatientsNotScheduledListComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "MY_PATIENTS_NOT_SCHEDULED_LIST",
            expectedRoles: []
        }
    },
    {
        path: 'allpatientsnotassignedlist',
        component: _not_yet_assigned_not_yet_assigned_component__WEBPACK_IMPORTED_MODULE_10__["NotYetAssignedComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "ALL_PATIENTS_NOT_YET_ASSIGNED_LIST",
            expectedRoles: []
        }
    },
    {
        path: 'patientdetailsdetail',
        component: _patient_details_detail_patient_details_detail_component__WEBPACK_IMPORTED_MODULE_9__["PatientDetailsDetailComponent"],
        canActivate: [_auth_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthCanActivateGuard"]],
        data: {
            label: "PATIENT_DETAILS_DETAIL",
            expectedRoles: []
        }
    }
];
var PatientQuestionaireRoutingModule = /** @class */ (function () {
    function PatientQuestionaireRoutingModule() {
    }
    PatientQuestionaireRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], PatientQuestionaireRoutingModule);
    return PatientQuestionaireRoutingModule;
}());



/***/ }),

/***/ "./src/app/patient-questionaire/patient-questionaire.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient-questionaire/patient-questionaire.module.ts ***!
  \*********************************************************************/
/*! exports provided: PatientQuestionaireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientQuestionaireModule", function() { return PatientQuestionaireModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _patient_questionaire_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-questionaire-routing.module */ "./src/app/patient-questionaire/patient-questionaire-routing.module.ts");
/* harmony import */ var _all_patients_not_scheduled_list_all_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-patients-not-scheduled-list/all-patients-not-scheduled-list.component */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list.component.ts");
/* harmony import */ var _all_patients_not_scheduled_list_all_patients_not_scheduled_list_mobile_view_all_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/all-patients-not-scheduled-list/all-patients-not-scheduled-list-mobile-view/all-patients-not-scheduled-list-mobile-view.component.ts");
/* harmony import */ var _my_patients_scheduled_list_my_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-patients-scheduled-list/my-patients-scheduled-list.component */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list.component.ts");
/* harmony import */ var _my_patients_scheduled_list_my_patients_scheduled_list_mobile_view_my_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/my-patients-scheduled-list/my-patients-scheduled-list-mobile-view/my-patients-scheduled-list-mobile-view.component.ts");
/* harmony import */ var _all_patients_scheduled_list_all_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-patients-scheduled-list/all-patients-scheduled-list.component */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list.component.ts");
/* harmony import */ var _all_patients_scheduled_list_all_patients_scheduled_list_mobile_view_all_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/all-patients-scheduled-list/all-patients-scheduled-list-mobile-view/all-patients-scheduled-list-mobile-view.component.ts");
/* harmony import */ var _patient_questionaire_list_patient_questionaire_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient-questionaire-list/patient-questionaire-list.component */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list.component.ts");
/* harmony import */ var _patient_questionaire_list_patient_questionaire_list_mobile_view_patient_questionaire_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component */ "./src/app/patient-questionaire/patient-questionaire-list/patient-questionaire-list-mobile-view/patient-questionaire-list-mobile-view.component.ts");
/* harmony import */ var _my_patients_not_scheduled_list_my_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-patients-not-scheduled-list/my-patients-not-scheduled-list.component */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list.component.ts");
/* harmony import */ var _my_patients_not_scheduled_list_my_patients_not_scheduled_list_mobile_view_my_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component */ "./src/app/patient-questionaire/my-patients-not-scheduled-list/my-patients-not-scheduled-list-mobile-view/my-patients-not-scheduled-list-mobile-view.component.ts");
/* harmony import */ var _patient_details_detail_patient_details_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patient-details-detail/patient-details-detail.component */ "./src/app/patient-questionaire/patient-details-detail/patient-details-detail.component.ts");
/* harmony import */ var _not_yet_assigned_not_yet_assigned_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./not-yet-assigned/not-yet-assigned.component */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned.component.ts");
/* harmony import */ var _not_yet_assigned_not_yet_assigned_list_mobile_view_not_yet_assigned_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component */ "./src/app/patient-questionaire/not-yet-assigned/not-yet-assigned-list-mobile-view/not-yet-assigned-list-mobile-view.component.ts");




















var PatientQuestionaireModule = /** @class */ (function () {
    function PatientQuestionaireModule() {
    }
    PatientQuestionaireModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _all_patients_not_scheduled_list_all_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_7__["AllPatientsNotScheduledListComponent"],
                _all_patients_not_scheduled_list_all_patients_not_scheduled_list_mobile_view_all_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["AllPatientsNotScheduledListMobileViewComponent"],
                _my_patients_scheduled_list_my_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_9__["MyPatientsScheduledListComponent"],
                _my_patients_scheduled_list_my_patients_scheduled_list_mobile_view_my_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_10__["MyPatientsScheduledListMobileViewComponent"],
                _all_patients_scheduled_list_all_patients_scheduled_list_component__WEBPACK_IMPORTED_MODULE_11__["AllPatientsScheduledListComponent"],
                _all_patients_scheduled_list_all_patients_scheduled_list_mobile_view_all_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_12__["AllPatientsScheduledListMobileViewComponent"],
                _patient_questionaire_list_patient_questionaire_list_component__WEBPACK_IMPORTED_MODULE_13__["PatientQuestionaireListComponent"],
                _patient_questionaire_list_patient_questionaire_list_mobile_view_patient_questionaire_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_14__["PatientQuestionaireListMobileViewComponent"],
                _my_patients_not_scheduled_list_my_patients_not_scheduled_list_component__WEBPACK_IMPORTED_MODULE_15__["MyPatientsNotScheduledListComponent"],
                _my_patients_not_scheduled_list_my_patients_not_scheduled_list_mobile_view_my_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_16__["MyPatientsNotScheduledListMobileViewComponent"],
                _patient_details_detail_patient_details_detail_component__WEBPACK_IMPORTED_MODULE_17__["PatientDetailsDetailComponent"],
                _not_yet_assigned_not_yet_assigned_component__WEBPACK_IMPORTED_MODULE_18__["NotYetAssignedComponent"],
                _not_yet_assigned_not_yet_assigned_list_mobile_view_not_yet_assigned_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_19__["NotYetAssignedListMobileViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _patient_questionaire_routing_module__WEBPACK_IMPORTED_MODULE_6__["PatientQuestionaireRoutingModule"]
            ],
            entryComponents: [_all_patients_not_scheduled_list_all_patients_not_scheduled_list_mobile_view_all_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_8__["AllPatientsNotScheduledListMobileViewComponent"],
                _my_patients_scheduled_list_my_patients_scheduled_list_mobile_view_my_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_10__["MyPatientsScheduledListMobileViewComponent"],
                _all_patients_scheduled_list_all_patients_scheduled_list_mobile_view_all_patients_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_12__["AllPatientsScheduledListMobileViewComponent"],
                _patient_questionaire_list_patient_questionaire_list_mobile_view_patient_questionaire_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_14__["PatientQuestionaireListMobileViewComponent"],
                _my_patients_not_scheduled_list_my_patients_not_scheduled_list_mobile_view_my_patients_not_scheduled_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_16__["MyPatientsNotScheduledListMobileViewComponent"],
                _not_yet_assigned_not_yet_assigned_list_mobile_view_not_yet_assigned_list_mobile_view_component__WEBPACK_IMPORTED_MODULE_19__["NotYetAssignedListMobileViewComponent"]
            ],
            exports: []
        })
    ], PatientQuestionaireModule);
    return PatientQuestionaireModule;
}());



/***/ }),

/***/ "./src/app/security/patient-questionaire/patient-details-detail/patient-details-detail.security.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/security/patient-questionaire/patient-details-detail/patient-details-detail.security.js ***!
  \*********************************************************************************************************/
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
//# sourceMappingURL=patient-questionaire-patient-questionaire-module.js.map