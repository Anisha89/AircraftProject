(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-system-system-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/addmo12/addmo12.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/addmo12/addmo12.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n        Add  12 MoServices\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"mo12.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo12.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n      <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo12.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo12.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo12.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo12.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo12.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo12.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo12.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]=\"!addserviceform.valid\"  >Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/editmo12/editmo12.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/editmo12/editmo12.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Edit Mo12 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n          <div class=\"form-group row\">\r\n            \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Seqno</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo12.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                   required >\r\n                </div>\r\n                \r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n    \r\n                     <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                    </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo12.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n          \r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo12.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Trade</span>\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo12.trade\"name=\"trade\"  required  >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo12.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo12.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo12.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo12.description\" required >\r\n                </div>\r\n             </div>\r\n          </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/mo12.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/mo12.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/addmo18/addmo18.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/addmo18/addmo18.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Add  18 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"mo18.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo18.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n      <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo18.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo18.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo18.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo18.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo18.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo18.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo18.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]=\"!addserviceform.valid\"  >Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/editmo18/editmo18.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/editmo18/editmo18.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Edit Mo18 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n          <div class=\"form-group row\">\r\n            \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Seqno</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo18.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                   required >\r\n                </div>\r\n                \r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n    \r\n                     <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                    </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo18.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n          \r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo18.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Trade</span>\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo18.trade\"name=\"trade\"  required  >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo18.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo18.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo18.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo18.description\" required >\r\n                </div>\r\n             </div>\r\n          </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/mo18.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/mo18.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/addmo24/addmo24.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/addmo24/addmo24.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Add  24 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"mo24.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo24.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n      <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo24.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo24.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo24.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo24.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo24.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo24.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo24.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]=\"!addserviceform.valid\"  >Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/editmo24/editmo24.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/editmo24/editmo24.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Edit Mo24 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n          <div class=\"form-group row\">\r\n            \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Seqno</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo24.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                   required >\r\n                </div>\r\n                \r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n    \r\n                     <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                    </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo24.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n          \r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo24.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Trade</span>\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo24.trade\"name=\"trade\"  required  >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo24.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo24.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo24.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo24.description\" required >\r\n                </div>\r\n             </div>\r\n          </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/mo24.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/mo24.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/addmo36/addmo36.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/addmo36/addmo36.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Add  36 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"mo36.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo36.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n      <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo36.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo36.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo36.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo36.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo36.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo36.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo36.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]=\"!addserviceform.valid\"  >Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/editmo36/editmo36.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/editmo36/editmo36.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Edit Mo36 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n          <div class=\"form-group row\">\r\n            \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Seqno</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo36.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                   required >\r\n                </div>\r\n                \r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n    \r\n                     <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                    </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo36.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n          \r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo36.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Trade</span>\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo36.trade\"name=\"trade\"  required  >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo36.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo36.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo36.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo36.description\" required >\r\n                </div>\r\n             </div>\r\n          </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/mo36.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/mo36.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n          \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/addmo48/addmo48.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/addmo48/addmo48.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Add  48 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"mo48.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo48.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n      <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo48.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo48.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo48.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo48.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo48.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo48.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo48.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]=\"!addserviceform.valid\"  >Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/editmo48/editmo48.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/editmo48/editmo48.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Edit Mo48 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n          <div class=\"form-group row\">\r\n            \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Seqno</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo48.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                   required >\r\n                </div>\r\n                \r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n    \r\n                     <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                    </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo48.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n          \r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo48.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Trade</span>\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo48.trade\"name=\"trade\"  required  >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo48.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo48.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo48.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo48.description\" required >\r\n                </div>\r\n             </div>\r\n          </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/mo48.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/mo48.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n            \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/addmo6/addmo6.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/addmo6/addmo6.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Add  6 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"mo6.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo6.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                      </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo6.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo6.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo6.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo6.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo6.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo6.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo6.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]=\"!addserviceform.valid\"  >Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/editmo6/editmo6.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/editmo6/editmo6.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Edit Mo6 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n          <div class=\"form-group row\">\r\n            \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Seqno</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo6.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                   required >\r\n                </div>\r\n                \r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n    \r\n                     <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                    </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo6.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n          \r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo6.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Trade</span>\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo6.trade\"name=\"trade\"  required  >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo6.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo6.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo6.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo6.description\" required >\r\n                </div>\r\n             </div>\r\n          </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/mo6.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/mo6.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/addmo72/addmo72.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/addmo72/addmo72.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Add  72 Mo Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"mo72.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo72.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n      <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo72.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo72.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo72.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo72.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo72.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo72.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo72.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]=\"!addserviceform.valid\"  >Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/editmo72/editmo72.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/editmo72/editmo72.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\" >\r\n       Edit Mo72 Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n          <div class=\"form-group row\">\r\n            \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Seqno</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"mo72.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                   required >\r\n                </div>\r\n                \r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n    \r\n                     <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                    </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo72.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n          \r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo72.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n\r\n             <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Trade</span>\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo72.trade\"name=\"trade\"  required  >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo72.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"mo72.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo72.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo72.description\" required >\r\n                </div>\r\n             </div>\r\n          </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/mo72.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/mo72.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n              \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/system.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/system.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>system works!</p>\r\n");

/***/ }),

/***/ "./src/app/views/system/mo12/addmo12/addmo12.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/system/mo12/addmo12/addmo12.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTIvYWRkbW8xMi9hZGRtbzEyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zeXN0ZW0vbW8xMi9hZGRtbzEyL2FkZG1vMTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/system/mo12/addmo12/addmo12.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/system/mo12/addmo12/addmo12.component.ts ***!
  \****************************************************************/
/*! exports provided: Addmo12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo12Component", function() { return Addmo12Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo12_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo12.model */ "./src/app/views/system/mo12/mo12.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo12_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mo12.service */ "./src/app/views/system/mo12/mo12.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo12Component = /** @class */ (function () {
    function Addmo12Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo12 = new _mo12_model__WEBPACK_IMPORTED_MODULE_4__["Mo12"]();
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
        this.gse = new _mo12_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo12_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo12_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo12_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    ;
    Addmo12Component.prototype.ngOnInit = function () {
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
    Addmo12Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo12Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo12Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo12Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo12Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo12.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo12.gsenos = '00';
        }
        else {
            this.mo12.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo12.sparenos = '00';
        }
        else {
            this.mo12.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo12.toolsnos = '00';
        }
        else {
            this.mo12.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo12.consumablenos = '00';
        }
        else {
            this.mo12.consumablenos = this.copystrcl;
        }
        console.log(this.mo12.gsenos);
        console.log(this.mo12.gsenos);
        this._service.addUsertoRemotemo12(this.mo12).subscribe(function (data) {
            console.log(_this.mo12.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo12 service added successfully', " Mo12 service");
            _this._router.navigate(['/system/mo12']);
        }, function (error) {
            console.log("error");
            console.log(error);
            _this.toastr.showError(error, ' Mo12 service');
        });
    };
    Addmo12Component.prototype.function1 = function (e, id) {
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
    Addmo12Component.prototype.function2 = function (e, id) {
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
    Addmo12Component.prototype.function3 = function (e, id) {
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
    Addmo12Component.prototype.function4 = function (e, id) {
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
    Addmo12Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo12.type = event.target.value;
    };
    Addmo12Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"] },
        { type: _mo12_service__WEBPACK_IMPORTED_MODULE_7__["Mo12Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo12Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admo12',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo12.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/addmo12/addmo12.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo12.component.css */ "./src/app/views/system/mo12/addmo12/addmo12.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"],
            _mo12_service__WEBPACK_IMPORTED_MODULE_7__["Mo12Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo12Component);
    return Addmo12Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo12/editmo12/editmo12.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/system/mo12/editmo12/editmo12.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTIvZWRpdG1vMTIvZWRpdG1vMTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzEyL2VkaXRtbzEyL2VkaXRtbzEyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/system/mo12/editmo12/editmo12.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/system/mo12/editmo12/editmo12.component.ts ***!
  \******************************************************************/
/*! exports provided: Editmo12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo12Component", function() { return Editmo12Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo12_mo12_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mo12/mo12.model */ "./src/app/views/system/mo12/mo12.model.ts");
/* harmony import */ var _mo12_mo12_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mo12/mo12.service */ "./src/app/views/system/mo12/mo12.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;









var Editmo12Component = /** @class */ (function () {
    function Editmo12Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _mo12_mo12_model__WEBPACK_IMPORTED_MODULE_8__["Gse"]();
        this.mo12 = new _mo12_mo12_model__WEBPACK_IMPORTED_MODULE_8__["Mo12"]();
        this.spare = new _mo12_mo12_model__WEBPACK_IMPORTED_MODULE_8__["Spare"]();
        this.tools = new _mo12_mo12_model__WEBPACK_IMPORTED_MODULE_8__["Tools"]();
        this.consumable = new _mo12_mo12_model__WEBPACK_IMPORTED_MODULE_8__["Consumable"];
    }
    Editmo12Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo12(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo12 = data;
            console.log("The gse s are=" + _this.mo12.gsenos);
            console.log(_this.mo12);
            //   console.log("The spares  are="+this.mo12.sparenos);
            _this.nam2 = _this.mo12.gsenos;
            _this.name = _this.mo12.gsenos;
            _this.nam3 = _this.mo12.sparenos;
            _this.namesp = _this.mo12.sparenos;
            _this.nam4 = _this.mo12.toolsnos;
            _this.nametl = _this.mo12.toolsnos;
            _this.nam5 = _this.mo12.consumablenos;
            _this.namecl = _this.mo12.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo12.gsenos != null) {
            }
            if (_this.mo12.sparenos != null) {
            }
            if (_this.mo12.toolsnos != null) {
            }
            if (_this.mo12.consumablenos != null) {
            }
            if (_this.mo12.gsenos == null) {
            }
            if (_this.mo12.sparenos == null) {
            }
            if (_this.mo12.toolsnos == null) {
            }
            if (_this.mo12.consumablenos == null) {
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
    Editmo12Component.prototype.function1 = function (e, id) {
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
    Editmo12Component.prototype.function2 = function (e, id) {
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
    Editmo12Component.prototype.function3 = function (e, id) {
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
    Editmo12Component.prototype.function4 = function (e, id) {
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
    Editmo12Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo12.gsenos = this.copystr;
        this.mo12.sparenos = this.copystrsp;
        this.mo12.toolsnos = this.copystrtl;
        this.mo12.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo12(this.mo12).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/system/mo12']);
            _this.toastr.showInfo(' Mo12 service updation success', 'Mo12 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo12 update'); });
    };
    Editmo12Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo12_mo12_service__WEBPACK_IMPORTED_MODULE_9__["Mo12Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo12Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo12',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo12.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/editmo12/editmo12.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo12.component.css */ "./src/app/views/system/mo12/editmo12/editmo12.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo12_mo12_service__WEBPACK_IMPORTED_MODULE_9__["Mo12Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo12Component);
    return Editmo12Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo12/mo12.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/system/mo12/mo12.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTIvbW8xMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsYUFBYTs7O0FBR2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTIvbW8xMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/system/mo12/mo12.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/system/mo12/mo12.component.ts ***!
  \*****************************************************/
/*! exports provided: Mo12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo12Component", function() { return Mo12Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo12_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo12.model */ "./src/app/views/system/mo12/mo12.model.ts");
/* harmony import */ var _mo12_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mo12.service */ "./src/app/views/system/mo12/mo12.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var Mo12Component = /** @class */ (function () {
    function Mo12Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo12 = new _mo12_model__WEBPACK_IMPORTED_MODULE_5__["Mo12"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo12Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo12');
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
        this._service.countrecordmo12().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo12(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo12 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo12;
        } /*for first mo12*/); /* for first getdata*/
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
    Mo12Component.prototype.ngOnDestroy = function () {
    };
    Mo12Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/system/mo12/editmo12", id]);
    };
    Mo12Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/system/mo12/addmo12"]);
    };
    Mo12Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo12(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo12(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo12 = datasear;
                console.log("to test spare" + _this.mo12);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo12(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo12 = data;
            } /*for first mo12*/); /* for first getdata*/
            this._service.countrecordmo12().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo12Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo12(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo12(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo12(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo12  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo12Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo12().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo12(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo12*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo12Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo12*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo12*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo12*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo12*/); /* for first getdata*/
    };
    Mo12Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo12(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo12(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo12(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo12 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo12 service');
        });
    };
    Mo12Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo12Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(documentDefinition).open();
    };
    Mo12Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo12));
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
    Mo12Component.prototype.getServiceData = function (mo12) {
        console.log('service..' + mo12);
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
                ], mo12.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo12Component.prototype.getGseData = function (gse) {
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
    Mo12Component.prototype.getToolsData = function (tools) {
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
    Mo12Component.prototype.getSpareData = function (spare) {
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
    Mo12Component.prototype.getConsumableData = function (consumable) {
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
    Mo12Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_10__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_11__["ToolsserviceService"] },
        { type: _mo12_service__WEBPACK_IMPORTED_MODULE_6__["Mo12Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
    ]; };
    Mo12Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo12',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo12.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo12/mo12.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo12.component.css */ "./src/app/views/system/mo12/mo12.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_10__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_11__["ToolsserviceService"], _mo12_service__WEBPACK_IMPORTED_MODULE_6__["Mo12Service"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__["GseserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]])
    ], Mo12Component);
    return Mo12Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo12/mo12.model.ts":
/*!*************************************************!*\
  !*** ./src/app/views/system/mo12/mo12.model.ts ***!
  \*************************************************/
/*! exports provided: Mo12, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo12", function() { return Mo12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo12 = /** @class */ (function () {
    function Mo12() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo12;
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

/***/ "./src/app/views/system/mo12/mo12.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/system/mo12/mo12.service.ts ***!
  \***************************************************/
/*! exports provided: Mo12Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo12Service", function() { return Mo12Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo12Service = /** @class */ (function () {
    function Mo12Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo12Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo12Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo12Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo12Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo12Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo12Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo12Service.prototype.fetchUserListFromRemotemo12 = function () {
        return this._http.get("http://localhost:8080/getmo12list");
    };
    Mo12Service.prototype.fetchUserByIdFromRemotemo12 = function (id) {
        return this._http.get("http://localhost:8080/getmo12byid/" + id);
    };
    Mo12Service.prototype.addUsertoRemotemo12 = function (mo12) {
        return this._http.post("http://localhost:8080/addmo12", mo12);
    };
    Mo12Service.prototype.deleteUserByIdFromRemotemo12 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo12byidtest/" + id);
    };
    Mo12Service.prototype.getdatamo12 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo12/page/" + pa + "/" + per);
    };
    Mo12Service.prototype.fetchfindlastmo12 = function () {
        return this._http.get("http://localhost:8080/findlastmo12");
    };
    Mo12Service.prototype.countrecordmo12 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo12");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo12Service.prototype.counteruserecordmo12 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo12?seqno=" + no1);
    };
    Mo12Service.prototype.fetchUserBymo12 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo12/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo12Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo12Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo12Service);
    return Mo12Service;
}());



/***/ }),

/***/ "./src/app/views/system/mo18/addmo18/addmo18.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/system/mo18/addmo18/addmo18.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTgvYWRkbW8xOC9hZGRtbzE4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zeXN0ZW0vbW8xOC9hZGRtbzE4L2FkZG1vMTguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/system/mo18/addmo18/addmo18.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/system/mo18/addmo18/addmo18.component.ts ***!
  \****************************************************************/
/*! exports provided: Addmo18Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo18Component", function() { return Addmo18Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo18_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo18.model */ "./src/app/views/system/mo18/mo18.model.ts");
/* harmony import */ var _mo18_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mo18.service */ "./src/app/views/system/mo18/mo18.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo18Component = /** @class */ (function () {
    function Addmo18Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo18 = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Mo18"]();
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
        this.gse = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    ;
    Addmo18Component.prototype.ngOnInit = function () {
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
    Addmo18Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo18Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo18Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo18Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo18Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo18.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo18.gsenos = '00';
        }
        else {
            this.mo18.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo18.sparenos = '00';
        }
        else {
            this.mo18.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo18.toolsnos = '00';
        }
        else {
            this.mo18.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo18.consumablenos = '00';
        }
        else {
            this.mo18.consumablenos = this.copystrcl;
        }
        console.log(this.mo18.gsenos);
        console.log(this.mo18.gsenos);
        this._service.addUsertoRemotemo18(this.mo18).subscribe(function (data) {
            console.log(_this.mo18.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo18 service added successfully', "Mo18 service");
            _this._router.navigate(['/system/mo18']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo18 service');
        });
    };
    Addmo18Component.prototype.function1 = function (e, id) {
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
    Addmo18Component.prototype.function2 = function (e, id) {
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
    Addmo18Component.prototype.function3 = function (e, id) {
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
    Addmo18Component.prototype.function4 = function (e, id) {
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
    Addmo18Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo18.type = event.target.value;
    };
    Addmo18Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo18_service__WEBPACK_IMPORTED_MODULE_5__["Mo18Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo18Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo18',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo18.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/addmo18/addmo18.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo18.component.css */ "./src/app/views/system/mo18/addmo18/addmo18.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo18_service__WEBPACK_IMPORTED_MODULE_5__["Mo18Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo18Component);
    return Addmo18Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo18/editmo18/editmo18.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/system/mo18/editmo18/editmo18.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTgvZWRpdG1vMTgvZWRpdG1vMTguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzE4L2VkaXRtbzE4L2VkaXRtbzE4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/system/mo18/editmo18/editmo18.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/system/mo18/editmo18/editmo18.component.ts ***!
  \******************************************************************/
/*! exports provided: Editmo18Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo18Component", function() { return Editmo18Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo18_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo18.model */ "./src/app/views/system/mo18/mo18.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _mo18_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mo18.service */ "./src/app/views/system/mo18/mo18.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Editmo18Component = /** @class */ (function () {
    function Editmo18Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.mo18 = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Mo18"]();
        this.spare = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo18_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"];
    }
    Editmo18Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo18(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo18 = data;
            console.log("The gse s are=" + _this.mo18.gsenos);
            console.log(_this.mo18);
            //   console.log("The spares  are="+this.mo18.sparenos);
            _this.nam2 = _this.mo18.gsenos;
            _this.name = _this.mo18.gsenos;
            _this.nam3 = _this.mo18.sparenos;
            _this.namesp = _this.mo18.sparenos;
            _this.nam4 = _this.mo18.toolsnos;
            _this.nametl = _this.mo18.toolsnos;
            _this.nam5 = _this.mo18.consumablenos;
            _this.namecl = _this.mo18.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo18.gsenos != null) {
            }
            if (_this.mo18.sparenos != null) {
            }
            if (_this.mo18.toolsnos != null) {
            }
            if (_this.mo18.consumablenos != null) {
            }
            if (_this.mo18.gsenos == null) {
            }
            if (_this.mo18.sparenos == null) {
            }
            if (_this.mo18.toolsnos == null) {
            }
            if (_this.mo18.consumablenos == null) {
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
    Editmo18Component.prototype.function1 = function (e, id) {
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
    Editmo18Component.prototype.function2 = function (e, id) {
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
    Editmo18Component.prototype.function3 = function (e, id) {
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
    Editmo18Component.prototype.function4 = function (e, id) {
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
    Editmo18Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo18.gsenos = this.copystr;
        this.mo18.sparenos = this.copystrsp;
        this.mo18.toolsnos = this.copystrtl;
        this.mo18.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo18(this.mo18).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/system/mo18']);
            _this.toastr.showInfo('Mo18 service updation success', 'Mo18 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo18 update'); });
    };
    Editmo18Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo18_service__WEBPACK_IMPORTED_MODULE_8__["Mo18Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo18Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo18',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo18.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/editmo18/editmo18.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo18.component.css */ "./src/app/views/system/mo18/editmo18/editmo18.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo18_service__WEBPACK_IMPORTED_MODULE_8__["Mo18Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo18Component);
    return Editmo18Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo18/mo18.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/system/mo18/mo18.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTgvbW8xOC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsYUFBYTs7O0FBR2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMTgvbW8xOC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/system/mo18/mo18.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/system/mo18/mo18.component.ts ***!
  \*****************************************************/
/*! exports provided: Mo18Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo18Component", function() { return Mo18Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo18_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo18.model */ "./src/app/views/system/mo18/mo18.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo18_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo18.service */ "./src/app/views/system/mo18/mo18.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
var Mo18Component = /** @class */ (function () {
    function Mo18Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo18 = new _mo18_model__WEBPACK_IMPORTED_MODULE_5__["Mo18"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo18Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo18');
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
        this._service.countrecordmo18().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo18(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo18 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo18;
        } /*for first mo18*/); /* for first getdata*/
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
    Mo18Component.prototype.ngOnDestroy = function () {
    };
    Mo18Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/system/mo18/editmo18", id]);
    };
    Mo18Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/system/mo18/addmo18"]);
    };
    Mo18Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo18(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo18(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo18 = datasear;
                console.log("to test spare" + _this.mo18);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo18(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo18 = data;
            } /*for first mo18*/); /* for first getdata*/
            this._service.countrecordmo18().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo18Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo18(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo18(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo18(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo18  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo18Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo18().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo18(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo18*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo18Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo18*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo18*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo18*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo18*/); /* for first getdata*/
    };
    Mo18Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo18(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo18(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo18(_this.x, 6).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo18 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo18 service');
        });
    };
    Mo18Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo18Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(documentDefinition).open();
    };
    Mo18Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo18));
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
    Mo18Component.prototype.getServiceData = function (mo18) {
        console.log('service..' + mo18);
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
                ], mo18.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo18Component.prototype.getGseData = function (gse) {
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
    Mo18Component.prototype.getToolsData = function (tools) {
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
    Mo18Component.prototype.getSpareData = function (spare) {
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
    Mo18Component.prototype.getConsumableData = function (consumable) {
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
    Mo18Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo18_service__WEBPACK_IMPORTED_MODULE_8__["Mo18Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo18Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo18',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo18.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo18/mo18.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo18.component.css */ "./src/app/views/system/mo18/mo18.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo18_service__WEBPACK_IMPORTED_MODULE_8__["Mo18Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo18Component);
    return Mo18Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo18/mo18.model.ts":
/*!*************************************************!*\
  !*** ./src/app/views/system/mo18/mo18.model.ts ***!
  \*************************************************/
/*! exports provided: Mo18, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo18", function() { return Mo18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo18 = /** @class */ (function () {
    function Mo18() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo18;
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

/***/ "./src/app/views/system/mo18/mo18.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/system/mo18/mo18.service.ts ***!
  \***************************************************/
/*! exports provided: Mo18Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo18Service", function() { return Mo18Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo18Service = /** @class */ (function () {
    function Mo18Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo18Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo18Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo18Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo18Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo18Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo18Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo18Service.prototype.fetchUserListFromRemotemo18 = function () {
        return this._http.get("http://localhost:8080/getmo18list");
    };
    Mo18Service.prototype.fetchUserByIdFromRemotemo18 = function (id) {
        return this._http.get("http://localhost:8080/getmo18byid/" + id);
    };
    Mo18Service.prototype.addUsertoRemotemo18 = function (mo18) {
        return this._http.post("http://localhost:8080/addmo18", mo18);
    };
    Mo18Service.prototype.deleteUserByIdFromRemotemo18 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo18byidtest/" + id);
    };
    Mo18Service.prototype.getdatamo18 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo18/page/" + pa + "/" + per);
    };
    Mo18Service.prototype.fetchfindlastmo18 = function () {
        return this._http.get("http://localhost:8080/findlastmo18");
    };
    Mo18Service.prototype.countrecordmo18 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo12");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo18Service.prototype.counteruserecordmo18 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo18?seqno=" + no1);
    };
    Mo18Service.prototype.fetchUserBymo18 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo18/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo18Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo18Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo18Service);
    return Mo18Service;
}());



/***/ }),

/***/ "./src/app/views/system/mo24/addmo24/addmo24.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/system/mo24/addmo24/addmo24.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMjQvYWRkbW8yNC9hZGRtbzI0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zeXN0ZW0vbW8yNC9hZGRtbzI0L2FkZG1vMjQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/system/mo24/addmo24/addmo24.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/system/mo24/addmo24/addmo24.component.ts ***!
  \****************************************************************/
/*! exports provided: Addmo24Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo24Component", function() { return Addmo24Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo24_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mo24.model */ "./src/app/views/system/mo24/mo24.model.ts");
/* harmony import */ var _mo24_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mo24.service */ "./src/app/views/system/mo24/mo24.service.ts");











var Addmo24Component = /** @class */ (function () {
    function Addmo24Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo24 = new _mo24_model__WEBPACK_IMPORTED_MODULE_9__["Mo24"]();
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
        this.gse = new _mo24_model__WEBPACK_IMPORTED_MODULE_9__["Gse"]();
        this.spare = new _mo24_model__WEBPACK_IMPORTED_MODULE_9__["Spare"]();
        this.tools = new _mo24_model__WEBPACK_IMPORTED_MODULE_9__["Tools"]();
        this.consumable = new _mo24_model__WEBPACK_IMPORTED_MODULE_9__["Consumable"]();
    }
    ;
    Addmo24Component.prototype.ngOnInit = function () {
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
    Addmo24Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo24Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo24Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo24Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo24Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo24.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo24.gsenos = '00';
        }
        else {
            this.mo24.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo24.sparenos = '00';
        }
        else {
            this.mo24.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo24.toolsnos = '00';
        }
        else {
            this.mo24.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo24.consumablenos = '00';
        }
        else {
            this.mo24.consumablenos = this.copystrcl;
        }
        this._service.addUsertoRemotemo24(this.mo24).subscribe(function (data) {
            console.log(_this.mo24.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo24 service added successfully', "Mo24 service");
            _this._router.navigate(['/system/mo24']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo24 service');
        });
    };
    Addmo24Component.prototype.function1 = function (e, id) {
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
    Addmo24Component.prototype.function2 = function (e, id) {
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
    Addmo24Component.prototype.function3 = function (e, id) {
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
    Addmo24Component.prototype.function4 = function (e, id) {
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
    Addmo24Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo24.type = event.target.value;
    };
    Addmo24Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"] },
        { type: _mo24_service__WEBPACK_IMPORTED_MODULE_10__["Mo24Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    Addmo24Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-addmo24',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo24.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/addmo24/addmo24.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo24.component.css */ "./src/app/views/system/mo24/addmo24/addmo24.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"], _mo24_service__WEBPACK_IMPORTED_MODULE_10__["Mo24Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], Addmo24Component);
    return Addmo24Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo24/editmo24/editmo24.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/system/mo24/editmo24/editmo24.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMjQvZWRpdG1vMjQvZWRpdG1vMjQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzI0L2VkaXRtbzI0L2VkaXRtbzI0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/system/mo24/editmo24/editmo24.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/system/mo24/editmo24/editmo24.component.ts ***!
  \******************************************************************/
/*! exports provided: Editmo24Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo24Component", function() { return Editmo24Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo24_mo24_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mo24/mo24.model */ "./src/app/views/system/mo24/mo24.model.ts");
/* harmony import */ var _mo24_mo24_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mo24/mo24.service */ "./src/app/views/system/mo24/mo24.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;









var Editmo24Component = /** @class */ (function () {
    function Editmo24Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _mo24_mo24_model__WEBPACK_IMPORTED_MODULE_8__["Gse"]();
        this.mo24 = new _mo24_mo24_model__WEBPACK_IMPORTED_MODULE_8__["Mo24"]();
        this.spare = new _mo24_mo24_model__WEBPACK_IMPORTED_MODULE_8__["Spare"]();
        this.tools = new _mo24_mo24_model__WEBPACK_IMPORTED_MODULE_8__["Tools"]();
        this.consumable = new _mo24_mo24_model__WEBPACK_IMPORTED_MODULE_8__["Consumable"];
    }
    Editmo24Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo24(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo24 = data;
            console.log("The gse s are=" + _this.mo24.gsenos);
            console.log(_this.mo24);
            //   console.log("The spares  are="+this.mo24.sparenos);
            _this.nam2 = _this.mo24.gsenos;
            _this.name = _this.mo24.gsenos;
            _this.nam3 = _this.mo24.sparenos;
            _this.namesp = _this.mo24.sparenos;
            _this.nam4 = _this.mo24.toolsnos;
            _this.nametl = _this.mo24.toolsnos;
            _this.nam5 = _this.mo24.consumablenos;
            _this.namecl = _this.mo24.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo24.gsenos != null) {
            }
            if (_this.mo24.sparenos != null) {
            }
            if (_this.mo24.toolsnos != null) {
            }
            if (_this.mo24.consumablenos != null) {
            }
            if (_this.mo24.gsenos == null) {
            }
            if (_this.mo24.sparenos == null) {
            }
            if (_this.mo24.toolsnos == null) {
            }
            if (_this.mo24.consumablenos == null) {
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
    Editmo24Component.prototype.function1 = function (e, id) {
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
    Editmo24Component.prototype.function2 = function (e, id) {
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
    Editmo24Component.prototype.function3 = function (e, id) {
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
    Editmo24Component.prototype.function4 = function (e, id) {
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
    Editmo24Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo24.gsenos = this.copystr;
        this.mo24.sparenos = this.copystrsp;
        this.mo24.toolsnos = this.copystrtl;
        this.mo24.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo24(this.mo24).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/system/mo24']);
            _this.toastr.showInfo('Mo24 service updation success', 'Mo24 update');
        }, function (error) { return function (error) { return _this.toastr.showError(error, 'Mo24 update'); }; });
    };
    Editmo24Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo24_mo24_service__WEBPACK_IMPORTED_MODULE_9__["Mo24Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo24Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo24',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo24.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/editmo24/editmo24.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo24.component.css */ "./src/app/views/system/mo24/editmo24/editmo24.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo24_mo24_service__WEBPACK_IMPORTED_MODULE_9__["Mo24Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo24Component);
    return Editmo24Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo24/mo24.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/system/mo24/mo24.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMjQvbW8yNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsYUFBYTs7O0FBR2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMjQvbW8yNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/system/mo24/mo24.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/system/mo24/mo24.component.ts ***!
  \*****************************************************/
/*! exports provided: Mo24Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo24Component", function() { return Mo24Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo24_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo24.model */ "./src/app/views/system/mo24/mo24.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo24_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo24.service */ "./src/app/views/system/mo24/mo24.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
var Mo24Component = /** @class */ (function () {
    function Mo24Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo24 = new _mo24_model__WEBPACK_IMPORTED_MODULE_5__["Mo24"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo24Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo24');
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
        this._service.countrecordmo24().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo24(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo24 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo24;
        } /*for first mo24*/); /* for first getdata*/
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
    Mo24Component.prototype.ngOnDestroy = function () {
    };
    Mo24Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/system/mo24/editmo24", id]);
    };
    Mo24Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/system/mo24/addmo24"]);
    };
    Mo24Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo24(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo24(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo24 = datasear;
                console.log("to test spare" + _this.mo24);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo24(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo24 = data;
            } /*for first mo24*/); /* for first getdata*/
            this._service.countrecordmo24().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo24Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo24(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo24(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo24(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo24  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo24Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo24().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo24(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo24*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo24Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo24*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo24*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo24*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo24*/); /* for first getdata*/
    };
    Mo24Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo24(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo24(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo24(_this.x, 6).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo24 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo24 service');
        });
    };
    Mo24Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo24Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(documentDefinition).open();
    };
    Mo24Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo24));
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
    Mo24Component.prototype.getServiceData = function (mo24) {
        console.log('service..' + mo24);
        return {
            table: {
                width: ['*', '*', '*', '*', '*', '*', '*', '*'],
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
                ], mo24.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo24Component.prototype.getGseData = function (gse) {
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
    Mo24Component.prototype.getToolsData = function (tools) {
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
    Mo24Component.prototype.getSpareData = function (spare) {
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
    Mo24Component.prototype.getConsumableData = function (consumable) {
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
    Mo24Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo24_service__WEBPACK_IMPORTED_MODULE_8__["Mo24Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo24Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo24',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo24.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo24/mo24.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo24.component.css */ "./src/app/views/system/mo24/mo24.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo24_service__WEBPACK_IMPORTED_MODULE_8__["Mo24Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo24Component);
    return Mo24Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo24/mo24.model.ts":
/*!*************************************************!*\
  !*** ./src/app/views/system/mo24/mo24.model.ts ***!
  \*************************************************/
/*! exports provided: Mo24, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo24", function() { return Mo24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo24 = /** @class */ (function () {
    function Mo24() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo24;
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

/***/ "./src/app/views/system/mo24/mo24.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/system/mo24/mo24.service.ts ***!
  \***************************************************/
/*! exports provided: Mo24Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo24Service", function() { return Mo24Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo24Service = /** @class */ (function () {
    function Mo24Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo24Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo24Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo24Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo24Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo24Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo24Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo24Service.prototype.fetchUserListFromRemotemo24 = function () {
        return this._http.get("http://localhost:8080/getmo24list");
    };
    Mo24Service.prototype.fetchUserByIdFromRemotemo24 = function (id) {
        return this._http.get("http://localhost:8080/getmo24byid/" + id);
    };
    Mo24Service.prototype.addUsertoRemotemo24 = function (mo24) {
        return this._http.post("http://localhost:8080/addmo24", mo24);
    };
    Mo24Service.prototype.deleteUserByIdFromRemotemo24 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo24byidtest/" + id);
    };
    Mo24Service.prototype.getdatamo24 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo24/page/" + pa + "/" + per);
    };
    Mo24Service.prototype.fetchfindlastmo24 = function () {
        return this._http.get("http://localhost:8080/findlastmo24");
    };
    Mo24Service.prototype.countrecordmo24 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo24");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo24Service.prototype.counteruserecordmo24 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo24?seqno=" + no1);
    };
    Mo24Service.prototype.fetchUserBymo24 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo24/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo24Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo24Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo24Service);
    return Mo24Service;
}());



/***/ }),

/***/ "./src/app/views/system/mo36/addmo36/addmo36.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/system/mo36/addmo36/addmo36.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMzYvYWRkbW8zNi9hZGRtbzM2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zeXN0ZW0vbW8zNi9hZGRtbzM2L2FkZG1vMzYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/system/mo36/addmo36/addmo36.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/system/mo36/addmo36/addmo36.component.ts ***!
  \****************************************************************/
/*! exports provided: Addmo36Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo36Component", function() { return Addmo36Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo36_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mo36.model */ "./src/app/views/system/mo36/mo36.model.ts");
/* harmony import */ var _mo36_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mo36.service */ "./src/app/views/system/mo36/mo36.service.ts");











var Addmo36Component = /** @class */ (function () {
    function Addmo36Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo36 = new _mo36_model__WEBPACK_IMPORTED_MODULE_9__["Mo36"]();
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
        this.gse = new _mo36_model__WEBPACK_IMPORTED_MODULE_9__["Gse"]();
        this.spare = new _mo36_model__WEBPACK_IMPORTED_MODULE_9__["Spare"]();
        this.tools = new _mo36_model__WEBPACK_IMPORTED_MODULE_9__["Tools"]();
        this.consumable = new _mo36_model__WEBPACK_IMPORTED_MODULE_9__["Consumable"]();
    }
    ;
    Addmo36Component.prototype.ngOnInit = function () {
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
    Addmo36Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo36Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo36Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo36Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo36Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo36.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo36.gsenos = '00';
        }
        else {
            this.mo36.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo36.sparenos = '00';
        }
        else {
            this.mo36.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo36.toolsnos = '00';
        }
        else {
            this.mo36.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo36.consumablenos = '00';
        }
        else {
            this.mo36.consumablenos = this.copystrcl;
        }
        this._service.addUsertoRemotemo36(this.mo36).subscribe(function (data) {
            console.log(_this.mo36.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo36 service added successfully', "Mo36 service");
            _this._router.navigate(['/system/mo36']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo36 service');
        });
    };
    Addmo36Component.prototype.function1 = function (e, id) {
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
    Addmo36Component.prototype.function2 = function (e, id) {
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
    Addmo36Component.prototype.function3 = function (e, id) {
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
    Addmo36Component.prototype.function4 = function (e, id) {
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
    Addmo36Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo36.type = event.target.value;
    };
    Addmo36Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"] },
        { type: _mo36_service__WEBPACK_IMPORTED_MODULE_10__["Mo36Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    Addmo36Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-addmo36',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo36.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/addmo36/addmo36.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo36.component.css */ "./src/app/views/system/mo36/addmo36/addmo36.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"], _mo36_service__WEBPACK_IMPORTED_MODULE_10__["Mo36Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], Addmo36Component);
    return Addmo36Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo36/editmo36/editmo36.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/system/mo36/editmo36/editmo36.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMzYvZWRpdG1vMzYvZWRpdG1vMzYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzM2L2VkaXRtbzM2L2VkaXRtbzM2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/system/mo36/editmo36/editmo36.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/system/mo36/editmo36/editmo36.component.ts ***!
  \******************************************************************/
/*! exports provided: Editmo36Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo36Component", function() { return Editmo36Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo36_mo36_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mo36/mo36.model */ "./src/app/views/system/mo36/mo36.model.ts");
/* harmony import */ var _mo36_mo36_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mo36/mo36.service */ "./src/app/views/system/mo36/mo36.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Editmo36Component = /** @class */ (function () {
    function Editmo36Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _mo36_mo36_model__WEBPACK_IMPORTED_MODULE_8__["Gse"]();
        this.mo36 = new _mo36_mo36_model__WEBPACK_IMPORTED_MODULE_8__["Mo36"]();
        this.spare = new _mo36_mo36_model__WEBPACK_IMPORTED_MODULE_8__["Spare"]();
        this.tools = new _mo36_mo36_model__WEBPACK_IMPORTED_MODULE_8__["Tools"]();
        this.consumable = new _mo36_mo36_model__WEBPACK_IMPORTED_MODULE_8__["Consumable"];
    }
    Editmo36Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo36(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo36 = data;
            console.log("The gse s are=" + _this.mo36.gsenos);
            console.log(_this.mo36);
            //   console.log("The spares  are="+this.mo36.sparenos);
            _this.nam2 = _this.mo36.gsenos;
            _this.name = _this.mo36.gsenos;
            _this.nam3 = _this.mo36.sparenos;
            _this.namesp = _this.mo36.sparenos;
            _this.nam4 = _this.mo36.toolsnos;
            _this.nametl = _this.mo36.toolsnos;
            _this.nam5 = _this.mo36.consumablenos;
            _this.namecl = _this.mo36.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo36.gsenos != null) {
            }
            if (_this.mo36.sparenos != null) {
            }
            if (_this.mo36.toolsnos != null) {
            }
            if (_this.mo36.consumablenos != null) {
            }
            if (_this.mo36.gsenos == null) {
            }
            if (_this.mo36.sparenos == null) {
            }
            if (_this.mo36.toolsnos == null) {
            }
            if (_this.mo36.consumablenos == null) {
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
    Editmo36Component.prototype.function1 = function (e, id) {
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
    Editmo36Component.prototype.function2 = function (e, id) {
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
    Editmo36Component.prototype.function3 = function (e, id) {
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
    Editmo36Component.prototype.function4 = function (e, id) {
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
    Editmo36Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo36.gsenos = this.copystr;
        this.mo36.sparenos = this.copystrsp;
        this.mo36.toolsnos = this.copystrtl;
        this.mo36.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo36(this.mo36).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/system/mo36']);
            _this.toastr.showInfo('Mo36 service updation success', 'Mo36 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo36 update'); });
    };
    Editmo36Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo36_mo36_service__WEBPACK_IMPORTED_MODULE_9__["Mo36Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo36Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo36',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo36.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/editmo36/editmo36.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo36.component.css */ "./src/app/views/system/mo36/editmo36/editmo36.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo36_mo36_service__WEBPACK_IMPORTED_MODULE_9__["Mo36Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo36Component);
    return Editmo36Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo36/mo36.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/system/mo36/mo36.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMzYvbW8zNi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsYUFBYTs7O0FBR2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc3lzdGVtL21vMzYvbW8zNi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/system/mo36/mo36.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/system/mo36/mo36.component.ts ***!
  \*****************************************************/
/*! exports provided: Mo36Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo36Component", function() { return Mo36Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo36_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo36.model */ "./src/app/views/system/mo36/mo36.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo36_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo36.service */ "./src/app/views/system/mo36/mo36.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
var Mo36Component = /** @class */ (function () {
    function Mo36Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo36 = new _mo36_model__WEBPACK_IMPORTED_MODULE_5__["Mo36"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo36Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo36');
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
        this._service.countrecordmo36().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo36(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo36 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo36;
        } /*for first mo36*/); /* for first getdata*/
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
    Mo36Component.prototype.ngOnDestroy = function () {
    };
    Mo36Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/system/mo36/editmo36", id]);
    };
    Mo36Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/system/mo36/addmo36"]);
    };
    Mo36Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo36(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo36(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo36 = datasear;
                console.log("to test spare" + _this.mo36);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo36(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo36 = data;
            } /*for first mo36*/); /* for first getdata*/
            this._service.countrecordmo36().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo36Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo36(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo36(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo36(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo36  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo36Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo36().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo36(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo36*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo36Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo36*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo36*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo36*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo36*/); /* for first getdata*/
    };
    Mo36Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo36(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo36(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo36(_this.x, 6).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo36 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo36 service');
        });
    };
    Mo36Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo36Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(documentDefinition).open();
    };
    Mo36Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo36));
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
    Mo36Component.prototype.getServiceData = function (mo36) {
        console.log('service..' + mo36);
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
                ], mo36.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo36Component.prototype.getGseData = function (gse) {
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
    Mo36Component.prototype.getToolsData = function (tools) {
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
    Mo36Component.prototype.getSpareData = function (spare) {
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
    Mo36Component.prototype.getConsumableData = function (consumable) {
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
    Mo36Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo36_service__WEBPACK_IMPORTED_MODULE_8__["Mo36Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo36Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo36',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo36.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo36/mo36.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo36.component.css */ "./src/app/views/system/mo36/mo36.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo36_service__WEBPACK_IMPORTED_MODULE_8__["Mo36Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo36Component);
    return Mo36Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo36/mo36.model.ts":
/*!*************************************************!*\
  !*** ./src/app/views/system/mo36/mo36.model.ts ***!
  \*************************************************/
/*! exports provided: Mo36, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo36", function() { return Mo36; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo36 = /** @class */ (function () {
    function Mo36() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo36;
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

/***/ "./src/app/views/system/mo36/mo36.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/system/mo36/mo36.service.ts ***!
  \***************************************************/
/*! exports provided: Mo36Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo36Service", function() { return Mo36Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo36Service = /** @class */ (function () {
    function Mo36Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo36Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo36Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo36Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo36Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo36Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo36Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo36Service.prototype.fetchUserListFromRemotemo36 = function () {
        return this._http.get("http://localhost:8080/getmo36list");
    };
    Mo36Service.prototype.fetchUserByIdFromRemotemo36 = function (id) {
        return this._http.get("http://localhost:8080/getmo36byid/" + id);
    };
    Mo36Service.prototype.addUsertoRemotemo36 = function (mo36) {
        return this._http.post("http://localhost:8080/addmo36", mo36);
    };
    Mo36Service.prototype.deleteUserByIdFromRemotemo36 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo36byidtest/" + id);
    };
    Mo36Service.prototype.getdatamo36 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo36/page/" + pa + "/" + per);
    };
    Mo36Service.prototype.fetchfindlastmo36 = function () {
        return this._http.get("http://localhost:8080/findlastmo36");
    };
    Mo36Service.prototype.countrecordmo36 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo36");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo36Service.prototype.counteruserecordmo36 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo36?seqno=" + no1);
    };
    Mo36Service.prototype.fetchUserBymo36 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo36/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo36Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo36Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo36Service);
    return Mo36Service;
}());



/***/ }),

/***/ "./src/app/views/system/mo48/addmo48/addmo48.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/system/mo48/addmo48/addmo48.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzQ4L2FkZG1vNDgvYWRkbW80OC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/system/mo48/addmo48/addmo48.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/system/mo48/addmo48/addmo48.component.ts ***!
  \****************************************************************/
/*! exports provided: Addmo48Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo48Component", function() { return Addmo48Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo48_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mo48.model */ "./src/app/views/system/mo48/mo48.model.ts");
/* harmony import */ var _mo48_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mo48.service */ "./src/app/views/system/mo48/mo48.service.ts");











var Addmo48Component = /** @class */ (function () {
    function Addmo48Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo48 = new _mo48_model__WEBPACK_IMPORTED_MODULE_9__["Mo48"]();
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
        this.gse = new _mo48_model__WEBPACK_IMPORTED_MODULE_9__["Gse"]();
        this.spare = new _mo48_model__WEBPACK_IMPORTED_MODULE_9__["Spare"]();
        this.tools = new _mo48_model__WEBPACK_IMPORTED_MODULE_9__["Tools"]();
        this.consumable = new _mo48_model__WEBPACK_IMPORTED_MODULE_9__["Consumable"]();
    }
    ;
    Addmo48Component.prototype.ngOnInit = function () {
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
    Addmo48Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo48Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo48Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo48Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo48Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo48.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo48.gsenos = '00';
        }
        else {
            this.mo48.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo48.sparenos = '00';
        }
        else {
            this.mo48.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo48.toolsnos = '00';
        }
        else {
            this.mo48.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo48.consumablenos = '00';
        }
        else {
            this.mo48.consumablenos = this.copystrcl;
        }
        this._service.addUsertoRemotemo48(this.mo48).subscribe(function (data) {
            console.log(_this.mo48.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo48 service added successfully', "Mo48 service");
            _this._router.navigate(['/system/mo48']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo48 service');
        });
    };
    Addmo48Component.prototype.function1 = function (e, id) {
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
    Addmo48Component.prototype.function2 = function (e, id) {
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
    Addmo48Component.prototype.function3 = function (e, id) {
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
    Addmo48Component.prototype.function4 = function (e, id) {
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
    Addmo48Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo48.type = event.target.value;
    };
    Addmo48Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"] },
        { type: _mo48_service__WEBPACK_IMPORTED_MODULE_10__["Mo48Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    Addmo48Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-addmo48',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo48.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/addmo48/addmo48.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo48.component.css */ "./src/app/views/system/mo48/addmo48/addmo48.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"], _mo48_service__WEBPACK_IMPORTED_MODULE_10__["Mo48Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], Addmo48Component);
    return Addmo48Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo48/editmo48/editmo48.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/system/mo48/editmo48/editmo48.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzQ4L2VkaXRtbzQ4L2VkaXRtbzQ4LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/system/mo48/editmo48/editmo48.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/system/mo48/editmo48/editmo48.component.ts ***!
  \******************************************************************/
/*! exports provided: Editmo48Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo48Component", function() { return Editmo48Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo48_mo48_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mo48/mo48.model */ "./src/app/views/system/mo48/mo48.model.ts");
/* harmony import */ var _mo48_mo48_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mo48/mo48.service */ "./src/app/views/system/mo48/mo48.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;









var Editmo48Component = /** @class */ (function () {
    function Editmo48Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _mo48_mo48_model__WEBPACK_IMPORTED_MODULE_8__["Gse"]();
        this.mo48 = new _mo48_mo48_model__WEBPACK_IMPORTED_MODULE_8__["Mo48"]();
        this.spare = new _mo48_mo48_model__WEBPACK_IMPORTED_MODULE_8__["Spare"]();
        this.tools = new _mo48_mo48_model__WEBPACK_IMPORTED_MODULE_8__["Tools"]();
        this.consumable = new _mo48_mo48_model__WEBPACK_IMPORTED_MODULE_8__["Consumable"];
    }
    Editmo48Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo48(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo48 = data;
            console.log("The gse s are=" + _this.mo48.gsenos);
            console.log(_this.mo48);
            //   console.log("The spares  are="+this.mo48.sparenos);
            _this.nam2 = _this.mo48.gsenos;
            _this.name = _this.mo48.gsenos;
            _this.nam3 = _this.mo48.sparenos;
            _this.namesp = _this.mo48.sparenos;
            _this.nam4 = _this.mo48.toolsnos;
            _this.nametl = _this.mo48.toolsnos;
            _this.nam5 = _this.mo48.consumablenos;
            _this.namecl = _this.mo48.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo48.gsenos != null) {
            }
            if (_this.mo48.sparenos != null) {
            }
            if (_this.mo48.toolsnos != null) {
            }
            if (_this.mo48.consumablenos != null) {
            }
            if (_this.mo48.gsenos == null) {
            }
            if (_this.mo48.sparenos == null) {
            }
            if (_this.mo48.toolsnos == null) {
            }
            if (_this.mo48.consumablenos == null) {
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
    Editmo48Component.prototype.function1 = function (e, id) {
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
    Editmo48Component.prototype.function2 = function (e, id) {
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
    Editmo48Component.prototype.function3 = function (e, id) {
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
    Editmo48Component.prototype.function4 = function (e, id) {
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
    Editmo48Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo48.gsenos = this.copystr;
        this.mo48.sparenos = this.copystrsp;
        this.mo48.toolsnos = this.copystrtl;
        this.mo48.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo48(this.mo48).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/system/mo48']);
            _this.toastr.showInfo('Mo48 service updation success', 'Mo48 update');
        }, function (error) { return _this.toastr.showError(error, 'Mo48 update'); });
    };
    Editmo48Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo48_mo48_service__WEBPACK_IMPORTED_MODULE_9__["Mo48Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo48Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo48',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo48.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/editmo48/editmo48.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo48.component.css */ "./src/app/views/system/mo48/editmo48/editmo48.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo48_mo48_service__WEBPACK_IMPORTED_MODULE_9__["Mo48Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo48Component);
    return Editmo48Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo48/mo48.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/system/mo48/mo48.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzQ4L21vNDguY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/system/mo48/mo48.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/system/mo48/mo48.component.ts ***!
  \*****************************************************/
/*! exports provided: Mo48Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo48Component", function() { return Mo48Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo48_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo48.model */ "./src/app/views/system/mo48/mo48.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo48_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo48.service */ "./src/app/views/system/mo48/mo48.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
var Mo48Component = /** @class */ (function () {
    function Mo48Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo48 = new _mo48_model__WEBPACK_IMPORTED_MODULE_5__["Mo48"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo48Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo48');
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
        this._service.countrecordmo48().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo48(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo48 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo48;
        } /*for first mo48*/); /* for first getdata*/
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
    Mo48Component.prototype.ngOnDestroy = function () {
    };
    Mo48Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/system/mo48/editmo48", id]);
    };
    Mo48Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/system/mo48/addmo48"]);
    };
    Mo48Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo48(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo48(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo48 = datasear;
                console.log("to test spare" + _this.mo48);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo48(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo48 = data;
            } /*for first mo48*/); /* for first getdata*/
            this._service.countrecordmo48().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo48Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo48(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo48(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo48(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo48  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo48Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo48().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo48(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo48*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo48Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo48*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo48*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo48*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo48*/); /* for first getdata*/
    };
    Mo48Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo48(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo48(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo48(_this.x, 6).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo48 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo48 service');
        });
    };
    Mo48Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo48Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(documentDefinition).open();
    };
    Mo48Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo48));
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
    Mo48Component.prototype.getServiceData = function (mo48) {
        console.log('service..' + mo48);
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
                ], mo48.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo48Component.prototype.getGseData = function (gse) {
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
    Mo48Component.prototype.getToolsData = function (tools) {
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
    Mo48Component.prototype.getSpareData = function (spare) {
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
    Mo48Component.prototype.getConsumableData = function (consumable) {
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
    Mo48Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo48_service__WEBPACK_IMPORTED_MODULE_8__["Mo48Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo48Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo48',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo48.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo48/mo48.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo48.component.css */ "./src/app/views/system/mo48/mo48.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo48_service__WEBPACK_IMPORTED_MODULE_8__["Mo48Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo48Component);
    return Mo48Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo48/mo48.model.ts":
/*!*************************************************!*\
  !*** ./src/app/views/system/mo48/mo48.model.ts ***!
  \*************************************************/
/*! exports provided: Mo48, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo48", function() { return Mo48; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo48 = /** @class */ (function () {
    function Mo48() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo48;
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

/***/ "./src/app/views/system/mo48/mo48.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/system/mo48/mo48.service.ts ***!
  \***************************************************/
/*! exports provided: Mo48Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo48Service", function() { return Mo48Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo48Service = /** @class */ (function () {
    function Mo48Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo48Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo48Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo48Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo48Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo48Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo48Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo48Service.prototype.fetchUserListFromRemotemo48 = function () {
        return this._http.get("http://localhost:8080/getmo48list");
    };
    Mo48Service.prototype.fetchUserByIdFromRemotemo48 = function (id) {
        return this._http.get("http://localhost:8080/getmo48byid/" + id);
    };
    Mo48Service.prototype.addUsertoRemotemo48 = function (mo48) {
        return this._http.post("http://localhost:8080/addmo48", mo48);
    };
    Mo48Service.prototype.deleteUserByIdFromRemotemo48 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo48byidtest/" + id);
    };
    Mo48Service.prototype.getdatamo48 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo48/page/" + pa + "/" + per);
    };
    Mo48Service.prototype.fetchfindlastmo48 = function () {
        return this._http.get("http://localhost:8080/findlastmo48");
    };
    Mo48Service.prototype.countrecordmo48 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo48");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo48Service.prototype.counteruserecordmo48 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo48?seqno=" + no1);
    };
    Mo48Service.prototype.fetchUserBymo48 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo48/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo48Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo48Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo48Service);
    return Mo48Service;
}());



/***/ }),

/***/ "./src/app/views/system/mo6/addmo6/addmo6.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/system/mo6/addmo6/addmo6.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vNi9hZGRtbzYvYWRkbW82LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zeXN0ZW0vbW82L2FkZG1vNi9hZGRtbzYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/system/mo6/addmo6/addmo6.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/system/mo6/addmo6/addmo6.component.ts ***!
  \*************************************************************/
/*! exports provided: Addmo6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo6Component", function() { return Addmo6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo6_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo6.model */ "./src/app/views/system/mo6/mo6.model.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo6_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mo6.service */ "./src/app/views/system/mo6/mo6.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo6Component = /** @class */ (function () {
    function Addmo6Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo6 = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Mo6"]();
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
        this.gse = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    ;
    Addmo6Component.prototype.ngOnInit = function () {
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
    Addmo6Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo6Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo6Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo6Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo6Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo6.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo6.gsenos = '00';
        }
        else {
            this.mo6.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo6.sparenos = '00';
        }
        else {
            this.mo6.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo6.toolsnos = '00';
        }
        else {
            this.mo6.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo6.consumablenos = '00';
        }
        else {
            this.mo6.consumablenos = this.copystrcl;
        }
        console.log(this.mo6.gsenos);
        console.log(this.mo6.gsenos);
        this._service.addUsertoRemotemo6(this.mo6).subscribe(function (data) {
            console.log(_this.mo6.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo6 service added successfully', "Mo6 service");
            _this._router.navigate(['/system/mo6']);
        }, function (error) {
            console.log("error");
            console.log(error);
            _this.toastr.showError(error, 'Mo6 service');
        });
    };
    Addmo6Component.prototype.function1 = function (e, id) {
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
    Addmo6Component.prototype.function2 = function (e, id) {
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
    Addmo6Component.prototype.function3 = function (e, id) {
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
    Addmo6Component.prototype.function4 = function (e, id) {
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
    Addmo6Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo6.type = event.target.value;
    };
    Addmo6Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _mo6_service__WEBPACK_IMPORTED_MODULE_9__["Mo6Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo6Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo6',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo6.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/addmo6/addmo6.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo6.component.css */ "./src/app/views/system/mo6/addmo6/addmo6.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _mo6_service__WEBPACK_IMPORTED_MODULE_9__["Mo6Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_8__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo6Component);
    return Addmo6Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo6/editmo6/editmo6.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/system/mo6/editmo6/editmo6.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vNi9lZGl0bW82L2VkaXRtbzYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzYvZWRpdG1vNi9lZGl0bW82LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/system/mo6/editmo6/editmo6.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/system/mo6/editmo6/editmo6.component.ts ***!
  \***************************************************************/
/*! exports provided: Editmo6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo6Component", function() { return Editmo6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo6_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo6.model */ "./src/app/views/system/mo6/mo6.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _mo6_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mo6.service */ "./src/app/views/system/mo6/mo6.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Editmo6Component = /** @class */ (function () {
    function Editmo6Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.mo6 = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Mo6"]();
        this.spare = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo6_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"];
    }
    Editmo6Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo6(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo6 = data;
            console.log("The gse s are=" + _this.mo6.gsenos);
            console.log(_this.mo6);
            //   console.log("The spares  are="+this.mo6.sparenos);
            _this.nam2 = _this.mo6.gsenos;
            _this.name = _this.mo6.gsenos;
            _this.nam3 = _this.mo6.sparenos;
            _this.namesp = _this.mo6.sparenos;
            _this.nam4 = _this.mo6.toolsnos;
            _this.nametl = _this.mo6.toolsnos;
            _this.nam5 = _this.mo6.consumablenos;
            _this.namecl = _this.mo6.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo6.gsenos != null) {
            }
            if (_this.mo6.sparenos != null) {
            }
            if (_this.mo6.toolsnos != null) {
            }
            if (_this.mo6.consumablenos != null) {
            }
            if (_this.mo6.gsenos == null) {
            }
            if (_this.mo6.sparenos == null) {
            }
            if (_this.mo6.toolsnos == null) {
            }
            if (_this.mo6.consumablenos == null) {
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
    Editmo6Component.prototype.function1 = function (e, id) {
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
    Editmo6Component.prototype.function2 = function (e, id) {
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
    Editmo6Component.prototype.function3 = function (e, id) {
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
    Editmo6Component.prototype.function4 = function (e, id) {
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
    Editmo6Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo6.gsenos = this.copystr;
        this.mo6.sparenos = this.copystrsp;
        this.mo6.toolsnos = this.copystrtl;
        this.mo6.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo6(this.mo6).subscribe(function (data) {
            console.log("data edited successfully");
            _this.toastr.showInfo(' service updation success', 'Mo6 update');
            _this._router.navigate(['/system/mo6']);
        }, function (error) { return _this.toastr.showError(error, ' Mo6 update'); });
    };
    Editmo6Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo6_service__WEBPACK_IMPORTED_MODULE_8__["Mo6Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo6Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo6',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo6.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/editmo6/editmo6.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo6.component.css */ "./src/app/views/system/mo6/editmo6/editmo6.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo6_service__WEBPACK_IMPORTED_MODULE_8__["Mo6Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo6Component);
    return Editmo6Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo6/mo6.component.css":
/*!****************************************************!*\
  !*** ./src/app/views/system/mo6/mo6.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3lzdGVtL21vNi9tbzYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzYvbW82LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/system/mo6/mo6.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/system/mo6/mo6.component.ts ***!
  \***************************************************/
/*! exports provided: Mo6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo6Component", function() { return Mo6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo6_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mo6.model */ "./src/app/views/system/mo6/mo6.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo6_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo6.service */ "./src/app/views/system/mo6/mo6.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;









var Mo6Component = /** @class */ (function () {
    function Mo6Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo6 = new _mo6_model__WEBPACK_IMPORTED_MODULE_7__["Mo6"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo6Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo6');
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
        this._service.countrecordmo6().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo6(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo6 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo6;
        } /*for first mo6*/); /* for first getdata*/
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
    Mo6Component.prototype.ngOnDestroy = function () {
    };
    Mo6Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/system/mo6/editmo6", id]);
    };
    Mo6Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/system/mo6/addmo6"]);
    };
    Mo6Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo6(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo6(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo6 = datasear;
                console.log("to test spare" + _this.mo6);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo6(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo6 = data;
            } /*for first mo6*/); /* for first getdata*/
            this._service.countrecordmo6().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo6Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo6(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo6(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo6(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo6  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo6Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo6().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo6(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo6*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo6Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo6*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo6*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo6*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo6*/); /* for first getdata*/
    };
    Mo6Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo6(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo6(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo6(_this.x, 6).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo6 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo6 service');
        });
    };
    Mo6Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo6Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(documentDefinition).open();
    };
    Mo6Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo6));
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
    Mo6Component.prototype.getServiceData = function (mo6) {
        console.log('service..' + mo6);
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
                ], mo6.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo6Component.prototype.getGseData = function (gse) {
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
    Mo6Component.prototype.getToolsData = function (tools) {
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
    Mo6Component.prototype.getSpareData = function (spare) {
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
    Mo6Component.prototype.getConsumableData = function (consumable) {
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
    Mo6Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"] },
        { type: _mo6_service__WEBPACK_IMPORTED_MODULE_10__["Mo6Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo6Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo6',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo6.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo6/mo6.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo6.component.css */ "./src/app/views/system/mo6/mo6.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"], _mo6_service__WEBPACK_IMPORTED_MODULE_10__["Mo6Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_12__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo6Component);
    return Mo6Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo6/mo6.model.ts":
/*!***********************************************!*\
  !*** ./src/app/views/system/mo6/mo6.model.ts ***!
  \***********************************************/
/*! exports provided: Mo6, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo6", function() { return Mo6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo6 = /** @class */ (function () {
    function Mo6() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo6;
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

/***/ "./src/app/views/system/mo6/mo6.service.ts":
/*!*************************************************!*\
  !*** ./src/app/views/system/mo6/mo6.service.ts ***!
  \*************************************************/
/*! exports provided: Mo6Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo6Service", function() { return Mo6Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo6Service = /** @class */ (function () {
    function Mo6Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo6Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo6Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo6Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo6Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo6Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo6Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo6Service.prototype.fetchUserListFromRemotemo6 = function () {
        return this._http.get("http://localhost:8080/getmo6list");
    };
    Mo6Service.prototype.fetchUserByIdFromRemotemo6 = function (id) {
        return this._http.get("http://localhost:8080/getmo6byid/" + id);
    };
    Mo6Service.prototype.addUsertoRemotemo6 = function (mo6) {
        return this._http.post("http://localhost:8080/addmo6", mo6);
    };
    Mo6Service.prototype.deleteUserByIdFromRemotemo6 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo6byidtest/" + id);
    };
    Mo6Service.prototype.getdatamo6 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo6/page/" + pa + "/" + per);
    };
    Mo6Service.prototype.fetchfindlastmo6 = function () {
        return this._http.get("http://localhost:8080/findlastmo6");
    };
    Mo6Service.prototype.countrecordmo6 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo6");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo6Service.prototype.counteruserecordmo6 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo6?seqno=" + no1);
    };
    Mo6Service.prototype.fetchUserBymo6 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo6/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo6Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo6Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo6Service);
    return Mo6Service;
}());



/***/ }),

/***/ "./src/app/views/system/mo72/addmo72/addmo72.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/system/mo72/addmo72/addmo72.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzcyL2FkZG1vNzIvYWRkbW83Mi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/system/mo72/addmo72/addmo72.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/system/mo72/addmo72/addmo72.component.ts ***!
  \****************************************************************/
/*! exports provided: Addmo72Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo72Component", function() { return Addmo72Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo72_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mo72.model */ "./src/app/views/system/mo72/mo72.model.ts");
/* harmony import */ var _mo72_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mo72.service */ "./src/app/views/system/mo72/mo72.service.ts");











var Addmo72Component = /** @class */ (function () {
    function Addmo72Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo72 = new _mo72_model__WEBPACK_IMPORTED_MODULE_9__["Mo72"]();
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
        this.gse = new _mo72_model__WEBPACK_IMPORTED_MODULE_9__["Gse"]();
        this.spare = new _mo72_model__WEBPACK_IMPORTED_MODULE_9__["Spare"]();
        this.tools = new _mo72_model__WEBPACK_IMPORTED_MODULE_9__["Tools"]();
        this.consumable = new _mo72_model__WEBPACK_IMPORTED_MODULE_9__["Consumable"]();
    }
    ;
    Addmo72Component.prototype.ngOnInit = function () {
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
    Addmo72Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo72Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo72Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo72Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo72Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo72.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo72.gsenos = '00';
        }
        else {
            this.mo72.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo72.sparenos = '00';
        }
        else {
            this.mo72.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo72.toolsnos = '00';
        }
        else {
            this.mo72.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo72.consumablenos = '00';
        }
        else {
            this.mo72.consumablenos = this.copystrcl;
        }
        this._service.addUsertoRemotemo72(this.mo72).subscribe(function (data) {
            console.log(_this.mo72.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Mo72 service added successfully', "Mo72 service");
            _this._router.navigate(['/system/mo72']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo72 service');
        });
    };
    Addmo72Component.prototype.function1 = function (e, id) {
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
    Addmo72Component.prototype.function2 = function (e, id) {
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
    Addmo72Component.prototype.function3 = function (e, id) {
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
    Addmo72Component.prototype.function4 = function (e, id) {
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
    Addmo72Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo72.type = event.target.value;
    };
    Addmo72Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"] },
        { type: _mo72_service__WEBPACK_IMPORTED_MODULE_10__["Mo72Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    Addmo72Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-addmo72',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo72.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/addmo72/addmo72.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo72.component.css */ "./src/app/views/system/mo72/addmo72/addmo72.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_8__["ToolsserviceService"], _mo72_service__WEBPACK_IMPORTED_MODULE_10__["Mo72Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_5__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_6__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], Addmo72Component);
    return Addmo72Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo72/editmo72/editmo72.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/system/mo72/editmo72/editmo72.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzcyL2VkaXRtbzcyL2VkaXRtbzcyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/system/mo72/editmo72/editmo72.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/system/mo72/editmo72/editmo72.component.ts ***!
  \******************************************************************/
/*! exports provided: Editmo72Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo72Component", function() { return Editmo72Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo72_mo72_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mo72/mo72.model */ "./src/app/views/system/mo72/mo72.model.ts");
/* harmony import */ var _mo72_mo72_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mo72/mo72.service */ "./src/app/views/system/mo72/mo72.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;









var Editmo72Component = /** @class */ (function () {
    function Editmo72Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _mo72_mo72_model__WEBPACK_IMPORTED_MODULE_8__["Gse"]();
        this.mo72 = new _mo72_mo72_model__WEBPACK_IMPORTED_MODULE_8__["Mo72"]();
        this.spare = new _mo72_mo72_model__WEBPACK_IMPORTED_MODULE_8__["Spare"]();
        this.tools = new _mo72_mo72_model__WEBPACK_IMPORTED_MODULE_8__["Tools"]();
        this.consumable = new _mo72_mo72_model__WEBPACK_IMPORTED_MODULE_8__["Consumable"];
    }
    Editmo72Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo72(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo72 = data;
            console.log("The gse s are=" + _this.mo72.gsenos);
            console.log(_this.mo72);
            //   console.log("The spares  are="+this.mo72.sparenos);
            _this.nam2 = _this.mo72.gsenos;
            _this.name = _this.mo72.gsenos;
            _this.nam3 = _this.mo72.sparenos;
            _this.namesp = _this.mo72.sparenos;
            _this.nam4 = _this.mo72.toolsnos;
            _this.nametl = _this.mo72.toolsnos;
            _this.nam5 = _this.mo72.consumablenos;
            _this.namecl = _this.mo72.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            if (_this.mo72.gsenos != null) {
            }
            if (_this.mo72.sparenos != null) {
            }
            if (_this.mo72.toolsnos != null) {
            }
            if (_this.mo72.consumablenos != null) {
            }
            if (_this.mo72.gsenos == null) {
            }
            if (_this.mo72.sparenos == null) {
            }
            if (_this.mo72.toolsnos == null) {
            }
            if (_this.mo72.consumablenos == null) {
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
    Editmo72Component.prototype.function1 = function (e, id) {
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
    Editmo72Component.prototype.function2 = function (e, id) {
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
    Editmo72Component.prototype.function3 = function (e, id) {
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
    Editmo72Component.prototype.function4 = function (e, id) {
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
    Editmo72Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo72.gsenos = this.copystr;
        this.mo72.sparenos = this.copystrsp;
        this.mo72.toolsnos = this.copystrtl;
        this.mo72.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo72(this.mo72).subscribe(function (data) {
            console.log("data edited successfully");
            _this._router.navigate(['/system/mo72']);
            _this.toastr.showInfo('Mo72 service updation success', 'Mo72 update');
        }, function (error) { return _this.toastr.showError(error, ' Mo72 update'); });
    };
    Editmo72Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo72_mo72_service__WEBPACK_IMPORTED_MODULE_9__["Mo72Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo72Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo72',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo72.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/editmo72/editmo72.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo72.component.css */ "./src/app/views/system/mo72/editmo72/editmo72.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo72_mo72_service__WEBPACK_IMPORTED_MODULE_9__["Mo72Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo72Component);
    return Editmo72Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo72/mo72.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/system/mo72/mo72.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9tbzcyL21vNzIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/system/mo72/mo72.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/system/mo72/mo72.component.ts ***!
  \*****************************************************/
/*! exports provided: Mo72Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo72Component", function() { return Mo72Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo72_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo72.model */ "./src/app/views/system/mo72/mo72.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo72_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo72.service */ "./src/app/views/system/mo72/mo72.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
var Mo72Component = /** @class */ (function () {
    function Mo72Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo72 = new _mo72_model__WEBPACK_IMPORTED_MODULE_5__["Mo72"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo72Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo72');
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
        this._service.countrecordmo72().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo72(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo72 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo72;
        } /*for first mo72*/); /* for first getdata*/
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
    Mo72Component.prototype.ngOnDestroy = function () {
    };
    Mo72Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/system/mo72/editmo72", id]);
    };
    Mo72Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/system/mo72/addmo72"]);
    };
    Mo72Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo72(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo72(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo72 = datasear;
                console.log("to test spare" + _this.mo72);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo72(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo72 = data;
            } /*for first mo72*/); /* for first getdata*/
            this._service.countrecordmo72().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo72Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo72(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo72(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo72(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo72  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo72Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo72().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo72(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo72*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo72Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo72*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo72*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo72*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo72*/); /* for first getdata*/
    };
    Mo72Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo72(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo72(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo72(_this.x, 6).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo72 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo72 service');
        });
    };
    Mo72Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo72Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(documentDefinition).open();
    };
    Mo72Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo72));
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
    Mo72Component.prototype.getServiceData = function (mo72) {
        console.log('service..' + mo72);
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
                ], mo72.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo72Component.prototype.getGseData = function (gse) {
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
    Mo72Component.prototype.getToolsData = function (tools) {
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
    Mo72Component.prototype.getSpareData = function (spare) {
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
    Mo72Component.prototype.getConsumableData = function (consumable) {
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
    Mo72Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo72_service__WEBPACK_IMPORTED_MODULE_8__["Mo72Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
    ]; };
    Mo72Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo72',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo72.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/mo72/mo72.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo72.component.css */ "./src/app/views/system/mo72/mo72.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo72_service__WEBPACK_IMPORTED_MODULE_8__["Mo72Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_10__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])
    ], Mo72Component);
    return Mo72Component;
}());



/***/ }),

/***/ "./src/app/views/system/mo72/mo72.model.ts":
/*!*************************************************!*\
  !*** ./src/app/views/system/mo72/mo72.model.ts ***!
  \*************************************************/
/*! exports provided: Mo72, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo72", function() { return Mo72; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo72 = /** @class */ (function () {
    function Mo72() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo72;
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

/***/ "./src/app/views/system/mo72/mo72.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/system/mo72/mo72.service.ts ***!
  \***************************************************/
/*! exports provided: Mo72Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo72Service", function() { return Mo72Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo72Service = /** @class */ (function () {
    function Mo72Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo72Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo72Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo72Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo72Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo72Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo72Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo72Service.prototype.fetchUserListFromRemotemo72 = function () {
        return this._http.get("http://localhost:8080/getmo72list");
    };
    Mo72Service.prototype.fetchUserByIdFromRemotemo72 = function (id) {
        return this._http.get("http://localhost:8080/getmo72byid/" + id);
    };
    Mo72Service.prototype.addUsertoRemotemo72 = function (mo72) {
        return this._http.post("http://localhost:8080/addmo72", mo72);
    };
    Mo72Service.prototype.deleteUserByIdFromRemotemo72 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo72byidtest/" + id);
    };
    Mo72Service.prototype.getdatamo72 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo72/page/" + pa + "/" + per);
    };
    Mo72Service.prototype.fetchfindlastmo72 = function () {
        return this._http.get("http://localhost:8080/findlastmo72");
    };
    Mo72Service.prototype.countrecordmo72 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo72");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo72Service.prototype.counteruserecordmo72 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo72?seqno=" + no1);
    };
    Mo72Service.prototype.fetchUserBymo72 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo72/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo72Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo72Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo72Service);
    return Mo72Service;
}());



/***/ }),

/***/ "./src/app/views/system/system-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/system/system-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutingModule", function() { return SystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mo6_mo6_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mo6/mo6.component */ "./src/app/views/system/mo6/mo6.component.ts");
/* harmony import */ var _mo12_mo12_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo12/mo12.component */ "./src/app/views/system/mo12/mo12.component.ts");
/* harmony import */ var _mo18_mo18_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mo18/mo18.component */ "./src/app/views/system/mo18/mo18.component.ts");
/* harmony import */ var _mo24_mo24_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mo24/mo24.component */ "./src/app/views/system/mo24/mo24.component.ts");
/* harmony import */ var _mo36_mo36_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo36/mo36.component */ "./src/app/views/system/mo36/mo36.component.ts");
/* harmony import */ var _mo48_mo48_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mo48/mo48.component */ "./src/app/views/system/mo48/mo48.component.ts");
/* harmony import */ var _mo72_mo72_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo72/mo72.component */ "./src/app/views/system/mo72/mo72.component.ts");
/* harmony import */ var _mo6_addmo6_addmo6_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mo6/addmo6/addmo6.component */ "./src/app/views/system/mo6/addmo6/addmo6.component.ts");
/* harmony import */ var _mo6_editmo6_editmo6_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mo6/editmo6/editmo6.component */ "./src/app/views/system/mo6/editmo6/editmo6.component.ts");
/* harmony import */ var _mo12_addmo12_addmo12_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mo12/addmo12/addmo12.component */ "./src/app/views/system/mo12/addmo12/addmo12.component.ts");
/* harmony import */ var _mo12_editmo12_editmo12_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mo12/editmo12/editmo12.component */ "./src/app/views/system/mo12/editmo12/editmo12.component.ts");
/* harmony import */ var _mo18_addmo18_addmo18_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mo18/addmo18/addmo18.component */ "./src/app/views/system/mo18/addmo18/addmo18.component.ts");
/* harmony import */ var _mo18_editmo18_editmo18_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mo18/editmo18/editmo18.component */ "./src/app/views/system/mo18/editmo18/editmo18.component.ts");
/* harmony import */ var _mo24_editmo24_editmo24_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mo24/editmo24/editmo24.component */ "./src/app/views/system/mo24/editmo24/editmo24.component.ts");
/* harmony import */ var _mo36_addmo36_addmo36_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mo36/addmo36/addmo36.component */ "./src/app/views/system/mo36/addmo36/addmo36.component.ts");
/* harmony import */ var _mo36_editmo36_editmo36_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mo36/editmo36/editmo36.component */ "./src/app/views/system/mo36/editmo36/editmo36.component.ts");
/* harmony import */ var _mo48_addmo48_addmo48_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mo48/addmo48/addmo48.component */ "./src/app/views/system/mo48/addmo48/addmo48.component.ts");
/* harmony import */ var _mo48_editmo48_editmo48_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mo48/editmo48/editmo48.component */ "./src/app/views/system/mo48/editmo48/editmo48.component.ts");
/* harmony import */ var _mo72_addmo72_addmo72_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mo72/addmo72/addmo72.component */ "./src/app/views/system/mo72/addmo72/addmo72.component.ts");
/* harmony import */ var _mo72_editmo72_editmo72_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mo72/editmo72/editmo72.component */ "./src/app/views/system/mo72/editmo72/editmo72.component.ts");
/* harmony import */ var _mo24_addmo24_addmo24_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mo24/addmo24/addmo24.component */ "./src/app/views/system/mo24/addmo24/addmo24.component.ts");

























var routes = [
    {
        path: '',
        data: {
            title: 'System'
        }
    },
    { path: 'mo6', component: _mo6_mo6_component__WEBPACK_IMPORTED_MODULE_4__["Mo6Component"], data: { title: "Mo6" } },
    { path: 'mo6/addmo6', component: _mo6_addmo6_addmo6_component__WEBPACK_IMPORTED_MODULE_11__["Addmo6Component"], data: { title: "Mo6/addmo6" } },
    { path: 'mo6/editmo6/:id', component: _mo6_editmo6_editmo6_component__WEBPACK_IMPORTED_MODULE_12__["Editmo6Component"], data: { title: "Mo6/editmo6" } },
    { path: 'mo12', component: _mo12_mo12_component__WEBPACK_IMPORTED_MODULE_5__["Mo12Component"], data: { title: "Mo12" } },
    { path: 'mo12/addmo12', component: _mo12_addmo12_addmo12_component__WEBPACK_IMPORTED_MODULE_13__["Addmo12Component"], data: { title: "Mo12/addmo12" } },
    { path: 'mo12/editmo12/:id', component: _mo12_editmo12_editmo12_component__WEBPACK_IMPORTED_MODULE_14__["Editmo12Component"], data: { title: "Mo12/editmo12" } },
    { path: 'mo18', component: _mo18_mo18_component__WEBPACK_IMPORTED_MODULE_6__["Mo18Component"], data: { title: "Mo18" } },
    { path: 'mo18/addmo18', component: _mo18_addmo18_addmo18_component__WEBPACK_IMPORTED_MODULE_15__["Addmo18Component"], data: { title: "Mo18/addmo18" } },
    { path: 'mo18/editmo18/:id', component: _mo18_editmo18_editmo18_component__WEBPACK_IMPORTED_MODULE_16__["Editmo18Component"], data: { title: "Mo18/editmo18" } },
    { path: 'mo24', component: _mo24_mo24_component__WEBPACK_IMPORTED_MODULE_7__["Mo24Component"], data: { title: "Mo24" } },
    { path: 'mo24/addmo24', component: _mo24_addmo24_addmo24_component__WEBPACK_IMPORTED_MODULE_24__["Addmo24Component"], data: { title: "Mo24/addmo24" } },
    { path: 'mo24/editmo24/:id', component: _mo24_editmo24_editmo24_component__WEBPACK_IMPORTED_MODULE_17__["Editmo24Component"], data: { title: "Mo24/editmo24" } },
    { path: 'mo36', component: _mo36_mo36_component__WEBPACK_IMPORTED_MODULE_8__["Mo36Component"], data: { title: "Mo36" } },
    { path: 'mo36/addmo36', component: _mo36_addmo36_addmo36_component__WEBPACK_IMPORTED_MODULE_18__["Addmo36Component"], data: { title: "Mo36/addmo36" } },
    { path: 'mo36/editmo36/:id', component: _mo36_editmo36_editmo36_component__WEBPACK_IMPORTED_MODULE_19__["Editmo36Component"], data: { title: "Mo36/editmo36" } },
    { path: 'mo48', component: _mo48_mo48_component__WEBPACK_IMPORTED_MODULE_9__["Mo48Component"], data: { title: "Mo48" } },
    { path: 'mo48/addmo48', component: _mo48_addmo48_addmo48_component__WEBPACK_IMPORTED_MODULE_20__["Addmo48Component"], data: { title: "Mo48/addmo48" } },
    { path: 'mo48/editmo48/:id', component: _mo48_editmo48_editmo48_component__WEBPACK_IMPORTED_MODULE_21__["Editmo48Component"], data: { title: "Mo48/editmo48" } },
    { path: 'mo72', component: _mo72_mo72_component__WEBPACK_IMPORTED_MODULE_10__["Mo72Component"], data: { title: "Mo72" } },
    { path: 'mo72/addmo72', component: _mo72_addmo72_addmo72_component__WEBPACK_IMPORTED_MODULE_22__["Addmo72Component"], data: { title: "Mo72/addmo72" } },
    { path: 'mo72/editmo72/:id', component: _mo72_editmo72_editmo72_component__WEBPACK_IMPORTED_MODULE_23__["Editmo72Component"], data: { title: "Mo72/editmo72" } },
];
var SystemRoutingModule = /** @class */ (function () {
    function SystemRoutingModule() {
    }
    SystemRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SystemRoutingModule);
    return SystemRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/system/system.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/system/system.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N5c3RlbS9zeXN0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/system/system.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/system/system.component.ts ***!
  \**************************************************/
/*! exports provided: SystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function() { return SystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SystemComponent = /** @class */ (function () {
    function SystemComponent() {
    }
    SystemComponent.prototype.ngOnInit = function () {
    };
    SystemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./system.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/system/system.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./system.component.css */ "./src/app/views/system/system.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SystemComponent);
    return SystemComponent;
}());



/***/ }),

/***/ "./src/app/views/system/system.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/system/system.module.ts ***!
  \***********************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-routing.module */ "./src/app/views/system/system-routing.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./system.component */ "./src/app/views/system/system.component.ts");
/* harmony import */ var _mo6_mo6_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mo6/mo6.component */ "./src/app/views/system/mo6/mo6.component.ts");
/* harmony import */ var _mo12_mo12_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mo12/mo12.component */ "./src/app/views/system/mo12/mo12.component.ts");
/* harmony import */ var _mo18_mo18_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mo18/mo18.component */ "./src/app/views/system/mo18/mo18.component.ts");
/* harmony import */ var _mo24_mo24_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mo24/mo24.component */ "./src/app/views/system/mo24/mo24.component.ts");
/* harmony import */ var _mo36_mo36_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mo36/mo36.component */ "./src/app/views/system/mo36/mo36.component.ts");
/* harmony import */ var _mo48_mo48_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mo48/mo48.component */ "./src/app/views/system/mo48/mo48.component.ts");
/* harmony import */ var _mo72_mo72_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mo72/mo72.component */ "./src/app/views/system/mo72/mo72.component.ts");
/* harmony import */ var _mo6_addmo6_addmo6_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mo6/addmo6/addmo6.component */ "./src/app/views/system/mo6/addmo6/addmo6.component.ts");
/* harmony import */ var _mo6_editmo6_editmo6_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mo6/editmo6/editmo6.component */ "./src/app/views/system/mo6/editmo6/editmo6.component.ts");
/* harmony import */ var _mo12_addmo12_addmo12_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mo12/addmo12/addmo12.component */ "./src/app/views/system/mo12/addmo12/addmo12.component.ts");
/* harmony import */ var _mo12_editmo12_editmo12_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mo12/editmo12/editmo12.component */ "./src/app/views/system/mo12/editmo12/editmo12.component.ts");
/* harmony import */ var _mo18_addmo18_addmo18_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mo18/addmo18/addmo18.component */ "./src/app/views/system/mo18/addmo18/addmo18.component.ts");
/* harmony import */ var _mo18_editmo18_editmo18_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mo18/editmo18/editmo18.component */ "./src/app/views/system/mo18/editmo18/editmo18.component.ts");
/* harmony import */ var _mo24_addmo24_addmo24_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mo24/addmo24/addmo24.component */ "./src/app/views/system/mo24/addmo24/addmo24.component.ts");
/* harmony import */ var _mo24_editmo24_editmo24_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mo24/editmo24/editmo24.component */ "./src/app/views/system/mo24/editmo24/editmo24.component.ts");
/* harmony import */ var _mo36_addmo36_addmo36_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mo36/addmo36/addmo36.component */ "./src/app/views/system/mo36/addmo36/addmo36.component.ts");
/* harmony import */ var _mo36_editmo36_editmo36_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mo36/editmo36/editmo36.component */ "./src/app/views/system/mo36/editmo36/editmo36.component.ts");
/* harmony import */ var _mo48_editmo48_editmo48_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mo48/editmo48/editmo48.component */ "./src/app/views/system/mo48/editmo48/editmo48.component.ts");
/* harmony import */ var _mo72_addmo72_addmo72_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./mo72/addmo72/addmo72.component */ "./src/app/views/system/mo72/addmo72/addmo72.component.ts");
/* harmony import */ var _mo72_editmo72_editmo72_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./mo72/editmo72/editmo72.component */ "./src/app/views/system/mo72/editmo72/editmo72.component.ts");
/* harmony import */ var _mo48_addmo48_addmo48_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./mo48/addmo48/addmo48.component */ "./src/app/views/system/mo48/addmo48/addmo48.component.ts");












//import { AddspareComponent } from './addspare/addspare.component';
//import { EditspareComponent } from './editspare/editspare.component';
//import { PicgseComponent } from './picgse/picgse.component';


























var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_system_component__WEBPACK_IMPORTED_MODULE_16__["SystemComponent"], _mo24_addmo24_addmo24_component__WEBPACK_IMPORTED_MODULE_30__["Addmo24Component"], _mo6_mo6_component__WEBPACK_IMPORTED_MODULE_17__["Mo6Component"], _mo12_mo12_component__WEBPACK_IMPORTED_MODULE_18__["Mo12Component"], _mo18_mo18_component__WEBPACK_IMPORTED_MODULE_19__["Mo18Component"], _mo24_mo24_component__WEBPACK_IMPORTED_MODULE_20__["Mo24Component"], _mo36_mo36_component__WEBPACK_IMPORTED_MODULE_21__["Mo36Component"], _mo48_mo48_component__WEBPACK_IMPORTED_MODULE_22__["Mo48Component"], _mo72_mo72_component__WEBPACK_IMPORTED_MODULE_23__["Mo72Component"], _mo6_addmo6_addmo6_component__WEBPACK_IMPORTED_MODULE_24__["Addmo6Component"], _mo6_editmo6_editmo6_component__WEBPACK_IMPORTED_MODULE_25__["Editmo6Component"], _mo12_addmo12_addmo12_component__WEBPACK_IMPORTED_MODULE_26__["Addmo12Component"], _mo12_editmo12_editmo12_component__WEBPACK_IMPORTED_MODULE_27__["Editmo12Component"], _mo18_addmo18_addmo18_component__WEBPACK_IMPORTED_MODULE_28__["Addmo18Component"], _mo18_editmo18_editmo18_component__WEBPACK_IMPORTED_MODULE_29__["Editmo18Component"], _mo24_editmo24_editmo24_component__WEBPACK_IMPORTED_MODULE_31__["Editmo24Component"], _mo36_addmo36_addmo36_component__WEBPACK_IMPORTED_MODULE_32__["Addmo36Component"], _mo48_editmo48_editmo48_component__WEBPACK_IMPORTED_MODULE_34__["Editmo48Component"], _mo72_addmo72_addmo72_component__WEBPACK_IMPORTED_MODULE_35__["Addmo72Component"], _mo72_editmo72_editmo72_component__WEBPACK_IMPORTED_MODULE_36__["Editmo72Component"], _mo48_addmo48_addmo48_component__WEBPACK_IMPORTED_MODULE_37__["Addmo48Component"], _mo36_editmo36_editmo36_component__WEBPACK_IMPORTED_MODULE_33__["Editmo36Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__["TabsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_11__["CheckModule"],
                ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng2LoadingSpinnerModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__["ConfirmationPopoverModule"],
                _system_routing_module__WEBPACK_IMPORTED_MODULE_5__["SystemRoutingModule"]
            ],
        })
    ], SystemModule);
    return SystemModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-system-system-module.js.map