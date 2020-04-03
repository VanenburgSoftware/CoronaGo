import { Component, OnInit, forwardRef, Input, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import expressions from 'angular-expressions';
import { SearchService } from './search.service';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import { Subject, of } from 'rxjs';
import { element } from '@angular/core/src/render3';
import { UtilService } from '@app/core/util.service';
import { NotificationService } from '@app/shared/services/notification.service';
import { BaseService } from '@app/core/base.service';
import { ApiConstants } from '@app/api-constants';
import { AppConstants } from '@app/app-constants';

@Component({
  selector: 'app-vs-autocomplete',
  templateUrl: './vs-autocomplete.component.html',
  styleUrls: ['./vs-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VsAutocompleteComponent),
      multi: true
    }
  ]
})
export class VsAutocompleteComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input() url: string;
  @Input() options: Array<any>;
  @Input() displayField: string;
  @Input() valueField: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() isDisabled: boolean | string = false;
  @Input() isMultiple: boolean | string = false;
  @Input() hasCheckbox: boolean | string = false;
  @Input() searchOnFocus: boolean | string = false;
  @Input() infiniteScroll: boolean | string = true;
  @Input() valueType: string;

  // tslint:disable-next-line:variable-name
  private _model: any;
  private onChange: (m: any) => void;
  private onTouched: (m: any) => void;

  results: Array<any> = [];
  displayFormatter;
  valueFormatter;
  selectedValue: string = null;
  multiSelectedValue: string = null;
  selectedValues: Array<any> = [];
  queryField: FormControl = new FormControl();
  showDropdown = false;
  disabled: boolean;
  parsedFields: any = null;
  displayValue: {};
  userKeyed = false;

  /**
   * default queryparams for search request
   */
  pgNo = 0;
  pgLen = 50;
  searchText: string;

  constructor(private searchService: SearchService, private utilService: UtilService, private notification: NotificationService,
    private renderer: Renderer, private elementRef: ElementRef, private baseService: BaseService) { }

  @HostListener('document:click', ['$event'])
  onclick(e: Event) {
    if (!(e.target as HTMLInputElement).closest('.vs-autocomplete')) {
      this.showDropdown = false;
      this.resetValues();
    } else {
      const input = (e.target as any).querySelectorAll('input')[0];
      if (input) {
        input.focus();
      }
    }
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.userKeyed = true;
  }

  get model() {
    console.log('model ', this._model);
    return this._model;
  }

  writeValue(value: any): void {
    this.setValuesToAutoComplete(value);
    console.log('writeValue ', value);
    if (!value && this.isMultiple) {
      value = [];
    }
    this._model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  set(value: any) {
    console.log('set value ', value);
    this._model = value;
    this.onChange(this._model);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    this.disabled = isDisabled;
  }

  resetValues() {
    this.multiSelectedValue = null;
  }

  attachListenerForValueChanges() {
    if (this.url) {
      this.queryField.valueChanges
        .debounceTime(200)
        .distinctUntilChanged()
        .switchMap((query) => {
          this.searchText = query;
          this.pgNo = 0;
          const q = '?q=' + (this.searchText || '') + '&pgNo=' + this.pgNo + '&pgLen=' + this.pgLen;
          return this.searchService.search(this.url, q);
        })
        .subscribe((result: any) => {
          if (result.status === 400) {
            return;
          }
          this.results = result;
          if (this.results && this.searchText && this.userKeyed) {
            this.showDropdown = true;
            this.userKeyed = false;
          }
        });
    } else if (this.options) {
      this.queryField.valueChanges
        .distinctUntilChanged()
        .subscribe((val: any) => {
          this.results = this.options.filter((option: any) => {
            const regex = new RegExp(val, 'gi');
            const values = Object.values(option);
            return (values.filter((value: any) => {
              return (value as string).match(regex);
            })).length > 0;
          });
          this.showDropdown = Boolean(this.results && this.results.length && this.userKeyed);
          this.userKeyed = false;
        });
    }
  }

  validateNormalField(value): boolean {
    switch (this.valueType) {
      case 'email':
        return this.utilService.isValidEmail(value);
      case 'number':
        return this.utilService.isValidNumber(value);
      case 'url':
        return this.utilService.isValidUrl(value);
      default: return true;
    }
    return true;
  }

  updateNormalField(event) {
    event.preventDefault();
    console.log(event.currentTarget.value);
    const value = event.currentTarget.value;
    if (this.validateNormalField(value)) {
      this.selectedValues.push(value);
      this.multiSelectedValue = '';
    } else {
      this.notification.error('Value not matching its field type');
    }
    event.stopPropagation();
  }

  attachListenerForResponse(type) {
    if (this.url) {
      this.searchText = type === 'focus' ? '' : this.searchText;
      this.pgNo = type === 'focus' ? 0 : this.pgNo + 1;
      const q = '?q=' + (this.searchText || '') + '&pgNo=' + this.pgNo + '&pgLen=' + this.pgLen;
      this.searchService.search(this.url, q)
        .subscribe((result: any) => {
          if (result.status === 400) {
            return;
          }
          this.results = result;
          if (this.results) {
            this.showDropdown = true;
          }
        });
    } else if (this.options) {
      this.results = this.options;
    }
    this.showDropdown = true;
  }

  updateModel() {
    this._model = this.selectedValues.map((val) => {
      // return this.formatValueField(val);
      return {
        id: this.formatValueField(val),
        value: this.getDisplayValues(val)
      };
    });

    console.log('updateModel ', this._model);
    this.showDropdown = false;
  }

  getDisplayValues(item) {
    const returnItem = {};
    if (this.parsedFields) {
      this.parsedFields.map(field => {
        returnItem[field] = item[field];
        return field;
      });
    }
    return returnItem;
  }

  selectItem(item) {
    if (this.isMultiple) {
      if (!this.checkForDuplicateItem(item)) {
        this.selectedValues.push(item);
        this.updateModel();
      }
    } else {
      this.selectedValue = this.formatDisplayName(item);
      this.displayValue = this.getDisplayValues(item);
      // this._model = this.formatValueField(item);
      this._model = {
        id: this.formatValueField(item),
        value: this.displayValue
      };
    }
    this.showDropdown = false;
    this.resetValues();
    this.onChange(this._model);
  }

  removeItem(item) {
    this.selectedValues = this.selectedValues.filter((val) => {
      if (this.url || this.options) {
        return val[this.valueField] !== item[this.valueField];
      }
      return val !== item;
    });
    this.updateModel();
    this.onChange(this._model);
  }

  checkForDuplicateItem(item) {
    return Boolean((this.selectedValues.filter((val) => {
      return val[this.valueField] === item[this.valueField];
    })).length);
  }
  formatDisplayName = (option) => {
    if (this.url || this.options) {
      return this.displayFormatter(option);
    }
    return option;
  }

  formatValueField = (option) => {
    if (this.url || this.options) {
      return this.valueFormatter(option);
    }
    return option;
  }

  handleFocus(event: Event) {
    if (!this.searchOnFocus) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.attachListenerForResponse('focus');
  }

  handleScroll = (e) => {
    const elem = e.target;
    if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight - (elem.scrollHeight * 10 / 100)) {
      this.attachListenerForResponse('scroll');
    }
  }

  handleCheckboxChange = (e, item) => {
    if (e.currentTarget.checked) {
      this.selectItem(item);
    } else {
      this.removeItem(item);
    }
    this.showDropdown = true;
    e.stopPropagation();
  }

  isChecked = (item) => {
    if (!item) {
      return false;
    }
    const found = this.selectedValues.some((res) => {
      return item[this.valueField] === res[this.valueField];
    });

    return found;
  }

  fireSearchServiceToLoadData(item, type) {
    this.searchService.search(this.url, item).subscribe(res => {
      if (type === 'multiple') {
        this.selectedValues.push(res);
      } else {
        this.selectedValue = this.formatDisplayName(res);
      }
    });
  }

  setLookupValueToField(item, type) {
    if (type === 'multiple') {
      this.selectedValues.push(item.value);
    } else {
      this.selectedValue = this.formatDisplayName(item.value);
    }
  }

  setValuesToAutoComplete(items) {
    if (!items) {
      return;
    }
    if (this.url) {
      if (this.isMultiple) {
        items.forEach(item => {
          // this.fireSearchServiceToLoadData(item, 'multiple');

          this.setLookupValueToField(item, 'multiple');
        });
      } else {
        // this.fireSearchServiceToLoadData(items, 'single');

        this.setLookupValueToField(items, 'single');
      }
    } else if (this.options) {
      if (this.isMultiple) {
        this.options.forEach(option => {
          if (items.indexOf(option[this.valueField]) > -1) {
            this.selectedValues.push(option);
          }
        });
      } else {
        this.options.forEach(option => {
          if (items === option[this.valueField]) {
            this.selectedValue = this.formatDisplayName(option);
          }
        });
      }
    } else {
      this.selectedValues = items;
    }
    setTimeout(() => {
      this.showDropdown = false;
    }, 500);
  }

  getParsedExpression(field) {
    if (!field) { return; }
    const parsed = field.matchAll(/([a-zA-Z0-9_]*)+/g);
    const keys = [];
    let done = false;
    while (!done) {
      const cur = parsed.next();
      done = cur.done;
      if (cur.value && cur.value[0]) {
        keys.push(cur.value[0]);
      }
    }
    return keys;
  }

  ngOnInit() {
    if (this.url || (this.options && this.options.length)) {
      if (this.url) {
        if (/^(?:[a-z]+:)?\/\//i.test(this.url)) {
          this.url = this.url;
        } else {
          this.url = `/${AppConstants.apihost}/${this.url}`;
        }
      }

      this.parsedFields = this.getParsedExpression(this.displayField);
      this.displayFormatter = expressions.compile(this.displayField);
      this.valueFormatter = expressions.compile(this.valueField);
    } else {
      //this.updateNormalField = new Subject();
    }
    this.attachListenerForValueChanges();
    this.showDropdown = false;
  }

  ngAfterViewInit() {
  }

}
