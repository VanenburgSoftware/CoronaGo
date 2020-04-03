import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-vs-scheduler',
  templateUrl: './vs-scheduler.component.html',
  styleUrls: ['./vs-scheduler.component.scss']
})
export class VsSchedulerComponent implements OnInit {

  @Input() schedulerObj: any = {};
  @Input() blockedSlots: any = [];
  @Input() meetingDate: any;
  @Output() selectedSlots: EventEmitter<any[]> = new EventEmitter();

  timeSlots = [];
  selectedTimeSlots = [];
  // blockedSlots = [['08:00AM', '08:30AM'], ['00:00AM', '00:30AM'], ['07:00PM', '07:30PM']];

  constructor() { }

  setTimeSlots() {

    const x = 30; // minutes interval
    const times = []; // time array
    let tt = 0; // start time
    const ap = ['AM', 'PM']; // AM-PM

    let tempA = [];
    for (let i = 0; tt <= 24 * 60; i++) {
      const hh = Math.floor(tt / 60);
      const mm = (tt % 60);
      // tslint:disable-next-line: max-line-length
      // times[i] = ('0' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      const t = ('0' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ap[Math.floor(hh / 12)];
      if (tempA.length < 2) {
        tempA.push(t);
      } else {
        times.push(tempA);
        tempA = [tempA[1]];
        tempA.push(t);
      }

      tt = tt + x;
    }
    times.push(['11:30PM', '00:00AM']);

    this.timeSlots = times;

  }

  selectTime(e, slot) {
    /* if (this.selectedTimeSlots.indexOf(slot) > -1) {
      this.selectedTimeSlots.splice(this.selectedTimeSlots.indexOf(slot), 1);
    } else {
      this.selectedTimeSlots.push(slot);
    }*/

    this.selectedTimeSlots = [slot];

    this.selectedSlots.emit(this.selectedTimeSlots);
  }

  getId(slot: any[]) {
    return slot.join('').replace(/[^\w\s]/gi, '');
  }

  isSelected(slot: any[]) {
    return this.selectedTimeSlots.indexOf(slot) > -1;
  }

  isDisabled(slot) {
    const curDate = moment().format('YYYY-MM-DD');
    const meetDate = moment(this.meetingDate).format('YYYY-MM-DD');
    if (curDate === meetDate) {
      if (moment(`${this.meetingDate} ${slot[0]}`, 'YYYY-MM-DD hh:mmA').toDate().getTime() < moment().toDate().getTime()) {
        return true;
      }
    }

    return JSON.stringify(this.blockedSlots).indexOf(JSON.stringify(slot)) > -1;
  }

  ngOnInit() {
    this.setTimeSlots();
  }

}
