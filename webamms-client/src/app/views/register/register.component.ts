import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';
import {HttpClient,HttpHeaderResponse, HttpEventType}from '@angular/common/http';
import { ANIMATION_TYPES } from 'ng2-loading-spinner';
import { INg2LoadingSpinnerConfig } from 'ng2-loading-spinner';
import { User } from '../../model/user';
import { NotificationService } from '../../service/toastrnotification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit
{
  show = false;
  loadingConfig: INg2LoadingSpinnerConfig = {
    animationType  : ANIMATION_TYPES.dualCircle,
    spinnerPosition: 'left',
    backdropBorderRadius: '15px',
    spinnerSize: 'md',
    spinnerFontSize: '2rem'
};
  alert1:boolean=false;
  text='';
  user =new User();
   msg='';
   d : any;
   rollpart:any;
   show_button: Boolean = false;
  show_eye: Boolean = false;
    constructor(private _service:RegistrationService, private _router: Router,private activatedrouter : ActivatedRoute,private _http:HttpClient,private toastr:NotificationService) { }
 
 mess1='Register';

  ngOnInit() {
    
     }
 
     showPassword() {
      this.show_button = !this.show_button;
      this.show_eye = !this.show_eye;
    }
    
  registeruser()
  {
     this.d=Date.now().toString();
    
    console.log('welcome registration form');
   console.log("In registration epooch"+ this.d);
   
    
    
    console.log(this.user.userName);
    console.log(this.user.emailId);
    console.log(this.user.password);
    this.user.date_created=this.d;
    this.user.time_updated=this.d;
    this.user.roll=this.rollpart;
    
    console.log(this.user.roll);
  if (((this.user.userName).length==0)||((this.user.emailId).length==0)||((this.user.password).length==0)||((this.user.roll).length==0))
  {
    
    document.getElementById('username').focus();
    return;
  }
    this.spin();
     this._service.registeruserFromRemote(this.user).subscribe(
      data=>
      {
        this.spin();
        console.log('response received in registration');
       this.msg="registration success";
       this.alert1=true;
       this._router.navigate([`/login`]);
       this.toastr.showSuccess('Registration success', "Registration");
       },
       
       //data
      error=> {
        console.log('error occured check please');
        this.msg= "Dont repeat email and username";
        console.log(error);
        error=> this.toastr.showError(this.msg,'Registration');
        
      }//error
    ); 
   
  }  //register
 
closealert()
{
  this.alert1=false;
  
}
spin()
{
 
  this.show = true;
  setTimeout(() => {
      this.show = false;
  }, 5500);
}
selectChangeHandler (event: any) {
  //update the ui
  console.log( event.target.value);
  this.rollpart=event.target.value;
}

}
