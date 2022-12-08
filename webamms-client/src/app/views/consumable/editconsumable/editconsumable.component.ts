import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Consumable } from '../../../model/consumable';
import { ConsumableserviceService } from '../../../service/consumableservice.service';
import { NotificationService } from '../../../service/toastrnotification.service';
@Component({
  selector: 'app-editconsumable',
  templateUrl: './editconsumable.component.html',
  providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },],
  styleUrls: ['./editconsumable.component.css']
})
export class EditconsumableComponent implements OnInit {
  myInterval: number | false = 0;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  consumable = new Consumable();
  storeimage: any;
  selectedfile: File = null;
  str1: any;
  img = '';
  msg = '';
  s1 = 'Consumable_';
  s2 = '';
  str = '';
  res: any;
  res1: number;
  i: number;
  enable: boolean = true;
  userroll: any;
  constructor(private _route: Router, private _service: ConsumableserviceService, private _activatedrouter: ActivatedRoute, private _activatedRoute: ActivatedRoute, private _http: HttpClient, private toastr: NotificationService) { }
   ngOnInit(): void {
    this.userroll = localStorage.getItem('a');
    if (this.userroll == "viewer") {
      this.enable = true;
    }
    else {
      this.enable = false;
    }
   let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
   this._service.fetchUserByIdFromRemoteconsumable(id).subscribe(
      data => {
        this.consumable = data;
        this.storeimage = this.consumable.imgname;
        console.log("the old image name is " + this.storeimage);
        if (this.storeimage == null) {
          console.log("The stored image is Null")
        }
        else {
          console.log("The stored image is Not Null" + this.storeimage);
        }
       },
      error => console.log("exception occured")
     )
  }
  onFileSelected($event) {
    this.selectedfile = (<HTMLInputElement>document.getElementById('files')).files[0];
    let id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
    this.s2 = id.toString();
    this._service.fetchUserByIdFromRemoteconsumable(id).subscribe(
      data => {
        this.consumable = data;
        this.storeimage = this.consumable.imgname;
         },
      error => {
        console.log('exception ocured');
      }
    )
    if (this.selectedfile == null) {
      alert("file null");
    }
  }

  onupload() {
     const fd = new FormData();
    this.img = this.selectedfile.name;
    if (this.storeimage == null) {
      this.s1 = this.s1 + this.s2 + "_" + this.img;
     }
    else if (this.storeimage.length == 0) {
      this.s1 = this.s1 + this.s2 + "_" + this.img;
    }
    else {
      this.s1 = this.storeimage + "," + "Consumable_" + this.s2 + "_" + this.img;
    }
    this.consumable.imgname = this.s1;
     fd.append('file', this.selectedfile, "Consumable_" + this.s2 + "_" + this.img);

    this._http.post("http://localhost:8080/uploadconsumable", fd, { responseType: 'blob' })
      .subscribe(event => {
       this.toastr.showSuccess('Image uploaded successfully', "Image upload");
        error => this.toastr.showError(error, 'Image Upload')
      });
 }
  imguser() {
   if (this.selectedfile) {
      this.onupload();
      this._service.addUsertoRemoteconsumable(this.consumable).subscribe(
        data => {
          this.consumable.imgname = this.s1;
          this.msg = "registration success";

        },
        error => {
          console.log('error occured check please');
          this.msg = error;
          console.log(this.msg);

        }
      );
    } /*img user*/
  }
  refresh() {
    let id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
    this.s2 = id.toString();
    this._service.fetchUserByIdFromRemoteconsumable(id).subscribe(
      data => {
        console.log('date received in Picture user');
        this.consumable = data;
        this.storeimage = this.consumable.imgname;
        console.log("the old image name is " + this.storeimage);
      },
      error => {
        console.log('exception ocured');
      }
    )
  }
deleteSlide(index?: number): void {
    this.refresh();
    this.str1 = '';
    this.str = this.consumable.imgname;
    this.res1 = this.str.split(",").length;
    this.res = this.str.split(",");
    let i = 0;
    const toRemove = index ? index : this.activeSlideIndex;
    while (i < this.res1) {
      if (i != toRemove) {
        if (this.str1 != '') { this.str1 = this.str1 + "," + this.res[i]; }
        else { this.str1 = this.res[i]; }
      }
    i++;
    }
   this.consumable.imgname = this.str1;
   this._service.addUsertoRemoteconsumable(this.consumable).subscribe(
      data => {
        this.consumable.imgname = this.str1;
        this.msg = "registration success";
        this.toastr.showWarning("Slide removed", 'Slide')
      },
      error => {
       this.msg = error;
        console.log(this.msg);
        this.toastr.showError(error, 'Slide')
     });
     }

  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

  updateeditformsumbit() {
    this._service.addUsertoRemoteconsumable(this.consumable).subscribe(
      data => {
        this._route.navigate(['/consumable']);
        this.toastr.showInfo('Consumable updation success', 'Update Consumable');
      },
      error => this.toastr.showError(error, 'Update Consumable')
      )
  }


}