import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AircraftService } from '../../service/aircraft.service';
import { Schedule } from '../../model/schedule';
import { Aircraft } from '../routine/days14/days14.model';
import { ScheduleserviceService } from '../../service/scheduleservice.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  acitvities = [];
  data: any;
  optvalue: any;
  schedule = new Schedule();
  startdate: any;
  currentdate: any;
  isred: boolean = false;
  isgreen: boolean = false;
  isorange: boolean = false;
  checkday: any;
  myselect: any;
  selectedvalue: String;
  nrSelect: string = "KW-3554"
  aircraft = "KW-3554"
  aircraft1: Aircraft[];
  constructor(private _http: HttpClient, private _service: ScheduleserviceService, private _route: Router, private _activatedrouter: ActivatedRoute, private aircraftservice: AircraftService) {
    this.aircraftservice.getAircraftinfoList().subscribe(data => {
      this.aircraft1 = data;
    })
    this.aircraft = this._activatedrouter.snapshot.queryParamMap.get('aircraft');
    if (this.aircraft != null) {
      this.nrSelect = this.aircraft;
    }

  }

  ngOnInit(): void {
    console.log(localStorage.getItem('opennav'));
    localStorage.setItem('opennav', 'schedule');
    if (this.aircraft == null) {
      this.aircraft = "KW-3554";
    }
    this._service.fetchUserListFromRemoteaircraft(this.aircraft).subscribe(
      (data) => {
        this.data = data

        for (var i = 0; i < this.data.length; i++) {
          this.data[i].str_servicedue = this.fromEpoch(data[i].servicedue);
        }
        this.data.forEach(element => {
          var today = new Date();
          var year = today.getFullYear();
          var month = today.getMonth() + 1;
          var day = today.getDate();
          var formattoday = year + "-" + month + "-" + day;
          var date1 = new Date(element.str_servicedue);
          var date2 = new Date(formattoday);
          var Difference_In_Time = date2.getTime() - date1.getTime();
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          this.checkday = Difference_In_Days;
          this.isgreen = true;
          if (element.service == '14 day') {
            if (this.checkday < 6) {
              Object.assign(element, { "color": "green" });

            }
            else if (this.checkday >= 6 && this.checkday <= 11) {
              Object.assign(element, { "color": "orange" });

            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }

          if (element.service == '1 mo') {
            if (this.checkday < 15) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 15 && this.checkday <= 25) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }

          }
          if (element.service == '3 mo') {
            if (this.checkday < 30) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 30 && this.checkday <= 75) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }

          }
          if (element.service == '6 mo') {
            if (this.checkday < 45) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 45 && this.checkday <= 120) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '12 mo') {
            if (this.checkday < 100) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 100 && this.checkday <= 240) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '15 mo') {
            if (this.checkday < 200) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 200 && this.checkday <= 355) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '18 mo') {
            if (this.checkday < 350) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 350 && this.checkday <= 475) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '24 mo') {
            if (this.checkday < 300) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 300 && this.checkday <= 600) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '30 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 365 && this.checkday <= 730) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }

          if (element.service == '36 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 365 && this.checkday <= 900) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '48 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 1000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '60 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 1500) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '72 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '90 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '120 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
        });


        this.schedule = this.data;
        let activities = this.schedule;
      }
    )
  }
  selectChangeHandler4(e: any) {
    this.schedule.aircraft = e.target.value;
    this.optvalue = e.target.value;
    this._service.fetchUserListFromRemoteaircraft(e.target.value).subscribe(
      (data) => {
        this.data = data
        for (var i = 0; i < this.data.length; i++) {
          this.data[i].str_servicedue = this.fromEpoch(data[i].servicedue);
        }
        this.data.forEach(element => {
          var today = new Date();
          var year = today.getFullYear();
          var month = today.getMonth() + 1;
          var day = today.getDate();
          var formattoday = year + "-" + month + "-" + day;
          var date1 = new Date(element.str_servicedue);
          var date2 = new Date(formattoday);
          var Difference_In_Time = date2.getTime() - date1.getTime();
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          this.checkday = Difference_In_Days;
          if (element.service == '14 day') {
            if (this.checkday < 6) {
              Object.assign(element, { "color": "green" });

            }
            else if (this.checkday >= 6 && this.checkday <= 11) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }

          if (element.service == '1 mo') {
            if (this.checkday < 15) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 15 && this.checkday <= 25) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }

          }
          if (element.service == '3 mo') {
            if (this.checkday < 30) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 30 && this.checkday <= 75) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }

          }
          if (element.service == '6 mo') {
            if (this.checkday < 45) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 45 && this.checkday <= 120) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '12 mo') {
            if (this.checkday < 100) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 100 && this.checkday <= 240) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '15 mo') {
            if (this.checkday < 200) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 200 && this.checkday <= 355) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '18 mo') {
            if (this.checkday < 350) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 350 && this.checkday <= 475) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '24 mo') {
            if (this.checkday < 300) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 300 && this.checkday <= 600) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '30 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 365 && this.checkday <= 730) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }

          if (element.service == '36 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 365 && this.checkday <= 900) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '48 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 1000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '60 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 1500) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '72 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '90 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
          if (element.service == '120 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            else if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            else {
              Object.assign(element, { "color": "quadrat" });
            }
          }
        });
        this.schedule = this.data;
        let activities = this.schedule;
      }
    )
  }
  toEpoch(strDate: string) {
    var myDate = new Date(strDate);
    var epoch = Math.round(myDate.getTime() / 1000);
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);
    var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
    return ddmmyyyy;
  }

}
