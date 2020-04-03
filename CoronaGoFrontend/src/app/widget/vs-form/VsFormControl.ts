import { FormControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';

export class VsFormControl extends FormControl {
  private _validatorList: any;

  // tslint:disable-next-line:max-line-length
  constructor(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super();
  }

  get validatorList(): any {
    return this._validatorList;
  }

  set validatorList(validators) {
    this._validatorList = validators;
  }


}
