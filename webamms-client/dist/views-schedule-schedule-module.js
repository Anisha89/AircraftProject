(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-schedule-schedule-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/addschedule/addschedule.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/addschedule/addschedule.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\" style=\"width:100%;\">\r\n  <div class=\"row\">\r\n     <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n           <div class=\"card-header\" >\r\n              Add Schedule\r\n           </div>\r\n           <div class=\"card-body\">\r\n              <form #addscheduleform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n              <div class=\"row\">\r\n                 <div class=\"form-group 1 col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">Sequence no</span>\r\n                       </div>\r\n                       <input type=\"text\"  class=\"form-control\"  placeholder=\"Sequence no\" name=\"sno\" [(ngModel)]=\"schedule.sno\" required ngModel #sno=\"ngModel\" >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group 2 col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">Aircraft</span>\r\n                       </div>\r\n                       <select  id=\"aircraft\"  [(ngModel)]=\"schedule.aircraft\" name=\"aircraft\" #aircraft class=\"form-control\" required  (change)=\"validate_aircraft($event)\" ngModel #aircraft=\"ngModel\" >\r\n                       <option  *ngFor =\"let array of aircraft1\" [value]=\"array.aircraft\" >{{array.aircraft}}</option>\r\n                       </select>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">service</span>\r\n                       </div>\r\n                       <select style='width:200px' id=\"service\"  placeholder=\"service\"  autocomplete=\"service\"name=\"service\" #service class=\"form-control\"   (change)=\"selectChangeHandler($event)\" [(ngModel)]=\"schedule.service\" required  >\r\n                       <option value=\"\" disabled>Select Service </option>\r\n                       <option value=\"14 day\">14 day</option>\r\n                       <option value=\"1 mo\">1 mo</option>\r\n                       <option value=\"3 mo\">3 mo</option>\r\n                       <option value=\"6 mo\">6 mo</option>\r\n                       <option value=\"12 mo\">12 mo</option>\r\n                       <option value=\"15 mo\">15 mo</option>\r\n                       <option value=\"18 mo\">18 mo</option>\r\n                       <option value=\"24 mo\">24 mo</option>\r\n                       <option value=\"30 mo\">30 mo</option>\r\n                       <option value=\"36 mo\">36 mo</option>\r\n                       <option value=\"48 mo\">48 mo</option>\r\n                       <option value=\"60 mo\">60 mo</option>\r\n                       <option value=\"72 mo\">72 mo</option>\r\n                       <option value=\"90 mo\">90 mo</option>\r\n                       <option value=\"120 mo\">120 mo</option>\r\n                       </select>\r\n                    </div>\r\n                    <div class=\"text-danger\">  {{ msg}}  </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">servicedue</span>\r\n                       </div>\r\n                       <input type=\"date\" class=\"form-control\" placeholder=\"startdate\"  name=\"servicedate\" [(ngModel)]=\"schedule.str_servicedue\" ngModel #servicedue=\"ngModel\" required >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div\r\n                       class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">startdate</span>\r\n                       </div>\r\n                       <input type=\"date\" class=\"form-control\" placeholder=\"startdate\"  name=\"startdate\" [(ngModel)]=\"schedule.str_startdate\" ngModel #startdue=\"ngModel\" required >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">status</span>\r\n                       </div>\r\n                       <select style='width:100px'  id=\"status\"  name=\"status\" #name [(ngModel)]=\"schedule.status\" class=\"form-control\" (change)=\"selectChangeHandler($event)\">\r\n                       <option value=\"Progress\">Progress</option>\r\n                       <option value=\"Completed\">Completed</option>\r\n                       <option value=\"NotStarted\">Not Started</option>\r\n                       </select>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">enddate</span>\r\n                       </div>\r\n                       <input type=\"date\" class=\"form-control\" placeholder=\"enddate\" ngModel #enddate=\"ngModel\"  [(ngModel)]=\"schedule.str_enddate\" name=\"enddate\"  required  >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">lastservice</span>\r\n                       </div>\r\n                       <input type=\"date\" class=\"form-control\" placeholder=\"lastservice\" ngModel #lastservice=\"ngModel\"  [(ngModel)]=\"schedule.str_lastservice\"name=\"lastservice\"  required  >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">nextservice</span>\r\n                       </div>\r\n                       <input type=\"date\" class=\"form-control\" placeholder=\"nextservice\" ngModel #nextservice=\"ngModel\"  [(ngModel)]=\"schedule.str_nextservice\"name=\"enddate\"  required  >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">alert</span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"alert\" ngModel #alert=\"ngModel\"  [(ngModel)]=\"schedule.alert\"name=\"alert\"  required  >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">servicecompleted</span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"servicecompleted\"  name=\"servicecompleted\" [(ngModel)]=\"schedule.servicecompleted\" ngModel #servicecompleted=\"ngModel\" required >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">concessionnates</span>\r\n                       </div>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"concessionnates\"  name=\"concessionnates\" [(ngModel)]=\"schedule.concessionnates\" ngModel #concessionnates=\"ngModel\" required >\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"form-group col-6\">\r\n                    <button type=\"button\"[ng2-loading]=\"show\" [config]=\"loadingConfig\" (click)=\"adduserformsubmit()\" class=\"btn btn-sm btn-primary\"  [disabled]=\"!addscheduleform.valid\">Submit</button>\r\n                 </div>\r\n              </div>\r\n              </form>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/editschedule/editschedule.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/editschedule/editschedule.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\" style=\"max-width:100%\">\r\n  <div class=\"card-header\" >\r\n     <strong>Edit Schedule</strong> \r\n  </div>\r\n  <br>\r\n  <div class=\"card-body\">\r\n     <form name=\"editscheduleform\"#editscheduleform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n     <fieldset [disabled]=\"enable\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">S.no</span>\r\n                    </div>\r\n                    <input type=\"text\" readonly class=\"form-control\"  placeholder=\"sno\" name=\"sno\" [(ngModel)]=\"schedule.sno\" required ngModel #sno=\"ngModel\" > \r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Service</span>\r\n                    </div>\r\n                    <input type=\"text\" readonly class=\"form-control\" placeholder=\"service\" autocomplete=\"service\" name=\"service\" [(ngModel)]=\"schedule.service\" required >\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Service Due</span>\r\n                    </div>\r\n                    <input type=\"date\"  readonly class=\"form-control\" placeholder=\"servicedue\"  name=\"servicedue\" [(ngModel)]=\"schedule.str_servicedue\" ngModel #servicedue=\"ngModel\" required >\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Last Service </span>\r\n                    </div>\r\n                    <input type=\"date\"  readonly class=\"form-control\" placeholder=\"lastservice\"  name=\"lastservice\" [(ngModel)]=\"schedule.str_lastservice\" ngModel #lastservice=\"ngModel\" required >\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Alert Days</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"alert\" ngModel #alert=\"ngModel\"  [(ngModel)]=\"schedule.alert\"name=\"alert\"  required  >\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"> Completed Service</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"completedservice\"  name=\"servicecompleted\" [(ngModel)]=\"schedule.servicecompleted\" ngModel #servicecompleted=\"ngModel\" required >\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\"> Start Date</span>\r\n                    </div>\r\n                    <input type=\"date\" [disabled]=this.schedule.startdate class=\"form-control\" placeholder=\"startdate\"  name=\"startdate\" [(ngModel)]=\"schedule.str_startdate\" ngModel #startdate=\"ngModel\" required >\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group row\">\r\n                 <label class=\"col-sm-1 col-form-label mr-1\" for=\"inline-radios\" > Status   </label>\r\n                 <div class=\"col-md-10 col-form-label\">\r\n                    <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\r\n                       <input type=\"radio\" id=\"myradio\"name=\"myradio\" value=\"Not Started\" [checked]=\"this.schedule.status=='Not Started'?true:false\" [disabled]=\"this.schedule.status=='Progress'||this.schedule.status=='Completed'?true:false\" (change)=\"selectChangeHandler2($event)\" >&nbsp; Not Started&nbsp;\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline mr-1\">\r\n                       <input type=\"radio\" id=\"myradio\" name=\"myradio\" value=\"Progress\" [checked]=\"this.schedule.status=='Progress'?true:false\"  (change)=\"selectChangeHandler($event)\" >&nbsp;Progress&nbsp;\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline mr-1\">\r\n                       <input type=\"radio\" id=\"myradio\" name=\"myradio\" value=\"Completed\" [checked]=\"\" [disabled]=\"this.schedule.status=='Not Started'\" (click)=\"toogle()\" (change)=\"selectChangeHandler1($event)\" (change)=\"selectnextservice($event)\">&nbsp; Completed&nbsp;  \r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <ng-container class=\"row\" *ngIf=\"showme\">\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"> End Date</span>\r\n                       </div>\r\n                       <input type=\"date\"   class=\"form-control\" placeholder=\"enddate\"  name=\"enddate\" [(ngModel)]=\"schedule.str_enddate\" (change)=\"selectChangeHandler1($event)\"  ngModel #enddate=\"ngModel\" required >\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">Next Service</span>\r\n                       </div>\r\n                       <input type=\"date\" readonly class=\"form-control\"  ngModel #nextservice=\"ngModel\"  [(ngModel)]=\"schedule.str_nextservice\"    name=\"nextservice\"  required  >\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </ng-container>\r\n           <div class=\"form-group row\">\r\n              <label class=\"col-md-12 col-form-label\" for=\"textarea-input\">Concessionnates</label>\r\n              <div  class=\"col-md-12\">\r\n                 <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"3\"style=\"\" class=\"form-control\" placeholder=\"Concessionnates\"[(ngModel)]=\"schedule.concessionnates\" ngModel #concessionnates=\"ngModel\" required></textarea>\r\n              </div>\r\n           </div>\r\n           <div>\r\n              <button type=\"button\"[ng2-loading]=\"show\" [config]=\"loadingConfig\"(click)=\"adduserformsubmit(schedule.aircraft)\" class=\"btn btn-sm btn-primary\">update</button>\r\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"goback(schedule.aircraft)\">Cancel</button>\r\n           </div>\r\n        </div>\r\n     </fieldset>\r\n     </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/schedule.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/schedule.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n     <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n           <div class=\"card-header bg-white \" style=\"border:none;\">\r\n              <div class=\"d-flex justify-content-between\">\r\n                 <div class=\"d-flex\">\r\n                  <div class=\"ml-3 mt-2\">  <button class=\"btn btn-primary\" type=\"button\"(click)=\"gotoaddaccount()\"  *ngIf=\"addshowbutton\" >New</button>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"d-flex\">\r\n                    <div class=\"mr-2 mt-2\">\r\n                       <span>Aircraft:</span>\r\n                    </div>\r\n                    <div>\r\n                       <select style='margin-right: auto;' id=\"aircraft\"  [(ngModel)]='nrSelect' name=\"saircraft\" #aircraft class=\"form-control\" (change)=\"selectChangeHandler3($event)\" >\r\n                       <option  *ngFor =\"let array of aircraft1\" [value]=\"array.aircraft\">{{array.aircraft}}</option>\r\n                       </select>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"card-body\" >\r\n              <table class=\"table table-sm\">\r\n                 <thead>\r\n                    <tr >\r\n                       <th>S.No </th>\r\n                       <th>Service</th>\r\n                       <th>Service_Due</th>\r\n                       <th>Status</th>\r\n                       <th>Start_Date</th>\r\n                       <th>End_Date</th>\r\n                       <th>Last_Service</th>\r\n                       <th>Alert_Days</th>\r\n                       <th>Service_Completed</th>\r\n                       <th>Concessionnates</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <div *ngIf=\"(isgreen);then greenpart;\"></div>\r\n                    <ng-template #greenpart>\r\n                       <tr class={{u.color}} *ngFor =\"let u of data\" >\r\n                          <td >{{u.sno}}</td>\r\n                          <td >\r\n                             <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin')||(rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n                             <ng-template #truepart>\r\n                                <div>\r\n                                   <button type=\"button\" class=\"btn btn-block btn-link active btn-sm\" style=\"margin-left:0;font-size:medium;text-align:center;color:#000; ;\" (click)=\"gotoedituser(u.idschedule)\">{{u.service}}</button>\r\n                                </div>\r\n                             </ng-template>\r\n                             <ng-template #elsetemplate>\r\n                                <div>\r\n                                   {{u.service}}\r\n                                </div>\r\n                             </ng-template>\r\n                          </td>\r\n                          <td>{{u.str_servicedue}}</td>\r\n                          <td>{{u.status}}</td>\r\n                          <td>{{u.str_startdate}}</td>\r\n                          <td>{{u.str_enddate}}</td>\r\n                          <td>{{fromEpoch(u.lastservice)}}</td>\r\n                          <td>{{u.alert}}</td>\r\n                          <td>{{u.servicecompleted}}</td>\r\n                          <td>{{u.concessionnates}}</td>\r\n                       </tr>\r\n                    </ng-template>\r\n                 </tbody>\r\n              </table>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/service/aircraft.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/aircraft.service.ts ***!
  \*********************************************/
/*! exports provided: AircraftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftService", function() { return AircraftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AircraftService = /** @class */ (function () {
    function AircraftService(http) {
        this.http = http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.baseURL = "http://localhost:8080/api/v1/aircraftinfo";
    }
    AircraftService.prototype.getAircraftinfoList = function () {
        return this.http.get("" + this.baseURL);
    };
    AircraftService.prototype.getAircraftinfoById = function (id) {
        return this.http.get(this.baseURL + "/" + id);
    };
    AircraftService.prototype.updateArcraftinfo = function (id, aircraftinfo) {
        return this.http.put(this.baseURL + "/" + id, aircraftinfo);
    };
    AircraftService.prototype.createAicraft = function (aircraftinfo) {
        return this.http.post("" + this.baseURL, aircraftinfo);
    };
    AircraftService.prototype.fetchUserListFromRemoteaircraft = function (aircraft) {
        return this.http.get("http://localhost:8080/api/v1/Aircraft/" + aircraft);
    };
    AircraftService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AircraftService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AircraftService);
    return AircraftService;
}());



/***/ }),

/***/ "./src/app/views/schedule/addschedule/addschedule.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/schedule/addschedule/addschedule.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\nmargin-left: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2NoZWR1bGUvYWRkc2NoZWR1bGUvYWRkc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLG1CQUFtQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NjaGVkdWxlL2FkZHNjaGVkdWxlL2FkZHNjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5tYXJnaW4tbGVmdDogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/schedule/addschedule/addschedule.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/schedule/addschedule/addschedule.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddscheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddscheduleComponent", function() { return AddscheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var _model_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/schedule */ "./src/app/model/schedule.ts");
/* harmony import */ var _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/scheduleservice.service */ "./src/app/service/scheduleservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");








var AddscheduleComponent = /** @class */ (function () {
    function AddscheduleComponent(_router, _service, _http, aircraftservice, toastr) {
        this._router = _router;
        this._service = _service;
        this._http = _http;
        this.aircraftservice = aircraftservice;
        this.toastr = toastr;
        this.schedule = new _model_schedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"]();
        this.valid = false;
        this.date = new Date();
    }
    AddscheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schedule.date_created = this.d;
        this.schedule.str_servicedue = this.date.toISOString().substr(0, 10);
        this.schedule.str_startdate = this.date.toISOString().substr(0, 10);
        this.schedule.str_enddate = this.date.toISOString().substr(0, 10);
        this.schedule.str_lastservice = this.date.toISOString().substr(0, 10);
        this.schedule.str_nextservice = this.date.toISOString().substr(0, 10);
        this.aircraftservice.getAircraftinfoList().subscribe(function (data) {
            _this.aircraft1 = data;
        });
        this._service.share2.subscribe(function (y) { _this.status1 = y || localStorage.getItem('c'); });
    };
    AddscheduleComponent.prototype.validate_aircraft = function (e) {
        this.selected_aircraft = e.target.value;
    };
    AddscheduleComponent.prototype.adduserformsubmit = function () {
        var _this = this;
        this.d = Date.now().toString();
        this.schedule.servicedue = this.toEpoch(this.schedule.str_servicedue);
        this.schedule.startdate = this.toEpoch(this.schedule.str_startdate);
        this.schedule.enddate = this.toEpoch(this.schedule.str_enddate);
        this.schedule.lastservice = this.toEpoch(this.schedule.str_lastservice);
        this.schedule.nextservice = this.toEpoch(this.schedule.str_nextservice);
        if (this.exist_service !== this.schedule.service) {
            this._service.addUsertoRemoteschedule(this.schedule).subscribe(function (data) {
                _this.schedule = data;
                _this.toastr.showSuccess('data added successfully', "add schedule");
                _this._router.navigate(['/schedule']);
            }, function (error) { return _this.toastr.showError(error, 'Add schedule'); });
        }
    };
    AddscheduleComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        return epoch;
    };
    AddscheduleComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        ; // Your timezone! //1612137600
        var ddmmyyyy = (myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear());
        return ddmmyyyy;
    };
    AddscheduleComponent.prototype.selectChangeHandler = function (event) {
        var _this = this;
        this.service = event.target.value;
        this._service.fetchUserListFromRemoteaircraft(this.selected_aircraft).subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].service == _this.service) {
                    _this.exist_service = data[i].service;
                    _this.msg = " already " + _this.schedule.service + " service exist in  " + _this.schedule.aircraft + " Aircraft";
                }
                else {
                    _this.msg = "";
                }
            }
        });
    };
    AddscheduleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddscheduleComponent.prototype, "myInput", void 0);
    AddscheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addschedule',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addschedule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/addschedule/addschedule.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addschedule.component.css */ "./src/app/views/schedule/addschedule/addschedule.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], AddscheduleComponent);
    return AddscheduleComponent;
}());



/***/ }),

/***/ "./src/app/views/schedule/editschedule/editschedule.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/schedule/editschedule/editschedule.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-6 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2NoZWR1bGUvZWRpdHNjaGVkdWxlL2VkaXRzY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc2NoZWR1bGUvZWRpdHNjaGVkdWxlL2VkaXRzY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC02IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/schedule/editschedule/editschedule.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/schedule/editschedule/editschedule.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditscheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditscheduleComponent", function() { return EditscheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _model_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/schedule */ "./src/app/model/schedule.ts");
/* harmony import */ var _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/scheduleservice.service */ "./src/app/service/scheduleservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");








var EditscheduleComponent = /** @class */ (function () {
    function EditscheduleComponent(_service, _router, _activatedrouter, _http, toastr) {
        this._service = _service;
        this._router = _router;
        this._activatedrouter = _activatedrouter;
        this._http = _http;
        this.toastr = toastr;
        this.loadingConfig = {
            animationType: ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_TYPES"].dualCircle,
            spinnerPosition: 'left',
            backdropBorderRadius: '15px',
            spinnerSize: 'md',
            spinnerFontSize: '2rem'
        };
        this.show = false;
        this.schedule = new _model_schedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"]();
        this.progress = false;
        this.completed = false;
        this.notstarted = false;
        this.showme = false;
        this.showme1 = false;
        this.date = new Date();
    }
    EditscheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rolltext = localStorage.getItem('a');
        if (this.rolltext == "viewer") {
            this.addshowbutton = false;
            this.enable = true;
        }
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemoteschedule(id).subscribe(function (data) {
            _this.schedule = data;
            if (_this.schedule.status == "Progress") {
                _this.schedule.str_startdate = _this.fromEpoch(_this.schedule.startdate);
            }
            else {
                _this.schedule.str_startdate = _this.date.toISOString().substr(0, 10);
            }
            _this.schedule.str_servicedue = _this.fromEpoch(_this.schedule.servicedue);
            _this.schedule.str_enddate = _this.date.toISOString().substr(0, 10);
            _this.schedule.str_lastservice = _this.fromEpoch(_this.schedule.lastservice);
        }, function (error) {
            console.log('exception ocured');
        });
    };
    EditscheduleComponent.prototype.adduserformsubmit = function (aircraft) {
        var _this = this;
        if (this.schedule.status == "Completed") {
            this.schedule.enddate = this.toEpoch(this.schedule.str_enddate);
            this.schedule.startdate = this.toEpoch(this.schedule.str_startdate);
        }
        else if (this.schedule.status == "Progress") {
            this.schedule.startdate = this.toEpoch(this.schedule.str_startdate);
            this.schedule.enddate = null;
        }
        else if (this.schedule.status == "Not Started") {
            this.schedule.startdate = null;
            this.schedule.enddate = null;
        }
        var ch = this.schedule.status;
        if (ch == "Progress") {
            this._service.addUsertoRemoteservicehistory(this.schedule).subscribe(function (data) {
            }, function (error) {
                console.log('service history error occured check please');
            });
        }
        if (ch == 'Completed') {
            this._service.addUsertoRemoteservicehistory(this.schedule).subscribe(function (data) {
            }, function (error) {
                console.log('service history error occured check please');
            });
            this.schedule.status = 'Not Started';
            this.schedule.servicecompleted = (parseInt(this.schedule.servicecompleted) + 1).toString();
            this.schedule.enddate = null;
            this.schedule.startdate = null;
            this.schedule.servicedue = this.schedule.nextservice;
        }
        this._service.addUsertoRemoteschedule(this.schedule).subscribe(function (data) {
            _this.toastr.showSuccess('Updation success', ' Edit schedule');
            _this.spin();
            _this._router.navigate(["./schedule"], { queryParams: { aircraft: aircraft } });
            (function (error) {
                _this.toastr.showError(error, "Edit schedule");
            });
        });
    };
    EditscheduleComponent.prototype.goback = function (aircraft) {
        this._router.navigate(["./schedule/"], { queryParams: { aircraft: aircraft } });
    };
    EditscheduleComponent.prototype.spin = function () {
        var _this = this;
        this.show = true;
        setTimeout(function () {
            _this.show = false;
        }, 5500);
    };
    EditscheduleComponent.prototype.selectChangeHandler = function (event) {
        this.schedule.status = this.completed;
        this.schedule.lastservice = this.schedule.servicedue;
        this.completed = this.schedule.servicedue;
        this.schedule.status = event.target.value;
    };
    EditscheduleComponent.prototype.selectnextservice = function (event) {
        this.schedule.status = this.completed;
        this.schedule.servicedue = this.schedule.nextservice;
        this.completed = this.schedule.nextservice;
        this.schedule.status = event.target.value;
    };
    EditscheduleComponent.prototype.toogle = function () {
        this.showme = !this.showme;
    };
    EditscheduleComponent.prototype.selectChangeHandler2 = function (event) {
        this.schedule.startdate = true;
    };
    EditscheduleComponent.prototype.selectChangeHandler1 = function (event) {
        if (this.schedule.service == '14 day' || this.schedule.service == '1 mo' || this.schedule.service == '3 mo') {
            if (this.schedule.service == '14 day') {
                var numberOfDaysToAdd = 14;
            }
            else if (this.schedule.service == '1 mo') {
                var numberOfDaysToAdd = 30;
            }
            else if (this.schedule.service == '3 mo') {
                var numberOfDaysToAdd = 90;
            }
            var someDate = new Date(this.schedule.str_enddate);
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            this.dd = someDate.getDate();
            this.mm = someDate.getMonth() + 1;
            this.yyyy = someDate.getFullYear();
            if (this.dd < 10) {
                this.dd = '0' + this.dd.toString();
            }
            if (this.mm < 10) {
                this.mm = '0' + this.mm.toString();
            }
            var dt = this.yyyy + "-" + this.mm + "-" + this.dd;
            this.schedule.nextservice = this.toEpoch(dt);
            this.schedule.str_nextservice = this.fromEpoch(this.schedule.nextservice);
            this.schedule.lastservice = this.toEpoch(this.schedule.str_enddate);
        }
        else if (this.schedule.service == '6 mo' || this.schedule.service == '12 mo' || this.schedule.service == '15 mo' || this.schedule.service == '18 mo' || this.schedule.service == '24 mo' || this.schedule.service == '30 mo' || this.schedule.service == '36 mo' || this.schedule.service == '48 mo') {
            if (this.schedule.service == '6 mo') {
                var AddofDays = 180;
            }
            else if (this.schedule.service == '12 mo') {
                var AddofDays = 365;
            }
            else if (this.schedule.service == '15 mo') {
                var AddofDays = 455;
            }
            else if (this.schedule.service == '18 mo') {
                var AddofDays = 545;
            }
            else if (this.schedule.service == '24 mo') {
                var AddofDays = 695;
            }
            else if (this.schedule.service == '30 mo') {
                var AddofDays = 910;
            }
            else if (this.schedule.service == '36 mo') {
                var AddofDays = 1095;
            }
            else if (this.schedule.service == '48 mo') {
                var AddofDays = 1825;
            }
            var serviceDate = new Date(this.schedule.str_enddate);
            serviceDate.setDate(serviceDate.getDate() + AddofDays);
            this.dd = serviceDate.getDate();
            this.mm = serviceDate.getMonth() + 1;
            this.yyyy = serviceDate.getFullYear();
            if (this.dd < 10) {
                this.dd = '0' + this.dd.toString();
            }
            if (this.mm < 10) {
                this.mm = '0' + this.mm.toString();
            }
            var nxt = this.yyyy + "-" + this.mm + "-" + this.dd;
            this.schedule.nextservice = this.toEpoch(nxt);
            this.schedule.str_nextservice = this.fromEpoch(this.schedule.nextservice);
        }
    };
    EditscheduleComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        return epoch;
    };
    EditscheduleComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000); // Your timezone! //1612137600
        var y = myDate.getFullYear();
        var m = myDate.getMonth() + 1;
        var d = myDate.getDate();
        var ddmmyyyy = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
        return ddmmyyyy;
    };
    EditscheduleComponent.ctorParameters = function () { return [
        { type: _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    EditscheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editschedule',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editschedule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/editschedule/editschedule.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editschedule.component.css */ "./src/app/views/schedule/editschedule/editschedule.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], EditscheduleComponent);
    return EditscheduleComponent;
}());



/***/ }),

/***/ "./src/app/views/schedule/schedule-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleRoutingModule", function() { return ScheduleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule.component */ "./src/app/views/schedule/schedule.component.ts");
/* harmony import */ var _editschedule_editschedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editschedule/editschedule.component */ "./src/app/views/schedule/editschedule/editschedule.component.ts");
/* harmony import */ var _addschedule_addschedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addschedule/addschedule.component */ "./src/app/views/schedule/addschedule/addschedule.component.ts");







var routes = [
    {
        path: '',
        component: _schedule_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleComponent"],
        data: {
            title: 'Schedule',
        }
    },
    {
        path: 'editschedule',
        component: _editschedule_editschedule_component__WEBPACK_IMPORTED_MODULE_5__["EditscheduleComponent"],
        data: { title: 'EditSchedule' },
    },
    {
        path: 'editschedule/:id',
        component: _editschedule_editschedule_component__WEBPACK_IMPORTED_MODULE_5__["EditscheduleComponent"],
        data: { title: 'Edit Schedule' }
    },
    {
        path: 'addschedule',
        component: _addschedule_addschedule_component__WEBPACK_IMPORTED_MODULE_6__["AddscheduleComponent"],
        data: { title: 'Add Schedule' }
    }
];
var ScheduleRoutingModule = /** @class */ (function () {
    function ScheduleRoutingModule() {
    }
    ScheduleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ScheduleRoutingModule);
    return ScheduleRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/schedule/schedule.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/schedule/schedule.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n.red {\r\n    background-color: red;\r\n  }\r\n\r\n  .skyblue {\r\n    background-color: skyblue;\r\n  }\r\n\r\n  .green {\r\n    background-color: green;\r\n  }\r\n\r\n  .orange{\r\n    background-color: orange;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ucmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5za3libHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIC5vcmFuZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/views/schedule/schedule.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/schedule/schedule.component.ts ***!
  \******************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var _model_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/schedule */ "./src/app/model/schedule.ts");
/* harmony import */ var _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/scheduleservice.service */ "./src/app/service/scheduleservice.service.ts");







var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(_http, _service, _route, _activatedrouter, aircraftservice) {
        var _this = this;
        this._http = _http;
        this._service = _service;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.aircraftservice = aircraftservice;
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
        this.schedule = new _model_schedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this.isred = false;
        this.isgreen = false;
        this.isorange = false;
        this.enable = false;
        this.nrSelect = "KW-3554";
        this.aircraft = "KW-3554";
        this.aircraftservice.getAircraftinfoList().subscribe(function (data) {
            _this.aircraft1 = data;
        });
        this.aircraft = this._activatedrouter.snapshot.queryParamMap.get('aircraft');
        if (this.aircraft != null) {
            this.nrSelect = this.aircraft;
        }
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        this._service.share2.subscribe(function (y) { _this.status1 = y || localStorage.getItem('c'); });
        this._service.countrecordschedule().subscribe(function (mydata) {
            _this.rec1 = mydata;
            _this.m1 = _this.rec1;
        });
    }
    ScheduleComponent.prototype.ngOnDestroy = function () {
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'schedule');
        localStorage.setItem('openpage', this.x);
        this.x = 1;
        this.m = 0;
        this.m2 = 0;
        this.mode = "normal";
        this.data = new Array();
        if (this.rolltext == "viewer") {
            this.addshowbutton = false;
            this.enable = true;
        }
        if (this.rolltext == "admin") {
            this.addshowbutton = true;
            this.enable = true;
        }
        if (this.aircraft == null) {
            this.aircraft = "KW-3554";
        }
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
        this._service.countrecordschedule().subscribe(function (mydata) {
            _this.rec1 = mydata;
            _this.m1 = _this.rec1;
        });
        this._service.fetchUserListFromRemoteaircraft(this.aircraft).subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                _this.data[i].str_servicedue = _this.fromEpoch(_this.data[i].servicedue);
                _this.data[i].str_startdate = _this.fromEpoch(_this.data[i].startdate);
                _this.data[i].str_enddate = _this.fromEpoch(_this.data[i].enddate);
                _this.data[i].str_lastservice = _this.fromEpoch(_this.data[i].str_lastservice);
                _this.data[i].str_nextservice = _this.fromEpoch(_this.data[i].nextservice);
                if ((_this.data[i].str_startdate) !== "1970-01-01") {
                    _this.data[i].str_startdate = _this.fromEpoch(_this.data[i].startdate);
                    _this.data[i].str_enddate = null;
                }
                else if ((_this.data[i].str_startdate) && (_this.data[i].str_enddate) == "1970-01-01") {
                    _this.data[i].str_startdate = null;
                    _this.data[i].str_enddate = null;
                }
            }
            _this.data.forEach(function (element) {
                var today = new Date();
                var year = today.getFullYear();
                var month = today.getMonth() + 1;
                var day = today.getDate();
                var formattoday = year + "-" + month + "-" + day;
                var date1 = new Date(element.str_servicedue);
                var date2 = new Date(formattoday);
                var Difference_In_Time = date2.getTime() - date1.getTime();
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                _this.checkday = Difference_In_Days;
                _this.isgreen = true;
                if (element.service == '14 day') {
                    if (_this.checkday < 6) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 6 && _this.checkday <= 11) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 12 && _this.checkday <= 14) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '1 mo') {
                    if (_this.checkday < 15) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 15 && _this.checkday <= 25) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 25 && _this.checkday <= 30) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '3 mo') {
                    if (_this.checkday < 30) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 30 && _this.checkday <= 75) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 75 && _this.checkday <= 90) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '6 mo') {
                    if (_this.checkday < 45) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 45 && _this.checkday <= 120) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 120 && _this.checkday <= 180) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '12 mo') {
                    if (_this.checkday < 100) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 100 && _this.checkday <= 240) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 240 && _this.checkday <= 365) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '15 mo') {
                    if (_this.checkday < 200) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 200 && _this.checkday <= 355) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 355 && _this.checkday <= 455) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '18 mo') {
                    if (_this.checkday < 350) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 350 && _this.checkday <= 475) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 475 && _this.checkday <= 545) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '24 mo') {
                    if (_this.checkday < 300) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 300 && _this.checkday <= 600) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 600 && _this.checkday <= 695) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '30 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 365 && _this.checkday <= 730) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 730 && _this.checkday <= 910) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '36 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 365 && _this.checkday <= 900) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 900 && _this.checkday <= 1095) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '48 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 1000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 1000 && _this.checkday <= 1460) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '60 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 1500) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 1500 && _this.checkday <= 1825) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '72 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 2000 && _this.checkday <= 2190) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '90 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 2000 && _this.checkday <= 2715) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '120 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 2000 && _this.checkday <= 3625) {
                        Object.assign(element, { "color": "red" });
                    }
                }
            });
            console.log(_this.data);
            _this.schedule = _this.data;
            _this.totalItems = _this.rec1;
            var activities = _this.schedule;
        });
    }; /*nginit*/
    ScheduleComponent.prototype.selectChangeHandler3 = function (e) {
        var _this = this;
        this.schedule.aircraft = e.target.value;
        this.optvalue = e.target.value;
        this._service.fetchUserListFromRemoteaircraft(e.target.value).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                _this.data[i].str_servicedue = _this.fromEpoch(data[i].servicedue);
                _this.data[i].str_lastservice = _this.fromEpoch(_this.data[i].str_lastservice);
                _this.data[i].str_nextservice = _this.fromEpoch(_this.data[i].nextservice);
                _this.data[i].str_startdate = _this.fromEpoch(_this.data[i].startdate);
                if (_this.data[i].str_startdate == "1970-01-01") {
                    _this.data[i].str_startdate = null;
                    _this.data[i].str_enddate = null;
                }
                else if (_this.data[i].str_startdate !== "1970-01-01") {
                    _this.data[i].str_startdate = _this.fromEpoch(_this.data[i].startdate);
                    _this.data[i].str_enddate = null;
                }
            }
            _this.data.forEach(function (element) {
                var today = new Date();
                var year = today.getFullYear();
                var month = today.getMonth() + 1;
                var day = today.getDate();
                var formattoday = year + "-" + month + "-" + day;
                var date1 = new Date(element.str_servicedue);
                var date2 = new Date(formattoday);
                var Difference_In_Time = date2.getTime() - date1.getTime();
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                _this.checkday = Difference_In_Days;
                _this.isgreen = true;
                if (element.service == '14 day') {
                    if (_this.checkday < 6) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 6 && _this.checkday <= 11) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 12 && _this.checkday <= 14) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '1 mo') {
                    if (_this.checkday < 15) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 15 && _this.checkday <= 25) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 25 && _this.checkday <= 30) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '3 mo') {
                    if (_this.checkday < 30) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 30 && _this.checkday <= 75) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 75 && _this.checkday <= 90) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '6 mo') {
                    if (_this.checkday < 45) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 45 && _this.checkday <= 120) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 120 && _this.checkday <= 180) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '12 mo') {
                    if (_this.checkday < 100) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 100 && _this.checkday <= 240) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 240 && _this.checkday <= 365) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '15 mo') {
                    if (_this.checkday < 200) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 200 && _this.checkday <= 355) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 355 && _this.checkday <= 455) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '18 mo') {
                    if (_this.checkday < 350) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 350 && _this.checkday <= 475) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 475 && _this.checkday <= 545) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '24 mo') {
                    if (_this.checkday < 300) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 300 && _this.checkday <= 600) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 600 && _this.checkday <= 695) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '30 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 365 && _this.checkday <= 730) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 730 && _this.checkday <= 910) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '36 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 365 && _this.checkday <= 900) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 900 && _this.checkday <= 1095) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '48 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 1000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 1000 && _this.checkday <= 1460) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '60 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 1500) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 1500 && _this.checkday <= 1825) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '72 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 2000 && _this.checkday <= 2190) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '90 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 2000 && _this.checkday <= 2715) {
                        Object.assign(element, { "color": "red" });
                    }
                }
                if (element.service == '120 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    if (_this.checkday >= 2000 && _this.checkday <= 3625) {
                        Object.assign(element, { "color": "red" });
                    }
                }
            });
            console.log(_this.data);
            _this.schedule = _this.data;
            _this.totalItems = _this.rec1;
            var activities = _this.schedule;
        });
    };
    ScheduleComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        return epoch;
    };
    ScheduleComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        ; // Your timezone! //161213760
        var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
        return ddmmyyyy;
    };
    ScheduleComponent.prototype.gotoedituser = function (id) {
        this._route.navigate(["/schedule/editschedule", id]);
    };
    ScheduleComponent.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/schedule/addschedule"]);
    };
    ScheduleComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"] }
    ]; };
    ScheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./schedule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/schedule/schedule.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./schedule.component.css */ "./src/app/views/schedule/schedule.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/views/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.component */ "./src/app/views/schedule/schedule.component.ts");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/views/schedule/schedule-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _editschedule_editschedule_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editschedule/editschedule.component */ "./src/app/views/schedule/editschedule/editschedule.component.ts");
/* harmony import */ var _addschedule_addschedule_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./addschedule/addschedule.component */ "./src/app/views/schedule/addschedule/addschedule.component.ts");


















var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_12__["CheckModule"],
                _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["ScheduleRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
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
            declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"], _editschedule_editschedule_component__WEBPACK_IMPORTED_MODULE_16__["EditscheduleComponent"], _addschedule_addschedule_component__WEBPACK_IMPORTED_MODULE_17__["AddscheduleComponent"]]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-schedule-schedule-module.js.map