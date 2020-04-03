import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customMax][formControlName],[customMax][formControl],[customMax][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomMaxDirective, multi: true }]
})
export class CustomMaxDirective implements Validator {
  @Input()
  customMax: number;

  validate(c: FormControl): { [key: string]: any } {
    const v = c.value;

    c.valueChanges.subscribe(val => {

      if (val && val > this.customMax) {
        c.setErrors({ customMax: true });
      }
    });

    // tslint:disable-next-line:object-literal-key-quotes
    return (v && v > this.customMax) ? { 'customMax': true } : null;
  }
}
