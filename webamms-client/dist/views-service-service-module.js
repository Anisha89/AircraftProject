(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-service-service-module"],{

/***/ "./node_modules/angular-formio-pdf/fesm5/angular-formio-pdf.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-formio-pdf/fesm5/angular-formio-pdf.js ***!
  \*********************************************************************/
/*! exports provided: AngularFormioPdfComponent, AngularFormioPdfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFormioPdfComponent", function() { return AngularFormioPdfComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFormioPdfModule", function() { return AngularFormioPdfModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-formio-pdf/angular-formio-pdf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = moment__WEBPACK_IMPORTED_MODULE_1__;
var AngularFormioPdfComponent = /** @class */ (function () {
    function AngularFormioPdfComponent() {
        this.onRenderBase64 = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onRenderBuffer = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onRenderBlob = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pdfconfig = {
            footer: (/**
             * @param {?} currentPage
             * @param {?} pageCount
             * @return {?}
             */
            function (currentPage, pageCount) {
                return [{ text: currentPage.toString() + ' of ' + pageCount, alignment: 'right', margin: [0, 40, 20, 15] }];
            }),
            pageSize: 'A4',
            pageOrientation: 'portrait',
            pageMargins: [40, 40, 40, 80],
            content: [],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 15],
                    alignment: 'center'
                },
                label: {
                    bold: true,
                    fontSize: 14,
                    lineHeight: 1.3
                },
                value: {
                    height: 30,
                    color: '#222'
                },
                table: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black',
                    alignment: 'center',
                    margin: [0, 5, 0, 5]
                },
                para: {
                    lineHeight: 1.5,
                    alignment: 'center',
                    margin: [0, 10, 0, 15]
                },
                columns: {
                    margin: [0, 15, 0, 15]
                },
                signature: {
                    width: 520
                }
            },
            defaultStyle: {
                columnGap: 20
            }
        };
    }
    /**
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pdf = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.pdfconfig, this.pdf);
        this.simplifiedDate = this.component.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            return _this.getSimplifiedLayout(v);
        }));
        this.simplifiedDate.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            _this.getSimplifiedPdfLayout(v);
        }));
        this.generatepdf();
    };
    /**
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.generatepdf = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var pdfDocGenerator = pdfMake.createPdf(this.pdfconfig);
        pdfDocGenerator.getDataUrl((/**
         * @param {?} dataUrl
         * @return {?}
         */
        function (dataUrl) {
            /** @type {?} */
            var targetElement = document.getElementById('angularFormIOPdf');
            /** @type {?} */
            var iframe = _this.createiframe();
            iframe.src = dataUrl;
            targetElement.appendChild(iframe);
        }));
        pdfDocGenerator.getBase64((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            // alert(data);
            _this.onRenderBase64.emit(data);
        }));
        pdfDocGenerator.getBuffer((/**
         * @param {?} buffer
         * @return {?}
         */
        function (buffer) {
            _this.onRenderBuffer.emit(buffer);
        }));
        pdfDocGenerator.getBlob((/**
         * @param {?} blob
         * @return {?}
         */
        function (blob) {
            _this.onRenderBlob.emit(blob);
        }));
    };
    /**
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.createiframe = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iframe = document.createElement('iframe');
        iframe.setAttribute('id', 'ifAssessmentView');
        iframe.setAttribute('name', 'ifAssessmentView');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('webkitallowfullscreen', '');
        iframe.setAttribute('mozallowfullscreen', '');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('style', 'width: -webkit-fill-available; height: -webkit-fill-available;');
        return iframe;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.getSimplifiedLayout = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (data.type === 'columns') {
            return this.getLayoutColumns(data);
        }
        else if (data.type === 'fieldset' || data.type === 'panel' || data.type === 'well') {
            if (data.type === 'panel') {
                return {
                    type: data.type,
                    value: this.submission[data.key] ? this.submission[data.key] : '',
                    key: data.key,
                    hidelabel: false,
                    label: data.title,
                    input: data.input,
                    component: this.getComponent(data.components)
                };
            }
            else {
                return {
                    type: data.type,
                    value: this.submission[data.key] ? this.submission[data.key] : '',
                    key: data.key,
                    hidelabel: data.hideLabel,
                    label: data.label,
                    input: data.input,
                    component: this.getComponent(data.components)
                };
            }
        }
        else if (data.type === 'table') {
            return {
                type: data.type,
                value: this.submission[data.key] ? this.submission[data.key] : '',
                key: data.key,
                hidelabel: data.hideLabel,
                label: data.label,
                input: data.input,
                component: data.rows.map((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) {
                    return k.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) {
                        return _this.getComponent(c.components);
                    }));
                }))
            };
        }
        else if (data.input) {
            /** @type {?} */
            var out = {
                type: data.type,
                value: this.submission[data.key] ? this.submission[data.key] : '',
                key: data.key,
                hidelabel: data.hideLabel,
                label: data.label,
                input: data.input,
                component: data.components && data.components.length ? this.getComponent(data.components) : undefined
            };
            if (data.type === 'datetime') {
                out.value = this.submission[data.key] ? moment(this.submission[data.key]).format('DD-MM-YYYY') : '';
            }
            else if (data.key === 'submit') {
                out.value = '';
                out.hidelabel = true;
            }
            return out;
        }
    };
    /**
     * @param {?} v
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.getLayoutColumns = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        /** @type {?} */
        var obj = {
            type: v.type,
            value: this.submission[v.key] ? this.submission[v.key] : '',
            key: v.key,
            label: v.label,
            component: v.columns.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                if (x.type === 'column') {
                    return {
                        type: x.type,
                        value: _this.submission[x.key] ? _this.submission[x.key] : '',
                        key: x.key,
                        hidelabel: x.hideLabel,
                        label: x.label,
                        input: false,
                        component: x.components && x.components.length ? _this.getComponent(x.components) : undefined
                    };
                }
                else {
                    return v.type;
                }
            }))
        };
        obj.component = [].concat.apply([], obj.component);
        return obj;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.getComponent = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        return data.map((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            if (k.input && k.type !== 'button' && k.key !== 'submit') {
                if (k.type === 'signature' && _this.submission[k.key] !== '') {
                    return {
                        type: k.type,
                        value: _this.submission[k.key] ? _this.submission[k.key] : '',
                        key: k.key,
                        image: true,
                        hidelabel: true,
                        label: k.label,
                        input: k.input,
                        component: k.components && k.components.length ? _this.getComponent(k.components) : undefined
                    };
                }
                else {
                    /** @type {?} */
                    var out = {
                        type: k.type,
                        value: _this.submission[k.key] ? _this.submission[k.key] : '',
                        key: k.key,
                        image: false,
                        hidelabel: k.hideLabel,
                        label: k.label,
                        input: k.input,
                        component: k.components && k.components.length ? _this.getComponent(k.components) : undefined
                    };
                    if (k.type === 'checkbox' || k.type === 'radio') {
                        out.hidelabel = true;
                    }
                    if (k.type === 'datetime') {
                        out.value = _this.submission[k.key] ? moment(_this.submission[k.key]).format('DD-MM-YYYY') : '';
                    }
                    return out;
                }
            }
            else if (k.type === 'htmlelement') {
                if (k.content.includes('<img src=')) {
                    return {
                        type: k.type,
                        value: k.content.replaceAll('<img src="', '').replaceAll('" alt="">', '').replaceAll('<br>', ''),
                        key: k.key,
                        hidelabel: true,
                        image: true,
                        label: k.label,
                        input: k.input,
                        component: k.components && k.components.length ? _this.getComponent(k.components) : undefined
                    };
                }
                else {
                    return {
                        type: k.type,
                        value: k.content.replaceAll('<center>', '').replaceAll('</center>', '').replaceAll('<input>', '').replaceAll('</input>', '')
                            .replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('<p>', '').replaceAll('</p>', '')
                            .replaceAll('<br>', ''),
                        key: k.key,
                        image: false,
                        hidelabel: true,
                        label: k.label,
                        style: k.style,
                        margin: k.margin,
                        input: k.input,
                        component: k.components && k.components.length ? _this.getComponent(k.components) : undefined
                    };
                }
            }
            else {
                return !k.input ? _this.getSimplifiedLayout(k) : k.type;
            }
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.getSimplifiedPdfLayout = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (data.type === 'columns') {
            if (data.component && data.component.length) {
                this.pdfconfig.content.push(this.getPdfLayoutColumns(data.component));
            }
        }
        else if (data.type === 'fieldset' || data.type === 'panel' || data.type === 'well') {
            if (data.type === 'panel') {
                if (!data.hidelabel) {
                    this.pdfconfig.content.push({
                        text: data.label,
                        style: 'header'
                    });
                }
                if (data.component && data.component.length) {
                    /** @type {?} */
                    var component = this.getPdfComponent(data.component, 'panel');
                    component = [].concat.apply([], component);
                    this.pdfconfig.content.push(component);
                }
            }
            else {
                this.getPdfInput(data);
            }
        }
        else if (data.type === 'table') {
            /** @type {?} */
            var tabel = {
                style: 'table',
                table: {
                    widths: data.component[0].map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return '*'; })),
                    body: data.component.map((/**
                     * @param {?} k
                     * @param {?} ind
                     * @return {?}
                     */
                    function (k, ind) {
                        /** @type {?} */
                        var rows = k.map((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) {
                            /** @type {?} */
                            var columns;
                            if (ind === 0) {
                                columns = c.length ? _this.getPdfComponent(c, 'table', true) : '';
                            }
                            else {
                                columns = c.length ? _this.getPdfComponent(c, 'table') : '';
                            }
                            columns = typeof columns !== 'string' ? [].concat.apply([], columns) : '';
                            return columns;
                        }));
                        return rows;
                    }))
                }
            };
            this.pdfconfig.content.push(tabel);
        }
        else if (data.input) {
            this.pdfconfig.content.push(this.getPdfInput(data));
        }
    };
    /**
     * @param {?} v
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.getPdfLayoutColumns = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        /** @type {?} */
        var col = v.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var component = x.component ? _this.getPdfComponent(x.component, 'column') : '';
            component = typeof component !== 'string' ? [].concat.apply([], component) : '';
            return component;
        }));
        /** @type {?} */
        var updatedcol = col.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            return {
                text: v === '' ? [] : v
            };
        }));
        updatedcol = [].concat.apply([], updatedcol);
        return {
            columns: updatedcol,
            style: 'columns'
        };
    };
    /**
     * @param {?} data
     * @param {?=} type
     * @param {?=} tablehead
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.getPdfComponent = /**
     * @param {?} data
     * @param {?=} type
     * @param {?=} tablehead
     * @return {?}
     */
    function (data, type, tablehead) {
        var _this = this;
        return data.map((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            if (k.input) {
                /** @type {?} */
                var arr = [];
                if (!k.hidelabel) {
                    arr.push({
                        text: k.label + " \n",
                        style: 'label'
                    });
                }
                if (k.image && k.value !== '') {
                    arr.push({
                        image: k.value,
                        style: 'signature'
                    });
                }
                else {
                    arr.push({
                        text: "" + k.value,
                        style: 'value'
                    });
                }
                if (k.component && k.component.length) {
                    arr.push(_this.getPdfComponent(k.component, 'inner'));
                }
                if (type === 'inner' || type === 'table' || type === 'column') {
                    return arr;
                }
                else {
                    _this.pdfconfig.content.push(arr);
                }
            }
            else if (k.type === 'htmlelement') {
                /** @type {?} */
                var arr = [];
                if (k.image && k.value !== '') {
                    arr.push({
                        image: k.value
                    });
                }
                else {
                    if (tablehead) {
                        arr.push({
                            text: k.value,
                            style: 'tableHeader'
                        });
                    }
                    else {
                        /** @type {?} */
                        var styles = k.style ? k.style : {};
                        /** @type {?} */
                        var textWithStyles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ text: k.value, style: 'para' }, styles);
                        arr.push(textWithStyles);
                    }
                }
                if (k.component && k.component.length) {
                    arr.push(_this.getPdfComponent(k.component, 'inner'));
                }
                if (type === 'table') {
                    return arr;
                }
                else {
                    _this.pdfconfig.content = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.pdfconfig.content, arr);
                }
            }
            else {
                if (!k.input) {
                    _this.getSimplifiedPdfLayout(k);
                }
            }
        }));
    };
    /**
     * @param {?} v
     * @return {?}
     */
    AngularFormioPdfComponent.prototype.getPdfInput = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (!v.hidelabel) {
            this.pdfconfig.content.push({
                text: v.label + " \n",
                style: 'label'
            });
        }
        this.pdfconfig.content.push({
            text: "" + v.value,
            style: 'value'
        });
        if (v.component && v.component.length) {
            /** @type {?} */
            var arr = [];
            arr.push(this.getPdfComponent(v.component));
            arr = [].concat.apply([], arr);
            this.pdfconfig.content.push(arr);
        }
    };
    AngularFormioPdfComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'angular-formio-pdf',
                    template: "<div id=\"angularFormIOPdf\"></div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AngularFormioPdfComponent.ctorParameters = function () { return []; };
    AngularFormioPdfComponent.propDecorators = {
        component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        submission: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        pdf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        onRenderBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onRenderBuffer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onRenderBlob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return AngularFormioPdfComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-formio-pdf.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularFormioPdfModule = /** @class */ (function () {
    function AngularFormioPdfModule() {
    }
    AngularFormioPdfModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [AngularFormioPdfComponent],
                    imports: [],
                    exports: [AngularFormioPdfComponent]
                },] }
    ];
    return AngularFormioPdfModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-formio-pdf.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-formio-pdf.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/addservice/addservice.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/addservice/addservice.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"max-width:100%\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n       Add  Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"addserviceform\" #addserviceform=\"ngForm\" (ngSubmit)=\"adduserformsubmit()\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Id</span>\r\n              <input type=\"text\"  class=\"form-control\"  placeholder=\"Id\" name=\"id\" [(ngModel)]=\"service.idservice\" required ngModel #id=\"ngModel\"  [class.is-invalid]=\"id.invalid && id.touched\"  >\r\n                </div>\r\n\r\n                <div class=\"text-danger\" *ngIf=\"id.errors && (id.invalid && id.touched)\">\r\n      \r\n                  <div class=\"text-danger\" *ngIf =\"id.errors?.required\"> Id is required.</div>\r\n           \r\n               </div>\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"service.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n    <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n      <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n\r\n   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       \r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-prepend input-group\"> \r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-text\">Smrd no</span>\r\n                <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"service.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Ammtc no</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"service.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                   >\r\n              </div>\r\n              <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n            \r\n              </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n       \r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                <span class=\"input-group-text\">Type</span>\r\n              \r\n                <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"service.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n              \r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-prepend input-group\"> \r\n                   <span class=\"input-group-text\">Cat</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                   [(ngModel)]=\"service.cat\" required >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n              \r\n                </div>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 \">\r\n              <div class=\"input-group\">\r\n                \r\n                <div class=\"input-prepend input-group\"> \r\n               <span class=\"input-group-text\">Effectivity</span>\r\n             <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"service.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                 <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n             \r\n               </div>\r\n           </div>\r\n\r\n            </div>\r\n \r\n            <div class=\"col-md-6 \">\r\n              <div class=\" input-group\">\r\n                   <span class=\"input-group-text\">Description</span>\r\n              \r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"service.description\" required >\r\n              </div>\r\n           </div>\r\n\r\n            \r\n\r\n           \r\n          </div>\r\n\r\n            <div class=\"form-group row \">\r\n             \r\n              \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"service.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n            \r\n          <div class=\"row\">\r\n            <div >\r\n              <tabset >\r\n                <tab class =\"excel-table\" heading=\"GSE\" id=\"isgse\" index=0 (click)=\"gseselected()\" >\r\n                  <div *ngIf=\"((isgse == true) );then gsepart;\">\r\n                  </div>\r\n                  <ng-template #gsepart>\r\n                <table class=\"table table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Select</th>\r\n                      <th>Sno </th>\r\n                      <th>Gse-no </th>\r\n                      <th>Port-no</th>\r\n                      <th>Oem</th>\r\n                      <th>Description</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                   <tr *ngFor =\"let u of gse\" [class.bg-secondary]='nam2.indexOf(u.idgse)>-1' >\r\n                     <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                    <div *ngIf=\"(nam2.indexOf(u.idgse)>-1);then truepart;else falsepart;\">  \r\n                    </div> \r\n                    <!-- </td>  -->\r\n            <ng-template #truepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" checked=\"true\"  (click)=\"function1($event,u.idgse)\">\r\n            </ng-template> \r\n            <ng-template #falsepart>\r\n              <input type=\"checkbox\"  id=\"myCheck\" (click)=\"function1($event,u.idgse)\">\r\n            </ng-template>\r\n               <td>{{u.sno }}</td> \r\n                <td> {{u.gseno}}</td>   \r\n                <td>{{u.portno}}</td> \r\n                <td>{{u.gdm}}</td>\r\n                <td>{{u.description}}</td>\r\n                    </tr> \r\n \r\n            </table>  \r\n      </ng-template>     \r\n  \r\n   \r\n  </tab>\r\n   <tab class=\"excel-table\" heading=\"SPARE\" id=\"isspare\" index=1 (click)=\"spareselected()\">\r\n    <div *ngIf=\"(isspare == true);then sparepart;\">\r\n    </div>\r\n    <ng-template #sparepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.seqno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n\r\n\r\n  <tab class=\"excel-table\"   heading=\"TOOLS\" id=\"istools\" index=2 (click)=\"toolsselected()\"(select)=\"toolschanged()\">\r\n    <div *ngIf=\"(istools == true);then toolspart;\">\r\n    </div>\r\n    <ng-template #toolspart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>Tools_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n   <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.toolsno}}</td>\r\n    <td>{{u1.gdm}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n  <tab class=\"excel-table\"   heading=\"CONSUMABLE\" id=\"isConsumable\" index=3 (click)=\"consumableselected()\"(select)=\"consumablechanged()\">\r\n    <div *ngIf=\"(isconsumable == true);then consumablepart;\">\r\n    </div>\r\n    <ng-template #consumablepart>\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n     <tr>\r\n     <th>Select</th>\r\n      <th>Sno </th>\r\n       <th>Part-no</th>\r\n       <th>consumable_no</th>\r\n       <th>Oem</th>\r\n     <th>Description</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n  <tr *ngFor =\"let u1 of dataconsumable\" [class.bg-secondary]='nam5.indexOf(u1.idconsumable)>-1'>\r\n         <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n    <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n    </div> \r\n  <!-- </td>  -->\r\n  <ng-template #truepart>\r\n\r\n     <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n    </ng-template> \r\n          <ng-template #falsepart>\r\n          \r\n    <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n  </ng-template>\r\n  \r\n  \r\n\r\n  \r\n\r\n   <td>{{u1.sno }}</td> \r\n    \r\n    <td>{{u1.partno}}</td> \r\n    <td>{{u1.consumableno}}</td>\r\n    <td>{{u1.oem}}</td>\r\n    <td>{{u1.description}}</td>\r\n  </tr> \r\n \r\n</table>  \r\n</ng-template>     \r\n\r\n  </tab>\r\n\r\n\r\n  \r\n  \r\n</tabset>\r\n \r\n            </div>\r\n           \r\n          </div>\r\n         \r\n      <!-- !--form--end--! -->\r\n      \r\n    </form>\r\n    \r\n  </div>\r\n      <div class=\"card-footer\">\r\n         \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"adduserformsubmit()\" [disabled]= '!addserviceform.valid'>Submit</button>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/editservice/editservice.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/editservice/editservice.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"max-width:100%;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n     \r\n      <div class=\"card-header\">\r\n        Edit Services\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n        <form  name =\"editserviceform\" #editserviceform=\"ngForm\" (ngSubmit)=\"edituserformsubmit()\">\r\n          <fieldset [disabled]=\"enable\"> \r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\" input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Seqno</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"seqNo\" autocomplete=\"seqno\" name=\"seqno\" [(ngModel)]=\"service.seqno\"  [class.is-invalid]=\"seqno.invalid && seqno.touched\"     #seqno=\"ngModel\" \r\n                     required >\r\n                  </div>\r\n                  \r\n                  <div class=\"text-danger\" *ngIf=\"seqno.errors && (seqno.invalid && seqno.touched)\">\r\n      \r\n                       <div class=\"text-danger\" *ngIf =\"seqno.errors?.required\"> Seqno is required.</div>\r\n  \r\n                      </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-prepend input-group\"> \r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-text\">Smrd no</span>\r\n                  <input type=\"text\"  class=\"form-control\"  placeholder=\"smrdno\" name=\"smrdno\" [(ngModel)]=\"service.smrdno\" required ngModel [class.is-invalid]=\"smrdno.invalid && smrdno.touched\"  #smrdno=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"smrdno.errors && (smrdno.invalid && smrdno.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"smrdno.errors?.required\"> Smrd No is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n         \r\n  \r\n  \r\n            <div class=\"form-group row\">\r\n            \r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Ammtc no</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"ammtcno\" autocomplete=\"ammtcno\" name=\"ammtcno\" [(ngModel)]=\"service.ammtcno\" required [class.is-invalid]=\"ammtcno.invalid && ammtcno.touched\"   #ammtcno=\"ngModel\"\r\n                     >\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"ammtcno.errors && (ammtcno.invalid && ammtcno.touched)\">\r\n                  <div class=\"text-danger\" *ngIf =\"ammtcno.errors?.required\"> Ammt No is required.</div>\r\n              \r\n                </div>\r\n                </div>\r\n               </div>\r\n  \r\n               <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Trade</span>\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"trade\" ngModel #trade=\"ngModel\" [class.is-invalid]=\"trade.invalid && trade.touched\"  [(ngModel)]=\"service.trade\"name=\"trade\"  required  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"trade.errors && (trade.invalid && trade.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"trade.errors?.required\"> Trade is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                  <span class=\"input-group-text\">Type</span>\r\n                \r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"type\" name=\"type\" [(ngModel)]=\"service.type\" required [class.is-invalid]=\"type.invalid && type.touched\"   #type=\"ngModel\"\r\n                  >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"type.errors && (type.invalid && type.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"type.errors?.required\"> Type is required.</div>\r\n                \r\n                  </div>\r\n  \r\n              </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-prepend input-group\"> \r\n                     <span class=\"input-group-text\">Cat</span>\r\n                \r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"cat\" autocomplete=\"cat\" name=\"cat\" [class.is-invalid]=\"cat.invalid && cat.touched\"   #cat=\"ngModel\"\r\n                     [(ngModel)]=\"service.cat\" required >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"cat.errors && (cat.invalid && cat.touched)\">\r\n                    <div class=\"text-danger\" *ngIf =\"cat.errors?.required\"> Cat is required.</div>\r\n                \r\n                  </div>\r\n                </div>\r\n               </div>\r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6 \">\r\n                <div class=\"input-group\">\r\n                  \r\n                  <div class=\"input-prepend input-group\"> \r\n                 <span class=\"input-group-text\">Effectivity</span>\r\n               <input type=\"text\"  class=\"form-control\"  placeholder=\"effectivity\" name=\"effectivity\" [(ngModel)]=\"service.effectivity\" [class.is-invalid]=\"effectivity.invalid && effectivity.touched\"   required ngModel #effectivity=\"ngModel\" >\r\n                  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"effectivity.errors && (effectivity.invalid && effectivity.touched)\">\r\n                   <div class=\"text-danger\" *ngIf =\"effectivity.errors?.required\"> Effectivity is required.</div>\r\n               \r\n                 </div>\r\n             </div>\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                  <div class=\" input-group\">\r\n                       <span class=\"input-group-text\">Description</span>\r\n                  \r\n                       <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"description\" name=\"description\" [(ngModel)]=\"service.description\" required >\r\n                  </div>\r\n               </div>\r\n            </div>\r\n             \r\n            <div class=\"row\">\r\n            <div>\r\n              \r\n \r\n              <tabset width=100%>\r\n  \r\n \r\n\r\n                <tab class=\"excel-table\" heading=\"GSE\"name=\"isgse\" index=0 >\r\n                  <div *ngIf=\"((isgse == true) && (isselected == false))\">\r\n                \r\n                  </div>\r\n                  \r\n                  <table class=\"table table-sm\">\r\n                    <thead>\r\n                <tr>\r\n                <th>Select</th>\r\n                <th>Sno </th>\r\n                \r\n                <th>Part-no</th>\r\n                <th>Oem</th>\r\n                <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                \r\n                     <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                         \r\n                \r\n                 <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n                  <div *ngIf=\"(nam2.indexOf(u1.idgse)>-1);then truepart;else falsepart;\">  \r\n                  </div> \r\n                <!-- </td>  -->\r\n                \r\n                \r\n                \r\n                \r\n                  <ng-template #truepart>\r\n                \r\n                   <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function1($event,u1.idgse)\">\r\n                  </ng-template> \r\n                        <ng-template #falsepart>\r\n                        \r\n                  <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function1($event,u1.idgse)\">\r\n                </ng-template>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                 <td>{{u1.seqno }}</td> \r\n                  \r\n                  <td>{{u1.partno}}</td> \r\n                  <td>{{u1.oem}}</td>\r\n                  <td>{{u1.description}}</td>\r\n                </tr> \r\n                \r\n                </table>  \r\n                    \r\n                <!--SPARE SELECTED PART STARTS -->\r\n                \r\n                \r\n                  \r\n                    \r\n                <!-- SPARE SELECTED PART END -->  \r\n                \r\n                </tab>\r\n                \r\n            <tab class=\"excel-table\" heading=\"SPARE\"name=\"isspare\" index=1 >\r\n              <div *ngIf=\"((isspare == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n            <tr *ngFor =\"let u1 of dataspare\" [class.bg-secondary]=\"nam3.indexOf(u1.idspare)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam3.indexOf(u1.idspare)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function2($event,u1.idspare)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function2($event,u1.idspare)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            <!--SPARE SELECTED PART STARTS -->\r\n            \r\n            \r\n              \r\n                \r\n            <!-- SPARE SELECTED PART END -->  \r\n            \r\n            </tab>\r\n            <tab class=\"excel-table\" heading=\"TOOLS\" name=\"istools\" index=2 >\r\n              <div *ngIf=\"((istools == true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n               <tr *ngFor =\"let u1 of datatools\" [class.bg-secondary]=\"nam4.indexOf(u1.idtools)>-1\">\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam4.indexOf(u1.idtools)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function3($event,u1.idtools)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function3($event,u1.idtools)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n            \r\n            <tab class=\"excel-table\" heading=\"CONSUMABLE\" name=\"isconsumable\" index=3 > \r\n               <div *ngIf=\"((isconsumable== true) && (isselected == false))\">\r\n            \r\n              </div>\r\n              \r\n              <table class=\"table table-sm\">\r\n                <thead>\r\n            <tr>\r\n            <th>Select</th>\r\n            <th>Sno </th>\r\n            \r\n            <th>Part-no</th>\r\n            <th>Oem</th>\r\n            <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            \r\n            \r\n              <tr *ngFor =\"let u1 of dataconsumable\"   [class.bg-secondary]=\"nam5.indexOf(u1.idconsumable)>-1\" >\r\n                     \r\n            \r\n             <!-- <td *ngFor=\"let u1 of nam2\"> -->\r\n              <div *ngIf=\"(nam5.indexOf(u1.idconsumable)>-1);then truepart;else falsepart;\">  \r\n              </div> \r\n            <!-- </td>  -->\r\n            \r\n            \r\n            \r\n            \r\n              <ng-template #truepart>\r\n            \r\n               <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\"  (click)=\"function4($event,u1.idconsumable)\">\r\n              </ng-template> \r\n                    <ng-template #falsepart>\r\n                    \r\n              <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"function4($event,u1.idconsumable)\">\r\n            </ng-template>\r\n            \r\n            \r\n            \r\n            \r\n            \r\n             <td>{{u1.seqno }}</td> \r\n              \r\n              <td>{{u1.partno}}</td> \r\n              <td>{{u1.oem}}</td>\r\n              <td>{{u1.description}}</td>\r\n            </tr> \r\n            \r\n            </table>  \r\n                \r\n            \r\n            \r\n            </tab>\r\n                 \r\n              </tabset>\r\n            </div>\r\n            <!-- <div *ngIf=\"(needcheck==true);then displaycheck;else uncheck;\">\r\n              </div> -->\r\n              <ng-template #displaycheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\" checked (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n          <ng-template #uncheck>\r\n            <input type=\"checkbox\"  id=\"myCheckrows\"  (click)=\"selectedrows($event)\">Selected Rows   \r\n          </ng-template>\r\n\r\n          \r\n          \r\n          </div>\r\n          <div class=\"card-footer\">\r\n         \r\n            <button type=\"button\" class=\"btn btn-sm btn-primary\"(click)=\"updateeditformsubmit()\" [disabled]=\"!editserviceform.valid\">Submit</button>\r\n          </div>\r\n      <!-- !--form--end--! -->\r\n    </fieldset>\r\n    </form>\r\n      </div>\r\n     \r\n    \r\n    </div>\r\n  </div>\r\n </div>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/generate/generate.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/generate/generate.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"animated fadeIn bg-white\"  style=\"max-width:100%\">\r\n    <div class=\"card-header  \">\r\n    \r\n      <strong>Work order</strong>\r\n    </div>\r\n    <div class=\"card-body\">\r\n             \r\n        <form #form=\"ngForm\" (ngSubmit) = \"onSubmit()\" >\r\n      \r\n          \r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Aircraft</span>\r\n                  </div>\r\n                  \r\n         <select  [(ngModel)]=\"selectedValue\"  class=\"form-control\" name=\"aircraft\" (change)=\"getData($event.target.value)\"   > \r\n          \r\n         \r\n            <option  *ngFor =\"let array of aircraft\"  [value]=\"array.id\">{{array.aircraft}}</option> \r\n          </select>\r\n                 \r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n         \r\n         \r\n         <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">PreparedBy</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" name=\"preapareBy\" [(ngModel)]=\"preparedBy\" required>\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">IssueBy</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" name =\"issueBy\" [(ngModel)]=\"issueBy\"required>\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <button class = \"btn btn-primary\" type =\"submit\"  (click)=\"createPdf()\">Save</button>\r\n        </form>\r\n        </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/service.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/service.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn bg-white\">\r\n  <div class=\"d-flex justify-content-between\">\r\n     <div class=\"d-flex\">\r\n        <div class=\"mt-3\" style=\"margin-left:24px\"> <i class=\"icon-menu icons font-1xl d-block \"  ></i>  </div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" *ngIf=\"addshowbutton\" type=\"button\"(click)=\"gotoaddaccount()\">New</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"createPdf()\" type=\"button\">Print</button></div>\r\n        <div class=\"mt-2 ml-3\"> <button class=\"btn btn-primary\" (click)=\"generate()\" type=\"button\">Generate Work order</button></div>\r\n     </div>\r\n     <div class=\"d-flex\">\r\n        <div class=\"mr-1 mt-2\"> <input class=\"form-control mr-sm-1\"   type=\"search\" placeholder=\"SEQ-NO/SMRDNO\" aria-label=\"Search\" id=\"search\"  name=\"search\" #search/></div>\r\n        <div class=\"mr-3 mt-2\"><button class=\"btn btn-primary \" type=\"submit\"(click)=\"gotosearchservice(search.value)\"><i class=\"fa fa-search \"></i></button></div>\r\n        <div class=\"mr-4 mt-2\"><button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"(click)=\"gotobackservice()\" ><i class=\"fa fa-refresh \"></i></button>  </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n     <table class=\"table table-sm\">\r\n        <thead>\r\n           <tr>\r\n              <!-- <th>Profile </th> -->\r\n              <th >Select </th>\r\n              <th >Seq_No </th>\r\n              <th>Smrd_No</th>\r\n              <th>Ammtc_No</th>\r\n              <th>Type</th>\r\n              <th>Cat</th>\r\n              <th>Effectivity</th>\r\n              <th>Description</th>\r\n              <th>Trade</th>\r\n              <th>Date_Created</th>\r\n              <th *ngIf=\"showdeletecaption\">Delete</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody>\r\n           <tr *ngFor =\"let u of data|paginate : config\" [class.bg-secondary]=\"selected_id===u.idservice\">\r\n           <div *ngIf=\"(nam2.indexOf(u.idservice)>-1);then truepartck;else falsepartck;\"> </div>\r\n           <ng-template #truepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\" checked=\"true\" (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <ng-template #falsepartck>\r\n              <td >\r\n                 <input type=\"checkbox\"  id=\"myCheck1\"  (click)=\"show($event,u.idservice,u.gsenos,u.sparenos,u.toolsnos,u.consumablenos)\">\r\n              </td>\r\n           </ng-template>\r\n           <td>\r\n              <div *ngIf=\"(rolltext=='regular')||(rolltext=='admin'||rolltext=='viewer');then truepart; else elsetemplate;\"></div>\r\n              <ng-template #truepart>\r\n                 <div>\r\n                    <button type=\"button\" class=\"btn btn-block btn-link active btn-lg\" style=\"margin-left:0;color:darkblue\" (click)=\"gotoedituser(u.idservice)\">{{u.seqno}}</button>\r\n                 </div>\r\n              </ng-template>\r\n              <ng-template #elsetemplate>\r\n                 <div>\r\n                    {{u.seqno}}\r\n                 </div>\r\n              </ng-template>\r\n           </td>\r\n           <td >{{u.smrdno}}</td>\r\n           <td >{{u.ammtcno}}</td>\r\n           <td>{{u.type}}</td>\r\n           <td >{{u.cat}}</td>\r\n           <td >{{u.effectivity}}</td>\r\n           <td >{{u.description}}</td>\r\n           <td >{{u.trade}}</td>\r\n           <td >{{u.date_created|date:'yyyy-MM-dd hh:mm:ss a'}}</td>\r\n           <td>\r\n              <button\r\n              class=\"btn btn-default \" *ngIf=\"showdeletebutton\"\r\n              mwlConfirmationPopover\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"left\"\r\n              (confirm)=\"gotodeleteuser(u.idservice)\"\r\n              (cancel)=\"cancelClicked = true\"\r\n              >\r\n              <i class=\"fa fa-trash  \"></i>\r\n              </button>\r\n           </td>\r\n           </tr>\r\n        </tbody>\r\n     </table>\r\n     <div class=\"card-body\">\r\n        <div class=\"row\">\r\n           <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n              <pagination [itemsPerPage]=\"perpage\"  id ='listing_pagination' [totalItems]=\"rec1\" [(ngModel)]=\"currentPage\" (pageChanged)=\"handlePageChange($event)\"></pagination>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div *ngIf=\"(istab==true || this.count != 0 && this.count1!=0 && this.count5!=0);then truepart;else falsepart;\"></div>\r\n     <ng-template #truepart>\r\n        <tabset>\r\n           <tab height =\"100px\" class=\"excel-table\" heading=\"GSE\">\r\n              <table class=\"table table-sm1\"  >\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Gse_No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u1 of datagse\" [class.bg-secondary]=\"nam2.indexOf(u1.idgse)>-1\">\r\n                    <td>{{u1.sno }}</td>\r\n                    <td>{{u1.gseno}}</td>\r\n                    <td>{{u1.portno}}</td>\r\n                    <td>{{u1.gdm}}</td>\r\n                    <td>{{u1.description}}</td>\r\n                    </tr> \r\n              </table>\r\n              \r\n           </tab>\r\n           <tab class=\"excel-table\" heading=\"SPARE\" >\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataspare\">\r\n                       <td>{{u2.seqno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab class=\"excel-table\"   heading=\"TOOLS\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port_No</th>\r\n                       <th>Tools_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of datatools\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.toolsno}}</td>\r\n                       <td>{{u2.ogm}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n           <tab  class=\"excel-table\"   heading=\"CONSUMABLE\">\r\n              <table class=\"table table-sm1\">\r\n                 <thead>\r\n                    <tr>\r\n                       <th>S.No </th>\r\n                       <th>Port-No</th>\r\n                       <th>Consumable_No</th>\r\n                       <th>Oem</th>\r\n                       <th>Description</th>\r\n                    </tr>\r\n                 </thead>\r\n                 <tbody>\r\n                    <tr *ngFor =\"let u2 of dataconsumable\">\r\n                       <td>{{u2.sno }}</td>\r\n                       <td>{{u2.partno}}</td>\r\n                       <td>{{u2.consumableno}}</td>\r\n                       <td>{{u2.oem}}</td>\r\n                       <td>{{u2.description}}</td>\r\n                    </tr>\r\n              </table>\r\n           </tab>\r\n        </tabset>\r\n     </ng-template>\r\n     <ng-template #falsepart>\r\n     </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/model/service.ts":
/*!**********************************!*\
  !*** ./src/app/model/service.ts ***!
  \**********************************/
/*! exports provided: Service, Consumable, Spare, Gse, Tools, Aircraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumable", function() { return Consumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spare", function() { return Spare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gse", function() { return Gse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aircraft", function() { return Aircraft; });
var Service = /** @class */ (function () {
    function Service() {
        this.gse = [];
        this.tools = [];
        this.consumable = [];
        this.spare = [];
        this.aircraft = [];
    }
    return Service;
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

/***/ "./src/app/service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ServiceService = /** @class */ (function () {
    function ServiceService(_http) {
        this._http = _http;
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.usercontent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.rowperpage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.share = this.content.asObservable();
        this.share1 = this.usercontent.asObservable();
        this.rowshare1 = this.rowperpage.asObservable();
    }
    ServiceService.prototype.updatedata = function (text, text1) {
        console.log(text);
        this.content.next(text);
        console.log(text1);
        this.usercontent.next(text1);
        console.log("The Role content value is = " + this.content.value);
        console.log("The User content value is = " + this.usercontent.value);
    };
    ServiceService.prototype.settingupdate = function (t1) {
        console.log("Rows per page in register.ts " + t1);
        this.rowperpage.next(t1);
        console.log("Rows per page in register.ts " + this.rowperpage.value);
    };
    ServiceService.prototype.fetchUserListFromRemotegse = function () {
        return this._http.get("http://localhost:8080/getgselist");
    };
    ServiceService.prototype.fetchUserListFromRemotetools = function () {
        return this._http.get("http://localhost:8080/gettoolslist");
    };
    ServiceService.prototype.fetchUserListFromRemotespare = function () {
        return this._http.get("http://localhost:8080/getsparelist");
    };
    ServiceService.prototype.fetchUserListFromRemoteconsumable = function () {
        return this._http.get("http://localhost:8080/getconsumablelist");
    };
    ServiceService.prototype.fetchUserListFromRemoteservice = function () {
        return this._http.get("http://localhost:8080/getservicelist");
    };
    ServiceService.prototype.fetchUserByIdFromRemoteservice = function (id) {
        return this._http.get("http://localhost:8080/getservicebyid/" + id);
    };
    ServiceService.prototype.addUsertoRemoteservice = function (service) {
        return this._http.post("http://localhost:8080/addservice", service);
    };
    ServiceService.prototype.deleteUserByIdFromRemoteservice = function (id) {
        return this._http.delete("http://localhost:8080/deleteservicebyidtest/" + id);
    };
    ServiceService.prototype.getdataservice = function (pa, per) {
        return this._http.get("http://localhost:8080/service1/page/" + pa + "/" + per);
    };
    ServiceService.prototype.fetchfindlastservice = function () {
        return this._http.get("http://localhost:8080/findlastservice");
    };
    ServiceService.prototype.countrecordservice = function () {
        return this._http.get("http://localhost:8080/getcountlistservice");
    };
    ServiceService.prototype.deleteimageservice = function (sn) {
        return this._http.get("http://localhost:8080/deleteservice/" + sn);
    };
    ServiceService.prototype.counteruserecordservice = function (no1) {
        return this._http.get("http://localhost:8080/getcountservice?seqno=" + no1);
    };
    ServiceService.prototype.fetchUserByservice = function (page, per, no1) {
        return this._http.get("http://localhost:8080/displayservice/" +
            page +
            "/" +
            per +
            "?seqno=" +
            no1);
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/views/service/addservice/addservice.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/service/addservice/addservice.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    \r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2VydmljZS9hZGRzZXJ2aWNlL2FkZHNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjs7SUFFakIsV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zZXJ2aWNlL2FkZHNlcnZpY2UvYWRkc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/service/addservice/addservice.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/service/addservice/addservice.component.ts ***!
  \******************************************************************/
/*! exports provided: AddserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddserviceComponent", function() { return AddserviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../model/service */ "./src/app/model/service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");













pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_8___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_9___default.a.pdfMake.vfs;
var AddserviceComponent = /** @class */ (function () {
    function AddserviceComponent(_router, consumableservice, toolsservice, _service, _gseservice, _spareservice, _http, toastr) {
        this._router = _router;
        this.consumableservice = consumableservice;
        this.toolsservice = toolsservice;
        this._service = _service;
        this._gseservice = _gseservice;
        this._spareservice = _spareservice;
        this._http = _http;
        this.toastr = toastr;
        this.service = new _model_service__WEBPACK_IMPORTED_MODULE_11__["Service"]();
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
        this.gse = new _model_service__WEBPACK_IMPORTED_MODULE_11__["Gse"]();
        this.spare = new _model_service__WEBPACK_IMPORTED_MODULE_11__["Spare"]();
        this.tools = new _model_service__WEBPACK_IMPORTED_MODULE_11__["Tools"]();
        this.consumable = new _model_service__WEBPACK_IMPORTED_MODULE_11__["Consumable"]();
    }
    AddserviceComponent.prototype.ngOnInit = function () {
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
    AddserviceComponent.prototype.gseselected = function () {
        var _this = this;
        this._gseservice.fetchUserListFromRemotegse().subscribe(function (data) {
            _this.data = data;
        });
    };
    AddserviceComponent.prototype.spareselected = function () {
        var _this = this;
        this._spareservice.fetchUserListFromRemotespare().subscribe(function (data) {
            _this.dataspare = data;
        });
    };
    AddserviceComponent.prototype.toolsselected = function () {
        var _this = this;
        this.toolsservice.fetchUserListFromRemotetools().subscribe(function (data) {
            _this.datatools = data;
        });
    };
    AddserviceComponent.prototype.consumableselected = function () {
        var _this = this;
        this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(function (data) {
            _this.dataconsumable = data;
        });
    };
    AddserviceComponent.prototype.adduserformsubmit = function () {
        var _this = this;
        console.log("Welcome to SPARE Registration");
        this.d = Date.now().toString();
        this.service.date_created = this.d;
        if (this.copystr == null || this.copystr == undefined) {
            this.service.gsenos = '00';
        }
        else {
            this.service.gsenos = this.copystr;
        }
        if (this.copystrsp == null || this.copystrsp == undefined) {
            this.service.sparenos = '00';
        }
        else {
            this.service.sparenos = this.copystrsp;
        }
        if (this.copystrtl == null || this.copystrtl == undefined) {
            this.service.toolsnos = '00';
        }
        else {
            this.service.toolsnos = this.copystrtl;
        }
        if (this.copystrcl == null || this.copystrcl == undefined) {
            this.service.consumablenos = '00';
        }
        else {
            this.service.consumablenos = this.copystrcl;
        }
        console.log(this.service.gsenos);
        console.log(this.service.gsenos);
        this._service.addUsertoRemoteservice(this.service).subscribe(function (data) {
            console.log(_this.service.gsenos);
            console.log("data added successfully");
            _this.toastr.showSuccess('Service added successfully', "service");
            _this._router.navigate(['/service']);
        }, function (error) {
            console.log("error");
            _this.toastr.showError(error, 'Service');
        });
    };
    AddserviceComponent.prototype.function1 = function (e, id) {
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
    AddserviceComponent.prototype.function2 = function (e, id) {
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
        }
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
    };
    AddserviceComponent.prototype.function3 = function (e, id) {
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
        } /*checked*/
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
    AddserviceComponent.prototype.function4 = function (e, id) {
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
    AddserviceComponent.prototype.selectChangeHandler = function (event) {
        console.log(event.target.value);
        this.service.type = event.target.value;
    };
    AddserviceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_7__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_12__["ToolsserviceService"] },
        { type: _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_2__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_4__["SpareserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
    ]; };
    AddserviceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addservice',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/addservice/addservice.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addservice.component.css */ "./src/app/views/service/addservice/addservice.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_7__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_12__["ToolsserviceService"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_2__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_4__["SpareserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], AddserviceComponent);
    return AddserviceComponent;
}());



/***/ }),

/***/ "./src/app/views/service/editservice/editservice.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/service/editservice/editservice.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NlcnZpY2UvZWRpdHNlcnZpY2UvZWRpdHNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/service/editservice/editservice.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/service/editservice/editservice.component.ts ***!
  \********************************************************************/
/*! exports provided: EditserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditserviceComponent", function() { return EditserviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../model/service */ "./src/app/model/service.ts");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/service.service */ "./src/app/service/service.service.ts");


;









var EditserviceComponent = /** @class */ (function () {
    function EditserviceComponent(_router, cservice, tservice, _activatedroute, _service, _gseservice, _spareservice, toastr, _http) {
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
        this.gse = new _model_service__WEBPACK_IMPORTED_MODULE_9__["Gse"]();
        this.service = new _model_service__WEBPACK_IMPORTED_MODULE_9__["Service"]();
        this.spare = new _model_service__WEBPACK_IMPORTED_MODULE_9__["Spare"]();
        this.tools = new _model_service__WEBPACK_IMPORTED_MODULE_9__["Tools"]();
        this.consumable = new _model_service__WEBPACK_IMPORTED_MODULE_9__["Consumable"]();
    }
    EditserviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userroll = localStorage.getItem('a');
        if (this.userroll == "viewer") {
            this.enable = true;
        }
        else {
            this.enable = false;
        }
        var id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
        this._service.fetchUserByIdFromRemoteservice(id).subscribe(function (data) {
            console.log("data recevied");
            _this.service = data;
            console.log("The gse s are=" + _this.service.gsenos);
            console.log(_this.service);
            //   console.log("The spares  are="+this.service.sparenos);
            _this.nam2 = _this.service.gsenos;
            _this.name = _this.service.gsenos;
            _this.nam3 = _this.service.sparenos;
            _this.namesp = _this.service.sparenos;
            _this.nam4 = _this.service.toolsnos;
            _this.nametl = _this.service.toolsnos;
            _this.nam5 = _this.service.consumablenos;
            _this.namecl = _this.service.consumablenos;
            _this.copystr = _this.nam2.toString(); //if no editing happen the current ans remains for gse
            _this.copystrsp = _this.nam3.toString(); //if no editing happen the current ans remains for spare
            _this.copystrtl = _this.nam4.toString();
            _this.copystrcl = _this.nam5.toString();
            _this._service.fetchUserListFromRemotegse().subscribe(function (data) {
                console.log(data);
                _this.datagse = data;
            });
            _this._service.fetchUserListFromRemotetools().subscribe(function (data) {
                console.log(data);
                _this.datatools = data;
            });
            _this._service.fetchUserListFromRemotespare().subscribe(function (data) {
                console.log(data);
                _this.dataspare = data;
            });
            _this._service.fetchUserListFromRemoteconsumable().subscribe(function (data) {
                console.log(data);
                _this.dataconsumable = data;
            });
        });
        /*for gse*/
    };
    EditserviceComponent.prototype.function1 = function (e, id) {
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
    EditserviceComponent.prototype.function2 = function (e, id) {
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
    EditserviceComponent.prototype.function3 = function (e, id) {
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
    EditserviceComponent.prototype.function4 = function (e, id) {
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
    EditserviceComponent.prototype.updateeditformsubmit = function () {
        var _this = this;
        this.service.gsenos = this.copystr;
        this.service.sparenos = this.copystrsp;
        this.service.toolsnos = this.copystrtl;
        this.service.consumablenos = this.copystrcl;
        this._service.addUsertoRemoteservice(this.service).subscribe(function (data) {
            _this.toastr.showInfo('Service updation success', 'Service update');
            _this._router.navigate(['/service']);
        }, function (error) { return _this.toastr.showError(error, 'Service update'); });
    };
    EditserviceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _service_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    EditserviceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editservice',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/editservice/editservice.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editservice.component.css */ "./src/app/views/service/editservice/editservice.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumableserviceService"], _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_5__["ToolsserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceService"], _service_gseservice_service__WEBPACK_IMPORTED_MODULE_6__["GseserviceService"], _service_spareservice_service__WEBPACK_IMPORTED_MODULE_7__["SpareserviceService"], _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EditserviceComponent);
    return EditserviceComponent;
}());



/***/ }),

/***/ "./src/app/views/service/generate/generate.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/service/generate/generate.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NlcnZpY2UvZ2VuZXJhdGUvZ2VuZXJhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/service/generate/generate.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/service/generate/generate.component.ts ***!
  \**************************************************************/
/*! exports provided: GenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateComponent", function() { return GenerateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_aircraft_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/aircraft.service */ "./src/app/service/aircraft.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);




//import moment from 'moment'

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;
var GenerateComponent = /** @class */ (function () {
    function GenerateComponent(service) {
        this.service = service;
    }
    GenerateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAircraftinfoList().subscribe(function (data) {
            _this.aircraft = data;
        });
    };
    GenerateComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.selectedValue);
        console.log(this.preparedBy);
        console.log(this.issueBy);
        this.service.getAircraftinfoById(this.selectedValue).subscribe(function (data) {
            _this.dataa = data;
            console.log(_this.dataa);
            _this.createPdf();
        });
    };
    GenerateComponent.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(documentDefinition).open();
    };
    GenerateComponent.prototype.getDocumentDefinition = function () {
        sessionStorage.setItem('service', JSON.stringify(this.aircraft));
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
                return [
                    { text: currentPage, alignment: 'center' }
                ];
            },
            content: [
                {
                    text: 'Aircraft',
                    //
                    //bold: true,
                    fontSize: 20,
                    alignment: 'center',
                    style: 'header',
                    margin: [0, 0, 0, 20],
                },
                this.getAircraftData(this.dataa),
                {
                    // text: 'Work Order PreparedBy',
                    text: 'Work Order PreparedBy : ' + this.preparedBy,
                    alignment: 'left',
                    margin: [0, 350, 0, 10],
                },
                {
                    // text: 'Work Order PreparedBy',
                    text: 'IssuedBy : ' + this.issueBy,
                    alignment: 'right',
                    fillColor: '#cccccc',
                },
                {
                    text: 'Date: ' + (new Date()).toLocaleDateString(),
                    // text: moment(new Date()).format("DD-MMM-YYYY"),
                    alignment: 'right',
                },
                {
                    text: 'Work Completion Certificate',
                    bold: true,
                    alignment: 'left',
                    style: 'header',
                    margin: [0, 550, 0, 10],
                    fontSize: '20',
                },
                {
                    text: '(a) Certified that tasks allotted vide this work order is carried out as per laid down procedures in relevant task cards or other publication /instructions ',
                    alignment: 'left',
                    fontSize: '12'
                },
                {
                    text: '(b) Necessary entries are made in Form IAFF (T) 700 SI No. Section 4A Page No. And Section 10 Page No',
                    alignment: 'left',
                    fontSize: '12'
                },
                this.getEmptytable(),
                {
                    text: 'NEXT DUE ON:',
                    margin: [0, 200, 0, 10],
                    alignment: 'left',
                    bold: true
                },
                {
                    text: '(Signature WO i/c Aircraft)',
                    alignment: 'left'
                },
                {
                    text: '(Signature O i/c Aircraft)',
                    alignment: 'right'
                },
                {
                    text: 'Date:',
                    margin: [0, 10, 0, 10],
                    alignment: 'left'
                },
                {
                    text: 'Date:',
                    margin: [0, 20, 0, 0],
                    alignment: 'right'
                },
                {
                    text: '(Signature WO i/c MCC)',
                    alignment: 'center'
                },
                {
                    text: 'Date:',
                    margin: [0, 50, 0, 10],
                    alignment: 'center'
                },
            ],
        };
    };
    GenerateComponent.prototype.getAircraftData = function (aircraft) {
        console.log(aircraft + this.dataa);
        return [{
                table: {
                    widths: [100, 200, 200],
                    body: [
                        [{ text: 'SNo', bold: true, fillColor: '#cccccc',
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
    GenerateComponent.prototype.getEmptytable = function () {
        return [{
                table: {
                    widths: ['*', 100, '*', 100, 100, '*'],
                    body: [
                        [{ text: 'System', bold: true, fillColor: '#cccccc', fontSize: '10' }, { text: 'Particular of workmen', fillColor: '#cccccc' }, { text: '', bold: true, fillColor: '#cccccc', fontSize: '10' },
                            { text: 'Specimen Signature', fillColor: '#cccccc', fontSize: '10' }, { text: 'Particulars of Supervisor', fillColor: '#cccccc', fontSize: '10' }, { text: 'Specimen Signature', fillColor: '#cccccc', fontSize: '10' }],
                        ['Air Frame', '', '', '', '', ''],
                        ['Engine', '', '', '', '', ''],
                        ['Elect', '', '', '', '', ''],
                        ['Inst', '', '', '', '', ''],
                        ['Radio', '', '', '', '', ''],
                        ['Radar', '', '', '', '', ''],
                        ['Wpn/Spn', '', '', '', '', ''],
                    ],
                },
            }];
    };
    GenerateComponent.ctorParameters = function () { return [
        { type: _service_aircraft_service__WEBPACK_IMPORTED_MODULE_2__["AircraftService"] }
    ]; };
    GenerateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/generate/generate.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./generate.component.css */ "./src/app/views/service/generate/generate.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_aircraft_service__WEBPACK_IMPORTED_MODULE_2__["AircraftService"]])
    ], GenerateComponent);
    return GenerateComponent;
}());



/***/ }),

/***/ "./src/app/views/service/scipt.service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/views/service/scipt.service.service.ts ***!
  \********************************************************/
/*! exports provided: ScriptStore, ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScriptStore = [
    { name: 'pdfMake', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/pdfmake.min.js' },
    { name: 'vfsFonts', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/vfs_fonts.js' }
];
var ScriptService = /** @class */ (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this.scripts[name].src;
                script.onload = function () {
                    _this.scripts[name].loaded = true;
                    console.log(name + " Loaded.");
                    resolve({ script: name, loaded: true, status: 'Loaded' });
                };
                script.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    };
    ScriptService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "./src/app/views/service/service-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/service/service-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function() { return ServiceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service.component */ "./src/app/views/service/service.component.ts");
/* harmony import */ var _editservice_editservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editservice/editservice.component */ "./src/app/views/service/editservice/editservice.component.ts");
/* harmony import */ var _addservice_addservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addservice/addservice.component */ "./src/app/views/service/addservice/addservice.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/views/service/generate/generate.component.ts");








var routes = [
    {
        path: '',
        component: _service_component__WEBPACK_IMPORTED_MODULE_4__["ServiceComponent"],
        data: {
            title: 'OOPS'
        }
    },
    { path: 'editservice', component: _editservice_editservice_component__WEBPACK_IMPORTED_MODULE_5__["EditserviceComponent"],
        data: { title: 'Editservice' }
    },
    { path: 'editservice/:id', component: _editservice_editservice_component__WEBPACK_IMPORTED_MODULE_5__["EditserviceComponent"],
        data: { title: 'Editservice' }
    },
    { path: 'addservice', component: _addservice_addservice_component__WEBPACK_IMPORTED_MODULE_6__["AddserviceComponent"],
        data: { title: 'Addservice' }
    },
    { path: 'generate', component: _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__["GenerateComponent"],
        data: { title: 'Generate service' }
    },
];
var ServiceRoutingModule = /** @class */ (function () {
    function ServiceRoutingModule() {
    }
    ServiceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServiceRoutingModule);
    return ServiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/service/service.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/service/service.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".excel-table{\r\n    overflow-y:scroll;\r\n    width:100%;\r\n    height: 300px;\r\n   }\r\n\r\n   table {\r\n    border-collapse: collapse;\r\n    table-layout: auto;\r\n    width: 100%;\r\n  }\r\n\r\n   td{\r\n    height: 36px;\r\n    padding-top: 15px;\r\n    padding-bottom: 8px;\r\n    padding-right: 16px;\r\n    padding-left: 5px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7R0FDZDs7R0FFQTtJQUNDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztHQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4Y2VsLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgfVxyXG5cclxuICAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICB0ZHtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/views/service/service.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/service/service.component.ts ***!
  \****************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _scipt_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scipt.service.service */ "./src/app/views/service/scipt.service.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/service */ "./src/app/model/service.ts");
/* harmony import */ var _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/consumableservice.service */ "./src/app/service/consumableservice.service.ts");
/* harmony import */ var _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/toolsservice.service */ "./src/app/service/toolsservice.service.ts");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/spareservice.service */ "./src/app/service/spareservice.service.ts");
/* harmony import */ var _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/gseservice.service */ "./src/app/service/gseservice.service.ts");
/* harmony import */ var _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/toastrnotification.service */ "./src/app/service/toastrnotification.service.ts");
/* harmony import */ var _model_gse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../model/gse */ "./src/app/model/gse.ts");
















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(scriptService, _http, consumableservice, toolsservice, _service, _spareservice, _gseservice, _route, _activatedrouter, toastr) {
        var _this = this;
        this.scriptService = scriptService;
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
        this.service = new _model_service__WEBPACK_IMPORTED_MODULE_8__["Service"]();
        this.gse = new _model_gse__WEBPACK_IMPORTED_MODULE_15__["Gse"]();
        this.currentPage = 1;
        this.myInterval = 0;
        this.slides = [];
        this.noWrapSlides = false;
        this.serviceedit = new _model_service__WEBPACK_IMPORTED_MODULE_8__["Service"]();
        this._service.share.subscribe(function (x) {
            _this.rolltext = x || localStorage.getItem("a");
        });
        console.log("the text is ======" + this.rolltext);
        this._service.share1.subscribe(function (x1) {
            _this.uname = x1 || localStorage.getItem("b");
        });
        console.log("the Uname text is ======" + this.uname);
        this.service =
            JSON.parse(sessionStorage.getItem("service")) || new _model_service__WEBPACK_IMPORTED_MODULE_8__["Service"]();
        if (!this.service || this.service.length === 0) {
            // this.service= [];
            this.service.push(new _model_service__WEBPACK_IMPORTED_MODULE_8__["Service"]());
        }
        // this.scriptService.load("pdfMake", "vfsFonts");
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.x = 1;
        console.log(localStorage.getItem("opennav"));
        localStorage.setItem("opennav", "OOPS");
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
        this._service.countrecordservice().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = _this.rec1;
            console.log("The m1 is " + _this.m1);
            _this.counter = _this.m1;
            console.log("The perpage is " + _this.perpage);
        });
        this._service.getdataservice(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.service = data;
            _this.totalItems = _this.rec1;
            var activities = _this.service;
        } /*for first service*/); /* for first getdata*/
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
    ServiceComponent.prototype.ngOnDestroy = function () { };
    ServiceComponent.prototype.gotoedituser = function (id) {
        console.log("id:" + id);
        this._route.navigate(["/service/editservice", id]);
    };
    ServiceComponent.prototype.gotoaddaccount = function (f, mess) {
        this._route.navigate(["/service/addservice"]);
    };
    ServiceComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.x = event.page;
        event.page = event;
        this.start = this.x;
        //alert(this.x);
        if (this.mode == "searching") {
            this._service
                .counteruserecordservice(this.searchname)
                .subscribe(function (recs) {
                console.log(recs);
                _this.searchpages = parseInt(recs);
                console.log("Total items is search=" + _this.searchpages);
                _this.rec1 = _this.searchpages;
            });
            this._service
                .fetchUserByservice(this.x - 1, parseInt(this.perpage), this.searchname)
                .subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
                _this.service = datasear;
                console.log("to test spare" + _this.service);
            });
        } /*IF */
        else if (this.mode == "normal" || this.mode == "deleting") {
            this._service.getdataservice(this.x - 1, this.perpage).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                _this.config.totalItems = _this.rec1;
                event.totalItems = _this.rec1;
                _this.service = data;
            } /*for first service*/); /* for first getdata*/
            this._service.countrecordservice().subscribe(function (mydata) {
                console.log(mydata);
                _this.rec1 = mydata;
                console.log("no of record= " + _this.rec1);
                _this.m1 = parseInt(_this.rec1);
                console.log("The m1 is " + _this.m1);
            });
        } /*else*/
    }; /* handle page change*/
    ServiceComponent.prototype.gotosearchservice = function (name) {
        var _this = this;
        this.datapage = [];
        this.searchname = name;
        this.m2 = 0;
        this.mode = "searching";
        console.log(name);
        /* counting number of records for search*/
        this._service.counteruserecordservice(this.searchname).subscribe(function (recs) {
            console.log(recs);
            _this.searchpages = parseInt(recs);
            console.log("Total items is search=" + _this.searchpages);
        });
        /*--------------------------------*/
        if (this.perpageflag == "true") {
            this._service
                .fetchUserByservice(this.m2, parseInt(this.perpage), name)
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
            this._service.fetchUserByservice(this.m2, this.perpage, name).subscribe(function (datasear) {
                console.log(datasear);
                _this.datapage = datasear;
                _this.data = datasear;
                _this.rec1 = _this.searchpages;
            }, function (error) {
                console.log("service  not exist");
            });
        }
        console.log("the total items in search out=" + parseInt(this.searchpages));
    }; /*search end */
    ServiceComponent.prototype.gotobackservice = function () {
        var _this = this;
        this.mode = "normal";
        console.log("first part");
        this._service.countrecordservice().subscribe(function (mydata) {
            console.log(mydata);
            _this.rec1 = mydata;
            console.log("no of record= " + _this.rec1);
            _this.m1 = parseInt(_this.rec1);
            console.log("The m1 is " + _this.m1);
        });
        this._service.getdataservice(0, this.perpage).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        } /*for first service*/); /* for first getdata*/
        return;
    }; /*gotobackgse*/
    ServiceComponent.prototype.show = function (e, id, gsenos, sparenos, toolsnos, consumablenos) {
        var _this = this;
        if (e.target.checked) {
            this.nam2[0] = id;
            // this.name3[0]=id;
            this.istab = true;
            this.count1 = 1;
            this.count5 = 1;
            //this.count=this.count+1;
            this.count = 1;
            // alert(
            //   "The id =" +
            //     id +
            //     "," +
            //     this.count +
            //     "," +
            //     gsenos +
            //     "selid=" +
            //     this.nam2 +
            //     "sparenos=" +
            //     sparenos +
            //     this.count1 +
            //     "toolsnos=" +
            //     toolsnos +
            //     "," +
            //     this.count5 +
            //     "consumablenos=" +
            //     consumablenos
            // );
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
            console.log(datagse);
            _this.datagse = datagse;
            //this.totalItems=5;
        } /*for first service*/); /* for first getdata*/
        this._spareservice
            .fetchUserListFromRemotesparecondition(sparenos.toString())
            .subscribe(function (dataspare) {
            console.log(dataspare);
            _this.dataspare = dataspare;
            //this.totalItems=5;
        } /*for first service*/); /* for first getdata*/
        this.toolsservice
            .fetchUserListFromRemotetoolscondition(toolsnos.toString())
            .subscribe(function (datatools) {
            console.log(datatools);
            _this.datatools = datatools;
            //this.totalItems=5;
        } /*for first service*/); /* for first getdata*/
        this.consumableservice
            .fetchUserListFromRemoteconsumablecondition(consumablenos.toString())
            .subscribe(function (dataconsumable) {
            console.log(dataconsumable);
            _this.dataconsumable = dataconsumable;
            //this.totalItems=5;
        } /*for first service*/); /* for first getdata*/
    };
    ServiceComponent.prototype.gotodeleteuser = function (id) {
        var _this = this;
        this.mode = "deleting";
        this._service.deleteUserByIdFromRemoteservice(id).subscribe(function (data) {
            console.log("deleted sucesssfully");
            //this.ngOnInit();
            _this.counter--;
            console.log("counter" + _this.counter);
            if (_this.counter == _this.rowperpage) {
                _this.ngOnInit();
            }
            _this.ngOnInit();
            // alert(this.x+this.perpageflag);
            if (_this.perpageflag == "true") {
                _this._service
                    .getdataservice(_this.x - 1, parseInt(_this.perpage))
                    .subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    // this.totalItems=String(100);
                });
            } /* per page true */
            else if (_this.perpageflag == undefined) {
                _this._service.getdataservice(_this.x, 3).subscribe(function (data) {
                    console.log(data);
                    _this.data = data;
                    //  this.totalItems=String(100);
                });
            } /* perpage false */
            _this.toastr.showWarning("Deletion success", 'Service');
        }, function (error) {
            _this.msg1 = error;
            console.log(_this.msg1);
            _this.toastr.showError(error, 'Service');
        });
    };
    ServiceComponent.prototype.generate = function () {
        this._route.navigate(["/service/generate"]);
    };
    ServiceComponent.prototype.createPdf = function () {
        var documentDefinition = this.getDocumentDefinition();
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
    };
    ServiceComponent.prototype.getDocumentDefinition = function () {
        var thisRef = this;
        sessionStorage.setItem("service", JSON.stringify(this.service));
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
                this.getServiceData(this.service),
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
    ServiceComponent.prototype.getServiceData = function (service) {
        console.log("service.." + service);
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
                ], service.map(function (ed) {
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
    ServiceComponent.prototype.getGseData = function (gse) {
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
    ServiceComponent.prototype.getToolsData = function (tools) {
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
    ServiceComponent.prototype.getSpareData = function (spare) {
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
    ServiceComponent.prototype.getConsumableData = function (consumable) {
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
    ServiceComponent.ctorParameters = function () { return [
        { type: _scipt_service_service__WEBPACK_IMPORTED_MODULE_5__["ScriptService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_9__["ConsumableserviceService"] },
        { type: _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"] },
        { type: _service_service_service__WEBPACK_IMPORTED_MODULE_11__["ServiceService"] },
        { type: _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__["SpareserviceService"] },
        { type: _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__["GseserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] }
    ]; };
    ServiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-service",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/service/service.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./service.component.css */ "./src/app/views/service/service.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_scipt_service_service__WEBPACK_IMPORTED_MODULE_5__["ScriptService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_consumableservice_service__WEBPACK_IMPORTED_MODULE_9__["ConsumableserviceService"],
            _service_toolsservice_service__WEBPACK_IMPORTED_MODULE_10__["ToolsserviceService"],
            _service_service_service__WEBPACK_IMPORTED_MODULE_11__["ServiceService"],
            _service_spareservice_service__WEBPACK_IMPORTED_MODULE_12__["SpareserviceService"],
            _service_gseservice_service__WEBPACK_IMPORTED_MODULE_13__["GseserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_toastrnotification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/views/service/service.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/service/service.module.ts ***!
  \*************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service.component */ "./src/app/views/service/service.component.ts");
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-routing.module */ "./src/app/views/service/service-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm5/ng2-loading-spinner.js");
/* harmony import */ var _check_check_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../check/check.module */ "./src/app/check/check.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _addservice_addservice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./addservice/addservice.component */ "./src/app/views/service/addservice/addservice.component.ts");
/* harmony import */ var _editservice_editservice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editservice/editservice.component */ "./src/app/views/service/editservice/editservice.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var angular_formio_pdf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-formio-pdf */ "./node_modules/angular-formio-pdf/fesm5/angular-formio-pdf.js");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/views/service/generate/generate.component.ts");













//import { AddspareComponent } from './addspare/addspare.component';
//import { EditspareComponent } from './editspare/editspare.component';
//import { PicgseComponent } from './picgse/picgse.component';





//import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;



//import {AgGridModule}from 'ag-grid-angular';
var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _check_check_module__WEBPACK_IMPORTED_MODULE_12__["CheckModule"],
                angular_formio_pdf__WEBPACK_IMPORTED_MODULE_19__["AngularFormioPdfModule"],
                _service_routing_module__WEBPACK_IMPORTED_MODULE_7__["ServiceRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(),
                //NgbModule,
                //AgGridModule.withComponents(),
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'danger',
                }),
                ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_11__["Ng2LoadingSpinnerModule"].forRoot({
                    backdropColor: 'rgba(0, 0, 0, 0.3)',
                    spinnerColor: '#fff',
                }),
            ],
            declarations: [_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"], _addservice_addservice_component__WEBPACK_IMPORTED_MODULE_16__["AddserviceComponent"], _editservice_editservice_component__WEBPACK_IMPORTED_MODULE_17__["EditserviceComponent"], _generate_generate_component__WEBPACK_IMPORTED_MODULE_20__["GenerateComponent"]],
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-service-service-module.js.map