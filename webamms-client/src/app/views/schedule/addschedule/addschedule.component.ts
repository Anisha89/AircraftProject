import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AircraftService } from '../../../service/aircraft.service';
import { Schedule } from '../../../model/schedule';
import { Aircraft } from '../../routine/days14/days14.model';
import { ScheduleserviceService } from '../../../service/scheduleservice.service';
import { NotificationService } from '../../../service/toastrnotification.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  schedule = new Schedule();
  d: any;
  status1: any;
  aircraft1: Aircraft[];
  schedule_list: any;
  valid = false;
  exist_service: any;
  myusername: string;
  service: any;
  selected_aircraft: any;
  msg: string;
  date: Date = new Date();
  constructor(private _router: Router, private _service: ScheduleserviceService, private _http: HttpClient, private aircraftservice: AircraftService, private toastr: NotificationService) { }
  @ViewChild('myInput', { static: true }) myInput: ElementRef;
  ngOnInit(): void {
    this.schedule.date_created = this.d;
    this.schedule.str_servicedue = this.date.toISOString().substr(0, 10);
    this.schedule.str_startdate = this.date.toISOString().substr(0, 10);
    this.schedule.str_enddate = this.date.toISOString().substr(0, 10);
    this.schedule.str_lastservice = this.date.toISOString().substr(0, 10);
    this.schedule.str_nextservice = this.date.toISOString().substr(0, 10);
    this.aircraftservice.getAircraftinfoList().subscribe(data => {
      this.aircraft1 = data;
    })
    this._service.share2.subscribe(y => { this.status1 = y || localStorage.getItem('c') });
  }

  validate_aircraft(e: any) {
    this.selected_aircraft = e.target.value;
  }
  adduserformsubmit() {
    this.d = Date.now().toString();
    this.schedule.servicedue = this.toEpoch(this.schedule.str_servicedue)
    this.schedule.startdate = this.toEpoch(this.schedule.str_startdate)
    this.schedule.enddate = this.toEpoch(this.schedule.str_enddate)
    this.schedule.lastservice = this.toEpoch(this.schedule.str_lastservice)
    this.schedule.nextservice = this.toEpoch(this.schedule.str_nextservice)
    if (this.exist_service !== this.schedule.service) {
      this._service.addUsertoRemoteschedule(this.schedule).subscribe(
        data => {
          this.schedule = data
          this.toastr.showSuccess('data added successfully', "add schedule");
          this._router.navigate(['/schedule']);
        },
        error => this.toastr.showError(error, 'Add schedule')
      )
    }
  }

  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);; // Your timezone! //1612137600
    var ddmmyyyy = (myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear());
    return ddmmyyyy;
  }
  selectChangeHandler(event: any) {
    this.service = event.target.value;
    this._service.fetchUserListFromRemoteaircraft(this.selected_aircraft).subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].service == this.service) {
            this.exist_service = data[i].service;
            this.msg = ` already ${this.schedule.service} service exist in  ${this.schedule.aircraft} Aircraft`;
          }
          else {
            this.msg = "";
          }
        }
      })
  }
}