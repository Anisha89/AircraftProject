(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-aircraft-aircraft-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/aircraft.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/aircraft.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"animated fadeIn\" style=\"max-width:1500px;\">\r\n  <div class=\"card-header  bg-white\">\r\n     <div class=\"d-flex justify-content-between \">\r\n      <div class=\"d-flex\">\r\n         <div class=\"mr-3\"><button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\" (click)=\"onCreate()\">New</button> </div>\r\n      </div>\r\n        <div class=\"d-flex\">\r\n           <div class=\"mr-2\"> \r\n              <span >Aircraft:</span> \r\n           </div>\r\n           <div class=\"mr-4\">\r\n              <select   [(ngModel)]=\"selectedValue\" placeholder=\"selectedValue\" class=\"form-control\" name=\"aircraft\" (change)=\"getData($event.target.value)\"  (click)=\"getresult()\" >\r\n              <option  *ngFor =\"let array of aircraft\"  [value]=\"array.id\">{{array.aircraft}}</option> \r\n              </select>\r\n           </div>\r\n           <div class=\"mr-3\">\r\n              <button class=\"btn btn-primary\" type=\"button\"(click)=\"updateData(id)\" [disabled]='!this.showeditbutton'  >Update Aircraft hrs</button>\r\n           </div>\r\n           <div> \r\n              <button class=\"btn btn-primary\" type=\"button\"(click)=\"createPdf()\">Print</button>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table  class=\"table\">\r\n        <tr >\r\n           <th>S.No</th>\r\n           <th>Parameter</th>\r\n           <th>Value</th>\r\n        </tr>\r\n        <tr>\r\n           <td>1</td>\r\n           <td>Tail</td>\r\n           <td >{{tail}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >2</td>\r\n           <td>Model No</td>\r\n           <td > {{model}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >3</td>\r\n           <td>Sortie No</td>\r\n           <td >{{sortie_no}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >4</td>\r\n           <td>First flight Date</td>\r\n           <td >{{first_flight_date }}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >5</td>\r\n           <td>Last Flown_Date</td>\r\n           <td >{{last_flown_date }}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >6</td>\r\n           <td>Engine Port Hrs</td>\r\n           <td >{{engine_part_hrs}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >7</td>\r\n           <td>Engine STBD hrs</td>\r\n           <td >{{engine_STBD_hrs}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >8</td>\r\n           <td>Airflame HRS</td>\r\n           <td >{{airflame_hours}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >9</td>\r\n           <td>AARC</td>\r\n           <td>{{aarc}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td>10</td>\r\n           <td>APU HRS</td>\r\n           <td>{{apu_hrs}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td>11</td>\r\n           <td>APUC HRS</td>\r\n           <td >{{apu_c_hrs}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >12</td>\r\n           <td>APU Cycle</td>\r\n           <td>{{apu_cycle}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >13</td>\r\n           <td>APUC Cycle</td>\r\n           <td >{{apu_c_cycle}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >14</td>\r\n           <td>Aircraft Status</td>\r\n           <td>{{aircraft_status}}</td>\r\n        </tr>\r\n        <tr>\r\n           <td >15</td>\r\n           <td>Flight Cycle</td>\r\n           <td >{{flight_cycle}}</td>\r\n        </tr>\r\n     </table>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n         ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\" style=\"max-width:100%;\">\r\n  <div  class=\"card-header\">\r\n     Sortie Flight Create\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <form  #aircraftform=\"ngForm\" (ngSubmit)=\"saveAircraft()\" novalidate>\r\n     <div class=\"row\">\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group  \">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\"> Aircraft</span>\r\n                 </div>\r\n                 <input type=\"text\" class=\"form-control\" name=\"aircraft\" uniqueAircraft  [(ngModel)]=\"aircraftinfo.aircraft\" required   ngModel #aircraft=\"ngModel\" aria-describedby=\"inputGroup-sizing-sm\"  >\r\n              </div>\r\n              <div>            \r\n                 <span   class=\"text-danger\" > {{msg}}</span>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Tail</span>\r\n                 </div>\r\n                 <input type=\"text\" class=\"form-control\" name=\"tail\"  [(ngModel)]=\"aircraftinfo.tail\" required>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Model</span>\r\n                 </div>\r\n                 <input type=\"text\" class=\"form-control\" name=\"model\"  [(ngModel)]=\"aircraftinfo.model\">\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">First_flight_date</span>\r\n                 </div>\r\n                 <input type=\"date\" class=\"form-control\" name=\"first_flight_date\"  [(ngModel)]=\"aircraftinfo.first_flight_date\">\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Last_flown_date</span>\r\n                 </div>\r\n                 <input type=\"date\" class=\"form-control\" name=\"last_flown_date\" [(ngModel)]=\"aircraftinfo.last_flown_date\">\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Sortie_no</span>\r\n                 </div>\r\n                 <input type=\"text\" class=\"form-control\" name=\"sortie_no\" [(ngModel)]=\"aircraftinfo.sortie_no\" required>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Aircraft_status</span>\r\n                 </div>\r\n                 <select  name=\"select1\" class=\"form-control\"   name =\"aircraft_status\"   [(ngModel)]=\"aircraftinfo.aircraft_status\" required >\r\n                 <option [ngValue]=\"null\" selected disabled>select</option>\r\n                 <option value=\"Avaliable\">Avaliable</option>\r\n                 <option value=\"AOG\">AOG</option>\r\n                 <option value=\"Inspection\">Inspection</option>\r\n                 </select>             \r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Flight_cycle</span>\r\n                 </div>\r\n                 <input type=\"text\" class=\"form-control\" name=\"flight_cycle\" [(ngModel)]=\"aircraftinfo.flight_cycle\" required>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Engine_port_hrs</span>\r\n                 </div>\r\n                 <input type=\"time\" class=\"form-control\" name=\"engine_part_hrs\" [(ngModel)]=\"aircraftinfo.engine_part_hrs\" required>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Aarc</span>\r\n                 </div>\r\n                 <input type=\"time\" class=\"form-control\" name=\"aarc\" [(ngModel)]=\"aircraftinfo.aarc\" required> \r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Engine_stbd_hrs</span>\r\n                 </div>\r\n                 <input type=\"time\" class=\"form-control\" name=\"engine_STBD_hrs\" [(ngModel)]=\"aircraftinfo.engine_STBD_hrs\" required>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Apu_cycle</span>\r\n                 </div>\r\n                 <input type=\"time\" class=\"form-control\" name=\"apu_cycle\" [(ngModel)]=\"aircraftinfo.apu_cycle\" required>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Apu_hrs</span>\r\n                 </div>\r\n                 <input type=\"time\" class=\"form-control\" name=\"apu_hrs\" [(ngModel)]=\"aircraftinfo.apu_hrs\" required>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <span class=\"input-group-text\">Apu_c_cycle</span>\r\n                 <input type=\"time\" class=\"form-control\" name=\"apu_C_cycle\" [(ngModel)]=\"aircraftinfo.apu_c_cycle\" required>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <span class=\"input-group-text\">Apu_c_hrs</span>\r\n                 <input type=\"time\" class=\"form-control\" name=\"apu_C_hrs\" [(ngModel)]=\"aircraftinfo.apu_c_hrs\" required>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                 <span class=\"input-group-text\">Airflame_hrs</span>\r\n                 <input type=\"time\" class=\"form-control\" name=\"airflame_hours\" [(ngModel)]=\"aircraftinfo.airflame_hours\" required> \r\n              </div>\r\n           </div>\r\n          \r\n        </div>\r\n        <div>\r\n           <button  class=\"btn btn-sm btn-primary\"    type =\"submit\"  [disabled]=\"!aircraftform.valid\" >Submit</button>\r\n        </div>\r\n     </div>\r\n     </form>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\" style=\"max-width:1500px;\">\r\n  <div class=\"card-header col-md-12\"  >\r\n     <strong>Sortie Flight Update</strong>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <form #sortieform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n     <div class=\"row row-md-12\">\r\n        <div class=\"form-group col-md-6\">\r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">Aircraft</span>\r\n              </div>\r\n              <input type=\"text\" value=\"{{ x }}\" id=\"aircraft\" name=\"aircraft\" class=\"form-control\"/>\r\n           </div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">Date_Flown</span>\r\n              </div>\r\n              <input type=\"date\" id=\"date_flown\" name=\"str_date_flown\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"sortie.str_date_flown\"\r\n              placeholder=\"Date_flown\"\r\n              />\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">place_from</span>\r\n              </div>\r\n              <input\r\n              type=\"text\"\r\n              id=\"place_from\"\r\n              name=\"place_from\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"sortie.src_from\"\r\n              placeholder=\"place_from\"\r\n              required\r\n              />\r\n           </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">place_to</span>\r\n              </div>\r\n              <input\r\n              type=\"text\"\r\n              id=\"place_to\"\r\n              name=\"dst_no\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"sortie.dst_no\"\r\n              placeholder=\"place_to\"\r\n              required\r\n              />\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <br />\r\n     <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">Aircraftupptime</span>\r\n              </div>\r\n              <input\r\n              type=\"time\"\r\n              id=\"Aircraftuptime\"\r\n              name=\"Aircraftupptime\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"sortie.up_time_hrs\"\r\n              placeholder=\"Aircraftupptime\"\r\n              required\r\n              />\r\n           </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">Aircrafdowntime</span>\r\n              </div>\r\n              <input\r\n              type=\"time\"\r\n              id=\"Aircraftdowntime\"\r\n              name=\"Aircraftdowntime\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"sortie.down_time_hrs\"\r\n              placeholder=\"Aircraftdowntime\"\r\n              required\r\n              />\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <br />\r\n     <div class=\"card\">\r\n        <div class=\"card-body\">\r\n           <div class=\"row g-3\">\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Sortie</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    name=\"sortie_no\"\r\n                    [(ngModel)]=\"sortie.sortie_no\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Aircraft_status</span>\r\n                    </div>\r\n                    <select\r\n                    name=\"select1\"\r\n                    class=\"form-control\"\r\n                    name=\"aircraft_status\"\r\n                    [(ngModel)]=\"sortie.aircraft_status\"\r\n                    required\r\n                    >\r\n                    <option value=\"0\" selected disabled >select</option>\r\n                    <option value=\"Avaliable\">Avaliable</option>\r\n                    <option value=\"AOG\">AOG</option>\r\n                    <option value=\"Inspection\">Inspection</option>\r\n                    </select>\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Engine_port_hrs</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"time\"\r\n                    class=\"form-control\"\r\n                    name=\"port_hrs\"\r\n                    [(ngModel)]=\"sortie.port_hrs\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Aarc</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"time\"\r\n                    class=\"form-control\"\r\n                    name=\"aarc\"\r\n                    [(ngModel)]=\"sortie.aarc\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Engine_stbd_hrs</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"time\"\r\n                    class=\"form-control\"\r\n                    name=\"stbd_hrs\"\r\n                    [(ngModel)]=\"sortie.stbd_hrs\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Apu_cycle</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"time\"\r\n                    class=\"form-control\"\r\n                    name=\"apu_cycle\"\r\n                    [(ngModel)]=\"sortie.apu_cycle\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Apu_hrs</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"time\"\r\n                    class=\"form-control\"\r\n                    name=\"apu_hrs\"\r\n                    [(ngModel)]=\"sortie.apu_hrs\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Apuc_cycle</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"time\"\r\n                    class=\"form-control\"\r\n                    name=\"apuc_cycle\"\r\n                    [(ngModel)]=\"sortie.apuc_cycle\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Apuc_hrs</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"time\"\r\n                    class=\"form-control\"\r\n                    name=\"apuc_hrs\"\r\n                    [(ngModel)]=\"sortie.apuc_hrs\"\r\n                    required\r\n                    />\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                       <span class=\"input-group-text\">Flight_cycle</span>\r\n                    </div>\r\n                    <input\r\n                    type=\"text\"\r\n                    value=\"{{ y }}\"\r\n                    class=\"form-control\"\r\n                    name=\"flight_cycle\"\r\n                    [(ngModel)]=\"sortie.flight_cycle\"\r\n                    />\r\n                 </div>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <br />\r\n     <div class=\"card\">\r\n        <div class=\"card-body\">\r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">after_flight_log</span>\r\n              </div>\r\n              <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              name=\"after_flight_log\"\r\n              [(ngModel)]=\"sortie.after_flight_log\"\r\n              required\r\n              />\r\n           </div>\r\n           <br />\r\n           \r\n           <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\">Repair_log</span>\r\n              </div>\r\n              <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              name=\"repair_log\"\r\n              [(ngModel)]=\"sortie.repair_log\"\r\n              required\r\n              />\r\n            </div>\r\n            <br>\r\n            <br>\r\n           <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n               <span class=\"input-group-text\">Pfr_file</span>\r\n            </div>&nbsp;&nbsp;&nbsp;\r\n            <input type=\"file\" name=\"file\"  (change)=\"onFileSelected($event)\"  #fileinput id=\"file\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onupload()\">Upload</button>\r\n            </div>\r\n           <br />\r\n        </div>\r\n     </div>\r\n     <div> <button\r\n        class=\"btn btn-primary\"\r\n        type=\"submit\"\r\n        [disabled]=\"!sortieform.valid\"\r\n        >\r\n        Save\r\n        </button>\r\n     </div>\r\n     </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/model/sortie.ts":
/*!*********************************!*\
  !*** ./src/app/model/sortie.ts ***!
  \*********************************/
/*! exports provided: Sortie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortie", function() { return Sortie; });
var Sortie = /** @class */ (function () {
    function Sortie() {
    }
    return Sortie;
}());



/***/ }),

/***/ "./src/app/views/aircraft/aircraft-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/aircraft/aircraft-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AircraftRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftRoutingModule", function() { return AircraftRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aircraft/aircraft.component */ "./src/app/views/aircraft/aircraft.component.ts");
/* harmony import */ var _create_aircraft_details_create_aircraft_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-aircraft-details/create-aircraft-details.component */ "./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.ts");
/* harmony import */ var _update_aircraft_details_update_aircraft_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-aircraft-details/update-aircraft-details.component */ "./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.ts");






var routes = [
    {
        path: '',
        component: _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_3__["AircraftComponent"],
        data: {
            title: 'Status',
            color: 'black',
        }
    },
    {
        path: 'update/:id',
        component: _update_aircraft_details_update_aircraft_details_component__WEBPACK_IMPORTED_MODULE_5__["UpdateAircraftDetailsComponent"],
        data: { title: 'Update' }
    },
    {
        path: 'create',
        component: _create_aircraft_details_create_aircraft_details_component__WEBPACK_IMPORTED_MODULE_4__["CreateAircraftDetailsComponent"],
        data: { title: 'Create' }
    },
];
var AircraftRoutingModule = /** @class */ (function () {
    function AircraftRoutingModule() {
    }
    AircraftRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AircraftRoutingModule);
    return AircraftRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/aircraft/aircraft.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/aircraft/aircraft.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-body {\r\n  background-color: white;\r\n}\r\n\r\n.aircraft {\r\n  display: flex;\r\n\r\n  align-items: center;\r\n}\r\n\r\n.new {\r\n  flex: auto;\r\n}\r\n\r\n.data {\r\n  width: 300px;\r\n}\r\n\r\n.thead{\r\n  background-color: skyblue;\r\n  text-align: center;\r\n}\r\n\r\n.mr-2{\r\n  padding-top: 10px;\r\n}\r\n\r\n.mr-4{\r\n  width:100px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWlyY3JhZnQvYWlyY3JhZnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FpcmNyYWZ0L2FpcmNyYWZ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFpcmNyYWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5uZXcge1xyXG4gIGZsZXg6IGF1dG87XHJcbn1cclxuLmRhdGEge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4udGhlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1yLTJ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLm1yLTR7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/aircraft/aircraft.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/aircraft/aircraft.component.ts ***!
  \******************************************************/
/*! exports provided: AircraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftComponent", function() { return AircraftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _model_sortie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/sortie */ "./src/app/model/sortie.ts");










pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var AircraftComponent = /** @class */ (function () {
    function AircraftComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.addshowbutton = false;
        this.sortie = new _model_sortie__WEBPACK_IMPORTED_MODULE_9__["Sortie"]();
        this.showeditbutton = false;
        this.service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
    }
    AircraftComponent.prototype.ngOnInit = function () {
        this.selectedValue = 1;
        this.getAircraftinfo();
        this.getresult();
        if (this.rolltext == "admin") {
            this.addshowbutton = true;
            this.showeditbutton = true;
        }
        else if (this.rolltext == "regular") {
            this.addshowbutton = false;
            this.showeditbutton = true;
        }
        else if (this.rolltext == "viewer") {
            this.addshowbutton = false;
            this.showeditbutton = false;
        }
    };
    AircraftComponent.prototype.getAircraftinfo = function () {
        var _this = this;
        this.service.getAircraftinfoList().subscribe(function (data) {
            _this.aircraft = data;
        });
    };
    AircraftComponent.prototype.getData = function (selectedValue) {
        this.selectedValue = selectedValue;
    };
    AircraftComponent.prototype.getresult = function () {
        var _this = this;
        this.service.getAircraftinfoById(this.selectedValue).subscribe(function (data) {
            _this.aircraftinfo = data;
            _this.tail = _this.aircraftinfo.tail;
            _this.model = _this.aircraftinfo.model;
            _this.first_flight_date = _this.fromEpoch(data.first_flight_date);
            _this.last_flown_date = _this.fromEpoch(data.last_flown_date);
            _this.airflame_hours = data.airflame_hours;
            _this.engine_part_hrs = data.engine_part_hrs;
            _this.engine_STBD_hrs = data.engine_STBD_hrs;
            _this.aarc = data.aarc;
            _this.flight_cycle = data.flight_cycle;
            _this.aircraft_status = data.aircraft_status;
            _this.apu_c_hrs = data.apu_c_hrs;
            _this.apu_cycle = data.apu_cycle;
            _this.apu_c_cycle = data.apu_c_cycle,
                _this.sortie_no = data.sortie_no,
                _this.apu_hrs = data.apu_hrs;
        });
    };
    AircraftComponent.prototype.updateData = function (id) {
        this.router.navigate(["/aircraft/update", this.selectedValue]);
    };
    AircraftComponent.prototype.onCreate = function () {
        this.router.navigate(["/aircraft/create"]);
    };
    AircraftComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
        return ddmmyyyy;
    };
    AircraftComponent.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(documentDefinition).open();
    };
    AircraftComponent.prototype.getDocumentDefinition = function () {
        sessionStorage.setItem('service', JSON.stringify(this.aircraft));
        return {
            header: {
                text: 'Aircraft Maintaince Management System',
                decoration: 'underline',
                fillColor: '#cccccc',
                bold: true,
                style: 'header',
                fontSize: 20,
                alignment: 'center'
            },
            footer: function (currentPage, pageCount, pageSize) {
                console.log(currentPage, pageCount, pageSize);
                return [{ text: currentPage, alignment: 'center' }];
            },
            content: [
                {
                    text: 'Aircraft',
                    fontSize: 20,
                    alignment: 'center',
                    style: 'header',
                    margin: [0, 0, 0, 20],
                },
                this.getAircraftData(this.aircraftinfo),
                {
                    text: 'Date: ' + (new Date()).toLocaleDateString(),
                    alignment: 'right',
                    margin: [0, 350, 0, 10],
                },
            ]
        };
    };
    AircraftComponent.prototype.getAircraftData = function (aircraft) {
        console.log(aircraft + this.aircraftinfo);
        return [{
                table: {
                    widths: [100, 200, 200],
                    body: [
                        [{
                                text: 'SNo', bold: true, fillColor: '#cccccc',
                            }, { text: 'Parameter', bold: true, fillColor: '#cccccc', }, { text: 'Value', bold: true, fillColor: '#cccccc', }],
                        ['1', 'Model No', aircraft.model],
                        ['2', 'Sortie No', aircraft.sortie_no],
                        ['3', 'Airflame Hrs', aircraft.airflame_hours],
                        ['4', 'Engine Port Hrs', aircraft.engine_part_hrs],
                        ['5', 'Engine STBD Hrs', aircraft.engine_STBD_hrs],
                        ['6', 'Arc Hrs', aircraft.aarc],
                        ['7', 'Apu Hrs', aircraft.apu_hrs],
                        ['8', 'ApuC Hrs', aircraft.apu_c_hrs],
                        ['9', 'Apu Cycle', aircraft.apu_cycle],
                        ['10', 'ApuC Cycle', aircraft.apu_c_cycle],
                        ['11', 'Flight Cycle', aircraft.flight_cycle],
                    ],
                },
            }];
    };
    AircraftComponent.prototype.Pdf = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(data).then(function (canvas) {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    };
    AircraftComponent.ctorParameters = function () { return [
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_3__["AircraftService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AircraftComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aircraft',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aircraft.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/aircraft.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./aircraft.component.css */ "./src/app/views/aircraft/aircraft.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_aircraft_service__WEBPACK_IMPORTED_MODULE_3__["AircraftService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AircraftComponent);
    return AircraftComponent;
}());



/***/ }),

/***/ "./src/app/views/aircraft/aircraft.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/aircraft/aircraft.module.ts ***!
  \***************************************************/
/*! exports provided: AircraftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftModule", function() { return AircraftModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aircraft_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aircraft-routing.module */ "./src/app/views/aircraft/aircraft-routing.module.ts");
/* harmony import */ var _aircraft_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aircraft.component */ "./src/app/views/aircraft/aircraft.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var _service_sortie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/sortie.service */ "./src/app/service/sortie.service.ts");
/* harmony import */ var _update_aircraft_details_update_aircraft_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-aircraft-details/update-aircraft-details.component */ "./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.ts");
/* harmony import */ var _create_aircraft_details_create_aircraft_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-aircraft-details/create-aircraft-details.component */ "./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.ts");










var AircraftModule = /** @class */ (function () {
    function AircraftModule() {
    }
    AircraftModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _aircraft_routing_module__WEBPACK_IMPORTED_MODULE_2__["AircraftRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
            ],
            declarations: [_aircraft_component__WEBPACK_IMPORTED_MODULE_3__["AircraftComponent"], _update_aircraft_details_update_aircraft_details_component__WEBPACK_IMPORTED_MODULE_8__["UpdateAircraftDetailsComponent"], _create_aircraft_details_create_aircraft_details_component__WEBPACK_IMPORTED_MODULE_9__["CreateAircraftDetailsComponent"]],
            providers: [_service_aircraft_service__WEBPACK_IMPORTED_MODULE_6__["AircraftService"], _service_sortie_service__WEBPACK_IMPORTED_MODULE_7__["SortieService"]],
            entryComponents: [_update_aircraft_details_update_aircraft_details_component__WEBPACK_IMPORTED_MODULE_8__["UpdateAircraftDetailsComponent"], _create_aircraft_details_create_aircraft_details_component__WEBPACK_IMPORTED_MODULE_9__["CreateAircraftDetailsComponent"]]
        })
    ], AircraftModule);
    return AircraftModule;
}());



/***/ }),

/***/ "./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=time]::-webkit-datetime-edit-ampm-field {\r\n    display: none;\r\n  }\r\n\r\n  .container{\r\n    margin-left: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWlyY3JhZnQvY3JlYXRlLWFpcmNyYWZ0LWRldGFpbHMvY3JlYXRlLWFpcmNyYWZ0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FpcmNyYWZ0L2NyZWF0ZS1haXJjcmFmdC1kZXRhaWxzL2NyZWF0ZS1haXJjcmFmdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtYW1wbS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiBjZW50ZXI7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateAircraftDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAircraftDetailsComponent", function() { return CreateAircraftDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _routine_days14_days14_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routine/days14/days14.model */ "./src/app/views/routine/days14/days14.model.ts");






var CreateAircraftDetailsComponent = /** @class */ (function () {
    function CreateAircraftDetailsComponent(aircraftService, router, toastr) {
        this.aircraftService = aircraftService;
        this.router = router;
        this.toastr = toastr;
        this.aircraftinfo = new _routine_days14_days14_model__WEBPACK_IMPORTED_MODULE_5__["Aircraft"]();
        this.existAircraft = "KW-3554";
        this.date = new Date();
    }
    CreateAircraftDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aircraftService.getAircraftinfoList().subscribe(function (data) {
            _this.aircraftList = data;
            _this.aircraftinfo.last_flown_date = _this.date.toISOString().substr(0, 10);
            _this.aircraftinfo.first_flight_date = _this.date.toISOString().substr(0, 10);
        });
    };
    CreateAircraftDetailsComponent.prototype.saveAircraft = function () {
        var _this = this;
        this.aircraftinfo.last_flown_date = this.toEpoch(this.aircraftinfo.last_flown_date);
        this.aircraftinfo.first_flight_date = this.toEpoch(this.aircraftinfo.first_flight_date);
        for (var i = 0; i < this.aircraftList.length; i++) {
            if (this.aircraftList[i].aircraft == this.aircraftinfo.aircraft) {
                this.existAircraft = this.aircraftList[i].aircraft;
            }
        }
        if (this.existAircraft !== this.aircraftinfo.aircraft) {
            this.aircraftService.createAicraft(this.aircraftinfo).subscribe(function (data) {
                _this.aircraft = data;
                _this.toastr.showSuccess(_this.aircraft.aircraft + " added successfully", "Sortie Flight");
                _this.router.navigate(['/aircraft']);
                (function (error) { return _this.toastr.showError(error, "Sortie Flight"); });
            });
        }
        else {
            this.msg = "Aircraft Name already exist";
            console.log(this.msg);
        }
    };
    CreateAircraftDetailsComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        return epoch;
    };
    CreateAircraftDetailsComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000);
        ; // Your timezone! //1612137600
        var ddmmyyyy = (myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear());
        return ddmmyyyy;
    };
    CreateAircraftDetailsComponent.ctorParameters = function () { return [
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_3__["AircraftService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
    ]; };
    CreateAircraftDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-aircraft-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-aircraft-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-aircraft-details.component.css */ "./src/app/views/aircraft/create-aircraft-details/create-aircraft-details.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_aircraft_service__WEBPACK_IMPORTED_MODULE_3__["AircraftService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], CreateAircraftDetailsComponent);
    return CreateAircraftDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=time]::-webkit-datetime-edit-ampm-field {\r\n  display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWlyY3JhZnQvdXBkYXRlLWFpcmNyYWZ0LWRldGFpbHMvdXBkYXRlLWFpcmNyYWZ0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FpcmNyYWZ0L3VwZGF0ZS1haXJjcmFmdC1kZXRhaWxzL3VwZGF0ZS1haXJjcmFmdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtYW1wbS1maWVsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UpdateAircraftDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAircraftDetailsComponent", function() { return UpdateAircraftDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var _model_sortie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/sortie */ "./src/app/model/sortie.ts");
/* harmony import */ var _routine_days14_days14_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routine/days14/days14.model */ "./src/app/views/routine/days14/days14.model.ts");
/* harmony import */ var _service_sortie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/sortie.service */ "./src/app/service/sortie.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");









var UpdateAircraftDetailsComponent = /** @class */ (function () {
    function UpdateAircraftDetailsComponent(sortieService, route, aircraftService, router, http, toastr) {
        this.sortieService = sortieService;
        this.route = route;
        this.aircraftService = aircraftService;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.selectedFile = null;
        this.img = "";
        this.msg = "";
        this.s1 = "";
        this.s2 = "";
        this.sortie = new _model_sortie__WEBPACK_IMPORTED_MODULE_5__["Sortie"]();
        this.aircraft1 = new _routine_days14_days14_model__WEBPACK_IMPORTED_MODULE_6__["Aircraft"]();
        this.date = new Date();
    }
    UpdateAircraftDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get("id"));
        this.aircraftService.getAircraftinfoById(id).subscribe(function (data) {
            _this.x = data.aircraft;
            data.flight_cycle = data.flight_cycle + 1;
            _this.y = data.flight_cycle;
        });
        this.getData(id);
        this.getAircraftinfo();
        this.sortie.str_date_flown = this.date.toISOString().substr(0, 10);
    };
    UpdateAircraftDetailsComponent.prototype.getAircraftinfo = function () {
        var _this = this;
        this.aircraftService.getAircraftinfoList().subscribe(function (data) {
            _this.aircrafts = data;
        });
    };
    UpdateAircraftDetailsComponent.prototype.getData = function (id) {
        this.id = id;
    };
    UpdateAircraftDetailsComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    UpdateAircraftDetailsComponent.prototype.onupload = function () {
        var _this = this;
        var fd = new FormData();
        this.img = this.selectedFile.name;
        this.s1 = this.img;
        this.sortie.file = this.s1;
        fd.append("file", this.selectedFile, this.img);
        this.http
            .post("http://localhost:8080/api/v1/uploadsortie", fd)
            .subscribe(function (event) {
            _this.push = event;
        });
    };
    UpdateAircraftDetailsComponent.prototype.saveSortie = function () {
        var _this = this;
        this.sortie.aircraft = this.x;
        this.sortie.flight_cycle = this.y;
        this.sortie.date_flown = this.toEpoch(this.sortie.str_date_flown);
        this.sortieService.createSortie(this.sortie).subscribe(function (data) {
            _this.sortie.file = _this.s1;
            _this.toastr.showSuccess('Updation success', "Update Sortie Flight");
            _this.sorties = data;
            _this.aircraftService
                .updateArcraftinfo(_this.id, _this.sortie)
                .subscribe(function (data) {
                _this.updateddata = data;
            });
        });
        (function (error) { return _this.toastr.showError(error, "Update Sortie Flight"); });
    };
    UpdateAircraftDetailsComponent.prototype.onSubmit = function () {
        this.saveSortie();
        this.router.navigate(["/aircraft"]);
    };
    UpdateAircraftDetailsComponent.prototype.toEpoch = function (strDate) {
        var myDate = new Date(strDate); // Your timezone!
        var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
        return epoch;
    };
    UpdateAircraftDetailsComponent.prototype.fromEpoch = function (epoch) {
        var myDate = new Date(epoch * 1000); // Your timezone! //1612137600
        var ddmmyyyy = myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear();
        return ddmmyyyy;
    };
    UpdateAircraftDetailsComponent.ctorParameters = function () { return [
        { type: _service_sortie_service__WEBPACK_IMPORTED_MODULE_7__["SortieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
    ]; };
    UpdateAircraftDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-update-aircraft-details",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-aircraft-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-aircraft-details.component.css */ "./src/app/views/aircraft/update-aircraft-details/update-aircraft-details.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_sortie_service__WEBPACK_IMPORTED_MODULE_7__["SortieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_aircraft_service__WEBPACK_IMPORTED_MODULE_4__["AircraftService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]])
    ], UpdateAircraftDetailsComponent);
    return UpdateAircraftDetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-aircraft-aircraft-module.js.map