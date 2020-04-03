import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from '@core/base.service';
import { ApiConstants } from '@app/api-constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientQuestionaireService {

  private meetingScheduled: any = {};
  private meetingSource = new BehaviorSubject(this.meetingScheduled);
  public meetingChanges = this.meetingSource.asObservable();

  private curConsultForm: boolean = false;
  private consultFormSrc = new BehaviorSubject(this.curConsultForm);
  public consultFormChanges = this.consultFormSrc.asObservable();

  constructor(private baseService: BaseService) {
    
  }

  public scheduleMeeting(data?: any) {
    this.meetingSource.next(data);
  }

  public changeConsultForm(data: boolean) {
    this.consultFormSrc.next(data);
  }

  private getRandomData(items: any): string {
    return items[Math.floor(Math.random() * items.length)];
  }

  getRandomIndex(arr) {
    return Math.round(Math.random() * (arr.length - 1));
  }

  // CRUD operations starts
  getPrototypingData(columns: any): any {
    const gridData = [];

    const dummyData = {
      email: ['jack@test.com', 'hugo@vg.com', 'tom@gmail.com', 'hanks@gmail.com', 'tony@gmail.com'],
      customer: ['Valeo', 'Google', 'Ford', 'BMW', 'MS', 'Daimler'],
      vehicle: ['Ford', 'BMW', 'Daimler'],
      global: ['ABC', 'Customer', 'Vendor', 'XYZ', 'Viewport', 'Service', 'Basic', 'Vehicle'],
      status: ['Draft', 'In Progress', 'Waiting', 'Approved', 'Completed'],
      number: [100, 200, 300, 400, 500],
      date: [new Date().getTime(), new Date().getTime(), new Date().getTime(), new Date().getTime()],
      name: ['Tom', 'Hanks', 'Jack', 'Slayer', 'Hugo', 'Tony']
    };

    const possibleValues = {
      muscleAchesDuration: ['0-3 days', '3-7 days', '>7 days'],
      muscleAches: ['Yes', 'No'],
      riskLevel: ['Low', 'Medium', 'High'],
      heartDisease: ['Yes', 'No'],
      areYouAHealthcareWorker: ['Yes', 'No'],
      fever: ['Yes', 'No'],
      runnyNoseDuration: ['0-3 days', '3-7 days', '>7 days'],
      memberInHouseholdAAirportStaff: ['Yes', 'No'],
      immunocompromised: ['Yes', 'No'],
      cough: ['Yes', 'No'],
      doesMemberInHouseholdWorkInCrowdedArea: ['Yes', 'No'],
      soreThroat: ['Yes', 'No'],
      runnyNose: ['Yes', 'No'],
      diarrheaDuration: ['0-3 days', '3-7 days', '>7 days'],
      pregnant: ['Yes', 'No'],
      memberInHouseholdTravelledRecently: ['Yes', 'No'],
      difficultyInBreathing: ['Yes', 'No'],
      asthma: ['Yes', 'No'],
      highBloodPressure: ['Yes', 'No'],
      diarrhea: ['Yes', 'No'],
      coughDuration: ['0-3 days', '3-7 days', '>7 days'],
      airportStaff: ['Yes', 'No'],
      soreThroatDuration: ['0-3 days', '3-7 days', '>7 days'],
      dibDuration: ['0-3 days', '3-7 days', '>7 days'],
      memberInHouseholdAHealthcareWorker: ['Yes', 'No'],
      doYouWorkInCrowdedAreasLikeMallEtc: ['Yes', 'No'],
      diabetes: ['Yes', 'No'],
      feverDuration: ['0-3 days', '3-7 days', '>7 days'],
      travelledRecently: ['Yes', 'No']
    };

    const currencyCodes = {
    };

    // const status = ['Draft', 'In Progress', 'Completed', 'Waiting', 'New Status', 'New Status One'];

    for (let i = 0; i < 20; i++) {
      const data: any = {};
      data.firstName = dummyData.name[this.getRandomIndex(dummyData.name)];
      data.lastName = dummyData.name[this.getRandomIndex(dummyData.name)];
      data.sId = i;
      for (const column of columns) {
        if (possibleValues[column.data]) {
          data[column.data] = this.getRandomData(possibleValues[column.data]);
        } else if (currencyCodes[column.data]) {
          data[column.data] = Math.random() * 100;
          const formatField = column.data + 'CurrencyFormat';
          data[formatField] = this.getRandomData(currencyCodes[column.data]);
        } else if (column.type === 'string' || !column.type) {
          let colName = '';
          if (column.name.indexOf('email') > -1) {
            colName = dummyData.email[this.getRandomIndex(dummyData.email)];
          } else if (column.name.indexOf('customer') > -1) {
            colName = dummyData.customer[this.getRandomIndex(dummyData.customer)];
          } else if (column.name.indexOf('vehicle') > -1) {
            colName = dummyData.vehicle[this.getRandomIndex(dummyData.vehicle)];
          } else if (column.name.indexOf('name') > -1) {
            colName = dummyData.name[this.getRandomIndex(dummyData.name)];
          } else {
            colName = dummyData.global[this.getRandomIndex(dummyData.global)];
          }
          data[column.data] = colName;
        } else if (column.type === 'number' || column.type === 'currency') {
          data[column.data] = dummyData.number[this.getRandomIndex(dummyData.number)];
        } else if (column.type === 'date' || column.type === 'datetime') {
          data[column.data] = dummyData.date[this.getRandomIndex(dummyData.date)];
        } else if (column.type === 'boolean') {
          data[column.data] = (Math.round((Math.random() * 1) + 0) === 0);
        }

      }

      gridData.push(data);
    }

    return gridData;
  }

  public patientDetailsFormScheduleConsultation(params: any): any {
    const serviceOpts = ApiConstants.patientDetailsFormScheduleConsultation;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getPatientQuestionaireAll_MyPatientsNotScheduled(params: any): any {
    const serviceOpts = ApiConstants.getPatientQuestionaireAll_MyPatientsNotScheduled;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public allPatientsScheduledFormNeedsConsultation(params: any): any {
    const serviceOpts = ApiConstants.allPatientsScheduledFormNeedsConsultation;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public createPatientQuestionaire(params: any): any {
    const serviceOpts = ApiConstants.createPatientQuestionaire;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  
  public patientDetailsFormDownloadReport(params: any): any {
    const serviceOpts = ApiConstants.patientDetailsFormDownloadReport;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getPatientQuestionaireAll_PatientQuestionaire(params: any): any {
    const serviceOpts = ApiConstants.getPatientQuestionaireAll_PatientQuestionaire;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public deletePatientQuestionaire(params: any): any {
    const serviceOpts = ApiConstants.deletePatientQuestionaire;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getPatientQuestionaireAll_MyPatientsScheduled(params: any): any {
    const serviceOpts = ApiConstants.getPatientQuestionaireAll_MyPatientsScheduled;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public patientDetailsFormNeedsConsultation(params: any): any {
    const serviceOpts = ApiConstants.patientDetailsFormNeedsConsultation;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public updatePatientQuestionaire(params: any): any {
    const serviceOpts = ApiConstants.updatePatientQuestionaire;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public myPatientsScheduledFormNeedsConsultation(params: any): any {
    const serviceOpts = ApiConstants.myPatientsScheduledFormNeedsConsultation;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public myPatientsScheduledRowNeedsConsultation(params: any): any {
    const serviceOpts = ApiConstants.myPatientsScheduledRowNeedsConsultation;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public patientDetailsFormConsultationNotRequired(params: any): any {
    const serviceOpts = ApiConstants.patientDetailsFormConsultationNotRequired;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getPatientQuestionaireAll_AllPatientsScheduled(params: any): any {
    const serviceOpts = ApiConstants.getPatientQuestionaireAll_AllPatientsScheduled;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getPatientQuestionaireAll_AllPatientsNotScheduled(params: any): any {
    const serviceOpts = ApiConstants.getPatientQuestionaireAll_AllPatientsNotScheduled;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public patientDetailsFormCalculateRiskScore(params: any): any {
    const serviceOpts = ApiConstants.patientDetailsFormCalculateRiskScore;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getPatientQuestionaireBySid(params: any): any {
    const serviceOpts = ApiConstants.getPatientQuestionaireBySid;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public allPatientsScheduledRowNeedsConsultation(params: any): any {
    const serviceOpts = ApiConstants.allPatientsScheduledRowNeedsConsultation;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public patientDetailsFormDoWeeklyMonitoring(params: any): any {
    const serviceOpts = ApiConstants.patientDetailsFormDoWeeklyMonitoring;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public patientDetailsFormPrescribeTest(params: any): any {
    const serviceOpts = ApiConstants.patientDetailsFormPrescribeTest;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }

  public getScheduledMeetingForPatient(params: any): any {
    const serviceOpts = ApiConstants.getScheduledMeetingForPatient;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }

  public createMeetingForPatient(params: any): any {
    const serviceOpts = ApiConstants.createMeetingForPatient;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }

  public getPatientMeetingHistory(params: any): any {
    const serviceOpts = ApiConstants.getPatientMeetingHistory;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }

  public getScheduledMeetingsForDate(params: any): any {
    const serviceOpts = ApiConstants.getScheduledMeetingsForDate;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
}
