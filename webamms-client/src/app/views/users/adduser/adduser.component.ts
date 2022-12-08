import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ANIMATION_TYPES } from 'ng2-loading-spinner';
import { INg2LoadingSpinnerConfig } from 'ng2-loading-spinner';
import { RegistrationService } from '../../../service/registration.service';
import { User } from '../../../model/user';
import { NotificationService } from '../../../service/toastrnotification.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
    alert: boolean = false;
    loadingConfig: INg2LoadingSpinnerConfig = {
    animationType: ANIMATION_TYPES.dualCircle,
    spinnerPosition: 'left',
    backdropBorderRadius: '15px',
    spinnerSize: 'md',
    spinnerFontSize: '2rem'
  };
  show = false;
  text = '';
  user = new User
  userlist = new User();
  selectedfile: File = null;
  msg = '';
  mess1 = 'Add Account';
  img = '';
  s1 = 'User_';
  s2 = '   ';
  d: any;
  unlocase: any;
  maillocase: any;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  constructor(private _service: RegistrationService, private _router: Router, private activatedrouter: ActivatedRoute, private _http: HttpClient, private toastr: NotificationService) { }


  ngOnInit(): void {
  }

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
  adduser() {
    this.d = Date.now().toString();
    this.user.date_created = this.d;
    this.user.time_updated = this.d;
    this.spin();
    this._service.registeruserFromRemote(this.user).subscribe(
      data => {
       this.toastr.showSuccess('registration success', "Registration");
       this.msg = "registration success";
       this.alert = true;
       this.spin();
       this._router.navigate([`/users`]);
      },
      error => {
        this.msg = "Dont repeat email and username";
        console.log(error);
        error => this.toastr.showError(error, 'Registration')

      });
     }  

  closealert() {
    this.alert = false;
  }

  goback() {
    this._router.navigate([`./users`]);
  }
  spin() {

    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 5500);
  }
  selectChangeHandler(event: any) {
    console.log(event.target.value);
  }

}
