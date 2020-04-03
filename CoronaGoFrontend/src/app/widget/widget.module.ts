import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { ContextMenuModule } from 'ngx-contextmenu';

import { VsTopbarComponent } from './vs-topbar/vs-topbar.component';
import { VsActionbarComponent } from './vs-actionbar/vs-actionbar.component';
import { VsCaptionbarComponent } from './vs-captionbar/vs-captionbar.component';
import { VsAutosuggestComponent } from './vs-autosuggest/vs-autosuggest.component';
import { VsGridComponent } from './vs-grid/vs-grid.component';
import { VsTabComponent } from './vs-tab/vs-tab.component';
import { RouterModule } from '@angular/router';
import { VsFormComponent } from './vs-form/vs-form.component';
import { VsMenuComponent } from './vs-menu/vs-menu.component';
import { VsNavItemComponent } from './vs-menu/vs-nav-item/vs-nav-item.component';
import { FormDateComponent } from './form-date/form-date.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { CheckboxComponent } from './checkbox-group/checkbox.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { InputLinkComponent } from './input-link/input-link.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { VsAutocompleteComponent } from './vs-autocomplete/vs-autocomplete.component';
import { FormAttachmentsComponent } from './form-attachments/form-attachments.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { NumericDirective } from './directives/numeric.directive';
import { CustomMinDirective } from './directives/custom-min-validator.directive';
import { CustomMaxDirective } from './directives/custom-max-validator.directive';
import { ConditionalMandatoryDirective } from './directives/conditional-mandatory-directive';
import { IsEllipsisActiveDirective } from './directive/is-ellipsis-active.directive';
import { FormAttributeDirective } from './directives/CustomAttributeDirective';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { CustomFormModule } from '@app/custom/custom_element/custom-element.module';
import { VsSearchComponent } from './vs-search/vs-search.component';
import { FormTabsComponent } from './form-tabs/form-tabs.component';
import { VsMultiselectComponent } from './vs-multiselect/vs-multiselect.component';
import { ConditionalDisableDirective } from './directives/conditional-disable-directive';
import { LayoutbuilderComponent } from './layoutbuilder/layoutbuilder.component';
import { VsKanbanComponent } from './vs-kanban/vs-kanban.component';
import { KanbanItemComponent } from './vs-kanban/kanban-item/kanban-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VsmenunewComponent } from './vsmenunew/vsmenunew.component';
import { VsmenunewitemComponent } from './vsmenunew/vsmenunewitem/vsmenunewitem.component';
import { VsReportsComponent } from './vs-reports/vs-reports.component';
import { VsScannerComponent } from './vs-scanner/vs-scanner.component'
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { VsFreehandComponent } from './vs-freehand/vs-freehand.component';
import { NgxMaskModule } from 'ngx-mask';
import { VsTabNewComponent } from './vs-tab-new/vs-tab-new.component';
import { VsTabNewItemComponent } from './vs-tab-new/vs-tab-new-item/vs-tab-new-item.component';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { VsErrorReporterComponent } from './vs-error-reporter/vs-error-reporter.component';
import { VsCollaborationComponent } from './vs-collaboration/vs-collaboration.component';
import { VsSchedulerComponent } from './vs-scheduler/vs-scheduler.component';


@NgModule({
  declarations: [
    VsTopbarComponent,
    VsActionbarComponent,
    VsCaptionbarComponent,
    VsAutosuggestComponent,
    VsGridComponent,
    VsTabComponent,
    ConditionalMandatoryDirective,
    ConditionalDisableDirective,
    VsFormComponent,
    VsMenuComponent,
    VsNavItemComponent,
    FormDateComponent,
    DateRangeComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    ImageUploaderComponent,
    InputLinkComponent,
    FileUploaderComponent,
    VsAutocompleteComponent,
    FormAttachmentsComponent,
    NumericDirective,
    CustomMinDirective,
    CustomMaxDirective,
    IsEllipsisActiveDirective,
    FormAttributeDirective,
    InputNumberComponent,
    InputCurrencyComponent,
    ImageCarouselComponent,
    ModalPopupComponent,
    VsSearchComponent,
    FormTabsComponent,
    VsMultiselectComponent,
    LayoutbuilderComponent,
    VsKanbanComponent,
    KanbanItemComponent,
    VsmenunewComponent,
    VsmenunewitemComponent,
    VsReportsComponent,
    VsScannerComponent,
    VsFreehandComponent,
    VsTabNewComponent,
    VsTabNewItemComponent,
    VsErrorReporterComponent,
    VsCollaborationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    RouterModule,
    ContextMenuModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    CustomFormModule,
    DragDropModule,
    ZXingScannerModule,
    BarecodeScannerLivestreamModule,
    NgxMaskModule.forRoot({})
  ],
  exports: [
    TranslateModule,
    NgbModule,
    VsTopbarComponent,
    VsActionbarComponent,
    VsCaptionbarComponent,
    VsAutosuggestComponent,
    VsGridComponent,
    VsTabComponent,
    ConditionalMandatoryDirective,
    ConditionalDisableDirective,
    VsFormComponent,
    VsMenuComponent,
    VsNavItemComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    VsAutocompleteComponent,
    ModalPopupComponent,
    VsSearchComponent,
    VsKanbanComponent,
    VsmenunewComponent,
    VsReportsComponent,
    VsTabNewComponent,
    VsErrorReporterComponent,
    VsCollaborationComponent
  ],
  entryComponents: [
    ModalPopupComponent,
    VsErrorReporterComponent,
    VsCollaborationComponent
  ]
})
export class WidgetModule {
}
