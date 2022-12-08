(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-spare-spare-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/addspare/addspare.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/addspare/addspare.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\"   style=\"max-width:100%\">\r\n  <div class=\"row\">\r\n     <div class=\"col-md-6\">\r\n        <div class=\"card mx-4\">\r\n           <div class=\"card-header\" >Add Spares</div>\r\n           <div class=\"card-body \">\r\n              <form #addspareform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n              <span class =\"text-info\"></span>\r\n              <div *ngIf=\"alert1\" class=\"alert-success alert-dismissible fade show\" role=\"alert\">\r\n                 <strong>Well done!</strong> You Registered Tools Successfully !.\r\n                 <button (click)=\"closealert()\"type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                 <span aria-hidden=\"true\">&times;</span>\r\n                 </button>\r\n              </div>\r\n              <h1 > {{mess1}} </h1>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"><i class=\"icon-envelope\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"SeqNo\" autocomplete=\"seqno\" name=\"seqno\" [class.is-invalid]=\"sno.invalid && sno.touched\" #sno=\"ngModel\"   [(ngModel)]=\"spare.seqno\" required >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"sno.errors && (sno.invalid && sno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"sno.errors?.required\"> Seqno is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Part No</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Part No\"  name=\"partno\" [(ngModel)]=\"spare .partno\" [class.is-invalid]=\"partno.invalid && partno.touched\"  ngModel #partno=\"ngModel\" required >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"partno.errors && (partno.invalid && partno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"partno.errors?.required\"> Part No is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Oem</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"oem\" ngModel [class.is-invalid]=\"gdm.invalid && gdm.touched\" #gdm=\"ngModel\"  [(ngModel)]=\"spare.oem\" name=\"gdm\"  required  >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"gdm.errors && (gdm.invalid && gdm.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"gdm.errors?.required\"> Oem is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" [class.is-invalid]=\"description.invalid && description.touched\"  ngModel #description=\"ngModel\"  [(ngModel)]=\"spare.description\"name=\"description\"  required  >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"description.errors && (description.invalid && description.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"description.errors?.required\"> Description is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <button type=\"submit\" class=\"btn btn-primary\"[ng2-loading]=\"show\"  [config]=\"loadingConfig\" [disabled]=\"!addspareform.valid\">Submit</button>\r\n              </form>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/editspare/editspare.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/editspare/editspare.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\" style=\"max-width:100%\">\r\n  <div class=\"row\">\r\n     <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n           <div class=\"card-header\"> UPDATE SPARE </div>\r\n           <form id=\"spareeditform\" #spareeditform=\"ngForm\" (ngSubmit)=\"updateeditformsubmit()\">\r\n           <fieldset [disabled]=\"enable\">\r\n              <div class=\"card-body\">\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-envelope\"></i></span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"SeqNo\" autocomplete=\"seqno\" name=\"seqno\" [class.is-invalid]=\"sno.invalid && sno.touched\" #sno=\"ngModel\"   [(ngModel)]=\"spare.seqno\" required >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"sno.errors && (sno.invalid && sno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"sno.errors?.required\"> Seqno is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">Part No</span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"Part No\"  name=\"partno\" [(ngModel)]=\"spare .partno\" [class.is-invalid]=\"partno.invalid && partno.touched\"  ngModel #partno=\"ngModel\" required >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"partno.errors && (partno.invalid && partno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"partno.errors?.required\"> Part No is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">Oem</span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"oem\" ngModel [class.is-invalid]=\"gdm.invalid && gdm.touched\" #gdm=\"ngModel\"  [(ngModel)]=\"spare.oem\" name=\"gdm\"  required  >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"gdm.errors && (gdm.invalid && gdm.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"gdm.errors?.required\"> Oem is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">Description</span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"Description\" [class.is-invalid]=\"description.invalid && description.touched\"  ngModel #description=\"ngModel\"  [(ngModel)]=\"spare.description\"name=\"description\"  required  >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"description.errors && (description.invalid && description.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"description.errors?.required\"> Description is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"form-group\">\r\n                    <label for=\"name\">\r\n                    Image</label>\r\n                    <input type=\"file\" name=\"uploadDocument\" (change)=\"onFileSelected($event)\" #fileinput id=\"files\">\r\n                    <br>\r\n                    <br>\r\n                    <carousel [interval]=\"false\"  [(activeSlide)]=\"activeSlideIndex\"  [showIndicators]=\"showIndicator\" >\r\n                    <div *ngFor=\"let subCategory of spare.imgname?.split(',');let index=index; let last=last;\">\r\n                       <slide >\r\n                          <img src=\"http://localhost:8080/uploads/{{subCategory}}\"  \r\n                             alt=\"{{subCategory}}\" class=\"d-block w-100\">\r\n                          <div class=\"carousel-caption\">\r\n                             <h4 align=\"left\">Slide {{index}}</h4>\r\n                          </div>\r\n                       </slide>\r\n                    </div>\r\n                    </carousel>\r\n                    <br>\r\n                    <div>\r\n                       <button type=\"button\" class=\"btn btn-primary\" (click)=\"imguser()\">Add Slide\r\n                       </button>\r\n                       <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSlide()\">Remove\r\n                       </button>\r\n                    </div>\r\n                 </div>\r\n                 <div>\r\n                    <button type=\"submit\" class=\"btn btn-primary \" id=\"btnContactUs\" [disabled]=\"!spareeditform.valid\"  >\r\n                    Update</button>\r\n                 </div>\r\n              </div>\r\n           </fieldset>\r\n           </form>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/spare.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/spare.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"ml-3 mt-2\"><button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button> </div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-2 mt-2\"><input class=\"form-control mr-sm-1\"   type=\"search\"  placeholder=\"SEQ-NO/OEM\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/>  </div>\r\n        <div class=\"mr-2 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"  (click)=\"gotosearchspare(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"  (click)=\"gotobackspare()\" ><i class=\"fa fa-refresh\"></i></button></div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Image</th>\r\n              <th >Seq_No</th>\r\n              <th >Part_No</th>\r\n              <th >Oem</th>\r\n              <th >Description</th>\r\n              <th >Date_Created</th>\r\n              <th  *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor=\"let u of data | paginate: config\">\r\n              <td>\r\n                 <div *ngIf=\"u.imgname != null; then imageavail; else noimage\"></div>\r\n                 <ng-template #imageavail>\r\n                    <div>\r\n                       <img\r\n                          src=\"http://localhost:8080/uploads/{{\r\n                          u.imgname.split(',')[0]\r\n                          }}\"\r\n                          (error)=\"onImgError($event)\"\r\n                          alt=\"First slide\"\r\n                          height=\"40\"\r\n                          width=\"40\"\r\n                          />\r\n                    </div>\r\n                 </ng-template>\r\n                 <ng-template #noimage>\r\n                    <div>\r\n                       <img\r\n                          src=\"http://localhost:8080/uploads/{{ u.imgname }}\"\r\n                          (error)=\"onImgError($event)\"\r\n                          alt=\"First slide\"\r\n                          height=\"40\"\r\n                          width=\"40\"\r\n                          />\r\n                    </div>\r\n                 </ng-template>\r\n              </td>\r\n              <td >\r\n                 <div\r\n                    *ngIf=\"\r\n                    rolltext == 'regular' ||\r\n                    rolltext == 'admin' ||\r\n                    rolltext == 'viewer';\r\n                    then truepart;\r\n                    else elsetemplate\r\n                    \"\r\n                    ></div>\r\n                 <ng-template #truepart>\r\n                    <div>\r\n                       <button\r\n                          type=\"button\"\r\n                          class=\"btn btn-block btn-link active btn-lg\"\r\n                          (click)=\"gotoedituser(u.idspare)\"\r\n                          >\r\n                       {{ u.seqno }}\r\n                       </button>\r\n                    </div>\r\n                 </ng-template>\r\n                 <ng-template #elsetemplate>\r\n                    <div>\r\n                       {{ u.seqno }}\r\n                    </div>\r\n                 </ng-template>\r\n              </td>\r\n              <td>{{ u.partno }}</td>\r\n              <td>{{ u.oem }}</td>\r\n              <td>{{ u.description }}</td>\r\n              <td>{{ u.date_created | date: \"yyyy-MM-dd hh:mm:ss a\" }}</td>\r\n              <td >\r\n                 <button\r\n                 class=\"btn btn-default\"\r\n                 *ngIf=\"showdeletebutton\"\r\n                 mwlConfirmationPopover\r\n                 [popoverTitle]=\"popoverTitle\"\r\n                 [popoverMessage]=\"popoverMessage\"\r\n                 placement=\"left\"\r\n                 (confirm)=\"gotodeleteuser(u.idspare)\"\r\n                 (cancel)=\"cancelClicked = true\"\r\n                 >\r\n                 <i class=\"fa fa-trash\"></i>\r\n                 </button>\r\n              </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination\r\n              [itemsPerPage]=\"perpage\"\r\n              id=\"listing_pagination\"\r\n              [totalItems]=\"rec1\"\r\n              [(ngModel)]=\"currentPage\"\r\n              (pageChanged)=\"handlePageChange($event)\"\r\n              ></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/model/spare.ts":
/*!********************************!*\
  !*** ./src/app/model/spare.ts ***!
  \********************************/
/*! exports provided: Spare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
var Spare = /** @class */ (function () {
    function Spare() {
    }
    return Spare;
}());



/***/ }),

/***/ "./src/app/views/spare/addspare/addspare.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/spare/addspare/addspare.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin-left: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3BhcmUvYWRkc3BhcmUvYWRkc3BhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NwYXJlL2FkZHNwYXJlL2FkZHNwYXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/spare/addspare/addspare.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/spare/addspare/addspare.component.ts ***!
  \************************************************************/
/*! exports provided: AddspareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddspareComponent", function() { return AddspareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_spare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/spare */ "./src/app/model/spare.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");







var AddspareComponent = /** @class */ (function () {
    function AddspareComponent(_router, _service, _http, toastr) {
        this._router = _router;
        this._service = _service;
        this._http = _http;
        this.toastr = toastr;
        this.spare = new _model_spare__WEBPACK_IMPORTED_MODULE_2__["Spare"]();
    }
    AddspareComponent.prototype.ngOnInit = function () {
    };
    AddspareComponent.prototype.adduserformsubmit = function () {
        var _this = this;
        this.d = Date.now().toString();
        this.spare.date_created = this.d;
        this._service.addUsertoRemotespare(this.spare).subscribe(function (data) {
            _this.toastr.showSuccess('Spare added successfully', "Spare");
            _this._router.navigate(['/spare']);
        }, function (error) {
            console.log("error");
            (function (error) { return _this.toastr.showError(error, 'Spare'); });
        });
    };
    AddspareComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_3__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    AddspareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addspare',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addspare.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/addspare/addspare.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addspare.component.css */ "./src/app/views/spare/addspare/addspare.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_3__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], AddspareComponent);
    return AddspareComponent;
}());



/***/ }),

/***/ "./src/app/views/spare/editspare/editspare.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/spare/editspare/editspare.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w-100 {\r\n  width: 100% !important;\r\n  height: 410px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3BhcmUvZWRpdHNwYXJlL2VkaXRzcGFyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NwYXJlL2VkaXRzcGFyZS9lZGl0c3BhcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LTEwMCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/spare/editspare/editspare.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/spare/editspare/editspare.component.ts ***!
  \**************************************************************/
/*! exports provided: EditspareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditspareComponent", function() { return EditspareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _model_spare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/spare */ "./src/app/model/spare.ts");








var EditspareComponent = /** @class */ (function () {
    function EditspareComponent(_route, _service, _activatedrouter, _activatedRoute, _http, toastr) {
        this._route = _route;
        this._service = _service;
        this._activatedrouter = _activatedrouter;
        this._activatedRoute = _activatedRoute;
        this._http = _http;
        this.toastr = toastr;
        this.myInterval = 0;
        this.showIndicator = true;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.spare = new _model_spare__WEBPACK_IMPORTED_MODULE_7__["Spare"]();
        this.selectedfile = null;
        this.img = '';
        this.msg = '';
        this.s1 = 'Spare_';
        this.s2 = '';
        this.str = '';
        this.enable = true;
    }
    EditspareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotespare(id).subscribe(function (data) {
            _this.spare = data;
            _this.storeimage = _this.spare.imgname;
            if (_this.storeimage == null) {
                console.log("The stored image is Null");
            }
            else {
                console.log("The stored image is Not Null" + _this.storeimage);
            }
        }, function (error) { return console.log("exception occured"); });
    };
    EditspareComponent.prototype.onFileSelected = function ($event) {
        var _this = this;
        this.selectedfile = document.getElementById('files').files[0];
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
        this.s2 = id.toString();
        this._service.fetchUserByIdFromRemotespare(id).subscribe(function (data) {
            _this.spare = data;
            _this.storeimage = _this.spare.imgname;
        }, function (error) {
            console.log('exception ocured');
        });
        if (this.selectedfile == null) {
        }
    };
    EditspareComponent.prototype.onupload = function () {
        var _this = this;
        var fd = new FormData();
        this.img = this.selectedfile.name;
        if (this.storeimage == null) {
            this.s1 = this.s1 + this.s2 + "_" + this.img;
        }
        else if (this.storeimage.length == 0) {
            this.s1 = this.s1 + this.s2 + "_" + this.img;
        }
        else {
            this.s1 = this.storeimage + "," + "Spare_" + this.s2 + "_" + this.img;
        }
        this.spare.imgname = this.s1;
        fd.append('file', this.selectedfile, "Spare_" + this.s2 + "_" + this.img);
        this._http.post("http://localhost:8080/uploadspare", fd, { responseType: "blob" })
            .subscribe(function (event) {
            _this.toastr.showSuccess('Image uploaded successfully', "Image upload");
            (function (error) { return _this.toastr.showError(error, 'Image Upload'); });
        });
    };
    EditspareComponent.prototype.imguser = function () {
        var _this = this;
        if (this.selectedfile) {
            this.onupload();
            this._service.addUsertoRemotespare(this.spare).subscribe(function (data) {
                _this.spare.imgname = _this.s1;
                _this.msg = "registration success";
            }, function (error) {
                console.log('error occured check please');
                _this.msg = error;
                console.log(_this.msg);
            });
        }
    };
    EditspareComponent.prototype.refresh = function () {
        var _this = this;
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
        this.s2 = id.toString();
        this._service.fetchUserByIdFromRemotespare(id).subscribe(function (data) {
            _this.spare = data;
            _this.storeimage = _this.spare.imgname;
        }, function (error) {
            console.log('exception ocured');
        });
    };
    EditspareComponent.prototype.deleteSlide = function (index) {
        var _this = this;
        this.refresh();
        this.str1 = '';
        this.str = this.spare.imgname;
        this.res1 = this.str.split(",").length;
        this.res = this.str.split(",");
        var i = 0;
        var toRemove = index ? index : this.activeSlideIndex;
        while (i < this.res1) {
            if (i != toRemove) {
                if (this.str1 != '') {
                    this.str1 = this.str1 + "," + this.res[i];
                }
                else {
                    this.str1 = this.res[i];
                }
            }
            i++;
        }
        this.spare.imgname = this.str1;
        this._service.addUsertoRemotespare(this.spare).subscribe(function (data) {
            _this.spare.imgname = _this.str1;
            _this.msg = "registration success";
            _this.toastr.showWarning("Slide removed", 'Slide');
        }, function (error) {
            console.log('error occured check please');
            _this.msg = error;
            _this.toastr.showError(error, 'Slide');
        });
    };
    EditspareComponent.prototype.ngOnDestroy = function () {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = false;
    };
    EditspareComponent.prototype.updateeditformsubmit = function () {
        var _this = this;
        this._service.addUsertoRemotespare(this.spare).subscribe(function (data) {
            _this._route.navigate(['/spare']);
            _this.toastr.showInfo('Spare updation success', 'Update Spare');
        }, function (error) { return _this.toastr.showError(error, 'Update '); });
    };
    EditspareComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_5__["SpareserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    EditspareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editspare',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editspare.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/editspare/editspare.component.html")).default,
            providers: [{ provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editspare.component.css */ "./src/app/views/spare/editspare/editspare.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_5__["SpareserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], EditspareComponent);
    return EditspareComponent;
}());



/***/ }),

/***/ "./src/app/views/spare/spare-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/spare/spare-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SpareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpareRoutingModule", function() { return SpareRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spare.component */ "./src/app/views/spare/spare.component.ts");
/* harmony import */ var _editspare_editspare_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editspare/editspare.component */ "./src/app/views/spare/editspare/editspare.component.ts");
/* harmony import */ var _addspare_addspare_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addspare/addspare.component */ "./src/app/views/spare/addspare/addspare.component.ts");







var routes = [
    {
        path: '',
        component: _spare_component__WEBPACK_IMPORTED_MODULE_4__["SpareComponent"],
        data: {
            title: 'Spare'
        }
    },
    { path: 'editspare', component: _editspare_editspare_component__WEBPACK_IMPORTED_MODULE_5__["EditspareComponent"],
        data: { title: 'EditSpare' }
    },
    { path: 'editspare/:id', component: _editspare_editspare_component__WEBPACK_IMPORTED_MODULE_5__["EditspareComponent"],
        data: { title: 'EditSpare' }
    },
    { path: 'addspare', component: _addspare_addspare_component__WEBPACK_IMPORTED_MODULE_6__["AddspareComponent"],
        data: { title: 'AddSpare' }
    },
];
var SpareRoutingModule = /** @class */ (function () {
    function SpareRoutingModule() {
    }
    SpareRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SpareRoutingModule);
    return SpareRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/spare/spare.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/spare/spare.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a {\r\n  height: 36px;\r\n  padding-top: 15px;\r\n  padding-bottom: 8px;\r\n  padding-right: 16px;\r\n  padding-left: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3BhcmUvc3BhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zcGFyZS9zcGFyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEge1xyXG4gIGhlaWdodDogMzZweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/spare/spare.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/spare/spare.component.ts ***!
  \************************************************/
/*! exports provided: SpareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpareComponent", function() { return SpareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _model_spare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/spare */ "./src/app/model/spare.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");








var SpareComponent = /** @class */ (function () {
    function SpareComponent(_http, _service, _route, _activatedrouter, toastr) {
        var _this = this;
        this._http = _http;
        this._service = _service;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.toastr = toastr;
        this.acitvities = [];
        this.start = 1;
        this.activeSlideIndex = 0;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = "Remove SPARE Record";
        this.popoverMessage = " Delete Yes/No ?";
        this.spare = new _model_spare__WEBPACK_IMPORTED_MODULE_5__["Spare"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) {
            _this.rolltext = x || localStorage.getItem("a");
        });
        this._service.share1.subscribe(function (x1) {
            _this.uname = x1 || localStorage.getItem("b");
        });
    }
    SpareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        localStorage.setItem("opennav", "spare");
        localStorage.setItem("openpage", this.x);
        this.m = 0;
        this.m2 = 0;
        this.mode = "normal";
        this.data = new Array();
        this._activatedrouter.queryParams.subscribe(function (params) {
            _this.rowperpage = params["rowperpage"] || localStorage.getItem("rowpp");
            _this.settingstate = params["state"] || localStorage.getItem("state");
        });
        this.perpage = this.rowperpage;
        this.perpageflag = this.settingstate;
        this.config = {
            itemsPerPage: this.perpage,
            currentPage: this.m,
            totalItems: this.rec1,
            id: "listing_pagination",
        };
        this._service.countrecordspare().subscribe(function (mydata) {
            _this.rec1 = mydata;
            _this.m1 = _this.rec1;
            _this.counter = _this.m1;
        });
        this._service.getdataspare(0, this.perpage).subscribe(function (data) {
            _this.data = data;
            _this.spare = data;
            _this.totalItems = _this.rec1;
            var activities = _this.spare;
        } /*for first service*/); /* for first getdata*/
        if (this.rolltext == "viewer") {
            this.addshowbutton = false;
            this.showdeletecaption = false;
            this.showdeletebutton = false;
            this.showeditbutton = false;
            this.showedithidebutton = false;
        }
        else if (this.rolltext == "regular") {
            console.log("im regular");
            this.addshowbutton = false;
            this.showdeletecaption = false;
            this.showdeletebutton = false;
            this.showeditbutton = true;
            this.showedithidebutton = false;
            this.showphotobutton = true;
        }
        else if (this.rolltext == "admin") {
            console.log("im Admin");
            this.addshowbutton = true;
            this.showdeletecaption = true;
            this.showdeletebutton = true;
            this.showeditbutton = true;
            this.showedithidebutton = false;
        }
    }; /*nginit*/
    SpareComponent.prototype.gotoedituser = function (id) {
        this._route.navigate(["/spare/editspare", id]);
    };
    SpareComponent.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/spare/addspare"]);
    };
    SpareComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        if (this.mode == "searching") {
            this._service.counteruserecordspare(this.searchname).subscribe(function (recs) {
                _this.searchpages = parseInt(recs);
                _this.rec1 = _this.searchpages;
            });
            this._service
                .fetchUserByspare(this.x - 1, parseInt(this.perpage), this.searchname)
                .subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.spare = datasear;
            });
        }
        else if (this.mode == "normal" || this.mode == "deleting") {
            this._service.getdataspare(this.x - 1, this.perpage).subscribe(function (data) {
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.spare = data;
            } /*for first service*/); /* for first getdata*/
            this._service.countrecordspare().subscribe(function (mydata) {
                _this.rec1 = mydata;
                _this.m1 = parseInt(_this.rec1);
            });
        } /*else*/
    }; /* handle page change*/
    SpareComponent.prototype.gotosearchspare = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = "searching";
        this._service.counteruserecordspare(this.searchname).subscribe(function (recs) {
            _this.searchpages = parseInt(recs);
        });
        if (this.perpageflag == "true") {
            this._service
                .fetchUserByspare(this.m2, parseInt(this.perpage), name)
                .subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserByspare(this.m2, this.perpage, name).subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    SpareComponent.prototype.gotobackspare = function () {
        var _this = this;
        this.mode = "normal";
        this._service.countrecordspare().subscribe(function (mydata) {
            _this.rec1 = mydata;
            _this.m1 = parseInt(_this.rec1);
        });
        this._service.getdataspare(0, this.perpage).subscribe(function (data) {
            _this.data = data;
        } /*for first service*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    SpareComponent.prototype.addslide = function () {
        var _this = this;
        setTimeout(function () {
            var seed = Math.random().toString(36).slice(-6);
            _this.slides.push({
                image: "https://picsum.photos/seed/" + seed + "/900/500",
            });
        }, 500);
    };
    SpareComponent.prototype.removeSlide = function (idspare, index) {
        {
            var toRemove = index ? index : this.activeSlideIndex;
        }
    };
    SpareComponent.prototype.onImgError = function (event) {
        event.target.src = "assets/img/noimage.png";
    };
    SpareComponent.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotespare(id).subscribe(function (data) {
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            if (_this.perpageflag == "true") {
                _this._service
                    .getdataspare(_this.x - 1, parseInt(_this.perpage))
                    .subscribe(function (data) {
                    _this.data = data;
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdataspare(_this.x, 3).subscribe(function (data) {
                    _this.data = data;
                });
            }
            _this.toastr.showWarning("Deletion success", 'Spare');
        }, function (error) {
            _this.msg1 = error;
            _this.toastr.showError(error, 'Spare');
        });
    };
    SpareComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    SpareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-spare",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./spare.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/spare/spare.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./spare.component.css */ "./src/app/views/spare/spare.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], SpareComponent);
    return SpareComponent;
}()); /*Class */



/***/ }),

/***/ "./src/app/views/spare/spare.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/spare/spare.module.ts ***!
  \*********************************************/
/*! exports provided: SpareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpareModule", function() { return SpareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _spare_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spare.component */ "./src/app/views/spare/spare.component.ts");
/* harmony import */ var _spare_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spare-routing.module */ "./src/app/views/spare/spare-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var _addspare_addspare_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addspare/addspare.component */ "./src/app/views/spare/addspare/addspare.component.ts");
/* harmony import */ var _editspare_editspare_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editspare/editspare.component */ "./src/app/views/spare/editspare/editspare.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");















//import { PicgseComponent } from './picgse/picgse.component';



var SpareModule = /** @class */ (function () {
    function SpareModule() {
    }
    SpareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_12__["CheckModule"],
                _spare_routing_module__WEBPACK_IMPORTED_MODULE_7__["SpareRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'danger',
                }),
                ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__["Ng2LoadingSpinnerModule"].forRoot({
                    backdropColor: 'rgba(0, 0, 0, 0.3)',
                    spinnerColor: '#fff',
                }),
            ],
            declarations: [_spare_component__WEBPACK_IMPORTED_MODULE_6__["SpareComponent"], _addspare_addspare_component__WEBPACK_IMPORTED_MODULE_13__["AddspareComponent"], _editspare_editspare_component__WEBPACK_IMPORTED_MODULE_14__["EditspareComponent"]]
        })
    ], SpareModule);
    return SpareModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-spare-spare-module.js.map