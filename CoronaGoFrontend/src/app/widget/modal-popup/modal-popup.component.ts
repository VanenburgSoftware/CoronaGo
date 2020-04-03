import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VsFormComponent } from '../vs-form/vs-form.component';
import { UtilService } from '@app/core/util.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {
  @Output() saveModalData: EventEmitter<any> = new EventEmitter();
  @Input() modaldata;
  @ViewChild(VsFormComponent) formComp: VsFormComponent;

  public modalheader = '';
  public message = '';
  public modalformConfig: any;
  public dataChanged: any;

  constructor(public activeModal: NgbActiveModal, public util: UtilService) { }

  savePopup() {
    const submitButton: HTMLButtonElement = this.formComp.submitButton.nativeElement;
    submitButton.click();
    if (!this.formComp.form.valid) {
      return;
    }
    this.saveModalData.emit(this.formComp.form.value);
    this.activeModal.dismiss(true);
  }
  closePopup() {
    this.saveModalData.emit(false);
    this.activeModal.dismiss(false);
  }

  okConfirmPopup() {
    this.saveModalData.emit(true);
    this.activeModal.dismiss('Closed');

  }

  closeConfirmPopup() {
    this.saveModalData.emit(false);
    this.activeModal.dismiss('Closed');
  }

  ngOnInit() {
  }

}
