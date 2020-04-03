import { Component, OnInit, ViewChild } from '@angular/core';
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

import SecurityJson from '@app/security/patient-information/patient-information-detail/patient-information-detail.security';
import { PatientInformationDetailHandler } from '@app/custom/patient-information/patient-information-detail/patient-information-detail.handler';
import { PatientInformationService } from '../patient-information.service';

import { ModalPopupService } from '@app/shared/services/modal-popup.service';

@Component({
  selector: 'app-patient-information-detail',
  templateUrl: './patient-information-detail.component.html',
  styleUrls: [ './patient-information-detail.component.scss' ]
})
export class PatientInformationDetailComponent extends PatientInformationDetailHandler implements OnInit {


  public formConfig: any;
  public id: any;
  public pagename: any;
  public infolabel: any;
  public data = {};
  public backupData: any;
  public captionElement = {};
  private fileFields: any[] = [];
  public actionBarconf: any;
  public workflowActionBarconf: any;
  public captionbarconf: any;
  public local: any = {};
  private subscriptions: any = [];
  public isMobile: boolean;

  @ViewChild(VsFormComponent) child;

  constructor(
    private location: Location,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private uploadService: UploadAttachmentService,
    private utilService: UtilService,
    private baseService: BaseService,
    private appGlobalService: AppGlobalService,
    private patientInformationService: PatientInformationService,

    private modalPopupService: ModalPopupService
  ) { super(); }

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
            label: 'Save',
            action: 'save',
            show: true
          }, {
            label: 'Cancel',
            action: 'cancel',
            show: true
          } ]
        ],
        secondary: [
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
      details: [],
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
    this.customActionbarInitComplete(data);
  };
  workflowActionBarInitComplete = (data) => {
    this.customWorkflowActionbarInitComplete(data);
  };
  buttonAction = (btn) => {
    if (btn.action === 'back') {
      this.goBack();
    } else if (btn.action === 'save') {
      this.saveData();
    } else if (btn.action === 'cancel') {
      this.resetData();
    } else if (btn.action === 'create') {
      this.navigateToDetail('', btn.page);
    } else if (btn.action === 'refresh') {

    }
  }

  private goBack() {
    this.router.navigateByUrl('/homescreen/homescreendetail');
    return;
    if (this.child.form.pristine) {
      this.location.back();
    } else {
      this.modalPopupService.openConfirmationModal(
        'Cofirm', 'Do you want to discard all unsaved changes?', null, null, null
      ).subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.location.back();
        }
      });
    }
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
      disabled: false,
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
      options: [ {
        label: 'Male',
        value: 'Male'
      }, {
        label: 'Female',
        value: 'Female'
      } ],
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
      format: '000000',
      validations: {
        required: true
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
      format: '00-000-00',
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
      format: '000-000-000',
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
        required: true,
      },
      formAttributes: {
        change: this.handleCustomEvents,
        focus: this.handleCustomEvents,
        blur: this.handleCustomEvents
      },


    };
    let config = {
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
    config = this.updateFormConfig(config, this.local.formConfig);
    return config;
  }

  public PatientInformationDetailFormInitComplete(form: any) {
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
      return;
    }
    this.infolabel = expressions.compile('')(data);
    if (!this.route.snapshot.params.id && !this.id) {
      this.id = data.sid;
      this.location.replaceState(this.location.path() + "?id=" + data.sid);
    }

    let pagespec = '';
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
  }

  private getData() {
    if (!this.id) {
      return;
    }

    const params = {
      sid: this.id
    };

    this.patientInformationService.getPatientInformationBySid(params).subscribe((response: any) => {
      this.child.form.patchValue(response);
      this.appGlobalService.write('patientInfo', response);
      this.responseDataManipulation(response);
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

  private saveDataThenFiles(method, splittedData, saveFiles?: boolean) {
    let service;
    if (!splittedData.data.status) {
      splittedData.data.status = 'Risk score to be calculated';
    }
    if (method === 'post') {
      service = this.patientInformationService.createPatientInformation(splittedData.data);

    } else if (method === 'put') {
      if (!splittedData.data.sid) {
        splittedData.data.sid = this.id;
      }
      service = this.patientInformationService.updatePatientInformation(splittedData.data);


    }
    service.subscribe(res => {
      if (saveFiles) {
        const data = { ...splittedData.data, ...res };
        splittedData.data = data;
        this.child.form.markAsPristine();
        this.saveAddedFiles(splittedData);
      }
      this.appGlobalService.write('patientInfo', res);
      this.responseDataManipulation(res, false);
    });
  }


  private saveData() {
    const submitButton: HTMLButtonElement = this.child.submitButton.nativeElement;
    submitButton.click();
    if (!this.child.form.valid) {
      return;
    }
    const splittedData = this.utilService.splitFileAndData(this.child.form.value, this.fileFields);
    splittedData.data.patientEmail = this.appGlobalService.get('currentUser').email;
    const saveData = this.validateDataBeforeSave(splittedData.data);
    if (!saveData) {
      return;
    }

    if (this.id) {
      if (splittedData.files) {
        this.saveDataThenFiles('put', splittedData, true);
      } else {
        this.saveDataThenFiles('put', splittedData, false);
      }
    } else {
      if (splittedData.files) {
        this.saveDataThenFiles('post', splittedData, true);
      } else {
        this.saveDataThenFiles('post', splittedData, false);
      }
    }

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
        const createSubscriber = this.patientInformationService.createPatientInformation(this.id);
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
        const updateSubscriber = this.patientInformationService.updatePatientInformation(this.id);
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
        const deleteSubscriber = this.patientInformationService.deletePatientInformation(this.id);
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

  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
    this.id = this.route.snapshot.params.id || this.appGlobalService.get('currentUser').email;
    this.actionBarconf = this.actionBarConfiguration();
    this.workflowActionBarconf = this.workflowActionBarConfiguration();
    this.captionbarconf = this.captionbarConfiguration();
    this.pagename = 'PATIENT_INFORMATION_DETAIL';
    this.getData();
    this.formConfig = this.getFormConfig(this.getSecurityJSON());
    this.setFileFields();
  }

}
