import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SearchService } from './search.service';
import { Component, OnInit, Input, Output, EventEmitter, forwardRef, enableProdMode, HostListener, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';

import expressions from 'angular-expressions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vs-autosuggest',
  templateUrl: './vs-autosuggest.component.html',
  styleUrls: ['./vs-autosuggest.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => VsAutosuggestComponent),
    }
  ]
})
export class VsAutosuggestComponent implements OnInit, AfterViewInit {

  /**
   * Handle all input parameters
   */
  @Input() url: string;
  @Input() options: any[];
  @Input() displayField: string;
  @Input() valueField: string;
  @Input() multiple: boolean | string = false;
  @Input() hasCheckbox: boolean = false;
  @Input() label: string;
  @Input() id: string;
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() isDisabled: boolean = false;
  @Input() searchOnFocus: boolean | string = false;
  @Input() infiniteScroll: boolean | string = true;

  /**
   * Fire method to parent component on item select
   */
  @Output() onSelectItem: EventEmitter<any> = new EventEmitter();

  /**
   * Fire method to parent on load completion of the component
   */
  @Output() initcallback: EventEmitter<any> = new EventEmitter();

  /**
   * Handles the result array from the search
   */
  results: any[] = [];

  /**
   * Attach the input control
   */
  queryField: FormControl = new FormControl();

  /**
   * Use expression to format the display field.
   * Similar to $parse
   */
  displayFormatter;

  /**
   * Use expression to format the value field.
   * Similar to $parse
   */
  valueFormatter;

  /**
   * variable to show or hide the dropdown
   */
  showDropdown: boolean = false;

  /**
   *
   */
  isSetValueOnSelect: boolean = false;
  _id: string;

  /**
   * default queryparams for search request
   */
  pgNo: number = 0;
  pgLen: number = 50;
  searchText: string;

  /**
   * list of all selected items.
   * used only if 'multiple' or 'hascheckbox' is true
   */
  selItems: any[] = [];

  constructor(private searchService: SearchService) { }

  /**
   * Method to listen for click event outside of the dropdown or input
   * If click is outside, hide the dropdown
   */
  @HostListener('document:click', ['$event'])
  onclick(e: Event) {
    if (!(<HTMLInputElement>e.target).closest('.filter-wrapper')) {
      this.showDropdown = false;
    }
  }

  /**
   * Format the display name in the dropdown according to the given configuration
   * @param option
   */
  formatDisplayName = (option) => {
    return this.displayFormatter(option);
  }

  /**
   * Format the value in the input according to the given configuration
   * @param option
   */
  formatValueField = (option) => {
    return this.valueFormatter(option);
  }

  /**
   * Used for multiselect dropdown
   * Check if the selected item is already in the list of already selected items.
   * if yes, reject the selection
   *
   * @param item
   */
  checkForDuplicate(item) {
    for (const obj of this.selItems) {
      if (obj.id === item.id) {
        return true;
        break;
      }
    }
    return false;
  }

  /**
   * Handle the selection of item from the dropdown
   * If 'multiple' is true, add it to the list and send the list to parent
   *
   * If not 'multiple', then set the selected value in the input and send it to parent
   * @param item
   */
  selectItem = (item) => {
    if (this.multiple == true || this.multiple == 'true') {
      this.queryField.setValue('');
      if (!this.checkForDuplicate(item)) {
        this.selItems.push(item);
        this.onSelectItem.emit(this.selItems);
      }
    } else {
      this.queryField.setValue(this.formatValueField(item));
      this.onSelectItem.emit(item);
    }
    this.showDropdown = false;
    this.isSetValueOnSelect = true;
  }

  /**
   * Applicable only if 'hasCheckbox' is true
   *
   * Method to handle when user clicks on the checkbox
   *
   * If checked is true, add it to the list
   * If checked is false, remove it from the list
   *
   * @param e:Event
   * @param item:any{}
   */
  handleCheckboxChange = (e, item) => {
    if (e.currentTarget.checked) {
      if (!this.checkForDuplicate(item)) {
        this.selItems.push(item);
        this.onSelectItem.emit(this.selItems);
      }
    } else {
      const afterRemove = this.removeItem(item);
      this.selItems = afterRemove;
      this.onSelectItem.emit(this.selItems);
    }
    e.stopPropagation();
  }

  /**
   * Applicable only if 'hasCheckbox' or 'multiple' is true
   *
   * Method to remove item from the list of items
   *
   * @param item: any{}
   */
  removeItem = (item) => {
    const filteredItems: any[] = this.selItems.filter((sItem) => {
      return sItem.id != item.id;
    });
    return filteredItems;
  }

  /**
   * Method called when user clicks on remove(X) on the list of selected items
   *
   * @param item: any{}
   */
  deleteItem = (item) => {
    this.selItems = this.removeItem(item);
  }

  /**
   * Method to handle the keydown event in the input
   */
  handleKeyDown = () => {
    this.isSetValueOnSelect = false;
    this.fireRequest();
  }

  /**
   * Set id of the control.
   * If id is sent from parent, use it, otherwise generate id
   */
  setId = () => {
    this._id = this.id ? this.id : this.formControlName + Math.round(Math.random() * 9999);
  }


  /**
   * Attach value change listener to input
   * When value changes, fire request to server with searchText, pgNo, and pgLength
   */
  attachListenerForValueChanges = () => {
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
          if (result['status'] === 400) return;
          this.results = result;
          if (this.results && !this.isSetValueOnSelect) {
            this.showDropdown = true;
          }
        });
    } else if (this.options) {
      this.results = this.options;
      this.queryField.valueChanges
        .distinctUntilChanged()
        .subscribe((result: any) => {
          if (!result) { return []; }
          this.results = this.options.filter( (option) => {
            return option[this.displayField].toLowerCase().indexOf(result.toLowerCase()) > -1;
          });
        });
    }
  }

  /**
   * Method to handle the scroll inside the autocomplete dropdown
   *
   * If scroll nears the bottom, fire the next page request
   *
   * @param e:ScrollEvent
   */
  handleScroll = (e) => {
    const elem = e.target;
    if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight - (elem.scrollHeight * 10 / 100)) {
      this.fireRequest();
    }
  }

  /**
   * Handle focus on the input
   *
   * If 'searchOnFocus' is true, fire search request immediately
   *
   * Default to false
   */
  handleFocus = () => {
    if (this.searchOnFocus == true || this.searchOnFocus == 'true') {
      this.pgNo = 0;
      this.fireRequest();
    }
  }

  /**
   * Method to fire request to get the list of options for autocomplete
   */
  fireRequest = () => {
    if (this.url) {
      this.pgNo++;
      var query = '?q=' + (this.searchText || '') + '&pgNo=' + this.pgNo + '&pgLen=' + this.pgLen;
      this.searchService.search(this.url, query)
        .subscribe((result: any) => {
          if (result['status'] === 400) return;

          this.results = [...this.results, ...result];
          this.showDropdown = true;
        })
    } else {
      this.results = this.options.filter((option) => {
        return option[this.displayField].indexOf(this.searchText) > -1 || option[this.valueField].indexOf(this.searchText) > -1;
      });
      this.showDropdown = true;
    }
  }

  /**
   * Method to automatically check the checkbox if item is present in list of selected items
   *
   * @param item: any{}
   */
  isChecked = (item) => {
    if (!item) return false;
    var found = this.selItems.some((res) => {
      return item.id == res.id;
    });

    return found;
  }

  /**********************************************************************
  *                  Control Value Accessor Methods                     *
  ***********************************************************************/

  public writeValue(val: any) {
    this.formControlName = val;
  }

  public registerOnChange(fn: any): void {
    //this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    //this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {

  }

  /**********************************************************************/

  ngOnInit() {

    this.displayFormatter = expressions.compile(this.displayField);
    this.valueFormatter = expressions.compile(this.valueField);
    this.attachListenerForValueChanges();

  }

  /**
   * Hook after the component is fully initialized.
   * Can call the callback method of parent if needed
   */
  ngAfterViewInit(): void {
    this.initcallback.emit();
  }
}
