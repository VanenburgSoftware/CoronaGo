import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopupComponent } from '@app/widget/modal-popup/modal-popup.component';

@Injectable({
  providedIn: 'root'
})
export class ModalPopupService {
    buttons: any;
    constructor(private modalService: NgbModal) { }
    /**
     * @param formConfig - Form configuration
     * @param formData - data to be bind in the form
     * @param prop - bootstrap pop properties(size etc..)
     * @param header - popup header name
     * @param buttons - Footerbuttons
     * @param methods - Footer button methods
     */
    public openModalPopupWithForm(formConfig: any, formData: any, prop: any, header: string, buttons: any, methods) {
        if (!prop) {
          prop = { size: 'md' };
        }
        if (!buttons) {
          buttons = {
            primary : 'Save',
            secondary : 'Cancel'
          };
        }
        const modalRef = this.modalService.open(ModalPopupComponent, prop);
        modalRef.componentInstance.type = 'modalwithform';
        modalRef.componentInstance.modalheader = header;
        modalRef.componentInstance.modalformConfig = formConfig;
        modalRef.componentInstance.modaldata = formData;
        modalRef.componentInstance.buttons = buttons;
        return modalRef.componentInstance.saveModalData;
        /* modalRef.componentInstance.saveModalData.subscribe((receivedData: any) => {
          methods.save(receivedData);
        }); */
    }

    /**
     * @param header - confirmation popup header
     * @param message - confirmation popup message
     * @param prop - popup style
     * @param buttons - buttons
     * @param methods - button action methods
     */
    public openConfirmationModal(header: string, message: string, prop: any, buttons: any, methods: any) {
      if (!prop) {
        prop = { size: 'sm' };
      }
      if (!buttons) {
        buttons = {
          primary : 'Yes',
          secondary : 'No'
        };
      }
      const modalRef = this.modalService.open(ModalPopupComponent, prop);
      modalRef.componentInstance.type = 'confirm';
      modalRef.componentInstance.modalheader = header;
      modalRef.componentInstance.message = message;
      modalRef.componentInstance.buttons = buttons;
      return modalRef.componentInstance.saveModalData;
      /* modalRef.componentInstance.saveModalData.subscribe((receivedData: any) => {
        methods.save(receivedData);
      }); */
  }
}
