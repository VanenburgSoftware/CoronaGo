(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/modal-popup.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/modal-popup.service.ts ***!
  \********************************************************/
/*! exports provided: ModalPopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPopupService", function() { return ModalPopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_widget_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/widget/modal-popup/modal-popup.component */ "./src/app/widget/modal-popup/modal-popup.component.ts");




var ModalPopupService = /** @class */ (function () {
    function ModalPopupService(modalService) {
        this.modalService = modalService;
    }
    /**
     * @param formConfig - Form configuration
     * @param formData - data to be bind in the form
     * @param prop - bootstrap pop properties(size etc..)
     * @param header - popup header name
     * @param buttons - Footerbuttons
     * @param methods - Footer button methods
     */
    ModalPopupService.prototype.openModalPopupWithForm = function (formConfig, formData, prop, header, buttons, methods) {
        if (!prop) {
            prop = { size: 'md' };
        }
        if (!buttons) {
            buttons = {
                primary: 'Save',
                secondary: 'Cancel'
            };
        }
        var modalRef = this.modalService.open(_app_widget_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_3__["ModalPopupComponent"], prop);
        modalRef.componentInstance.type = 'modalwithform';
        modalRef.componentInstance.modalheader = header;
        modalRef.componentInstance.modalformConfig = formConfig;
        modalRef.componentInstance.modaldata = formData;
        modalRef.componentInstance.buttons = buttons;
        return modalRef.componentInstance.saveModalData;
        /* modalRef.componentInstance.saveModalData.subscribe((receivedData: any) => {
          methods.save(receivedData);
        }); */
    };
    /**
     * @param header - confirmation popup header
     * @param message - confirmation popup message
     * @param prop - popup style
     * @param buttons - buttons
     * @param methods - button action methods
     */
    ModalPopupService.prototype.openConfirmationModal = function (header, message, prop, buttons, methods) {
        if (!prop) {
            prop = { size: 'sm' };
        }
        if (!buttons) {
            buttons = {
                primary: 'Yes',
                secondary: 'No'
            };
        }
        var modalRef = this.modalService.open(_app_widget_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_3__["ModalPopupComponent"], prop);
        modalRef.componentInstance.type = 'confirm';
        modalRef.componentInstance.modalheader = header;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.buttons = buttons;
        return modalRef.componentInstance.saveModalData;
        /* modalRef.componentInstance.saveModalData.subscribe((receivedData: any) => {
          methods.save(receivedData);
        }); */
    };
    ModalPopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ModalPopupService);
    return ModalPopupService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map