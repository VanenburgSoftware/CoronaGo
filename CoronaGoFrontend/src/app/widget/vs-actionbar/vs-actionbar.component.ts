/**
 * Actin Bar Component
 * @example
 * <app-vs-actionbar [actionbarConfig]="actionBarconf" (onBtnClick)='buttonAction($event)' 
 * (initComplete)='actionBarInitComplete($event)'></app-vs-actionbar>
 * @attributes,
 * actionbarConfig - list of buttons with all properties
 * onBtnClick - Action on when clicking on the button.
 * initComplete - Method will be invoked when Action Bar is loaded
 */
import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionsecurityService } from '../securityevaluation.service';
import { AppConstants } from '@app/app-constants';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-vs-actionbar',
  templateUrl: './vs-actionbar.component.html',
  styleUrls: ['./vs-actionbar.component.scss'],
  animations: [
    trigger('fade', [
      state('opened', style({ bottom: '-200px' })),
      state('closed', style({ bottom: 0 })),
      transition('closed => opened', [
        style({ bottom: 0 }),
        animate(`${AppConstants.animationDuration} linear`, style({ bottom: '-200px' }))
      ]),
      transition('opened => closed', [
        style({ bottom: '-200px' }),
        animate(`${AppConstants.animationDuration} linear`, style({ bottom: 0 }))
      ])
    ])
  ]
})
export class VsActionbarComponent implements OnInit, AfterViewInit {
  /**
   * Get the Action bar configuration information from components
   */
  @Input() actionbarConfig: any;

  /**
   * Emit an event when user click on button.
   */
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();

  /**
   * Emit an event when the component is loaded.
   */
  @Output() initComplete: EventEmitter<any> = new EventEmitter();

  /**
   * Variables declaration
   */
  constructedButtons: any;
  primaryButtons: any[];
  secondaryButtons: any[];
  workflowMatrix: any;
  butElemMap: any = {};
  isMobile: boolean;
  showSec: boolean;
  mobBtnState = 'opened';

  constructor(private securityService: ActionsecurityService) { }

  /**
   * Mehod to build the action bar with all validation. Considered the worjflow and evaluated all security rights
   * @param layoutData
   */
  constructActionbar(layoutData: any) {
    if (!layoutData) { return; }
    if (layoutData.securityEvaluation !== false && layoutData.securityJson) {
      this.workflowMatrix = layoutData.securityJson;
      const newLayout = this.securityService.evaluateSecurityRights(layoutData, layoutData.securityJson);

      this.constructedButtons = newLayout.buttons;
      this.primaryButtons = this.constructedButtons.primary;
      this.secondaryButtons = this.constructedButtons.secondary;
    } else {
      this.constructedButtons = layoutData.buttons;
      this.primaryButtons = this.constructedButtons.primary;
      this.secondaryButtons = this.constructedButtons.secondary;
    }

  }

  /**
   * Method to handle the click action on every buttons.
   * @param button
   */
  handleButtonClick(button: any) {
    this.onBtnClick.emit(button);
  }

  /**
   * Method to handle the click action on every buttons.
   * @param button
   */
  createRecordMobile() {
    this.onBtnClick.emit({
      action: 'create'
    });
  }

  /**
   * Method to set captions to map a single object for easy manipulation
   * @param caption array
   */
  mapButtonElement(buttons: any) {
    if (buttons && buttons.length > 0) {
      for (const val of buttons) {
        if (Array.isArray(val)) {
          this.mapButtonElement(val);
        } else {
          this.butElemMap[val.name] = val;
        }
      }
    }
  }

  toggleMobileButtons() {

    this.mobBtnState = this.showSec ? 'opened' : 'closed';
    this.showSec = !this.showSec;
  }

  ngOnInit() {
    this.constructActionbar(this.actionbarConfig);
    this.isMobile = AppConstants.isMobile;
    this.showSec = this.isMobile ?  false : true;
  }

  ngAfterViewInit(): void {
    this.mapButtonElement(this.primaryButtons);
    this.mapButtonElement(this.secondaryButtons);
    this.initComplete.emit({
      config: this.actionbarConfig,
      elementMap: this.butElemMap
    });
  }
}
