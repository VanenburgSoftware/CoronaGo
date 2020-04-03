import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from '@app/app-constants';
import { NotificationService } from '@app/shared/services/notification.service';
import { UploadAttachmentService } from '../services/upload-attachment.service';
import { UtilService } from '@app/core/util.service';

@Component({
  selector: 'app-form-attachments',
  templateUrl: './form-attachments.component.html',
  styleUrls: ['./form-attachments.component.scss']
})
export class FormAttachmentsComponent implements OnInit {

  @Input() uploadUrl: string;
  @Input() listUrl: string;

  @ViewChild('attachThead') attachThead;

  closeResult: string;
  form: FormGroup;
  linkForm: FormGroup;
  listData: Array<any> = [];
  selectedItems: Array<any> = [];
  formSubmitted = false;
  linkFormSubmitted = false;
  openedModalType: string;
  isAddAttachmentDisabled = false;
  apiHost;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private uploadService: UploadAttachmentService,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private utilService: UtilService) { }

  addAttachments(event, content, type) {
    this.openedModalType = type;
    this.linkFormSubmitted = false;
    this.formSubmitted = false;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  removeAttachments(selected) {
    if (confirm('Do you want to delete this record?')) {
      this.listData = this.listData.filter(item => item != selected);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveAttachment(modal) {
    let formVal;
    if (this.openedModalType === 'file') {
      this.formSubmitted = true;
      if (this.form.invalid) { return; }
      formVal = this.form.value;
      const sizeInMB: number = ((formVal.file.size / (1024 * 1024)).toFixed(2)) as unknown as number;
      if (sizeInMB > 32) {
        this.notification.error('File size cannot be greater than 32 MB');
        return;
      }

      this.uploadService.uploadFile(formVal.file, this.uploadUrl, formVal.description, this.route.snapshot.paramMap.get('id?'))
        .subscribe(res => {
          console.log('Uploaded successfully');
        });
      return;
    } else if (this.openedModalType === 'link') {
      this.linkFormSubmitted = true;
      if (this.linkForm.invalid) { return; }
      formVal = this.linkForm.value;
    }
    modal.dismiss('after save');
  }
  setFormForModal() {
    this.form = this.formBuilder.group({
      file: [null, Validators.required],
      description: ['']
    });

    this.linkForm = this.formBuilder.group({
      link: [null, Validators.required],
      description: ['']
    });
  }

  loadGridData() {
    this.uploadService.getData(this.listUrl)
      .subscribe(res => {
        console.log('res ', res);
        this.listData = res.data;
      });
  }

  selectThisItem(event, item) {
    const target = event.target;
    if (target.checked) {
      // logic
      this.selectedItems.push(item);
    } else {
      // logic
      this.selectedItems = this.selectedItems.filter(res => res.id !== item.id);
    }
  }

  getHeaderWidth(head) {
    const el = head;
    let width;
    if (el.scrollHeight > el.offsetHeight || el.scrollWidth > el.offsetWidth) {
      width = `calc(100% - 5px)`;
    } else {
      width = '100%';
    }
    return { width };
  }

  getClassFromFileName(file) {
    const fileName = file.actual_file_name;
    // tslint:disable-next-line:no-bitwise
    let extension = fileName.slice((fileName.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
    if (!extension && file.external_link) {
      extension = 'link';
    }

    switch (extension) {
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return 'fa fa-file-image-o text-info fa-lg';
      case 'pdf':
        return 'fa fa-file-pdf-o text-danger fa-lg';
      case 'xlsx':
      case 'xls':
        return 'fa fa-file-excel-o text-success fa-lg';
      case 'doc':
      case 'docx':
        return 'fa fa-file-text-o text-primary fa-lg';
      case 'link':
        return 'fa fa fa-link fa-lg';
      default:
        return 'fa fa-file-o text-secondary fa-lg';
    }
    return 'fa-plus';
  }

  getNameFromEmail(email) {
    return this.utilService.getNameFromEmail(email);
  }

  ngOnInit() {
    this.loadGridData();
    this.setFormForModal();
    // tslint:disable-next-line:no-string-literal
    if (this.route.snapshot.params['id']) {
      this.isAddAttachmentDisabled = false;
    }

    this.apiHost = AppConstants.apihost;
  }

}
