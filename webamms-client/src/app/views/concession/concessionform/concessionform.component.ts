import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concession } from '../../../model/concession';
import { ConcessionService } from '../../../service/concession.service';
import { NotificationService } from '../../../service/toastrnotification.service';


@Component({
  selector: 'app-concessionform',
  templateUrl: './concessionform.component.html',
  styleUrls: ['./concessionform.component.css']
})

export class ConcessionformComponent implements OnInit {
  concession: Concession = new Concession();
  dataa: any;
  image: any;
  selectedFile: File = null;
  message: string;
  date: Date = new Date();

  constructor(public concessionservice: ConcessionService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private toastr: NotificationService
  ) { }

  ngOnInit(): void {
    this.concession.str_approval_date = this.date.toISOString().substr(0, 10);
    this.concession.str_valid_upto = this.date.toISOString().substr(0, 10);
    this.concession.str_extended_till = this.date.toISOString().substr(0, 10);
    this.concession.str_removed_on = this.date.toISOString().substr(0, 10);
  }

  saveConcession() {
    this.concession.approval_date = this.toEpoch(this.concession.str_approval_date);
    this.concession.valid_upto = this.toEpoch(this.concession.str_valid_upto);
    this.concession.extended_till = this.toEpoch(this.concession.str_extended_till);
    this.concession.removed_on = this.toEpoch(this.concession.str_removed_on);
    this.concessionservice.addUsertoRemoteconcession(this.concession).subscribe(data => {
      this.toastr.showSuccess("Concession  added successfully", "Add Concession");
      error => this.toastr.showError(error, "Add Concession");
    })
  }
  onSubmit() {
    this.saveConcession();
    this.router.navigate([`/concession`]);
  }
  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
    return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);; // Your timezone! //1612137600
    var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
    return ddmmyyyy;
  }

}