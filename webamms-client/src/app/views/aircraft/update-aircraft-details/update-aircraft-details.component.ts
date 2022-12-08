import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpEventType } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { AircraftService } from "../../../service/aircraft.service";
import { Sortie } from "../../../model/sortie";
import { Aircraft } from "../../routine/days14/days14.model";
import { SortieService } from "../../../service/sortie.service";
import { NotificationService } from "../../../service/toastrnotification.service";

@Component({
  selector: "app-update-aircraft-details",
  templateUrl: "./update-aircraft-details.component.html",
  styleUrls: ["./update-aircraft-details.component.css"],
})
export class UpdateAircraftDetailsComponent implements OnInit {
  selectedValue: any;
  selectedFile: File = null;
  img = "";
  msg = "";
  s1 = "";
  s2 = "";
  date_flown: number;
  id: number;
  updateddata: any;
  sorties: any;
  message: String;
  push: any;
  sortie: Sortie = new Sortie();
  aircraft1: Aircraft = new Aircraft();
  str_date_flown: string;
  aircrafts: any;
  x: any;
  y: any;
  z: any;
  counter: any;
  date: Date = new Date();

  constructor(
    public sortieService: SortieService,
    public route: ActivatedRoute,
    public aircraftService: AircraftService,
    private router: Router,
    private http: HttpClient,
    private toastr: NotificationService
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.aircraftService.getAircraftinfoById(id).subscribe((data) => {
      this.x = data.aircraft;
      data.flight_cycle = data.flight_cycle + 1;
      this.y = data.flight_cycle;
    });
    this.getData(id);
    this.getAircraftinfo();
    this.sortie.str_date_flown = this.date.toISOString().substr(0, 10);
  }

  private getAircraftinfo() {
    this.aircraftService.getAircraftinfoList().subscribe((data) => {
      this.aircrafts = data;
    });
  }

  getData(id) {
    this.id = id;
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  onupload() {
    const fd = new FormData();
    this.img = this.selectedFile.name;
    this.s1 = this.img;
    this.sortie.file = this.s1;
    fd.append("file", this.selectedFile, this.img);
    this.http
      .post("http://localhost:8080/api/v1/uploadsortie", fd)
      .subscribe((event) => {
        this.push = event;
      });
  }

  saveSortie() {
    this.sortie.aircraft = this.x;
    this.sortie.flight_cycle = this.y;
    this.sortie.date_flown = this.toEpoch(this.sortie.str_date_flown);
    this.sortieService.createSortie(this.sortie).subscribe((data) => {
      this.sortie.file = this.s1;
      this.toastr.showSuccess('Updation success', "Update Sortie Flight");
      this.sorties = data;
      this.aircraftService
        .updateArcraftinfo(this.id, this.sortie)
        .subscribe((data) => {
          this.updateddata = data;
        });
    });
    (error) => this.toastr.showError(error, "Update Sortie Flight")
  }

  onSubmit() {
    this.saveSortie();
    this.router.navigate(["/aircraft"]);
  }

  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000); // Your timezone! //1612137600
    var ddmmyyyy = myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear();
    return ddmmyyyy;
  }
}
