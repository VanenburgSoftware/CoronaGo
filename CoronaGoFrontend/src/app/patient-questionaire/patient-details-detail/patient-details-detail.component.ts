import { PatientInformationService } from './../../patient-information/patient-information.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { VsFormComponent } from '@app/widget/vs-form/vs-form.component';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadAttachmentService } from '@app/widget/services/upload-attachment.service';
import { UtilService } from '@app/core/util.service';
import { BaseService } from '@app/core/base.service';
import { AppGlobalService } from '@app/app-global.service';
import { ApiConstants } from '@app/api-constants';
import { AppConstants } from '@app/app-constants';
import expressions from 'angular-expressions';
import * as _ from 'lodash';

import SecurityJson from '@app/security/patient-questionaire/patient-details-detail/patient-details-detail.security';
import { PatientDetailsDetailHandler } from '@app/custom/patient-questionaire/patient-details-detail/patient-details-detail.handler';
import { PatientQuestionaireService } from '../patient-questionaire.service';

import { ModalPopupService } from '@app/shared/services/modal-popup.service';
import { CustomTabService } from '@app/custom/custom-tab/custom-tab.service';
import { getCanActivateChild } from '@angular/router/src/utils/preactivation';
import { forkJoin } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '@app/shared/services/notification.service';

@Component({
  selector: 'app-patient-details-detail',
  templateUrl: './patient-details-detail.component.html',
  styleUrls: [ './patient-details-detail.component.scss' ]
})
export class PatientDetailsDetailComponent extends PatientDetailsDetailHandler implements OnInit {
  @ViewChild('highalert') private highAlert: TemplateRef<any>;
  dialog: NgbModalRef | null;
  public formConfig: any;

  public pagename: any;
  public infolabel: any;
  public data: any = {};
  public backupData: any;
  public captionElement = {};
  private fileFields: any[] = [];
  public actionBarconf: any;
  public workflowActionBarconf: any;
  public captionbarconf: any;
  public local: any = {};
  private subscriptions: any = [];
  public isMobile: boolean;
  private activeTabId: string;
  private isGoBack = false;

  @ViewChild(VsFormComponent) child;

  constructor(
    private location: Location,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private uploadService: UploadAttachmentService,
    private utilService: UtilService,
    private baseService: BaseService,
    public appGlobalService: AppGlobalService,
    private patientQuestionaireService: PatientQuestionaireService,
    private modalPopupService: ModalPopupService,
    private tabChangeService: CustomTabService,
    private patientInformationService: PatientInformationService,
    private modalService: NgbModal,
    private notify: NotificationService,
    private util: UtilService
  ) { super(appGlobalService); }

  /**
   * action bar configuration settings.
   */
  actionBarConfiguration() {
    let actionBarconf = {
      showMobilePrimary: true,
      buttons: {
        primary: [
          // Default buttons starts
          [ {
            label: '',
            show: true,
            icon: 'fa-arrow-left',
            iconFont: 'font_awesome',
            action: 'back'
          } ],
          [ {
            label: 'Submit',
            action: 'save',
            show: false,
            name: 'save'
          }, {
            label: 'Cancel',
            action: 'cancel',
            show: false,
            name: 'cancel'
          } ]
        ],
        secondary: [
          [ {
            label: 'Needs Consultation',
            action: 'needs_consultation',
            show: false,
            name: 'needs_consultation',
            icon: '',
          } ],
          [ {
            label: 'Schedule Consultation',
            action: 'schedule_consultation',
            show: false,
            name: 'schedule_consultation',
            icon: '',
          } ],
          [ {
            label: 'Prescribe Test',
            action: 'prescribe_test',
            show: false,
            name: 'prescribe_test',
            icon: '',
          }, {
            label: 'Do Weekly Monitoring',
            action: 'do_weekly_monitoring',
            show: false,
            name: 'do_weekly_monitoring',
            icon: '',
          } ],
          [ {
            label: 'Download Report',
            action: 'download_report',
            show: false,
            name: 'download_report',
            icon: '',
          } ]
        ]
      }
    };
    actionBarconf = this.updateActionBarConfig(actionBarconf, 'init');
    return actionBarconf;
  }

  /**
   * workflow action bar configuration settings.
   */
  workflowActionBarConfiguration() {
    const workflowActionbarconf = {
      buttons: {
        primary: [


        ]
      }
    };
    return workflowActionbarconf;
  }

  /**
   * Caption bar configuration
   */
  captionbarConfiguration() {
    let captionbarconf = {
      modules: [],
      moduleclass: 'pull-left horz-padding',
      detailclass: 'iar-caption-detail pull-right',
      details: [ {
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
      } ],
      currentModule: ' '
    };
    captionbarconf = this.updateCaptionConfig(captionbarconf, 'init');
    return captionbarconf;
  }

  dataChanged = (data) => {
    this.customDataChanged(data);
  };
  captionbarAction = (data) => {
    this.customCaptionbarAction(data);
  };
  captionBarInitComplete = (data) => {
    const captionConf = this.updateCaptionConfig(data, 'init');
    this.captionElement = captionConf.elementMap;
    this.customCaptionbarInitComplete(data);
  }
  actionBarInitComplete = (data) => {
    if (Object.keys(data.elementMap).length) {
      this.customActionbarInitComplete(data);
      this.actionbarMap = data;
    }
  };
  workflowActionBarInitComplete = (data) => {
    this.customWorkflowActionbarInitComplete(data);
  };
  buttonAction = (btn) => {
    if (btn.action === 'back') {
      this.isGoBack = true;
      this.goBack(true);
    } else if (btn.action === 'save') {
      this.saveData();
    } else if (btn.action === 'cancel') {
      this.resetData();
    } else if (btn.action === 'create') {
      this.navigateToDetail('', btn.page);
    } else if (btn.action === 'refresh') {

    } else if (btn.action === 'calculate_risk_score') {
      if (!this.customActionHandler(btn)) {
        this.onCalculateRiskScoreAction(btn);
      }
    } else if (btn.action === 'needs_consultation') {
      if (!this.customActionHandler(btn)) {
        this.onNeedsConsultationAction(btn);
      }
    } else if (btn.action === 'schedule_consultation') {
      if (!this.customActionHandler(btn)) {
        this.onScheduleConsultationAction(btn);
      }
    } else if (btn.action === 'prescribe_test') {
      if (!this.customActionHandler(btn)) {
        this.onPrescribeTestAction(btn);
      }
    } else if (btn.action === 'do_weekly_monitoring') {
      if (!this.customActionHandler(btn)) {
        this.onDoWeeklyMonitoringAction(btn);
      }
    } else if (btn.action === 'download_report') {
      if (!this.customActionHandler(btn)) {
        this.onDownloadReportAction(btn);
      }
    }
  }

  private goBack(isGoBack) {
    /* this.router.navigateByUrl('/homescreen/homescreendetail');
    return; */

    this.patientQuestionaireService.consultFormChanges.subscribe(data => {
      if (!this.isGoBack) {
        return;
      }
      if (data) {
        this.modalPopupService.openConfirmationModal(
          'Cofirm', 'Do you want to discard all unsaved changes?', null, null, null
        ).subscribe((isConfirmed) => {
          if (isConfirmed) {
            this.isGoBack = false;
            this.router.navigateByUrl('/homescreen/homescreendetail');
          }
        });
      } else {
        if (this.child.form.pristine) {
          this.isGoBack = false;
          this.router.navigateByUrl('/homescreen/homescreendetail');
        } else {
          this.modalPopupService.openConfirmationModal(
            'Cofirm', 'Do you want to discard all unsaved changes?', null, null, null
          ).subscribe((isConfirmed) => {
            if (isConfirmed) {
              this.isGoBack = false;
              this.router.navigateByUrl('/homescreen/homescreendetail');
            }
          });
        }
      }
    });
  }

  private navigateToDetail(id?: string, page?: string) {
    const pathParams: any = {
      id: id ? id : ''
    };
    if (this.router.routerState.snapshot.url.indexOf('/tab/') > -1) {
      if (this.router[ 'browserUrlTree' ].queryParams) {
        $.extend(pathParams, this.router[ 'browserUrlTree' ].queryParams);
      }

      this.router.navigate([ page + "/" + page + "detail", pathParams ]);
    } else {
      this.router.navigate([ page + "/" + page + "detail", pathParams ]);
    }
  }

  private getFormConfig(securityJson?: any) {
    this.local.formConfig = {};

    this.local.formConfig.fever = {
      security_code: 'fever',
      label: 'Fever',
      type: 'radio',
      name: 'fever',
      placeholder: '',
      infoBubble: '',
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      options: [ {
        label: 'Male',
        value: 'Male'
      }, {
        label: 'Female',
        value: 'Female'
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
      options: [ {
        label: '0-3 days',
        value: '0-3 days'
      }, {
        label: '3-7 days',
        value: '3-7 days'
      }, {
        label: '>7 days',
        value: '>7 days'
      } ],
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
            render: (data: any, type: any, row: any, meta: any) => {
              return this.util.formatDate(data, 'DD-MMM-YYYY HH:mm:ss a');
            }
          },
          {
            data: 'riskLevel',
            name: 'riskLevel',
            title: 'RISK_LEVEL',
            type: 'string',
          }
        ]
        ,
        // tslint:disable-next-line: max-line-length
        ajaxUrl: '/' + AppConstants.apihost + '/' + ApiConstants.getPatientAssessmentHistory.url + '/' + this.id,
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
        onRowClick: (event: any, id: any) => {

        },
        onInitComplete: (dtTable: any, settings: any, json: any) => {

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
            render: (data: any, type: any, row: any, meta: any) => {
              return this.util.formatDate(data, 'DD-MMM-YYYY HH:mm:ss a');
            }
          },
          {
            data: 'meetingEndTime',
            name: 'meeting_end_time',
            title: 'MEETING_END_TIME',
            type: 'datetime',
            render: (data: any, type: any, row: any, meta: any) => {
              return this.util.formatDate(data, 'DD-MMM-YYYY HH:mm:ss a');
            }
          },
          {
            data: 'recordingInfo',
            name: 'recording_info',
            title: 'RECORDING_INFO',
            type: 'string',
            render: (data: any, type: any, row: any, meta: any) => {
              // tslint:disable-next-line: max-line-length
              return `<a href="/${AppConstants.apihost}/attachments/download/attachment/${data.id}" target="_blank" download (click)="$event.preventDefault()">Download</a>`

            }
          }
        ]
        ,
        // tslint:disable-next-line: max-line-length
        ajaxUrl: '/' + AppConstants.apihost + '/' + ApiConstants.getPatientMeetingHistory.url + '/' + this.appGlobalService.get('patientInfo').patientEmail,
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
            render: (data: any, type: any, row: any, meta: any) => {
              return `<a href="/${AppConstants.apihost}/attachments/download/attachment/${data.id}" target="_blank">${data.fileName}</a>`
            }
          }
        ]),
        onRowClick: (event: any, id: any) => {

        },
        onInitComplete: (dtTable: any, settings: any, json: any) => {

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
      validations: {
      },
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
      hidden: true,
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
      options: [ {
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
      } ],
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
      options: [ {
        label: 'Type 1',
        value: 'Type 1'
      }, {
        label: 'Type 2',
        value: 'Type 2'
      }, {
        label: 'Type 3',
        value: 'Type 3'
      } ],
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
      options: [ {
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
      } ],
      disabled: false,
      toolbar: true,
      validations: {
      },
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
      options: [ {
        label: 'Low',
        value: 'Low'
      }, {
        label: 'Medium',
        value: 'Medium'
      }, {
        label: 'High',
        value: 'High'
      } ],
      disabled: false,
      toolbar: true,
      validations: {
      },
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
      values: [ {
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      } ],
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
            }
            ,

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
                }
                ,

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
          items: [
            /* this.local.formConfig.currentconsultation, */
            this.local.formConfig.doctorconsultations
          ]
        }


      ]
    };
    let config = {
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
  }

  getActivateId() {
    const isDr = this.isDoctor();
    this.activeTabId = isDr ? 'patientinformation' : 'questionaire';
    if (this.activeTabId === 'patientinformation' && isDr) {
      this.hideActionBarAction(true);
    }
    return this.activeTabId;
  }

  public PatientDetailsDetailFormInitComplete(form: any) {
    this.customFormInitComplete(form);
  }

  private displayBooleanData(data: any, type: any, row: any): string {
    return (data === true ? '<div class="text-center app-users-tick"><i class="fa fa-check"></i></div>' : '');
  }

  private normalizeData(data: any) {
    data = this.updateFormdata(data);
    return data;
  }

  private updateCaptionBarWithData(data: any) {
    if (!this.captionbarconf) {
      return;
    }

    const tempCaption = { ...this.captionbarconf };

    tempCaption.details.map(detail => {
      detail.content = data[ detail.name ];
      return detail;
    });

    this.captionbarconf = { ...tempCaption };
  }

  private responseDataManipulation(data: any, dontPatch?: boolean) {
    if (!data) {
      this.child.form.reset();
      this.child.form.markAsUntouched();
      this.child.form.markAsPristine();
      return;
    }
    this.infolabel = expressions.compile('')(data);
    if (!this.route.snapshot.params.id && !this.id) {
      this.id = data.sid;
      this.location.replaceState(this.location.path() + 'id=' + data.sid);
    }
    let pagespec = '';
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
  }

  private getData() {
    if (!this.id) {
      return;
    };
    const params = {
      sid: this.id
    };
    this.patientQuestionaireService.getPatientQuestionaireBySid(params).subscribe((response: any) => {
      this.child.form.patchValue(response);
      this.responseDataManipulation(response);
      if (response) {
        this.actionBarconf.buttons.primary[ 1 ][ 0 ].show = false;
        this.actionBarconf.buttons.primary[ 1 ][ 1 ].show = false;
      } else {
        this.actionBarconf.buttons.primary[ 1 ][ 0 ].show = true;
        this.actionBarconf.buttons.primary[ 1 ][ 1 ].show = true;
      }
    });
  }
  private getPatientData() {
    if (!this.id) {
      return;
    }
    const params = {
      sid: this.id
    };
    this.patientInformationService.getPatientInformationBySid(params).subscribe((response: any) => {
      this.appGlobalService.write('patientInfo', response);
      let responseData;
      if (this.data) {
        responseData = { ...this.data, response };
      } else {
        responseData = response;
      }
      this.responseDataManipulation(responseData);
    });
  }
  private saveAddedFiles(splittedData) {
    this.uploadService.saveAddedFiles(splittedData, this.id, this.child.form).subscribe(res => {
      let fData = {};
      for (const key in res) {
        if (res[ key ] instanceof Array) {
          fData[ key ] = _.compact(_.uniq(res[ key ].flat()));
        } else {
          fData[ key ] = [ res[ key ] ];
        }
      }
      const finalData = { data: { ...splittedData.data, ...fData } };
      this.saveDataThenFiles('put', finalData, false);
    });
  }

  getPatientEmail() {
    return this.appGlobalService.get('patientInfo') && this.appGlobalService.get('patientInfo').patientEmail;
  }

  getCurrentUserEmail() {
    return this.appGlobalService.get('currentUser').email;
  }

  private saveDataThenFiles(method, splittedData, saveFiles?: boolean) {
    let service;
    let patientInfoService;

    service = this.patientQuestionaireService.createPatientQuestionaire(this.getQuestionaireData(splittedData.data));
    service.subscribe(resq => {
      if (saveFiles) {
        const data = { ...splittedData.data, ...resq };
        splittedData.data = data;
        this.child.form.markAsPristine();
        this.saveAddedFiles(splittedData);
      }
      this.hideActionBarAction(resq);
      this.hideBtnsOnStatus(resq);
      this.showAlertOnRisk(resq);
      const params = {
        sid: this.id
      };
      this.patientInformationService.getPatientInformationBySid(params).subscribe(pinfo => {
        const response = { ...pinfo, ...resq };
        this.child.form.patchValue(response);
        this.responseDataManipulation(response);
        this.appGlobalService.write('patientInfo', pinfo);
        this.hideBtnsOnStatus(response);
      });

    });
  }


  openModal(): void {
    let options = {
      'backdrop': <any> 'static',
      'centered': true,
      windowClass: 'modal-high-alert'
    }
    this.dialog = this.modalService.open(this.highAlert, options);
  }

  cancelModal(): void {
    if (this.dialog) {
      this.dialog.dismiss();
      this.dialog = null;
    }
  }

  private showAlertOnRisk(data) {
    if (data.risk_level == 'High') {
      this.openModal();
    }
  }
  private getPatientInfoData(data) {
    const patientInfo = {
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
  }

  private getQuestionaireData(data) {
    const info = {
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
  }


  private saveData() {
    const submitButton: HTMLButtonElement = this.child.submitButton.nativeElement;
    submitButton.click();
    if (!this.child.form.valid) {
      return;
    }
    const splittedData = this.utilService.splitFileAndData(this.child.form.value, this.fileFields);
    const saveData = this.validateDataBeforeSave(splittedData.data);

    if (!saveData) {
      return;
    }

    let method = 'post';
    if (this.data && this.data.status && this.data.status.toLowerCase() !== 'risk score to be calculated') {
      method = 'put';
    }
    this.saveDataThenFiles('put', splittedData, false);
  }

  private resetData() {
    // tslint:disable-next-line: max-line-length
    this.modalPopupService.openConfirmationModal('Cofirm', 'Do you really want to cancel the changes?', null, null, null).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.responseDataManipulation(this.backupData);
      }
    });
  }

  getSecurityJSON() {

    const currentUser = this.getCurrentUser();
    const securityJson = SecurityJson;
    const roles = [];
    const userStepJsonList = [];
    for (const role in securityJson) {
      if (securityJson.hasOwnProperty(role)) {
        if (currentUser[ role ] === true) {
          //return securityJson[role];
          userStepJsonList.push(securityJson[ role ]);
        }
      }
    }
    return userStepJsonList.length > 0 ? userStepJsonList : null;
  }

  getCurrentUser() {
    return this.appGlobalService.get('currentUser');
  }

  private onDownloadReportAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Download Report?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        const DownloadReportSubscriber = this.patientQuestionaireService.patientDetailsFormDownloadReport(this.id);
        DownloadReportSubscriber.subscribe(

          (res: any) => {
            this.onAfterServiceResponse(res);
          },
          (error: string) => {
          }
        );
        this.subscriptions.push(DownloadReportSubscriber);
      }
    });


  }

  private onScheduleConsultationAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Schedule Consultation?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        const ScheduleConsultationSubscriber = this.patientQuestionaireService.patientDetailsFormScheduleConsultation(this.id);
        ScheduleConsultationSubscriber.subscribe(

          (res: any) => {
            this.hideActionBarAction(res);
            // this.hideBtnsOnStatus(res);
            this.responseDataManipulation(res, false);
            this.onAfterServiceResponse(res);
          },
          (error: string) => {
          }
        );
        this.subscriptions.push(ScheduleConsultationSubscriber);
      }
    });


  }

  private onCreateAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Create?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        const createSubscriber = this.patientQuestionaireService.createPatientQuestionaire(this.id);
        createSubscriber.subscribe(

          (res: any) => {
            this.onAfterServiceResponse(res);
          },
          (error: string) => {
          }
        );
        this.subscriptions.push(createSubscriber);
      }
    });


  }

  private onUpdateAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Update?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        const updateSubscriber = this.patientQuestionaireService.updatePatientQuestionaire(this.id);
        updateSubscriber.subscribe(

          (res: any) => {
            this.onAfterServiceResponse(res);
          },
          (error: string) => {
          }
        );
        this.subscriptions.push(updateSubscriber);
      }
    });


  }

  private onCalculateRiskScoreAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Calculate Risk Score?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        const CalculateRiskScoreSubscriber = this.patientQuestionaireService.patientDetailsFormCalculateRiskScore(this.id);
        CalculateRiskScoreSubscriber.subscribe(

          (res: any) => {
            this.hideActionBarAction(res);
            // this.hideBtnsOnStatus(res);
            this.responseDataManipulation(res, false);
            this.onAfterServiceResponse(res);
          },
          (error: string) => {
          }
        );
        this.subscriptions.push(CalculateRiskScoreSubscriber);
      }
    });


  }

  private doWeeklyMonitoringFinish(data) {
    const DoWeeklyMonitoringSubscriber = this.patientQuestionaireService.patientDetailsFormDoWeeklyMonitoring(data);
    DoWeeklyMonitoringSubscriber.subscribe(

      (res: any) => {
        if (!res) {
          res = {};
          res.status = 'Consultation completed (Weekly monitoring)';
        } else if (res.meetingStatus === 'completed') {
          res.status = 'Consultation completed (Weekly monitoring)';
        }
        this.hideActionBarAction(res);
        // this.hideBtnsOnStatus(res);
        this.responseDataManipulation(res, true);
        this.onAfterServiceResponse(res);
      },
      (error: string) => {
      }
    );
    this.subscriptions.push(DoWeeklyMonitoringSubscriber);
  }

  private onDoWeeklyMonitoringAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Do Weekly Monitoring?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {

        const meetingObj = this.appGlobalService.get('meetingObject');
        if (!meetingObj || !Object.keys(meetingObj).length) {
          const currentUser = {
            email: this.appGlobalService.get('patientInfo').patientEmail
          };
          const currentMeetingSchedule = this.patientQuestionaireService.getScheduledMeetingForPatient(currentUser);
          currentMeetingSchedule.subscribe(data => {
            const dataToSend = {
              ...data,
              doctorNotes: this.appGlobalService.get('doctorNotes'),
            };
            this.doWeeklyMonitoringFinish(dataToSend);
          });
        } else {
          this.doWeeklyMonitoringFinish({
            ...meetingObj,
            doctorNotes: this.appGlobalService.get('doctorNotes')
          });
        }

      }
    });


  }

  private prescribeTestComplete(data) {
    const PrescribeTestSubscriber = this.patientQuestionaireService.patientDetailsFormPrescribeTest(data);
    PrescribeTestSubscriber.subscribe(

      (res: any) => {
        if (!res) {
          res = {};
          res.status = 'Consultation completed (Test prescribed)';
        } else if (res.meetingStatus === 'completed') {
          res.status = 'Consultation completed (Test prescribed)';
        }
        this.hideActionBarAction(res);
        // this.hideBtnsOnStatus(res);
        this.responseDataManipulation(res, true);
        this.onAfterServiceResponse(res);
      },
      (error: string) => {
      }
    );
    this.subscriptions.push(PrescribeTestSubscriber);
  }

  private onPrescribeTestAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Prescribe Test?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {

        const meetingObj = this.appGlobalService.get('meetingObject');
        if (!meetingObj || !Object.keys(meetingObj).length) {
          const currentUser = {
            email: this.appGlobalService.get('patientInfo').patientEmail
          };
          const currentMeetingSchedule = this.patientQuestionaireService.getScheduledMeetingForPatient(currentUser);
          currentMeetingSchedule.subscribe(data => {
            const dataToSend = {
              ...data,
              doctorNotes: this.appGlobalService.get('doctorNotes'),
            };
            this.prescribeTestComplete(dataToSend);
          });
        } else {
          this.prescribeTestComplete({
            ...meetingObj,
            doctorNotes: this.appGlobalService.get('doctorNotes')
          });
        }
      }
    });


  }

  private onNeedsConsultationAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want consult this patient?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {

        this.onAfterServiceResponse({ status: 'Consultation required' });
        const NeedsConsultationSubscriber = this.patientQuestionaireService.patientDetailsFormNeedsConsultation(this.id);
        NeedsConsultationSubscriber.subscribe(

          (res: any) => {
            if (!res) {
              res = {};
              res.status = 'Consultation required';
            }
            this.hideActionBarAction(res);
            // this.hideBtnsOnStatus(res);
            this.responseDataManipulation(res, true);
            this.onAfterServiceResponse(res);
          },
          (error: string) => {
          }
        );
        this.subscriptions.push(NeedsConsultationSubscriber);
      }
    });


  }

  private onDeleteAction(btn: any): void {

    let co = {
      header: 'Confirm?',
      message: 'Are you sure you want to Delete?',
      prop: null,
      buttons: null,
      methods: null
    };
    co = this.customConfirmConfig(co, btn);
    const confirm = this.modalPopupService.openConfirmationModal(co.header, co.message, co.prop, co.buttons, co.methods);

    confirm.subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        const deleteSubscriber = this.patientQuestionaireService.deletePatientQuestionaire(this.id);
        deleteSubscriber.subscribe(

          (res: any) => {
            this.onAfterServiceResponse(res);
          },
          (error: string) => {
          }
        );
        this.subscriptions.push(deleteSubscriber);
      }
    });
  }
  setFileFields() {
    for (const field in this.local.formConfig) {
      if (this.local.formConfig.hasOwnProperty(field)) {
        const element = this.local.formConfig[ field ];
        if (element.type === 'image' || element.type === 'file' || element.file === 'carousel') {
          this.fileFields.push(element.name);
        }
      }
    }
  }




  subscribeTabChanges() {
    this.tabChangeService.tabChanges.subscribe(tab => {
      if (!tab) { return; }
      this.activeTabId = tab.activeId;
      if (this.isDoctor() && (this.activeTabId === 'patientinformation' || tab.nextId === 'patientinformation')) {
        this.hideActionBarAction(true);
      }
      if (tab.nextId === 'doctorconsultations') {
      }
    });
  }

  hideActionBarAction(data) {
    if (data) {
      this.actionBarconf.buttons.primary[ 1 ][ 0 ].show = false;
      this.actionBarconf.buttons.primary[ 1 ][ 1 ].show = false;
    } else {
      this.actionBarconf.buttons.primary[ 1 ][ 0 ].show = true;
      this.actionBarconf.buttons.primary[ 1 ][ 1 ].show = true;
    }
  }

  navigateToPatientInfoPage() {
    if (!this.isDoctor()) {
      const patientInfo = this.getPatientEmail();
      if (!patientInfo) {
        this.notify.warn('Please fill Patient Information');
        this.router.navigateByUrl('/patientinformation/patientinformationdetail');
      }
    }
  }


  getAllData() {
    if (!this.id) {
      this.data.status = 'Risk score to be calculated';
      this.hideBtnsOnStatus(this.data);
      return;
    };
    const params = {
      sid: this.id
    };

    this.patientInformationService.getPatientInformationBySid(params).subscribe(pinfo => {
      this.child.form.patchValue(pinfo);
      this.responseDataManipulation(pinfo);
      this.appGlobalService.write('patientInfo', pinfo);
      this.hideBtnsOnStatus(pinfo);
      this.data = pinfo;
      this.navigateToPatientInfoPage();
      this.patientQuestionaireService.getPatientQuestionaireBySid(params).subscribe(pques => {
        this.hideActionBarAction(pques);
        this.hideBtnsOnStatus(pques);
        let responseData;
        if (pinfo) {
          responseData = { ...this.data, ...pques };
        } else {
          responseData = pques;
        }
        this.responseDataManipulation(responseData);

      }, (err) => {
        this.responseDataManipulation(this.data);
      });
    }, err => {
      this.data.status = 'Risk score to be calculated';
      this.navigateToPatientInfoPage();
      this.hideBtnsOnStatus(this.data);
      this.responseDataManipulation(this.data);
    });
  }

  subscribeMeetingChanges() {
    this.patientQuestionaireService.meetingChanges.subscribe(data => {
      if (data && data.meetingStatus === 'scheduled') {
        const d: any = {};
        d.status = 'Consultation Scheduled';
        this.hideBtnsOnStatus(d);
        this.responseDataManipulation(d);
      }
    });
  }

  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
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
  }
}
