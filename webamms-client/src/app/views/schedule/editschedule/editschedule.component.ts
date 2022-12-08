import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ANIMATION_TYPES } from 'ng2-loading-spinner';
import { INg2LoadingSpinnerConfig } from 'ng2-loading-spinner';
import { Schedule } from '../../../model/schedule';
import { ScheduleserviceService } from '../../../service/scheduleservice.service';
import { NotificationService } from '../../../service/toastrnotification.service';
@Component({
  selector: 'app-editschedule',
  templateUrl: './editschedule.component.html',
  styleUrls: ['./editschedule.component.css']
})
export class EditscheduleComponent implements OnInit {
  loadingConfig: INg2LoadingSpinnerConfig = {
    animationType: ANIMATION_TYPES.dualCircle,
    spinnerPosition: 'left',
    backdropBorderRadius: '15px',
    spinnerSize: 'md',
    spinnerFontSize: '2rem'
  };
  show = false;
  schedule = new Schedule();
  progress: boolean = false;
  completed: boolean = false;
  notstarted: boolean = false;
  startdate: boolean;
  dd: any;
  mm: any;
  yyyy: any;
  last: any;
  selected: any;
  showme: boolean = false;
  showme1: boolean = false;
  date: Date = new Date();
  rolltext: string;
  addshowbutton: boolean;
  enable: boolean;

  constructor(private _service: ScheduleserviceService, private _router: Router, private _activatedrouter: ActivatedRoute, private _http: HttpClient, private toastr: NotificationService) { }
  ngOnInit(): void {
    this.rolltext = localStorage.getItem('a');
    if (this.rolltext == "viewer") {
      this.addshowbutton = false;
      this.enable = true;
    }

    let id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
    this._service.fetchUserByIdFromRemoteschedule(id).subscribe(
      data => {
        this.schedule = data;
        if (this.schedule.status == "Progress") {
          this.schedule.str_startdate = this.fromEpoch(this.schedule.startdate);
        }
        else {
          this.schedule.str_startdate = this.date.toISOString().substr(0, 10);
        }
        this.schedule.str_servicedue = this.fromEpoch(this.schedule.servicedue)
        this.schedule.str_enddate = this.date.toISOString().substr(0, 10);
        this.schedule.str_lastservice = this.fromEpoch(this.schedule.lastservice)
      },
      error => {
        console.log('exception ocured');
      })
  }
  adduserformsubmit(aircraft) {
    if (this.schedule.status == "Completed") {
      this.schedule.enddate = this.toEpoch(this.schedule.str_enddate);
      this.schedule.startdate = this.toEpoch(this.schedule.str_startdate);
    }
    else if (this.schedule.status == "Progress") {
      this.schedule.startdate = this.toEpoch(this.schedule.str_startdate);
      this.schedule.enddate = null;
    }
    else if (this.schedule.status == "Not Started") {
      this.schedule.startdate = null;
      this.schedule.enddate = null;
    }
    var ch = this.schedule.status;
    if (ch == "Progress") {
      this._service.addUsertoRemoteservicehistory(this.schedule).subscribe(
        data => {
        },
        error => {
          console.log('service history error occured check please');
        });
    }
    if (ch == 'Completed') {
      this._service.addUsertoRemoteservicehistory(this.schedule).subscribe(
        data => {
        },
        error => {
          console.log('service history error occured check please');
        }
      );
      this.schedule.status = 'Not Started';
      this.schedule.servicecompleted = (parseInt(this.schedule.servicecompleted) + 1).toString();
      this.schedule.enddate = null;
      this.schedule.startdate = null;
      this.schedule.servicedue = this.schedule.nextservice;
    }
    this._service.addUsertoRemoteschedule(this.schedule).subscribe(
      data => {
        this.toastr.showSuccess('Updation success', ' Edit schedule')
        this.spin();
        this._router.navigate([`./schedule`], { queryParams: { aircraft: aircraft } });
        error => {
          this.toastr.showError(error, "Edit schedule");
        }
      });
  }
  goback(aircraft) {
    this._router.navigate([`./schedule/`], { queryParams: { aircraft: aircraft } });
  }

  spin() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 5500);
  }

  selectChangeHandler(event: any) {
    this.schedule.status = this.completed;
    this.schedule.lastservice = this.schedule.servicedue;
    this.completed = this.schedule.servicedue;
    this.schedule.status = event.target.value;
  }
  selectnextservice(event: any) {
    this.schedule.status = this.completed;
    this.schedule.servicedue = this.schedule.nextservice;
    this.completed = this.schedule.nextservice;
    this.schedule.status = event.target.value;
  }

  toogle() {
    this.showme = !this.showme;
  }

  selectChangeHandler2(event: any) {
    this.schedule.startdate = true
  }


  selectChangeHandler1(event: any) {

    if (this.schedule.service == '14 day' || this.schedule.service == '1 mo' || this.schedule.service == '3 mo') {
      if (this.schedule.service == '14 day') {
        var numberOfDaysToAdd = 14;
      }
      else if (this.schedule.service == '1 mo') {
        var numberOfDaysToAdd = 30;
      }

      else if (this.schedule.service == '3 mo') {
        var numberOfDaysToAdd = 90;
      }

      var someDate = new Date(this.schedule.str_enddate);
      someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
      this.dd = someDate.getDate();
      this.mm = someDate.getMonth() + 1;
      this.yyyy = someDate.getFullYear();
      if (this.dd < 10) {
        this.dd = '0' + this.dd.toString();
      }
      if (this.mm < 10) {
        this.mm = '0' + this.mm.toString();
      }

      var dt = this.yyyy + "-" + this.mm + "-" + this.dd;
      this.schedule.nextservice = this.toEpoch(dt);
      this.schedule.str_nextservice = this.fromEpoch(this.schedule.nextservice);
      this.schedule.lastservice = this.toEpoch(this.schedule.str_enddate)

    }

    else if (this.schedule.service == '6 mo' || this.schedule.service == '12 mo' || this.schedule.service == '15 mo' || this.schedule.service == '18 mo' || this.schedule.service == '24 mo' || this.schedule.service == '30 mo' || this.schedule.service == '36 mo' || this.schedule.service == '48 mo') {

      if (this.schedule.service == '6 mo') {
        var AddofDays = 180;
      }
      else if (this.schedule.service == '12 mo') {
        var AddofDays = 365;
      }
      else if (this.schedule.service == '15 mo') {
        var AddofDays = 455;
      }
      else if (this.schedule.service == '18 mo') {
        var AddofDays = 545;
      }
      else if (this.schedule.service == '24 mo') {
        var AddofDays = 695;
      }
      else if (this.schedule.service == '30 mo') {
        var AddofDays = 910;
      }
      else if (this.schedule.service == '36 mo') {
        var AddofDays = 1095;

      }
      else if (this.schedule.service == '48 mo') {
        var AddofDays = 1825;
      }

      var serviceDate = new Date(this.schedule.str_enddate);
      serviceDate.setDate(serviceDate.getDate() + AddofDays);
      this.dd = serviceDate.getDate();
      this.mm = serviceDate.getMonth() + 1;
      this.yyyy = serviceDate.getFullYear();
      if (this.dd < 10) {
        this.dd = '0' + this.dd.toString();
      }
      if (this.mm < 10) {
        this.mm = '0' + this.mm.toString();
      }

      var nxt = this.yyyy + "-" + this.mm + "-" + this.dd;
      this.schedule.nextservice = this.toEpoch(nxt);
      this.schedule.str_nextservice = this.fromEpoch(this.schedule.nextservice);
    }
  }

  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
    return epoch;
  }
  fromEpoch(epoch: any) {
    var myDate = new Date(epoch * 1000);// Your timezone! //1612137600
    var y = myDate.getFullYear();
    var m = myDate.getMonth() + 1;
    var d = myDate.getDate();
    var ddmmyyyy = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    return ddmmyyyy;
  }
}



