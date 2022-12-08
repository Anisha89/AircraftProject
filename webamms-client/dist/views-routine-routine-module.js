(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-routine-routine-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/adddays/adddays.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/adddays/adddays.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  >\r\n  <div class=\"col-md-12\">\r\n     <div class=\"card\">\r\n        <div class=\"card-header \">\r\n           Add  14 Days Services\r\n        </div>\r\n        <div class=\"card-body\">\r\n           <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n           <div class=\"form-group row\">\r\n              <div class=\"  col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <span class=\"input-group-text\">Seqno</span>\r\n                       <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"days14.seqno\" required #seqno=\"ngModel\" >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\" col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Trade</span>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"days14.trade\"name=\"trade\"  required  >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                 <div class=\"input-prepend input-group\">\r\n                    <div class=\"input-group\">\r\n                       <span class=\"input-group-text\">Smrd no</span>\r\n                       <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"days14.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\" col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Ammtc no</span>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"days14.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                       >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Type</span>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"days14.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                       >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Cat</span>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                       [(ngModel)]=\"days14.cat\" required >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Effectivity</span>\r\n                       <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"days14.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                       <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\">\r\n                    <span class=\"input-group-text\">Description</span>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"days14.description\"  >\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"row\">\r\n              <div class=\"simple\">\r\n                 <tabset >\r\n                    <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                       <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                       </div>\r\n                       <ng-template #gsepart>\r\n                          <table class=\"table table-sm\">\r\n                             <thead>\r\n                                <tr>\r\n                                   <th>Select</th>\r\n                                   <th>Sno </th>\r\n                                   <th>Gse-no </th>\r\n                                   <th>Port-no</th>\r\n                                   <th>Oem</th>\r\n                                   <th>Description</th>\r\n                                </tr>\r\n                             </thead>\r\n                             <tbody>\r\n                                <tr *ngFor =\"let u of datagse\"  [class.bg-secondary]='nam2.indexOf(u.idgse)>-1'>\r\n                                <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                                <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                                </div>\r\n                                <!-- </td>  -->\r\n                                <ng-template #truepart>\r\n                                   <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\"  >\r\n                                </ng-template>\r\n                                <ng-template #falsepart>\r\n                                   <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n                                </ng-template>\r\n                                <td>{{u.sno }}</td>\r\n                                <td> {{u.gseno}}</td>\r\n                                <td>{{u.portno}}</td>\r\n                                <td>{{u.gdm}}</td>\r\n                                <td>{{u.description}}</td>\r\n                                </tr> \r\n                          </table>\r\n                       </ng-template>\r\n                    </tab>\r\n                    <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n                       <div *ngIf=\"(isspare == true);then sparepart;\">\r\n                       </div>\r\n                       <ng-template #sparepart>\r\n                          <table class=\"table table-sm\">\r\n                             <thead>\r\n                                <tr>\r\n                                   <th>Select</th>\r\n                                   <th>Sno </th>\r\n                                   <th>Part-no</th>\r\n                                   <th>Oem</th>\r\n                                   <th>Description</th>\r\n                                </tr>\r\n                             </thead>\r\n                             <tbody>\r\n                                <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                                <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                                <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n                                </div>\r\n                                <!-- </td>  -->\r\n                                <ng-template #truepart>\r\n                                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n                                </ng-template>\r\n                                <ng-template #falsepart>\r\n                                   <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n                                </ng-template>\r\n                                <td>{{u1.seqno }}</td>\r\n                                <td>{{u1.partno}}</td>\r\n                                <td>{{u1.oem}}</td>\r\n                                <td>{{u1.description}}</td>\r\n                                </tr> \r\n                          </table>\r\n                       </ng-template>\r\n                    </tab>\r\n                    <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n                    <div *ngIf=\"(istools == true);then toolspart;\">\r\n                    </div>\r\n                    <ng-template #toolspart>\r\n                       <table class=\"table table-sm\">\r\n                          <thead>\r\n                             <tr>\r\n                                <th>Select</th>\r\n                                <th>Sno </th>\r\n                                <th>Part-no</th>\r\n                                <th>Tools_no</th>\r\n                                <th>Oem</th>\r\n                                <th>Description</th>\r\n                             </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                             <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                             <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n                             </div>\r\n                             <!-- </td>  -->\r\n                             <ng-template #truepart>\r\n                                <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n                             </ng-template>\r\n                             <ng-template #falsepart>\r\n                                <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n                             </ng-template>\r\n                             <td>{{u1.sno }}</td>\r\n                             <td>{{u1.partno}}</td>\r\n                             <td>{{u1.toolsno}}</td>\r\n                             <td>{{u1.gdm}}</td>\r\n                             <td>{{u1.description}}</td>\r\n                             </tr> \r\n                       </table>\r\n                    </ng-template>\r\n                    </tab>\r\n                    <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n                    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n                    </div>\r\n                    <ng-template #consumablepart>\r\n                       <table class=\"table table-sm\">\r\n                          <thead>\r\n                             <tr>\r\n                                <th>Select</th>\r\n                                <th>Sno </th>\r\n                                <th>Part-no</th>\r\n                                <th>consumable_no</th>\r\n                                <th>Oem</th>\r\n                                <th>Description</th>\r\n                             </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                             <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n                             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                             <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n                             </div>\r\n                             <!-- </td>  -->\r\n                             <ng-template #truepart>\r\n                                <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n                             </ng-template>\r\n                             <ng-template #falsepart>\r\n                                <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n                             </ng-template>\r\n                             <td>{{u1.sno }}</td>\r\n                             <td>{{u1.partno}}</td>\r\n                             <td>{{u1.consumableno}}</td>\r\n                             <td>{{u1.oem}}</td>\r\n                             <td>{{u1.description}}</td>\r\n                             </tr> \r\n                       </table>\r\n                    </ng-template>\r\n                    </tab>\r\n                 </tabset>\r\n              </div>\r\n           </div>\r\n           <!-- !--form--end--! -->\r\n           </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n           <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\"  [disabled] = '!addserviceform.valid'>Submit</button>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/days14.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/days14.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/editdays/editdays.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/editdays/editdays.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n     <div class=\"card\">\r\n        <div class=\"card-header\">\r\n           Edit days14 Services\r\n        </div>\r\n        <div class=\"card-body\">\r\n           <form name=\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n           <fieldset [disabled]=\"enable\">\r\n              <div class=\"form-group row\">\r\n                 <div class=\"  col-md-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-prepend input-group\">\r\n                          <span class=\"input-group-text\">Seqno</span>\r\n                          <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"\r\n                          [class.is-invalid]=\"seqno.invalid && seqno.touched\" [(ngModel)]=\"days14.seqno\" required\r\n                          #seqno=\"ngModel\">\r\n                       </div>\r\n                       <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                          <div class=\"text-danger\" *ngIf=\"seqno.errors?.required\"> Seqno is required.</div>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\" col-md-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-prepend input-group\">\r\n                          <span class=\"input-group-text\">Trade</span>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\"\r\n                          [class.is-invalid]=\"trade.invalid && trade.touched\" [(ngModel)]=\"days14.trade\" name=\"trade\"\r\n                          required>\r\n                       </div>\r\n                       <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                          <div class=\"text-danger\" *ngIf=\"trade.errors?.required\"> Trade is required.</div>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                 <div class=\" col-md-6\">\r\n                    <div class=\"input-prepend input-group\">\r\n                       <div class=\"input-group\">\r\n                          <span class=\"input-group-text\">Smrd no</span>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"smrdno\" name=\"smrdno\"\r\n                          [(ngModel)]=\"days14.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"\r\n                          #smrdno=\"ngModel\">\r\n                       </div>\r\n                       <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                          <div class=\"text-danger\" *ngIf=\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\" col-md-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-prepend input-group\">\r\n                          <span class=\"input-group-text\">Ammtc no</span>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\"\r\n                          [(ngModel)]=\"days14.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"\r\n                          #ammtcno=\"ngModel\">\r\n                       </div>\r\n                       <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                          <div class=\"text-danger\" *ngIf=\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                 <div class=\" col-md-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-prepend input-group\">\r\n                          <span class=\"input-group-text\">Type</span>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\"\r\n                          [(ngModel)]=\"days14.type\" required [class.is-invalid]=\"type.invalid && type.touched\"\r\n                          #type=\"ngModel\">\r\n                       </div>\r\n                       <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                          <div class=\"text-danger\" *ngIf=\"type.errors?.required\"> Type is required.</div>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"col-md-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-prepend input-group\">\r\n                          <span class=\"input-group-text\">Cat</span>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\"\r\n                          [class.is-invalid]=\"cat.invalid && cat.touched\" #cat=\"ngModel\" [(ngModel)]=\"days14.cat\" required>\r\n                       </div>\r\n                       <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                          <div class=\"text-danger\" *ngIf=\"cat.errors?.required\"> Cat is required.</div>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                 <div class=\" col-md-6\">\r\n                    <div class=\"input-group\">\r\n                       <div class=\"input-prepend input-group\">\r\n                          <span class=\"input-group-text\">Effectivity</span>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"effectivity\" name=\"effectivity\"\r\n                          [(ngModel)]=\"days14.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"\r\n                          required ngModel #effectivity=\"ngModel\">\r\n                       </div>\r\n                       <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                          <div class=\"text-danger\" *ngIf=\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"col-md-6\">\r\n                    <div class=\"input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\"\r\n                       name=\"description\" [(ngModel)]=\"days14.description\">\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                 <div class=\"simple\">\r\n                    <tabset width=100%>\r\n                       <tab class=\"excel-table\" heading=\"GSE\" name=\"isgse\" index=0>\r\n                          <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                          </div>\r\n                          <table class=\"table table-sm\">\r\n                             <thead>\r\n                                <tr>\r\n                                   <th>Select</th>\r\n                                   <th>Sno </th>\r\n                                   <th>Part-no</th>\r\n                                   <th>Oem</th>\r\n                                   <th>Description</th>\r\n                                </tr>\r\n                             </thead>\r\n                             <tbody>\r\n                                <tr *ngFor=\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                                <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                                <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">\r\n                                </div>\r\n                                <!-- </td>  -->\r\n                                <ng-template #truepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" checked=\"true\" (click)=\"function1($event,u1.idgse)\">\r\n                                </ng-template>\r\n                                <ng-template #falsepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" (click)=\"function1($event,u1.idgse)\">\r\n                                </ng-template>\r\n                                <td>{{u1.seqno }}</td>\r\n                                <td>{{u1.partno}}</td>\r\n                                <td>{{u1.oem}}</td>\r\n                                <td>{{u1.description}}</td>\r\n                                </tr>\r\n                          </table>\r\n                       </tab>\r\n                       <tab class=\"excel-table\" heading=\"SPARE\" name=\"isspare\" index=1>\r\n                          <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n                          </div>\r\n                          <table class=\"table table-sm\">\r\n                             <thead>\r\n                                <tr>\r\n                                   <th>Select</th>\r\n                                   <th>Sno </th>\r\n                                   <th>Part-no</th>\r\n                                   <th>Oem</th>\r\n                                   <th>Description</th>\r\n                                </tr>\r\n                             </thead>\r\n                             <tbody>\r\n                                <tr *ngFor=\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                                <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                                <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">\r\n                                </div>\r\n                                <!-- </td>  -->\r\n                                <ng-template #truepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" checked=\"true\" (click)=\"function2($event,u1.idspare)\">\r\n                                </ng-template>\r\n                                <ng-template #falsepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" (click)=\"function2($event,u1.idspare)\">\r\n                                </ng-template>\r\n                                <td>{{u1.seqno }}</td>\r\n                                <td>{{u1.partno}}</td>\r\n                                <td>{{u1.oem}}</td>\r\n                                <td>{{u1.description}}</td>\r\n                                </tr>\r\n                          </table>\r\n                       </tab>\r\n                       <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2>\r\n                          <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n                          </div>\r\n                          <table class=\"table table-sm\">\r\n                             <thead>\r\n                                <tr>\r\n                                   <th>Select</th>\r\n                                   <th>Sno </th>\r\n                                   <th>Part-no</th>\r\n                                   <th>Oem</th>\r\n                                   <th>Description</th>\r\n                                </tr>\r\n                             </thead>\r\n                             <tbody>\r\n                                <tr *ngFor=\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                                <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                                <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">\r\n                                </div>\r\n                                <!-- </td>  -->\r\n                                <ng-template #truepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" checked=\"true\" (click)=\"function3($event,u1.idtools)\">\r\n                                </ng-template>\r\n                                <ng-template #falsepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" (click)=\"function3($event,u1.idtools)\">\r\n                                </ng-template>\r\n                                <td>{{u1.seqno }}</td>\r\n                                <td>{{u1.partno}}</td>\r\n                                <td>{{u1.oem}}</td>\r\n                                <td>{{u1.description}}</td>\r\n                                </tr>\r\n                          </table>\r\n                       </tab>\r\n                       <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3>\r\n                          <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n                          </div>\r\n                          <table class=\"table table-sm\">\r\n                             <thead>\r\n                                <tr>\r\n                                   <th>Select</th>\r\n                                   <th>Sno </th>\r\n                                   <th>Consumableno</th>\r\n                                   <th>Part-no</th>\r\n                                   <th>Oem</th>\r\n                                   <th>Description</th>\r\n                                </tr>\r\n                             </thead>\r\n                             <tbody>\r\n                                <tr *ngFor=\"let u1 of dataconsumable\" [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\">\r\n                                <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                                <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">\r\n                                </div>\r\n                                <!-- </td>  -->\r\n                                <ng-template #truepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" checked=\"true\"\r\n                                      (click)=\"function4($event,u1.idconsumable)\">\r\n                                </ng-template>\r\n                                <ng-template #falsepart>\r\n                                   <input type=\"checkbox\" id=\"myCheck1\" (click)=\"function4($event,u1.idconsumable)\">\r\n                                </ng-template>\r\n                                <td>{{u1.sno }}</td>\r\n                                <td>{{u1.partno}}</td>\r\n                                <td>{{u1.consumableno}}</td>\r\n                                <td>{{u1.oem}}</td>\r\n                                <td>{{u1.description}}</td>\r\n                                </tr>\r\n                          </table>\r\n                       </tab>\r\n                    </tabset>\r\n                 </div>\r\n                 <br>\r\n                 <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck; \" >\r\n                    </div> -->\r\n                 <ng-template #displaycheck>\r\n                    <div class=\"input-group m-2\">\r\n                       <span>Selected Rows</span> &nbsp; &nbsp;\r\n                       <input type=\"checkbox\" class=\"form-control-checkbox \" style=\"margin-top:5px\" id=\"myCheckrows\"\r\n                          checked=\"true\" (click)=\"selectedrows($event)\">\r\n                    </div>\r\n                 </ng-template>\r\n                 <ng-template #uncheck hide>\r\n                    <div class=\"input-group m-2\">\r\n                       <span>Selected Rows</span> &nbsp; &nbsp;\r\n                       <input type=\"checkbox\" class=\"form-control-checkbox \" style=\"margin-top:5px\" id=\"myCheckrows\"\r\n                          (click)=\"selectedrows($event)\">\r\n                    </div>\r\n                    <!-- <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows    -->\r\n                 </ng-template>\r\n              </div>\r\n              <div class=\"card-footer \">\r\n                 <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled]=\"!editserviceform.valid\"\r\n                 (click)=\"updateeditformsubmit()\">Submit</button>\r\n              </div>\r\n           </fieldset>\r\n           </form>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/addmo1/addmo1.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/addmo1/addmo1.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  >\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Add  1 month Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"  col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\">\r\n                <span class=\"input-group-text\">Seqno</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo1.seqno\" required #seqno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo1.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-prepend input-group\"> \r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text\">Smrd no</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo1.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n            \r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo1.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo1.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo1.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                \r\n                 <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Effectivity</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo1.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n              \r\n                </div>\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo1.description\"  >\r\n                </div>\r\n             </div>\r\n          </div>\r\n           \r\n\r\n            \r\n          <div class=\"row\">\r\n            <div class=\"simple\">\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of datagse\"  [class.bg-secondary]='nam2.indexOf(u.idgse)>-1'>\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\"  >\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\"  [disabled] = '!addserviceform.valid'>Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/editmo1/editmo1.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/editmo1/editmo1.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\"  >\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n       Edit Mo1  Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"  col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\">\r\n                  <span class=\"input-group-text\">Seqno</span>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo1.seqno\" required #seqno=\"ngModel\" >\r\n                  </div>\r\n  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                    \r\n                    <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                  </div>\r\n              </div>\r\n  \r\n  \r\n  \r\n              </div>\r\n              <div class=\" col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Trade</span>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo1.trade\"name=\"trade\"  required  >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                      <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                  \r\n                    </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo1.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n  \r\n              </div>\r\n              <div class=\" col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Ammtc no</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo1.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                       >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n                \r\n                  </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo1.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n  \r\n  \r\n  \r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Cat</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                       [(ngModel)]=\"mo1.cat\" required >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                      <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                  \r\n                    </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  \r\n                   <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Effectivity</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo1.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                   </div>\r\n                   <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n                \r\n                  </div>\r\n              </div>\r\n              \r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo1.description\"  >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n          \r\n            <div class=\"row\">\r\n            <div class=\"simple\">\r\n              \r\n              \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\" name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                   <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n            \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                 \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n              <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n           \r\n             </div>\r\n             \r\n             <table class=\"table table-sm\">\r\n               <thead>\r\n           <tr>\r\n           <th>Select</th>\r\n           <th>Sno </th>\r\n           <th>Consumableno</th>\r\n           <th>Part-no</th>\r\n           <th>Oem</th>\r\n           <th>Description</th>\r\n           </tr>\r\n           </thead>\r\n           <tbody>\r\n           \r\n           \r\n              <tr *ngFor =\"let u1 of dataconsumable\"  [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\"> \r\n                    \r\n           \r\n            <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n             <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n             </div> \r\n           <!-- </td>  -->\r\n           \r\n           \r\n           \r\n           \r\n             <ng-template #truepart>\r\n           \r\n              <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n             </ng-template> \r\n                   <ng-template #falsepart>\r\n                   \r\n             <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n           </ng-template>\r\n           \r\n           \r\n           \r\n           \r\n           \r\n            <td>{{u1.sno }}</td> \r\n             \r\n             <td>{{u1.partno}}</td> \r\n             <td>{{u1.consumableno}}</td>\r\n             <td>{{u1.oem}}</td>\r\n             <td>{{u1.description}}</td>\r\n           </tr> \r\n           \r\n           </table>  \r\n               \r\n           \r\n           \r\n           </tab>\r\n                 \r\n              </tabset>\r\n\r\n            </div>\r\n          <br>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck; \" >\r\n              </div> -->\r\n              <ng-template #displaycheck >\r\n                <div class=\"input-group m-2\">\r\n                  <span >Selected Rows</span> &nbsp; &nbsp;\r\n                  <input type=\"checkbox\"  class=\"form-control-checkbox \" style=\"margin-top:5px\" id=\"myCheckrows\"  checked=\"true\" (click)=\"selectedrows($event)\">  \r\n                \r\n                </div>\r\n\r\n \r\n          </ng-template>\r\n          <ng-template #uncheck hide>\r\n            <div class=\"input-group m-2\">\r\n              <span >Selected Rows</span> &nbsp; &nbsp;\r\n              <input type=\"checkbox\"  class=\"form-control-checkbox \" style=\"margin-top:5px\" id=\"myCheckrows\"  (click)=\"selectedrows($event)\">  \r\n            \r\n            </div>\r\n            \r\n            <!-- <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows    -->\r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n         \r\n          <div class=\"card-footer \">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled]=\"!editserviceform.valid\"  (click)=\"updateeditformsubmit()\">Submit</button>\r\n          </div>\r\n        </fieldset>\r\n    </form>\r\n      </div>\r\n      \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/mo1.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/mo1.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n            \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/addmo3/addmo3.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/addmo3/addmo3.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  >\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header \">\r\n        Add 3 Month Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"  col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\">\r\n                <span class=\"input-group-text\">Seqno</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo3.seqno\" required #seqno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo3.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-prepend input-group\"> \r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-text\">Smrd no</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo3.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n            \r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo3.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo3.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"mo3.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\" col-md-6\">\r\n              <div class=\"input-group\">\r\n                \r\n                 <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Effectivity</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo3.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                 </div>\r\n                 <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n              \r\n                </div>\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input-group\">\r\n                     <span class=\"input-group-text\">Description</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo3.description\"  >\r\n                </div>\r\n             </div>\r\n          </div>\r\n           \r\n\r\n            \r\n          <div class=\"row\">\r\n            <div class=\"simple\">\r\n           \r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor =\"let u of datagse\"  [class.bg-secondary]='nam2.indexOf(u.idgse)>-1'>\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\"  >\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\"  [disabled] = '!addserviceform.valid'>Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/editmo3/editmo3.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/editmo3/editmo3.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\"  >\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n       Edit Mo3  Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"  col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\">\r\n                  <span class=\"input-group-text\">Seqno</span>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"seqno\" autocomplete=\"seqno\" name=\"seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"  [(ngModel)]=\"mo3.seqno\" required #seqno=\"ngModel\" >\r\n                  </div>\r\n  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n                    \r\n                    <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                  </div>\r\n              </div>\r\n  \r\n  \r\n  \r\n              </div>\r\n              <div class=\" col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Trade</span>\r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"mo3.trade\"name=\"trade\"  required  >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                      <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                  \r\n                    </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"mo3.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n  \r\n              </div>\r\n              <div class=\" col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Ammtc no</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"mo3.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                       >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n                \r\n                  </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"mo3.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n  \r\n  \r\n  \r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-prepend input-group\"> \r\n                       <span class=\"input-group-text\">Cat</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                       [(ngModel)]=\"mo3.cat\" required >\r\n                    </div>\r\n                    <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                      <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                  \r\n                    </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\" col-md-6\">\r\n                <div class=\"input-group\">\r\n                  \r\n                   <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Effectivity</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"mo3.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                   </div>\r\n                   <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n                \r\n                  </div>\r\n              </div>\r\n              \r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"mo3.description\"  >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n          \r\n            <div class=\"row\">\r\n            <div class=\"simple\">\r\n              \r\n              \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\" name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                   <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n            \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                 \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n              <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n           \r\n             </div>\r\n             \r\n             <table class=\"table table-sm\">\r\n               <thead>\r\n           <tr>\r\n           <th>Select</th>\r\n           <th>Sno </th>\r\n           <th>Consumableno</th>\r\n           <th>Part-no</th>\r\n           <th>Oem</th>\r\n           <th>Description</th>\r\n           </tr>\r\n           </thead>\r\n           <tbody>\r\n           \r\n           \r\n              <tr *ngFor =\"let u1 of dataconsumable\"  [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\"> \r\n                    \r\n           \r\n            <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n             <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n             </div> \r\n           <!-- </td>  -->\r\n           \r\n           \r\n           \r\n           \r\n             <ng-template #truepart>\r\n           \r\n              <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n             </ng-template> \r\n                   <ng-template #falsepart>\r\n                   \r\n             <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n           </ng-template>\r\n           \r\n           \r\n           \r\n           \r\n           \r\n            <td>{{u1.sno }}</td> \r\n             \r\n             <td>{{u1.partno}}</td> \r\n             <td>{{u1.consumableno}}</td>\r\n             <td>{{u1.oem}}</td>\r\n             <td>{{u1.description}}</td>\r\n           </tr> \r\n           \r\n           </table>  \r\n               \r\n           \r\n           \r\n           </tab>\r\n                 \r\n              </tabset>\r\n\r\n            </div>\r\n          <br>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck; \" >\r\n              </div> -->\r\n              <ng-template #displaycheck >\r\n                <div class=\"input-group m-2\">\r\n                  <span >Selected Rows</span> &nbsp; &nbsp;\r\n                  <input type=\"checkbox\"  class=\"form-control-checkbox \" style=\"margin-top:5px\" id=\"myCheckrows\"  checked=\"true\" (click)=\"selectedrows($event)\">  \r\n                \r\n                </div>\r\n\r\n \r\n          </ng-template>\r\n          <ng-template #uncheck hide>\r\n            <div class=\"input-group m-2\">\r\n              <span >Selected Rows</span> &nbsp; &nbsp;\r\n              <input type=\"checkbox\"  class=\"form-control-checkbox \" style=\"margin-top:5px\" id=\"myCheckrows\"  (click)=\"selectedrows($event)\">  \r\n            \r\n            </div>\r\n            \r\n            <!-- <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows    -->\r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n         \r\n          <div class=\"card-footer \">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled]=\"!editserviceform.valid\"  (click)=\"updateeditformsubmit()\">Submit</button>\r\n          </div>\r\n        </fieldset>\r\n    </form>\r\n      </div>\r\n      \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/mo3.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/mo3.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n             \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/routine.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/routine.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>routine works!</p>\r\n");

/***/ }),

/***/ "./src/app/views/routine/days14/adddays/adddays.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/routine/days14/adddays/adddays.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9kYXlzMTQvYWRkZGF5cy9hZGRkYXlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb3V0aW5lL2RheXMxNC9hZGRkYXlzL2FkZGRheXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/routine/days14/adddays/adddays.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/routine/days14/adddays/adddays.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdddaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddaysComponent", function() { return AdddaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _days14_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../days14.model */ "./src/app/views/routine/days14/days14.model.ts");
/* harmony import */ var _days14_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../days14.service */ "./src/app/views/routine/days14/days14.service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var AdddaysComponent = /** @class */ (function () {
    function AdddaysComponent(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.days14 = new _days14_model__WEBPACK_IMPORTED_MODULE_4__["Days14"]();
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.needcheck = false;
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.m1 = 100;
        this.m1sp = 100;
        this.m1tl = 100;
        this.m1cl = 100;
        this.str1 = "";
        this.str2 = "";
        this.str3 = "";
        this.gse = new _days14_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _days14_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _days14_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _days14_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    AdddaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
        });
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        this.consumableservice
            .fetchUserListFromRemoteconsumable()
            .subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    AdddaysComponent.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
        });
    };
    AdddaysComponent.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
    };
    AdddaysComponent.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
    };
    AdddaysComponent.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice
            .fetchUserListFromRemoteconsumable()
            .subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    AdddaysComponent.prototype.adduserformsubmit = function () {
        var _this = this;
        this.d = Date.now().toString();
        this.days14.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.days14.gsenos = "00";
        }
        else {
            this.days14.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.days14.sparenos = "00";
        }
        else {
            this.days14.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.days14.toolsnos = "00";
        }
        else {
            this.days14.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.days14.consumablenos = "00";
        }
        else {
            this.days14.consumablenos = this.copystrcl;
        }
        this._service.addUsertoRemotedays14(this.days14).subscribe(function (data) {
            _this.toastr.showSuccess(" 14days service added successfully", "14days service");
            _this._router.navigate(["/routine/days14"]);
        }, function (error) {
            _this.toastr.showError(error, "14days service");
        });
    };
    AdddaysComponent.prototype.function1 = function (e, id) {
        if (e.target.checked) {
            if (this.name == undefined) {
                this.name = id;
                this.nam2[0] = id;
            }
            else {
                this.name = this.name + "," + id;
                this.nam2.push(id);
            }
            this.copystr = this.nam2.toString();
        }
        else {
            var index = this.nam2.indexOf(id);
            if (index > -1) {
                this.nam2.splice(index, 1);
            }
            this.name = this.str1;
            this.copystr = this.nam2.toString();
        }
        this.namestr = this.name;
        if (typeof (this.namestr === "number")) {
            this.namestr = this.namestr.toString();
        }
    };
    AdddaysComponent.prototype.function2 = function (e, id) {
        if (e.target.checked) {
            if (this.namesp == undefined) {
                this.namesp = id;
                this.nam3[0] = id;
            }
            else {
                this.namesp = this.namesp + "," + id;
                this.nam3.push(id);
            }
            this.copystrsp = this.nam3.toString();
        }
        else {
            var index1 = this.nam3.indexOf(id);
            if (index1 > -1) {
                this.nam3.splice(index1, 1);
            }
            console.log("Un checked" + id);
            this.namesp = this.str1;
            this.copystrsp = this.nam3.toString();
        }
        this.namestrsp = this.namesp;
        if (typeof (this.namestrsp === "number")) {
            this.namestrsp = this.namestrsp.toString();
        }
    };
    AdddaysComponent.prototype.function3 = function (e, id) {
        if (e.target.checked) {
            if (this.nametl == undefined) {
                this.nametl = id;
                this.nam4[0] = id;
            }
            else {
                this.nametl = this.nametl + "," + id;
                this.nam4.push(id);
            }
            this.copystrtl = this.nam4.toString();
        }
        else {
            var index2 = this.nam4.indexOf(id);
            if (index2 > -1) {
                this.nam4.splice(index2, 1);
            }
            this.nametl = this.str2;
            this.copystrtl = this.nam4.toString();
        }
        this.namestrtl = this.nametl;
        if (typeof (this.namestrtl === "number")) {
            this.namestrtl = this.namestrtl.toString();
        }
    };
    AdddaysComponent.prototype.function4 = function (e, id) {
        if (e.target.checked) {
            if (this.namecl == undefined) {
                this.namecl = id;
                this.nam5[0] = id;
            }
            else {
                this.namecl = this.namecl + "," + id;
                this.nam5.push(id);
            }
            this.copystrcl = this.nam5.toString();
        }
        else {
            var index3 = this.nam5.indexOf(id);
            if (index3 > -1) {
                this.nam5.splice(index3, 1);
            }
            this.namecl = this.str3;
            this.copystrcl = this.nam5.toString();
        }
        this.namestrcl = this.namecl;
        if (typeof (this.namestrcl === "number")) {
            this.namestrcl = this.namestrcl.toString();
        }
    };
    AdddaysComponent.prototype.selectChangeHandler = function (event) {
        this.days14.type = event.target.value;
    };
    AdddaysComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _days14_service__WEBPACK_IMPORTED_MODULE_5__["Days14Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    AdddaysComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-adddays14",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adddays.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/adddays/adddays.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adddays.component.css */ "./src/app/views/routine/days14/adddays/adddays.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"],
            _days14_service__WEBPACK_IMPORTED_MODULE_5__["Days14Service"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], AdddaysComponent);
    return AdddaysComponent;
}());



/***/ }),

/***/ "./src/app/views/routine/days14/days14.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/routine/days14/days14.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n     width:100%;\r\n    height: 300px;\r\n   }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9kYXlzMTQvZGF5czE0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7S0FDaEIsVUFBVTtJQUNYLGFBQWE7R0FDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JvdXRpbmUvZGF5czE0L2RheXMxNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/views/routine/days14/days14.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/routine/days14/days14.component.ts ***!
  \**********************************************************/
/*! exports provided: Days14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days14Component", function() { return Days14Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _days14_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./days14.model */ "./src/app/views/routine/days14/days14.model.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _days14_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./days14.service */ "./src/app/views/routine/days14/days14.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
var Days14Component = /** @class */ (function () {
    function Days14Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.days14 = new _days14_model__WEBPACK_IMPORTED_MODULE_5__["Days14"]();
        this.currentPage = 1;
        this._service.share.subscribe(function (x) {
            _this.rolltext = x || localStorage.getItem("a");
        });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) {
            _this.uname = x1 || localStorage.getItem("b");
        });
        console.log("the Uname text is ======" + this.uname);
    }
    Days14Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        localStorage.setItem("opennav", "days14");
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
        this._service.countrecorddays14().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            _this.m1 = _this.rec1;
            _this.counter = _this.m1;
        });
        this._service.getdatadays14(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.days14 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.days14;
        });
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
    Days14Component.prototype.ngOnDestroy = function () { };
    Days14Component.prototype.gotoedituser = function (id) {
        this._route.navigate(["/routine/days14/editdays", id]);
    };
    Days14Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/routine/days14/adddays"]);
    };
    Days14Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        if (this.mode == "searching") {
            this._service
                .counteruserecorddays14(this.searchname)
                .subscribe(function (recs) {
                _this.searchpages = parseInt(recs);
                _this.rec1 = _this.searchpages;
            });
            this._service
                .fetchUserBydays14(this.x - 1, parseInt(this.perpage), this.searchname)
                .subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.days14 = datasear;
            });
        } /*IF */
        else if (this.mode == "normal" || this.mode == "deleting") {
            this._service
                .getdatadays14(this.x - 1, this.perpage)
                .subscribe(function (data) {
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.days14 = data;
            });
            this._service.countrecorddays14().subscribe(function (mydata) {
                _this.rec1 = mydata;
                _this.m1 = parseInt(_this.rec1);
            });
        }
    };
    Days14Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = "searching";
        this._service.counteruserecorddays14(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        if (this.perpageflag == "true") {
            this._service
                .fetchUserBydays14(this.m2, parseInt(this.perpage), name)
                .subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBydays14(this.m2, this.perpage, name).subscribe(function (datasear) {
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("days14  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    };
    Days14Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        this._service.countrecorddays14().subscribe(function (mydata) {
            _this.rec1 = mydata;
            _this.m1 = parseInt(_this.rec1);
        });
        this._service.getdatadays14(0, this.perpage).subscribe(function (data) {
            _this.data = data;
        });
        return;
    };
    Days14Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
        var _this = this;
        if (e.target.checked) {
            this.nam2[0] = id;
            this.istab = true;
            this.count1 = 1;
            this.count5 = 1;
            this.count = 1;
            this.selected_id = id;
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
            _this.datagse = datagse;
            console.log(_this.datagse);
        });
        this._spareservice
            .fetchUserListFromRemotesparecondition(sparenos.toString())
            .subscribe(function (dataspare) {
            _this.dataspare = dataspare;
        });
        this.toolsservice
            .fetchUserListFromRemotetoolscondition(toolsnos.toString())
            .subscribe(function (datatools) {
            _this.datatools = datatools;
        });
        this.consumableservice
            .fetchUserListFromRemoteconsumablecondition(consumablenos.toString())
            .subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
        });
    };
    Days14Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotedays14(id).subscribe(function (data) {
            console.log("deleted sucesssfully");
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            if (_this.perpageflag == "true") {
                _this._service
                    .getdatadays14(_this.x - 1, parseInt(_this.perpage))
                    .subscribe(function (data) {
                    _this.data = data;
                });
            }
            else if (_this.perpageflag == undefined) {
                _this._service.getdatadays14(_this.x, 3).subscribe(function (data) {
                    _this.data = data;
                });
            }
            _this.toastr.showWarning("Deletion success", "Days14 service");
        }, function (error) {
            _this.msg1 = error;
            _this.toastr.showError(error, "Days14");
        });
    };
    Days14Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Days14Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
    };
    Days14Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem("service", JSON.stringify(this.days14));
        return {
            header: {
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
                    fontSize: 20,
                    alignment: "left",
                    style: "header",
                    margin: [0, 0, 0, 20],
                },
                this.getServiceData(this.data),
                {
                    text: "\n\nGse",
                    fontSize: 20,
                    alignment: "left",
                    style: "header",
                    margin: [0, 0, 0, 20],
                },
                this.getGseData(this.datagse),
                {
                    text: "\n\nTools",
                    style: "header",
                    fontSize: 20,
                    alignment: "left",
                    margin: [0, 0, 0, 20],
                },
                this.getToolsData(this.datatools),
                {
                    text: "\n\nConsumable",
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
    Days14Component.prototype.getServiceData = function (days14) {
        console.log("service.." + days14);
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
                ], days14.map(function (ed) {
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
    Days14Component.prototype.getGseData = function (gse) {
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
    Days14Component.prototype.getToolsData = function (tools) {
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
    Days14Component.prototype.getSpareData = function (spare) {
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
    Days14Component.prototype.getConsumableData = function (consumable) {
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
    Days14Component.prototype.checked = function (e) { };
    Days14Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"] },
        { type: _days14_service__WEBPACK_IMPORTED_MODULE_13__["Days14Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_11__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Days14Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-days14",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./days14.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/days14.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./days14.component.css */ "./src/app/views/routine/days14/days14.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"],
            _days14_service__WEBPACK_IMPORTED_MODULE_13__["Days14Service"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__["SpareserviceService"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_11__["GseserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Days14Component);
    return Days14Component;
}());



/***/ }),

/***/ "./src/app/views/routine/days14/days14.service.ts":
/*!********************************************************!*\
  !*** ./src/app/views/routine/days14/days14.service.ts ***!
  \********************************************************/
/*! exports provided: Days14Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days14Service", function() { return Days14Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Days14Service = /** @class */ (function () {
    function Days14Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Days14Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Days14Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Days14Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Days14Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Days14Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Days14Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Days14Service.prototype.fetchUserListFromRemotedays14 = function () {
        return this._http.get("http://localhost:8080/getdays14list");
    };
    Days14Service.prototype.fetchUserByIdFromRemotdays14 = function (id) {
        return this._http.get("http://localhost:8080/getdays14byid/" + id);
    };
    Days14Service.prototype.addUsertoRemotedays14 = function (days14) {
        return this._http.post("http://localhost:8080/adddays14", days14);
    };
    Days14Service.prototype.deleteUserByIdFromRemotedays14 = function (id) {
        return this._http.delete("http://localhost:8080/deletedays14byidtest/" + id);
    };
    Days14Service.prototype.getdatadays14 = function (pa, per) {
        return this._http.get("http://localhost:8080/days14/page/" + pa + "/" + per);
    };
    Days14Service.prototype.fetchfindlastdays14 = function () {
        return this._http.get("http://localhost:8080/findlastdays14");
    };
    Days14Service.prototype.countrecorddays14 = function () {
        return this._http.get("http://localhost:8080/getcountlistdays14");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Days14Service.prototype.counteruserecorddays14 = function (no1) {
        return this._http.get("http://localhost:8080/getcountdays14?seqno=" + no1);
    };
    Days14Service.prototype.fetchUserBydays14 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaydays14/" + page + "/" + per + "?seqno=" + no1);
    };
    Days14Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Days14Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Days14Service);
    return Days14Service;
}());



/***/ }),

/***/ "./src/app/views/routine/days14/editdays/editdays.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/routine/days14/editdays/editdays.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9kYXlzMTQvZWRpdGRheXMvZWRpdGRheXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JvdXRpbmUvZGF5czE0L2VkaXRkYXlzL2VkaXRkYXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjZWwtdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/routine/days14/editdays/editdays.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/routine/days14/editdays/editdays.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditdaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdaysComponent", function() { return EditdaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _days14_days14_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../days14/days14.service */ "./src/app/views/routine/days14/days14.service.ts");
/* harmony import */ var _days14_days14_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../days14/days14.model */ "./src/app/views/routine/days14/days14.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");











var EditdaysComponent = /** @class */ (function () {
    function EditdaysComponent(_router, cservice, tservice, toastr, _activatedroute, _service, _gseservice, _spareservice, _http) {
        this._router = _router;
        this.cservice = cservice;
        this.tservice = tservice;
        this.toastr = toastr;
        this._activatedroute = _activatedroute;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.isselected = false;
        this.isgse = true;
        this.istools = false;
        this.isspare = false;
        this.isconsumable = false;
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.namelen = 0;
        this.gse = new _days14_days14_model__WEBPACK_IMPORTED_MODULE_5__["Gse"]();
        this.days14 = new _days14_days14_model__WEBPACK_IMPORTED_MODULE_5__["Days14"]();
        this.spare = new _days14_days14_model__WEBPACK_IMPORTED_MODULE_5__["Spare"]();
        this.tools = new _days14_days14_model__WEBPACK_IMPORTED_MODULE_5__["Tools"]();
        this.consumable = new _days14_days14_model__WEBPACK_IMPORTED_MODULE_5__["Consumable"]();
    }
    EditdaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotdays14(id).subscribe(function (data) {
            console.log("data recevied");
            _this.days14 = data;
            console.log("The gse s are=" + _this.days14.gsenos);
            console.log(_this.days14);
            //   console.log("The spares  are="+this.days14.sparenos);
            _this.nam2 = _this.days14.gsenos;
            _this.name = _this.days14.gsenos;
            _this.nam3 = _this.days14.sparenos;
            _this.namesp = _this.days14.sparenos;
            _this.nam4 = _this.days14.toolsnos;
            _this.nametl = _this.days14.toolsnos;
            _this.nam5 = _this.days14.consumablenos;
            _this.namecl = _this.days14.consumablenos;
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
    EditdaysComponent.prototype.function1 = function (e, id) {
        this.myid = id;
        if (e.target.checked) {
            if (this.name == undefined || this.name == null) {
                // alert("i m undefined");
                this.name = id;
                this.nam2[0] = id;
                // alert(this.nam2);
                this.highlight = id;
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
            this.highlight = '';
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
    };
    EditdaysComponent.prototype.function2 = function (e, id) {
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
    EditdaysComponent.prototype.function3 = function (e, id) {
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
    EditdaysComponent.prototype.function4 = function (e, id) {
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
    EditdaysComponent.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.days14.gsenos = this.copystr;
        this.days14.sparenos = this.copystrsp;
        this.days14.toolsnos = this.copystrtl;
        this.days14.consumablenos = this.copystrcl;
        this._service.addUsertoRemotedays14(this.days14).subscribe(function (data) {
            console.log("data edited successfully");
            _this.toastr.showInfo('14days service updation success', 'Update 14days');
            _this._router.navigate(['/routine/days14']);
        }, function (error) { return _this.toastr.showError(error, 'Update 14days'); });
    };
    EditdaysComponent.prototype.selectedrows = function (e) {
        var _this = this;
        if (e.target.checked) {
            this._gseservice.fetchUserListFromRemoteservicecondition(this.days14.gsenos).subscribe(function (data) {
                console.log("selected data" + data);
                _this.datagse = data;
                console.log("selected  gse data" + _this.datagse);
            });
        }
        else {
            this._service.fetchUserListFromRemotegse().subscribe(function (data) {
                console.log(data);
                _this.datagse = data;
            });
        }
    };
    EditdaysComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _days14_days14_service__WEBPACK_IMPORTED_MODULE_4__["Days14Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    EditdaysComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editdays',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editdays.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/days14/editdays/editdays.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editdays.component.css */ "./src/app/views/routine/days14/editdays/editdays.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _days14_days14_service__WEBPACK_IMPORTED_MODULE_4__["Days14Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_8__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EditdaysComponent);
    return EditdaysComponent;
}());



/***/ }),

/***/ "./src/app/views/routine/mo1/addmo1/addmo1.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/routine/mo1/addmo1/addmo1.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzEvYWRkbW8xL2FkZG1vMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsYUFBYTs7O0FBR2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzEvYWRkbW8xL2FkZG1vMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/routine/mo1/addmo1/addmo1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/routine/mo1/addmo1/addmo1.component.ts ***!
  \**************************************************************/
/*! exports provided: Addmo1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo1Component", function() { return Addmo1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo1_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo1.model */ "./src/app/views/routine/mo1/mo1.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _mo1_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mo1.service */ "./src/app/views/routine/mo1/mo1.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo1Component = /** @class */ (function () {
    function Addmo1Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo1 = new _mo1_model__WEBPACK_IMPORTED_MODULE_4__["Mo1"]();
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.needcheck = false;
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.m1 = 100;
        this.m1sp = 100;
        this.m1tl = 100;
        this.m1cl = 100;
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.gse = new _mo1_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo1_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo1_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo1_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    Addmo1Component.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
            console.log(_this.datagse);
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
    Addmo1Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
        });
    };
    Addmo1Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
    };
    Addmo1Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
    };
    Addmo1Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    Addmo1Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo1.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo1.gsenos = '00';
        }
        else {
            this.mo1.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo1.sparenos = '00';
        }
        else {
            this.mo1.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo1.toolsnos = '00';
        }
        else {
            this.mo1.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo1.consumablenos = '00';
        }
        else {
            this.mo1.consumablenos = this.copystrcl;
        }
        console.log(this.mo1.gsenos);
        console.log(this.mo1.gsenos);
        this._service.addUsertoRemotemo1(this.mo1).subscribe(function (data) {
            console.log(_this.mo1.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess(' Mo1 service added successfully', "Mo1 service");
            _this._router.navigate(['/routine/mo1']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Mo1 service');
        });
    };
    Addmo1Component.prototype.function1 = function (e, id) {
        if (e.target.checked) {
            if (this.name == undefined) {
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
        }
        else {
            var index = this.nam2.indexOf(id);
            if (index > -1) {
                this.nam2.splice(index, 1);
            }
            console.log("Un checked" + id);
            this.name = this.str1;
            console.log("the name of nam2=" + this.nam2);
            this.copystr = this.nam2.toString();
        }
        this.namestr = this.name;
        console.log(typeof (this.namestr));
        if (typeof (this.namestr === 'number')) {
            this.namestr = this.namestr.toString();
        }
    };
    Addmo1Component.prototype.function2 = function (e, id) {
        if (e.target.checked) {
            if (this.namesp == undefined) {
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
        }
        else {
            var index1 = this.nam3.indexOf(id);
            if (index1 > -1) {
                this.nam3.splice(index1, 1);
            }
            console.log("Un checked" + id);
            this.namesp = this.str1;
            console.log("the name of nam2=" + this.nam3);
            this.copystrsp = this.nam3.toString();
        }
        this.namestrsp = this.namesp;
        console.log(typeof (this.namestrsp));
        if (typeof (this.namestrsp === 'number')) {
            this.namestrsp = this.namestrsp.toString();
        }
    };
    Addmo1Component.prototype.function3 = function (e, id) {
        if (e.target.checked) {
            if (this.nametl == undefined) {
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
        }
        else {
            var index2 = this.nam4.indexOf(id);
            if (index2 > -1) {
                this.nam4.splice(index2, 1);
            }
            console.log("Un checked" + id);
            this.nametl = this.str2;
            console.log("the name of nam4=" + this.nam4);
            this.copystrtl = this.nam4.toString();
        }
        this.namestrtl = this.nametl;
        console.log(typeof (this.namestrtl));
        if (typeof (this.namestrtl === 'number')) {
            this.namestrtl = this.namestrtl.toString();
        }
    };
    Addmo1Component.prototype.function4 = function (e, id) {
        if (e.target.checked) {
            if (this.namecl == undefined) {
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
        }
        else {
            var index3 = this.nam5.indexOf(id);
            if (index3 > -1) {
                this.nam5.splice(index3, 1);
            }
            console.log("Un checked" + id);
            this.namecl = this.str3;
            console.log("the name of nam5=" + this.nam5);
            this.copystrcl = this.nam5.toString();
        }
        this.namestrcl = this.namecl;
        console.log(typeof (this.namestrcl));
        if (typeof (this.namestrcl === 'number')) {
            this.namestrcl = this.namestrcl.toString();
        }
    };
    Addmo1Component.prototype.selectChangeHandler = function (event) {
        console.log(event.target.value);
        this.mo1.type = event.target.value;
    };
    Addmo1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"] },
        { type: _mo1_service__WEBPACK_IMPORTED_MODULE_8__["Mo1Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo1',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/addmo1/addmo1.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo1.component.css */ "./src/app/views/routine/mo1/addmo1/addmo1.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"], _mo1_service__WEBPACK_IMPORTED_MODULE_8__["Mo1Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo1Component);
    return Addmo1Component;
}());



/***/ }),

/***/ "./src/app/views/routine/mo1/editmo1/editmo1.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/routine/mo1/editmo1/editmo1.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzEvZWRpdG1vMS9lZGl0bW8xLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb3V0aW5lL21vMS9lZGl0bW8xL2VkaXRtbzEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/routine/mo1/editmo1/editmo1.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/routine/mo1/editmo1/editmo1.component.ts ***!
  \****************************************************************/
/*! exports provided: Editmo1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo1Component", function() { return Editmo1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo1_mo1_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mo1/mo1.service */ "./src/app/views/routine/mo1/mo1.service.ts");
/* harmony import */ var _mo1_mo1_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mo1/mo1.model */ "./src/app/views/routine/mo1/mo1.model.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;


;







var Editmo1Component = /** @class */ (function () {
    function Editmo1Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.namelen = 0;
        this.needcheck = false;
        this.gse = new _mo1_mo1_model__WEBPACK_IMPORTED_MODULE_9__["Gse"]();
        this.mo1 = new _mo1_mo1_model__WEBPACK_IMPORTED_MODULE_9__["Mo1"]();
        this.spare = new _mo1_mo1_model__WEBPACK_IMPORTED_MODULE_9__["Spare"]();
        this.tools = new _mo1_mo1_model__WEBPACK_IMPORTED_MODULE_9__["Tools"]();
        this.consumable = new _mo1_mo1_model__WEBPACK_IMPORTED_MODULE_9__["Consumable"]();
    }
    Editmo1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo1(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo1 = data;
            console.log("The gse s are=" + _this.mo1.gsenos);
            console.log(_this.mo1);
            //   console.log("The spares  are="+this.mo1.sparenos);
            _this.nam2 = _this.mo1.gsenos;
            _this.name = _this.mo1.gsenos;
            _this.nam3 = _this.mo1.sparenos;
            _this.namesp = _this.mo1.sparenos;
            _this.nam4 = _this.mo1.toolsnos;
            _this.nametl = _this.mo1.toolsnos;
            _this.nam5 = _this.mo1.consumablenos;
            _this.namecl = _this.mo1.consumablenos;
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
    Editmo1Component.prototype.function1 = function (e, id) {
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
    Editmo1Component.prototype.function2 = function (e, id) {
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
    Editmo1Component.prototype.function3 = function (e, id) {
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
    Editmo1Component.prototype.function4 = function (e, id) {
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
    Editmo1Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo1.gsenos = this.copystr;
        this.mo1.sparenos = this.copystrsp;
        this.mo1.toolsnos = this.copystrtl;
        this.mo1.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo1(this.mo1).subscribe(function (data) {
            console.log("data edited successfully");
            _this.toastr.showInfo('Mo1 service updatation success', 'Update Mo1');
            _this._router.navigate(['/routine/mo1']);
        }, function (error) { return _this.toastr.showError(error, 'Update Mo1'); });
    };
    Editmo1Component.prototype.gseselected = function () {
        this.isgse = true;
        this.isspare = false;
        this.istools = false;
        this.isconsumable = false;
        this.needcheck = false;
        // alert("i m gse selected tab"+this.isgse+"checkbox="+this.isselected);
    };
    Editmo1Component.prototype.spareselected = function () {
        this.isspare = true;
        this.isgse = false;
        this.istools = false;
        this.isconsumable = false;
        this.needcheck = false;
        // alert("im spare selected"+this.isspare);
    };
    Editmo1Component.prototype.toolsselected = function () {
        this.isspare = false;
        this.isgse = false;
        this.istools = true;
        this.isconsumable = false;
        this.needcheck = false;
        // alert("im spare selected"+this.isspare);
    };
    Editmo1Component.prototype.consumableselected = function () {
        this.isspare = false;
        this.isgse = false;
        this.istools = false;
        this.isconsumable = true;
        this.needcheck = false;
        // alert("im spare selected"+this.isspare);
    };
    Editmo1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo1_mo1_service__WEBPACK_IMPORTED_MODULE_8__["Mo1Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo1',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/editmo1/editmo1.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo1.component.css */ "./src/app/views/routine/mo1/editmo1/editmo1.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo1_mo1_service__WEBPACK_IMPORTED_MODULE_8__["Mo1Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo1Component);
    return Editmo1Component;
}());



/***/ }),

/***/ "./src/app/views/routine/mo1/mo1.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/routine/mo1/mo1.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzEvbW8xLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb3V0aW5lL21vMS9tbzEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/routine/mo1/mo1.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/routine/mo1/mo1.component.ts ***!
  \****************************************************/
/*! exports provided: Mo1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo1Component", function() { return Mo1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo1_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo1.model */ "./src/app/views/routine/mo1/mo1.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo1_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mo1.service */ "./src/app/views/routine/mo1/mo1.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13__);














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13___default.a.pdfMake.vfs;
var Mo1Component = /** @class */ (function () {
    function Mo1Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo1 = new _mo1_model__WEBPACK_IMPORTED_MODULE_5__["Mo1"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo1');
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
        this._service.countrecordmo1().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo1(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo1 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo1;
        } /*for first mo1*/); /* for first getdata*/
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
    Mo1Component.prototype.ngOnDestroy = function () {
    };
    Mo1Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/routine/mo1/editmo1", id]);
    };
    Mo1Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/routine/mo1/addmo1"]);
    };
    Mo1Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo1(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo1(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo1 = datasear;
                console.log("to test spare" + _this.mo1);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo1(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo1 = data;
            } /*for first mo1*/); /* for first getdata*/
            this._service.countrecordmo1().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo1Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo1(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo1(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo1(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo1  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo1Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo1().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo1(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo1*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo1Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo1*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo1*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo1*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo1*/); /* for first getdata*/
    };
    Mo1Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo1(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo1(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo1(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo1 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo1 service');
        });
    };
    Mo1Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo1Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(documentDefinition).open();
    };
    Mo1Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo1));
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
    Mo1Component.prototype.getServiceData = function (mo1) {
        console.log('service..' + mo1);
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
                ], mo1.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo1Component.prototype.getGseData = function (gse) {
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
    Mo1Component.prototype.getToolsData = function (tools) {
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
    Mo1Component.prototype.getSpareData = function (spare) {
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
    Mo1Component.prototype.getConsumableData = function (consumable) {
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
    Mo1Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"] },
        { type: _mo1_service__WEBPACK_IMPORTED_MODULE_11__["Mo1Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_10__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
    ]; };
    Mo1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo1',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo1/mo1.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo1.component.css */ "./src/app/views/routine/mo1/mo1.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_6__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_7__["ToolsserviceService"], _mo1_service__WEBPACK_IMPORTED_MODULE_11__["Mo1Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_10__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_9__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]])
    ], Mo1Component);
    return Mo1Component;
}());



/***/ }),

/***/ "./src/app/views/routine/mo1/mo1.model.ts":
/*!************************************************!*\
  !*** ./src/app/views/routine/mo1/mo1.model.ts ***!
  \************************************************/
/*! exports provided: Mo1, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo1", function() { return Mo1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo1 = /** @class */ (function () {
    function Mo1() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo1;
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

/***/ "./src/app/views/routine/mo1/mo1.service.ts":
/*!**************************************************!*\
  !*** ./src/app/views/routine/mo1/mo1.service.ts ***!
  \**************************************************/
/*! exports provided: Mo1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo1Service", function() { return Mo1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo1Service = /** @class */ (function () {
    function Mo1Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo1Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo1Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo1Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo1Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo1Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo1Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo1Service.prototype.fetchUserListFromRemotemo1 = function () {
        return this._http.get("http://localhost:8080/getmo1list");
    };
    Mo1Service.prototype.fetchUserByIdFromRemotemo1 = function (id) {
        return this._http.get("http://localhost:8080/getmo1byid/" + id);
    };
    Mo1Service.prototype.addUsertoRemotemo1 = function (mo1) {
        return this._http.post("http://localhost:8080/addmo1", mo1);
    };
    Mo1Service.prototype.deleteUserByIdFromRemotemo1 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo1byidtest/" + id);
    };
    Mo1Service.prototype.getdatamo1 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo1/page/" + pa + "/" + per);
    };
    Mo1Service.prototype.fetchfindlastmo1 = function () {
        return this._http.get("http://localhost:8080/findlastmo1");
    };
    Mo1Service.prototype.countrecordmo1 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo1");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo1Service.prototype.counteruserecordmo1 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo1?seqno=" + no1);
    };
    Mo1Service.prototype.fetchUserBymo1 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo1/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo1Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo1Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo1Service);
    return Mo1Service;
}());



/***/ }),

/***/ "./src/app/views/routine/mo3/addmo3/addmo3.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/routine/mo3/addmo3/addmo3.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzMvYWRkbW8zL2FkZG1vMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsYUFBYTs7O0FBR2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzMvYWRkbW8zL2FkZG1vMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/routine/mo3/addmo3/addmo3.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/routine/mo3/addmo3/addmo3.component.ts ***!
  \**************************************************************/
/*! exports provided: Addmo3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addmo3Component", function() { return Addmo3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mo3_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mo3.model */ "./src/app/views/routine/mo3/mo3.model.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _mo3_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mo3.service */ "./src/app/views/routine/mo3/mo3.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");











var Addmo3Component = /** @class */ (function () {
    function Addmo3Component(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.mo3 = new _mo3_model__WEBPACK_IMPORTED_MODULE_4__["Mo3"]();
        this.isgse = true;
        this.isspare = true;
        this.istools = true;
        this.isconsumable = true;
        this.nam2 = [];
        this.nam3 = [];
        this.nam4 = [];
        this.nam5 = [];
        this.m1 = 100;
        this.m1sp = 100;
        this.m1tl = 100;
        this.m1cl = 100;
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.gse = new _mo3_model__WEBPACK_IMPORTED_MODULE_4__["Gse"]();
        this.spare = new _mo3_model__WEBPACK_IMPORTED_MODULE_4__["Spare"]();
        this.tools = new _mo3_model__WEBPACK_IMPORTED_MODULE_4__["Tools"]();
        this.consumable = new _mo3_model__WEBPACK_IMPORTED_MODULE_4__["Consumable"]();
    }
    ;
    Addmo3Component.prototype.ngOnInit = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
            console.log(_this.datagse);
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
    Addmo3Component.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.datagse = data;
        });
        //  alert("i m gse selected tab"+this.isgse);
    };
    Addmo3Component.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo3Component.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo3Component.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
        // alert("im spare selected"+this.isspare);
    };
    Addmo3Component.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.mo3.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.mo3.gsenos = '00';
        }
        else {
            this.mo3.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.mo3.sparenos = '00';
        }
        else {
            this.mo3.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.mo3.toolsnos = '00';
        }
        else {
            this.mo3.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.mo3.consumablenos = '00';
        }
        else {
            this.mo3.consumablenos = this.copystrcl;
        }
        console.log(this.mo3.gsenos);
        console.log(this.mo3.gsenos);
        this._service.addUsertoRemotemo3(this.mo3).subscribe(function (data) {
            console.log(_this.mo3.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess(' Mo3 service added successfully', " Mo3 service");
            _this._router.navigate(['/routine/mo3']);
        }, function (error) {
            console.log("error");
            console.log(error);
            _this.toastr.showError(error, 'Mo3 service');
        });
    };
    Addmo3Component.prototype.function1 = function (e, id) {
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
    Addmo3Component.prototype.function2 = function (e, id) {
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
    Addmo3Component.prototype.function3 = function (e, id) {
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
    Addmo3Component.prototype.function4 = function (e, id) {
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
    Addmo3Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log(event.target.value);
        this.mo3.type = event.target.value;
    };
    Addmo3Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"] },
        { type: _mo3_service__WEBPACK_IMPORTED_MODULE_8__["Mo3Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    Addmo3Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmo3',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmo3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/addmo3/addmo3.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmo3.component.css */ "./src/app/views/routine/mo3/addmo3/addmo3.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_5__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_6__["ToolsserviceService"], _mo3_service__WEBPACK_IMPORTED_MODULE_8__["Mo3Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_7__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_9__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], Addmo3Component);
    return Addmo3Component;
}());



/***/ }),

/***/ "./src/app/views/routine/mo3/editmo3/editmo3.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/routine/mo3/editmo3/editmo3.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzMvZWRpdG1vMy9lZGl0bW8zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb3V0aW5lL21vMy9lZGl0bW8zL2VkaXRtbzMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/routine/mo3/editmo3/editmo3.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/routine/mo3/editmo3/editmo3.component.ts ***!
  \****************************************************************/
/*! exports provided: Editmo3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editmo3Component", function() { return Editmo3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _mo3_mo3_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mo3/mo3.service */ "./src/app/views/routine/mo3/mo3.service.ts");
/* harmony import */ var _mo3_mo3_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mo3/mo3.model */ "./src/app/views/routine/mo3/mo3.model.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");


;


;







var Editmo3Component = /** @class */ (function () {
    function Editmo3Component(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.enable = true;
        this.nam2 = ['0'];
        this.nam3 = ['0'];
        this.nam4 = ['0'];
        this.nam5 = ['0'];
        this.str1 = '';
        this.str1sp = '';
        this.str1tl = '';
        this.str1cl = '';
        this.namelen = 0;
        this.gse = new _mo3_mo3_model__WEBPACK_IMPORTED_MODULE_9__["Gse"]();
        this.mo3 = new _mo3_mo3_model__WEBPACK_IMPORTED_MODULE_9__["Mo3"]();
        this.spare = new _mo3_mo3_model__WEBPACK_IMPORTED_MODULE_9__["Spare"]();
        this.tools = new _mo3_mo3_model__WEBPACK_IMPORTED_MODULE_9__["Tools"]();
        this.consumable = new _mo3_mo3_model__WEBPACK_IMPORTED_MODULE_9__["Consumable"]();
    }
    Editmo3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemotemo3(id).subscribe(function (data) {
            console.log("data recevied");
            _this.mo3 = data;
            console.log("The gse s are=" + _this.mo3.gsenos);
            console.log(_this.mo3);
            //   console.log("The spares  are="+this.mo3.sparenos);
            _this.nam2 = _this.mo3.gsenos;
            _this.name = _this.mo3.gsenos;
            _this.nam3 = _this.mo3.sparenos;
            _this.namesp = _this.mo3.sparenos;
            _this.nam4 = _this.mo3.toolsnos;
            _this.nametl = _this.mo3.toolsnos;
            _this.nam5 = _this.mo3.consumablenos;
            _this.namecl = _this.mo3.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            console.log(_this.copystrcl);
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
    Editmo3Component.prototype.function1 = function (e, id) {
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
    Editmo3Component.prototype.function2 = function (e, id) {
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
    Editmo3Component.prototype.function3 = function (e, id) {
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
    Editmo3Component.prototype.function4 = function (e, id) {
        console.log(this.nam5);
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
    Editmo3Component.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.mo3.gsenos = this.copystr;
        this.mo3.sparenos = this.copystrsp;
        this.mo3.toolsnos = this.copystrtl;
        this.mo3.consumablenos = this.copystrcl;
        this._service.addUsertoRemotemo3(this.mo3).subscribe(function (data) {
            console.log("data edited successfully");
            _this.toastr.showInfo('Mo3 service updation success', 'Mo3 update');
            _this._router.navigate(['/routine/mo3']);
        }, function (error) { return _this.toastr.showError(error, 'Mo3 update'); });
    };
    Editmo3Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _mo3_mo3_service__WEBPACK_IMPORTED_MODULE_8__["Mo3Service"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Editmo3Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmo3',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editmo3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/editmo3/editmo3.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editmo3.component.css */ "./src/app/views/routine/mo3/editmo3/editmo3.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _mo3_mo3_service__WEBPACK_IMPORTED_MODULE_8__["Mo3Service"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Editmo3Component);
    return Editmo3Component;
}());



/***/ }),

/***/ "./src/app/views/routine/mo3/mo3.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/routine/mo3/mo3.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width:100%;\r\n    height: 300px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm91dGluZS9tbzMvbW8zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb3V0aW5lL21vMy9tbzMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGNlbC10YWJsZXtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/routine/mo3/mo3.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/routine/mo3/mo3.component.ts ***!
  \****************************************************/
/*! exports provided: Mo3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo3Component", function() { return Mo3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _mo3_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo3.model */ "./src/app/views/routine/mo3/mo3.model.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _mo3_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo3.service */ "./src/app/views/routine/mo3/mo3.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
var Mo3Component = /** @class */ (function () {
    function Mo3Component(_http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
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
        this.mo3 = new _mo3_model__WEBPACK_IMPORTED_MODULE_5__["Mo3"]();
        this.currentPage = 1;
        this._service.share.subscribe(function (x) { _this.rolltext = x || localStorage.getItem('a'); });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) { _this.uname = x1 || localStorage.getItem('b'); });
        console.log("the Uname text is ======" + this.uname);
    }
    Mo3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem('opennav'));
        localStorage.setItem('opennav', 'mo3');
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
        this._service.countrecordmo3().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdatamo3(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.mo3 = data;
            _this.totalItems = _this.rec1;
            var activities = _this.mo3;
        } /*for first mo3*/); /* for first getdata*/
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
    Mo3Component.prototype.ngOnDestroy = function () {
    };
    Mo3Component.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/routine/mo3/editmo3", id]);
    };
    Mo3Component.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/routine/mo3/addmo3"]);
    };
    Mo3Component.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == 'searching') {
            this._service.counteruserecordmo3(this.searchname).subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service.fetchUserBymo3(this.x - 1, parseInt(this.perpage), this.searchname).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.mo3 = datasear;
                console.log("to test spare" + _this.mo3);
            });
        } /*IF */
        else if (this.mode == 'normal' || this.mode == "deleting") {
            this._service.getdatamo3(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.mo3 = data;
            } /*for first mo3*/); /* for first getdata*/
            this._service.countrecordmo3().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    Mo3Component.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = 'searching';
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordmo3(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service.fetchUserBymo3(this.m2, parseInt(this.perpage), name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("Spare Number not exist");
            });
        }
        else if (this.perpageflag == undefined) {
            this._service.fetchUserBymo3(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("mo3  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    Mo3Component.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordmo3().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdatamo3(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first mo3*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    Mo3Component.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
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
        } /*for first mo3*/); /* for first getdata*/
        this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first mo3*/); /* for first getdata*/
        this.toolsservice.fetchUserListFromRemotetoolscondition(toolsnos.toString()).subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first mo3*/); /* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first mo3*/); /* for first getdata*/
    };
    Mo3Component.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemotemo3(id).subscribe(function (data) {
            console.log('deleted sucesssfully');
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service.getdatamo3(_this.x - 1, parseInt(_this.perpage)).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdatamo3(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Mo3 service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Mo3 service');
        });
    };
    Mo3Component.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    Mo3Component.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
    };
    Mo3Component.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem('service', JSON.stringify(this.mo3));
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
    Mo3Component.prototype.getServiceData = function (mo3) {
        console.log('service..' + mo3);
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
                ], mo3.map(function (ed) {
                    return [ed.seqno, ed.ammtcno, ed.cat, ed.type, ed.trade, ed.description, ed.effectivity];
                }))
            },
            pageBreak: 'after',
        };
    };
    Mo3Component.prototype.getGseData = function (gse) {
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
    Mo3Component.prototype.getToolsData = function (tools) {
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
    Mo3Component.prototype.getSpareData = function (spare) {
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
    Mo3Component.prototype.getConsumableData = function (consumable) {
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
    Mo3Component.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"] },
        { type: _mo3_service__WEBPACK_IMPORTED_MODULE_10__["Mo3Service"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] }
    ]; };
    Mo3Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mo3',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mo3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/mo3/mo3.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mo3.component.css */ "./src/app/views/routine/mo3/mo3.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_8__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_9__["ToolsserviceService"], _mo3_service__WEBPACK_IMPORTED_MODULE_10__["Mo3Service"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_11__["SpareserviceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__["GseserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]])
    ], Mo3Component);
    return Mo3Component;
}());



/***/ }),

/***/ "./src/app/views/routine/mo3/mo3.model.ts":
/*!************************************************!*\
  !*** ./src/app/views/routine/mo3/mo3.model.ts ***!
  \************************************************/
/*! exports provided: Mo3, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo3", function() { return Mo3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Mo3 = /** @class */ (function () {
    function Mo3() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Mo3;
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

/***/ "./src/app/views/routine/mo3/mo3.service.ts":
/*!**************************************************!*\
  !*** ./src/app/views/routine/mo3/mo3.service.ts ***!
  \**************************************************/
/*! exports provided: Mo3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mo3Service", function() { return Mo3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Mo3Service = /** @class */ (function () {
    function Mo3Service(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    Mo3Service.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    Mo3Service.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    Mo3Service.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    Mo3Service.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    Mo3Service.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    Mo3Service.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    Mo3Service.prototype.fetchUserListFromRemotemo3 = function () {
        return this._http.get("http://localhost:8080/getmo3list");
    };
    Mo3Service.prototype.fetchUserByIdFromRemotemo3 = function (id) {
        return this._http.get("http://localhost:8080/getmo3byid/" + id);
    };
    Mo3Service.prototype.addUsertoRemotemo3 = function (mo3) {
        return this._http.post("http://localhost:8080/addmo3", mo3);
    };
    Mo3Service.prototype.deleteUserByIdFromRemotemo3 = function (id) {
        return this._http.delete("http://localhost:8080/deletemo3byidtest/" + id);
    };
    Mo3Service.prototype.getdatamo3 = function (pa, per) {
        return this._http.get("http://localhost:8080/mo3/page/" + pa + "/" + per);
    };
    Mo3Service.prototype.fetchfindlastmo3 = function () {
        return this._http.get("http://localhost:8080/findlastmo3");
    };
    Mo3Service.prototype.countrecordmo3 = function () {
        return this._http.get("http://localhost:8080/getcountlistmo3");
    };
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
    Mo3Service.prototype.counteruserecordmo3 = function (no1) {
        return this._http.get("http://localhost:8080/getcountmo3?seqno=" + no1);
    };
    Mo3Service.prototype.fetchUserBymo3 = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displaymo3/" + page + "/" + per + "?seqno=" + no1);
    };
    Mo3Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Mo3Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Mo3Service);
    return Mo3Service;
}());



/***/ }),

/***/ "./src/app/views/routine/routine-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/routine/routine-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RoutineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineRoutingModule", function() { return RoutineRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _days14_days14_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./days14/days14.component */ "./src/app/views/routine/days14/days14.component.ts");
/* harmony import */ var _mo1_mo1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mo1/mo1.component */ "./src/app/views/routine/mo1/mo1.component.ts");
/* harmony import */ var _mo3_mo3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mo3/mo3.component */ "./src/app/views/routine/mo3/mo3.component.ts");
/* harmony import */ var _days14_adddays_adddays_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./days14/adddays/adddays.component */ "./src/app/views/routine/days14/adddays/adddays.component.ts");
/* harmony import */ var _days14_editdays_editdays_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./days14/editdays/editdays.component */ "./src/app/views/routine/days14/editdays/editdays.component.ts");
/* harmony import */ var _mo1_addmo1_addmo1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mo1/addmo1/addmo1.component */ "./src/app/views/routine/mo1/addmo1/addmo1.component.ts");
/* harmony import */ var _mo1_editmo1_editmo1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mo1/editmo1/editmo1.component */ "./src/app/views/routine/mo1/editmo1/editmo1.component.ts");
/* harmony import */ var _mo3_addmo3_addmo3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mo3/addmo3/addmo3.component */ "./src/app/views/routine/mo3/addmo3/addmo3.component.ts");
/* harmony import */ var _mo3_editmo3_editmo3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mo3/editmo3/editmo3.component */ "./src/app/views/routine/mo3/editmo3/editmo3.component.ts");













var routes = [
    {
        path: '',
        data: {
            title: 'routine'
        }
    },
    { path: 'days14', component: _days14_days14_component__WEBPACK_IMPORTED_MODULE_4__["Days14Component"],
        data: {
            title: 'Days14'
        } },
    { path: 'days14/adddays', component: _days14_adddays_adddays_component__WEBPACK_IMPORTED_MODULE_7__["AdddaysComponent"], data: {
            title: 'Days14/adddays'
        }
    },
    { path: 'days14/editdays/:id', component: _days14_editdays_editdays_component__WEBPACK_IMPORTED_MODULE_8__["EditdaysComponent"],
        data: {
            title: 'Days14/editdays'
        }
    },
    { path: 'mo1', component: _mo1_mo1_component__WEBPACK_IMPORTED_MODULE_5__["Mo1Component"],
        data: {
            title: 'Mo1'
        }
    },
    { path: 'mo1/addmo1', component: _mo1_addmo1_addmo1_component__WEBPACK_IMPORTED_MODULE_9__["Addmo1Component"],
        data: {
            title: 'Mo1/addmo1'
        }
    },
    { path: 'mo1/editmo1/:id', component: _mo1_editmo1_editmo1_component__WEBPACK_IMPORTED_MODULE_10__["Editmo1Component"],
        data: {
            title: 'Mo1/editmo1'
        }
    },
    { path: 'mo3', component: _mo3_mo3_component__WEBPACK_IMPORTED_MODULE_6__["Mo3Component"],
        data: {
            title: 'Mo3'
        }
    },
    { path: 'mo3/addmo3', component: _mo3_addmo3_addmo3_component__WEBPACK_IMPORTED_MODULE_11__["Addmo3Component"],
        data: {
            title: 'Mo3/addmo3'
        }
    },
    { path: 'mo3/editmo3/:id', component: _mo3_editmo3_editmo3_component__WEBPACK_IMPORTED_MODULE_12__["Editmo3Component"],
        data: {
            title: 'Mo3/editmo3'
        }
    },
];
var RoutineRoutingModule = /** @class */ (function () {
    function RoutineRoutingModule() {
    }
    RoutineRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutineRoutingModule);
    return RoutineRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/routine/routine.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/routine/routine.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JvdXRpbmUvcm91dGluZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/routine/routine.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/routine/routine.component.ts ***!
  \****************************************************/
/*! exports provided: RoutineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineComponent", function() { return RoutineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoutineComponent = /** @class */ (function () {
    function RoutineComponent() {
    }
    RoutineComponent.prototype.ngOnInit = function () {
    };
    RoutineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routine',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./routine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/routine/routine.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./routine.component.css */ "./src/app/views/routine/routine.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RoutineComponent);
    return RoutineComponent;
}());



/***/ }),

/***/ "./src/app/views/routine/routine.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/routine/routine.module.ts ***!
  \*************************************************/
/*! exports provided: RoutineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineModule", function() { return RoutineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _routine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routine-routing.module */ "./src/app/views/routine/routine-routing.module.ts");
/* harmony import */ var _routine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routine.component */ "./src/app/views/routine/routine.component.ts");
/* harmony import */ var _days14_days14_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./days14/days14.component */ "./src/app/views/routine/days14/days14.component.ts");
/* harmony import */ var _mo1_mo1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mo1/mo1.component */ "./src/app/views/routine/mo1/mo1.component.ts");
/* harmony import */ var _mo3_mo3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mo3/mo3.component */ "./src/app/views/routine/mo3/mo3.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _days14_adddays_adddays_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./days14/adddays/adddays.component */ "./src/app/views/routine/days14/adddays/adddays.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _days14_editdays_editdays_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./days14/editdays/editdays.component */ "./src/app/views/routine/days14/editdays/editdays.component.ts");
/* harmony import */ var _mo1_addmo1_addmo1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mo1/addmo1/addmo1.component */ "./src/app/views/routine/mo1/addmo1/addmo1.component.ts");
/* harmony import */ var _mo1_editmo1_editmo1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mo1/editmo1/editmo1.component */ "./src/app/views/routine/mo1/editmo1/editmo1.component.ts");
/* harmony import */ var _mo3_addmo3_addmo3_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mo3/addmo3/addmo3.component */ "./src/app/views/routine/mo3/addmo3/addmo3.component.ts");
/* harmony import */ var _mo3_editmo3_editmo3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mo3/editmo3/editmo3.component */ "./src/app/views/routine/mo3/editmo3/editmo3.component.ts");
















//import { AddspareComponent } from './addspare/addspare.component';
//import { EditspareComponent } from './editspare/editspare.component';
//import { PicgseComponent } from './picgse/picgse.component';










var RoutineModule = /** @class */ (function () {
    function RoutineModule() {
    }
    RoutineModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_routine_component__WEBPACK_IMPORTED_MODULE_6__["RoutineComponent"], _days14_days14_component__WEBPACK_IMPORTED_MODULE_7__["Days14Component"], _mo1_mo1_component__WEBPACK_IMPORTED_MODULE_8__["Mo1Component"], _mo3_mo3_component__WEBPACK_IMPORTED_MODULE_9__["Mo3Component"], _days14_adddays_adddays_component__WEBPACK_IMPORTED_MODULE_18__["AdddaysComponent"], _days14_editdays_editdays_component__WEBPACK_IMPORTED_MODULE_21__["EditdaysComponent"], _mo1_addmo1_addmo1_component__WEBPACK_IMPORTED_MODULE_22__["Addmo1Component"], _mo1_editmo1_editmo1_component__WEBPACK_IMPORTED_MODULE_23__["Editmo1Component"], _mo3_addmo3_addmo3_component__WEBPACK_IMPORTED_MODULE_24__["Addmo3Component"], _mo3_editmo3_editmo3_component__WEBPACK_IMPORTED_MODULE_25__["Editmo3Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__["TabsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_15__["CheckModule"],
                ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_14__["Ng2LoadingSpinnerModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_12__["ButtonsModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginationModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__["ConfirmationPopoverModule"],
                _routine_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutineRoutingModule"]
            ],
        })
    ], RoutineModule);
    return RoutineModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-routine-routine-module.js.map