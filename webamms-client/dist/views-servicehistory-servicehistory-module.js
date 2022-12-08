(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-servicehistory-servicehistory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/servicehistory/editservicehistory/editservicehistory.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/servicehistory/editservicehistory/editservicehistory.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Service-History Details</strong> \r\n        </div>\r\n         <br>\r\n     <div class=\"card-body\">\r\n          <form name=\"editservicehistoryform\"#editservicehistoryform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"text-input\">S.no</label>\r\n          <div>\r\n            <input type=\"text\" readonly class=\"form-control\"  placeholder=\"sno\" name=\"sno\" [(ngModel)]=\"schedule.sno\" required ngModel #sno=\"ngModel\" > \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"service-input\">Service</label>\r\n          <div>\r\n            <input type=\"text\" readonly class=\"form-control\" placeholder=\"service\" autocomplete=\"service\" name=\"service\" [(ngModel)]=\"schedule.service\" required >\r\n                \r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"servicedue-input\">Service Due</label>\r\n          <div>\r\n            <input type=\"date\"  readonly class=\"form-control\" placeholder=\"servicedue\"  name=\"servicedue\" [(ngModel)]=\"schedule.servicedue\" ngModel #servicedue=\"ngModel\" required >\r\n                  \r\n          </div>\r\n        </div> -->\r\n        \r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"lastservice-input\">last Service</label>\r\n          <div>\r\n            <input type=\"date\"  readonly class=\"form-control\" placeholder=\"lastservice\"  name=\"lastservice\" [(ngModel)]=\"schedule.str_lastservice\" ngModel #servicedue=\"ngModel\" required >\r\n                  \r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"lastservice-input\">Alert Days</label>\r\n          <div>\r\n            <input type=\"text\" class=\"form-control\" readonly  placeholder=\"alert\" ngModel #alert=\"ngModel\"  [(ngModel)]=\"schedule.alert\"name=\"alert\"  required  >\r\n                    \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"lastservice-input\">Completed Service</label>\r\n          <div>\r\n            <input type=\"text\" class=\"form-control\" readonly  placeholder=\"completedservice\"  name=\"servicecompleted\" [(ngModel)]=\"schedule.servicecompleted\" ngModel #servicecompleted=\"ngModel\" required >\r\n                  \r\n          </div>\r\n        </div>\r\n\r\n        \r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"servicedue-input\">Start Date</label>\r\n          <div>\r\n            <input type=\"date\" [disabled]=this.schedule.startdate class=\"form-control\" readonly  placeholder=\"startdate\"  name=\"startdate\" [(ngModel)]=\"schedule.str_startdate\" ngModel #servicedue=\"ngModel\" required >\r\n                     \r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-md-3 col-form-label\" for=\"lastservice-input\">Status</label>\r\n            <div>\r\n                <input type=\"text\" class=\"form-control\" readonly  placeholder=\"status\"  name=\"status\" [(ngModel)]=\"schedule.status\" ngModel #status=\"ngModel\" required >\r\n            </div>\r\n          </div>\r\n       \r\n\r\n       <!--  <div class=\"form-group row\">\r\n          <label class=\"col-sm-3 col-form-label\" for=\"inline-radios\">Status</label>\r\n          <div class=\"col-md-9 col-form-label\">\r\n            <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\r\n              <input type=\"radio\"readonly id=\"myradio\"name=\"myradio\" value=\"Not Started\" [checked]=\"this.schedule.status=='Not Started'?true:false\" [disabled]=\"this.schedule.status=='Progress'||this.schedule.status=='Completed'?true:false\" (change)=\"selectChangeHandler2($event)\" >Not Started&nbsp;\r\n            </div>\r\n            <div class=\"form-check form-check-inline mr-1\">\r\n              <input type=\"radio\"readonly  id=\"myradio\" name=\"myradio\" value=\"Progress\" [checked]=\"this.schedule.status=='Progress'?true:false\"  (change)=\"selectChangeHandler($event)\" > Progress&nbsp;\r\n            </div>\r\n            <div class=\"form-check form-check-inline mr-1\">\r\n              <input type=\"radio\"readonly  id=\"myradio\" name=\"myradio\" value=\"Completed\" [checked]=\"\" [disabled]=\"this.schedule.status=='Not Started'||this.schedule.status=='Completed'\" (click)=\"toogle()\" (change)=\"selectChangeHandler($event)\" (change)=\"selectnextservice($event)\">Completed&nbsp;  \r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <!-- <div  *ngIf=\"showme\"> -->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"lastservice-input\">End Date</label>\r\n          <div>\r\n            <input type=\"date\"   class=\"form-control\" readonly  placeholder=\"enddate\"  name=\"enddate\" [(ngModel)]=\"schedule.str_enddate\" (change)=\"selectChangeHandler1($event)\" (change)=\"selectservicedue($event)\" ngModel #servicedue=\"ngModel\" required >\r\n                  \r\n          </div>\r\n        </div>\r\n        \r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"lastservice-input\">Next Service</label>\r\n          <div>\r\n            <input type=\"text\" readonly class=\"form-control\"  ngModel #nextservice=\"ngModel\"  [(ngModel)]=\"schedule.str_nextservice\"    name=\"nextservice\"  required  >\r\n        </div>\r\n        </div>\r\n      \r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Concessionnates</label>\r\n          <div>\r\n            <textarea  id=\"textarea-input\" readonly  name=\"textarea-input\" rows=\"6\"style=\"width:400px\" class=\"form-control\" placeholder=\"Concessionnates\"[(ngModel)]=\"schedule.concessionnates\" ngModel #concessionnates=\"ngModel\" required></textarea>\r\n          </div>\r\n        </div> \r\n      </form>\r\n\r\n      <div class=\"card-footer\">\r\n      \r\n           \r\n        <!-- <button type=\"button\"[ng2-loading]=\"show\" [config]=\"loadingConfig\"(click)=\"adduserformsubmit()\" (click)=\"goback()\" class=\"btn btn-sm btn-primary\">Back</button> -->\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"goback()\">OK</button> \r\n      </div>\r\n    </div>\r\n                   \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/servicehistory/servicehistory.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/servicehistory/servicehistory.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n\r\n  <div class=\"d-flex justify-content-between\">\r\n\r\n    <div class=\"d-flex\">\r\n\r\n      <div class=\"ml-4 mt-3\"> <span> From </span> </div>\r\n      <div class=\"ml-2 mt-2\"> <input type=\"date\" class=\"form-control\" id=\"startdate\" [(ngModel)]=\"from_date\"\r\n          name=\"startdate\" #startdate /> </div>\r\n      <div class=\"ml-2 mt-3\"><span>To</span> </div>\r\n      <div class=\"ml-2 mt-2\"> <input type=\"date\" class=\"form-control\" id=\"enddate\" [(ngModel)]=\"to_date\" name=\"enddate\"\r\n          #enddate /></div>\r\n      <div class=\"ml-1 mt-2\"> <button type=\"submit\" (click)=\"startend(startdate.value,enddate.value)\"\r\n          class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"d-flex\">\r\n\r\n      <div class=\"mr-2 mt-3\"> <span> Aircraft :</span>\r\n      </div>\r\n      <div class=\"mr-3 mt-2\">\r\n        <select id=\"aircraft\" name=\"aircraft\" #aircraft class=\"form-control\"\r\n          (change)=\"selectChangeHandler2($event.target.value)\">\r\n\r\n\r\n          <option *ngFor=\"let array of aircraft1\" [value]=\"array.aircraft\">{{array.aircraft}}</option>\r\n\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\" d-flex\">\r\n        <form class=\"form-inline\" #f1=\"ngForm\" (ngSubmit)=\"gotobackservicehistory()\">\r\n          <div class=\"mr-2 mt-2\">\r\n            <select style='width:200px' id=\"service\" placeholder=\"service\" name=\"service\" #service class=\"form-control\"\r\n              (change)=\"selectChangeHandler1($event)\">\r\n              <option value=\"\" disabled>Select Service </option>\r\n              <option value=\"14 day\">14 day</option>\r\n              <option value=\"1 mo\">1 mo</option>\r\n              <option value=\"3 mo\">3 mo</option>\r\n              <option value=\"6 mo\">6 mo</option>\r\n              <option value=\"12 mo\">12 mo</option>\r\n              <option value=\"15 mo\">15 mo</option>\r\n              <option value=\"18 mo\">18 mo</option>\r\n              <option value=\"24 mo\">24 mo</option>\r\n              <option value=\"30 mo\">30 mo</option>\r\n              <option value=\"36 mo\">36 mo</option>\r\n              <option value=\"48 mo\">48 mo</option>\r\n              <option value=\"60 mo\">60 mo</option>\r\n              <option value=\"72 mo\">72 mo</option>\r\n              <option value=\"90 mo\">90 mo</option>\r\n              <option value=\"120 mo\">120 mo</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"mr-4 mt-2\"> <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"><i\r\n                class=\"fa fa-refresh \"></i></button> </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"card-body\">\r\n    <table class=\"table table-md text-center \">\r\n      <thead>\r\n\r\n        <tr>\r\n\r\n          <th>S.No </th>\r\n          <th>Service</th>\r\n          <th>Status</th>\r\n          <th>Start-Date</th>\r\n          <th>End-Date</th>\r\n          <th>Last-Service</th>\r\n          <th>Alert</th>\r\n          <th>Service-Completed</th>\r\n          <th>Concessionnates</th>\r\n          <th>Aircraft</th>\r\n\r\n        </tr>\r\n\r\n      </thead>\r\n\r\n      <tr *ngFor=\"let u of data|paginate : config\">\r\n\r\n\r\n        <td>{{u.sno}}</td>\r\n        <td>\r\n\r\n          {{u.service}}\r\n\r\n        </td>\r\n        <td>{{u.status}}</td>\r\n        <td *ngIf=\"fromEpoch(u.startdate)=='1970-1-1'; else strDate\">-</td>\r\n        <ng-template #strDate>\r\n          <td>{{fromEpoch(u.startdate)}}</td>\r\n        </ng-template>\r\n        <td *ngIf=\"fromEpoch(u.enddate)=='1970-1-1'; else name\">-</td>\r\n        <ng-template #name>\r\n          <td>{{fromEpoch(u.enddate)}}</td>\r\n        </ng-template>\r\n\r\n        <!--   -->\r\n        <td *ngIf=\"fromEpoch(u.lastservice)=='1970-1-1'; else last\">-</td>\r\n        <ng-template #last>\r\n          <td>{{fromEpoch(u.lastservice)}}</td>\r\n        </ng-template>\r\n        <td>{{u.alert}}</td>\r\n        <td>{{u.servicecompleted}}</td>\r\n        <td>{{u.concessionnates}}</td>\r\n        <td>{{u.aircraft}}</td>\r\n\r\n      </tr>\r\n\r\n\r\n\r\n\r\n    </table>\r\n    <!--   <button class=\"btn btn-danger btn-block\" (click)=\"downloadPDF()\">Download PDF</button> -->\r\n    <button class=\"btn-primary\" (click)=\"createPdf()\">Create PDF</button>\r\n\r\n    <!--  <button class=\"btn-primary\" (click)=\"generatePdf(contentToConvert)\">Export to PDF</button> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n          <pagination [itemsPerPage]=\"perpage\" id='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\"\r\n            (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./src/app/model/servicehistory.ts":
/*!*****************************************!*\
  !*** ./src/app/model/servicehistory.ts ***!
  \*****************************************/
/*! exports provided: Servicehistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicehistory", function() { return Servicehistory; });
var Servicehistory = /** @class */ (function () {
    function Servicehistory() {
    }
    return Servicehistory;
}());



/***/ }),

/***/ "./src/app/service/servicehistory.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/servicehistory.service.ts ***!
  \***************************************************/
/*! exports provided: ServicehistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicehistoryService", function() { return ServicehistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ServicehistoryService = /** @class */ (function () {
    function ServicehistoryService(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.content1 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
        this.share2 = this.content1.asObservable();
    }
    ServicehistoryService.prototype.updatedata = function (text, text1, text2) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        this.content1.next(text2);
        console.log(text2);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
        console.log("The status1 content value is= " + this.content1.value);
    };
    ServicehistoryService.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    // servicehistory url
    ServicehistoryService.prototype.fetchUserListFromRemoteservicehistory = function () {
        return this._http.get("http://localhost:8080/getServicehistorylist");
    };
    ServicehistoryService.prototype.fetchUserListFromRemoteservice = function (service) {
        return this._http.get("http://localhost:8080/servicehistoryservice/" + service);
    };
    /*
    public fetchUserListFromRemoteserviceaircraft(aircraft:string):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/servicehistoryaircraft/"+aircraft);
    }
    */
    ServicehistoryService.prototype.fetchUserListFromRemoteserviceaircraft = function (aircraft) {
        return this._http.get("http://localhost:8080/servicehistoryaircraft/" + aircraft);
    };
    //servicehistory url
    ServicehistoryService.prototype.fetchUserByIdFromRemoteservicehistory = function (id) {
        return this._http.get("http://localhost:8080/getServicehistorybyid/" + id);
    };
    // servicehistory url
    ServicehistoryService.prototype.addUsertoRemoteservicehistory = function (servicehistory) {
        return this._http.post("http://localhost:8080/addServicehistory", servicehistory);
    };
    ServicehistoryService.prototype.getdataservicehistory = function (pa, per) {
        return this._http.get("http://localhost:8080/servicehistory1/page/" + pa + "/" + per);
    };
    ServicehistoryService.prototype.fetchfindlastservicehistory = function () {
        return this._http.get("http://localhost:8080/findlastservicehistory");
    };
    ServicehistoryService.prototype.countrecordservicehistory = function () {
        return this._http.get("http://localhost:8080/getcountlistservicehistory");
    };
    ServicehistoryService.prototype.counteruserecordservicehistory = function (no1) {
        return this._http.get("http://localhost:8080/getcountaircraftservicehistory?aircraft=" + no1);
    };
    ServicehistoryService.prototype.fetchUserByservicehistory = function (aircraft, page, per) {
        return this._http.get("http://localhost:8080/displayservicehistory/" + aircraft + "/" + page + "/" + per);
    };
    ServicehistoryService.prototype.fetchUserByservicehistory1 = function (startdate, enddate) {
        // return this._http.get <any> ("http://localhost:8080/getallbydatebetween?startdate=2018-01-01&enddate=2025-12-30");
        alert(startdate);
        return this._http.get("http://localhost:8080/getallbydatebetween?startdate=" + startdate + "&enddate=" + enddate);
    };
    ServicehistoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServicehistoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServicehistoryService);
    return ServicehistoryService;
}());



/***/ }),

/***/ "./src/app/views/servicehistory/editservicehistory/editservicehistory.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/views/servicehistory/editservicehistory/editservicehistory.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NlcnZpY2VoaXN0b3J5L2VkaXRzZXJ2aWNlaGlzdG9yeS9lZGl0c2VydmljZWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/servicehistory/editservicehistory/editservicehistory.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/servicehistory/editservicehistory/editservicehistory.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditservicehistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditservicehistoryComponent", function() { return EditservicehistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _model_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/schedule */ "./src/app/model/schedule.ts");
/* harmony import */ var _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/scheduleservice.service */ "./src/app/service/scheduleservice.service.ts");







var EditservicehistoryComponent = /** @class */ (function () {
    function EditservicehistoryComponent(_service, _router, _activatedrouter, _http) {
        this._service = _service;
        this._router = _router;
        this._activatedrouter = _activatedrouter;
        this._http = _http;
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
    }
    EditservicehistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemoteservicehistory(id).subscribe(function (data) {
            console.log('date received in edit user');
            _this.schedule = data;
            _this.schedule.str_startdate = _this.fromEpoch(_this.schedule.startdate);
            _this.schedule.str_enddate = _this.fromEpoch(_this.schedule.enddate);
            _this.schedule.str_lastservice = _this.fromEpoch(_this.schedule.lastservice);
            _this.schedule.str_nextservice = _this.fromEpoch(_this.schedule.nextservice);
            _this.schedule.str_servicedue = _this.fromEpoch(_this.schedule.servicedue);
        }, function (error) {
            console.log('exception ocured');
        });
    };
    EditservicehistoryComponent.prototype.goback = function (aircaft) {
        console.log('in go back');
        this._router.navigate(["./servicehistory"]);
    };
    EditservicehistoryComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        console.log(strDate + " - epoch - " + epoch);
        return epoch;
    };
    EditservicehistoryComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        ; // Your timezone! //1612137600
        var ddmmyyyy = (myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear());
        return ddmmyyyy;
    };
    EditservicehistoryComponent.ctorParameters = function () { return [
        { type: _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    EditservicehistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editservicehistory',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editservicehistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/servicehistory/editservicehistory/editservicehistory.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editservicehistory.component.css */ "./src/app/views/servicehistory/editservicehistory/editservicehistory.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EditservicehistoryComponent);
    return EditservicehistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/servicehistory/servicehistory-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/servicehistory/servicehistory-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ServicehistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicehistoryRoutingModule", function() { return ServicehistoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicehistory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicehistory.component */ "./src/app/views/servicehistory/servicehistory.component.ts");
/* harmony import */ var _editservicehistory_editservicehistory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editservicehistory/editservicehistory.component */ "./src/app/views/servicehistory/editservicehistory/editservicehistory.component.ts");






var routes = [
    {
        path: '',
        component: _servicehistory_component__WEBPACK_IMPORTED_MODULE_4__["ServicehistoryComponent"],
        data: {
            title: 'Servicehistory'
        }
    },
    {
        path: '',
        component: _editservicehistory_editservicehistory_component__WEBPACK_IMPORTED_MODULE_5__["EditservicehistoryComponent"],
        data: {
            title: 'Editservicehistory'
        }
    },
    {
        path: 'editservicehistory/:id',
        component: _editservicehistory_editservicehistory_component__WEBPACK_IMPORTED_MODULE_5__["EditservicehistoryComponent"],
        data: { title: 'Editservicehistory' }
    }
];
var ServicehistoryRoutingModule = /** @class */ (function () {
    function ServicehistoryRoutingModule() {
    }
    ServicehistoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServicehistoryRoutingModule);
    return ServicehistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/servicehistory/servicehistory.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/servicehistory/servicehistory.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NlcnZpY2VoaXN0b3J5L3NlcnZpY2VoaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/servicehistory/servicehistory.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/servicehistory/servicehistory.component.ts ***!
  \******************************************************************/
/*! exports provided: ServicehistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicehistoryComponent", function() { return ServicehistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_servicehistory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/servicehistory */ "./src/app/model/servicehistory.ts");
/* harmony import */ var _service_servicehistory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/servicehistory.service */ "./src/app/service/servicehistory.service.ts");










pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
var ServicehistoryComponent = /** @class */ (function () {
    /*   head =[['Sno','Service','Status','Start-Date','End-Date','Last-Service','Alert','Service-Done','Concessionnates','Aircraft']]  */
    function ServicehistoryComponent(_http, _service, _route, _activatedrouter, aircraftservice) {
        var _this = this;
        this._http = _http;
        this._service = _service;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.aircraftservice = aircraftservice;
        this.acitvities = [];
        this.start = 1;
        this.servicehistory = new _model_servicehistory__WEBPACK_IMPORTED_MODULE_8__["Servicehistory"]();
        this.currentPage = 1;
        this.nrSelect = "KW-3554";
        this.aircraft = "KW-3554";
        this.date = new Date();
        this.aircraftservice.getAircraftinfoList().subscribe(function (data) {
            _this.aircraft1 = data;
        });
        this.aircraft = this._activatedrouter.snapshot.queryParamMap.get("aircraft");
        if (this.aircraft != null) {
            this.nrSelect = this.aircraft;
        }
        this._service.share.subscribe(function (x) {
            _this.rolltext = x || localStorage.getItem("a");
        });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) {
            _this.uname = x1 || localStorage.getItem("b");
        });
        console.log("the Uname text is ======" + this.uname);
    }
    ServicehistoryComponent.prototype.ngOnDestroy = function () { };
    ServicehistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.from_date = this.date.toISOString().substr(0, 10);
        this.to_date = this.date.toISOString().substr(0, 10);
        localStorage.setItem("opennav", "servicehistory");
        localStorage.setItem("openpage", this.x);
        this.x = 1;
        this.m = 0;
        this.m2 = 0;
        this.mode = "normal";
        this.data = new Array();
        this.selectedValue = "KW-3554";
        this.selectChangeHandler2(this.selectedValue);
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
        this._service.counteruserecordservicehistory(this.selectedValue).subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            console.log("The perpage is " + _this.perpage);
        });
        this._service
            .fetchUserListFromRemoteserviceaircraft(this.selectedValue)
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
            console.log(_this.data);
            _this.servicehistory = _this.data;
        } /*for first service*/);
        /* for first getdata*/
    }; /*nginit*/
    ServicehistoryComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        this._service.fetchUserByservicehistory(this.selectedValue, this.x, this.perpage).subscribe(function (data) {
            _this.data = data;
        });
        /*else*/
    }; /* handle page change*/
    ServicehistoryComponent.prototype.gotosearchservicehistory = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = "searching";
        console.log(name);
        this._service
            .counteruserecordservicehistory(this.searchname)
            .subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        if (this.perpageflag == "true") {
            this._service
                .fetchUserByservicehistory(this.m2, parseInt(this.perpage), name)
                .subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Servicehistory Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service
                .fetchUserByservicehistory(this.m2, this.perpage, name)
                .subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Servicehistory  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    };
    ServicehistoryComponent.prototype.selectChangeHandler1 = function (event) {
        var _this = this;
        this.servicehistory.service = event.target.value;
        console.log(event.target.value);
        console.log(event.target.value);
        this._service
            .fetchUserListFromRemoteservice(event.target.value)
            .subscribe(function (data) {
            console.log(data, "selecting service");
            _this.rec1 = data.length;
            _this.data = data;
            console.log(_this.data);
            _this.servicehistory = _this.data;
            //this.totalItems = this.rec1;
            var activities = _this.servicehistory;
        });
    };
    ServicehistoryComponent.prototype.selectChangeHandler2 = function (selectedValue) {
        var _this = this;
        //this.servicehistory.aircraft = event.target.value;
        this.selectedValue = selectedValue;
        this._service
            .fetchUserListFromRemoteserviceaircraft(this.selectedValue)
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
            console.log(_this.data);
            _this.rec1 = data.length;
        });
    };
    ServicehistoryComponent.prototype.startend = function (s, e) {
        var _this = this;
        s = this.toEpoch(s);
        e = this.toEpoch(e);
        this._service.fetchUserByservicehistory1(s, e).subscribe(function (data) {
            _this.data = data;
            _this.rec1 = data.length;
            _this.servicehistory = data;
            console.log(data, " date range data");
        });
    };
    ServicehistoryComponent.prototype.gotobackservicehistory = function () {
        var _this = this;
        this._service
            .fetchUserListFromRemoteserviceaircraft(this.aircraft)
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
            console.log(_this.data, "refresh");
            _this.servicehistory = _this.data;
        });
    };
    ServicehistoryComponent.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
    };
    ServicehistoryComponent.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem("servicehistory", JSON.stringify(this.servicehistory));
        return {
            header: {
                //pageBreak:'before',
                text: "Aircraft Maintaince Management System",
                decoration: "underline",
                fillColor: "#cccccc",
                bold: true,
                style: "header",
                fontSize: 20,
                alignment: "center",
            },
            footer: function (currentPage, pageCount, pageSize) {
                console.log(currentPage, pageCount, pageSize);
                return [
                    {
                        text: "Page " + currentPage.toString() + " of " + pageCount,
                        alignment: "center",
                    },
                ];
            },
            content: [
                {
                    text: "Servicehistory",
                    //
                    //bold: true,
                    fontSize: 20,
                    alignment: "left",
                    style: "header",
                    margin: [0, 0, 0, 20],
                },
                this.getServicehistoryData(this.servicehistory),
            ],
        };
    };
    ServicehistoryComponent.prototype.getServicehistoryData = function (servicehistory) {
        console.log("service.." + servicehistory);
        return {
            table: {
                width: ["*", "*", "*", "*", "*", "*", "*", "*", "*"],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: "Sno",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Service",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Status",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "StartDate",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "EndDate",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "LastService",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Alert",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "conces",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Aircraft",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                    ]
                ], servicehistory.map(function (ed) {
                    return [ed.sno, ed.service, ed.status, ed.startdate, ed.enddate, ed.lastservice, ed.alert, ed.concessionnates, ed.aircraft];
                })),
            },
            pageBreak: "after",
        };
    };
    ServicehistoryComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        console.log(strDate + " - epoch - " + epoch);
        return epoch;
    };
    ServicehistoryComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000); // Your timezone! //1612137600
        var ddmmyyyy = myDate.getFullYear() +
            "-" +
            (myDate.getMonth() + 1) +
            "-" +
            myDate.getDate();
        return ddmmyyyy;
    };
    ServicehistoryComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_servicehistory_service__WEBPACK_IMPORTED_MODULE_9__["ServicehistoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_5__["AircraftService"] }
    ]; };
    ServicehistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-servicehistory",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./servicehistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/servicehistory/servicehistory.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./servicehistory.component.css */ "./src/app/views/servicehistory/servicehistory.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_servicehistory_service__WEBPACK_IMPORTED_MODULE_9__["ServicehistoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_aircraft_service__WEBPACK_IMPORTED_MODULE_5__["AircraftService"]])
    ], ServicehistoryComponent);
    return ServicehistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/servicehistory/servicehistory.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/servicehistory/servicehistory.module.ts ***!
  \***************************************************************/
/*! exports provided: ServicehistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicehistoryModule", function() { return ServicehistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _servicehistory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicehistory.component */ "./src/app/views/servicehistory/servicehistory.component.ts");
/* harmony import */ var _servicehistory_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicehistory-routing.module */ "./src/app/views/servicehistory/servicehistory-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _editservicehistory_editservicehistory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editservicehistory/editservicehistory.component */ "./src/app/views/servicehistory/editservicehistory/editservicehistory.component.ts");

















var ServicehistoryModule = /** @class */ (function () {
    function ServicehistoryModule() {
    }
    ServicehistoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_12__["CheckModule"],
                _servicehistory_routing_module__WEBPACK_IMPORTED_MODULE_7__["ServicehistoryRoutingModule"],
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
            declarations: [_servicehistory_component__WEBPACK_IMPORTED_MODULE_6__["ServicehistoryComponent"], _editservicehistory_editservicehistory_component__WEBPACK_IMPORTED_MODULE_16__["EditservicehistoryComponent"]]
        })
    ], ServicehistoryModule);
    return ServicehistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-servicehistory-servicehistory-module.js.map