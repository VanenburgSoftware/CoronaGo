import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, Validators } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[disableCondition][formControlName],[disableCondition][formControl],[disableCondition][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConditionalDisableDirective, multi: true }]
})
export class ConditionalDisableDirective implements Validator {
  @Input() disableCondition: any;

  compare(lhs, operator, rhs) {
    switch (operator) {
      // tslint:disable-next-line:triple-equals
      case '==': return lhs == rhs;
      case '===': return lhs === rhs;
      // tslint:disable-next-line:triple-equals
      case '!=': return lhs != rhs;
      case '!===': return lhs !== rhs;
      case '>': return lhs > rhs;
      case '<': return lhs < rhs;
      case '>=': return lhs >= rhs;
      case '<=': return lhs <= rhs;
      default: return true;
    }
  }

  compareAndSetDisabled(c, value, operator, rhs) {
    const validators = c.validatorList;
    if (this.compare(value, operator, rhs) && !c.value) {
     c.disable();
    } else {
      c.enable();
    }
  }

  validate(c: FormControl): { [key: string]: any } {
    const v = c.value;

    if (!this.disableCondition) { return null; }

    const { lhs, operator, rhs } = this.disableCondition;

    const srcElem = c.root.get(lhs);

    srcElem.valueChanges.subscribe(val => {
      this.compareAndSetDisabled(c, val, operator, rhs);
    });

    c.valueChanges.subscribe(val => {
      this.compareAndSetDisabled(c, srcElem.value, operator, rhs);
    });

    return (this.compare(srcElem.value, operator, rhs)) ? { mandatoryCondition: true } : null;
  }
}
