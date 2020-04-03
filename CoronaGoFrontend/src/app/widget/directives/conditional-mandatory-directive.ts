import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, Validators } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mandatoryCondition][formControlName],[mandatoryCondition][formControl],[mandatoryCondition][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConditionalMandatoryDirective, multi: true }]
})
export class ConditionalMandatoryDirective implements Validator {
  @Input() mandatoryCondition: any;

  compare(lhs, operator, rhs) {
    switch (operator) {
      // tslint:disable-next-line:triple-equals
      case '==': return lhs.toString() == rhs.toString();
      case '===': return lhs === rhs;
      // tslint:disable-next-line:triple-equals
      case '!=': return lhs != rhs;
      case '!==': return lhs !== rhs;
      case '>': return lhs > rhs;
      case '<': return lhs < rhs;
      case '>=': return lhs >= rhs;
      case '<=': return lhs <= rhs;
      default: return true;
    }
  }

  compareAndSetValidity(c, value, operator, rhs) {
    const validators = c.validatorList;
    if (this.compare(value, operator, rhs) && !c.value) {
      if (validators && validators.length) {
        c.setValidators(Validators.required);
      } else {
        c.setValidators(Validators.required);
      }
      c.setErrors({ mandatoryCondition: true });
    } else {
      if (c && c.errors && c.errors.mandatoryCondition) {
        c.setValidators(null);
        c.setErrors(null);
        delete c.errors.mandatoryCondition;
      }
    }
  }

  getLhsOperRhs(rule: string): any {
    const conditionSplitterRegex = new RegExp('([\\w]+(\\s)*)(==|!=|<|>|<=|>=){1,1}((\\s)*[\\w]+)');
    const tempSplit = rule.split(conditionSplitterRegex);
    const finalSplit = tempSplit.filter(item => !!item.trim());
    return {
      lhs: finalSplit[0].trim(),
      operator: finalSplit[1].trim(),
      rhs: finalSplit[2].trim()
    }
  }

  validate(c: FormControl): { [key: string]: any } {
    const v = c.value;

    if (!this.mandatoryCondition) { return null; }

    //const { lhs, operator, rhs } = this.mandatoryCondition;

    const { lhs, operator, rhs } = this.getLhsOperRhs(this.mandatoryCondition);



    const srcElem = c.root.get(lhs);

    srcElem.valueChanges.subscribe(val => {
      this.compareAndSetValidity(c, val, operator, rhs);
    });

    c.valueChanges.subscribe(val => {
      this.compareAndSetValidity(c, srcElem.value, operator, rhs);
    });

    return (this.compare(srcElem.value, operator, rhs)) ? { mandatoryCondition: true } : null;
  }
}
