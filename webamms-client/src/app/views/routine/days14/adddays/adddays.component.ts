import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Consumable, Days14, Gse, Spare, Tools } from "../days14.model";
import { Days14Service } from "../days14.service";
import { ConsumableserviceService } from "../../../../service/consumableservice.service";
import { ToolsserviceService } from "../../../../service/toolsservice.service";
import { GseserviceService } from "../../../../service/gseservice.service";
import { SpareserviceService } from "../../../../service/spareservice.service";
import { NotificationService } from "../../../../service/toastrnotification.service";

@Component({
  selector: "app-adddays14",
  templateUrl: "./adddays.component.html",
  styleUrls: ["./adddays.component.css"],
})
export class AdddaysComponent implements OnInit {
  days14 = new Days14();
  isgse = true;
  isspare = true;
  istools = true;
  isconsumable = true;
  needcheck = false;
  nam2: Array<any> = [];
  nam3: Array<any> = [];
  nam4: Array<any> = [];
  nam5: Array<any> = [];
  namestr: any;
  namestrsp: any;
  namestrtl: any;
  namestrcl: any;
  datagse: any;
  dataspare: any;
  datatools: any;
  dataconsumable: any;
  m1: any = 100;
  m1sp: any = 100;
  m1tl: any = 100;
  m1cl: any = 100;
  d: any;
  name: string;
  namesp: string;
  nametl: string;
  namecl: string;
  copystr: any;
  copystrsp: any;
  copystrtl: any;
  copystrcl: any;
  str1: any = "";
  str: any;
  str2: any = "";
  str3: any = "";
  gse = new Gse();
  spare = new Spare();
  tools = new Tools();
  consumable = new Consumable();
  constructor(
    private _router: Router,
    private consumableservice: ConsumableserviceService,
    private toolsservice: ToolsserviceService,
    private _service: Days14Service,
    private _gseservice: GseserviceService,
    private _spareservice: SpareserviceService,
    private _http: HttpClient,
    private toastr: NotificationService
  ) {}

  ngOnInit(): void {
    this._gseservice.fetchUserListFromRemotegse().subscribe((data) => {
      this.datagse = data;
     });

    this._spareservice.fetchUserListFromRemotespare().subscribe((data) => {
      this.dataspare = data;
    });
    this.toolsservice.fetchUserListFromRemotetools().subscribe((data) => {
      this.datatools = data;
     });

    this.consumableservice
      .fetchUserListFromRemoteconsumable()
      .subscribe((data) => {
        this.dataconsumable = data;
      });
  }

  gseselected() {
    this._gseservice.fetchUserListFromRemotegse().subscribe((data) => {
      this.datagse = data;
    });
  }
  spareselected() {
    this._spareservice.fetchUserListFromRemotespare().subscribe((data) => {
      this.dataspare = data;
    });
  }
  toolsselected() {
    this.toolsservice.fetchUserListFromRemotetools().subscribe((data) => {
      this.datatools = data;
    });
  }
  consumableselected() {
    this.consumableservice
      .fetchUserListFromRemoteconsumable()
      .subscribe((data) => {
        this.dataconsumable = data;
      });
  }

  adduserformsubmit() {
   this.d = Date.now().toString();
     this.days14.date_created = this.d;
    if (this.copystr == null || this.copystr == undefined) {
      this.days14.gsenos = "00";
    } else {
      this.days14.gsenos = this.copystr;
    }
    if (this.copystrsp == null || this.copystrsp == undefined) {
      this.days14.sparenos = "00";
    } else {
      this.days14.sparenos = this.copystrsp;
    }
    if (this.copystrtl == null || this.copystrtl == undefined) {
      this.days14.toolsnos = "00";
    } else {
      this.days14.toolsnos = this.copystrtl;
    }
    if (this.copystrcl == null || this.copystrcl == undefined) {
      this.days14.consumablenos = "00";
    } else {
      this.days14.consumablenos = this.copystrcl;
    }
   
    this._service.addUsertoRemotedays14(this.days14).subscribe(
      (data) => {
        this.toastr.showSuccess(
          " 14days service added successfully",
          "14days service"
        );
        this._router.navigate(["/routine/days14"]);
      },
      (error) => {
        this.toastr.showError(error, "14days service");
      }
    );
  }

  function1(e: any, id: any) {
    if (e.target.checked) {
      if (this.name == undefined) {
        this.name = id;
        this.nam2[0] = id;
      } else {
        this.name = this.name + "," + id;
        this.nam2.push(id);
      }
     this.copystr = this.nam2.toString();
    } 
     else {
      var index = this.nam2.indexOf(id);
      if (index > -1) {
        this.nam2.splice(index, 1);
      }
      this.name = this.str1;
      this.copystr = this.nam2.toString();
    }

    this.namestr = this.name;
    if (typeof (this.namestr === "number")) {
      this.namestr = this.namestr.toString();
    }
  }

  function2(e: any, id: any) {
    if (e.target.checked) {
     if (this.namesp == undefined) {
       this.namesp = id;
        this.nam3[0] = id;
      } else {
        this.namesp = this.namesp + "," + id;

        this.nam3.push(id);
      }
      this.copystrsp = this.nam3.toString();
    } else {
      var index1 = this.nam3.indexOf(id);

      if (index1 > -1) {
        this.nam3.splice(index1, 1);
      }
      console.log("Un checked" + id);
      this.namesp = this.str1;
      this.copystrsp = this.nam3.toString();
    }

    this.namestrsp = this.namesp;
    if (typeof (this.namestrsp === "number")) {
      this.namestrsp = this.namestrsp.toString();
    }
  }

  function3(e: any, id: any) {
    if (e.target.checked) {
      if (this.nametl == undefined) {
        this.nametl = id;
        this.nam4[0] = id;
      } else {
        this.nametl = this.nametl + "," + id;

        this.nam4.push(id);
      }
     this.copystrtl = this.nam4.toString();
    } else {
      var index2 = this.nam4.indexOf(id);

      if (index2 > -1) {
        this.nam4.splice(index2, 1);
      }
      this.nametl = this.str2;
      this.copystrtl = this.nam4.toString();
    }
    this.namestrtl = this.nametl;
    if (typeof (this.namestrtl === "number")) {
      this.namestrtl = this.namestrtl.toString();
    }
  }

  function4(e: any, id: any) {
    if (e.target.checked) {
      if (this.namecl == undefined) {
        this.namecl = id;
        this.nam5[0] = id;
      } else {
        this.namecl = this.namecl + "," + id;

        this.nam5.push(id);
      }
     this.copystrcl = this.nam5.toString();
    } else {
      var index3 = this.nam5.indexOf(id);
      if (index3 > -1) {
        this.nam5.splice(index3, 1);
      }
      this.namecl = this.str3;
      this.copystrcl = this.nam5.toString();
    }

    this.namestrcl = this.namecl;
   if (typeof (this.namestrcl === "number")) {
      this.namestrcl = this.namestrcl.toString();
    }
  }
  selectChangeHandler(event: any) {
    this.days14.type = event.target.value;
  }
}
