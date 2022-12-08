import { Component, OnInit, Input } from "@angular/core";
import { RegistrationService } from "../../service/registration.service";
import { Router, ActivatedRoute } from "@angular/router";
import {HttpClient,} from "@angular/common/http";
import { User } from "../../model/user";
import { NotificationService } from "../../service/toastrnotification.service";
@Component({
  templateUrl: "users.component.html",
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  showdeletecaption: boolean = false;
  addshowbutton: boolean = false;
  showdeletebutton: boolean = false;
  showeditbutton: boolean = false;
  showedithidebutton: boolean = false;
  showphotobutton: boolean = false;
  public perpage: any;
  popoverTitle: string = "Remove Record";
  popoverMessage: string = " Delete Yes/No ?";
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
  /*NAVBAR*/
  selectedfile: File = null;
  user = new User();
  searchname: any;
  msg = "";
  msg1: any;
  searchpages: any;
  m2: any;
  s2 = " ";
  rec: string;
  _userlist: User[];
  data: User[];
  datapage: User[];
  mode: any;
  counter: any;
  totalRecords: String;
  page: Number = 1;
  config: any;
  m1: any;
  searlength: any;
  m: any;
  x: any;
  start: any;
  totalItems: any;
  public perpageflag: any;
  rolltext: any;
  uname: any;
  rowperpage1: any;
  public rowperpage: string;
  public settingstate: string;
  constructor(
    private _router: Router,
    private _service: RegistrationService,
    private _route: Router,
    private _http: HttpClient,
    private _activatedrouter: ActivatedRoute,
    private toastr: NotificationService
  ) {
    this._service.share.subscribe((x) => {
      this.rolltext = x || localStorage.getItem("a");
    });
    this._service.share1.subscribe((x1) => {
      this.uname = x1 || localStorage.getItem("b");
    });
    this._service.rowshare1.subscribe((x2) => {
      this.rowperpage1 = x2;
    });
    var m: any;
    m = 0;
    this.m2 = 0;
    this.mode = "normal";
    this.data = new Array<any>();
    this._service.countrecord().subscribe((mydata) => {
      this.rec = mydata;
      this.m1 = parseInt(this.rec);
    });

    if (this.mode == "normal") {
      this.config = {
        itemsPerPage: this.perpage,
        currentPage: this.m,
        totalItems: this.rec,
        id: "listing_pagination",
      };
    }
  }

  ngOnInit() {
    localStorage.setItem("opennav", "users");
    localStorage.setItem("openpage", this.page.toString());
    this._activatedrouter.queryParams.subscribe((params) => {
      this.rowperpage = params["rowperpage"] || localStorage.getItem("rowpp");
      this.settingstate = params["state"] || localStorage.getItem("state");
    });

    this.perpage = this.rowperpage;
    this.perpageflag = this.settingstate;
    if (this.rolltext == "viewer") {
      this.addshowbutton = false;

      this.showdeletecaption = false;
      this.showdeletebutton = false;
      this.showeditbutton = true;
      this.showedithidebutton = false;
    } else if (this.rolltext == "regular") {
      this.addshowbutton = false;
      this.showdeletecaption = false;
      this.showdeletebutton = false;
      this.showeditbutton = true;
      this.showedithidebutton = false;
      this.showphotobutton = true;
    } else if (this.rolltext == "admin") {
      this.addshowbutton = true;
      this.showdeletecaption = true;
      this.showdeletebutton = true;
      this.showeditbutton = true;
      this.showedithidebutton = false;
    }
    this.mode = "normal";
    if (this.perpageflag == "true") {
      this.perpageflag = "true";
    } else {
      this.perpageflag = undefined;
    }
    this._service.countrecord().subscribe((mydata) => {
      this.rec = mydata;
      this.counter = this.rec;
    });
    if (this.perpageflag == undefined) {
      this._service.getdata(0, 3).subscribe(
        (data) => {
          this.data = data;
          this.totalItems = this.rec;
        } 
      ); 
    } else {
      this._service.getdata(0, this.perpage).subscribe(
        (data) => {
          this.data = data;

          this.config.totalItems = this.rec;
        }
      ); 
    }

    this.page = 0;
    this._service.fetchUserListFromRemote().subscribe(
      (data) => { },
      (error) => {
        this.msg = error;
      }
    );
  }

  handlePageChange(event: any) {
    this.x = event.page;
    event.page = event;
    this.start = this.x;

    if (this.mode == "searching") {
      this._service.counteruserecord(this.searchname).subscribe((recs) => {
        this.searchpages = parseInt(recs);
        this.rec = this.searchpages;
      });
      this._service
        .fetchUserByuseremail(
          this.x - 1,
          parseInt(this.perpage),
          this.searchname
        )
        .subscribe((datasear) => {
          this.datapage = datasear;
          this.data = datasear;
          this.rec = this.searchpages;
          this.user = datasear;
        });
    }  else if (this.mode == "normal" || this.mode == "deleting") {
      this._service.getdata(this.x - 1, this.perpage).subscribe(
        (data) => {
          this.data = data;
          this.config.totalItems = this.rec;
          event.totalItems = this.rec;
          this.user = data;
        }
      ); 
      this._service.countrecord().subscribe((mydata) => {
        this.rec = mydata;
        this.m1 = parseInt(this.rec);
      });
    } 
  }

  gotodeleteuser(id: number) {
    this.mode = "deleting";

    this._service.deleteUserByIdFromRemote(id).subscribe(
      (data) => {
        if (data.emailId == this.uname) {
          let un = localStorage.getItem("b");
          let stat = "logout";
          this._router.navigate(["/login", { stat1: stat, mailid: un }]);

        }
        this.ngOnInit();
        this.counter--;
        if (this.counter == this.rowperpage) {
          this.ngOnInit();
        }

        if (this.perpageflag == "true") {
          this._service
            .getdata(this.x - 1, parseInt(this.perpage))
            .subscribe((data) => {
              this.data = data;
            });
        }
        else if (this.perpageflag == undefined) {
          this._service.getdata(this.x, 3).subscribe((data) => {
            this.data = data;
          });
        } 
        this.toastr.showWarning("User deleted ", " User")
      },
      (error) => {
        this.msg1 = error;
      }
    );
  } 

  selectChangeHandler(event: any) {
    this.perpage = event.target.value;
    this.perpageflag = 0;
    this.mode = "normal";
    this._service.getdata(0, parseInt(this.perpage)).subscribe(
      (data) => {
        this.data = data;
        this.totalRecords = this.rec;
      } 
    ); 
    this.handlePageChange(event);
  }
  gotoedituser(id: number) {
    this._route.navigate([`/users/edituser`, id]);
  }
  gotoaddaccount(f: string, mess: string) {
    this._route.navigate([`/users/adduser`]);
  }
  gotopicture(id: number) {
    this._route.navigate([`/users/picupload`, id]);
  }

  gotosearch(name: string) {
    this.datapage = [];
    this.searchname = name;
    this.m2 = 0;
    this.mode = "searching";
    this._service.counteruserecord(this.searchname).subscribe((recs) => {
      this.searchpages = parseInt(recs);
    });
   
    if (this.perpageflag == "true") {
      this._service
        .fetchUserByuseremail(this.m2, parseInt(this.perpage), name)
        .subscribe(
          (datasear) => {
            this.datapage = datasear;
            this.data = datasear;
            this.rec = this.searchpages;
          },
          (error) => { }
        );
    } else if (this.perpageflag == undefined) {
      this._service.fetchUserByuseremail(this.m2, this.perpage, name).subscribe(
        (datasear) => {
          this.datapage = datasear;
          this.data = datasear;
        },
        (error) => { }
      );
    }
  }
  gotoback() {
    this.mode = "normal";
    this._service.countrecord().subscribe((mydata) => {
      this.rec = mydata;
      this.m1 = parseInt(this.rec);
    });
    this._service.getdata(0, this.perpage).subscribe(
      (data) => {
        this.data = data;
      } 
    ); 
    return;
  }
  ngOnDestroy(): void {
    localStorage.setItem("a", this.rolltext);
    localStorage.setItem("b", this.uname);
    localStorage.setItem("state", this.perpageflag);
  }
  onImgError(event) {
    event.target.src = "assets/img/noimage.png";
  }
}
