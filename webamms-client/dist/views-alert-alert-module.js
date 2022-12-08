(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-alert-alert-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/alert/alert.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/alert/alert.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" animated fadeIn \">\r\n  <div class=\"row\">\r\n     <div class=\"card col-md-8\">\r\n        <div style=\"background-color: white;\" class=\"card-header\">\r\n           <div class=\"d-flex\">\r\n              <div class=\"m-2\"><span >Aircraft:</span></div>\r\n              <div>\r\n                 <select   id=\"aircraft\"  [(ngModel)]='nrSelect' name=\"saircraft\" #aircraft class=\"form-control\" (change)=\"selectChangeHandler4($event)\" >\r\n                 <option  *ngFor =\"let array of aircraft1\" [value]=\"array.aircraft\">{{array.aircraft}}</option>\r\n                 </select>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n           <div class=\"col-md-12\">\r\n              <table style=\"width:100%;\"class=\"table\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Service</th>\r\n                       <th>{{nrSelect}}</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor=\"let u of data let a= index\">\r\n                       <td>{{a+1}}</td>\r\n                       <td>{{u.service}}</td>\r\n                       <td class={{u.color}}>{{fromEpoch(u.servicedue)}}</td>\r\n                    </tr>\r\n                 </tbody>\r\n              </table>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>");

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

/***/ "./src/app/views/alert/alert-routing.modules.ts":
/*!******************************************************!*\
  !*** ./src/app/views/alert/alert-routing.modules.ts ***!
  \******************************************************/
/*! exports provided: AlertRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertRoutingModule", function() { return AlertRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.component */ "./src/app/views/alert/alert.component.ts");





var routes = [
    {
        path: '',
        component: _alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"],
        data: {
            title: 'Alert'
        }
    }
];
var AlertRoutingModule = /** @class */ (function () {
    function AlertRoutingModule() {
    }
    AlertRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AlertRoutingModule);
    return AlertRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/alert/alert.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/alert/alert.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orange {\r\n  background-color: orange;\r\n}\r\n.green {\r\n  background-color: green;\r\n}\r\nimg {\r\n  border-radius: 50%;\r\n}\r\n.blink {\r\n  background-color: red;\r\n \r\n}\r\n.red {\r\n  background-color: red;\r\n}\r\n.skyblue {\r\n  background-color: skyblue;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjs7QUFFdkI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmJsaW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiBcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc2t5Ymx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/alert/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/alert/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var _model_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/schedule */ "./src/app/model/schedule.ts");
/* harmony import */ var _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/scheduleservice.service */ "./src/app/service/scheduleservice.service.ts");







var AlertComponent = /** @class */ (function () {
    function AlertComponent(_http, _service, _route, _activatedrouter, aircraftservice) {
        var _this = this;
        this._http = _http;
        this._service = _service;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.aircraftservice = aircraftservice;
        this.acitvities = [];
        this.schedule = new _model_schedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"]();
        this.isred = false;
        this.isgreen = false;
        this.isorange = false;
        this.nrSelect = "KW-3554";
        this.aircraft = "KW-3554";
        this.aircraftservice.getAircraftinfoList().subscribe(function (data) {
            _this.aircraft1 = data;
        });
        this.aircraft = this._activatedrouter.snapshot.queryParamMap.get('aircraft');
        if (this.aircraft != null) {
            this.nrSelect = this.aircraft;
        }
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'schedule');
        if (this.aircraft == null) {
            this.aircraft = "KW-3554";
        }
        this._service.fetchUserListFromRemoteaircraft(this.aircraft).subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                _this.data[i].str_servicedue = _this.fromEpoch(data[i].servicedue);
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
                    else if (_this.checkday >= 6 && _this.checkday <= 11) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '1 mo') {
                    if (_this.checkday < 15) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 15 && _this.checkday <= 25) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '3 mo') {
                    if (_this.checkday < 30) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 30 && _this.checkday <= 75) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '6 mo') {
                    if (_this.checkday < 45) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 45 && _this.checkday <= 120) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '12 mo') {
                    if (_this.checkday < 100) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 100 && _this.checkday <= 240) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '15 mo') {
                    if (_this.checkday < 200) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 200 && _this.checkday <= 355) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '18 mo') {
                    if (_this.checkday < 350) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 350 && _this.checkday <= 475) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '24 mo') {
                    if (_this.checkday < 300) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 300 && _this.checkday <= 600) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '30 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 365 && _this.checkday <= 730) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '36 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 365 && _this.checkday <= 900) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '48 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 1000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '60 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 1500) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '72 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '90 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '120 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
            });
            _this.schedule = _this.data;
            var activities = _this.schedule;
        });
    };
    AlertComponent.prototype.selectChangeHandler4 = function (e) {
        var _this = this;
        this.schedule.aircraft = e.target.value;
        this.optvalue = e.target.value;
        this._service.fetchUserListFromRemoteaircraft(e.target.value).subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                _this.data[i].str_servicedue = _this.fromEpoch(data[i].servicedue);
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
                if (element.service == '14 day') {
                    if (_this.checkday < 6) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 6 && _this.checkday <= 11) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '1 mo') {
                    if (_this.checkday < 15) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 15 && _this.checkday <= 25) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '3 mo') {
                    if (_this.checkday < 30) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 30 && _this.checkday <= 75) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '6 mo') {
                    if (_this.checkday < 45) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 45 && _this.checkday <= 120) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '12 mo') {
                    if (_this.checkday < 100) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 100 && _this.checkday <= 240) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '15 mo') {
                    if (_this.checkday < 200) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 200 && _this.checkday <= 355) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '18 mo') {
                    if (_this.checkday < 350) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 350 && _this.checkday <= 475) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '24 mo') {
                    if (_this.checkday < 300) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 300 && _this.checkday <= 600) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '30 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 365 && _this.checkday <= 730) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '36 mo') {
                    if (_this.checkday < 365) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 365 && _this.checkday <= 900) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '48 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 1000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '60 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 1500) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '72 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '90 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
                if (element.service == '120 mo') {
                    if (_this.checkday < 500) {
                        Object.assign(element, { "color": "green" });
                    }
                    else if (_this.checkday >= 500 && _this.checkday <= 2000) {
                        Object.assign(element, { "color": "orange" });
                    }
                    else {
                        Object.assign(element, { "color": "quadrat" });
                    }
                }
            });
            _this.schedule = _this.data;
            var activities = _this.schedule;
        });
    };
    AlertComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate);
        var epoch = Math.round(myDate.getTime() / 1000);
        return epoch;
    };
    AlertComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
        return ddmmyyyy;
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"] }
    ]; };
    AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/alert/alert.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert.component.css */ "./src/app/views/alert/alert.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_scheduleservice_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/views/alert/alert.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/alert/alert.module.ts ***!
  \*********************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.component */ "./src/app/views/alert/alert.component.ts");
/* harmony import */ var _alert_routing_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-routing.modules */ "./src/app/views/alert/alert-routing.modules.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
















var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_12__["CheckModule"],
                _alert_routing_modules__WEBPACK_IMPORTED_MODULE_7__["AlertRoutingModule"],
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
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-alert-alert-module.js.map