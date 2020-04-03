import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-questionaire-list-mobile-view',
  templateUrl: './patient-questionaire-list-mobile-view.component.html',
  styleUrls: ['./patient-questionaire-list-mobile-view.component.scss']
})

export class PatientQuestionaireListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'PatientQuestionaireListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}