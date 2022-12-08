import { Component, OnInit } from '@angular/core';
import {Spare} from '../../../model/spare';
import { SpareserviceService } from '../../../service/spareservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../service/toastrnotification.service';

@Component({
  selector: 'app-addspare',
  templateUrl: './addspare.component.html',
  styleUrls: ['./addspare.component.css']
})
export class AddspareComponent implements OnInit {
  spare =new Spare();
  d:any;
  constructor(private _router:Router, private _service :SpareserviceService,private _http:HttpClient,private toastr:NotificationService) { }

  ngOnInit(): void {
  }
  adduserformsubmit(){
    this.d=Date.now().toString();
    this.spare.date_created=this.d;
  this._service. addUsertoRemotespare(this.spare).subscribe(
    data=>
   {
      this.toastr.showSuccess('Spare added successfully', "Spare");
      this._router.navigate(['/spare']);
    },
    error=> 
    {console.log("error");
    error=> this.toastr.showError(error,'Spare')
  })
}
}
