(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-concession-concession-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/concession.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/concession.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"card-header bg-white\" style=\"border:none;\">\r\n     <div class=\"d-flex justify-content-between \">\r\n        <div> <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"this.addshowbutton\" (click)=\"gotoaddaccount()\">\r\n           New\r\n           </button> \r\n        </div>\r\n        <div class=\"d-flex\" style=\"float: left;\">\r\n           <span class=\"m-2\">Aircraft</span>\r\n           <select style=\"margin-right:0px; width:150px\" id=\"aircraft\" value=\"KW-3554\"name=\"aircraft\" #aircraft class=\"form-control\" (change)=\"getData($event.target.value)\">\r\n           <option *ngFor=\"let array of aircraft1\" [value]=\"array.aircraft\"> {{ array.aircraft }}</option>\r\n           </select>\r\n        </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\" >\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <th>S.No</th>\r\n              <th > Aircraft </th>\r\n              <th> Concession_No</th>\r\n              <th>Approval_Date </th>\r\n              <th> Details </th>\r\n              <th > Valid_Upto</th>\r\n              <th> Extended_Till </th>\r\n              <th>  Removed_On</th>\r\n              <th> Remarks </th>\r\n              <th > Attachment</th>\r\n              <th *ngIf=\"this.showdeletebutton\" > Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor=\"let u of concessions | paginate: config\">\r\n              <td >{{ u.s_no }}</td>\r\n              <td >{{ u.aircraft }}</td>\r\n              <td>\r\n                 <button type=\"button\" class=\"btn btn-block btn-link active btn-md\" style=\"padding-top: 0px;\"  (click)=\"gotoedituser(u.idconcession)\">{{u.concession_no}}</button>\r\n              </td>\r\n              <td >{{ fromEpoch(u.approval_date) }}</td>\r\n              <td >{{ u.details }}</td>\r\n              <td >{{ fromEpoch(u.valid_upto) }}</td>\r\n              <td >{{ fromEpoch(u.extended_till) }}</td>\r\n              <td>{{ fromEpoch(u.removed_on) }}</td>\r\n              <td >{{ u.remarks }}</td>\r\n\r\n              <td>\r\n                <button type=\"button\" style=\"color:black\" class=\"btn btn-block btn-link active btn-md\"   (click)=\"gotoedituser1(u.file)\">{{u.file}}</button>\r\n             </td>\r\n             \r\n              <td>\r\n                 <button\r\n                 class=\"btn btn-default\"\r\n                 mwlConfirmationPopover\r\n                 [popoverTitle]=\"popoverTitle\"\r\n                 [popoverMessage]=\"popoverMessage\"\r\n                 placement=\"left\"\r\n                 (confirm)=\"onDelete(u.idconcession)\"\r\n                 *ngIf=\"this.showdeletebutton\"\r\n                 (cancel)=\"cancelClicked = true\"\r\n                 >\r\n                 <i class=\"fa fa-trash\"></i>\r\n                 </button>\r\n              </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\" >\r\n              <pagination\r\n              [itemsPerPage]=\"perpage\"\r\n              id=\"listing_pagination\"\r\n              [totalItems]=\"rec1\"\r\n              [(ngModel)]=\"currentPage\"\r\n              (pageChanged)=\"handlePageChange($event)\"\r\n              ></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/concessionform/concessionform.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/concessionform/concessionform.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\" style=\"width:100%\">\r\n  <div class=\"card-header\">  <strong>Concession</strong> </div>\r\n  <div class=\"card-body\">\r\n     <form  #concessionform=\"ngForm\" (ngSubmit) = \"onSubmit()\" >\r\n     <div class=\"row g-3\">\r\n        <div class=\"input-group col-md-6 col-sm-12 \">\r\n           <span class=\"input-group-text\">S.No</span>\r\n           <input type=\"text\" class=\"form-control\" name=\"s_no\"  [(ngModel)]=\"concession.s_no\" required >\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-md-6 col-sm-12 \">\r\n           <span class=\"input-group-text\">Aircraft</span>\r\n           <input type=\"text\" class=\"form-control\" name=\"aircraft\"  [(ngModel)]=\"concession.aircraft\" required>\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-6\">\r\n           <span class=\"input-group-text\">Approval Date</span>\r\n           <input type=\"date\" class=\"form-control\" name=\"approval_date\"  [(ngModel)]=\"concession.str_approval_date\">\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-6\">\r\n           <span class=\"input-group-text\">Concession No</span>\r\n           <input type=\"text\" class=\"form-control\" name=\"concession_no\"  [(ngModel)]=\"concession.concession_no\">\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-6 \">\r\n           <span class=\"input-group-text\">Valid Upto</span>\r\n           <input type=\"date\" class=\"form-control\" name=\"valid_upto\" [(ngModel)]=\"concession.str_valid_upto\">\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-6 \">\r\n           <span class=\"input-group-text\">Details</span>\r\n           <input type=\"text\" class=\"form-control\" name=\"details\" [(ngModel)]=\"concession.details\" required>\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-6 \">\r\n           <span class=\"input-group-text\">Extended Till</span>\r\n           <input type=\"date\" class=\"form-control\" name=\"extended_till\" [(ngModel)]=\"concession.str_extended_till\" required>\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-6 \">\r\n           <span class=\"input-group-text\">Removed On</span>\r\n           <input type=\"date\" class=\"form-control\" name=\"removed_on\" [(ngModel)]=\"concession.str_removed_on\" required>\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group col-6 mb-3 \">\r\n           <span class=\"input-group-text\">Remarks</span>\r\n           <input type=\"text\" class=\"form-control\" name=\"remarks\" [(ngModel)]=\"concession.remarks\" required>\r\n        </div>\r\n        <div>\r\n           <button class = \"btn btn-primary\" type =\"submit\" [disabled]=\"!concessionform.valid\" >Submit</button>\r\n        </div>\r\n     </div>\r\n     </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/updateconcession/updateconcession.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/updateconcession/updateconcession.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\" style=\"width:100%\">\r\n  <div class=\"card-header\"> Update Concession</div>\r\n  <div class=\"card-body\">\r\n     <form  #concessionform=\"ngForm\" (ngSubmit) = \"onSubmit()\" >\r\n     <fieldset [disabled]=\"enable\">\r\n        <div class=\"row g-4\">\r\n           <div class=\"input-group  col-6\">\r\n              <span class=\"input-group-text\">S.No</span>\r\n              <input type=\"text\" class=\"form-control\" name=\"s_no\"  [(ngModel)]=\"concession.s_no\" required >\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group col-6\">\r\n              <span class=\"input-group-text\">Aircraft</span>\r\n              <input type=\"text\" class=\"form-control\" name=\"aircraft\"  [(ngModel)]=\"concession.aircraft\" required>\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group col-6 \">\r\n              <span class=\"input-group-text\">Approval Date</span>\r\n              <input type=\"date\" class=\"form-control\" name=\"approval_date\"  [(ngModel)]=\"concession.str_approval_date\">\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group   col-6\">\r\n              <span class=\"input-group-text\">Concession No</span>\r\n              <input type=\"text\" class=\"form-control\" name=\"concession_no\"  [(ngModel)]=\"concession.concession_no\">\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group col-6\">\r\n              <span class=\"input-group-text\">Valid Upto</span>\r\n              <input type=\"date\" class=\"form-control\" name=\"valid_upto\" [(ngModel)]=\"concession.str_valid_upto\">\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group col-6\">\r\n              <span class=\"input-group-text\">Details</span>\r\n              <input type=\"text\" class=\"form-control\" name=\"details\" [(ngModel)]=\"concession.details\" required>\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group col-6 \">\r\n              <span class=\"input-group-text\">Extended Till</span>\r\n              <input type=\"date\" class=\"form-control\" name=\"extended_till\" [(ngModel)]=\"concession.str_extended_till\" required>\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group col-6 \">\r\n              <span class=\"input-group-text\">Removed On</span>\r\n              <input type=\"date\" class=\"form-control\" name=\"removed_on\" [(ngModel)]=\"concession.str_removed_on\" required>\r\n           </div>\r\n           <br>\r\n           <div class=\"input-group col-6 mb-3 \">\r\n              <span class=\"input-group-text\">Remarks</span>\r\n              <input type=\"text\" class=\"form-control\" name=\"remarks\" [(ngModel)]=\"concession.remarks\" required>\r\n           </div>\r\n           <div class=\"input-group col-6 mb-3 \">\r\n           </div>\r\n           <div class=\"input-group  mb-3 \">\r\n              <input type=\"file\" name=\"file\"  (change)=\"onFileSelected($event)\"  #fileinput id=\"file\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"picuser()\">Upload</button>\r\n           </div>\r\n           <div class=\"input-group  mb-3 \" >\r\n              <img src=\"http://localhost:8080/uploads/{{concession.file}}\" style=\" width: 500px; height: 400px;\"   name=\"file\"  alt=\"{{concession.file}}\"  [(ngModel)]=\"concession.file\" ngDefaultControl/>\r\n           </div>\r\n           <div>\r\n              <button class = \"btn btn-primary\" type =\"submit\" [disabled]=\"!concessionform.valid\" >Update</button>\r\n           </div>\r\n        </div>\r\n     </fieldset>\r\n     </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/model/concession.ts":
/*!*************************************!*\
  !*** ./src/app/model/concession.ts ***!
  \*************************************/
/*! exports provided: Concession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concession", function() { return Concession; });
var Concession = /** @class */ (function () {
    function Concession() {
    }
    Concession.prototype.getApprovalDate = function () {
        return "24-Feb-2021";
    };
    return Concession;
}());



/***/ }),

/***/ "./src/app/views/concession/concession-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/concession/concession-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConcessionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcessionRoutingModule", function() { return ConcessionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _concession_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concession.component */ "./src/app/views/concession/concession.component.ts");
/* harmony import */ var _concessionform_concessionform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concessionform/concessionform.component */ "./src/app/views/concession/concessionform/concessionform.component.ts");
/* harmony import */ var _updateconcession_updateconcession_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateconcession/updateconcession.component */ "./src/app/views/concession/updateconcession/updateconcession.component.ts");






var routes = [{
        path: '',
        component: _concession_component__WEBPACK_IMPORTED_MODULE_3__["ConcessionComponent"],
        data: {
            title: 'Concession',
            Text: 'bold'
        }
    },
    {
        path: 'create',
        component: _concessionform_concessionform_component__WEBPACK_IMPORTED_MODULE_4__["ConcessionformComponent"],
        data: { title: 'Create' }
    },
    {
        path: 'update/:id',
        component: _updateconcession_updateconcession_component__WEBPACK_IMPORTED_MODULE_5__["UpdateconcessionComponent"],
        data: { title: 'Update' }
    },
];
var ConcessionRoutingModule = /** @class */ (function () {
    function ConcessionRoutingModule() {
    }
    ConcessionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConcessionRoutingModule);
    return ConcessionRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/concession/concession.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/concession/concession.component.ts ***!
  \**********************************************************/
/*! exports provided: ConcessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcessionComponent", function() { return ConcessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_concession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/concession.service */ "./src/app/service/concession.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _model_concession__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/concession */ "./src/app/model/concession.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");










var ConcessionComponent = /** @class */ (function () {
    function ConcessionComponent(concessionservice, service, router, route, toastr) {
        var _this = this;
        this.concessionservice = concessionservice;
        this.service = service;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.acitvities = [];
        this.start = 1;
        this.currentPage = 1;
        this.concession = new _model_concession__WEBPACK_IMPORTED_MODULE_8__["Concession"]();
        this.activeSlideIndex = 0;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = 'Remove Consumable Record';
        this.popoverMessage = ' Delete Yes/No ?';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.concessionservice.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        this.concessionservice.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
    }
    ConcessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedValue = "KW-3554";
        this.getData(this.selectedValue);
        localStorage.setItem('opennav', 'concession');
        localStorage.setItem('openpage', this.x);
        this.x = 1;
        this.m = 0;
        this.m2 = 0;
        this.mode = "normal";
        this.data = new Array();
        this.route.queryParams.subscribe(function (params) {
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
        this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(function (data) {
            _this.rec1 = data.length;
            _this.m1 = _this.rec1;
        });
        this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(function (data) {
            _this.concessions = data;
        });
        this.getAircraftinfo();
        if (this.rolltext == "admin") {
            this.addshowbutton = true;
            this.showeditbutton = true;
            this.showdeletebutton = true;
        }
        else if (this.rolltext == "regular") {
            this.addshowbutton = false;
            this.showeditbutton = true;
            this.showdeletebutton = false;
        }
        else if (this.rolltext == "viewer") {
            this.addshowbutton = false;
            this.showeditbutton = false;
            this.showdeletebutton = false;
        }
    };
    ConcessionComponent.prototype.getAircraftinfo = function () {
        var _this = this;
        this.service.getAircraftinfoList().subscribe(function (data) {
            _this.aircraft1 = data;
        });
    };
    ConcessionComponent.prototype.gotoaddaccount = function () {
        this.router.navigate(["/concession/create"]);
    };
    ConcessionComponent.prototype.gotoedituser = function (id) {
        this.router.navigate(['/concession/update', id]);
    };
    ConcessionComponent.prototype.reloadData = function () {
        var _this = this;
        this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(function (data) {
            _this.concessions = data;
        });
    };
    ConcessionComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.concessionservice.deleteUserByIdFromRemoteconcession1(id).subscribe(function (data) {
            _this.reloadData();
            _this.toastr.showWarning("Deletion success", 'Concession');
        }, function (error) { return _this.toastr.showError(error, 'Concession'); });
    };
    ConcessionComponent.prototype.gotopicture = function (id) {
        this.router.navigate(["/users/picupload", id]);
    };
    ConcessionComponent.prototype.viewpdf = function () {
        var element = document.getElementById('page');
        html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(element).then(function (canvas) {
            var imgData = canvas.toDataURL('image/pdf');
            var imgheight = canvas.height * 208 / canvas.width;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
            doc.addImage(imgData, 0, 0, 208, imgheight);
            doc.save("image.pdf");
        });
    };
    ConcessionComponent.prototype.gotoedituser1 = function (file) {
        this.concessionservice.download(file).subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response.data);
            var url = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.setAttribute('target', 'blank');
            a.href = url;
            a.download = response.filename;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        }, function (error) {
            console.log(error);
        });
    };
    ConcessionComponent.prototype.getData = function (selectedValue) {
        var _this = this;
        this.selectedValue = selectedValue;
        this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(function (data) {
            _this.concessions = data;
            console.log(_this.concessions);
            _this.rec1 = _this.concessions.length;
            for (var i = 0; i < _this.concessions.length; i++) {
                _this.concessions[i].str_approval_date = _this.fromEpoch(data[i].approval_date);
                _this.concessions[i].str_extended_till = _this.fromEpoch(data[i].extended_till);
                _this.concessions[i].str_removed_on = _this.fromEpoch(data[i].removed_on);
                _this.concessions[i].str_valid_upto = _this.fromEpoch(data[i].valid_upto);
            }
        });
    };
    ConcessionComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        return epoch;
    };
    ConcessionComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        ; // Your timezone! //1612137600
        var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
        return ddmmyyyy;
    };
    ConcessionComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        this.concessionservice.displayconcession1(this.selectedValue, this.x, this.perpage).subscribe(function (data) {
            _this.concessions = data;
        });
    };
    ConcessionComponent.ctorParameters = function () { return [
        { type: _service_concession_service__WEBPACK_IMPORTED_MODULE_3__["ConcessionService"] },
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_6__["AircraftService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
    ]; };
    ConcessionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concession',
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./concession.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/concession.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_concession_service__WEBPACK_IMPORTED_MODULE_3__["ConcessionService"], _service_aircraft_service__WEBPACK_IMPORTED_MODULE_6__["AircraftService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]])
    ], ConcessionComponent);
    return ConcessionComponent;
}());



/***/ }),

/***/ "./src/app/views/concession/concession.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/concession/concession.module.ts ***!
  \*******************************************************/
/*! exports provided: ConcessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcessionModule", function() { return ConcessionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _concession_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concession-routing.module */ "./src/app/views/concession/concession-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _concession_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./concession.component */ "./src/app/views/concession/concession.component.ts");
/* harmony import */ var _concessionform_concessionform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./concessionform/concessionform.component */ "./src/app/views/concession/concessionform/concessionform.component.ts");
/* harmony import */ var _service_concession_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/concession.service */ "./src/app/service/concession.service.ts");
/* harmony import */ var _updateconcession_updateconcession_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./updateconcession/updateconcession.component */ "./src/app/views/concession/updateconcession/updateconcession.component.ts");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");













var ConcessionModule = /** @class */ (function () {
    function ConcessionModule() {
    }
    ConcessionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _concession_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConcessionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_12__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'danger',
                }),
            ],
            declarations: [_concession_component__WEBPACK_IMPORTED_MODULE_8__["ConcessionComponent"], _concessionform_concessionform_component__WEBPACK_IMPORTED_MODULE_9__["ConcessionformComponent"], _updateconcession_updateconcession_component__WEBPACK_IMPORTED_MODULE_11__["UpdateconcessionComponent"],],
            providers: [_service_concession_service__WEBPACK_IMPORTED_MODULE_10__["ConcessionService"]],
            entryComponents: [_concessionform_concessionform_component__WEBPACK_IMPORTED_MODULE_9__["ConcessionformComponent"]]
        })
    ], ConcessionModule);
    return ConcessionModule;
}());



/***/ }),

/***/ "./src/app/views/concession/concessionform/concessionform.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/views/concession/concessionform/concessionform.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uY2Vzc2lvbi9jb25jZXNzaW9uZm9ybS9jb25jZXNzaW9uZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29uY2Vzc2lvbi9jb25jZXNzaW9uZm9ybS9jb25jZXNzaW9uZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjQwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/concession/concessionform/concessionform.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/concession/concessionform/concessionform.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConcessionformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcessionformComponent", function() { return ConcessionformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_concession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/concession */ "./src/app/model/concession.ts");
/* harmony import */ var _service_concession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/concession.service */ "./src/app/service/concession.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");







var ConcessionformComponent = /** @class */ (function () {
    function ConcessionformComponent(concessionservice, router, route, http, toastr) {
        this.concessionservice = concessionservice;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.concession = new _model_concession__WEBPACK_IMPORTED_MODULE_4__["Concession"]();
        this.selectedFile = null;
        this.date = new Date();
    }
    ConcessionformComponent.prototype.ngOnInit = function () {
        this.concession.str_approval_date = this.date.toISOString().substr(0, 10);
        this.concession.str_valid_upto = this.date.toISOString().substr(0, 10);
        this.concession.str_extended_till = this.date.toISOString().substr(0, 10);
        this.concession.str_removed_on = this.date.toISOString().substr(0, 10);
    };
    ConcessionformComponent.prototype.saveConcession = function () {
        var _this = this;
        this.concession.approval_date = this.toEpoch(this.concession.str_approval_date);
        this.concession.valid_upto = this.toEpoch(this.concession.str_valid_upto);
        this.concession.extended_till = this.toEpoch(this.concession.str_extended_till);
        this.concession.removed_on = this.toEpoch(this.concession.str_removed_on);
        this.concessionservice.addUsertoRemoteconcession(this.concession).subscribe(function (data) {
            _this.toastr.showSuccess("Concession  added successfully", "Add Concession");
            (function (error) { return _this.toastr.showError(error, "Add Concession"); });
        });
    };
    ConcessionformComponent.prototype.onSubmit = function () {
        this.saveConcession();
        this.router.navigate(["/concession"]);
    };
    ConcessionformComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        return epoch;
    };
    ConcessionformComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        ; // Your timezone! //1612137600
        var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
        return ddmmyyyy;
    };
    ConcessionformComponent.ctorParameters = function () { return [
        { type: _service_concession_service__WEBPACK_IMPORTED_MODULE_5__["ConcessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    ConcessionformComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-concessionform',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./concessionform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/concessionform/concessionform.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./concessionform.component.css */ "./src/app/views/concession/concessionform/concessionform.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_concession_service__WEBPACK_IMPORTED_MODULE_5__["ConcessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], ConcessionformComponent);
    return ConcessionformComponent;
}());



/***/ }),

/***/ "./src/app/views/concession/updateconcession/updateconcession.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/concession/updateconcession/updateconcession.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uY2Vzc2lvbi91cGRhdGVjb25jZXNzaW9uL3VwZGF0ZWNvbmNlc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbmNlc3Npb24vdXBkYXRlY29uY2Vzc2lvbi91cGRhdGVjb25jZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6NDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/concession/updateconcession/updateconcession.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/concession/updateconcession/updateconcession.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateconcessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateconcessionComponent", function() { return UpdateconcessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_concession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/concession */ "./src/app/model/concession.ts");
/* harmony import */ var _service_concession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/concession.service */ "./src/app/service/concession.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");







var UpdateconcessionComponent = /** @class */ (function () {
    function UpdateconcessionComponent(concessionservice, router, route, http, toastr) {
        this.concessionservice = concessionservice;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.concession = new _model_concession__WEBPACK_IMPORTED_MODULE_4__["Concession"];
        this.selectedfile = null;
        this.img = '';
        this.msg = '';
        this.s1 = '';
        this.s2 = '';
        this.storeimage = '';
    }
    UpdateconcessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.s2 = id.toString();
        this.concessionservice.fetchUserByIdFromRemoteconcession(id).subscribe(function (data) {
            _this.concession = data;
            _this.concession.str_approval_date = _this.fromEpoch(_this.concession.approval_date);
            _this.concession.str_valid_upto = _this.fromEpoch(_this.concession.valid_upto);
            _this.concession.str_removed_on = _this.fromEpoch(_this.concession.removed_on);
            _this.concession.str_extended_till = _this.fromEpoch(_this.concession.extended_till);
            _this.storeimage = _this.concession.file;
        }, function (error) {
            console.log('exception ocured');
        });
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
    };
    UpdateconcessionComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        ; // Your timezone! //1612137600
        var y = myDate.getFullYear();
        var m = myDate.getMonth() + 1;
        var d = myDate.getDate();
        var ddmmyyyy = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
        return ddmmyyyy;
    };
    UpdateconcessionComponent.prototype.onFileSelected = function ($event) {
        this.selectedfile = document.getElementById('file').files[0];
        console.log(this.selectedfile);
    };
    UpdateconcessionComponent.prototype.onupload = function () {
        var _this = this;
        var fd = new FormData();
        this.img = this.selectedfile.name;
        this.s1 = this.img;
        this.concession.file = this.s1;
        fd.append('file', this.selectedfile, this.img);
        this.formData = fd;
        this.http.post("http://localhost:8080/uploadconcession", fd)
            .subscribe(function (event) {
            _this.push = event;
        });
    };
    UpdateconcessionComponent.prototype.picuser = function () {
        var _this = this;
        this.onupload();
        this.concessionservice.addUsertoRemoteconcession(this.concession).subscribe(function (data) {
            _this.concession.file = _this.s1;
        });
    };
    UpdateconcessionComponent.prototype.saveuser = function () {
        var _this = this;
        this.concessionservice.addUsertoRemoteconcession(this.concession).subscribe(function (data) {
            _this.toastr.showInfo('Updation success', 'Update Concession');
            _this.router.navigate(['/concession']);
        }, function (error) {
            _this.toastr.showError(error, 'Update Concession');
        });
    };
    UpdateconcessionComponent.prototype.onSubmit = function () {
        this.saveuser();
    };
    UpdateconcessionComponent.ctorParameters = function () { return [
        { type: _service_concession_service__WEBPACK_IMPORTED_MODULE_5__["ConcessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    UpdateconcessionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-updateconcession',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./updateconcession.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/concession/updateconcession/updateconcession.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./updateconcession.component.css */ "./src/app/views/concession/updateconcession/updateconcession.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_concession_service__WEBPACK_IMPORTED_MODULE_5__["ConcessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], UpdateconcessionComponent);
    return UpdateconcessionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-concession-concession-module.js.map