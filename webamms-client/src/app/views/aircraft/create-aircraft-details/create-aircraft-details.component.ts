import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AircraftService } from '../../../service/aircraft.service';
import { NotificationService } from '../../../service/toastrnotification.service';
import { Aircraft } from '../../routine/days14/days14.model';

@Component({
  selector: 'app-create-aircraft-details',
  templateUrl: './create-aircraft-details.component.html',
  styleUrls: ['./create-aircraft-details.component.css']
})
export class CreateAircraftDetailsComponent implements OnInit {
  aircraft: any;
  aircraftinfo: Aircraft = new Aircraft();
  msg: any;
  existAircraft = "KW-3554";
  aircraftList: any;
  date: Date = new Date();
  constructor(private aircraftService: AircraftService, private router: Router, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.aircraftService.getAircraftinfoList().subscribe(data => {
      this.aircraftList = data;
      this.aircraftinfo.last_flown_date = this.date.toISOString().substr(0, 10);
      this.aircraftinfo.first_flight_date = this.date.toISOString().substr(0, 10);

    })
  }
  saveAircraft() {
    this.aircraftinfo.last_flown_date = this.toEpoch(this.aircraftinfo.last_flown_date)
    this.aircraftinfo.first_flight_date = this.toEpoch(this.aircraftinfo.first_flight_date)
    for (let i = 0; i < this.aircraftList.length; i++) {
      if (this.aircraftList[i].aircraft == this.aircraftinfo.aircraft) {
        this.existAircraft = this.aircraftList[i].aircraft;

      }
    }

    if (this.existAircraft !== this.aircraftinfo.aircraft) {
      this.aircraftService.createAicraft(this.aircraftinfo).subscribe(data => {
        this.aircraft = data;
        this.toastr.showSuccess(this.aircraft.aircraft + " added successfully", "Sortie Flight")
        this.router.navigate(['/aircraft']);
        error => this.toastr.showError(error, "Sortie Flight")
      })
    }
    else {
      this.msg = "Aircraft Name already exist"
      console.log(this.msg)
    }
  }

 

  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);; // Your timezone! //1612137600
    var ddmmyyyy = (myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear());
    return ddmmyyyy;
  }
}