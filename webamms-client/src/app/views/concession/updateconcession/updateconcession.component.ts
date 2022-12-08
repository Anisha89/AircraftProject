import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concession } from '../../../model/concession';
import { ConcessionService } from '../../../service/concession.service';
import { NotificationService } from '../../../service/toastrnotification.service';


@Component({
  selector: 'app-updateconcession',
  templateUrl: './updateconcession.component.html',
  styleUrls: ['./updateconcession.component.css']
})
export class UpdateconcessionComponent implements OnInit {
  concession = new Concession;
  id: number;
  data: any;
  selectedfile: File = null;
  img = '';
  msg = '';
  s1 = '';
  s2 = '';
  storeimage = '';
  push: any;
  userroll: string;
  enable: boolean;
  formData: any;
  constructor(private concessionservice: ConcessionService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private toastr: NotificationService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.s2 = id.toString();
    this.concessionservice.fetchUserByIdFromRemoteconcession(id).subscribe(
      data => {

        this.concession = data;
        this.concession.str_approval_date = this.fromEpoch(this.concession.approval_date)
        this.concession.str_valid_upto = this.fromEpoch(this.concession.valid_upto)
        this.concession.str_removed_on = this.fromEpoch(this.concession.removed_on)
        this.concession.str_extended_till = this.fromEpoch(this.concession.extended_till)
        this.storeimage = this.concession.file;
      },
      error => {
        console.log('exception ocured');
      }
    )
    this.userroll = localStorage.getItem('a');
    if (this.userroll == "viewer") {
      this.enable = true;
    }
    else {
      this.enable = false;
    }
  }
  fromEpoch(epoch: any) {
    var myDate = new Date(epoch * 1000);; // Your timezone! //1612137600
    var y = myDate.getFullYear();
    var m = myDate.getMonth() + 1;
    var d = myDate.getDate();
    var ddmmyyyy = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    return ddmmyyyy;
  }

  onFileSelected($event) {
    this.selectedfile = (<HTMLInputElement>document.getElementById('file')).files[0];
    console.log(this.selectedfile);
  }

  onupload() {
    const fd = new FormData();
    this.img = this.selectedfile.name;
    this.s1 = this.img;
    this.concession.file = this.s1;
    fd.append('file', this.selectedfile, this.img);
    this.formData = fd;
    this.http.post("http://localhost:8080/uploadconcession", fd)
      .subscribe(event => {
        this.push = event;
      });
  }
  picuser() {
    this.onupload();
    this.concessionservice.addUsertoRemoteconcession(this.concession).subscribe(
      data => {
        this.concession.file = this.s1;
      });
  }

  saveuser() {
    this.concessionservice.addUsertoRemoteconcession(this.concession).subscribe(
      data => {
        this.toastr.showInfo('Updation success', 'Update Concession');
        this.router.navigate(['/concession']);

      },
      error => {
        this.toastr.showError(error, 'Update Concession');
      }
    );

  }
  onSubmit() {
    this.saveuser();
  }

}