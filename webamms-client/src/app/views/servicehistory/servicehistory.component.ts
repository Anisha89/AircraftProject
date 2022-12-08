import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import "jspdf-autotable";
import { AircraftService } from "../../service/aircraft.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Servicehistory } from "../../model/servicehistory";
import { Aircraft } from "../routine/days14/days14.model";
import { ServicehistoryService } from "../../service/servicehistory.service";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-servicehistory",
  templateUrl: "./servicehistory.component.html",
  styleUrls: ["./servicehistory.component.css"],
})
export class ServicehistoryComponent implements OnInit {
  //@ViewChild('htmlData') htmlData:ElementRef;
  //selected: {startDate: Moment, endDate: Moment};
  name: any;
  acitvities = [];
  start: any = 1;
  end: any;
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
  servicehistory = new Servicehistory();
  totalItems: any;
  currentPage: number = 1;
  datasno: any;
  status1: any;
  startdate: any;
  enddate: any;
  currentdate: any;
  myselect: any;
  nrSelect: string = "KW-3554";
  aircraft = "KW-3554";
  selectedValue:any;

 date:Date=new Date();
current_date:any;

  aircraft1: Aircraft[];
  from_date: string;
  to_date: string;
  /*   head =[['Sno','Service','Status','Start-Date','End-Date','Last-Service','Alert','Service-Done','Concessionnates','Aircraft']]  */

  constructor(
    private _http: HttpClient,
    private _service: ServicehistoryService,
    private _route: Router,
    private _activatedrouter: ActivatedRoute,
    private aircraftservice: AircraftService
  ) {
    this.aircraftservice.getAircraftinfoList().subscribe((data) => {
      this.aircraft1 = data;
    });
    this.aircraft = this._activatedrouter.snapshot.queryParamMap.get(
      "aircraft"
    );
    if (this.aircraft != null) {
      this.nrSelect = this.aircraft;
      
    }

    this._service.share.subscribe((x) => {
      this.rolltext = x || localStorage.getItem("a");
    });
    console.log("the text is ======" + this.rolltext);
    this._service.share1.subscribe((x1) => {
      this.uname = x1 || localStorage.getItem("b");
    });
    console.log("the Uname text is ======" + this.uname);
  }
  ngOnDestroy(): void {}
  ngOnInit(): void {

  
    this.from_date=this.date.toISOString().substr(0, 10);
    this.to_date=this.date.toISOString().substr(0, 10);

    localStorage.setItem("opennav", "servicehistory");
    localStorage.setItem("openpage", this.x);
    this.x = 1;
    this.m = 0;
    this.m2 = 0;
    this.mode = "normal";
    this.data = new Array<any>();

    
this.selectedValue="KW-3554"
this.selectChangeHandler2(this.selectedValue)
    this._activatedrouter.queryParams.subscribe((params) => {
      this.rowperpage = params["rowperpage"] || localStorage.getItem("rowpp");
      this.settingstate = params["state"] || localStorage.getItem("state");
    });
    this.perpage = this.rowperpage;
    this.perpageflag = this.settingstate;

    this.config = {
      itemsPerPage: this.perpage,
      currentPage: this.m,
      totalItems: this.rec1,
      id: "listing_pagination",
    };

    this._service.counteruserecordservicehistory(this.selectedValue).subscribe((mydata) => {
      console.log(mydata);
      this.rec1 = mydata;
      console.log("no of record= " + this.rec1);
      this.m1 = this.rec1;
      console.log("The m1 is " + this.m1);
      console.log("The perpage is " + this.perpage);
    });

    this._service
      .fetchUserListFromRemoteserviceaircraft(this.selectedValue)
      .subscribe(
        (data) => {
          console.log(data);
          this.data = data;
          console.log(this.data);
          this.servicehistory = this.data;
        } /*for first service*/
      );
    /* for first getdata*/
  } /*nginit*/

  handlePageChange(event:any) {
    this.x = event.page;
    event.page = event;
    this.start = this.x;
  
    this._service.fetchUserByservicehistory(this.selectedValue,this.x,this.perpage).subscribe(data=>{
      this.data=data;
    })


    /*else*/
  } /* handle page change*/


  gotosearchservicehistory(name: any) {
    this.datapage = [];
    this.searchname = name;
    this.m2 = 0;
    this.mode = "searching";
    console.log(name);

    this._service
      .counteruserecordservicehistory(this.searchname)
      .subscribe((recs) => {
        console.log(recs);
        this.searchpages = parseInt(recs);
        console.log("Total items is search=" + this.searchpages);
      });

    if (this.perpageflag == "true") {
      this._service
        .fetchUserByservicehistory(this.m2, parseInt(this.perpage), name)
        .subscribe(
          (datasear) => {
            console.log(datasear);
            this.datapage = datasear;
            this.data = datasear;
            this.rec1 = this.searchpages;
          },
          (error) => {
            console.log("Servicehistory Number not exist");
          }
        );
    } else if (this.perpageflag == undefined) {
      this._service
        .fetchUserByservicehistory(this.m2, this.perpage, name)
        .subscribe(
          (datasear) => {
            console.log(datasear);
            this.datapage = datasear;
            this.data = datasear;
            this.rec1 = this.searchpages;
          },
          (error) => {
            console.log("Servicehistory  not exist");
          }
        );
    }

    console.log("the total items in search out=" + parseInt(this.searchpages));
  }
  selectChangeHandler1(event: any) {
    this.servicehistory.service = event.target.value;
    console.log(event.target.value);

    console.log(event.target.value);
    this._service
      .fetchUserListFromRemoteservice(event.target.value)
      .subscribe((data) => {
        console.log(data,"selecting service");
        this.rec1=data.length;
        this.data = data;
        console.log(this.data);
        this.servicehistory = this.data;
        
        //this.totalItems = this.rec1;
        let activities = this.servicehistory;
      });
  }
  selectChangeHandler2(selectedValue: any) {
    //this.servicehistory.aircraft = event.target.value;
   this.selectedValue=selectedValue;
   
    this._service
      .fetchUserListFromRemoteserviceaircraft(this.selectedValue)
      .subscribe((data) => {
        console.log(data ,);
   
        this.data = data;

        console.log(this.data);
        this.rec1=data.length;
        
      });
  }

  startend(s: any, e: any) {
    
   
    s = this.toEpoch(s);
    e = this.toEpoch(e);
    this._service.fetchUserByservicehistory1(s, e).subscribe((data) => {
   
      this.data = data;
      this.rec1=data.length
      this.servicehistory = data
      console.log(data , " date range data")
    });
  }

  gotobackservicehistory() {
    this._service
      .fetchUserListFromRemoteserviceaircraft(this.aircraft)
      .subscribe((data) => {
        console.log(data);
        this.data = data;
        console.log(this.data,"refresh");
        this.servicehistory = this.data;
      });
  }

 

  createPdf() {
    const documentDefinition = this.getDocumentDefinition();

    pdfMake.createPdf(documentDefinition).open();
  }
  getDocumentDefinition() {
    const thisRef = this;
    sessionStorage.setItem(
      "servicehistory",
      JSON.stringify(this.servicehistory)
    );

    return {
      header: {
        //pageBreak:'before',
        text: "Aircraft Maintaince Management System",
        decoration: "underline",
        fillColor: "#cccccc",

        bold: true,
        style: "header",
        fontSize: 20,
        alignment: "center",
      },
      footer(currentPage: number, pageCount: number, pageSize: any): any {
        console.log(currentPage, pageCount, pageSize);
        return [
          {
            text: "Page " + currentPage.toString() + " of " + pageCount,
            alignment: "center",
          },
        ];
      },
      content: [
        {
          text: "Servicehistory",
          //
          //bold: true,
          fontSize: 20,
          alignment: "left",

          style: "header",

          margin: [0, 0, 0, 20],
        },

        this.getServicehistoryData(this.servicehistory),
      ],
    };
    
  }
  getServicehistoryData(servicehistory: Servicehistory) {
    console.log("service.." + servicehistory);
    return {
      table: {
        width: ["*", "*", "*", "*", "*", "*", "*", "*", "*"],
        body: [
          [
            {
              text: "Sno",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Service",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Status",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "StartDate",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "EndDate",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "LastService",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Alert",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "conces",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Aircraft",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
          ],
         
          ...servicehistory.map(ed => {
            return [ed.sno, ed.service, ed.status, ed.startdate,ed.enddate,ed.lastservice,ed.alert,ed.concessionnates,ed.aircraft];
          })
        ],
      },
      pageBreak: "after",
    };

  }




  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2

    console.log(strDate + " - epoch - " + epoch);
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000); // Your timezone! //1612137600
    var ddmmyyyy =
      myDate.getFullYear() +
      "-" +
      (myDate.getMonth() + 1) +
      "-" +
      myDate.getDate();
    return ddmmyyyy;
  }

} 
