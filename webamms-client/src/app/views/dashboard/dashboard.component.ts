import { Component, OnInit } from "@angular/core";
import { RegistrationService } from "../../service/registration.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";
import { HttpClient,} from "@angular/common/http";
import { ScheduleserviceService } from "../../service/scheduleservice.service";
@Component({
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"],
  providers: [DatePipe],
})
export class DashboardComponent implements OnInit {
  myroll = "";
  uname = "";
  status1 = "";
  notStarted: any;
  progress: any;
  completed: any;
  servicedue3554: any;
  servicedue3555: any;
  servicedue3556: any;
  available: any;
  aog: any;
  inspection: any;
  mydate: any;
  id: any;
  serviceType: any;
  id1: any;
  serviceType1: any;
  id2: any;
  serviceType2: any;

  constructor(
    private _service: RegistrationService,
    private _server: ScheduleserviceService,
    private _route: Router,
    private _http: HttpClient,
    private _activatedrouter: ActivatedRoute,
    private datePipe: DatePipe
  )
   {
    this.mydate = new Date();
    this.mydate = this.datePipe.transform(this.mydate, "yyyy-MM-dd");
  }

  ngOnInit(): void {
    this.myroll = this._activatedrouter.snapshot.paramMap.get("roll");
    if (this.myroll == null) {
      this.myroll = localStorage.getItem("a");
    }
    this.uname = this._activatedrouter.snapshot.paramMap.get("uname");
    if (this.uname == null) {
      this.uname = localStorage.getItem("b");
    }
    this.status1 = this._activatedrouter.snapshot.paramMap.get("status");
    if (this.status1 == null) {
      this.status1 = localStorage.getItem("c");
    }

    this._server.getCompletedCount().subscribe((mydata) => {
      this.completed = mydata;
    });

    this._server.getNotStartedCount().subscribe((mydata) => {
      this.notStarted = mydata;
    });

    this._server.getProgressCount().subscribe((mydata) => {
      this.progress = mydata;
    });

    this._server.getservicedue3554().subscribe((mydata) => {
      this.servicedue3554 = mydata[0].servicedue;
      this.id = mydata[0].idschedule;
      this.serviceType = mydata[0].service;
    });

    this._server.getservicedue3555().subscribe((mydata) => {
      this.servicedue3555 = mydata[0].servicedue;
      this.id1 = mydata[0].idschedule;
      this.serviceType1 = mydata[0].service;
    });

    this._server.getservicedue3556().subscribe((mydata) => {
      this.servicedue3556 = mydata[0].servicedue;
      this.id2 = mydata[0].idschedule;
      this.serviceType2 = mydata[0].service;
    });

    this._server.getStatusAvailable().subscribe((mydata) => {
      this.available = mydata;
    });

    this._server.getStatusInspection().subscribe((mydata) => {
      this.inspection = mydata;
    });

    this._server.getStatusAog().subscribe((mydata) => {
      this.aog = mydata;
    });

    localStorage.setItem("a", this.myroll);
    localStorage.setItem("b", this.uname);
    localStorage.setItem("c", this.status1);

    let m = localStorage.getItem("a");
    let un = localStorage.getItem("b");
    let n = localStorage.getItem("c");

    this._service.updatedata(m, un, n);
  }

  ngOnDestroy(): void {
    localStorage.setItem("a", this.myroll);
    localStorage.setItem("b", this.uname);
    localStorage.setItem("c", this.status1);
  }

  toEpoch(strDate: string) {
    var myDate = new Date(strDate);
    var epoch = Math.round(myDate.getTime() / 1000);
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);
    var ddmmyyyy =
      myDate.getFullYear() +
      "-" +
      (myDate.getMonth() + 1) +
      "-" +
      myDate.getDate();
    return ddmmyyyy;
  }

  public doughnutChartLabels: string[] = [
    "Not-Started",
    "Progress",
    "Completed",
  ];
  public doughnutChartType = "doughnut";

  public doughnutChartLabels1: string[] = ["Available", "Aog", "Inspection"];
  public doughnutChartType1 = "doughnut";
}
