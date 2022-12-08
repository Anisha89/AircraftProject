import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient,HttpHeaderResponse, HttpEventType}from '@angular/common/http';
import { RegistrationService } from '../../../service/registration.service';
import { User } from '../../../model/user';
import { NotificationService } from '../../../service/toastrnotification.service';


@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {
 
  constructor(private _service:RegistrationService, private toastr:NotificationService, private _router: Router,private _activatedrouter:ActivatedRoute,private _http:HttpClient) { }
  
  user= new User();
token:any;
value:any;
reset:string; 
msg:boolean;
failmsg:string;
  ngOnInit() {
 
    this._activatedrouter.queryParams.subscribe((params: Params) => {
      this.token=params//params(token)
      let resettoken= Object.values(this.token);//valueoftoken
      this.value=resettoken.toString();//object to string token
      this.reset=this.value.toString();//string of resettoken
  });



}/*ngOninit()*/
resetuserpwd()
{
  console.log(this.reset);
  console.log(this.user.password);
  this._service.reset(this.reset,this.user.password).subscribe(data=>{
    this.msg=true;

    this._router.navigate(['/login']);
    this.toastr.showInfo('Reset password Successfully!!!!', 'Reset');
   },error=>{
     this.failmsg="Please try Forgotten password Again";
   })
}
 
}

