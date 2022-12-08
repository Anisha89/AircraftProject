import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { CarouselConfig } from "ngx-bootstrap/carousel";
import { Days14} from "./days14.model";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ConsumableserviceService } from "../../../service/consumableservice.service";
import { ToolsserviceService } from "../../../service/toolsservice.service";
import { NotificationService } from "../../../service/toastrnotification.service";
import { GseserviceService } from "../../../service/gseservice.service";
import { SpareserviceService } from "../../../service/spareservice.service";
import { Days14Service } from "./days14.service";
import { Gse } from "../../../model/gse";
import { Tools } from "../../../model/tools";
import { Spare } from "../../../model/spare";
import { Consumable } from "../../../model/consumable";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-days14",
  templateUrl: "./days14.component.html",
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./days14.component.css"],
})
export class Days14Component implements OnInit, OnDestroy {
  start: any = 1;
  datagse: any;
  dataspare: any;
  dataconsumable: any;
  datatools: any;
  end: any;
  nam2: Array<any> = ["0"];
  name3: Array<any> = ["0"];
  name: string;
  activeSlideIndex: number = 0;
  showdeletecaption: boolean = false;
  addshowbutton: boolean = false;
  showdeletebutton: boolean = false;
  showeditbutton: boolean = false;
  showedithidebutton: boolean = false;
  showphotobutton: boolean = false;
  popoverTitle: string = "Remove SPARE Record";
  popoverMessage: string = " Delete Yes/No ?";
  rolltext: any;
  rowperpage: any;
  istab = false;
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
  x: any;
  count1: any = 0;
  counter: any;
  count: any = 0;
  count5: any = 0;
  datapage: any;
  days14 = new Days14();
  totalItems: any;
  currentPage: number = 1;
  selected_id: any;

  constructor(
    private _http: HttpClient,
    private consumableservice: ConsumableserviceService,
    private toolsservice: ToolsserviceService,
    private _service: Days14Service,
    private _spareservice: SpareserviceService,
    private _gseservice: GseserviceService,
    private _route: Router,
    private _activatedrouter: ActivatedRoute,
    private toastr: NotificationService
  ) {
    this._service.share.subscribe((x) => {
      this.rolltext = x || localStorage.getItem("a");
    });
    console.log("the text is ======" + this.rolltext);
    this._service.share1.subscribe((x1) => {
      this.uname = x1 || localStorage.getItem("b");
    });
    console.log("the Uname text is ======" + this.uname);
  }

  ngOnInit(): void {
    this.x = 1;
    localStorage.setItem("opennav", "days14");
    localStorage.setItem("openpage", this.x);
    this.m = 0;
    this.m2 = 0;
    this.mode = "normal";
    this.data = new Array<any>();

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

    this._service.countrecorddays14().subscribe((mydata) => {
      console.log(mydata);
      this.rec1 = mydata;
      this.m1 = this.rec1;
      this.counter = this.m1;
    });

    this._service.getdatadays14(0, this.perpage).subscribe((data) => {
      console.log(data);
      this.data = data;
      this.days14 = data;
      this.totalItems = this.rec1;
      let activities = this.days14;
    });

    this._service.fetchUserListFromRemotegse().subscribe((data) => {
      console.log(data);
      this.datagse = data;
    });
    this._service.fetchUserListFromRemotetools().subscribe((data) => {
      console.log(data);
      this.datatools = data;
    });
    this._service.fetchUserListFromRemotespare().subscribe((data) => {
      console.log(data);
      this.dataspare = data;
    });
    this._service.fetchUserListFromRemoteconsumable().subscribe((data) => {
      console.log(data);
      this.dataconsumable = data;
    });

    if (this.rolltext == "viewer") {
      this.addshowbutton = false;
      this.showdeletecaption = false;
      this.showdeletebutton = false;
      this.showeditbutton = false;
      this.showedithidebutton = false;
    } else if (this.rolltext == "regular") {
      console.log("im regular");
      this.addshowbutton = false;
      this.showdeletecaption = false;
      this.showdeletebutton = false;
      this.showeditbutton = true;
      this.showedithidebutton = false;
      this.showphotobutton = true;
    } else if (this.rolltext == "admin") {
      console.log("im Admin");
      this.addshowbutton = true;
      this.showdeletecaption = true;
      this.showdeletebutton = true;
      this.showeditbutton = true;
      this.showedithidebutton = false;
    }
  } /*nginit*/
  ngOnDestroy(): void {}

  gotoedituser(id: number) {
    this._route.navigate([`/routine/days14/editdays`, id]);
  }

  gotoaddaccount(f: string, mess: string) {
    this._route.navigate([`/routine/days14/adddays`]);
  }
  handlePageChange(event: any) {
    this.x = event.page;
    event.page = event;
    this.start = this.x;
    if (this.mode == "searching") {
      this._service
        .counteruserecorddays14(this.searchname)
        .subscribe((recs) => {
          this.searchpages = parseInt(recs);
          this.rec1 = this.searchpages;
        });

      this._service
        .fetchUserBydays14(this.x - 1, parseInt(this.perpage), this.searchname)
        .subscribe((datasear) => {
          this.datapage = datasear;
          this.data = datasear;
          this.rec1 = this.searchpages;
          this.days14 = datasear;
        });
    } /*IF */ else if (this.mode == "normal" || this.mode == "deleting") {
      this._service
        .getdatadays14(this.x - 1, this.perpage)
        .subscribe((data) => {
          this.data = data;
          this.config.totalItems = this.rec1;
          event.totalItems = this.rec1;
          this.days14 = data;
        });
      this._service.countrecorddays14().subscribe((mydata) => {
        this.rec1 = mydata;
        this.m1 = parseInt(this.rec1);
      });
    }
  }
  gotosearchservice(name: any) {
    this.datapage = [];
    this.searchname = name;
    this.m2 = 0;
    this.mode = "searching";

    this._service.counteruserecorddays14(this.searchname).subscribe((recs) => {
      console.log(recs);
      this.searchpages = parseInt(recs);
      console.log("Total items is search=" + this.searchpages);
    });

    if (this.perpageflag == "true") {
      this._service
        .fetchUserBydays14(this.m2, parseInt(this.perpage), name)
        .subscribe(
          (datasear) => {
            this.datapage = datasear;
            this.data = datasear;
            this.rec1 = this.searchpages;
          },
          (error) => {
            console.log("Spare Number not exist");
          }
        );
    } else if (this.perpageflag == undefined) {
      this._service.fetchUserBydays14(this.m2, this.perpage, name).subscribe(
        (datasear) => {
          this.datapage = datasear;
          this.data = datasear;
          this.rec1 = this.searchpages;
        },
        (error) => {
          console.log("days14  not exist");
        }
      );
    }
    console.log("the total items in search out=" + parseInt(this.searchpages));
  }
  gotobackservice() {
    this.mode = "normal";
    this._service.countrecorddays14().subscribe((mydata) => {
      this.rec1 = mydata;
      this.m1 = parseInt(this.rec1);
    });

    this._service.getdatadays14(0, this.perpage).subscribe((data) => {
      this.data = data;
    });
    return;
  }

  show(
    e: any,
    id: any,
    gsenos: any,
    sparenos: any,
    toolsnos: any,
    consumablenos: any
  ) {
    if (e.target.checked) {
      this.nam2[0] = id;
      this.istab = true;
      this.count1 = 1;
      this.count5 = 1;
      this.count = 1;
      this.selected_id = id;
    } else {
      this.count = this.count - 1;
      this.istab = false;
      this.count1 = this.count1 - 1;
      this.count5 = this.count5 - 1;
      this.selected_id = "";
    }
    this._gseservice
      .fetchUserListFromRemoteservicecondition(gsenos.toString())
      .subscribe((datagse) => {
        this.datagse = datagse;
        console.log(this.datagse);
      });

    this._spareservice
      .fetchUserListFromRemotesparecondition(sparenos.toString())
      .subscribe((dataspare) => {
        this.dataspare = dataspare;
      });
    this.toolsservice
      .fetchUserListFromRemotetoolscondition(toolsnos.toString())
      .subscribe((datatools) => {
        this.datatools = datatools;
      });
    this.consumableservice
      .fetchUserListFromRemoteconsumablecondition(consumablenos.toString())
      .subscribe((dataconsumable) => {
        console.log(dataconsumable);
        this.dataconsumable = dataconsumable;
      });
  }

  gotodeleteuser(id: number) {
    this.mode = "deleting";
    this._service.deleteUserByIdFromRemotedays14(id).subscribe(
      (data) => {
        console.log("deleted sucesssfully");
        this.counter--;
        console.log("counter" + this.counter);
        if (this.counter == this.rowperpage) {
          this.ngOnInit();
        }
        this.ngOnInit();

        if (this.perpageflag == "true") {
          this._service
            .getdatadays14(this.x - 1, parseInt(this.perpage))
            .subscribe((data) => {
              this.data = data;
            });
        } else if (this.perpageflag == undefined) {
          this._service.getdatadays14(this.x, 3).subscribe((data) => {
            this.data = data;
          });
        }
        this.toastr.showWarning("Deletion success", "Days14 service");
      },
      (error) => {
        this.msg1 = error;
        this.toastr.showError(error, "Days14");
      }
    );
  }

  generate() {
    this._route.navigate([`/service/generate`]);
  }
  createPdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
  }
  getDocumentDefinition() {
    const thisRef = this;
    sessionStorage.setItem("service", JSON.stringify(this.days14));
    return {
      header: {
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
          text: "Service",
          fontSize: 20,
          alignment: "left",
          style: "header",
          margin: [0, 0, 0, 20],
        },
        this.getServiceData(this.data),
        {
          text: "\n\nGse",
          fontSize: 20,
          alignment: "left",
          style: "header",
          margin: [0, 0, 0, 20],
        },

        this.getGseData(this.datagse),

        {
          text: "\n\nTools",
          style: "header",
          fontSize: 20,
          alignment: "left",
          margin: [0, 0, 0, 20],
        },
        this.getToolsData(this.datatools),

        {
          text: "\n\nConsumable",
          fontSize: 20,
          alignment: "left",
          style: "header",
          margin: [0, 0, 0, 20],
        },

        this.getConsumableData(this.dataconsumable),

        {
          text: "\n\nSpare",
          // style: 'header',
          bold: true,
          fontSize: 20,
          alignment: "left",
          style: "header",
          margin: [0, 0, 0, 20],
        },

        this.getSpareData(this.dataspare),
      ],
    };
  }
  getServiceData(days14: Days14[]) {
    console.log("service.." + days14);
    return {
      table: {
        width: ["*", "*", "*", "*", "*", "*", "*", "*"],
        body: [
          [
            {
              text: "Seqno",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Ammtcno",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Category",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Type",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Trade",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Description",
              bold: true,
              fontsize: 30,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Effectivity",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
          ],

          ...days14.map((ed) => {
            return [
              ed.seqno,
              ed.ammtcno,
              ed.cat,
              ed.type,
              ed.trade,
              ed.description,
              ed.effectivity,
            ];
          }),
        ],
      },
      pageBreak: "after",
    };
  }
  getGseData(gse: Gse[]) {
    console.log("gse.." + gse);
    return {
      table: {
        width: ["*", "*", "*", "*", "*"],
        body: [
          [
            {
              text: "Sno",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
              //  bold:true
            },

            {
              text: "PartNo",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "GseNo",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Oem",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Description",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
          ],
          ...gse.map((ed) => {
            return [ed.sno, ed.portno, ed.gseno, ed.gdm, ed.description];
          }),
        ],
      },
      pageBreak: "after",
    };
  }
  getToolsData(tools: Tools[]) {
    console.log("tools.." + tools);
    return {
      table: {
        width: ["*", "*", "*", "*", "*"],
        body: [
          [
            {
              text: "Sno",
              bold: true,
              // colSpan:1,
              style: "tableHeader",
              fillColor: "#cccccc",
              // margin: [20, 0, 40, 0],
            },

            {
              text: "PartNo",
              bold: true,
              style: "tableHeader",
              // colSpan:2,
              fillColor: "#cccccc",
            },
            {
              text: "ToolsNo",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Oem",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Description",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
          ],
          ...tools.map((ed) => {
            return [ed.sno, ed.partno, ed.toolsno, ed.gdm, ed.description];
          }),
        ],
      },
      pageBreak: "after",
    };
  }
  getSpareData(spare: Spare[]) {
    console.log("spare.." + spare);
    return {
      table: {
        width: ["*", "*", "*", "*"],
        body: [
          [
            {
              text: "seqno",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "PartNo",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Oem",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Description",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
          ],
          ...spare.map((ed) => {
            return [ed.seqno, ed.partno, ed.oem, ed.description];
          }),
        ],
      },
    };
  }
  getConsumableData(consumable: Consumable[]) {
    console.log("consumable.." + consumable);
    return {
      table: {
        width: ["*", "z*", "*", "*", "*"],
        body: [
          [
            {
              text: "Sno",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Consumableno",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "PartNo",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },
            {
              text: "Oem",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
            },

            {
              text: "Description",
              bold: true,
              style: "tableHeader",
              fillColor: "#cccccc",
              
            },
          ],
          ...consumable.map((ed) => {
            return [ed.sno, ed.consumableno, ed.partno, ed.oem, ed.description];
          }),
        ],
      },
      pageBreak: "after",
    };
  }

  checked(e: any) {}
}
