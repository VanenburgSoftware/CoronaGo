import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { VsSearchService } from './vs-search.service';
import { VsFormComponent } from '../vs-form/vs-form.component';

@Component({
  selector: 'app-vs-search',
  templateUrl: './vs-search.component.html',
  styleUrls: ['./vs-search.component.scss']
})
export class VsSearchComponent implements OnInit {

  @Input() searchconfig;
  public showAdvancedSearch: boolean;
  public searchFormConfig: any;
  public data: any = {};
  public search: boolean;

  @ViewChild(VsFormComponent) child;
  @ViewChild('globalSearch') gsearch;

  constructor(
    private searchService: VsSearchService
  ) { }

  getSearchFormConfig() {
    const searchConfig = {
      initCallback: 'IncidentsDetailFormInitComplete',
      collapsible: false,
      submit: 'saveBasicDetails',
      class: 'no-margin form-elements-group',
      securityEvaluation: false,
      staticSecurityJson: {},
      disabledForm: false,
      columns: 100,
      groups: [
        {
          groupHeaderClass: 'hidden hidden',
          groupContentClass: 'paddingZero',
          collapsible: 'false',
          columns: '50',
          label: '',
          disableRights: false,
          columnsWidth: 12,
          items: this.searchconfig.advSearch
        }
      ]
    };
    return searchConfig;
  }

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  searchGrid() {
    this.searchService.changeAdvSearchObj(this.child.form.value);
    this.search = true;
    this.toggleAdvancedSearch();
  }

  cancelSearch() {
    this.toggleAdvancedSearch();
  }

  clearSearch() {
    if (this.child) {
      this.child.form.patchValue({});
    }
    this.search = false;
    this.data = {};
  }

  clearAllFilters() {
    console.log(this.gsearch.nativeElement);
    this.gsearch.nativeElement.value = '';
    this.searchService.changeGlobalSearchKey('');
    this.clearSearch();
    this.showAdvancedSearch = false;
    this.search = false;
  }

  ngOnInit() {
    this.showAdvancedSearch = false;
    if (this.searchconfig && this.searchconfig.advSearch) {
      this.searchFormConfig = this.getSearchFormConfig();
    }
  }

  public onKeydown(event: any) {
    if (event.which === 13 || event.keyCode === 13) {
      this.search = true;
      this.searchService.changeGlobalSearchKey(event.target.value);
    }
  }

}
