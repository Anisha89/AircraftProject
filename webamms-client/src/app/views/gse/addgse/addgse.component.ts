import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Gse } from '../../../model/gse';
import { GseserviceService } from '../../../service/gseservice.service';
import { NotificationService } from '../../../service/toastrnotification.service';
@Component({
  selector: 'app-addgse',
  templateUrl: './addgse.component.html',

  styleUrls: ['./addgse.component.css']
})
export class AddgseComponent implements OnInit {
  gse = new Gse();
  d: any;
  constructor(private _router: Router, private _service: GseserviceService, private _http: HttpClient, private toastr: NotificationService) { }
  ngOnInit(): void {
  }
  adduserformsubmit() {
    this.d = Date.now().toString();
    this.gse.date_created = this.d;
    this._service.addUsertoRemotegse(this.gse).subscribe(
      data => {
        this.toastr.showSuccess(' GSE added successfully', "GSE");
        this._router.navigate(['/gse']);
      },
      error => this.toastr.showError(error, 'GSE')
    )
  }
}

