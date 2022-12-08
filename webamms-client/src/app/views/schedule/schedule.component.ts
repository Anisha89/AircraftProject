import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AircraftService } from '../../service/aircraft.service';
import { Schedule } from '../../model/schedule';
import { Aircraft } from '../routine/days14/days14.model';
import { ScheduleserviceService } from '../../service/scheduleservice.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  acitvities = [];
  start: any = 1;
  end: any;
  activeSlideIndex: number = 0;
  showdeletecaption: boolean = false;
  addshowbutton: boolean = false;
  showdeletebutton: boolean = false;
  showeditbutton: boolean = false;
  showedithidebutton: boolean = false;
  showphotobutton: boolean = false;
  popoverTitle: string = 'Remove Consumable Record';
  popoverMessage: string = ' Delete Yes/No ?';
  rolltext: any;
  rowperpage: any;
  settingstate: any;
  perpageflag: any;
  perpage: any;
  config: any;
  searchname: any;
  searchpages: any;
  msg1: any;
  uname: any;
  m2: any;
  data: any;
  mode: any;
  rec1: any;
  m1: any;
  m: any;
  optvalue: any;
  x: any;
  datapage: any;
  schedule = new Schedule();
  totalItems: any;
  currentPage: number = 1;
  myInterval: number | false = 0;
  slides: any[] = [];
  noWrapSlides: boolean = false;
  datasno: any;
  status1: any;
  startdate: any;
  currentdate: any;
  isred: boolean = false;
  isgreen: boolean = false;
  isorange: boolean = false;
  checkday: any;
  myselect: any;
  selectedvalue: String;
  aircraft1: Aircraft[];
  enable = false;
  nrSelect: string = "KW-3554"
  aircraft = "KW-3554"
  constructor(private _http: HttpClient, private _service: ScheduleserviceService, private _route: Router, private _activatedrouter: ActivatedRoute, private aircraftservice: AircraftService) {
    this.aircraftservice.getAircraftinfoList().subscribe(data => {
      this.aircraft1 = data
    })
    this.aircraft = this._activatedrouter.snapshot.queryParamMap.get('aircraft');
    if (this.aircraft != null) {
      this.nrSelect = this.aircraft;
    }
    this._service.share.subscribe(x => { this.rolltext = x || localStorage.getItem('a'); });
    this._service.share1.subscribe(x1 => { this.uname = x1 || localStorage.getItem('b'); });
    this._service.share2.subscribe(y => { this.status1 = y || localStorage.getItem('c') });


    this._service.countrecordschedule().subscribe(
      mydata => {
        this.rec1 = mydata;
        this.m1 = this.rec1;

      }

    );



  }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {

    console.log(localStorage.getItem('opennav'));
    localStorage.setItem('opennav', 'schedule');
    localStorage.setItem('openpage', this.x);
    this.x = 1;
    this.m = 0;
    this.m2 = 0;
    this.mode = "normal";
    this.data = new Array<any>();

    if (this.rolltext == "viewer") {
      this.addshowbutton = false;
      this.enable = true;
    }
    if (this.rolltext == "admin") {
      this.addshowbutton = true;
      this.enable = true;
    }

    if (this.aircraft == null) {
      this.aircraft = "KW-3554";
    }
    this._activatedrouter.queryParams.subscribe(
      params => {
        this.rowperpage = params['rowperpage'] || localStorage.getItem('rowpp');
        this.settingstate = params['state'] || localStorage.getItem('state');
      }
    );
    this.perpage = this.rowperpage;
    this.perpageflag = this.settingstate;

    this.config =
    {

      itemsPerPage: this.perpage,
      currentPage: this.m,
      totalItems: this.rec1,
      id: 'listing_pagination',

    }

    this._service.countrecordschedule().subscribe(
      mydata => {
        this.rec1 = mydata;
        this.m1 = this.rec1;
      });


    this._service.fetchUserListFromRemoteaircraft(this.aircraft).subscribe(
      (data) => {
        this.data = data
        for (var i = 0; i < this.data.length; i++) {
          this.data[i].str_servicedue = this.fromEpoch(this.data[i].servicedue);
          this.data[i].str_startdate = this.fromEpoch(this.data[i].startdate)
          this.data[i].str_enddate = this.fromEpoch(this.data[i].enddate)
          this.data[i].str_lastservice = this.fromEpoch(this.data[i].str_lastservice)
          this.data[i].str_nextservice = this.fromEpoch(this.data[i].nextservice)
          if ((this.data[i].str_startdate) !== "1970-01-01") {
            this.data[i].str_startdate = this.fromEpoch(this.data[i].startdate)
            this.data[i].str_enddate = null;

          }
          else if ((this.data[i].str_startdate) && (this.data[i].str_enddate) == "1970-01-01") {
            this.data[i].str_startdate = null;
            this.data[i].str_enddate = null;
          }

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
            if (this.checkday >= 6 && this.checkday <= 11) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 12 && this.checkday <= 14) {
              Object.assign(element, { "color": "red" });
            }

          }

          if (element.service == '1 mo') {
            if (this.checkday < 15) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 15 && this.checkday <= 25) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 25 && this.checkday <= 30) {
              Object.assign(element, { "color": "red" });
            }


          }
          if (element.service == '3 mo') {
            if (this.checkday < 30) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 30 && this.checkday <= 75) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 75 && this.checkday <= 90) {
              Object.assign(element, { "color": "red" });
            }

          }
          if (element.service == '6 mo') {
            if (this.checkday < 45) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 45 && this.checkday <= 120) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 120 && this.checkday <= 180) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '12 mo') {
            if (this.checkday < 100) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 100 && this.checkday <= 240) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 240 && this.checkday <= 365) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '15 mo') {
            if (this.checkday < 200) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 200 && this.checkday <= 355) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 355 && this.checkday <= 455) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '18 mo') {
            if (this.checkday < 350) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 350 && this.checkday <= 475) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 475 && this.checkday <= 545) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '24 mo') {
            if (this.checkday < 300) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 300 && this.checkday <= 600) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 600 && this.checkday <= 695) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '30 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 365 && this.checkday <= 730) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 730 && this.checkday <= 910) {
              Object.assign(element, { "color": "red" });
            }
          }

          if (element.service == '36 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 365 && this.checkday <= 900) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 900 && this.checkday <= 1095) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '48 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 1000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 1000 && this.checkday <= 1460) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '60 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 1500) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 1500 && this.checkday <= 1825) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '72 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 2000 && this.checkday <= 2190) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '90 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 2000 && this.checkday <= 2715) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '120 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 2000 && this.checkday <= 3625) {
              Object.assign(element, { "color": "red" });
            }
          }
        });

        console.log(this.data)
        this.schedule = this.data;

        this.totalItems = this.rec1;
        let activities = this.schedule;
      })
  }/*nginit*/
  selectChangeHandler3(e: any) {
    this.schedule.aircraft = e.target.value;
    this.optvalue = e.target.value;

    this._service.fetchUserListFromRemoteaircraft(e.target.value).subscribe(
      (data) => {
        console.log(data);
        this.data = data
        for (var i = 0; i < this.data.length; i++) {
          this.data[i].str_servicedue = this.fromEpoch(data[i].servicedue);
          this.data[i].str_lastservice = this.fromEpoch(this.data[i].str_lastservice)
          this.data[i].str_nextservice = this.fromEpoch(this.data[i].nextservice)
          this.data[i].str_startdate = this.fromEpoch(this.data[i].startdate)

          if (this.data[i].str_startdate == "1970-01-01") {
            this.data[i].str_startdate = null;
            this.data[i].str_enddate = null;

          }
          else if (this.data[i].str_startdate !== "1970-01-01") {
            this.data[i].str_startdate = this.fromEpoch(this.data[i].startdate)
            this.data[i].str_enddate = null;
          }
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
            if (this.checkday >= 6 && this.checkday <= 11) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 12 && this.checkday <= 14) {
              Object.assign(element, { "color": "red" });
            }
          }

          if (element.service == '1 mo') {
            if (this.checkday < 15) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 15 && this.checkday <= 25) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 25 && this.checkday <= 30) {
              Object.assign(element, { "color": "red" });
            }


          }
          if (element.service == '3 mo') {
            if (this.checkday < 30) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 30 && this.checkday <= 75) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 75 && this.checkday <= 90) {
              Object.assign(element, { "color": "red" });
            }

          }
          if (element.service == '6 mo') {
            if (this.checkday < 45) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 45 && this.checkday <= 120) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 120 && this.checkday <= 180) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '12 mo') {
            if (this.checkday < 100) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 100 && this.checkday <= 240) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 240 && this.checkday <= 365) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '15 mo') {
            if (this.checkday < 200) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 200 && this.checkday <= 355) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 355 && this.checkday <= 455) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '18 mo') {
            if (this.checkday < 350) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 350 && this.checkday <= 475) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 475 && this.checkday <= 545) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '24 mo') {
            if (this.checkday < 300) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 300 && this.checkday <= 600) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 600 && this.checkday <= 695) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '30 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 365 && this.checkday <= 730) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 730 && this.checkday <= 910) {
              Object.assign(element, { "color": "red" });
            }
          }

          if (element.service == '36 mo') {
            if (this.checkday < 365) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 365 && this.checkday <= 900) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 900 && this.checkday <= 1095) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '48 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 1000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 1000 && this.checkday <= 1460) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '60 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 1500) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 1500 && this.checkday <= 1825) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '72 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 2000 && this.checkday <= 2190) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '90 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 2000 && this.checkday <= 2715) {
              Object.assign(element, { "color": "red" });
            }
          }
          if (element.service == '120 mo') {
            if (this.checkday < 500) {
              Object.assign(element, { "color": "green" });
            }
            if (this.checkday >= 500 && this.checkday <= 2000) {
              Object.assign(element, { "color": "orange" });
            }
            if (this.checkday >= 2000 && this.checkday <= 3625) {
              Object.assign(element, { "color": "red" });
            }
          }
        });

        console.log(this.data)
        this.schedule = this.data;

        this.totalItems = this.rec1;
        let activities = this.schedule;
      }
    )



  }
  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);; // Your timezone! //161213760
    var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
    return ddmmyyyy;
  }

  gotoedituser(id: number) {
    this._route.navigate([`/schedule/editschedule`, id]);
  }

  gotoaddaccount(f: string, mess: string) {
    this._route.navigate([`/schedule/addschedule`]);
  }

}

