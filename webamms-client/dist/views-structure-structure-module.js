(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-structure-structure-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/addmo120/addmo120.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/addmo120/addmo120.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Add  120 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"  col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\">\r\n                <span class=\"input-group-text\">Seqno</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo120.seqno\" required #seqno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo120.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-prepend input-group\"> \r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text\">Smrd no</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo120.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n            \r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo120.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo120.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo120.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                \r\n                 <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Effectivity</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo120.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n              \r\n                </div>\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo120.description\"  >\r\n                </div>\r\n             </div>\r\n          </div>\r\n          \r\n<br>\r\n<br>\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled] = \"!addserviceform.valid\" (click)=\"adduserformsubmit()\">Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/editmo120/editmo120.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/editmo120/editmo120.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Edit Mo120 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\">\r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo120.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                      </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-prepend input-group\"> \r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-text\">Smrd no</span>\r\n                  <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo120.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo120.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo120.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo120.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo120.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  \r\n                  <div class=\"input-prepend input-group\"> \r\n                 <span class=\"input-group-text\">Effectivity</span>\r\n               <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo120.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                   <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n               \r\n                 </div>\r\n             </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                  <div class=\" input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo120.description\" required >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n             \r\n            <div class=\"row\">\r\n            <div class=\"simple\">\r\n                            \r\n  <tabset width=100%>\r\n  \r\n \r\n\r\n    <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n      <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n    \r\n      </div>\r\n      \r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n    <tr>\r\n    <th>Select</th>\r\n    <th>Sno </th>\r\n    \r\n    <th>Part-no</th>\r\n    <th>Oem</th>\r\n    <th>Description</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    \r\n    \r\n         <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n             \r\n    \r\n     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n      <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n      </div> \r\n    <!-- </td>  -->\r\n    \r\n    \r\n    \r\n    \r\n      <ng-template #truepart>\r\n    \r\n       <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n      </ng-template> \r\n            <ng-template #falsepart>\r\n            \r\n      <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n    </ng-template>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n     <td>{{u1.seqno }}</td> \r\n      \r\n      <td>{{u1.partno}}</td> \r\n      <td>{{u1.oem}}</td>\r\n      <td>{{u1.description}}</td>\r\n    </tr> \r\n    \r\n    </table>  \r\n        \r\n    <!--SPARE SELECTED PART STARTS -->\r\n    \r\n    \r\n      \r\n        \r\n    <!-- SPARE SELECTED PART END -->  \r\n    \r\n    </tab>\r\n    \r\n<tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n  <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n<!--SPARE SELECTED PART STARTS -->\r\n\r\n\r\n  \r\n    \r\n<!-- SPARE SELECTED PART END -->  \r\n\r\n</tab>\r\n<tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n  <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n\r\n<tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n   <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n  <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n     \r\n  </tabset>\r\n\r\n\r\n            </div>\r\n           \r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>  \r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n      \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/mo120.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/mo120.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n          \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/addmo15/addmo15.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/addmo15/addmo15.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Add  15 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"  col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\">\r\n                <span class=\"input-group-text\">Seqno</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo15.seqno\" required #seqno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo15.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-prepend input-group\"> \r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text\">Smrd no</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo15.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n            \r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo15.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo15.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo15.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                \r\n                 <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Effectivity</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo15.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n              \r\n                </div>\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo15.description\"  >\r\n                </div>\r\n             </div>\r\n          </div>\r\n          \r\n<br>\r\n<br>\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled] = \"!addserviceform.valid\" (click)=\"adduserformsubmit()\">Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/editmo15/editmo15.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/editmo15/editmo15.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Edit Mo15 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\">\r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo15.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                      </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-prepend input-group\"> \r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-text\">Smrd no</span>\r\n                  <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo15.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo15.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo15.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo15.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo15.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  \r\n                  <div class=\"input-prepend input-group\"> \r\n                 <span class=\"input-group-text\">Effectivity</span>\r\n               <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo15.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                   <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n               \r\n                 </div>\r\n             </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                  <div class=\" input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo15.description\" required >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n             \r\n            <div class=\"row\">\r\n            <div class=\"simple\">\r\n                            \r\n  <tabset width=100%>\r\n  \r\n \r\n\r\n    <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n      <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n    \r\n      </div>\r\n      \r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n    <tr>\r\n    <th>Select</th>\r\n    <th>Sno </th>\r\n    \r\n    <th>Part-no</th>\r\n    <th>Oem</th>\r\n    <th>Description</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    \r\n    \r\n         <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n             \r\n    \r\n     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n      <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n      </div> \r\n    <!-- </td>  -->\r\n    \r\n    \r\n    \r\n    \r\n      <ng-template #truepart>\r\n    \r\n       <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n      </ng-template> \r\n            <ng-template #falsepart>\r\n            \r\n      <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n    </ng-template>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n     <td>{{u1.seqno }}</td> \r\n      \r\n      <td>{{u1.partno}}</td> \r\n      <td>{{u1.oem}}</td>\r\n      <td>{{u1.description}}</td>\r\n    </tr> \r\n    \r\n    </table>  \r\n        \r\n    <!--SPARE SELECTED PART STARTS -->\r\n    \r\n    \r\n      \r\n        \r\n    <!-- SPARE SELECTED PART END -->  \r\n    \r\n    </tab>\r\n    \r\n<tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n  <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n<!--SPARE SELECTED PART STARTS -->\r\n\r\n\r\n  \r\n    \r\n<!-- SPARE SELECTED PART END -->  \r\n\r\n</tab>\r\n<tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n  <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n\r\n<tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n   <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n  <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n     \r\n  </tabset>\r\n\r\n\r\n            </div>\r\n           \r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>  \r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n      \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/mo15.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/mo15.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n            </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/addmo30/addmo30.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/addmo30/addmo30.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Add  30 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"  col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\">\r\n                <span class=\"input-group-text\">Seqno</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo30.seqno\" required #seqno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo30.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-prepend input-group\"> \r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text\">Smrd no</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo30.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n            \r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo30.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo30.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo30.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                \r\n                 <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Effectivity</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo30.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n              \r\n                </div>\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo30.description\"  >\r\n                </div>\r\n             </div>\r\n          </div>\r\n          \r\n<br>\r\n<br>\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled] = \"!addserviceform.valid\" (click)=\"adduserformsubmit()\">Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/editmo30/editmo30.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/editmo30/editmo30.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Edit Mo30 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\">\r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo30.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                      </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-prepend input-group\"> \r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-text\">Smrd no</span>\r\n                  <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo30.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo30.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo30.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo30.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo30.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  \r\n                  <div class=\"input-prepend input-group\"> \r\n                 <span class=\"input-group-text\">Effectivity</span>\r\n               <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo30.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                   <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n               \r\n                 </div>\r\n             </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                  <div class=\" input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo30.description\" required >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n             \r\n            <div class=\"row\">\r\n            <div class=\"simple\">\r\n                            \r\n  <tabset width=100%>\r\n  \r\n \r\n\r\n    <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n      <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n    \r\n      </div>\r\n      \r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n    <tr>\r\n    <th>Select</th>\r\n    <th>Sno </th>\r\n    \r\n    <th>Part-no</th>\r\n    <th>Oem</th>\r\n    <th>Description</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    \r\n    \r\n         <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n             \r\n    \r\n     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n      <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n      </div> \r\n    <!-- </td>  -->\r\n    \r\n    \r\n    \r\n    \r\n      <ng-template #truepart>\r\n    \r\n       <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n      </ng-template> \r\n            <ng-template #falsepart>\r\n            \r\n      <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n    </ng-template>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n     <td>{{u1.seqno }}</td> \r\n      \r\n      <td>{{u1.partno}}</td> \r\n      <td>{{u1.oem}}</td>\r\n      <td>{{u1.description}}</td>\r\n    </tr> \r\n    \r\n    </table>  \r\n        \r\n    <!--SPARE SELECTED PART STARTS -->\r\n    \r\n    \r\n      \r\n        \r\n    <!-- SPARE SELECTED PART END -->  \r\n    \r\n    </tab>\r\n    \r\n<tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n  <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n<!--SPARE SELECTED PART STARTS -->\r\n\r\n\r\n  \r\n    \r\n<!-- SPARE SELECTED PART END -->  \r\n\r\n</tab>\r\n<tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n  <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n\r\n<tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n   <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n  <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n     \r\n  </tabset>\r\n\r\n\r\n            </div>\r\n           \r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>  \r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n      \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/mo30.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/mo30.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/addmo60/addmo60.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/addmo60/addmo60.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Add  60 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"  col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\">\r\n                <span class=\"input-group-text\">Seqno</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo60.seqno\" required #seqno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo60.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-prepend input-group\"> \r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text\">Smrd no</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo60.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n            \r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo60.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo60.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo60.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                \r\n                 <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Effectivity</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo60.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n              \r\n                </div>\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo60.description\"  >\r\n                </div>\r\n             </div>\r\n          </div>\r\n          \r\n<br>\r\n<br>\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled] = \"!addserviceform.valid\" (click)=\"adduserformsubmit()\">Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/editmo60/editmo60.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/editmo60/editmo60.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Edit Mo60 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\">\r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo60.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                      </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-prepend input-group\"> \r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-text\">Smrd no</span>\r\n                  <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo60.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo60.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo60.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo60.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo60.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  \r\n                  <div class=\"input-prepend input-group\"> \r\n                 <span class=\"input-group-text\">Effectivity</span>\r\n               <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo60.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                   <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n               \r\n                 </div>\r\n             </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                  <div class=\" input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo60.description\" required >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n             \r\n            <div class=\"row\">\r\n            <div class=\"simple\">\r\n                            \r\n  <tabset width=100%>\r\n  \r\n \r\n\r\n    <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n      <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n    \r\n      </div>\r\n      \r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n    <tr>\r\n    <th>Select</th>\r\n    <th>Sno </th>\r\n    \r\n    <th>Part-no</th>\r\n    <th>Oem</th>\r\n    <th>Description</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    \r\n    \r\n         <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n             \r\n    \r\n     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n      <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n      </div> \r\n    <!-- </td>  -->\r\n    \r\n    \r\n    \r\n    \r\n      <ng-template #truepart>\r\n    \r\n       <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n      </ng-template> \r\n            <ng-template #falsepart>\r\n            \r\n      <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n    </ng-template>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n     <td>{{u1.seqno }}</td> \r\n      \r\n      <td>{{u1.partno}}</td> \r\n      <td>{{u1.oem}}</td>\r\n      <td>{{u1.description}}</td>\r\n    </tr> \r\n    \r\n    </table>  \r\n        \r\n    <!--SPARE SELECTED PART STARTS -->\r\n    \r\n    \r\n      \r\n        \r\n    <!-- SPARE SELECTED PART END -->  \r\n    \r\n    </tab>\r\n    \r\n<tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n  <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n<!--SPARE SELECTED PART STARTS -->\r\n\r\n\r\n  \r\n    \r\n<!-- SPARE SELECTED PART END -->  \r\n\r\n</tab>\r\n<tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n  <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n\r\n<tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n   <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n  <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n     \r\n  </tabset>\r\n\r\n\r\n            </div>\r\n           \r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>  \r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n      \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/mo60.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/mo60.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/addmo90/addmo90.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/addmo90/addmo90.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Add  90 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"  col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\">\r\n                <span class=\"input-group-text\">Seqno</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo90.seqno\" required #seqno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo90.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-prepend input-group\"> \r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text\">Smrd no</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo90.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n            \r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo90.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo90.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo90.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                \r\n                 <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Effectivity</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo90.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n              \r\n                </div>\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo90.description\"  >\r\n                </div>\r\n             </div>\r\n          </div>\r\n          \r\n<br>\r\n<br>\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled] = \"!addserviceform.valid\" (click)=\"adduserformsubmit()\">Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/editmo90/editmo90.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/editmo90/editmo90.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Edit Mo90 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\">\r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo90.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                      </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-prepend input-group\"> \r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-text\">Smrd no</span>\r\n                  <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo90.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo90.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo90.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo90.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo90.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  \r\n                  <div class=\"input-prepend input-group\"> \r\n                 <span class=\"input-group-text\">Effectivity</span>\r\n               <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo90.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                   <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n               \r\n                 </div>\r\n             </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                  <div class=\" input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo90.description\" required >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n             \r\n            <div class=\"row\">\r\n            <div class=\"simple\">\r\n                            \r\n  <tabset width=100%>\r\n  \r\n \r\n\r\n    <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n      <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n    \r\n      </div>\r\n      \r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n    <tr>\r\n    <th>Select</th>\r\n    <th>Sno </th>\r\n    \r\n    <th>Part-no</th>\r\n    <th>Oem</th>\r\n    <th>Description</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    \r\n    \r\n         <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n             \r\n    \r\n     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n      <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n      </div> \r\n    <!-- </td>  -->\r\n    \r\n    \r\n    \r\n    \r\n      <ng-template #truepart>\r\n    \r\n       <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n      </ng-template> \r\n            <ng-template #falsepart>\r\n            \r\n      <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n    </ng-template>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n     <td>{{u1.seqno }}</td> \r\n      \r\n      <td>{{u1.partno}}</td> \r\n      <td>{{u1.oem}}</td>\r\n      <td>{{u1.description}}</td>\r\n    </tr> \r\n    \r\n    </table>  \r\n        \r\n    <!--SPARE SELECTED PART STARTS -->\r\n    \r\n    \r\n      \r\n        \r\n    <!-- SPARE SELECTED PART END -->  \r\n    \r\n    </tab>\r\n    \r\n<tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n  <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n<!--SPARE SELECTED PART STARTS -->\r\n\r\n\r\n  \r\n    \r\n<!-- SPARE SELECTED PART END -->  \r\n\r\n</tab>\r\n<tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n  <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n\r\n<tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n   <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n\r\n  </div>\r\n  \r\n  <table class=\"table table-sm\">\r\n    <thead>\r\n<tr>\r\n<th>Select</th>\r\n<th>Sno </th>\r\n\r\n<th>Part-no</th>\r\n<th>Oem</th>\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n  <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n         \r\n\r\n <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n  <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n  </div> \r\n<!-- </td>  -->\r\n\r\n\r\n\r\n\r\n  <ng-template #truepart>\r\n\r\n   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template> \r\n        <ng-template #falsepart>\r\n        \r\n  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n <td>{{u1.seqno }}</td> \r\n  \r\n  <td>{{u1.partno}}</td> \r\n  <td>{{u1.oem}}</td>\r\n  <td>{{u1.description}}</td>\r\n</tr> \r\n\r\n</table>  \r\n    \r\n\r\n\r\n</tab>\r\n     \r\n  </tabset>\r\n\r\n\r\n            </div>\r\n           \r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>  \r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n      \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/mo90.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/mo90.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n            \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/structure.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/structure.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>structure works!</p>\r\n");

/***/ }),

/***/ "./src/app/views/structure/mo120/addmo120/addmo120.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/structure/mo120/addmo120/addmo120.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3RydWN0dXJlL21vMTIwL2FkZG1vMTIwL2FkZG1vMTIwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zdHJ1Y3R1cmUvbW8xMjAvYWRkbW8xMjAvYWRkbW8xMjAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/structure/mo120/addmo120/addmo120.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/structure/mo120/addmo120/addmo120.component.ts ***!
  \**********************************************************************/
/*! exports provided: Addmo120Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo120Component", function() { return Addmo120Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo120_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo120.model */ "./src/app/views/structure/mo120/mo120.model.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo120_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mo120.service */ "./src/app/views/structure/mo120/mo120.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo120Component = /** @class */ (function () {
    function Addmo120Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo120 = new _mo120_model__WEBPACK_IMPORTED_MODULE_4__["Mo120"]();
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.needcheck = false;
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.gse = new _mo120_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo120_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo120_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo120_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    ;
    Addmo120Component.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.gse = data;
            console.log(_this.gse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    Addmo120Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo120.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo120.gsenos = '00';
        }
        else {
            this.mo120.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo120.sparenos = '00';
        }
        else {
            this.mo120.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo120.toolsnos = '00';
        }
        else {
            this.mo120.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo120.consumablenos = '00';
        }
        else {
            this.mo120.consumablenos = this.copystrcl;
        }
        console.log(this.mo120.gsenos);
        console.log(this.mo120.gsenos);
        this._service.addUsertoRemotemo120(this.mo120).subscribe(function (data) {
            console.log(_this.mo120.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo120 service added successfully', "Mo120 service");
            _this._router.navigate(['/structure/mo120']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo120 service');
        });
    };
    Addmo120Component.prototype.function1 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.name == undefined) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
            }
            else {
                this.name = this.name + "," + id;
                this.nam2.push(id);
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            var index = this.nam2.indexOf(id);
            //  alert(index);
            if (index > -1) {
                this.nam2.splice(index, 1);
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        this.namestr = this.name;
        console.log(typeof (this.namestr));
        if (typeof (this.namestr === 'number')) {
            this.namestr = this.namestr.toString();
        }
    }; /*function1*/
    /*function 2 starts*/
    Addmo120Component.prototype.function2 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namesp == undefined) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.nam3.push(id);
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            var index1 = this.nam3.indexOf(id);
            //  alert(index1);
            if (index1 > -1) {
                this.nam3.splice(index1, 1);
            }
            console.log("Un checked" + id);
            this.namesp = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        this.namestrsp = this.namesp;
        console.log(typeof (this.namestrsp));
        if (typeof (this.namestrsp === 'number')) {
            this.namestrsp = this.namestrsp.toString();
        }
    }; /*function2*/
    Addmo120Component.prototype.function3 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.nametl == undefined) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.nam4.push(id);
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in tools" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            var index2 = this.nam4.indexOf(id);
            //  alert(index1);
            if (index2 > -1) {
                this.nam4.splice(index2, 1);
            }
            console.log("Un checked" + id);
            this.nametl = this.str2;
            //    console.log("The name is"+this.name);
            console.log("the name of nam4=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        this.namestrtl = this.nametl;
        console.log(typeof (this.namestrtl));
        if (typeof (this.namestrtl === 'number')) {
            this.namestrtl = this.namestrtl.toString();
        }
    };
    Addmo120Component.prototype.function4 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namecl == undefined) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.nam5.push(id);
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in tools" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            var index3 = this.nam5.indexOf(id);
            //  alert(index1);
            if (index3 > -1) {
                this.nam5.splice(index3, 1);
            }
            console.log("Un checked" + id);
            this.namecl = this.str3;
            //    console.log("The name is"+this.name);
            console.log("the name of nam5=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        this.namestrcl = this.namecl;
        console.log(typeof (this.namestrcl));
        if (typeof (this.namestrcl === 'number')) {
            this.namestrcl = this.namestrcl.toString();
        }
    };
    Addmo120Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo120.type = event.target.value;
    };
    Addmo120Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _mo120_service__WEBPACK_IMPORTED_MODULE_9__["Mo120Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo120Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo120',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo120.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/addmo120/addmo120.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo120.component.css */ "./src/app/views/structure/mo120/addmo120/addmo120.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _mo120_service__WEBPACK_IMPORTED_MODULE_9__["Mo120Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo120Component);
    return Addmo120Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo120/editmo120/editmo120.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/structure/mo120/editmo120/editmo120.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3RydWN0dXJlL21vMTIwL2VkaXRtbzEyMC9lZGl0bW8xMjAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzEyMC9lZGl0bW8xMjAvZWRpdG1vMTIwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/structure/mo120/editmo120/editmo120.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/structure/mo120/editmo120/editmo120.component.ts ***!
  \************************************************************************/
/*! exports provided: Editmo120Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo120Component", function() { return Editmo120Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo120_mo120_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mo120/mo120.model */ "./src/app/views/structure/mo120/mo120.model.ts");
/* harmony import */ var _mo120_mo120_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mo120/mo120.service */ "./src/app/views/structure/mo120/mo120.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;









var Editmo120Component = /** @class */ (function () {
    function Editmo120Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
        this._router = _router;
        this.cservice = cservice;
        this.tservice = tservice;
        this._activatedroute = _activatedroute;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this.toastr = toastr;
        this._http = _http;
        this.isselected = false;
        this.isgse = true;
        this.istools = false;
        this.isspare = false;
        this.isconsumable = false;
        this.myInterval = 0;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.m = 0;
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.namelen = 0;
        this.needcheck = false;
        this.gse = new _mo120_mo120_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.mo120 = new _mo120_mo120_model__WEBPACK_IMPORTED_MODULE_4__["Mo120"]();
        this.spare = new _mo120_mo120_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo120_mo120_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo120_mo120_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"];
    }
    Editmo120Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo120(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo120 = data;
            console.log("The gse s are=" + _this.mo120.gsenos);
            console.log(_this.mo120);
            //   console.log("The spares  are="+this.mo120.sparenos);
            _this.nam2 = _this.mo120.gsenos;
            _this.name = _this.mo120.gsenos;
            _this.nam3 = _this.mo120.sparenos;
            _this.namesp = _this.mo120.sparenos;
            _this.nam4 = _this.mo120.toolsnos;
            _this.nametl = _this.mo120.toolsnos;
            _this.nam5 = _this.mo120.consumablenos;
            _this.namecl = _this.mo120.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo120.gsenos != null) {
            }
            if (_this.mo120.sparenos != null) {
            }
            if (_this.mo120.toolsnos != null) {
            }
            if (_this.mo120.consumablenos != null) {
            }
            if (_this.mo120.gsenos == null) {
            }
            if (_this.mo120.sparenos == null) {
            }
            if (_this.mo120.toolsnos == null) {
            }
            if (_this.mo120.consumablenos == null) {
            }
        }, function (error) { return console.log("exception occured"); });
        /*for gse*/
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
            console.log(_this.datagse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.tservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.cservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    Editmo120Component.prototype.function1 = function (e, id) {
        this.myid = id;
        if (e.target.checked) {
            if (this.name == undefined || this.name == null) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
                // alert(this.nam2);
            }
            else {
                this.name = this.name + "," + id;
                this.name2 = this.nam2;
                this.name2 = this.name2.split(",");
                this.name2.push(id);
                this.nam2 = this.name2.toString();
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2 = this.nam2;
            this.name2 = this.name2.split(",");
            var index = this.name2.indexOf(this.myid);
            if (index > -1) {
                this.name2.splice(index, 1);
                this.nam2 = this.name2.toString();
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        //alert(this.copystr);
        /*function*/
    };
    //function2 for spare 
    //************* 
    Editmo120Component.prototype.function2 = function (e, id) {
        this.myidsp = id;
        if (e.target.checked) {
            if (this.namesp == undefined || this.namesp == null) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.name2sp = this.nam3;
                this.name2sp = this.name2sp.split(",");
                this.name2sp.push(id);
                this.nam3 = this.name2sp.toString();
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2sp = this.nam3;
            this.name2sp = this.name2sp.split(",");
            var index1 = this.name2sp.indexOf(this.myid);
            if (index1 > -1) {
                this.name2sp.splice(index1, 1);
                this.nam3 = this.name2sp.toString();
            }
            console.log("Un checked in spare" + id);
            this.namesp = this.str1sp;
            console.log("the name of nam3=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        /*function2*/
    };
    //************* */
    Editmo120Component.prototype.function3 = function (e, id) {
        this.myidtl = id;
        if (e.target.checked) {
            if (this.nametl == undefined || this.nametl == null) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.name2tl = this.nam4;
                this.name2tl = this.name2tl.split(",");
                this.name2tl.push(id);
                this.nam4 = this.name2tl.toString();
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in spare" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2tl = this.nam4;
            this.name2tl = this.name2tl.split(",");
            var index2 = this.name2tl.indexOf(this.myid);
            if (index2 > -1) {
                this.name2tl.splice(index2, 1);
                this.nam4 = this.name2tl.toString();
            }
            console.log("Un checked in spare" + id);
            this.nametl = this.str1tl;
            console.log("the name of nam3=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        /*function2*/
    };
    Editmo120Component.prototype.function4 = function (e, id) {
        this.myidcl = id;
        if (e.target.checked) {
            if (this.namecl == undefined || this.namecl == null) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.name2cl = this.nam5;
                this.name2cl = this.name2cl.split(",");
                this.name2cl.push(id);
                this.nam5 = this.name2cl.toString();
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in spare" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2cl = this.nam5;
            this.name2cl = this.name2cl.split(",");
            var index3 = this.name2cl.indexOf(this.myid);
            if (index3 > -1) {
                this.name2cl.splice(index3, 1);
                this.nam5 = this.name2cl.toString();
            }
            console.log("Un checked in spare" + id);
            this.namecl = this.str1cl;
            console.log("the name of nam3=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        /*function2*/
    };
    Editmo120Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo120.gsenos = this.copystr;
        this.mo120.sparenos = this.copystrsp;
        this.mo120.toolsnos = this.copystrtl;
        this.mo120.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo120(this.mo120).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/structure/mo120']);
            _this.toastr.showInfo('Mo120 service updation success', 'Mo120 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo120 update'); });
    };
    Editmo120Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo120_mo120_service__WEBPACK_IMPORTED_MODULE_5__["Mo120Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo120Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo120',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo120.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/editmo120/editmo120.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo120.component.css */ "./src/app/views/structure/mo120/editmo120/editmo120.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _mo120_mo120_service__WEBPACK_IMPORTED_MODULE_5__["Mo120Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo120Component);
    return Editmo120Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo120/mo120.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/structure/mo120/mo120.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3RydWN0dXJlL21vMTIwL21vMTIwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zdHJ1Y3R1cmUvbW8xMjAvbW8xMjAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/structure/mo120/mo120.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/structure/mo120/mo120.component.ts ***!
  \**********************************************************/
/*! exports provided: Mo120Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo120Component", function() { return Mo120Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo120_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo120.model */ "./src/app/views/structure/mo120/mo120.model.ts");
/* harmony import */ var _mo120_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mo120.service */ "./src/app/views/structure/mo120/mo120.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var Mo120Component = /** @class */ (function () {
    function Mo120Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
        var _this = this;
        this._http = _http;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._spareservice = _spareservice;
        this._gseservice = _gseservice;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.toastr = toastr;
        this.acitvities = [];
        this.start = 1;
        this.nam2 = ['0'];
        this.name3 = ['0'];
        this.activeSlideIndex = 0;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = 'Remove SPARE Record';
        this.popoverMessage = ' Delete Yes/No ?';
        this.istab = false;
        this.count1 = 0;
        this.count = 0;
        this.count5 = 0;
        this.mo120 = new _mo120_model__WEBPACK_IMPORTED_MODULE_5__["Mo120"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo120Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo120');
        localStorage.setItem('openpage', this.x);
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
        //alert(this.perpageflag);
        //alert(this.x);
        this.config =
            {
                itemsPerPage: this.perpage,
                currentPage: this.m,
                totalItems: this.rec1,
                id: 'listing_pagination',
            };
        this._service.countrecordmo120().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo120(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo120 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo120;
        } /*for first mo120*/); /* for first getdata*/
        this._service.fetchUserListFromRemotegse().subscribe(function (data) {
            console.log(data);
            _this.datagse = data;
        });
        this._service.fetchUserListFromRemotetools().subscribe(function (data) {
            console.log(data);
            _this.datatools = data;
        });
        this._service.fetchUserListFromRemotespare().subscribe(function (data) {
            console.log(data);
            _this.dataspare = data;
        });
        this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            console.log(data);
            _this.dataconsumable = data;
        });
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
    Mo120Component.prototype.ngOnDestroy = function () {
    };
    Mo120Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/structure/mo120/editmo120", id]);
    };
    Mo120Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/structure/mo120/addmo120"]);
    };
    Mo120Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo120(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo120(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo120 = datasear;
                console.log("to test spare" + _this.mo120);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo120(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo120 = data;
            } /*for first mo120*/); /* for first getdata*/
            this._service.countrecordmo120().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo120Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo120(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo120(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo120(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo120  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo120Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo120().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo120(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo120*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo120Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
        var _this = this;
        if (e.target.checked) {
            this.nam2[0] = id;
            // this.name3[0]=id;
            this.istab = true;
            this.count1 = 1;
            this.count5 = 1;
            //this.count=this.count+1;
            this.count = 1;
            // alert("The id ="+id +","+this.count+","+gsenos +"selid="+this.nam2+"sparenos="+sparenos+this.count1+"toolsnos="+toolsnos+","+this.count5+"consumablenos="+consumablenos);
            this.selected_id = id;
        }
        else {
            this.count = this.count - 1;
            this.istab = false;
            this.count1 = this.count1 - 1;
            this.count5 = this.count5 - 1;
            this.selected_id = "";
        }
        this._gseservice.fetchUserListFromRemoteservicecondition(gsenos.toString()).subscribe(function (datagse) {
            console.log(datagse);
            _this.datagse = datagse;
            //this.totalItems=5;
        } /*for first mo120*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo120*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo120*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo120*/); /* for first getdata*/
    };
    Mo120Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo120(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo120(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo120(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo120 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo120 service');
        });
    };
    Mo120Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo120Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(documentDefinition).open();
    };
    Mo120Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo120));
        return {
            header: {
                //pageBreak:'before',
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
                return [{ text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'center' }];
            },
            content: [
                {
                    text: 'Service',
                    //
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getServiceData(this.data),
                {
                    text: '\n\nGse',
                    // style: 'header', 
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getGseData(this.datagse),
                {
                    text: '\n\nTools',
                    style: 'header',
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    margin: [0, 0, 0, 20]
                },
                this.getToolsData(this.datatools),
                {
                    text: '\n\nConsumable',
                    // style: 'header', 
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getConsumableData(this.dataconsumable),
                {
                    text: '\n\nSpare',
                    // style: 'header', 
                    bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getSpareData(this.dataspare),
            ],
        };
    };
    Mo120Component.prototype.getServiceData = function (mo120) {
        console.log('service..' + mo120);
        return {
            table: {
                width: ['*', '*', '*', '*', '*', '*', '*', '*',],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Seqno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Ammtcno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Category',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Type',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Trade',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Effectivity',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], mo120.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo120Component.prototype.getGseData = function (gse) {
        console.log('gse..' + gse);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'GseNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], gse.map(function (ed) {
                    return [ed.sno, ed.portno, ed.gseno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo120Component.prototype.getToolsData = function (tools) {
        console.log('tools..' + tools);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            // colSpan:1,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            // colSpan:2,
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'ToolsNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], tools.map(function (ed) {
                    return [ed.sno, ed.partno, ed.toolsno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo120Component.prototype.getSpareData = function (spare) {
        console.log('spare..' + spare);
        return {
            table: {
                width: ['*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'seqno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], spare.map(function (ed) {
                    return [ed.seqno, ed.partno, ed.oem, ed.description];
                }))
            },
        };
    };
    Mo120Component.prototype.getConsumableData = function (consumable) {
        console.log('consumable..' + consumable);
        return {
            table: {
                width: ['*', 'z*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Consumableno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], consumable.map(function (ed) {
                    return [ed.sno, ed.consumableno, ed.partno, ed.oem, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo120Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_10__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"] },
        { type: _mo120_service__WEBPACK_IMPORTED_MODULE_6__["Mo120Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo120Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo120',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo120.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo120/mo120.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo120.component.css */ "./src/app/views/structure/mo120/mo120.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_10__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"],
            _mo120_service__WEBPACK_IMPORTED_MODULE_6__["Mo120Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo120Component);
    return Mo120Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo120/mo120.model.ts":
/*!******************************************************!*\
  !*** ./src/app/views/structure/mo120/mo120.model.ts ***!
  \******************************************************/
/*! exports provided: Mo120, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo120", function() { return Mo120; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo120 = /** @class */ (function () {
    function Mo120() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo120;
}());

var Consumable = /** @class */ (function () {
    function Consumable() {
    }
    return Consumable;
}());

var Spare = /** @class */ (function () {
    function Spare() {
    }
    return Spare;
}());

var Gse = /** @class */ (function () {
    function Gse() {
    }
    return Gse;
}());

var Tools = /** @class */ (function () {
    function Tools() {
    }
    return Tools;
}());

var Aircraft = /** @class */ (function () {
    function Aircraft() {
    }
    return Aircraft;
}());



/***/ }),

/***/ "./src/app/views/structure/mo120/mo120.service.ts":
/*!********************************************************!*\
  !*** ./src/app/views/structure/mo120/mo120.service.ts ***!
  \********************************************************/
/*! exports provided: Mo120Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo120Service", function() { return Mo120Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo120Service = /** @class */ (function () {
    function Mo120Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo120Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo120Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo120Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo120Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo120Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo120Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo120Service.prototype.fetchUserListFromRemotemo120 = function () {
        return this._http.get("http://localhost:8080/getmo120list");
    };
    Mo120Service.prototype.fetchUserByIdFromRemotemo120 = function (id) {
        return this._http.get("http://localhost:8080/getmo120byid/" + id);
    };
    Mo120Service.prototype.addUsertoRemotemo120 = function (mo120) {
        return this._http.post("http://localhost:8080/addmo120", mo120);
    };
    Mo120Service.prototype.deleteUserByIdFromRemotemo120 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo120byidtest/" + id);
    };
    Mo120Service.prototype.getdatamo120 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo120/page/" + pa + "/" + per);
    };
    Mo120Service.prototype.fetchfindlastmo120 = function () {
        return this._http.get("http://localhost:8080/findlastmo120");
    };
    Mo120Service.prototype.countrecordmo120 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo120");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo120Service.prototype.counteruserecordmo120 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo120?seqno=" + no1);
    };
    Mo120Service.prototype.fetchUserBymo120 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo120/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo120Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo120Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo120Service);
    return Mo120Service;
}());



/***/ }),

/***/ "./src/app/views/structure/mo15/addmo15/addmo15.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/structure/mo15/addmo15/addmo15.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzE1L2FkZG1vMTUvYWRkbW8xNS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/structure/mo15/addmo15/addmo15.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/structure/mo15/addmo15/addmo15.component.ts ***!
  \*******************************************************************/
/*! exports provided: Addmo15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo15Component", function() { return Addmo15Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo15_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo15.model */ "./src/app/views/structure/mo15/mo15.model.ts");
/* harmony import */ var _mo15_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mo15.service */ "./src/app/views/structure/mo15/mo15.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");











var Addmo15Component = /** @class */ (function () {
    function Addmo15Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo15 = new _mo15_model__WEBPACK_IMPORTED_MODULE_4__["Mo15"]();
        this.ischecked = false;
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.needcheck = false;
        this.nam = ['1', '2', '3', '4'];
        this.nam1 = ['37', '36', '35'];
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.m1 = 100;
        this.m1sp = 100;
        this.m1tl = 100;
        this.m1cl = 100;
        this.k = 1;
        this.l = 0;
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.identify = false;
        this.currentPage = 1;
        this.gse = new _mo15_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo15_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo15_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo15_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    ;
    Addmo15Component.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.gse = data;
            console.log(_this.gse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    /**Checkfun1 end */
    Addmo15Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo15.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo15.gsenos = '00';
        }
        else {
            this.mo15.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo15.sparenos = '00';
        }
        else {
            this.mo15.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo15.toolsnos = '00';
        }
        else {
            this.mo15.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo15.consumablenos = '00';
        }
        else {
            this.mo15.consumablenos = this.copystrcl;
        }
        console.log(this.mo15.gsenos);
        console.log(this.mo15.toolsnos);
        this._service.addUsertoRemotemo15(this.mo15).subscribe(function (data) {
            console.log(_this.mo15.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo15 service added successfully', "Mo15 service");
            _this._router.navigate(['/structure/mo15']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo15 service');
        });
    };
    Addmo15Component.prototype.function1 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.name == undefined) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
            }
            else {
                this.name = this.name + "," + id;
                this.nam2.push(id);
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            var index = this.nam2.indexOf(id);
            //  alert(index);
            if (index > -1) {
                this.nam2.splice(index, 1);
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        this.namestr = this.name;
        console.log(typeof (this.namestr));
        if (typeof (this.namestr === 'number')) {
            this.namestr = this.namestr.toString();
        }
    }; /*function1*/
    /*function 2 starts*/
    Addmo15Component.prototype.function2 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namesp == undefined) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.nam3.push(id);
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            var index1 = this.nam3.indexOf(id);
            //  alert(index1);
            if (index1 > -1) {
                this.nam3.splice(index1, 1);
            }
            console.log("Un checked" + id);
            this.namesp = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        this.namestrsp = this.namesp;
        console.log(typeof (this.namestrsp));
        if (typeof (this.namestrsp === 'number')) {
            this.namestrsp = this.namestrsp.toString();
        }
    }; /*function2*/
    Addmo15Component.prototype.function3 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.nametl == undefined) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.nam4.push(id);
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in tools" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            var index2 = this.nam4.indexOf(id);
            //  alert(index1);
            if (index2 > -1) {
                this.nam4.splice(index2, 1);
            }
            console.log("Un checked" + id);
            this.nametl = this.str2;
            //    console.log("The name is"+this.name);
            console.log("the name of nam4=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        this.namestrtl = this.nametl;
        console.log(typeof (this.namestrtl));
        if (typeof (this.namestrtl === 'number')) {
            this.namestrtl = this.namestrtl.toString();
        }
    };
    Addmo15Component.prototype.function4 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namecl == undefined) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.nam5.push(id);
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in tools" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            var index3 = this.nam5.indexOf(id);
            //  alert(index1);
            if (index3 > -1) {
                this.nam5.splice(index3, 1);
            }
            console.log("Un checked" + id);
            this.namecl = this.str3;
            //    console.log("The name is"+this.name);
            console.log("the name of nam5=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        this.namestrcl = this.namecl;
        console.log(typeof (this.namestrcl));
        if (typeof (this.namestrcl === 'number')) {
            this.namestrcl = this.namestrcl.toString();
        }
    };
    Addmo15Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo15.type = event.target.value;
    };
    Addmo15Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"] },
        { type: _mo15_service__WEBPACK_IMPORTED_MODULE_5__["Mo15Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    Addmo15Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo15',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo15.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/addmo15/addmo15.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo15.component.css */ "./src/app/views/structure/mo15/addmo15/addmo15.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"], _mo15_service__WEBPACK_IMPORTED_MODULE_5__["Mo15Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], Addmo15Component);
    return Addmo15Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo15/editmo15/editmo15.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/structure/mo15/editmo15/editmo15.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzE1L2VkaXRtbzE1L2VkaXRtbzE1LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/structure/mo15/editmo15/editmo15.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/structure/mo15/editmo15/editmo15.component.ts ***!
  \*********************************************************************/
/*! exports provided: Editmo15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo15Component", function() { return Editmo15Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo15_mo15_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mo15/mo15.model */ "./src/app/views/structure/mo15/mo15.model.ts");
/* harmony import */ var _mo15_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mo15.service */ "./src/app/views/structure/mo15/mo15.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Editmo15Component = /** @class */ (function () {
    function Editmo15Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
        this._router = _router;
        this.cservice = cservice;
        this.tservice = tservice;
        this._activatedroute = _activatedroute;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this.toastr = toastr;
        this._http = _http;
        this.isselected = false;
        this.isgse = true;
        this.istools = false;
        this.isspare = false;
        this.isconsumable = false;
        this.myInterval = 0;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.m = 0;
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.namelen = 0;
        this.needcheck = false;
        this.gse = new _mo15_mo15_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.mo15 = new _mo15_mo15_model__WEBPACK_IMPORTED_MODULE_4__["Mo15"]();
        this.spare = new _mo15_mo15_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo15_mo15_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo15_mo15_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    Editmo15Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo15(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo15 = data;
            console.log("The gse s are=" + _this.mo15.gsenos);
            console.log(_this.mo15);
            //   console.log("The spares  are="+this.mo15.sparenos);
            _this.nam2 = _this.mo15.gsenos;
            _this.name = _this.mo15.gsenos;
            _this.nam3 = _this.mo15.sparenos;
            _this.namesp = _this.mo15.sparenos;
            _this.nam4 = _this.mo15.toolsnos;
            _this.nametl = _this.mo15.toolsnos;
            _this.nam5 = _this.mo15.consumablenos;
            _this.namecl = _this.mo15.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
        });
        /*for gse*/
        this._service.fetchUserListFromRemotegse().subscribe(function (data) {
            console.log(data);
            _this.datagse = data;
        });
        this._service.fetchUserListFromRemotetools().subscribe(function (data) {
            console.log(data);
            _this.datatools = data;
        });
        this._service.fetchUserListFromRemotespare().subscribe(function (data) {
            console.log(data);
            _this.dataspare = data;
        });
        this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            console.log(data);
            _this.dataconsumable = data;
        });
    };
    Editmo15Component.prototype.function1 = function (e, id) {
        this.myid = id;
        if (e.target.checked) {
            if (this.name == undefined || this.name == null) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
                // alert(this.nam2);
            }
            else {
                this.name = this.name + "," + id;
                this.name2 = this.nam2;
                this.name2 = this.name2.split(",");
                this.name2.push(id);
                this.nam2 = this.name2.toString();
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2 = this.nam2;
            this.name2 = this.name2.split(",");
            var index = this.name2.indexOf(this.myid);
            if (index > -1) {
                this.name2.splice(index, 1);
                this.nam2 = this.name2.toString();
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        //alert(this.copystr);
        /*function*/
    };
    //function2 for spare 
    //************* 
    Editmo15Component.prototype.function2 = function (e, id) {
        this.myidsp = id;
        if (e.target.checked) {
            if (this.namesp == undefined || this.namesp == null) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.name2sp = this.nam3;
                this.name2sp = this.name2sp.split(",");
                this.name2sp.push(id);
                this.nam3 = this.name2sp.toString();
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2sp = this.nam3;
            this.name2sp = this.name2sp.split(",");
            var index1 = this.name2sp.indexOf(this.myid);
            if (index1 > -1) {
                this.name2sp.splice(index1, 1);
                this.nam3 = this.name2sp.toString();
            }
            console.log("Un checked in spare" + id);
            this.namesp = this.str1sp;
            console.log("the name of nam3=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        /*function2*/
    };
    //************* */
    Editmo15Component.prototype.function3 = function (e, id) {
        this.myidtl = id;
        if (e.target.checked) {
            if (this.nametl == undefined || this.nametl == null) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.name2tl = this.nam4;
                this.name2tl = this.name2tl.split(",");
                this.name2tl.push(id);
                this.nam4 = this.name2tl.toString();
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in spare" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2tl = this.nam4;
            this.name2tl = this.name2tl.split(",");
            var index2 = this.name2tl.indexOf(this.myid);
            if (index2 > -1) {
                this.name2tl.splice(index2, 1);
                this.nam4 = this.name2tl.toString();
            }
            console.log("Un checked in spare" + id);
            this.nametl = this.str1tl;
            console.log("the name of nam3=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        /*function2*/
    };
    Editmo15Component.prototype.function4 = function (e, id) {
        this.myidcl = id;
        if (e.target.checked) {
            if (this.namecl == undefined || this.namecl == null) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.name2cl = this.nam5;
                this.name2cl = this.name2cl.split(",");
                this.name2cl.push(id);
                this.nam5 = this.name2cl.toString();
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in spare" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2cl = this.nam5;
            this.name2cl = this.name2cl.split(",");
            var index3 = this.name2cl.indexOf(this.myid);
            if (index3 > -1) {
                this.name2cl.splice(index3, 1);
                this.nam5 = this.name2cl.toString();
            }
            console.log("Un checked in spare" + id);
            this.namecl = this.str1cl;
            console.log("the name of nam3=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        /*function2*/
    };
    Editmo15Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo15.gsenos = this.copystr;
        this.mo15.sparenos = this.copystrsp;
        this.mo15.toolsnos = this.copystrtl;
        this.mo15.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo15(this.mo15).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/structure/mo15']);
            _this.toastr.showInfo('Mo15 service updation success', 'Mo15 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo15 update'); });
    };
    Editmo15Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo15_service__WEBPACK_IMPORTED_MODULE_5__["Mo15Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo15Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo15',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo15.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/editmo15/editmo15.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo15.component.css */ "./src/app/views/structure/mo15/editmo15/editmo15.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _mo15_service__WEBPACK_IMPORTED_MODULE_5__["Mo15Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo15Component);
    return Editmo15Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo15/mo15.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/structure/mo15/mo15.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzE1L21vMTUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/structure/mo15/mo15.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/structure/mo15/mo15.component.ts ***!
  \********************************************************/
/*! exports provided: Mo15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo15Component", function() { return Mo15Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo15_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo15.model */ "./src/app/views/structure/mo15/mo15.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _mo15_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo15.service */ "./src/app/views/structure/mo15/mo15.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
var Mo15Component = /** @class */ (function () {
    function Mo15Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
        var _this = this;
        this._http = _http;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._spareservice = _spareservice;
        this._gseservice = _gseservice;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.toastr = toastr;
        this.acitvities = [];
        this.start = 1;
        this.nam2 = ["0"];
        this.name3 = ["0"];
        this.activeSlideIndex = 0;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = "Remove SPARE Record";
        this.popoverMessage = " Delete Yes/No ?";
        this.istab = false;
        this.count1 = 0;
        this.count = 0;
        this.count5 = 0;
        this.mo15 = new _mo15_model__WEBPACK_IMPORTED_MODULE_5__["Mo15"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) {
            _this.rolltext = x || localStorage.getItem("a");
        });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) {
            _this.uname = x1 || localStorage.getItem("b");
        });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo15Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem("opennav"));
        localStorage.setItem("opennav", "mo15");
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
        //alert(this.perpageflag);
        //alert(this.x);
        this.config = {
            itemsPerPage: this.perpage,
            currentPage: this.m,
            totalItems: this.rec1,
            id: "listing_pagination",
        };
        this._service.countrecordmo15().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo15(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo15 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo15;
        } /*for first mo15*/); /* for first getdata*/
        this._service.fetchUserListFromRemotegse().subscribe(function (data) {
            console.log(data);
            _this.datagse = data;
        });
        this._service.fetchUserListFromRemotetools().subscribe(function (data) {
            console.log(data);
            _this.datatools = data;
        });
        this._service.fetchUserListFromRemotespare().subscribe(function (data) {
            console.log(data);
            _this.dataspare = data;
        });
        this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            console.log(data);
            _this.dataconsumable = data;
        });
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
    Mo15Component.prototype.ngOnDestroy = function () { };
    Mo15Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/structure/mo15/editmo15", id]);
    };
    Mo15Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/structure/mo15/addmo15"]);
    };
    Mo15Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == "searching") {
            this._service.counteruserecordmo15(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service
                .fetchUserBymo15(this.x - 1, parseInt(this.perpage), this.searchname)
                .subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo15 = datasear;
                console.log("to test spare" + _this.mo15);
            });
        } /*IF */
        else if (this.mode == "normal" || this.mode == "deleting") {
            this._service.getdatamo15(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo15 = data;
            } /*for first mo15*/); /* for first getdata*/
            this._service.countrecordmo15().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo15Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = "searching";
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo15(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service
                .fetchUserBymo15(this.m2, parseInt(this.perpage), name)
                .subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo15(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo15  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo15Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo15().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo15(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo15*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo15Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
        var _this = this;
        if (e.target.checked) {
            this.nam2[0] = id;
            this.istab = true;
            this.count1 = 1;
            this.count5 = 1;
            this.selected_id = id;
            this.count = 1;
        }
        else {
            this.count = this.count - 1;
            this.istab = false;
            this.count1 = this.count1 - 1;
            this.count5 = this.count5 - 1;
            this.selected_id = "";
        }
        this._gseservice
            .fetchUserListFromRemoteservicecondition(gsenos.toString())
            .subscribe(function (datagse) {
            console.log(datagse);
            _this.datagse = datagse;
            //this.totalItems=5;
        } /*for first mo15*/); /* for first getdata*/
        this._spareservice
            .fetchUserListFromRemotesparecondition(sparenos.toString())
            .subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo15*/); /* for first getdata*/
        this.toolsservice
            .fetchUserListFromRemotetoolscondition(toolsnos.toString())
            .subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo15*/); /* for first getdata*/
        this.consumableservice
            .fetchUserListFromRemoteconsumablecondition(consumablenos.toString())
            .subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo15*/); /* for first getdata*/
    };
    Mo15Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo15(id).subscribe(function (data) {
            console.log("deleted sucesssfully");
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service
                    .getdatamo15(_this.x - 1, parseInt(_this.perpage))
                    .subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo15(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo15 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo15 service');
        });
    };
    Mo15Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo15Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(documentDefinition).open();
    };
    Mo15Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem("service", JSON.stringify(this.mo15));
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
                    text: "Service",
                    //
                    //bold: true,
                    fontSize: 20,
                    alignment: "left",
                    style: "header",
                    margin: [0, 0, 0, 20],
                },
                this.getServiceData(this.data),
                {
                    text: "\n\nGse",
                    // style: 'header',
                    // bold: true,
                    fontSize: 20,
                    alignment: "left",
                    style: "header",
                    margin: [0, 0, 0, 20],
                },
                this.getGseData(this.datagse),
                {
                    text: "\n\nTools",
                    style: "header",
                    // bold: true,
                    fontSize: 20,
                    alignment: "left",
                    margin: [0, 0, 0, 20],
                },
                this.getToolsData(this.datatools),
                {
                    text: "\n\nConsumable",
                    // style: 'header',
                    //bold: true,
                    fontSize: 20,
                    alignment: "left",
                    style: "header",
                    margin: [0, 0, 0, 20],
                },
                this.getConsumableData(this.dataconsumable),
                {
                    text: "\n\nSpare",
                    // style: 'header',
                    bold: true,
                    fontSize: 20,
                    alignment: "left",
                    style: "header",
                    margin: [0, 0, 0, 20],
                },
                this.getSpareData(this.dataspare),
            ],
        };
    };
    Mo15Component.prototype.getServiceData = function (mo15) {
        console.log("service.." + mo15);
        return {
            table: {
                width: ["*", "*", "*", "*", "*", "*", "*", "*"],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: "Seqno",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Ammtcno",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Category",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Type",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Trade",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Description",
                            bold: true,
                            fontsize: 30,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Effectivity",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                    ]
                ], mo15.map(function (ed) {
                    return [
                        ed.seqno,
                        ed.ammtcno,
                        ed.cat,
                        ed.type,
                        ed.trade,
                        ed.description,
                        ed.effectivity,
                    ];
                })),
            },
            pageBreak: "after",
        };
    };
    Mo15Component.prototype.getGseData = function (gse) {
        console.log("gse.." + gse);
        return {
            table: {
                width: ["*", "*", "*", "*", "*"],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: "Sno",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "PartNo",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "GseNo",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Oem",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Description",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                    ]
                ], gse.map(function (ed) {
                    return [ed.sno, ed.portno, ed.gseno, ed.gdm, ed.description];
                })),
            },
            pageBreak: "after",
        };
    };
    Mo15Component.prototype.getToolsData = function (tools) {
        console.log("tools.." + tools);
        return {
            table: {
                width: ["*", "*", "*", "*", "*"],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: "Sno",
                            bold: true,
                            // colSpan:1,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "PartNo",
                            bold: true,
                            style: "tableHeader",
                            // colSpan:2,
                            fillColor: "#cccccc",
                        },
                        {
                            text: "ToolsNo",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Oem",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Description",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                    ]
                ], tools.map(function (ed) {
                    return [ed.sno, ed.partno, ed.toolsno, ed.gdm, ed.description];
                })),
            },
            pageBreak: "after",
        };
    };
    Mo15Component.prototype.getSpareData = function (spare) {
        console.log("spare.." + spare);
        return {
            table: {
                width: ["*", "*", "*", "*"],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: "seqno",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "PartNo",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Oem",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Description",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                    ]
                ], spare.map(function (ed) {
                    return [ed.seqno, ed.partno, ed.oem, ed.description];
                })),
            },
        };
    };
    Mo15Component.prototype.getConsumableData = function (consumable) {
        console.log("consumable.." + consumable);
        return {
            table: {
                width: ["*", "z*", "*", "*", "*"],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: "Sno",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Consumableno",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "PartNo",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Oem",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                        {
                            text: "Description",
                            bold: true,
                            style: "tableHeader",
                            fillColor: "#cccccc",
                        },
                    ]
                ], consumable.map(function (ed) {
                    return [ed.sno, ed.consumableno, ed.partno, ed.oem, ed.description];
                })),
            },
            pageBreak: "after",
        };
    };
    Mo15Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo15_service__WEBPACK_IMPORTED_MODULE_10__["Mo15Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo15Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-mo15",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo15.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo15/mo15.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo15.component.css */ "./src/app/views/structure/mo15/mo15.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"],
            _mo15_service__WEBPACK_IMPORTED_MODULE_10__["Mo15Service"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__["GseserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo15Component);
    return Mo15Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo15/mo15.model.ts":
/*!****************************************************!*\
  !*** ./src/app/views/structure/mo15/mo15.model.ts ***!
  \****************************************************/
/*! exports provided: Mo15, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo15", function() { return Mo15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo15 = /** @class */ (function () {
    function Mo15() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo15;
}());

var Consumable = /** @class */ (function () {
    function Consumable() {
    }
    return Consumable;
}());

var Spare = /** @class */ (function () {
    function Spare() {
    }
    return Spare;
}());

var Gse = /** @class */ (function () {
    function Gse() {
    }
    return Gse;
}());

var Tools = /** @class */ (function () {
    function Tools() {
    }
    return Tools;
}());

var Aircraft = /** @class */ (function () {
    function Aircraft() {
    }
    return Aircraft;
}());



/***/ }),

/***/ "./src/app/views/structure/mo15/mo15.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/structure/mo15/mo15.service.ts ***!
  \******************************************************/
/*! exports provided: Mo15Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo15Service", function() { return Mo15Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo15Service = /** @class */ (function () {
    function Mo15Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo15Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo15Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo15Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo15Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo15Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo15Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo15Service.prototype.fetchUserListFromRemotemo15 = function () {
        return this._http.get("http://localhost:8080/getmo15list");
    };
    Mo15Service.prototype.fetchUserByIdFromRemotemo15 = function (id) {
        return this._http.get("http://localhost:8080/getmo15byid/" + id);
    };
    Mo15Service.prototype.addUsertoRemotemo15 = function (mo15) {
        return this._http.post("http://localhost:8080/addmo15", mo15);
    };
    Mo15Service.prototype.deleteUserByIdFromRemotemo15 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo15byidtest/" + id);
    };
    Mo15Service.prototype.getdatamo15 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo15/page/" + pa + "/" + per);
    };
    Mo15Service.prototype.fetchfindlastmo15 = function () {
        return this._http.get("http://localhost:8080/findlastmo15");
    };
    Mo15Service.prototype.countrecordmo15 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo15");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo15Service.prototype.counteruserecordmo15 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo15?seqno=" + no1);
    };
    Mo15Service.prototype.fetchUserBymo15 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo15/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo15Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo15Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo15Service);
    return Mo15Service;
}());



/***/ }),

/***/ "./src/app/views/structure/mo30/addmo30/addmo30.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/structure/mo30/addmo30/addmo30.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzMwL2FkZG1vMzAvYWRkbW8zMC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/structure/mo30/addmo30/addmo30.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/structure/mo30/addmo30/addmo30.component.ts ***!
  \*******************************************************************/
/*! exports provided: Addmo30Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo30Component", function() { return Addmo30Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo30_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo30.model */ "./src/app/views/structure/mo30/mo30.model.ts");
/* harmony import */ var _mo30_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mo30.service */ "./src/app/views/structure/mo30/mo30.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo30Component = /** @class */ (function () {
    function Addmo30Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo30 = new _mo30_model__WEBPACK_IMPORTED_MODULE_4__["Mo30"]();
        this.ischecked = false;
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.needcheck = false;
        this.nam = ['1', '2', '3', '4'];
        this.nam1 = ['37', '36', '35'];
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.m1 = 100;
        this.m1sp = 100;
        this.m1tl = 100;
        this.m1cl = 100;
        this.k = 1;
        this.l = 0;
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.identify = false;
        this.currentPage = 1;
        this.gse = new _mo30_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo30_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo30_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo30_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    Addmo30Component.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.gse = data;
            console.log(_this.gse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    /**Checkfun1 end */
    Addmo30Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo30.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo30.gsenos = '00';
        }
        else {
            this.mo30.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo30.sparenos = '00';
        }
        else {
            this.mo30.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo30.toolsnos = '00';
        }
        else {
            this.mo30.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo30.consumablenos = '00';
        }
        else {
            this.mo30.consumablenos = this.copystrcl;
        }
        console.log(this.mo30.gsenos);
        console.log(this.mo30.gsenos);
        this._service.addUsertoRemotemo30(this.mo30).subscribe(function (data) {
            console.log(_this.mo30.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo30 service added successfully', "Mo30 service");
            _this._router.navigate(['/structure/mo30']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo30 service');
        });
    };
    Addmo30Component.prototype.function1 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.name == undefined) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
            }
            else {
                this.name = this.name + "," + id;
                this.nam2.push(id);
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            var index = this.nam2.indexOf(id);
            //  alert(index);
            if (index > -1) {
                this.nam2.splice(index, 1);
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        this.namestr = this.name;
        console.log(typeof (this.namestr));
        if (typeof (this.namestr === 'number')) {
            this.namestr = this.namestr.toString();
        }
    }; /*function1*/
    /*function 2 starts*/
    Addmo30Component.prototype.function2 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namesp == undefined) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.nam3.push(id);
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            var index1 = this.nam3.indexOf(id);
            //  alert(index1);
            if (index1 > -1) {
                this.nam3.splice(index1, 1);
            }
            console.log("Un checked" + id);
            this.namesp = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        this.namestrsp = this.namesp;
        console.log(typeof (this.namestrsp));
        if (typeof (this.namestrsp === 'number')) {
            this.namestrsp = this.namestrsp.toString();
        }
    }; /*function2*/
    Addmo30Component.prototype.function3 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.nametl == undefined) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.nam4.push(id);
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in tools" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            var index2 = this.nam4.indexOf(id);
            //  alert(index1);
            if (index2 > -1) {
                this.nam4.splice(index2, 1);
            }
            console.log("Un checked" + id);
            this.nametl = this.str2;
            //    console.log("The name is"+this.name);
            console.log("the name of nam4=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        this.namestrtl = this.nametl;
        console.log(typeof (this.namestrtl));
        if (typeof (this.namestrtl === 'number')) {
            this.namestrtl = this.namestrtl.toString();
        }
    };
    Addmo30Component.prototype.function4 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namecl == undefined) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.nam5.push(id);
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in tools" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            var index3 = this.nam5.indexOf(id);
            //  alert(index1);
            if (index3 > -1) {
                this.nam5.splice(index3, 1);
            }
            console.log("Un checked" + id);
            this.namecl = this.str3;
            //    console.log("The name is"+this.name);
            console.log("the name of nam5=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        this.namestrcl = this.namecl;
        console.log(typeof (this.namestrcl));
        if (typeof (this.namestrcl === 'number')) {
            this.namestrcl = this.namestrcl.toString();
        }
    };
    Addmo30Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo30.type = event.target.value;
    };
    Addmo30Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo30_service__WEBPACK_IMPORTED_MODULE_5__["Mo30Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo30Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo30',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo30.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/addmo30/addmo30.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo30.component.css */ "./src/app/views/structure/mo30/addmo30/addmo30.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo30_service__WEBPACK_IMPORTED_MODULE_5__["Mo30Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo30Component);
    return Addmo30Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo30/editmo30/editmo30.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/structure/mo30/editmo30/editmo30.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzMwL2VkaXRtbzMwL2VkaXRtbzMwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/structure/mo30/editmo30/editmo30.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/structure/mo30/editmo30/editmo30.component.ts ***!
  \*********************************************************************/
/*! exports provided: Editmo30Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo30Component", function() { return Editmo30Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo30_mo30_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mo30/mo30.model */ "./src/app/views/structure/mo30/mo30.model.ts");
/* harmony import */ var _mo30_mo30_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mo30/mo30.service */ "./src/app/views/structure/mo30/mo30.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");


;









var Editmo30Component = /** @class */ (function () {
    function Editmo30Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
        this._router = _router;
        this.cservice = cservice;
        this.tservice = tservice;
        this._activatedroute = _activatedroute;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this.toastr = toastr;
        this._http = _http;
        this.isselected = false;
        this.isgse = true;
        this.istools = false;
        this.isspare = false;
        this.isconsumable = false;
        this.myInterval = 0;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.m = 0;
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.namelen = 0;
        this.needcheck = false;
        this.gse = new _mo30_mo30_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.mo30 = new _mo30_mo30_model__WEBPACK_IMPORTED_MODULE_4__["Mo30"]();
        this.spare = new _mo30_mo30_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo30_mo30_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo30_mo30_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"];
    }
    Editmo30Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo30(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo30 = data;
            console.log("The gse s are=" + _this.mo30.gsenos);
            console.log(_this.mo30);
            //   console.log("The spares  are="+this.mo30.sparenos);
            _this.nam2 = _this.mo30.gsenos;
            _this.name = _this.mo30.gsenos;
            _this.nam3 = _this.mo30.sparenos;
            _this.namesp = _this.mo30.sparenos;
            _this.nam4 = _this.mo30.toolsnos;
            _this.nametl = _this.mo30.toolsnos;
            _this.nam5 = _this.mo30.consumablenos;
            _this.namecl = _this.mo30.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
        });
        /*for gse*/
        this._service.fetchUserListFromRemotegse().subscribe(function (data) {
            console.log(data);
            _this.datagse = data;
        });
        this._service.fetchUserListFromRemotetools().subscribe(function (data) {
            console.log(data);
            _this.datatools = data;
        });
        this._service.fetchUserListFromRemotespare().subscribe(function (data) {
            console.log(data);
            _this.dataspare = data;
        });
        this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            console.log(data);
            _this.dataconsumable = data;
        });
    };
    Editmo30Component.prototype.function1 = function (e, id) {
        this.myid = id;
        if (e.target.checked) {
            if (this.name == undefined || this.name == null) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
                // alert(this.nam2);
            }
            else {
                this.name = this.name + "," + id;
                this.name2 = this.nam2;
                this.name2 = this.name2.split(",");
                this.name2.push(id);
                this.nam2 = this.name2.toString();
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2 = this.nam2;
            this.name2 = this.name2.split(",");
            var index = this.name2.indexOf(this.myid);
            if (index > -1) {
                this.name2.splice(index, 1);
                this.nam2 = this.name2.toString();
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        //alert(this.copystr);
        /*function*/
    };
    //function2 for spare 
    //************* 
    Editmo30Component.prototype.function2 = function (e, id) {
        this.myidsp = id;
        if (e.target.checked) {
            if (this.namesp == undefined || this.namesp == null) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.name2sp = this.nam3;
                this.name2sp = this.name2sp.split(",");
                this.name2sp.push(id);
                this.nam3 = this.name2sp.toString();
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2sp = this.nam3;
            this.name2sp = this.name2sp.split(",");
            var index1 = this.name2sp.indexOf(this.myid);
            if (index1 > -1) {
                this.name2sp.splice(index1, 1);
                this.nam3 = this.name2sp.toString();
            }
            console.log("Un checked in spare" + id);
            this.namesp = this.str1sp;
            console.log("the name of nam3=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        /*function2*/
    };
    //************* */
    Editmo30Component.prototype.function3 = function (e, id) {
        this.myidtl = id;
        if (e.target.checked) {
            if (this.nametl == undefined || this.nametl == null) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.name2tl = this.nam4;
                this.name2tl = this.name2tl.split(",");
                this.name2tl.push(id);
                this.nam4 = this.name2tl.toString();
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in spare" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2tl = this.nam4;
            this.name2tl = this.name2tl.split(",");
            var index2 = this.name2tl.indexOf(this.myid);
            if (index2 > -1) {
                this.name2tl.splice(index2, 1);
                this.nam4 = this.name2tl.toString();
            }
            console.log("Un checked in spare" + id);
            this.nametl = this.str1tl;
            console.log("the name of nam3=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        /*function2*/
    };
    Editmo30Component.prototype.function4 = function (e, id) {
        this.myidcl = id;
        if (e.target.checked) {
            if (this.namecl == undefined || this.namecl == null) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.name2cl = this.nam5;
                this.name2cl = this.name2cl.split(",");
                this.name2cl.push(id);
                this.nam5 = this.name2cl.toString();
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in spare" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2cl = this.nam5;
            this.name2cl = this.name2cl.split(",");
            var index3 = this.name2cl.indexOf(this.myid);
            if (index3 > -1) {
                this.name2cl.splice(index3, 1);
                this.nam5 = this.name2cl.toString();
            }
            console.log("Un checked in spare" + id);
            this.namecl = this.str1cl;
            console.log("the name of nam3=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        /*function2*/
    };
    Editmo30Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo30.gsenos = this.copystr;
        this.mo30.sparenos = this.copystrsp;
        this.mo30.toolsnos = this.copystrtl;
        this.mo30.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo30(this.mo30).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/structure/mo30']);
            _this.toastr.showInfo('Mo30 service updation success', 'Mo30 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo30 update'); });
    };
    Editmo30Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo30_mo30_service__WEBPACK_IMPORTED_MODULE_5__["Mo30Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo30Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo30',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo30.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/editmo30/editmo30.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo30.component.css */ "./src/app/views/structure/mo30/editmo30/editmo30.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _mo30_mo30_service__WEBPACK_IMPORTED_MODULE_5__["Mo30Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo30Component);
    return Editmo30Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo30/mo30.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/structure/mo30/mo30.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzMwL21vMzAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/structure/mo30/mo30.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/structure/mo30/mo30.component.ts ***!
  \********************************************************/
/*! exports provided: Mo30Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo30Component", function() { return Mo30Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo30_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo30.model */ "./src/app/views/structure/mo30/mo30.model.ts");
/* harmony import */ var _mo30_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mo30.service */ "./src/app/views/structure/mo30/mo30.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var Mo30Component = /** @class */ (function () {
    function Mo30Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
        var _this = this;
        this._http = _http;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._spareservice = _spareservice;
        this._gseservice = _gseservice;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.toastr = toastr;
        this.acitvities = [];
        this.start = 1;
        this.nam2 = ['0'];
        this.name3 = ['0'];
        this.activeSlideIndex = 0;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = 'Remove SPARE Record';
        this.popoverMessage = ' Delete Yes/No ?';
        this.istab = false;
        this.count1 = 0;
        this.count = 0;
        this.count5 = 0;
        this.mo30 = new _mo30_model__WEBPACK_IMPORTED_MODULE_5__["Mo30"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo30Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo30');
        localStorage.setItem('openpage', this.x);
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
        //alert(this.perpageflag);
        //alert(this.x);
        this.config =
            {
                itemsPerPage: this.perpage,
                currentPage: this.m,
                totalItems: this.rec1,
                id: 'listing_pagination',
            };
        this._service.countrecordmo30().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo30(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo30 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo30;
        } /*for first mo30*/); /* for first getdata*/
        this._service.fetchUserListFromRemotegse().subscribe(function (data) {
            console.log(data);
            _this.datagse = data;
        });
        this._service.fetchUserListFromRemotetools().subscribe(function (data) {
            console.log(data);
            _this.datatools = data;
        });
        this._service.fetchUserListFromRemotespare().subscribe(function (data) {
            console.log(data);
            _this.dataspare = data;
        });
        this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            console.log(data);
            _this.dataconsumable = data;
        });
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
    Mo30Component.prototype.ngOnDestroy = function () {
    };
    Mo30Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/structure/mo30/editmo30", id]);
    };
    Mo30Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/structure/mo30/addmo30"]);
    };
    Mo30Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo30(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo30(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo30 = datasear;
                console.log("to test spare" + _this.mo30);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo30(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo30 = data;
            } /*for first mo30*/); /* for first getdata*/
            this._service.countrecordmo30().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo30Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo30(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo30(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo30(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo30  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo30Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo30().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo30(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo30*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo30Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
        var _this = this;
        if (e.target.checked) {
            this.nam2[0] = id;
            // this.name3[0]=id;
            this.istab = true;
            this.count1 = 1;
            this.count5 = 1;
            //this.count=this.count+1;
            this.count = 1;
            // alert("The id ="+id +","+this.count+","+gsenos +"selid="+this.nam2+"sparenos="+sparenos+this.count1+"toolsnos="+toolsnos+","+this.count5+"consumablenos="+consumablenos);
            this.selected_id = id;
        }
        else {
            this.count = this.count - 1;
            this.istab = false;
            this.count1 = this.count1 - 1;
            this.count5 = this.count5 - 1;
            this.selected_id = "";
        }
        this._gseservice.fetchUserListFromRemoteservicecondition(gsenos.toString()).subscribe(function (datagse) {
            console.log(datagse);
            _this.datagse = datagse;
            //this.totalItems=5;
        } /*for first mo30*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo30*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo30*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo30*/); /* for first getdata*/
    };
    Mo30Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo30(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo30(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo30(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo30 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo30 service');
        });
    };
    Mo30Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo30Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(documentDefinition).open();
    };
    Mo30Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo30));
        return {
            header: {
                //pageBreak:'before',
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
                return [{ text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'center' }];
            },
            content: [
                {
                    text: 'Service',
                    //
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getServiceData(this.data),
                {
                    text: '\n\nGse',
                    // style: 'header', 
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getGseData(this.datagse),
                {
                    text: '\n\nTools',
                    style: 'header',
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    margin: [0, 0, 0, 20]
                },
                this.getToolsData(this.datatools),
                {
                    text: '\n\nConsumable',
                    // style: 'header', 
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getConsumableData(this.dataconsumable),
                {
                    text: '\n\nSpare',
                    // style: 'header', 
                    bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getSpareData(this.dataspare),
            ],
        };
    };
    Mo30Component.prototype.getServiceData = function (mo30) {
        console.log('service..' + mo30);
        return {
            table: {
                width: ['*', '*', '*', '*', '*', '*', '*', '*',],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Seqno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Ammtcno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Category',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Type',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Trade',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Effectivity',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], mo30.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo30Component.prototype.getGseData = function (gse) {
        console.log('gse..' + gse);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'GseNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], gse.map(function (ed) {
                    return [ed.sno, ed.portno, ed.gseno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo30Component.prototype.getToolsData = function (tools) {
        console.log('tools..' + tools);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            // colSpan:1,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            // colSpan:2,
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'ToolsNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], tools.map(function (ed) {
                    return [ed.sno, ed.partno, ed.toolsno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo30Component.prototype.getSpareData = function (spare) {
        console.log('spare..' + spare);
        return {
            table: {
                width: ['*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'seqno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], spare.map(function (ed) {
                    return [ed.seqno, ed.partno, ed.oem, ed.description];
                }))
            },
        };
    };
    Mo30Component.prototype.getConsumableData = function (consumable) {
        console.log('consumable..' + consumable);
        return {
            table: {
                width: ['*', 'z*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Consumableno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], consumable.map(function (ed) {
                    return [ed.sno, ed.consumableno, ed.partno, ed.oem, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo30Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_9__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"] },
        { type: _mo30_service__WEBPACK_IMPORTED_MODULE_6__["Mo30Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo30Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo30',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo30.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo30/mo30.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo30.component.css */ "./src/app/views/structure/mo30/mo30.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_9__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"],
            _mo30_service__WEBPACK_IMPORTED_MODULE_6__["Mo30Service"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo30Component);
    return Mo30Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo30/mo30.model.ts":
/*!****************************************************!*\
  !*** ./src/app/views/structure/mo30/mo30.model.ts ***!
  \****************************************************/
/*! exports provided: Mo30, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo30", function() { return Mo30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo30 = /** @class */ (function () {
    function Mo30() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo30;
}());

var Consumable = /** @class */ (function () {
    function Consumable() {
    }
    return Consumable;
}());

var Spare = /** @class */ (function () {
    function Spare() {
    }
    return Spare;
}());

var Gse = /** @class */ (function () {
    function Gse() {
    }
    return Gse;
}());

var Tools = /** @class */ (function () {
    function Tools() {
    }
    return Tools;
}());

var Aircraft = /** @class */ (function () {
    function Aircraft() {
    }
    return Aircraft;
}());



/***/ }),

/***/ "./src/app/views/structure/mo30/mo30.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/structure/mo30/mo30.service.ts ***!
  \******************************************************/
/*! exports provided: Mo30Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo30Service", function() { return Mo30Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo30Service = /** @class */ (function () {
    function Mo30Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo30Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo30Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo30Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo30Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo30Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo30Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo30Service.prototype.fetchUserListFromRemotemo30 = function () {
        return this._http.get("http://localhost:8080/getmo30list");
    };
    Mo30Service.prototype.fetchUserByIdFromRemotemo30 = function (id) {
        return this._http.get("http://localhost:8080/getmo30byid/" + id);
    };
    Mo30Service.prototype.addUsertoRemotemo30 = function (mo30) {
        return this._http.post("http://localhost:8080/addmo30", mo30);
    };
    Mo30Service.prototype.deleteUserByIdFromRemotemo30 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo30byidtest/" + id);
    };
    Mo30Service.prototype.getdatamo30 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo30/page/" + pa + "/" + per);
    };
    Mo30Service.prototype.fetchfindlastmo30 = function () {
        return this._http.get("http://localhost:8080/findlastmo30");
    };
    Mo30Service.prototype.countrecordmo30 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo30");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo30Service.prototype.counteruserecordmo30 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo30?seqno=" + no1);
    };
    Mo30Service.prototype.fetchUserBymo30 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo30/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo30Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo30Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo30Service);
    return Mo30Service;
}());



/***/ }),

/***/ "./src/app/views/structure/mo60/addmo60/addmo60.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/structure/mo60/addmo60/addmo60.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzYwL2FkZG1vNjAvYWRkbW82MC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/structure/mo60/addmo60/addmo60.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/structure/mo60/addmo60/addmo60.component.ts ***!
  \*******************************************************************/
/*! exports provided: Addmo60Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo60Component", function() { return Addmo60Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo60_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo60.model */ "./src/app/views/structure/mo60/mo60.model.ts");
/* harmony import */ var _mo60_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mo60.service */ "./src/app/views/structure/mo60/mo60.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo60Component = /** @class */ (function () {
    function Addmo60Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo60 = new _mo60_model__WEBPACK_IMPORTED_MODULE_4__["Mo60"]();
        this.ischecked = false;
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.needcheck = false;
        this.nam = ['1', '2', '3', '4'];
        this.nam1 = ['37', '36', '35'];
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.m1 = 100;
        this.m1sp = 100;
        this.m1tl = 100;
        this.m1cl = 100;
        this.k = 1;
        this.l = 0;
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.identify = false;
        this.currentPage = 1;
        this.gse = new _mo60_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo60_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo60_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo60_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    Addmo60Component.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.gse = data;
            console.log(_this.gse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    /**Checkfun1 end */
    Addmo60Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo60.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo60.gsenos = '00';
        }
        else {
            this.mo60.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo60.sparenos = '00';
        }
        else {
            this.mo60.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo60.toolnos = '00';
        }
        else {
            this.mo60.toolnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo60.consumablenos = '00';
        }
        else {
            this.mo60.consumablenos = this.copystrcl;
        }
        console.log(this.mo60.gsenos);
        console.log(this.mo60.gsenos);
        this._service.addUsertoRemotemo60(this.mo60).subscribe(function (data) {
            console.log(_this.mo60.gsenos);
            _this.toastr.showSuccess('Mo60 service added successfully', "Mo60 service");
            console.log("data added successfully");
            _this._router.navigate(['/structure/mo60']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo60 service');
        });
    };
    Addmo60Component.prototype.function1 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.name == undefined) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
            }
            else {
                this.name = this.name + "," + id;
                this.nam2.push(id);
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            var index = this.nam2.indexOf(id);
            //  alert(index);
            if (index > -1) {
                this.nam2.splice(index, 1);
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        this.namestr = this.name;
        console.log(typeof (this.namestr));
        if (typeof (this.namestr === 'number')) {
            this.namestr = this.namestr.toString();
        }
    }; /*function1*/
    /*function 2 starts*/
    Addmo60Component.prototype.function2 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namesp == undefined) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.nam3.push(id);
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            var index1 = this.nam3.indexOf(id);
            //  alert(index1);
            if (index1 > -1) {
                this.nam3.splice(index1, 1);
            }
            console.log("Un checked" + id);
            this.namesp = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        this.namestrsp = this.namesp;
        console.log(typeof (this.namestrsp));
        if (typeof (this.namestrsp === 'number')) {
            this.namestrsp = this.namestrsp.toString();
        }
    }; /*function2*/
    Addmo60Component.prototype.function3 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.nametl == undefined) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.nam4.push(id);
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in tools" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            var index2 = this.nam4.indexOf(id);
            //  alert(index1);
            if (index2 > -1) {
                this.nam4.splice(index2, 1);
            }
            console.log("Un checked" + id);
            this.nametl = this.str2;
            //    console.log("The name is"+this.name);
            console.log("the name of nam4=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        this.namestrtl = this.nametl;
        console.log(typeof (this.namestrtl));
        if (typeof (this.namestrtl === 'number')) {
            this.namestrtl = this.namestrtl.toString();
        }
    };
    Addmo60Component.prototype.function4 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namecl == undefined) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.nam5.push(id);
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in tools" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            var index3 = this.nam5.indexOf(id);
            //  alert(index1);
            if (index3 > -1) {
                this.nam5.splice(index3, 1);
            }
            console.log("Un checked" + id);
            this.namecl = this.str3;
            //    console.log("The name is"+this.name);
            console.log("the name of nam5=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        this.namestrcl = this.namecl;
        console.log(typeof (this.namestrcl));
        if (typeof (this.namestrcl === 'number')) {
            this.namestrcl = this.namestrcl.toString();
        }
    };
    Addmo60Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo60.type = event.target.value;
    };
    Addmo60Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo60_service__WEBPACK_IMPORTED_MODULE_5__["Mo60Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo60Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo60',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo60.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/addmo60/addmo60.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo60.component.css */ "./src/app/views/structure/mo60/addmo60/addmo60.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"],
            _mo60_service__WEBPACK_IMPORTED_MODULE_5__["Mo60Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo60Component);
    return Addmo60Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo60/editmo60/editmo60.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/structure/mo60/editmo60/editmo60.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzYwL2VkaXRtbzYwL2VkaXRtbzYwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/structure/mo60/editmo60/editmo60.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/structure/mo60/editmo60/editmo60.component.ts ***!
  \*********************************************************************/
/*! exports provided: Editmo60Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo60Component", function() { return Editmo60Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo60_mo60_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mo60/mo60.model */ "./src/app/views/structure/mo60/mo60.model.ts");
/* harmony import */ var _mo60_mo60_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mo60/mo60.service */ "./src/app/views/structure/mo60/mo60.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Editmo60Component = /** @class */ (function () {
    function Editmo60Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
        this._router = _router;
        this.cservice = cservice;
        this.tservice = tservice;
        this._activatedroute = _activatedroute;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this.toastr = toastr;
        this._http = _http;
        this.isselected = false;
        this.isgse = true;
        this.istools = false;
        this.isspare = false;
        this.isconsumable = false;
        this.myInterval = 0;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.m = 0;
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.namelen = 0;
        this.needcheck = false;
        this.gse = new _mo60_mo60_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.mo60 = new _mo60_mo60_model__WEBPACK_IMPORTED_MODULE_4__["Mo60"]();
        this.spare = new _mo60_mo60_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo60_mo60_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo60_mo60_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"];
    }
    Editmo60Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo60(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo60 = data;
            console.log("The gse s are=" + _this.mo60.gsenos);
            console.log(_this.mo60);
            //   console.log("The spares  are="+this.mo60.sparenos);
            _this.nam2 = _this.mo60.gsenos;
            _this.name = _this.mo60.gsenos;
            _this.nam3 = _this.mo60.sparenos;
            _this.namesp = _this.mo60.sparenos;
            _this.nam4 = _this.mo60.toolnos;
            _this.nametl = _this.mo60.toolnos;
            console.log(_this.nam4, "");
            _this.nam5 = _this.mo60.consumablenos;
            _this.namecl = _this.mo60.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
        });
        /*for gse*/
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
            console.log(_this.datagse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.tservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.cservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    Editmo60Component.prototype.function1 = function (e, id) {
        this.myid = id;
        if (e.target.checked) {
            if (this.name == undefined || this.name == null) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
                // alert(this.nam2);
            }
            else {
                this.name = this.name + "," + id;
                this.name2 = this.nam2;
                this.name2 = this.name2.split(",");
                this.name2.push(id);
                this.nam2 = this.name2.toString();
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2 = this.nam2;
            this.name2 = this.name2.split(",");
            var index = this.name2.indexOf(this.myid);
            if (index > -1) {
                this.name2.splice(index, 1);
                this.nam2 = this.name2.toString();
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        //alert(this.copystr);
        /*function*/
    };
    //function2 for spare 
    //************* 
    Editmo60Component.prototype.function2 = function (e, id) {
        this.myidsp = id;
        if (e.target.checked) {
            if (this.namesp == undefined || this.namesp == null) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.name2sp = this.nam3;
                this.name2sp = this.name2sp.split(",");
                this.name2sp.push(id);
                this.nam3 = this.name2sp.toString();
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2sp = this.nam3;
            this.name2sp = this.name2sp.split(",");
            var index1 = this.name2sp.indexOf(this.myid);
            if (index1 > -1) {
                this.name2sp.splice(index1, 1);
                this.nam3 = this.name2sp.toString();
            }
            console.log("Un checked in spare" + id);
            this.namesp = this.str1sp;
            console.log("the name of nam3=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        /*function2*/
    };
    //************* */
    Editmo60Component.prototype.function3 = function (e, id) {
        this.myidtl = id;
        if (e.target.checked) {
            if (this.nametl == undefined || this.nametl == null) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.name2tl = this.nam4;
                this.name2tl = this.name2tl.split(",");
                this.name2tl.push(id);
                this.nam4 = this.name2tl.toString();
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in spare" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2tl = this.nam4;
            this.name2tl = this.name2tl.split(",");
            var index2 = this.name2tl.indexOf(this.myid);
            if (index2 > -1) {
                this.name2tl.splice(index2, 1);
                this.nam4 = this.name2tl.toString();
            }
            console.log("Un checked in spare" + id);
            this.nametl = this.str1tl;
            console.log("the name of nam3=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        /*function2*/
    };
    Editmo60Component.prototype.function4 = function (e, id) {
        this.myidcl = id;
        if (e.target.checked) {
            if (this.namecl == undefined || this.namecl == null) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.name2cl = this.nam5;
                this.name2cl = this.name2cl.split(",");
                this.name2cl.push(id);
                this.nam5 = this.name2cl.toString();
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in spare" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2cl = this.nam5;
            this.name2cl = this.name2cl.split(",");
            var index3 = this.name2cl.indexOf(this.myid);
            if (index3 > -1) {
                this.name2cl.splice(index3, 1);
                this.nam5 = this.name2cl.toString();
            }
            console.log("Un checked in spare" + id);
            this.namecl = this.str1cl;
            console.log("the name of nam3=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        /*function2*/
    };
    Editmo60Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo60.gsenos = this.copystr;
        this.mo60.sparenos = this.copystrsp;
        this.mo60.toolnos = this.copystrtl;
        this.mo60.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo60(this.mo60).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/structure/mo60']);
            _this.toastr.showInfo('Mo60 service updation success', 'Mo60 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo60 update'); });
    };
    Editmo60Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo60_mo60_service__WEBPACK_IMPORTED_MODULE_5__["Mo60Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo60Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo60',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo60.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/editmo60/editmo60.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo60.component.css */ "./src/app/views/structure/mo60/editmo60/editmo60.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _mo60_mo60_service__WEBPACK_IMPORTED_MODULE_5__["Mo60Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo60Component);
    return Editmo60Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo60/mo60.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/structure/mo60/mo60.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzYwL21vNjAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/structure/mo60/mo60.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/structure/mo60/mo60.component.ts ***!
  \********************************************************/
/*! exports provided: Mo60Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo60Component", function() { return Mo60Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo60_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo60.model */ "./src/app/views/structure/mo60/mo60.model.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo60_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo60.service */ "./src/app/views/structure/mo60/mo60.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
var Mo60Component = /** @class */ (function () {
    function Mo60Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
        var _this = this;
        this._http = _http;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._spareservice = _spareservice;
        this._gseservice = _gseservice;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.toastr = toastr;
        this.acitvities = [];
        this.start = 1;
        this.nam2 = ['0'];
        this.name3 = ['0'];
        this.activeSlideIndex = 0;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = 'Remove SPARE Record';
        this.popoverMessage = ' Delete Yes/No ?';
        this.istab = false;
        this.count1 = 0;
        this.count = 0;
        this.count5 = 0;
        this.mo60 = new _mo60_model__WEBPACK_IMPORTED_MODULE_5__["Mo60"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo60Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo60');
        localStorage.setItem('openpage', this.x);
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
        //alert(this.perpageflag);
        //alert(this.x);
        this.config =
            {
                itemsPerPage: this.perpage,
                currentPage: this.m,
                totalItems: this.rec1,
                id: 'listing_pagination',
            };
        this._service.countrecordmo60().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo60(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo60 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo60;
        } /*for first mo60*/); /* for first getdata*/
        this._service.fetchUserListFromRemotegse().subscribe(function (data) {
            console.log(data);
            _this.datagse = data;
        });
        this._service.fetchUserListFromRemotetools().subscribe(function (data) {
            console.log(data);
            _this.datatools = data;
        });
        this._service.fetchUserListFromRemotespare().subscribe(function (data) {
            console.log(data);
            _this.dataspare = data;
        });
        this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            console.log(data);
            _this.dataconsumable = data;
        });
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
    Mo60Component.prototype.ngOnDestroy = function () {
    };
    Mo60Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/structure/mo60/editmo60", id]);
    };
    Mo60Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/structure/mo60/addmo60"]);
    };
    Mo60Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo60(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo60(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo60 = datasear;
                console.log("to test spare" + _this.mo60);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo60(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo60 = data;
            } /*for first mo60*/); /* for first getdata*/
            this._service.countrecordmo60().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo60Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo60(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo60(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo60(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo60  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo60Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo60().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo60(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo60*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo60Component.prototype.show = function (e, id, gsenos, sparenos, toolnos, consumablenos) {
        var _this = this;
        if (e.target.checked) {
            this.nam2[0] = id;
            // this.name3[0]=id;
            this.istab = true;
            this.count1 = 1;
            this.count5 = 1;
            //this.count=this.count+1;
            this.count = 1;
            // alert("The id ="+id +","+this.count+","+gsenos +"selid="+this.nam2+"sparenos="+sparenos+this.count1+"toolnos="+toolnos+","+this.count5+"consumablenos="+consumablenos);
            this.selected_id = id;
        }
        else {
            this.count = this.count - 1;
            this.istab = false;
            this.count1 = this.count1 - 1;
            this.count5 = this.count5 - 1;
            this.selected_id = "";
        }
        this._gseservice.fetchUserListFromRemoteservicecondition(gsenos.toString()).subscribe(function (datagse) {
            console.log(datagse);
            _this.datagse = datagse;
            //this.totalItems=5;
        } /*for first mo60*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo60*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo60*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo60*/); /* for first getdata*/
    };
    Mo60Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo60(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo60(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo60(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo60 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo60 service');
        });
    };
    Mo60Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo60Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
    };
    Mo60Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo60));
        return {
            header: {
                //pageBreak:'before',
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
                return [{ text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'center' }];
            },
            content: [
                {
                    text: 'Service',
                    //
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getServiceData(this.data),
                {
                    text: '\n\nGse',
                    // style: 'header', 
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getGseData(this.datagse),
                {
                    text: '\n\nTools',
                    style: 'header',
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    margin: [0, 0, 0, 20]
                },
                this.getToolsData(this.datatools),
                {
                    text: '\n\nConsumable',
                    // style: 'header', 
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getConsumableData(this.dataconsumable),
                {
                    text: '\n\nSpare',
                    // style: 'header', 
                    bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getSpareData(this.dataspare),
            ],
        };
    };
    Mo60Component.prototype.getServiceData = function (mo60) {
        console.log('service..' + mo60);
        return {
            table: {
                width: ['*', '*', '*', '*', '*', '*', '*', '*',],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Seqno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Ammtcno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Category',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Type',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Trade',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Effectivity',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], mo60.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo60Component.prototype.getGseData = function (gse) {
        console.log('gse..' + gse);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'GseNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], gse.map(function (ed) {
                    return [ed.sno, ed.portno, ed.gseno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo60Component.prototype.getToolsData = function (tools) {
        console.log('tools..' + tools);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            // colSpan:1,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            // colSpan:2,
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'ToolsNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], tools.map(function (ed) {
                    return [ed.sno, ed.partno, ed.toolsno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo60Component.prototype.getSpareData = function (spare) {
        console.log('spare..' + spare);
        return {
            table: {
                width: ['*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'seqno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], spare.map(function (ed) {
                    return [ed.seqno, ed.partno, ed.oem, ed.description];
                }))
            },
        };
    };
    Mo60Component.prototype.getConsumableData = function (consumable) {
        console.log('consumable..' + consumable);
        return {
            table: {
                width: ['*', 'z*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Consumableno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], consumable.map(function (ed) {
                    return [ed.sno, ed.consumableno, ed.partno, ed.oem, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo60Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"] },
        { type: _mo60_service__WEBPACK_IMPORTED_MODULE_10__["Mo60Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo60Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo60',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo60.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo60/mo60.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo60.component.css */ "./src/app/views/structure/mo60/mo60.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"], _mo60_service__WEBPACK_IMPORTED_MODULE_10__["Mo60Service"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo60Component);
    return Mo60Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo60/mo60.model.ts":
/*!****************************************************!*\
  !*** ./src/app/views/structure/mo60/mo60.model.ts ***!
  \****************************************************/
/*! exports provided: Mo60, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo60", function() { return Mo60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo60 = /** @class */ (function () {
    function Mo60() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo60;
}());

var Consumable = /** @class */ (function () {
    function Consumable() {
    }
    return Consumable;
}());

var Spare = /** @class */ (function () {
    function Spare() {
    }
    return Spare;
}());

var Gse = /** @class */ (function () {
    function Gse() {
    }
    return Gse;
}());

var Tools = /** @class */ (function () {
    function Tools() {
    }
    return Tools;
}());

var Aircraft = /** @class */ (function () {
    function Aircraft() {
    }
    return Aircraft;
}());



/***/ }),

/***/ "./src/app/views/structure/mo60/mo60.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/structure/mo60/mo60.service.ts ***!
  \******************************************************/
/*! exports provided: Mo60Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo60Service", function() { return Mo60Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo60Service = /** @class */ (function () {
    function Mo60Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo60Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo60Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo60Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo60Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo60Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo60Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo60Service.prototype.fetchUserListFromRemotemo60 = function () {
        return this._http.get("http://localhost:8080/getmo60list");
    };
    Mo60Service.prototype.fetchUserByIdFromRemotemo60 = function (id) {
        return this._http.get("http://localhost:8080/getmo60byid/" + id);
    };
    Mo60Service.prototype.addUsertoRemotemo60 = function (mo60) {
        return this._http.post("http://localhost:8080/addmo60", mo60);
    };
    Mo60Service.prototype.deleteUserByIdFromRemotemo60 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo60byidtest/" + id);
    };
    Mo60Service.prototype.getdatamo60 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo60/page/" + pa + "/" + per);
    };
    Mo60Service.prototype.fetchfindlastmo60 = function () {
        return this._http.get("http://localhost:8080/findlastmo60");
    };
    Mo60Service.prototype.countrecordmo60 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo60");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo60Service.prototype.counteruserecordmo60 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo60?seqno=" + no1);
    };
    Mo60Service.prototype.fetchUserBymo60 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo60/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo60Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo60Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo60Service);
    return Mo60Service;
}());



/***/ }),

/***/ "./src/app/views/structure/mo90/addmo90/addmo90.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/structure/mo90/addmo90/addmo90.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzkwL2FkZG1vOTAvYWRkbW85MC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/structure/mo90/addmo90/addmo90.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/structure/mo90/addmo90/addmo90.component.ts ***!
  \*******************************************************************/
/*! exports provided: Addmo90Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo90Component", function() { return Addmo90Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo90_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo90.model */ "./src/app/views/structure/mo90/mo90.model.ts");
/* harmony import */ var _mo90_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mo90.service */ "./src/app/views/structure/mo90/mo90.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo90Component = /** @class */ (function () {
    function Addmo90Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo90 = new _mo90_model__WEBPACK_IMPORTED_MODULE_4__["Mo90"]();
        this.ischecked = false;
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.needcheck = false;
        this.nam = ['1', '2', '3', '4'];
        this.nam1 = ['37', '36', '35'];
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.m1 = 100;
        this.m1sp = 100;
        this.m1tl = 100;
        this.m1cl = 100;
        this.k = 1;
        this.l = 0;
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.identify = false;
        this.currentPage = 1;
        this.gse = new _mo90_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo90_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo90_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo90_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    ;
    Addmo90Component.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.gse = data;
            console.log(_this.gse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    Addmo90Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo90.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo90.gsenos = '00';
        }
        else {
            this.mo90.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo90.sparenos = '00';
        }
        else {
            this.mo90.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo90.toolsnos = '00';
        }
        else {
            this.mo90.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo90.consumablenos = '00';
        }
        else {
            this.mo90.consumablenos = this.copystrcl;
        }
        console.log(this.mo90.gsenos);
        console.log(this.mo90.gsenos);
        this._service.addUsertoRemotemo90(this.mo90).subscribe(function (data) {
            console.log(_this.mo90.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo90 service added successfully', "Mo90 service");
            _this._router.navigate(['/structure/mo90']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo90 service');
        });
    };
    Addmo90Component.prototype.function1 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.name == undefined) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
            }
            else {
                this.name = this.name + "," + id;
                this.nam2.push(id);
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            var index = this.nam2.indexOf(id);
            //  alert(index);
            if (index > -1) {
                this.nam2.splice(index, 1);
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        this.namestr = this.name;
        console.log(typeof (this.namestr));
        if (typeof (this.namestr === 'number')) {
            this.namestr = this.namestr.toString();
        }
    }; /*function1*/
    /*function 2 starts*/
    Addmo90Component.prototype.function2 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namesp == undefined) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.nam3.push(id);
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            var index1 = this.nam3.indexOf(id);
            //  alert(index1);
            if (index1 > -1) {
                this.nam3.splice(index1, 1);
            }
            console.log("Un checked" + id);
            this.namesp = this.str1;
            //    console.log("The name is"+this.name);
            console.log("the name of nam2=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        this.namestrsp = this.namesp;
        console.log(typeof (this.namestrsp));
        if (typeof (this.namestrsp === 'number')) {
            this.namestrsp = this.namestrsp.toString();
        }
    }; /*function2*/
    Addmo90Component.prototype.function3 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.nametl == undefined) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.nam4.push(id);
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in tools" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            var index2 = this.nam4.indexOf(id);
            //  alert(index1);
            if (index2 > -1) {
                this.nam4.splice(index2, 1);
            }
            console.log("Un checked" + id);
            this.nametl = this.str2;
            //    console.log("The name is"+this.name);
            console.log("the name of nam4=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        this.namestrtl = this.nametl;
        console.log(typeof (this.namestrtl));
        if (typeof (this.namestrtl === 'number')) {
            this.namestrtl = this.namestrtl.toString();
        }
    };
    Addmo90Component.prototype.function4 = function (e, id) {
        if (e.target.checked) {
            //this.gseno=parseInt(id);
            if (this.namecl == undefined) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.nam5.push(id);
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in tools" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            var index3 = this.nam5.indexOf(id);
            //  alert(index1);
            if (index3 > -1) {
                this.nam5.splice(index3, 1);
            }
            console.log("Un checked" + id);
            this.namecl = this.str3;
            //    console.log("The name is"+this.name);
            console.log("the name of nam5=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        this.namestrcl = this.namecl;
        console.log(typeof (this.namestrcl));
        if (typeof (this.namestrcl === 'number')) {
            this.namestrcl = this.namestrcl.toString();
        }
    };
    Addmo90Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo90.type = event.target.value;
    };
    Addmo90Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo90_service__WEBPACK_IMPORTED_MODULE_5__["Mo90Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo90Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addm90',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo90.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/addmo90/addmo90.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo90.component.css */ "./src/app/views/structure/mo90/addmo90/addmo90.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"],
            _mo90_service__WEBPACK_IMPORTED_MODULE_5__["Mo90Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo90Component);
    return Addmo90Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo90/editmo90/editmo90.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/structure/mo90/editmo90/editmo90.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzkwL2VkaXRtbzkwL2VkaXRtbzkwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/structure/mo90/editmo90/editmo90.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/structure/mo90/editmo90/editmo90.component.ts ***!
  \*********************************************************************/
/*! exports provided: Editmo90Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo90Component", function() { return Editmo90Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo90_mo90_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mo90/mo90.model */ "./src/app/views/structure/mo90/mo90.model.ts");
/* harmony import */ var _mo90_mo90_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mo90/mo90.service */ "./src/app/views/structure/mo90/mo90.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;









var Editmo90Component = /** @class */ (function () {
    function Editmo90Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
        this._router = _router;
        this.cservice = cservice;
        this.tservice = tservice;
        this._activatedroute = _activatedroute;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this.toastr = toastr;
        this._http = _http;
        this.isselected = false;
        this.isgse = true;
        this.istools = false;
        this.isspare = false;
        this.isconsumable = false;
        this.myInterval = 0;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.m = 0;
        this.res2 = 0;
        this.res2sp = 0;
        this.res2tl = 0;
        this.res2cl = 0;
        this.namelen = 0;
        this.needcheck = false;
        this.gse = new _mo90_mo90_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.mo90 = new _mo90_mo90_model__WEBPACK_IMPORTED_MODULE_4__["Mo90"]();
        this.spare = new _mo90_mo90_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo90_mo90_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo90_mo90_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"];
    }
    Editmo90Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo90(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo90 = data;
            console.log("The gse s are=" + _this.mo90.gsenos);
            console.log(_this.mo90);
            //   console.log("The spares  are="+this.mo90.sparenos);
            _this.nam2 = _this.mo90.gsenos;
            _this.name = _this.mo90.gsenos;
            _this.nam3 = _this.mo90.sparenos;
            _this.namesp = _this.mo90.sparenos;
            _this.nam4 = _this.mo90.toolsnos;
            _this.nametl = _this.mo90.toolsnos;
            _this.nam5 = _this.mo90.consumablenos;
            _this.namecl = _this.mo90.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo90.gsenos != null) {
            }
            if (_this.mo90.sparenos != null) {
            }
            if (_this.mo90.toolsnos != null) {
            }
            if (_this.mo90.consumablenos != null) {
            }
            if (_this.mo90.gsenos == null) {
            }
            if (_this.mo90.sparenos == null) {
            }
            if (_this.mo90.toolsnos == null) {
            }
            if (_this.mo90.consumablenos == null) {
            }
        }, function (error) { return console.log("exception occured"); });
        /*for gse*/
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
            console.log(_this.datagse);
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
            console.log(_this.dataspare);
        });
        this.tservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
            console.log(_this.datatools);
        });
        this.cservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
            console.log(_this.dataconsumable);
        });
    };
    Editmo90Component.prototype.function1 = function (e, id) {
        this.myid = id;
        if (e.target.checked) {
            if (this.name == undefined || this.name == null) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
                // alert(this.nam2);
            }
            else {
                this.name = this.name + "," + id;
                this.name2 = this.nam2;
                this.name2 = this.name2.split(",");
                this.name2.push(id);
                this.nam2 = this.name2.toString();
            }
            console.log("selid:" + this.name);
            console.log("selid array" + this.nam2);
            this.copystr = this.nam2.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2 = this.nam2;
            this.name2 = this.name2.split(",");
            var index = this.name2.indexOf(this.myid);
            if (index > -1) {
                this.name2.splice(index, 1);
                this.nam2 = this.name2.toString();
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        //alert(this.copystr);
        /*function*/
    };
    //function2 for spare 
    //************* 
    Editmo90Component.prototype.function2 = function (e, id) {
        this.myidsp = id;
        if (e.target.checked) {
            if (this.namesp == undefined || this.namesp == null) {
                // alert("i m undefined");
                this.namesp = id;
                this.nam3[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.name2sp = this.nam3;
                this.name2sp = this.name2sp.split(",");
                this.name2sp.push(id);
                this.nam3 = this.name2sp.toString();
            }
            console.log("selid in spare:" + this.namesp);
            console.log("selid array in spare" + this.nam3);
            this.copystrsp = this.nam3.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2sp = this.nam3;
            this.name2sp = this.name2sp.split(",");
            var index1 = this.name2sp.indexOf(this.myid);
            if (index1 > -1) {
                this.name2sp.splice(index1, 1);
                this.nam3 = this.name2sp.toString();
            }
            console.log("Un checked in spare" + id);
            this.namesp = this.str1sp;
            console.log("the name of nam3=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        /*function2*/
    };
    //************* */
    Editmo90Component.prototype.function3 = function (e, id) {
        this.myidtl = id;
        if (e.target.checked) {
            if (this.nametl == undefined || this.nametl == null) {
                // alert("i m undefined");
                this.nametl = id;
                this.nam4[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.name2tl = this.nam4;
                this.name2tl = this.name2tl.split(",");
                this.name2tl.push(id);
                this.nam4 = this.name2tl.toString();
            }
            console.log("selid in spare:" + this.nametl);
            console.log("selid array in spare" + this.nam4);
            this.copystrtl = this.nam4.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2tl = this.nam4;
            this.name2tl = this.name2tl.split(",");
            var index2 = this.name2tl.indexOf(this.myid);
            if (index2 > -1) {
                this.name2tl.splice(index2, 1);
                this.nam4 = this.name2tl.toString();
            }
            console.log("Un checked in spare" + id);
            this.nametl = this.str1tl;
            console.log("the name of nam3=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        /*function2*/
    };
    Editmo90Component.prototype.function4 = function (e, id) {
        this.myidcl = id;
        if (e.target.checked) {
            if (this.namecl == undefined || this.namecl == null) {
                // alert("i m undefined");
                this.namecl = id;
                this.nam5[0] = id;
                //  alert(this.nam3);
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.name2cl = this.nam5;
                this.name2cl = this.name2cl.split(",");
                this.name2cl.push(id);
                this.nam5 = this.name2cl.toString();
            }
            console.log("selid in spare:" + this.namecl);
            console.log("selid array in spare" + this.nam5);
            this.copystrcl = this.nam5.toString();
        } /*checked*/
        else {
            this.myid = JSON.stringify(id);
            this.name2cl = this.nam5;
            this.name2cl = this.name2cl.split(",");
            var index3 = this.name2cl.indexOf(this.myid);
            if (index3 > -1) {
                this.name2cl.splice(index3, 1);
                this.nam5 = this.name2cl.toString();
            }
            console.log("Un checked in spare" + id);
            this.namecl = this.str1cl;
            console.log("the name of nam3=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        /*function2*/
    };
    Editmo90Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo90.gsenos = this.copystr;
        this.mo90.sparenos = this.copystrsp;
        this.mo90.toolsnos = this.copystrtl;
        this.mo90.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo90(this.mo90).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/structure/mo90']);
            _this.toastr.showInfo('Mo90 service updation success', 'Mo90 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo90 update'); });
    };
    Editmo90Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo90_mo90_service__WEBPACK_IMPORTED_MODULE_5__["Mo90Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo90Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo90',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo90.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/editmo90/editmo90.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo90.component.css */ "./src/app/views/structure/mo90/editmo90/editmo90.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _mo90_mo90_service__WEBPACK_IMPORTED_MODULE_5__["Mo90Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo90Component);
    return Editmo90Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo90/mo90.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/structure/mo90/mo90.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9tbzkwL21vOTAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/structure/mo90/mo90.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/structure/mo90/mo90.component.ts ***!
  \********************************************************/
/*! exports provided: Mo90Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo90Component", function() { return Mo90Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo90_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo90.model */ "./src/app/views/structure/mo90/mo90.model.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo90_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo90.service */ "./src/app/views/structure/mo90/mo90.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
var Mo90Component = /** @class */ (function () {
    function Mo90Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
        var _this = this;
        this._http = _http;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._spareservice = _spareservice;
        this._gseservice = _gseservice;
        this._route = _route;
        this._activatedrouter = _activatedrouter;
        this.toastr = toastr;
        this.acitvities = [];
        this.start = 1;
        this.nam2 = ['0'];
        this.name3 = ['0'];
        this.activeSlideIndex = 0;
        this.showdeletecaption = false;
        this.addshowbutton = false;
        this.showdeletebutton = false;
        this.showeditbutton = false;
        this.showedithidebutton = false;
        this.showphotobutton = false;
        this.popoverTitle = 'Remove SPARE Record';
        this.popoverMessage = ' Delete Yes/No ?';
        this.istab = false;
        this.count1 = 0;
        this.count = 0;
        this.count5 = 0;
        this.mo90 = new _mo90_model__WEBPACK_IMPORTED_MODULE_5__["Mo90"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo90Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo90');
        localStorage.setItem('openpage', this.x);
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
        //alert(this.perpageflag);
        //alert(this.x);
        this.config =
            {
                itemsPerPage: this.perpage,
                currentPage: this.m,
                totalItems: this.rec1,
                id: 'listing_pagination',
            };
        this._service.countrecordmo90().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo90(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo90 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo90;
        } /*for first mo90*/); /* for first getdata*/
        this._service.fetchUserListFromRemotegse().subscribe(function (data) {
            console.log(data);
            _this.datagse = data;
        });
        this._service.fetchUserListFromRemotetools().subscribe(function (data) {
            console.log(data);
            _this.datatools = data;
        });
        this._service.fetchUserListFromRemotespare().subscribe(function (data) {
            console.log(data);
            _this.dataspare = data;
        });
        this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            console.log(data);
            _this.dataconsumable = data;
        });
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
    Mo90Component.prototype.ngOnDestroy = function () {
    };
    Mo90Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/structure/mo90/editmo90", id]);
    };
    Mo90Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/structure/mo90/addmo90"]);
    };
    Mo90Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo90(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo90(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo90 = datasear;
                console.log("to test spare" + _this.mo90);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo90(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo90 = data;
            } /*for first mo90*/); /* for first getdata*/
            this._service.countrecordmo90().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo90Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo90(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo90(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo90(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo90  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo90Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo90().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo90(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo90*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo90Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
        var _this = this;
        if (e.target.checked) {
            this.nam2[0] = id;
            // this.name3[0]=id;
            this.istab = true;
            this.count1 = 1;
            this.count5 = 1;
            //this.count=this.count+1;
            this.count = 1;
            // alert("The id ="+id +","+this.count+","+gsenos +"selid="+this.nam2+"sparenos="+sparenos+this.count1+"toolsnos="+toolsnos+","+this.count5+"consumablenos="+consumablenos);
            this.selected_id = id;
        }
        else {
            this.count = this.count - 1;
            this.istab = false;
            this.count1 = this.count1 - 1;
            this.count5 = this.count5 - 1;
            this.selected_id = "";
        }
        this._gseservice.fetchUserListFromRemoteservicecondition(gsenos.toString()).subscribe(function (datagse) {
            console.log(datagse);
            _this.datagse = datagse;
            //this.totalItems=5;
        } /*for first mo90*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo90*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo90*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo90*/); /* for first getdata*/
    };
    Mo90Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo90(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo90(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo90(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo90 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo90 service');
        });
    };
    Mo90Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo90Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
    };
    Mo90Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo90));
        return {
            header: {
                //pageBreak:'before',
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
                return [{ text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'center' }];
            },
            content: [
                {
                    text: 'Service',
                    //
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getServiceData(this.data),
                {
                    text: '\n\nGse',
                    // style: 'header', 
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getGseData(this.datagse),
                {
                    text: '\n\nTools',
                    style: 'header',
                    // bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    margin: [0, 0, 0, 20]
                },
                this.getToolsData(this.datatools),
                {
                    text: '\n\nConsumable',
                    // style: 'header', 
                    //bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getConsumableData(this.dataconsumable),
                {
                    text: '\n\nSpare',
                    // style: 'header', 
                    bold: true,
                    fontSize: 20,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 0, 0, 20]
                },
                this.getSpareData(this.dataspare),
            ],
        };
    };
    Mo90Component.prototype.getServiceData = function (mo90) {
        console.log('service..' + mo90);
        return {
            table: {
                width: ['*', '*', '*', '*', '*', '*', '*', '*',],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Seqno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Ammtcno',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Category',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Type',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Trade',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            fontsize: 30,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Effectivity',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], mo90.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo90Component.prototype.getGseData = function (gse) {
        console.log('gse..' + gse);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'GseNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], gse.map(function (ed) {
                    return [ed.sno, ed.portno, ed.gseno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo90Component.prototype.getToolsData = function (tools) {
        console.log('tools..' + tools);
        return {
            table: {
                width: ['*', '*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            // colSpan:1,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            // colSpan:2,
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'ToolsNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], tools.map(function (ed) {
                    return [ed.sno, ed.partno, ed.toolsno, ed.gdm, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo90Component.prototype.getSpareData = function (spare) {
        console.log('spare..' + spare);
        return {
            table: {
                width: ['*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'seqno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], spare.map(function (ed) {
                    return [ed.seqno, ed.partno, ed.oem, ed.description];
                }))
            },
        };
    };
    Mo90Component.prototype.getConsumableData = function (consumable) {
        console.log('consumable..' + consumable);
        return {
            table: {
                width: ['*', 'z*', '*', '*', '*'],
                body: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                    [
                        {
                            text: 'Sno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Consumableno',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'PartNo',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Oem',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                        {
                            text: 'Description',
                            bold: true,
                            style: 'tableHeader',
                            fillColor: '#cccccc',
                        },
                    ]
                ], consumable.map(function (ed) {
                    return [ed.sno, ed.consumableno, ed.partno, ed.oem, ed.description];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo90Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"] },
        { type: _mo90_service__WEBPACK_IMPORTED_MODULE_10__["Mo90Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo90Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo90',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo90.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/mo90/mo90.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo90.component.css */ "./src/app/views/structure/mo90/mo90.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"],
            _mo90_service__WEBPACK_IMPORTED_MODULE_10__["Mo90Service"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo90Component);
    return Mo90Component;
}());



/***/ }),

/***/ "./src/app/views/structure/mo90/mo90.model.ts":
/*!****************************************************!*\
  !*** ./src/app/views/structure/mo90/mo90.model.ts ***!
  \****************************************************/
/*! exports provided: Mo90, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo90", function() { return Mo90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo90 = /** @class */ (function () {
    function Mo90() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo90;
}());

var Consumable = /** @class */ (function () {
    function Consumable() {
    }
    return Consumable;
}());

var Spare = /** @class */ (function () {
    function Spare() {
    }
    return Spare;
}());

var Gse = /** @class */ (function () {
    function Gse() {
    }
    return Gse;
}());

var Tools = /** @class */ (function () {
    function Tools() {
    }
    return Tools;
}());

var Aircraft = /** @class */ (function () {
    function Aircraft() {
    }
    return Aircraft;
}());



/***/ }),

/***/ "./src/app/views/structure/mo90/mo90.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/structure/mo90/mo90.service.ts ***!
  \******************************************************/
/*! exports provided: Mo90Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo90Service", function() { return Mo90Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo90Service = /** @class */ (function () {
    function Mo90Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo90Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo90Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo90Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo90Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo90Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo90Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo90Service.prototype.fetchUserListFromRemotemo90 = function () {
        return this._http.get("http://localhost:8080/getmo90list");
    };
    Mo90Service.prototype.fetchUserByIdFromRemotemo90 = function (id) {
        return this._http.get("http://localhost:8080/getmo90byid/" + id);
    };
    Mo90Service.prototype.addUsertoRemotemo90 = function (mo90) {
        return this._http.post("http://localhost:8080/addmo90", mo90);
    };
    Mo90Service.prototype.deleteUserByIdFromRemotemo90 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo90byidtest/" + id);
    };
    Mo90Service.prototype.getdatamo90 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo90/page/" + pa + "/" + per);
    };
    Mo90Service.prototype.fetchfindlastmo90 = function () {
        return this._http.get("http://localhost:8080/findlastmo90");
    };
    Mo90Service.prototype.countrecordmo90 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo90");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo90Service.prototype.counteruserecordmo90 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo90?seqno=" + no1);
    };
    Mo90Service.prototype.fetchUserBymo90 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo90/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo90Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo90Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo90Service);
    return Mo90Service;
}());



/***/ }),

/***/ "./src/app/views/structure/structure-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/structure/structure-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StructureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureRoutingModule", function() { return StructureRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mo30_mo30_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mo30/mo30.component */ "./src/app/views/structure/mo30/mo30.component.ts");
/* harmony import */ var _mo15_mo15_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo15/mo15.component */ "./src/app/views/structure/mo15/mo15.component.ts");
/* harmony import */ var _mo60_mo60_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mo60/mo60.component */ "./src/app/views/structure/mo60/mo60.component.ts");
/* harmony import */ var _mo90_mo90_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mo90/mo90.component */ "./src/app/views/structure/mo90/mo90.component.ts");
/* harmony import */ var _mo120_mo120_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo120/mo120.component */ "./src/app/views/structure/mo120/mo120.component.ts");
/* harmony import */ var _mo15_editmo15_editmo15_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mo15/editmo15/editmo15.component */ "./src/app/views/structure/mo15/editmo15/editmo15.component.ts");
/* harmony import */ var _mo30_editmo30_editmo30_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo30/editmo30/editmo30.component */ "./src/app/views/structure/mo30/editmo30/editmo30.component.ts");
/* harmony import */ var _mo60_editmo60_editmo60_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mo60/editmo60/editmo60.component */ "./src/app/views/structure/mo60/editmo60/editmo60.component.ts");
/* harmony import */ var _mo90_editmo90_editmo90_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mo90/editmo90/editmo90.component */ "./src/app/views/structure/mo90/editmo90/editmo90.component.ts");
/* harmony import */ var _mo120_editmo120_editmo120_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mo120/editmo120/editmo120.component */ "./src/app/views/structure/mo120/editmo120/editmo120.component.ts");
/* harmony import */ var _mo15_addmo15_addmo15_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mo15/addmo15/addmo15.component */ "./src/app/views/structure/mo15/addmo15/addmo15.component.ts");
/* harmony import */ var _mo30_addmo30_addmo30_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mo30/addmo30/addmo30.component */ "./src/app/views/structure/mo30/addmo30/addmo30.component.ts");
/* harmony import */ var _mo60_addmo60_addmo60_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mo60/addmo60/addmo60.component */ "./src/app/views/structure/mo60/addmo60/addmo60.component.ts");
/* harmony import */ var _mo90_addmo90_addmo90_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mo90/addmo90/addmo90.component */ "./src/app/views/structure/mo90/addmo90/addmo90.component.ts");
/* harmony import */ var _mo120_addmo120_addmo120_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mo120/addmo120/addmo120.component */ "./src/app/views/structure/mo120/addmo120/addmo120.component.ts");



















var routes = [
    {
        path: '',
        data: {
            title: 'Structure'
        }
    },
    { path: 'mo15', component: _mo15_mo15_component__WEBPACK_IMPORTED_MODULE_5__["Mo15Component"], data: { title: "Mo15" } },
    { path: 'mo15/addmo15', component: _mo15_addmo15_addmo15_component__WEBPACK_IMPORTED_MODULE_14__["Addmo15Component"], data: { title: "Mo15/addmo15" } },
    { path: 'mo15/editmo15/:id', component: _mo15_editmo15_editmo15_component__WEBPACK_IMPORTED_MODULE_9__["Editmo15Component"], data: { title: "Mo15/editmo15" } },
    { path: 'mo30', component: _mo30_mo30_component__WEBPACK_IMPORTED_MODULE_4__["Mo30Component"], data: { title: "Mo30" } },
    { path: 'mo30/addmo30', component: _mo30_addmo30_addmo30_component__WEBPACK_IMPORTED_MODULE_15__["Addmo30Component"], data: { title: "Mo30/addmo30" } },
    { path: 'mo30/editmo30/:id', component: _mo30_editmo30_editmo30_component__WEBPACK_IMPORTED_MODULE_10__["Editmo30Component"], data: { title: "Mo30/editmo30" } },
    { path: 'mo60', component: _mo60_mo60_component__WEBPACK_IMPORTED_MODULE_6__["Mo60Component"], data: { title: "Mo60" } },
    { path: 'mo60/addmo60', component: _mo60_addmo60_addmo60_component__WEBPACK_IMPORTED_MODULE_16__["Addmo60Component"], data: { title: "Mo60/addmo60" } },
    { path: 'mo60/editmo60/:id', component: _mo60_editmo60_editmo60_component__WEBPACK_IMPORTED_MODULE_11__["Editmo60Component"], data: { title: "Mo60/editmo60" } },
    { path: 'mo90', component: _mo90_mo90_component__WEBPACK_IMPORTED_MODULE_7__["Mo90Component"], data: { title: "Mo90" } },
    { path: 'mo90/addmo90', component: _mo90_addmo90_addmo90_component__WEBPACK_IMPORTED_MODULE_17__["Addmo90Component"], data: { title: "Mo90/addmo90" } },
    { path: 'mo90/editmo90/:id', component: _mo90_editmo90_editmo90_component__WEBPACK_IMPORTED_MODULE_12__["Editmo90Component"], data: { title: "Mo90/editmo90" } },
    { path: 'mo120', component: _mo120_mo120_component__WEBPACK_IMPORTED_MODULE_8__["Mo120Component"], data: { title: "Mo120" } },
    { path: 'mo120/addmo120', component: _mo120_addmo120_addmo120_component__WEBPACK_IMPORTED_MODULE_18__["Addmo120Component"], data: { title: "Mo120/addmo120" } },
    { path: 'mo120/editmo120/:id', component: _mo120_editmo120_editmo120_component__WEBPACK_IMPORTED_MODULE_13__["Editmo120Component"], data: { title: "Mo120/editmo120" } },
];
var StructureRoutingModule = /** @class */ (function () {
    function StructureRoutingModule() {
    }
    StructureRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StructureRoutingModule);
    return StructureRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/structure/structure.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/structure/structure.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/structure/structure.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/structure/structure.component.ts ***!
  \********************************************************/
/*! exports provided: StructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureComponent", function() { return StructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StructureComponent = /** @class */ (function () {
    function StructureComponent() {
    }
    StructureComponent.prototype.ngOnInit = function () {
    };
    StructureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-structure',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./structure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/structure/structure.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./structure.component.css */ "./src/app/views/structure/structure.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StructureComponent);
    return StructureComponent;
}());



/***/ }),

/***/ "./src/app/views/structure/structure.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/structure/structure.module.ts ***!
  \*****************************************************/
/*! exports provided: StructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureModule", function() { return StructureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _structure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structure-routing.module */ "./src/app/views/structure/structure-routing.module.ts");
/* harmony import */ var _structure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./structure.component */ "./src/app/views/structure/structure.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _mo15_mo15_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mo15/mo15.component */ "./src/app/views/structure/mo15/mo15.component.ts");
/* harmony import */ var _mo30_mo30_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mo30/mo30.component */ "./src/app/views/structure/mo30/mo30.component.ts");
/* harmony import */ var _mo60_mo60_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mo60/mo60.component */ "./src/app/views/structure/mo60/mo60.component.ts");
/* harmony import */ var _mo90_mo90_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mo90/mo90.component */ "./src/app/views/structure/mo90/mo90.component.ts");
/* harmony import */ var _mo120_mo120_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mo120/mo120.component */ "./src/app/views/structure/mo120/mo120.component.ts");
/* harmony import */ var _mo15_addmo15_addmo15_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mo15/addmo15/addmo15.component */ "./src/app/views/structure/mo15/addmo15/addmo15.component.ts");
/* harmony import */ var _mo15_editmo15_editmo15_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mo15/editmo15/editmo15.component */ "./src/app/views/structure/mo15/editmo15/editmo15.component.ts");
/* harmony import */ var _mo30_addmo30_addmo30_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mo30/addmo30/addmo30.component */ "./src/app/views/structure/mo30/addmo30/addmo30.component.ts");
/* harmony import */ var _mo30_editmo30_editmo30_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mo30/editmo30/editmo30.component */ "./src/app/views/structure/mo30/editmo30/editmo30.component.ts");
/* harmony import */ var _mo60_addmo60_addmo60_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mo60/addmo60/addmo60.component */ "./src/app/views/structure/mo60/addmo60/addmo60.component.ts");
/* harmony import */ var _mo60_editmo60_editmo60_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mo60/editmo60/editmo60.component */ "./src/app/views/structure/mo60/editmo60/editmo60.component.ts");
/* harmony import */ var _mo90_addmo90_addmo90_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mo90/addmo90/addmo90.component */ "./src/app/views/structure/mo90/addmo90/addmo90.component.ts");
/* harmony import */ var _mo90_editmo90_editmo90_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mo90/editmo90/editmo90.component */ "./src/app/views/structure/mo90/editmo90/editmo90.component.ts");
/* harmony import */ var _mo120_addmo120_addmo120_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mo120/addmo120/addmo120.component */ "./src/app/views/structure/mo120/addmo120/addmo120.component.ts");
/* harmony import */ var _mo120_editmo120_editmo120_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mo120/editmo120/editmo120.component */ "./src/app/views/structure/mo120/editmo120/editmo120.component.ts");







;






//import { AddspareComponent } from './addspare/addspare.component';
//import { EditspareComponent } from './editspare/editspare.component';
//import { PicgseComponent } from './picgse/picgse.component';



















var StructureModule = /** @class */ (function () {
    function StructureModule() {
    }
    StructureModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_structure_component__WEBPACK_IMPORTED_MODULE_6__["StructureComponent"], _mo15_mo15_component__WEBPACK_IMPORTED_MODULE_17__["Mo15Component"], _mo30_mo30_component__WEBPACK_IMPORTED_MODULE_18__["Mo30Component"], _mo60_mo60_component__WEBPACK_IMPORTED_MODULE_19__["Mo60Component"], _mo90_mo90_component__WEBPACK_IMPORTED_MODULE_20__["Mo90Component"], _mo120_mo120_component__WEBPACK_IMPORTED_MODULE_21__["Mo120Component"], _mo15_addmo15_addmo15_component__WEBPACK_IMPORTED_MODULE_22__["Addmo15Component"], _mo15_editmo15_editmo15_component__WEBPACK_IMPORTED_MODULE_23__["Editmo15Component"], _mo30_addmo30_addmo30_component__WEBPACK_IMPORTED_MODULE_24__["Addmo30Component"], _mo30_editmo30_editmo30_component__WEBPACK_IMPORTED_MODULE_25__["Editmo30Component"], _mo60_addmo60_addmo60_component__WEBPACK_IMPORTED_MODULE_26__["Addmo60Component"], _mo60_editmo60_editmo60_component__WEBPACK_IMPORTED_MODULE_27__["Editmo60Component"], _mo90_addmo90_addmo90_component__WEBPACK_IMPORTED_MODULE_28__["Addmo90Component"], _mo90_editmo90_editmo90_component__WEBPACK_IMPORTED_MODULE_29__["Editmo90Component"], _mo120_addmo120_addmo120_component__WEBPACK_IMPORTED_MODULE_30__["Addmo120Component"], _mo120_editmo120_editmo120_component__WEBPACK_IMPORTED_MODULE_31__["Editmo120Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_12__["CheckModule"],
                ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__["Ng2LoadingSpinnerModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__["ConfirmationPopoverModule"],
                _structure_routing_module__WEBPACK_IMPORTED_MODULE_5__["StructureRoutingModule"]
            ],
        })
    ], StructureModule);
    return StructureModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-structure-structure-module.js.map