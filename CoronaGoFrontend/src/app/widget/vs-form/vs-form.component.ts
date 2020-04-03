import { Component, OnInit, Input, ViewChild, Output, ElementRef, ViewEncapsulation, HostListener, OnChanges, ComponentFactoryResolver, Injector, ApplicationRef, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, ValidationErrors } from '@angular/forms';
import { cleanSession } from 'selenium-webdriver/safari';
import { NgbDateStruct, NgbCalendar, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { UtilService } from '@app/core/util.service';
import { VsFormControl } from './VsFormControl';
import { NotificationService } from '@app/shared/services/notification.service';
import { FormStaticSecurityService } from './form-static-security.service';
import { FormTabsComponent } from '../form-tabs/form-tabs.component';
import * as _ from 'lodash';
import { CustomTabService } from '@app/custom/custom-tab/custom-tab.service';
import { ComponentCanDeactivate } from './ComponentCanDeactivate';
import { AppConstants } from '@app/app-constants';

@Component({
  selector: 'app-vs-form',
  templateUrl: './vs-form.component.html',
  styleUrls: ['./vs-form.component.scss']
})

export class VsFormComponent implements OnInit, OnChanges {

  @Input() formConfig: any;
  @Input() formData: any;
  @Input() formModalChange: (data: any, resMeth: any) => void;


  @ViewChild('formRef') formRef: FormGroupDirective;
  @ViewChild('submitButton') submitButton: ElementRef<HTMLButtonElement>;

  @Output() formButtonClick = new EventEmitter();

  form: FormGroup;
  formGroup: any = [];
  unsubcribe: any;
  layoutData: any;
  bootStrapCol: any;
  workFlowMatrixJson: any;
  tabControls: any = [];
  backupData: any;
  isInlineForm = false;
  isMobile: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private notification: NotificationService,
    private staticSecurityService: FormStaticSecurityService,
    private customTab: CustomTabService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) { }

  public isRequired(validators, control?) {
    if (validators && validators.required && this.utilService.getBoolean(validators.required)) {
      return true;
    }
    return false;
  }

  private getPatternValidations(validators) {

    return validators.accepted_characters ? new RegExp(validators.accepted_characters) : new RegExp(validators.not_accepted_characters);
  }

  private setAllValidations(control: any) {
    const validations = [];
    const validators = control.validations || {};
    if (this.isRequired(validators) && !validators.mandatory_Condition) {
      validations.push(Validators.required);
    }
    if (validators.max_length && control.type !== 'number') { validations.push(Validators.maxLength(validators.max_length)); }
    if (validators.min_length && control.type !== 'number') { validations.push(Validators.minLength(validators.min_length)); }
    if (validators.max_value) { validations.push(Validators.max(validators.max_value)); }
    if (validators.min_value) { validations.push(Validators.min(validators.min_value)); }
    if (validators.accepted_characters || validators.not_accepted_characters) {
      validations.push(Validators.pattern(this.getPatternValidations(validators)));
    }

    if (control.type === 'email') { validations.push(Validators.email); }

    return validations;
  }

  private setFormControl(data) {
    if (data.length > 0) {
      data.map((item: any) => {
        if (item.name) {
          const allValidations = this.setAllValidations(item);
          const name = this.getFieldName(item.type, item.name);
          const isDisabled = item.disabled || item.disableRights;
          if (name instanceof Object === true) {
            for (const key in name) {
              if (name.hasOwnProperty(key)) {
                this.formGroup[name[key]] = new FormControl({ value: '', disabled: isDisabled }, allValidations);
              }
            }
          } else if (item.type === 'tab') {
            const controls = this.getAllControls(item);
            controls.map(ctrl => {
              if (ctrl.type !== 'tab' && ctrl.type !== 'childList' && ctrl.type !== 'customelement') {
                this.formGroup[ctrl.name] = new FormControl({ value: '', disabled: ctrl.disabled || ctrl.disableRights }, allValidations);
              }
            });
          } else if (!item.hasOwnProperty('items') && item.type !== 'childList' && item.type !== 'customelement') {
            this.formGroup[item.name] = new FormControl({ value: '', disabled: isDisabled }, allValidations);
            this.formGroup[item.name].validatorList = allValidations;
          }


        }
        if (item.items && item.items.length > 0) {
          this.setFormControl(item.items);
        }

        if (item.tabs && item.tabs.length > 0) {
          this.setFormControl(item.tabs);
        }

      });
    }
  }

  private getElementsRecursively(element) {

    if (element.name && !element.hasOwnProperty('items')) {
      if (element.name.indexOf('__tab') === -1) {
        this.tabControls.push(element);
      }
    }
    if (element.items) {
      element.items.map(elem => {
        this.getElementsRecursively(elem);
      });
    }
    if (element.tabs) {
      element.tabs.map(elem => {
        this.getElementsRecursively(elem);
      });
    }
    if (element.form && element.form.items) {
      element.form.items.map(elem => {
        this.getElementsRecursively(elem);
      });
    }
    if (element instanceof Array) {
      element.map(elem => {
        this.getElementsRecursively(elem);
      });
    }

  }

  private getAllControls(element) {
    console.log(element);
    this.tabControls = [];
    const items = element.tabs.map(tab => {
      return tab.items;
    });
    this.getElementsRecursively(items);

    return this.tabControls;
  }

  private setFormData() {
    if (this.formData) {
      this.form.patchValue(this.formData);
    }
  }

  submitForm(f: FormGroup) {
    this.getFormValidationErrors();
    console.log(f.value);
  }

  isOptionsWithObject(options: Array<any>): boolean {
    return options && options[0].name && options[0].value ? true : false;
  }

  getSelectedOption(name, options) {
    if (!this.formData[name]) {
      this.formData[name] = options[0];
      this.form.patchValue({
        [name]: options[0]
      });
      return options[0];
    }
    return this.formData[name];
  }

  collapseClick(data, eve) {
    if (data.collapsible) {
    }
  }

  handleTabChange(event: NgbTabChangeEvent) {
    console.log('tab changed');
    this.customTab.handleTabChange(event);
  }

  getDefaultSelectedValue(fieldName, options) {
    if (this.form.value[fieldName]) {
      return this.form.value[fieldName];
    }
    return options[0];
  }

  getFieldName(type, modelName) {
    switch (type) {
      case 'currency':
        return {
          code: `${modelName}Currency`,
          value: `${modelName}Value`
        };
      default:
        return modelName;
    }
  }

  getFieldLabel(field) {
    const elem = document.querySelectorAll(`label[for=${field}]`)[0];
    if (!elem) { return field; }
    return elem.textContent.replace(/[*]/g, '');
  }

  getFieldLabelForMandatoryCondition(condition) {
    const conditionSplitterRegex = new RegExp('([\\w]+(\\s)*)(==|!=|<|>|<=|>=){1,1}((\\s)*[\\w]+)');
    const tempSplit = condition.split(conditionSplitterRegex);
    const finalSplit = tempSplit.filter(item => !!item.trim());

    const operatorString = {
      '==': 'is',
      '===': 'is',
      '!=': 'is not',
      '!==': 'is not',
      '<': 'is less than',
      '>': 'is greater than',
      '<=': 'is less & equal to',
      '>=': 'is greater & equal to'
    };

    const boolToString = {
      'true': 'Yes',
      'false': 'No'
    };

    return {
      lhs: finalSplit[0].trim(),
      operator: operatorString[finalSplit[1].trim()],
      rhs: boolToString[finalSplit[2].trim()] ? boolToString[finalSplit[2].trim()] : finalSplit[2].trim()
    };
  }

  getErrorLabel(error) {
    switch (error) {
      case 'mandatoryCondition':
        return 'not matching its mandatory condition';
      case 'customMax':
      case 'max':
        return 'not matching its max-value condition';
      case 'customMin':
      case 'min':
        return 'not matching its min-value condition';
      case 'maxLength':
      case 'max_length':
      case 'maxlength':
        return 'not matching its max-length condition';
      case 'minLength':
      case 'min_length':
      case 'minlength':
        return 'not matching its min-length condition';
      case 'pattern':
        return 'not matching its accepted pattern';
      case 'email':
        return 'not valid';
      default:
        return error;
    }
    return error;
  }

  getFormValidationErrors() {
    const finalArr = [];
    const allErrors = {};
    console.log(this.form.controls);
    Object.keys(this.form.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          if (!allErrors[keyError]) { allErrors[keyError] = []; }
          allErrors[keyError].push(this.getFieldLabel(key));
        });
      }
    });

    for (const error in allErrors) {
      if (allErrors.hasOwnProperty(error)) {
        const element = allErrors[error];
        finalArr.push(`${allErrors[error].join(', ')} ${allErrors[error].length > 1 ? 'are' : 'is'} ${this.getErrorLabel(error)}`);
      }
    }

    this.notification.error(finalArr.join(', '));
  }

  getSwitchCaseForDate(type) {
    const dTypes = ['date', 'month', 'year', 'datetime', 'time'];
    const index = dTypes.indexOf(type);
    return dTypes[index];
  }
	/**
   * Method to add spacing for each sections
   * @param index
   * @param section/field object
   */
  applyPaddSpace(index, elem) {
    let retVal = 'p-0';
    if (elem.name) {
      retVal = 'p-1 pl-2 pr-2';
    }
    return retVal;
  }
  /**
   * Method to calculate section and subsections width
   * @param layoutData - layout object
   * @param totalColumns - Number of bootstrap columns
   * @param isShareExcess
   * @param disabledForm - Form enable/disable flag
   */
  calculateLayout(layoutData, totalColumns, isShareExcess, disabledForm) {
    if (!layoutData) {
      return;
    }
    totalColumns = totalColumns || 1;
    const totalGroups = layoutData.length;
    let field;
    let totalGroupWidth = 0;
    let layoutWidth;
    const loopCount = Math.floor(totalGroups / totalColumns); // <Number
    for (let index = 0, totalFullGroup = (loopCount * totalColumns); index < totalGroups; index++) {
      field = layoutData[index];
      if (!isShareExcess || index < totalFullGroup) {

        if ((index + 1) % totalColumns !== 0) {
          layoutWidth = Math.floor(12 / totalColumns);
          totalGroupWidth += layoutWidth;
        } else {
          layoutWidth = 12 - totalGroupWidth;
          totalGroupWidth = 0;
        }

      } else {

        const remaining = totalGroups - totalFullGroup;
        if (remaining > 1) {
          layoutWidth = Math.floor(12 / remaining);
          totalGroupWidth += layoutWidth;
        } else {
          layoutWidth = 12 - totalGroupWidth;
          totalGroupWidth = 0;
        }
      }
      field.columnsWidth = layoutWidth;
      field.padSpace = this.applyPaddSpace(index, field);
      if (field.type === 'tab') {
        if (field.tabs && field.tabs.length > 0) {
          for (const tab in field.tabs) {
            if (field.tabs.hasOwnProperty(tab)) {
              this.calculateLayout(field.tabs[tab].items, this.bootStrapCol[field.tabs[tab].columns], false, disabledForm);
            }
          }
        }
      } else {
        this.calculateLayout(field.items, this.bootStrapCol[field.columns], false, disabledForm);
      }
      if (totalGroupWidth === 0 && layoutData[index + 1]) {
        layoutData[index + 1].nextRow = true;
      }
    }
  }
  /**
   * Method is to build form layout
   * @param layoutData - layout object
   */
  buildLayout(layoutData) {
    if (!layoutData) {
      return;
    }
    this.layoutData = layoutData;

    if (layoutData.securityEvaluation !== false && layoutData.staticSecurityJson) {
      this.workFlowMatrixJson = layoutData.staticSecurityJson;
      // tslint:disable-next-line:max-line-length
      const layoutWithSecurity = this.staticSecurityService.evaluateSecurityRights(layoutData.groups, this.workFlowMatrixJson, layoutData.disabledForm);
      console.log(layoutWithSecurity);
      this.calculateLayout(layoutData.groups, this.bootStrapCol[layoutData.columns], true, layoutData.disabledForm);
      this.setFormControl(this.layoutData.groups);
    } else {
      this.calculateLayout(layoutData.groups, this.bootStrapCol[layoutData.columns], true, layoutData.disabledForm);
      this.setFormControl(this.layoutData.groups);
    }
  }

  loadSubTable(element, parent) {
    const detailTarget = document.getElementById(parent);
    const componentName = element.component; // this.gridConfig.mobileTemplate;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentName);
    const componentRef = componentFactory.create(this.injector, [], detailTarget);
    // this.app.attachView(componentRef.hostView);
    return componentRef.hostView;
  }

  ngOnInit() {
    this.isMobile = AppConstants.isMobile;
    this.bootStrapCol = { 100: 1, 75: 1.33, 50: 2, 33: 3, 25: 4 };
    this.buildLayout(this.formConfig);
    //     this.setFormControl(this.layoutData.groups);
    this.form = this.formBuilder.group(this.formGroup);
    if (this.formConfig && this.formConfig.initCallback && typeof this.formConfig.initCallback === 'function') {
      this.formConfig.initCallback(this.form);
    }
    this.setFormData();
    this.backupData = { ...this.form.value };


    /* if (this.form) {
      this.unsubcribe = this.form.valueChanges.subscribe((data) => {
        this.formModalChange(data, res => {
          this.form.patchValue(res, { emitEvent: false, onlySelf: true });
        });
      });
    } */
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log(changes);
    this.isMobile = AppConstants.isMobile;
    this.bootStrapCol = { 100: 1, 75: 1.33, 50: 2, 33: 3, 25: 4 };
    this.buildLayout(this.formConfig);
    this.form = this.formBuilder.group(this.formGroup);
    if (this.formConfig && this.formConfig.initCallback && typeof this.formConfig.initCallback === 'function') {
      this.formConfig.initCallback(this.form);
    }
    this.setFormData();
    this.backupData = { ...this.form.value };
  }

  handleFormBtnClick(element) {
    let details = {
      data: this.form.value,
      action: element,
      form: this.form
    }
    this.formButtonClick.emit(details);
    console.log(element);
  }

  ngDestroy() {
    this.unsubcribe();
  }
}
