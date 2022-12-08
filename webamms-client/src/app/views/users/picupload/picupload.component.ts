import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { RegistrationService } from "../../../service/registration.service";
import { User } from "../../../model/user";
@Component({
  selector: "app-picupload",
  templateUrl: "./picupload.component.html",
  styleUrls: ["./picupload.component.css"],
})
export class PicuploadComponent implements OnInit {
  user = new User();
  selectedfile: File = null;
  img = "";
  msg = "";
  s1 = "User_";
  s2 = "";
  storeimage = "";
  constructor(
    private _service: RegistrationService,
    private _router: Router,
    private _activatedrouter: ActivatedRoute,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    let id = parseInt(this._activatedrouter.snapshot.paramMap.get("id"));
    this.s2 = id.toString();
    this._service.fetchUserByIdFromRemote(id).subscribe(
      (data) => {
        console.log("date received in Picture user");
        this.user = data;
        this.storeimage = this.user.imgname;
        console.log("the old image name is " + this.storeimage);
      },
      (error) => {
        console.log("exception ocured");
      }
    );
  }
  onFileSelected($event) {
    console.log(event);
    this.selectedfile = (<HTMLInputElement>(
      document.getElementById("files")
    )).files[0];
  }
  onupload() {
    const fd = new FormData();
    this.img = this.selectedfile.name;
    this.s1 = this.s1 + this.s2 + "_" + this.img;
    this.user.imgname = this.s1;
    fd.append("file", this.selectedfile, this.s1);
    this._http.post("http://localhost:8080/upload", fd).subscribe((event) => {
      console.log(event);
    });
  }
  picusers(id) {
    
    "http://localhost:8080/download/" + id;
  }
  picuser() {

    this.onupload();
    this._service.addUsertoRemote(this.user).subscribe(
      (data) => {
        this.user.imgname = this.s1;
        this._service.deleteimage(this.storeimage).subscribe(
          (idata) => {
            console.log("image deleted in angular");
          },
          (error) => {
            console.log("exception ocured IN Image delted time");
          }
        );
        this._router.navigate(["/users"]);
        this.msg = "registration success";
      },
      (error) => {
        console.log("error occured check please");
        this.msg = error;
        console.log(this.msg);
      }
    );
  }

  saveuser() {
    this._service.addUsertoRemote(this.user).subscribe(
      (data) => {
        this._router.navigate(["/users"]);
        this.msg = "registration success";
      },
      (error) => {
        console.log("error occured check please");
        this.msg = error;
        console.log(this.msg);
      }
    );
  }
} /*class*/
