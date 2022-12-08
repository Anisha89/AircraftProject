(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-consumable-consumable-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/addconsumable/addconsumable.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/addconsumable/addconsumable.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\"   style=\"max-width:100%\">\r\n  <div class=\"row\">\r\n     <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n           <div class=\"card-header\" >\r\n              ADD CONSUMABLE\r\n           </div>\r\n           <div class=\"card-body \">\r\n              <form  #addgseform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n              <span class =\"text-info\"></span>\r\n              <div *ngIf=\"alert1\" class=\"alert-success alert-dismissible fade show\" role=\"alert\">\r\n                 <strong>Well done!</strong> You Registered CONSUMABLE Successfully !.\r\n                 <button (click)=\"closealert()\"type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                 <span aria-hidden=\"true\">&times;</span>\r\n                 </button>\r\n              </div>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"><i class=\"icon-envelope\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\"  class=\"form-control\"  placeholder=\" Sequence Number\" name=\"sno\" [(ngModel)]=\"consumable.sno\" [class.is-invalid]=\"sno.invalid && sno.touched\"  required ngModel #sno=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"sno.errors && (sno.invalid && sno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"sno.errors?.required\"> Seqno is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"ConsumableNo\" autocomplete=\"Consumableno\" name=\"Consumableno\" [(ngModel)]=\"consumable.consumableno\" required [class.is-invalid]=\"consumableno.invalid && consumableno.touched\" #consumableno=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"consumableno.errors && (consumableno.invalid && consumableno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"consumableno.errors?.required\"> Tools No is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Part No\"  name=\"partno\"  [class.is-invalid]=\"partno.invalid && partno.touched\" [(ngModel)]=\"consumable.partno\" ngModel #partno=\"ngModel\" required >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"partno.errors && (partno.invalid && partno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"partno.errors?.required\"> Part No is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"oem\" ngModel #gdm=\"ngModel\"  [class.is-invalid]=\"gdm.invalid && gdm.touched\"  [(ngModel)]=\"consumable.oem\" name=\"oem\"  required  >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"gdm.errors && (gdm.invalid && gdm.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"gdm.errors?.required\"> Oem is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"controls\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" [class.is-invalid]=\"description.invalid && description.touched\" ngModel #description=\"ngModel\"  [(ngModel)]=\"consumable.description\"name=\"description\"  required  >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"description.errors && (description.invalid && description.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"description.errors?.required\"> Description is required.</div>\r\n                 </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"\">\r\n                 <button type=\"submit\" class=\"btn btn-primary\" [ng2-loading]=\"show\"  [config]=\"loadingConfig\"  [disabled]='!addgseform.valid' >Submit</button>\r\n              </div>\r\n              </form>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/consumable.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/consumable.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"ml-3 mt-2\"><button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button> </div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-2 mt-2\"><input class=\"form-control mr-sm-1\"   type=\"search\"  placeholder=\"Consumable-no\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/>  </div>\r\n        <div class=\"mr-2 mt-2\"><button class=\"btn btn-primary \" type=\"submit\" (click)=\"gotosearchconsumable(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackconsumable()\" ><i class=\"fa fa-refresh\"></i></button></div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <th >Image</th>\r\n              <th >S.No</th>\r\n              <th >Consumable_No</th>\r\n              <th >Part_No</th>\r\n              <th >Oem</th>\r\n              <th >Description</th>\r\n              <th >Date & Time</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor=\"let u of data | paginate: config\">\r\n              <td>\r\n                 <div *ngIf=\"u.imgname != null; then imageavail; else noimage\"></div>\r\n                 <ng-template #imageavail>\r\n                    <div>\r\n                       <img\r\n                          src=\"http://localhost:8080/uploads/{{\r\n                          u.imgname.split(',')[0]\r\n                          }}\"\r\n                          (error)=\"onImgError($event)\"\r\n                          alt=\"First slide\"\r\n                          height=\"40\"\r\n                          width=\"40\"\r\n                          />\r\n                    </div>\r\n                 </ng-template>\r\n                 <ng-template #noimage>\r\n                    <div>\r\n                       <img\r\n                          src=\"http://localhost:8080/uploads/{{ u.imgname }}\"\r\n                          (error)=\"onImgError($event)\"\r\n                          alt=\"First slide\"\r\n                          height=\"40\"\r\n                          width=\"40\"\r\n                          />\r\n                    </div>\r\n                 </ng-template>\r\n              </td>\r\n              <td>{{ u.sno }}</td>\r\n              <td>\r\n                 <div *ngIf=\"rolltext == 'regular' ||rolltext == 'admin' ||rolltext == 'viewer';\r\n                    then truepart;else elsetemplate\"></div>\r\n                 <ng-template #truepart>\r\n                    <div>\r\n                       <button type=\"button\" class=\"btn btn-block btn-link active btn-md\"(click)=\"gotoedituser(u.idconsumable)\">\r\n                       {{ u.consumableno }}\r\n                       </button>\r\n                    </div>\r\n                 </ng-template>\r\n                 <ng-template #elsetemplate>\r\n                    <div>\r\n                       {{ u.consumableno }}\r\n                    </div>\r\n                 </ng-template>\r\n              </td>\r\n              <td >{{ u.partno }}</td>\r\n              <td >{{ u.oem }}</td>\r\n              <td>{{ u.description }}</td>\r\n              <td>{{ u.date_created | date: \"yyyy-MM-dd hh:mm:ss a\" }}</td>\r\n              <td>\r\n                 <button\r\n                 class=\"btn btn-default\"\r\n                 *ngIf=\"showdeletebutton\"\r\n                 mwlConfirmationPopover\r\n                 [popoverTitle]=\"popoverTitle\"\r\n                 [popoverMessage]=\"popoverMessage\"\r\n                 placement=\"left\"\r\n                 (confirm)=\"gotodeleteuser(u.idconsumable)\"\r\n                 (cancel)=\"cancelClicked = true\"\r\n                 >\r\n                 <i class=\"fa fa-trash\"></i>\r\n                 </button>\r\n              </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination\r\n              [itemsPerPage]=\"perpage\"\r\n              id=\"listing_pagination\"\r\n              [totalItems]=\"rec1\"\r\n              [(ngModel)]=\"currentPage\"\r\n              (pageChanged)=\"handlePageChange($event)\"\r\n              ></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n  <!----/.row -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/editconsumable/editconsumable.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/editconsumable/editconsumable.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\" style=\"max-width:100%\">\r\n  <div class=\"row\">\r\n     <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n           <div class=\"card-header\"><strong> UPDATE CONSUMABLE</strong> </div>\r\n           <form id=\"spareeditform\" #consumableeditform=\"ngForm\" (ngSubmit)=\"updateeditformsumbit()\">\r\n           <fieldset [disabled]=\"enable\">\r\n              <div class=\"card-body\">\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-envelope\"></i></span>\r\n                       </div>\r\n                       <input type=\"text\"  class=\"form-control\"  placeholder=\" Sequence Number\" name=\"sno\" [(ngModel)]=\"consumable.sno\" [class.is-invalid]=\"sno.invalid && sno.touched\"  required ngModel #sno=\"ngModel\" >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"sno.errors && (sno.invalid && sno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"sno.errors?.required\"> Seqno is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"ConsumableNo\" autocomplete=\"Consumableno\" name=\"Consumableno\" [(ngModel)]=\"consumable.consumableno\" required [class.is-invalid]=\"consumableno.invalid && consumableno.touched\" #consumableno=\"ngModel\" >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"consumableno.errors && (consumableno.invalid && consumableno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"consumableno.errors?.required\"> Tools No is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"Part No\"  name=\"partno\"  [class.is-invalid]=\"partno.invalid && partno.touched\" [(ngModel)]=\"consumable.partno\" ngModel #partno=\"ngModel\" required >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"partno.errors && (partno.invalid && partno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"partno.errors?.required\"> Part No is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"oem\" ngModel #gdm=\"ngModel\"  [class.is-invalid]=\"gdm.invalid && gdm.touched\"  [(ngModel)]=\"consumable.oem\" name=\"oem\"  required  >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"gdm.errors && (gdm.invalid && gdm.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"gdm.errors?.required\"> Oem is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"controls\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"Description\" [class.is-invalid]=\"description.invalid && description.touched\" ngModel #description=\"ngModel\"  [(ngModel)]=\"consumable.description\"name=\"description\"  required  >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"description.errors && (description.invalid && description.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"description.errors?.required\"> Description is required.</div>\r\n                    </div>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"form-group\">\r\n                    <label for=\"name\">\r\n                    Image</label>\r\n                    <input type=\"file\" name=\"uploadDocument\" (change)=\"onFileSelected($event)\" #fileinput id=\"files\">\r\n                    <br>\r\n                    <carousel [interval]=\"false\" [(activeSlide)]=\"activeSlideIndex\">\r\n                    <div *ngFor=\"let subCategory of consumable.imgname?.split(',');let index=index\">\r\n                       <slide>\r\n                          <img src=\"http://localhost:8080/uploads/{{subCategory}}\" class=\"pull-right\"\r\n                             alt=\"{{subCategory}}\" class=\"d-block w-100\">\r\n                          <div class=\"carousel-caption\">\r\n                             <h4>Slide {{index}}</h4>\r\n                          </div>\r\n                       </slide>\r\n                    </div>\r\n                    </carousel>\r\n                    <br>\r\n                    <div>\r\n                       <button type=\"button\" class=\"btn btn-primary\" (click)=\"imguser()\">Add Slide\r\n                       </button>\r\n                       <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSlide()\">Remove\r\n                       </button>\r\n                    </div>\r\n                 </div>\r\n                 <div>\r\n                    <button type=\"submit\" class=\"btn btn-primary \" id=\"btnContactUs\" [disabled]=\"!consumableeditform.valid\" >\r\n                    Update</button>\r\n                 </div>\r\n              </div>\r\n           </fieldset>\r\n           </form>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/model/consumable.ts":
/*!*************************************!*\
  !*** ./src/app/model/consumable.ts ***!
  \*************************************/
/*! exports provided: Consumable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
var Consumable = /** @class */ (function () {
    function Consumable() {
    }
    return Consumable;
}());



/***/ }),

/***/ "./src/app/views/consumable/addconsumable/addconsumable.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/views/consumable/addconsumable/addconsumable.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin-left: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uc3VtYWJsZS9hZGRjb25zdW1hYmxlL2FkZGNvbnN1bWFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnN1bWFibGUvYWRkY29uc3VtYWJsZS9hZGRjb25zdW1hYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/consumable/addconsumable/addconsumable.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/consumable/addconsumable/addconsumable.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddconsumableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddconsumableComponent", function() { return AddconsumableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_consumable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/consumable */ "./src/app/model/consumable.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");







var AddconsumableComponent = /** @class */ (function () {
    function AddconsumableComponent(_router, _service, _http, toastr) {
        this._router = _router;
        this._service = _service;
        this._http = _http;
        this.toastr = toastr;
        this.consumable = new _model_consumable__WEBPACK_IMPORTED_MODULE_2__["Consumable"]();
    }
    AddconsumableComponent.prototype.ngOnInit = function () {
    };
    AddconsumableComponent.prototype.adduserformsubmit = function () {
        var _this = this;
        this.d = Date.now().toString();
        this.consumable.date_created = this.d;
        this._service.addUsertoRemoteconsumable(this.consumable).subscribe(function (data) {
            _this._router.navigate(['/consumable']);
            _this.toastr.showSuccess('Consumable added successfully', "Consumable");
        }, function (error) { return _this.toastr.showError(error, 'Consumable'); });
    };
    AddconsumableComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_3__["ConsumableserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    AddconsumableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addconsumable',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addconsumable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/addconsumable/addconsumable.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addconsumable.component.css */ "./src/app/views/consumable/addconsumable/addconsumable.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_3__["ConsumableserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], AddconsumableComponent);
    return AddconsumableComponent;
}());



/***/ }),

/***/ "./src/app/views/consumable/consumable-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/consumable/consumable-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConsumableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumableRoutingModule", function() { return ConsumableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addconsumable_addconsumable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addconsumable/addconsumable.component */ "./src/app/views/consumable/addconsumable/addconsumable.component.ts");
/* harmony import */ var _editconsumable_editconsumable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editconsumable/editconsumable.component */ "./src/app/views/consumable/editconsumable/editconsumable.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _consumable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consumable.component */ "./src/app/views/consumable/consumable.component.ts");







var routes = [
    {
        path: '',
        component: _consumable_component__WEBPACK_IMPORTED_MODULE_6__["ConsumableComponent"],
        data: {
            title: 'Consumable'
        }
    },
    {
        path: 'addconsumable',
        component: _addconsumable_addconsumable_component__WEBPACK_IMPORTED_MODULE_3__["AddconsumableComponent"],
        data: { title: 'Addconsumable' }
    },
    {
        path: 'editconsumable',
        component: _editconsumable_editconsumable_component__WEBPACK_IMPORTED_MODULE_4__["EditconsumableComponent"],
        data: { title: 'Editconsumable' }
    },
    {
        path: 'editconsumable/:id',
        component: _editconsumable_editconsumable_component__WEBPACK_IMPORTED_MODULE_4__["EditconsumableComponent"],
        data: { title: 'Editconsumable' }
    }
];
var ConsumableRoutingModule = /** @class */ (function () {
    function ConsumableRoutingModule() {
    }
    ConsumableRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConsumableRoutingModule);
    return ConsumableRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/consumable/consumable.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/consumable/consumable.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnN1bWFibGUvY29uc3VtYWJsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/consumable/consumable.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/consumable/consumable.component.ts ***!
  \**********************************************************/
/*! exports provided: ConsumableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumableComponent", function() { return ConsumableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _model_consumable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/consumable */ "./src/app/model/consumable.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");








var ConsumableComponent = /** @class */ (function () {
    function ConsumableComponent(_http, _service, _route, _activatedrouter, toastr) {
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
        this.popoverTitle = 'Remove Consumable Record';
        this.popoverMessage = ' Delete Yes/No ?';
        this.consumable = new _model_consumable__WEBPACK_IMPORTED_MODULE_5__["Consumable"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
    }
    ConsumableComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('opennav', 'consumable');
        localStorage.setItem('openpage', this.x);
        this.x = 1;
        this.m = 0;
        this.m2 = 0;
        this.mode = "normal";
        this.data = new Array();
        this._activatedrouter.queryParams.subscribe(function (params) {
            _this.rowperpage = params['rowperpage'] || localStorage.getItem('rowpp');
            _this.settingstate = params['state'] || localStorage.getItem('state');
        });
        this.perpage = this.rowperpage;
        this.perpageflag = this.settingstate;
        this.config =
            {
                itemsPerPage: this.perpage,
                currentPage: this.m,
                totalItems: this.rec1,
                id: 'listing_pagination',
            };
        this._service.countrecordconsumable().subscribe(function (mydata) {
            _this.rec1 = mydata;
            _this.m1 = _this.rec1;
            _this.counter = _this.m1;
        });
        this._service.getdataconsumable(0, this.perpage).subscribe(function (data) {
            _this.data = data;
            _this.consumable = data;
            _this.totalItems = _this.rec1;
            var activities = _this.consumable;
        } /*for first service*/); /* for first getdata*/
        if (this.rolltext == "viewer") {
            this.addshowbutton = false;
            this.showdeletecaption = false;
            this.showdeletebutton = false;
            this.showeditbutton = false;
            this.showedithidebutton = false;
        }
        else if (this.rolltext == "regular") {
            console.log('im regular');
            this.addshowbutton = false;
            this.showdeletecaption = false;
            this.showdeletebutton = false;
            this.showeditbutton = true;
            this.showedithidebutton = false;
            this.showphotobutton = true;
        }
        else if (this.rolltext == "admin") {
            console.log('im Admin');
            this.addshowbutton = true;
            this.showdeletecaption = true;
            this.showdeletebutton = true;
            this.showeditbutton = true;
            this.showedithidebutton = false;
        }
    }; /*nginit*/
    ConsumableComponent.prototype.gotoedituser = function (id) {
        this._route.navigate(["/consumable/editconsumable", id]);
    };
    ConsumableComponent.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/consumable/addconsumable"]);
    };
    ConsumableComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        if (this.mode == 'searching') {
            this._service.counteruserecordconsumable(this.searchname).subscribe(function (recs) {
                _this.searchpages = parseInt(recs);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserByconsumable(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.consumable = datasear;
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == 'deleting') {
            this._service.getdataconsumable(this.x - 1, this.perpage).subscribe(function (data) {
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.consumable = data;
            } /*for first service*/); /* for first getdata*/
            this._service.countrecordconsumable().subscribe(function (mydata) {
                _this.rec1 = mydata;
                _this.m1 = parseInt(_this.rec1);
            });
        }
    };
    ConsumableComponent.prototype.gotosearchconsumable = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        this._service.counteruserecordconsumable(this.searchname).subscribe(function (recs) {
            _this.searchpages = parseInt(recs);
        });
        if (this.perpageflag == "true") {
            this._service.fetchUserByconsumable(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Consumable Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserByconsumable(this.m2, this.perpage, name).subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Consumable  not exist");
            });
        }
    };
    ConsumableComponent.prototype.gotobackconsumable = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordconsumable().subscribe(function (mydata) {
            _this.rec1 = mydata;
            _this.m1 = parseInt(_this.rec1);
        });
        this._service.getdataconsumable(0, this.perpage).subscribe(function (data) {
            _this.data = data;
        } /*for first service*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    ConsumableComponent.prototype.addslide = function () {
        var _this = this;
        setTimeout(function () {
            var seed = Math.random().toString(36).slice(-6);
            _this.slides.push({
                image: "https://picsum.photos/seed/" + seed + "/900/500"
            });
        }, 500);
    }; /*addslide*/
    ConsumableComponent.prototype.removeSlide = function (idconsumable, index) {
        {
            var toRemove = index ? index : this.activeSlideIndex;
        }
    };
    ConsumableComponent.prototype.onImgError = function (event) {
        event.target.src = 'assets/img/noimage.png';
    };
    ConsumableComponent.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemoteconsumable(id).subscribe(function (data) {
            _this.counter--;
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            if (_this.perpageflag == "true") {
                _this._service.getdataconsumable(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    _this.data = data;
                });
            }
            else if (_this.perpageflag == undefined) {
                _this._service.getdataconsumable(_this.x - 1, 3).subscribe(function (data) {
                    _this.data = data;
                });
            }
            _this.toastr.showWarning("Deletion success", 'Consumable');
        }, function (error) {
            _this.msg1 = error;
            _this.toastr.showError(error, 'Consumable');
        });
    };
    ConsumableComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    ConsumableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consumable',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./consumable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/consumable.component.html")).default,
            providers: [{ provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./consumable.component.css */ "./src/app/views/consumable/consumable.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], ConsumableComponent);
    return ConsumableComponent;
}()); /*class*/



/***/ }),

/***/ "./src/app/views/consumable/consumable.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/consumable/consumable.module.ts ***!
  \*******************************************************/
/*! exports provided: ConsumableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumableModule", function() { return ConsumableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _consumable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consumable.component */ "./src/app/views/consumable/consumable.component.ts");
/* harmony import */ var _consumable_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consumable-routing.module */ "./src/app/views/consumable/consumable-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var _addconsumable_addconsumable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addconsumable/addconsumable.component */ "./src/app/views/consumable/addconsumable/addconsumable.component.ts");
/* harmony import */ var _editconsumable_editconsumable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editconsumable/editconsumable.component */ "./src/app/views/consumable/editconsumable/editconsumable.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");


















var ConsumableModule = /** @class */ (function () {
    function ConsumableModule() {
    }
    ConsumableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_12__["CheckModule"],
                _consumable_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConsumableRoutingModule"],
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
            declarations: [_consumable_component__WEBPACK_IMPORTED_MODULE_6__["ConsumableComponent"], _addconsumable_addconsumable_component__WEBPACK_IMPORTED_MODULE_13__["AddconsumableComponent"], _editconsumable_editconsumable_component__WEBPACK_IMPORTED_MODULE_14__["EditconsumableComponent"]]
        })
    ], ConsumableModule);
    return ConsumableModule;
}());



/***/ }),

/***/ "./src/app/views/consumable/editconsumable/editconsumable.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/views/consumable/editconsumable/editconsumable.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnN1bWFibGUvZWRpdGNvbnN1bWFibGUvZWRpdGNvbnN1bWFibGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/consumable/editconsumable/editconsumable.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/consumable/editconsumable/editconsumable.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditconsumableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditconsumableComponent", function() { return EditconsumableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _model_consumable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/consumable */ "./src/app/model/consumable.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");








var EditconsumableComponent = /** @class */ (function () {
    function EditconsumableComponent(_route, _service, _activatedrouter, _activatedRoute, _http, toastr) {
        this._route = _route;
        this._service = _service;
        this._activatedrouter = _activatedrouter;
        this._activatedRoute = _activatedRoute;
        this._http = _http;
        this.toastr = toastr;
        this.myInterval = 0;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.consumable = new _model_consumable__WEBPACK_IMPORTED_MODULE_5__["Consumable"]();
        this.selectedfile = null;
        this.img = '';
        this.msg = '';
        this.s1 = 'Consumable_';
        this.s2 = '';
        this.str = '';
        this.enable = true;
    }
    EditconsumableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemoteconsumable(id).subscribe(function (data) {
            _this.consumable = data;
            _this.storeimage = _this.consumable.imgname;
            console.log("the old image name is " + _this.storeimage);
            if (_this.storeimage == null) {
                console.log("The stored image is Null");
            }
            else {
                console.log("The stored image is Not Null" + _this.storeimage);
            }
        }, function (error) { return console.log("exception occured"); });
    };
    EditconsumableComponent.prototype.onFileSelected = function ($event) {
        var _this = this;
        this.selectedfile = document.getElementById('files').files[0];
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
        this.s2 = id.toString();
        this._service.fetchUserByIdFromRemoteconsumable(id).subscribe(function (data) {
            _this.consumable = data;
            _this.storeimage = _this.consumable.imgname;
        }, function (error) {
            console.log('exception ocured');
        });
        if (this.selectedfile == null) {
            alert("file null");
        }
    };
    EditconsumableComponent.prototype.onupload = function () {
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
            this.s1 = this.storeimage + "," + "Consumable_" + this.s2 + "_" + this.img;
        }
        this.consumable.imgname = this.s1;
        fd.append('file', this.selectedfile, "Consumable_" + this.s2 + "_" + this.img);
        this._http.post("http://localhost:8080/uploadconsumable", fd, { responseType: 'blob' })
            .subscribe(function (event) {
            _this.toastr.showSuccess('Image uploaded successfully', "Image upload");
            (function (error) { return _this.toastr.showError(error, 'Image Upload'); });
        });
    };
    EditconsumableComponent.prototype.imguser = function () {
        var _this = this;
        if (this.selectedfile) {
            this.onupload();
            this._service.addUsertoRemoteconsumable(this.consumable).subscribe(function (data) {
                _this.consumable.imgname = _this.s1;
                _this.msg = "registration success";
            }, function (error) {
                console.log('error occured check please');
                _this.msg = error;
                console.log(_this.msg);
            });
        } /*img user*/
    };
    EditconsumableComponent.prototype.refresh = function () {
        var _this = this;
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
        this.s2 = id.toString();
        this._service.fetchUserByIdFromRemoteconsumable(id).subscribe(function (data) {
            console.log('date received in Picture user');
            _this.consumable = data;
            _this.storeimage = _this.consumable.imgname;
            console.log("the old image name is " + _this.storeimage);
        }, function (error) {
            console.log('exception ocured');
        });
    };
    EditconsumableComponent.prototype.deleteSlide = function (index) {
        var _this = this;
        this.refresh();
        this.str1 = '';
        this.str = this.consumable.imgname;
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
        this.consumable.imgname = this.str1;
        this._service.addUsertoRemoteconsumable(this.consumable).subscribe(function (data) {
            _this.consumable.imgname = _this.str1;
            _this.msg = "registration success";
            _this.toastr.showWarning("Slide removed", 'Slide');
        }, function (error) {
            _this.msg = error;
            console.log(_this.msg);
            _this.toastr.showError(error, 'Slide');
        });
    };
    EditconsumableComponent.prototype.ngOnDestroy = function () {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = false;
    };
    EditconsumableComponent.prototype.updateeditformsumbit = function () {
        var _this = this;
        this._service.addUsertoRemoteconsumable(this.consumable).subscribe(function (data) {
            _this._route.navigate(['/consumable']);
            _this.toastr.showInfo('Consumable updation success', 'Update Consumable');
        }, function (error) { return _this.toastr.showError(error, 'Update Consumable'); });
    };
    EditconsumableComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    EditconsumableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editconsumable',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editconsumable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/consumable/editconsumable/editconsumable.component.html")).default,
            providers: [{ provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editconsumable.component.css */ "./src/app/views/consumable/editconsumable/editconsumable.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], EditconsumableComponent);
    return EditconsumableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-consumable-consumable-module.js.map