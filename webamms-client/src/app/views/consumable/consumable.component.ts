import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Consumable } from '../../model/consumable';
import { ConsumableserviceService } from '../../service/consumableservice.service';
import { NotificationService } from '../../service/toastrnotification.service';
@Component({
  selector: 'app-consumable',
  templateUrl: './consumable.component.html',
  providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },],
  styleUrls: ['./consumable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsumableComponent implements OnInit {
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
  counter: any;
  x: any;
  datapage: any;
  consumable = new Consumable();
  totalItems: any;
  currentPage: number = 1;
  myInterval: number | false = 0;
  slides: any[] = [];
  noWrapSlides: boolean = false;
  datasno: any;
  constructor(private _http: HttpClient, private _service: ConsumableserviceService, private _route: Router, private _activatedrouter: ActivatedRoute, private toastr: NotificationService) {
    this._service.share.subscribe(x => { this.rolltext = x || localStorage.getItem('a'); });
    this._service.share1.subscribe(x1 => { this.uname = x1 || localStorage.getItem('b'); });
  }

  ngOnInit(): void {
    localStorage.setItem('opennav', 'consumable');
    localStorage.setItem('openpage', this.x);
    this.x = 1;
    this.m = 0;
    this.m2 = 0;
    this.mode = "normal";
    this.data = new Array<any>();
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

    this._service.countrecordconsumable().subscribe(
      mydata => {
        this.rec1 = mydata;
        this.m1 = this.rec1;
        this.counter = this.m1;
      });

    this._service.getdataconsumable(0, this.perpage).subscribe(
      (data) => {
        this.data = data;
        this.consumable = data;
        this.totalItems = this.rec1;
        let activities = this.consumable;
      }/*for first service*/
    )/* for first getdata*/

    if (this.rolltext == "viewer") {
      this.addshowbutton = false;
      this.showdeletecaption = false;
      this.showdeletebutton = false;
      this.showeditbutton = false;
      this.showedithidebutton = false;
    }
    else if (this.rolltext == "regular") {
      console.log('im regular');
      this.addshowbutton = false;
      this.showdeletecaption = false;
      this.showdeletebutton = false;
      this.showeditbutton = true;
      this.showedithidebutton = false;
      this.showphotobutton = true;
    }
    else if (this.rolltext == "admin") {
      console.log('im Admin');
      this.addshowbutton = true;
      this.showdeletecaption = true;
      this.showdeletebutton = true;
      this.showeditbutton = true;
      this.showedithidebutton = false;
    }
  }/*nginit*/

  gotoedituser(id: number) {
    this._route.navigate([`/consumable/editconsumable`, id])
  }
  gotoaddaccount(f: string, mess: string) {
    this._route.navigate([`/consumable/addconsumable`]);
  }

  handlePageChange(event: any) {
    this.x = event.page;
    event.page = event;
    this.start = this.x;
    if (this.mode == 'searching') {
      this._service.counteruserecordconsumable(this.searchname).subscribe(
        (recs) => {
          this.searchpages = parseInt(recs);
          this.rec1 = this.searchpages;
        });
      this._service.fetchUserByconsumable(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(
        (datasear) => {
          this.datapage = datasear;
          this.data = datasear;
          this.rec1 = this.searchpages;
          this.consumable = datasear;
        });
    } /*IF */
    else if (this.mode == 'normal' || this.mode == 'deleting') {
      this._service.getdataconsumable(this.x - 1, this.perpage).subscribe(
        (data) => {
          this.data = data;
          this.config.totalItems = this.rec1;
          event.totalItems = this.rec1;
          this.consumable = data;
        } /*for first service*/
      ) /* for first getdata*/
      this._service.countrecordconsumable().subscribe(
        mydata => {
          this.rec1 = mydata;
          this.m1 = parseInt(this.rec1);
        });
    }
  }
  gotosearchconsumable(name: any) {
    this.datapage = [];
    this.searchname = name;
    this.m2 = 0;
    this.mode = 'searching';
    this._service.counteruserecordconsumable(this.searchname).subscribe(
      (recs) => {
        this.searchpages = parseInt(recs);
      });

    if (this.perpageflag == "true") {
      this._service.fetchUserByconsumable(this.m2, parseInt(this.perpage), name).subscribe(
        (datasear) => {
          this.datapage = datasear;
          this.data = datasear;
          this.rec1 = this.searchpages;

        },
        error => {
          console.log("Consumable Number not exist");
        }
      );
    }
    else if (this.perpageflag == undefined) {
      this._service.fetchUserByconsumable(this.m2, this.perpage, name).subscribe(
        (datasear) => {
          this.datapage = datasear;
          this.data = datasear;
          this.rec1 = this.searchpages;
        },
        error => {
          console.log("Consumable  not exist");
        }
      );
    }
  }

  gotobackconsumable() {
    this.mode = "normal";
    console.log("first part");
    this._service.countrecordconsumable().subscribe(
      mydata => {
        this.rec1 = mydata;
        this.m1 = parseInt(this.rec1);
      });
    this._service.getdataconsumable(0, this.perpage).subscribe(
      (data) => {
        this.data = data;
      }/*for first service*/
    );/* for first getdata*/
    return;
  }/*gotobackgse*/

  addslide() {
    setTimeout(() => {
      const seed = Math.random().toString(36).slice(-6);
      this.slides.push({
        image: `https://picsum.photos/seed/${seed}/900/500`
        });
    }, 500);
  }/*addslide*/

  removeSlide(idconsumable: any, index?: number): void {
    {
      const toRemove = index ? index : this.activeSlideIndex;
    }
  }

  onImgError(event) {
    event.target.src = 'assets/img/noimage.png';
  }
  gotodeleteuser(id: number) {
    this.mode = "deleting";
    this._service.deleteUserByIdFromRemoteconsumable(id).subscribe(
      data => {
        this.counter--;
        if (this.counter == this.rowperpage) {
          this.ngOnInit();
        }
        this.ngOnInit();
        if (this.perpageflag == "true") {
          this._service.getdataconsumable(this.x - 1, parseInt(this.perpage)).subscribe(
            (data) => {
              this.data = data;
            })
        }
        else if (this.perpageflag == undefined) {
          this._service.getdataconsumable(this.x - 1, 3).subscribe(
            (data) => {
              this.data = data;
            })
          }
        this.toastr.showWarning("Deletion success", 'Consumable');
      },
      error => {
        this.msg1 = error;
        this.toastr.showError(error, 'Consumable')
      })
  }

} /*class*/
