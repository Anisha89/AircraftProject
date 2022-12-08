import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ANIMATION_TYPES } from 'ng2-loading-spinner';
import { INg2LoadingSpinnerConfig } from 'ng2-loading-spinner';
import { RegistrationService } from '../../../service/registration.service';
import { User } from '../../../model/user';
import { NotificationService } from '../../../service/toastrnotification.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  alert: boolean = false;
  loadingConfig: INg2LoadingSpinnerConfig = {
    animationType: ANIMATION_TYPES.dualCircle,
    spinnerPosition: 'left',
    backdropBorderRadius: '15px',
    spinnerSize: 'md',
    spinnerFontSize: '2rem'
  };
  show = false;
  user = new User();
  msg = '';
  show_button: Boolean = false;
  show_eye: Boolean = false;
  mess = "Update Your Account"
  constructor(private _service: RegistrationService, private _router: Router, private _activatedrouter: ActivatedRoute, private _http: HttpClient, private toastr: NotificationService) { }

  ngOnInit() {
    let id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
    this._service.fetchUserByIdFromRemote(id).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('exception ocured');
      }
    )

  }

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  closealert() {
    this.alert = false;
  }
  edituser() {
    this._service.addUsertoRemote(this.user).subscribe(
      data => {
        this.msg = "update success";
        this.toastr.showSuccess(this.msg, "update profile")
        this.alert = true;
        this.spin();
        this._router.navigate([`./users`]);
      },
      error => {
        console.log('error occured check please');
        this.msg = error;
        this.toastr.showError(error, "update profile")
      });
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


}