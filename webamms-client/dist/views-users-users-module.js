(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/adduser/adduser.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/adduser/adduser.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\" style=\"max-width:100%;\">\r\n   <div class=\"row\">\r\n      <div class=\"col-md-6 \">\r\n         <div class=\"card  \">\r\n            <div class=\"card-header\">ADD USER</div>\r\n            <div class=\"card-body \">\r\n               <form  #addform=\"ngForm\"  (ngSubmit)=\"adduser()\">\r\n               <span class =\"text-info\"></span>\r\n               <div *ngIf=\"alert\" class=\"alert-success alert-dismissible fade show\" role=\"alert\">\r\n                  User Registered Successfully !.\r\n                  <button (click)=\"closealert()\"type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n               </div>\r\n               <div class=\"controls\">\r\n                  <div class=\"input-group\">\r\n                     <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                     </div>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" name=\"username\" required [(ngModel)]=\"user.userName\" (ngModelChange)= \"user.userName = $event.toLowerCase()\" id=\"username\" ngModel #username=\"ngModel\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\r\n                     <div *ngIf=\"username.errors.required\">Name is required.</div>\r\n                  </div>\r\n               </div>\r\n               <br>\r\n               <div class=\"controls\">\r\n                  <div class=\"input-prepend input-group\">\r\n                     <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-envelope\"></i></span>\r\n                     </div>\r\n                     <input type=\"email\"  class=\"form-control\"  placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"user.emailId\" required ngModel #email=\"ngModel\" uniqueEmail\r\n                     required pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"> \r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"email.errors && (email.invalid || email.touched)\">\r\n                     <div class=\"text-danger\" *ngIf =\"email.errors.pattern\">Enter Valid Email id</div>\r\n                     <div class=\"text-danger\" *ngIf =\"email.errors['uniqueEmail']\">Email already exist</div>\r\n                  </div>\r\n               </div>\r\n               <br>\r\n               <div class=\"controls\">\r\n                  <div class=\"input-prepend input-group\">\r\n                     <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                     </div>\r\n                     <input  [type]=\"show_button ? 'text' :'password' \" class=\"form-control\" placeholder=\"Password\"   name=\"password\"  passwordValidator  [(ngModel)]=\"user.password\" ngModel #password=\"ngModel\" required >\r\n                     <span class=\"input-group-text \" style=\"width:40px\">  <i [class]=\"show_eye ? 'fa fa-eye' : 'fa fa-eye-slash'\" (click)=\"showPassword()\" > </i></span>\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n                     <div *ngIf=\"password.errors?.required\">Password is required.</div>\r\n                     <div class=\"text-danger\" *ngIf =\"password.errors['passwordValidator']\">Make sure it's at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character </div>\r\n                  </div>\r\n               </div>\r\n               <br>\r\n               <div class=\"controls\">\r\n                  <div class=\"input-prepend input-group\">\r\n                     <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                     </div>\r\n                     <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" ngModel #cpassword=\"ngModel\" name=\"cpassword\"  required  compare=\"password\">\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf =\"cpassword.invalid && (cpassword.dirty || cpassword.touched)\">\r\n                     <div *ngIf=\"cpassword.errors['required']\">Repeat Password is required</div>\r\n                     <div *ngIf=\"cpassword.errors['compare']\">Password Confirm do not match</div>\r\n                  </div>\r\n               </div>\r\n               <br>\r\n               <div class=\"controls\">\r\n                  <div class=\"input-prepend input-group\">\r\n                     <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                     </div>\r\n                     <select style='width:100px' id=\"roll\" [(ngModel)]=\"user.roll\" name=\"roll\"   class=\"form-control\" (change)=\"selectChangeHandler($event)\">\r\n                     <option value=\"\" selected disabled  >Enter roll</option>\r\n                     <option value=\"admin\">Admin</option>\r\n                     <option value=\"viewer\">Viewer</option>\r\n                     <option value=\"regular\">Regular</option>\r\n                     </select>\r\n                  </div>\r\n               </div>\r\n               <br>\r\n               <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                     <button type=\"submit\" class=\"btn btn-primary \"[ng2-loading]=\"show\"  [config]=\"loadingConfig\" [disabled]=\"!addform.valid\" >Create </button>\r\n                  </div>\r\n               </div>\r\n               </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/edituser/edituser.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/edituser/edituser.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\r\n   <main class=\"main d-flex align-items-left\">\r\n      <div class=\"container\">\r\n         <div class=\"row\">\r\n            <div class=\"col-md-8 \">\r\n               <div class=\"card mx-4\">\r\n                  <div class=\"card-body p-4\">\r\n                     <form #editform=\"ngForm\" (ngSubmit)=\"edituser()\">\r\n                        <span class=\"text-info\"></span>\r\n                        <div *ngIf=\"alert\" class=\"alert-success alert-dismissible fade show\" role=\"alert\">\r\n                           <strong>Well done!</strong> You Updated Successfully !.\r\n                           <button (click)=\"closealert()\" type=\"button\" class=\"close\" data-dismiss=\"alert\"\r\n                              aria-label=\"Close\">\r\n                              <span aria-hidden=\"true\">&times;</span>\r\n                           </button>\r\n                        </div>\r\n                        <h2> {{mess}} </h2>\r\n                        <p class=\"text-muted\"></p>\r\n                        <div class=\"input-group mb-3\">\r\n                           <div class=\"input-prepend input-group\">\r\n                              <div class=\"input-group-prepend\">\r\n                                 <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                              </div>\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\"\r\n                                 name=\"username\" [(ngModel)]=\"user.userName\"\r\n                                 (ngModelChange)=\"user.userName = $event.toLowerCase()\" id=\"username\"\r\n                                 #username=\"ngModel\" required>\r\n                           </div>\r\n                           <div class=\"text-danger\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\r\n                              Username is required </div>\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                           <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\"><i class=\"icon-envelope\"></i></span>\r\n                           </div>\r\n                           <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" disabled id=\"email\"\r\n                              name=\"email\" [(ngModel)]=\"user.emailId\" required ngModel #email=\"ngModel\" required\r\n                              pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                           <div *ngIf=\"email.errors && (email.invalid && email.touched)\">\r\n                              <div *ngIf=\"email.errors.required\">Email id is required filed</div>\r\n                              <div *ngIf=\"email.errors.pattern\">Enter Valid Email id</div>\r\n                              <div *ngIf=\"email.errors['uniqueEmail']\">Email already exist</div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                           <div class=\"input-prepend input-group\">\r\n                              <div class=\"input-group-prepend\">\r\n                                 <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                              </div>\r\n                              <input [type]=\"show_button ? 'text' : 'password'\" class=\"form-control\"\r\n                                 placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\" ngModel\r\n                                 #password=\"ngModel\" required passwordValidator>\r\n                              <span class=\"input-group-text \" style=\"width:40px\"> <i\r\n                                    [class]=\"show_eye ? 'fa fa-eye' : 'fa fa-eye-slash'\" (click)=\"showPassword()\">\r\n                                 </i></span>\r\n                           </div>\r\n                           <div class=\"text-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n                              <div *ngIf=\"password.errors?.required\">Password is required.</div>\r\n                              <div class=\"text-danger\" *ngIf=\"password.errors['passwordValidator']\">Make sure it's at\r\n                                 least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1\r\n                                 special character </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"controls\">\r\n                           <div class=\"input-prepend input-group\">\r\n                              <div class=\"input-group-prepend\">\r\n                                 <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                              </div>\r\n                              <input class=\"form-control\" placeholder=\"Repeat password\" ngModel #cpassword=\"ngModel\"\r\n                                 name=\"cpassword\" required compare=\"password\">\r\n                           </div>\r\n                           <div class=\"text-danger\" *ngIf=\"cpassword.invalid && (cpassword.dirty || cpassword.touched)\">\r\n                              <div *ngIf=\"cpassword.errors['required']\">Confirm password required</div>\r\n                              <div *ngIf=\"cpassword.errors['compare']\">Password Confirm do not match</div>\r\n                           </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"row\">\r\n                           <div class=\"col-6\">\r\n                              <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!editform.valid\"\r\n                                 [ng2-loading]=\"show\" [config]=\"loadingConfig\">Update</button>\r\n                           </div>\r\n                        </div>\r\n                     </form>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </main>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/picupload/picupload.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/picupload/picupload.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\r\n  <main class=\"main d-flex align-items-center\">\r\n     <div class=\"container\">\r\n        <br><br><br><br><br><br>\r\n        <div class=\"row\">\r\n           <div class=\"col-md-8 mx-auto\">\r\n              <div class=\"card mx-3\">\r\n                 <div class=\"card-body p-4\">\r\n                    <h1>Picture Upload</h1>\r\n                    <form #picform=\"ngForm\" (ngSubmit)=\"picuser()\">\r\n                    <input\r\n                    type=\"file\"\r\n                    name=\"uploadDocument\"\r\n                    (change)=\"onFileSelected($event)\"\r\n                    #fileinput\r\n                    id=\"files\" \r\n                    /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <button type=\"submit\" class=\"btn btn-info\" (click)=\"picusers(user.imgname)\">\r\n                    Submit\r\n                    </button>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <img\r\n                    src=\"http://localhost:8080/uploads/{{ user.imgname }}\"\r\n                    name=\"imgname\"\r\n                    alt=\"{{ user.imgname }}\"\r\n                    height=\"75\"\r\n                    width=\"75\"\r\n                    [(ngModel)]=\"user.imgname\"/>\r\n                    </form>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </main>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"ml-3 mt-2\"><button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\" (click)=\"gotoaddaccount(user.status, 'Add Account')\">New</button> </div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-2 mt-2\"><input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"Username/Emailid\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/>  </div>\r\n        <div class=\"mr-2 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"  (click)=\"gotosearch(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\" (click)=\"gotoback()\"><i class=\"fa fa-refresh\"></i></button></div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <th>Profile</th>\r\n              <th>User Name</th>\r\n              <th>Email_Id</th>\r\n              <th>Date & Time</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor=\"let u of data | paginate: config\">\r\n              <td>\r\n                 <div *ngIf=\"(u.emailId == uname && rolltext == 'regular') || rolltext == 'admin';then imagetruepart;\r\n                    else imagefalsepart\">\r\n                 </div>\r\n                 <ng-template #imagetruepart>\r\n                    <div>\r\n                       <img src=\"http://localhost:8080/uploads/{{ u.imgname }}\"(error)=\"onImgError($event)\"(click)=\"gotopicture(u.id)\" alt=\"{{ u.imgname }}\" height=\"40\" width=\"40\"/>\r\n                    </div>\r\n                 </ng-template>\r\n                 <ng-template #imagefalsepart>\r\n                    <div>\r\n                       <img src=\"http://localhost:8080/uploads/{{ u.imgname }}\"(error)=\"onImgError($event)\"alt=\"{{ u.imgname }}\" height=\"40\" width=\"40\" />\r\n                    </div>\r\n                 </ng-template>\r\n              </td>\r\n              <td>\r\n                 <div *ngIf=\" (u.emailId == uname && rolltext == 'regular')||(u.emailId == uname && rolltext == 'viewer') ||(u.emailId == uname && rolltext == 'admin');then truepart;else elsetemplate \">\r\n                 </div>\r\n                 <ng-template #truepart>\r\n                    <div>\r\n                       <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left: 0;  color: darkblue\"(click)=\"gotoedituser(u.id)\"> {{ u.userName }}</button>\r\n                    </div>\r\n                 </ng-template>\r\n                 <ng-template #elsetemplate>\r\n                    <div>{{ u.userName }}</div>\r\n                 </ng-template>\r\n              </td>\r\n              <td >{{ u.emailId }}</td>\r\n              <td >{{ u.date_created | date: \"yyyy-MM-dd hh:mm:ss a\" }}</td>\r\n              <td ><button class=\"btn btn-default\" *ngIf=\"showdeletebutton\" mwlConfirmationPopover [popoverTitle]=\"popoverTitle\"  [popoverMessage]=\"popoverMessage\"  placement=\"left\" (confirm)=\"gotodeleteuser(u.id)\" (cancel)=\"cancelClicked = true\" ><i class=\"fa fa-trash\"></i></button></td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"row\">\r\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n           <pagination [itemsPerPage]=\"perpage\" id=\"listing_pagination\" [totalItems]=\"rec\" [(ngModel)]=\"currentPage\"(pageChanged)=\"handlePageChange($event)\"></pagination>\r\n        </div>\r\n     </div>\r\n  </div>\r\n  <!----/.row -->\r\n</div>");

/***/ }),

/***/ "./src/app/views/users/adduser/adduser.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/users/adduser/adduser.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXJzL2FkZHVzZXIvYWRkdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/users/adduser/adduser.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/users/adduser/adduser.component.ts ***!
  \**********************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");








var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(_service, _router, activatedrouter, _http, toastr) {
        this._service = _service;
        this._router = _router;
        this.activatedrouter = activatedrouter;
        this._http = _http;
        this.toastr = toastr;
        this.alert = false;
        this.loadingConfig = {
            animationType: ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_TYPES"].dualCircle,
            spinnerPosition: 'left',
            backdropBorderRadius: '15px',
            spinnerSize: 'md',
            spinnerFontSize: '2rem'
        };
        this.show = false;
        this.text = '';
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_6__["User"];
        this.userlist = new _model_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.selectedfile = null;
        this.msg = '';
        this.mess1 = 'Add Account';
        this.img = '';
        this.s1 = 'User_';
        this.s2 = '   ';
        this.show_button = false;
        this.show_eye = false;
    }
    AdduserComponent.prototype.ngOnInit = function () {
    };
    AdduserComponent.prototype.showPassword = function () {
        this.show_button = !this.show_button;
        this.show_eye = !this.show_eye;
    };
    AdduserComponent.prototype.adduser = function () {
        var _this = this;
        this.d = Date.now().toString();
        this.user.date_created = this.d;
        this.user.time_updated = this.d;
        this.spin();
        this._service.registeruserFromRemote(this.user).subscribe(function (data) {
            _this.toastr.showSuccess('registration success', "Registration");
            _this.msg = "registration success";
            _this.alert = true;
            _this.spin();
            _this._router.navigate(["/users"]);
        }, function (error) {
            _this.msg = "Dont repeat email and username";
            console.log(error);
            (function (error) { return _this.toastr.showError(error, 'Registration'); });
        });
    };
    AdduserComponent.prototype.closealert = function () {
        this.alert = false;
    };
    AdduserComponent.prototype.goback = function () {
        this._router.navigate(["./users"]);
    };
    AdduserComponent.prototype.spin = function () {
        var _this = this;
        this.show = true;
        setTimeout(function () {
            _this.show = false;
        }, 5500);
    };
    AdduserComponent.prototype.selectChangeHandler = function (event) {
        console.log(event.target.value);
    };
    AdduserComponent.ctorParameters = function () { return [
        { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    AdduserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adduser',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adduser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/adduser/adduser.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adduser.component.css */ "./src/app/views/users/adduser/adduser.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/views/users/edituser/edituser.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/users/edituser/edituser.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\r\n  width: 40px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlcnMvZWRpdHVzZXIvZWRpdHVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXJzL2VkaXR1c2VyL2VkaXR1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/users/edituser/edituser.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/users/edituser/edituser.component.ts ***!
  \************************************************************/
/*! exports provided: EdituserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdituserComponent", function() { return EdituserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");








var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(_service, _router, _activatedrouter, _http, toastr) {
        this._service = _service;
        this._router = _router;
        this._activatedrouter = _activatedrouter;
        this._http = _http;
        this.toastr = toastr;
        this.alert = false;
        this.loadingConfig = {
            animationType: ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_TYPES"].dualCircle,
            spinnerPosition: 'left',
            backdropBorderRadius: '15px',
            spinnerSize: 'md',
            spinnerFontSize: '2rem'
        };
        this.show = false;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.msg = '';
        this.show_button = false;
        this.show_eye = false;
        this.mess = "Update Your Account";
    }
    EdituserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemote(id).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            console.log('exception ocured');
        });
    };
    EdituserComponent.prototype.showPassword = function () {
        this.show_button = !this.show_button;
        this.show_eye = !this.show_eye;
    };
    EdituserComponent.prototype.closealert = function () {
        this.alert = false;
    };
    EdituserComponent.prototype.edituser = function () {
        var _this = this;
        this._service.addUsertoRemote(this.user).subscribe(function (data) {
            _this.msg = "update success";
            _this.toastr.showSuccess(_this.msg, "update profile");
            _this.alert = true;
            _this.spin();
            _this._router.navigate(["./users"]);
        }, function (error) {
            console.log('error occured check please');
            _this.msg = error;
            _this.toastr.showError(error, "update profile");
        });
    };
    EdituserComponent.prototype.goback = function () {
        this._router.navigate(["./users"]);
    };
    EdituserComponent.prototype.spin = function () {
        var _this = this;
        this.show = true;
        setTimeout(function () {
            _this.show = false;
        }, 5500);
    };
    EdituserComponent.ctorParameters = function () { return [
        { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    EdituserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edituser',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edituser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/edituser/edituser.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edituser.component.css */ "./src/app/views/users/edituser/edituser.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], EdituserComponent);
    return EdituserComponent;
}());



/***/ }),

/***/ "./src/app/views/users/picupload/picupload.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/users/picupload/picupload.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXJzL3BpY3VwbG9hZC9waWN1cGxvYWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/users/picupload/picupload.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/users/picupload/picupload.component.ts ***!
  \**************************************************************/
/*! exports provided: PicuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicuploadComponent", function() { return PicuploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/user */ "./src/app/model/user.ts");






var PicuploadComponent = /** @class */ (function () {
    function PicuploadComponent(_service, _router, _activatedrouter, _http) {
        this._service = _service;
        this._router = _router;
        this._activatedrouter = _activatedrouter;
        this._http = _http;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.selectedfile = null;
        this.img = "";
        this.msg = "";
        this.s1 = "User_";
        this.s2 = "";
        this.storeimage = "";
    }
    PicuploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get("id"));
        this.s2 = id.toString();
        this._service.fetchUserByIdFromRemote(id).subscribe(function (data) {
            console.log("date received in Picture user");
            _this.user = data;
            _this.storeimage = _this.user.imgname;
            console.log("the old image name is " + _this.storeimage);
        }, function (error) {
            console.log("exception ocured");
        });
    };
    PicuploadComponent.prototype.onFileSelected = function ($event) {
        console.log(event);
        this.selectedfile = (document.getElementById("files")).files[0];
    };
    PicuploadComponent.prototype.onupload = function () {
        var fd = new FormData();
        this.img = this.selectedfile.name;
        this.s1 = this.s1 + this.s2 + "_" + this.img;
        this.user.imgname = this.s1;
        fd.append("file", this.selectedfile, this.s1);
        this._http.post("http://localhost:8080/upload", fd).subscribe(function (event) {
            console.log(event);
        });
    };
    PicuploadComponent.prototype.picusers = function (id) {
        "http://localhost:8080/download/" + id;
    };
    PicuploadComponent.prototype.picuser = function () {
        var _this = this;
        this.onupload();
        this._service.addUsertoRemote(this.user).subscribe(function (data) {
            _this.user.imgname = _this.s1;
            _this._service.deleteimage(_this.storeimage).subscribe(function (idata) {
                console.log("image deleted in angular");
            }, function (error) {
                console.log("exception ocured IN Image delted time");
            });
            _this._router.navigate(["/users"]);
            _this.msg = "registration success";
        }, function (error) {
            console.log("error occured check please");
            _this.msg = error;
            console.log(_this.msg);
        });
    };
    PicuploadComponent.prototype.saveuser = function () {
        var _this = this;
        this._service.addUsertoRemote(this.user).subscribe(function (data) {
            _this._router.navigate(["/users"]);
            _this.msg = "registration success";
        }, function (error) {
            console.log("error occured check please");
            _this.msg = error;
            console.log(_this.msg);
        });
    };
    PicuploadComponent.ctorParameters = function () { return [
        { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PicuploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-picupload",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./picupload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/picupload/picupload.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./picupload.component.css */ "./src/app/views/users/picupload/picupload.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PicuploadComponent);
    return PicuploadComponent;
}()); /*class*/



/***/ }),

/***/ "./src/app/views/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/views/users/users.component.ts");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edituser/edituser.component */ "./src/app/views/users/edituser/edituser.component.ts");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/views/users/adduser/adduser.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _picupload_picupload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./picupload/picupload.component */ "./src/app/views/users/picupload/picupload.component.ts");








//import { SettingsComponent } from '../settings/settings.component';
var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        data: {
            title: 'Users'
        }
    },
    { path: 'edituser', component: _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_4__["EdituserComponent"],
        data: { title: 'Edituser' }
    },
    { path: 'edituser/:id', component: _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_4__["EdituserComponent"],
        data: { title: 'Edituser' }
    },
    { path: 'adduser', component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_5__["AdduserComponent"],
        data: { title: 'Adduser' }
    },
    { path: 'picupload', component: _picupload_picupload_component__WEBPACK_IMPORTED_MODULE_7__["PicuploadComponent"],
        data: { title: 'Picupload' }
    },
    { path: 'picupload/:id', component: _picupload_picupload_component__WEBPACK_IMPORTED_MODULE_7__["PicuploadComponent"],
        data: { title: 'Picupload' }
    },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntd {\r\n  padding: 10px;\r\n  color: rgb(14, 1, 1);\r\n  font-size: large;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n  -moz-column-width: auto;\r\n       column-width: auto;\r\n  height: 36px;\r\n  padding-top: 15px;\r\n  padding-bottom: 8px;\r\n  padding-right: 16px;\r\n  padding-left: 5px;\r\n  text-align: center;\r\n}\r\nth {\r\n  color: black;\r\n  font-size: medium;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n \r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  table-layout: auto;\r\n  width: 100%;\r\n}\r\n.disable {\r\n  cursor: not-allowed;\r\n}\r\n.disable-whole-div__myDIV {\r\n  overflow: scroll;\r\n  height: 50px;\r\n  border: 1px solid #ccc;\r\n  margin: 10px;\r\n  width: 50px;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n.disable-whole-div__cover {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n  background-color: #ddd;\r\n  opacity: 0.3;\r\n}\r\nimg {\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsdUJBQWtCO09BQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw0Q0FBNEM7O0FBRTlDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTQsIDEsIDEpO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBjb2x1bW4td2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGgge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gXHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kaXNhYmxlIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uZGlzYWJsZS13aG9sZS1kaXZfX215RElWIHtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGlzYWJsZS13aG9sZS1kaXZfX2NvdmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(_router, _service, _route, _http, _activatedrouter, toastr) {
        var _this = this;
        this._router = _router;
        this._service = _service;
        this._route = _route;
        this._http = _http;
        this._activatedrouter = _activatedrouter;
        this.toastr = toastr;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = "Remove Record";
        this.popoverMessage = " Delete Yes/No ?";
        this.confirmClicked = false;
        this.cancelClicked = false;
        /*NAVBAR*/
        this.selectedfile = null;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.msg = "";
        this.s2 = " ";
        this.page = 1;
        this._service.share.subscribe(function (x) {
            _this.rolltext = x || localStorage.getItem("a");
        });
        this._service.share1.subscribe(function (x1) {
            _this.uname = x1 || localStorage.getItem("b");
        });
        this._service.rowshare1.subscribe(function (x2) {
            _this.rowperpage1 = x2;
        });
        var m;
        m = 0;
        this.m2 = 0;
        this.mode = "normal";
        this.data = new Array();
        this._service.countrecord().subscribe(function (mydata) {
            _this.rec = mydata;
            _this.m1 = parseInt(_this.rec);
        });
        if (this.mode == "normal") {
            this.config = {
                itemsPerPage: this.perpage,
                currentPage: this.m,
                totalItems: this.rec,
                id: "listing_pagination",
            };
        }
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem("opennav", "users");
        localStorage.setItem("openpage", this.page.toString());
        this._activatedrouter.queryParams.subscribe(function (params) {
            _this.rowperpage = params["rowperpage"] || localStorage.getItem("rowpp");
            _this.settingstate = params["state"] || localStorage.getItem("state");
        });
        this.perpage = this.rowperpage;
        this.perpageflag = this.settingstate;
        if (this.rolltext == "viewer") {
            this.addshowbutton = false;
            this.showdeletecaption = false;
            this.showdeletebutton = false;
            this.showeditbutton = true;
            this.showedithidebutton = false;
        }
        else if (this.rolltext == "regular") {
            this.addshowbutton = false;
            this.showdeletecaption = false;
            this.showdeletebutton = false;
            this.showeditbutton = true;
            this.showedithidebutton = false;
            this.showphotobutton = true;
        }
        else if (this.rolltext == "admin") {
            this.addshowbutton = true;
            this.showdeletecaption = true;
            this.showdeletebutton = true;
            this.showeditbutton = true;
            this.showedithidebutton = false;
        }
        this.mode = "normal";
        if (this.perpageflag == "true") {
            this.perpageflag = "true";
        }
        else {
            this.perpageflag = undefined;
        }
        this._service.countrecord().subscribe(function (mydata) {
            _this.rec = mydata;
            _this.counter = _this.rec;
        });
        if (this.perpageflag == undefined) {
            this._service.getdata(0, 3).subscribe(function (data) {
                _this.data = data;
                _this.totalItems = _this.rec;
            });
        }
        else {
            this._service.getdata(0, this.perpage).subscribe(function (data) {
                _this.data = data;
                _this.config.totalItems = _this.rec;
            });
        }
        this.page = 0;
        this._service.fetchUserListFromRemote().subscribe(function (data) { }, function (error) {
            _this.msg = error;
        });
    };
    UsersComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        if (this.mode == "searching") {
            this._service.counteruserecord(this.searchname).subscribe(function (recs) {
                _this.searchpages = parseInt(recs);
                _this.rec = _this.searchpages;
            });
            this._service
                .fetchUserByuseremail(this.x - 1, parseInt(this.perpage), this.searchname)
                .subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec = _this.searchpages;
                _this.user = datasear;
            });
        }
        else if (this.mode == "normal" || this.mode == "deleting") {
            this._service.getdata(this.x - 1, this.perpage).subscribe(function (data) {
                _this.data = data;
                _this.config.totalItems = _this.rec;
                event.totalItems = _this.rec;
                _this.user = data;
            });
            this._service.countrecord().subscribe(function (mydata) {
                _this.rec = mydata;
                _this.m1 = parseInt(_this.rec);
            });
        }
    };
    UsersComponent.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemote(id).subscribe(function (data) {
            if (data.emailId == _this.uname) {
                var un = localStorage.getItem("b");
                var stat = "logout";
                _this._router.navigate(["/login", { stat1: stat, mailid: un }]);
            }
            _this.ngOnInit();
            _this.counter--;
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            if (_this.perpageflag == "true") {
                _this._service
                    .getdata(_this.x - 1, parseInt(_this.perpage))
                    .subscribe(function (data) {
                    _this.data = data;
                });
            }
            else if (_this.perpageflag == undefined) {
                _this._service.getdata(_this.x, 3).subscribe(function (data) {
                    _this.data = data;
                });
            }
            _this.toastr.showWarning("User deleted ", " User");
        }, function (error) {
            _this.msg1 = error;
        });
    };
    UsersComponent.prototype.selectChangeHandler = function (event) {
        var _this = this;
        this.perpage = event.target.value;
        this.perpageflag = 0;
        this.mode = "normal";
        this._service.getdata(0, parseInt(this.perpage)).subscribe(function (data) {
            _this.data = data;
            _this.totalRecords = _this.rec;
        });
        this.handlePageChange(event);
    };
    UsersComponent.prototype.gotoedituser = function (id) {
        this._route.navigate(["/users/edituser", id]);
    };
    UsersComponent.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/users/adduser"]);
    };
    UsersComponent.prototype.gotopicture = function (id) {
        this._route.navigate(["/users/picupload", id]);
    };
    UsersComponent.prototype.gotosearch = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = "searching";
        this._service.counteruserecord(this.searchname).subscribe(function (recs) {
            _this.searchpages = parseInt(recs);
        });
        if (this.perpageflag == "true") {
            this._service
                .fetchUserByuseremail(this.m2, parseInt(this.perpage), name)
                .subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec = _this.searchpages;
            }, function (error) { });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserByuseremail(this.m2, this.perpage, name).subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
            }, function (error) { });
        }
    };
    UsersComponent.prototype.gotoback = function () {
        var _this = this;
        this.mode = "normal";
        this._service.countrecord().subscribe(function (mydata) {
            _this.rec = mydata;
            _this.m1 = parseInt(_this.rec);
        });
        this._service.getdata(0, this.perpage).subscribe(function (data) {
            _this.data = data;
        });
        return;
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem("a", this.rolltext);
        localStorage.setItem("b", this.uname);
        localStorage.setItem("state", this.perpageflag);
    };
    UsersComponent.prototype.onImgError = function (event) {
        event.target.src = "assets/img/noimage.png";
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.component.css */ "./src/app/views/users/users.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/views/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/views/users/users.component.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/views/users/users-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edituser/edituser.component */ "./src/app/views/users/edituser/edituser.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _picupload_picupload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picupload/picupload.component */ "./src/app/views/users/picupload/picupload.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/views/users/adduser/adduser.component.ts");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");















var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_11__["CheckModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_12__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'danger',
                }),
                ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_13__["Ng2LoadingSpinnerModule"].forRoot({
                    backdropColor: 'rgba(0, 0, 0, 0.3)',
                    spinnerColor: '#fff',
                }),
            ],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_5__["EdituserComponent"], _picupload_picupload_component__WEBPACK_IMPORTED_MODULE_8__["PicuploadComponent"], _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__["AdduserComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-users-users-module.js.map