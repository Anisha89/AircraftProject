import { Component, OnInit } from "@angular/core";
import { RegistrationService } from "../../service/registration.service";
import { ActivatedRoute, Router} from "@angular/router";
import { ANIMATION_TYPES } from "ng2-loading-spinner";
import { INg2LoadingSpinnerConfig } from "ng2-loading-spinner";
import { NotificationService } from "../../service/toastrnotification.service";
import { screenIdleService } from "../../service/userLoggedIn.service";
import { User } from "../../model/user";


@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  show = false;
  loadingConfig: INg2LoadingSpinnerConfig = {
    animationType: ANIMATION_TYPES.dualCircle,
    spinnerPosition: "left",
    backdropBorderRadius: "15px",
    spinnerSize: "md",
    spinnerFontSize: "2rem",
  };

  emailId = "";
  password = "";
  msg = "";
  isLoading = false;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  constructor(
    private _service: RegistrationService,
    private _router: Router,
    private _activatedrouter: ActivatedRoute,
    private toastr:NotificationService,
    private screenIdle:screenIdleService
  ) {
   
  }

  ngOnInit(): void {
    this.emailId = this._activatedrouter.snapshot.paramMap.get("emailId");
    localStorage.clear();
  }

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  loginUser() {

    let user : User = new User();
    user.emailId = this.emailId;
    user.password = this.password;

    this.isLoading = true;
    this._service.loginUserFromRemote(user).subscribe(
      (data) => {
        this.isLoading = false;
        user = data;
        localStorage.clear();
        localStorage.setItem('logged-in-user', JSON.stringify(user));
        localStorage.setItem('a', user.roll); // retained to for backward compatibility
        localStorage.setItem('b', user.emailId); // retained to for backward compatibility
        localStorage.setItem('rowpp', "3"); // retained to for backward compatibility
        this._router.navigate([
          `/dashboard`
        ]);
         
        this.toastr.showInfo('Login success', 'Login');
        this.screenIdle.setUserLoggedIn(true);
      },
      (error) => {
        this.msg = "bad credentials.please enter valid emailid and password";
      }
    );
  }

  gotoforgetpwd() {
    this._router.navigate([`./forgetpwd`]);
  }
  
  spin() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    },5500);
  }
  
}
