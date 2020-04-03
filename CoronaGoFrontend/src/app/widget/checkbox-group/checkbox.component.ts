import { Component, Input, Host } from '@angular/core';
import { CheckboxGroupComponent } from './checkbox-group.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'checkbox',
  template: `
    <div (click)="toggleCheck()" class="d-inline-block custom-checkbox">
      <label [for]="value" class="form-checkbox-element">
        <input type="checkbox" [checked]="isChecked()" class="custom mt-2" [id]="value" [disabled]="isDisabled()"/>
        <label class="field-label pl-3" [innerHtml]="option.label | titlecase"></label>
      </label>
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./checkbox-group.scss']
})
export class CheckboxComponent {
  @Input() value: any;
  @Input() option: any;


  constructor(@Host() private checkboxGroup: CheckboxGroupComponent) { }

  toggleCheck() {
    this.checkboxGroup.addOrRemove(this.value);
  }

  isChecked() {
    return this.checkboxGroup.contains(this.value);
  }

  isDisabled() {
    return this.checkboxGroup.disabled;
  }
}
