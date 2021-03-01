(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\">\r\n    <mat-drawer #drawer mode=\"over\" position=\"end\">\r\n        <section style=\"padding:10px\">\r\n            <div>\r\n                <mat-card id=\"uiop\" style=\"\">\r\n\r\n                    <mat-card-title id=\"v\"></mat-card-title>\r\n                    <br>\r\n                    <mat-card-subtitle id=\"d\"></mat-card-subtitle>\r\n                </mat-card>\r\n                <br>\r\n                <mat-list>\r\n                    <mat-list-item matRipple (click)=\"goto('login')\">\r\n                        <mat-icon>login</mat-icon>&nbsp;&nbsp;&nbsp;\r\n                        Sign In\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                    <mat-list-item matRipple (click)=\"goto('enrol')\">\r\n                        <mat-icon>account_circle</mat-icon>&nbsp;&nbsp;\r\n                        Enrol\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                    <mat-list-item matRipple (click)=\"goto('home')\">\r\n                        <mat-icon>home</mat-icon>&nbsp;&nbsp;\r\n                        home\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                    <mat-list-item matRipple (click)=\"goto('deposit')\">\r\n                        <mat-icon>credit_card</mat-icon>&nbsp;&nbsp;\r\n                        deposit\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                    <mat-list-item matRipple (click)=\"goto('withdraw')\">\r\n                        <mat-icon>credit_score</mat-icon>&nbsp;&nbsp;\r\n                        withdraw\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                    <mat-list-item matRipple (click)=\"goto('account_balance')\">\r\n                        <mat-icon>account_balance</mat-icon>&nbsp;&nbsp;\r\n                        account balance\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                    <mat-list-item matRipple (click)=\"goto('loan')\">\r\n                        <mat-icon>receipt_short</mat-icon>&nbsp;&nbsp;\r\n                        loan\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                    <button mat-flat-button color=\"accent\" id=\"btn\" (click)=\"logOut()\"></button>\r\n\r\n                    <!-- <mat-list-item> deposit </mat-list-item> -->\r\n                </mat-list>\r\n            </div>\r\n            <br>\r\n        </section>\r\n    </mat-drawer>\r\n    <mat-drawer-content>\r\n        <button mat-icon-button class=\"example-icon\" id=\"hamburger\" (click)=\"drawer.toggle(); chk();\"\r\n            aria-label=\"Example icon-button with menu icon\">\r\n\r\n            <mat-icon>menu</mat-icon>&nbsp;&nbsp;\r\n        </button>\r\n        <div [@routeAnimations]=\"prepareRoute(outlet)\">\r\n            <router-outlet #outlet=\"outlet\"></router-outlet>\r\n        </div>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deposit/deposit.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deposit/deposit.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent' style=\"top: 0;\">\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><strong>Deposit</strong></span>\n    <span id=\"spacer\"></span>\n\n</mat-toolbar>\n<br>\n<br>\n<mat-card>\n    <br>\n    <br>\n    <br>\n    <mat-tab-group mat-align-tabs=\"center\" dynamicHeight=false>\n        <mat-tab label=\"Others\">\n            <br>\n            <br>\n            <h3>Select details to deposit into your another account</h3>\n            <form [formGroup]=\"addressForm\" ngSubmit=\"\">\n                <h4>Receipient Account Number</h4>\n                <mat-form-field  class=\"full-width\">\n                    <input matInput  [value]='ko.value' #ko (blur)=\"chkAcctNo()\" placeholder=\"Account Number\" formControlName=\"acctNo\">\n                    <mat-error *ngIf=\"addressForm.controls['acctNo'].hasError('invalid')\">\n                        Account Number is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n                <mat-card *ngIf=\"show === false\">\n                    input a valid santsii account\n                </mat-card>\n                <mat-card *ngIf=\"show === true\">\n                    Account Name :{{this.b['name']}}<br>\n                    Conntact :{{this.b['contact']}}\n                </mat-card>\n                <h4>Select amount to deposit</h4>\n                <mat-form-field class=\"full-width\">\n                    <mat-select placeholder=\"amount\" formControlName=\"amount\">\n                        <mat-option *ngFor=\"let amount of amounts\" [value]=\"amount.abbreviation\">\n                            {{ amount.name }}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"addressForm.controls['amount'].hasError('invalid')\">\n                        amount is <strong>invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n                <h4>choose payment channel</h4>\n                <mat-form-field class=\"full-width\">\n                    <mat-select placeholder=\"channel\" formControlName=\"pmtType\">\n                        <mat-option *ngFor=\"let pmtType of pmtType\" [value]=\"pmtType.abbreviation\">\n                            {{ pmtType.name }}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"addressForm.controls['pmtType'].hasError('invalid')\">\n                        payment type is <strong>invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n                <mat-card-header *ngIf=\"this.addressForm.get('pmtType').value == 'airtime'\">\n                    Airtime channel currently not availaible\n                </mat-card-header>\n\n            </form>\n            <br>\n            <br>\n            <br>\n            <button mat-raised-button color=\"accent\" angular4-paystack color=\"accent\" id=\"paystackButton\"\n                email=\"{{this.h}}\" amount=\"{{this.addressForm.get('amount').value}}\" ref=\"{{this.ref}}\"\n                [channels]=\"['card']\" [class]=\"'paystackButton'\" (close)=\"paymentCancel()\" (callback)=\"paymentDone()\">\n                Deposit\n            </button>\n\n        </mat-tab>\n        <mat-tab label=\"Self\">\n            <br>\n            <br>\n            <br>\n            <h3>Select details to deposit into your personal account</h3>\n            <form [formGroup]=\"addressForm\">\n                <h4>Select amount to deposit</h4>\n                <mat-form-field class=\"full-width\">\n                    <mat-select placeholder=\"amount\" formControlName=\"amount\">\n                        <mat-option *ngFor=\"let amount of amounts\" [value]=\"amount.abbreviation\">\n                            {{ amount.name }}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"addressForm.controls['amount'].hasError('invalid')\">\n                        amount is <strong>invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n                <h4>choose payment channel</h4>\n                <mat-form-field class=\"full-width\">\n                    <mat-select placeholder=\"channel\" formControlName=\"pmtType\">\n                        <mat-option *ngFor=\"let pmtType of pmtType\" [value]=\"pmtType.abbreviation\">\n                            {{ pmtType.name }}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"addressForm.controls['pmtType'].hasError('invalid')\">\n                        payment type is <strong>invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n                <mat-card-header *ngIf=\"this.addressForm.get('pmtType').value == 'airtime'\">\n                    Airtime channel currently not availaible, visit \n                    our nearest cash point to make this payment\n                     if you cannot access a card currently\n                </mat-card-header>\n\n            </form>\n            <br>\n            <br>\n            <br>\n            <button mat-raised-button color=\"accent\" angular4-paystack color=\"accent\" id=\"paystackButton\"\n                email=\"{{this.h}}\" amount=\"{{this.addressForm.get('amount').value}}\" ref=\"{{this.ref}}\"\n                [channels]=\"['card']\" [class]=\"'paystackButton'\" (close)=\"paymentCancel()\" (callback)=\"paymentDone()\">\n                Deposit\n            </button>\n\n        </mat-tab>\n    </mat-tab-group>\n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enrol/enrol.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enrol/enrol.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent' style=\"top: 0;\">\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><strong>Enrol to santsi Kudii</strong></span>\n    <span id=\"spacer\"></span>\n\n</mat-toolbar>\n<br>\n<br>\n<br>\n<br>\n<form style=\"padding: 1%;\" [formGroup]=\"addressForm\" validate (ngSubmit)=\"onSubmit()\">\n    <mat-card class=\"shipping-card\">\n        <mat-card-header>\n            <mat-card-title>User Information</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n\n            <div class=\"row\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n                    <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('invalid')\">\n                        First name is <strong>invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"row\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n                    <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('invalid')\">\n                        Last name is <strong>invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n                        <mat-error *ngIf=\"addressForm.controls['address'].hasError('invalid')\">\n                            Address is <strong>invalid</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div>\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"email\" placeholder=\"email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"addressForm.controls['email'].hasError('invalid')\">\n                        email is <strong>Invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div>\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"number\" formControlName=\"contact\">\n                    <mat-error *ngIf=\"addressForm.controls['contact'].hasError('invalid')\">\n                        Phone no. is <strong>Invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"row \">\n                <mat-form-field class=\"full-width\" appearance=\"fill\">\n                    <mat-label>Summary of Business</mat-label>\n                    <textarea matInput formControlName=\"abtBiz\"></textarea>\n                    <mat-error *ngIf=\"addressForm.controls['abtBiz'].hasError('invalid')\">\n                        About Business is <strong>Required</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-select placeholder=\"select account type\" formControlName=\"type\">\n                            <mat-option *ngFor=\"let type of types\" [value]=\"type.abbreviation\">\n                                {{ type.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"addressForm.controls['type'].hasError('invalid')\">\n                            account type <strong>invalid</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-select placeholder=\"State\" formControlName=\"state\">\n                            <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                                {{ state.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"addressForm.controls['state'].hasError('invalid')\">\n                            State is <strong>invalid</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div>\n                <label>choose a strong password of atleast 6 characters</label>\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"password\" formControlName=\"pwd\">\n                    <mat-error *ngIf=\"addressForm.controls['pwd'].hasError('invalid')\">\n                        Password is <strong>invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button>\n        </mat-card-actions>\n    </mat-card>\n</form>\n<dialog id=\"dialog\" *ngIf=\"show === true\" style=\"position: absolute;top: 0;bottom: 0;\">\n\n    <i><b>Your response</b></i>\n\n    <h1>{{this.hu['msg']}}</h1>\n    <h1>\n        {{this.hu['user']['account_no']}}</h1>\n    <button mat-button-raise>\n        ok\n    </button>\n</dialog>\n<div id=\"loader\">\n    <figure>\n        <mat-spinner color=\"accent\"></mat-spinner>\n    </figure>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent'>\n    <span><br><strong>Santsi Kudi</strong></span><br>\n    <span id=\"spacer\"></span><br>\n\n</mat-toolbar>\n<section><br>\n    <mat-carousel timings=\"250ms ease-in\" [autoplay]=\"true\" interval=\"5000\" color=\"accent\" maxWidth=\"auto\"\n        proportion=\"25\" slides=\"3\" [loop]=\"true\" [hideArrows]=\"false\" [hideIndicators]=\"false\" [useKeyboard]=\"true\"\n        [useMouseWheel]=\"false\" orientation=\"ltr\">\n        <mat-carousel-slide #matCarouselSlide *ngFor=\"let slide of slides; let i = index\" [image]=\"slide.image\">\n        </mat-carousel-slide>\n    </mat-carousel>\n</section><br>\n<section style=\"   padding: 45px 30px;\">\n    <div style=\"display: flex; flex-wrap: wrap;\">\n        <button mat-button class=\"tiles\" (click)=\"router('enrol')\">\n            <mat-icon mat-card-image>account_circle</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">rajista</mat-card-content>\n            \n            <mat-card-content *ngIf=\"show === false\">Enrol</mat-card-content>\n        </button>\n        <button mat-button class=\"tiles\" (click)=\"router('login')\">\n            <mat-icon mat-card-image>login</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">Shiga Ciki</mat-card-content>\n\n            <mat-card-content *ngIf=\"show === false\">Sign In</mat-card-content>\n\n        </button>\n        <button mat-button class=\"tiles\" (click)=\"router('loan')\">\n            <mat-icon mat-card-image>account_balance_wallet</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">bashi</mat-card-content>\n            <mat-card-content *ngIf=\"show === false\">Loan</mat-card-content>\n        </button>\n        <button mat-button class=\"tiles\" (click)=\"router('deposit')\">\n            <mat-icon mat-card-image>credit_card</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">yi biya</mat-card-content>\n\n            <mat-card-content *ngIf=\"show === false\">Deposit</mat-card-content>\n        </button>\n        <button mat-button class=\"tiles\" (click)=\"router('withdraw')\">\n            <mat-icon mat-card-image>credit_score</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">Janye</mat-card-content>\n            <mat-card-content *ngIf=\"show === false\">Withdraw</mat-card-content>\n        </button>\n\n        <button mat-button class=\"tiles\" (click)=\"router('account_balance')\">\n\n            <mat-icon mat-card-image>account_balance</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">Asusun Lissafi</mat-card-content>\n\n            <mat-card-content *ngIf=\"show === false\">Account Balance</mat-card-content>\n        </button>\n        <button mat-button class=\"tiles\" (click)=\"router('loanstatus')\">\n            <mat-icon mat-card-image>receipt_long</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">Matsayin Lamuni</mat-card-content>\n            <mat-card-content *ngIf=\"show === false\">Loan Status</mat-card-content>\n        </button> \n        <button mat-button class=\"tiles\" (click)=\"router('VC')\">\n            <mat-icon mat-card-image>receipt_short</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">VC & Govt</mat-card-content>\n            <mat-card-content *ngIf=\"show === false\">VCs & Govt</mat-card-content>\n        </button>\n        <button mat-button class=\"tiles\">\n            <mat-icon mat-card-image>caution</mat-icon><br>\n            <mat-card-content *ngIf=\"show === true\">Taimaka</mat-card-content>\n            <mat-card-content *ngIf=\"show === false\">Help</mat-card-content>\n        </button>\n    </div>\n</section><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-status/loan-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan-status/loan-status.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent' style=\"top: 0;\">\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><strong>loan History</strong></span>\n    <span id=\"spacer\"></span>\n</mat-toolbar>\n<section style=\"margin-top: 80px;\">\n<mat-accordion>\n\n    <mat-expansion-panel *ngFor=\"let a of this.e | async\" style=\"margin: 20px;\">\n        <mat-expansion-panel-header>\n             <mat-panel-title style=\"display: block;\">\n                <h6>Loan ID</h6>\n                {{a.loanId}}\n            </mat-panel-title>\n             <mat-panel-title style=\"display: block;\">\n                <h6>Loan Amount</h6>\n\n                {{a.amount}}\n            </mat-panel-title>\n            <mat-panel-description style=\"display: block;\">\n                <h6>Date of Request</h6>\n\n                {{a.dateOfRequest.slice(0 ,10)}}\n            </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\">\n                <h6>interest rate</h6>&nbsp; &nbsp;{{a.intRate}}\n            </mat-list-item>\n            <mat-list-item role=\"listitem\">\n                <h6>Summary of Business</h6>&nbsp; &nbsp;{{a.summary}}\n            </mat-list-item>\n            <mat-list-item role=\"listitem\">\n              \n                <h6>About Business</h6>&nbsp; &nbsp; {{a.aboutBusiness}}\n           </mat-list-item>\n            <mat-list-item role=\"listitem\">\n              \n            <h6>Reason</h6>&nbsp; &nbsp;       {{a.reason}}\n       </mat-list-item> \n       <mat-list-item role=\"listitem\">\n              \n        <h6>Request Account ID</h6>&nbsp; &nbsp;    {{a.acctId}}\n\n   </mat-list-item>\n            </mat-list>\n        \n         <mat-panel-title style=\"display: block;\">\n     \n        </mat-panel-title>\n         <mat-panel-title style=\"display: block;\">\n        </mat-panel-title>\n    </mat-expansion-panel>\n\n</mat-accordion>\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent'>\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><strong>loan</strong></span>\n    <span id=\"spacer\"></span>\n</mat-toolbar>\n<mat-toolbar matRipple color='accent' style=\"top: 0;\">\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><strong>Loan</strong></span>\n    <span id=\"spacer\"></span>\n\n</mat-toolbar>\n<br>\n<br>\n<br>\n<br>\n<form style=\"padding: 1%;\" [formGroup]=\"addressForm\" validate (ngSubmit)=\"onSubmit()\">\n    <mat-card class=\"shipping-card\">\n        <mat-card-header>\n            <mat-card-title>Loan Information</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content id=\"bvn\" style=\"visibility: hidden;\" >\n            <p>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Verify your BVN</mat-label>\n                    <input matInput type=\"number\" placeholder=\"BVN\"  (blur)=\"vrf()\"formControlName=\"bvn\">\n                   <mat-hint>note that: only the BVN assigned on the sandbox can be used</mat-hint>\n                </mat-form-field>\n                &nbsp;<mat-hint *ngIf=\"this.show === true\">Verifying . . .</mat-hint>\n                &nbsp;<mat-hint *ngIf = \"this.sho === true\" style=\"color: #69f0ae;\">Verified</mat-hint>\n            </p>\n            \n        </mat-card-content>\n        <mat-card-content id=\"loanForm\"  style=\"visibility: hidden;\">\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Reason for Loan</mat-label>\n                        <input matInput placeholder=\"Reason for laon\" formControlName=\"reason\">\n                        <mat-hint>e.g Start Up, Expansion, Staff Remuneration</mat-hint>\n                        <mat-error *ngIf=\"addressForm.controls['reason'].hasError('invalid')\">\n                            Reason is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <br>\n            <br>\n            <br>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Amount</mat-label>\n                        <input matInput type=\"number\" placeholder=\"Amount\" formControlName=\"amount\">\n                        <mat-error *ngIf=\"addressForm.controls['amount'].hasError('invalid')\">\n                            Amount is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div><br>\n\n            <mat-form-field class=\"full-width\">\n                <mat-label>Suummarise your loan request here</mat-label>\n                <textarea rows=\"8\" matInput placeholder=\"Summary of loan\" formControlName=\"summary\"></textarea>\n                <mat-error *ngIf=\"addressForm.controls['summary'].hasError('invalid')\">\n                    Summary is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n\n            <br>\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>select Duration of Loan</mat-label>\n                        <mat-select placeholder=\"select affordable interest rate\" formControlName=\"duration\">\n                            <mat-option *ngFor=\"let duration of durations\" [value]=\"duration.name\">\n                                {{ duration.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"addressForm.controls['type'].hasError('invalid')\">\n                            Duration<strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <br>\n\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>select affordable interest rate</mat-label>\n                        <mat-select placeholder=\"select affordable interest rate\" formControlName=\"type\">\n                            <mat-option *ngFor=\"let type of types\" [value]=\"type.name\">\n                                {{ type.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"addressForm.controls['type'].hasError('invalid')\">\n                            interest rate<strong>required</strong>\n                        </mat-error>\n                        <mat-hint>select affordable interest rate</mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <br>\n\n            <mat-card-actions>\n                <button mat-raised-button color=\"accent\" type=\"submit\">Submit Request</button>\n            </mat-card-actions>\n        </mat-card-content>\n      \n    </mat-card>\n</form>\n\n<div id=\"loader\">\n    <figure>\n        <mat-spinner color=\"accent\"></mat-spinner>\n    </figure>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent' style=\"top: 0;\">\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><strong>Sign In</strong></span>\n    <span id=\"spacer\"></span>\n\n</mat-toolbar>\n<br>\n<br>\n<br>\n<br>\n<mat-card>\n    <form [formGroup]=\"addressForm\" novalidate (ngSubmit)=\"login()\">\n\n        <div class=\"row\" style=\"\">\n            <br>\n            <br>\n\n            <label>Your Account Number</label>\n            <br>\n            <input type=\"text\" formControlName=\"id\">\n        </div>\n        <br>\n        <br>\n        <div class=\"row\">\n            <label>Your Account Password</label>\n            <br>\n            <input type=\"password\" formControlName=\"pwd\">\n\n        </div>\n        <div class=\"row\" style=\"display: flex;\">\n\n            <div class=\"col\" style=\"margin: 5% 10%;\">\n                <button mat-raised-button color=\"primary\" (click)=\"router('enrol')\">Sign Up</button>\n            </div>\n\n            <div class=\"col\" style=\"margin: 5% 10%;\">\n                <button mat-raised-button color=\"accent\" type=\"submit\">login</button>\n            </div>\n\n        </div>\n    </form>\n</mat-card>\n<div id=\"loader\">\n    <figure>\n        <mat-spinner  color=\"accent\"></mat-spinner>\n    </figure>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipt/receipt.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receipt/receipt.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent' style=\"top: 0;\">\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><strong>Account Balance</strong></span>\n    <span id=\"spacer\"></span>\n\n</mat-toolbar>\n<br>\n<br>\n<br>\n    <mat-toolbar>\n        <h1 style=\"text-align: right;\">\n            {{this.a/100}}\n            <!-- {{this.a.Math.ceil(this.a.length - 1),this.a.length)}} <span>your total cash</span> -->\n        </h1>\n    </mat-toolbar>\n<div class=\"df\" *ngFor=\"let a of this.aa\">\n\n    <mat-accordion>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    account_noOfDepositor\n                </mat-panel-title>\n                <mat-panel-description>\n                    {{a['account_noOfDepositor']}}\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n        </mat-expansion-panel>\n\n    </mat-accordion>\n    <mat-accordion>\n        <mat-expansion-panel>\n\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    amountDeposited\n                </mat-panel-title>\n                <mat-panel-description>\n                    {{a['amountDeposited']/100}} </mat-panel-description>\n            </mat-expansion-panel-header>\n        </mat-expansion-panel>\n\n    </mat-accordion>\n\n    <mat-accordion>\n        <mat-expansion-panel>\n\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    dateOfTransaction\n                </mat-panel-title>\n                <mat-panel-description>\n                    {{a['dateOfTransaction']}} </mat-panel-description>\n            </mat-expansion-panel-header>\n        </mat-expansion-panel>\n    </mat-accordion>\n    <mat-accordion>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    nameOfDepostor\n                </mat-panel-title>\n                <mat-panel-description>\n                    {{a['nameOfDepostor']}} </mat-panel-description>\n            </mat-expansion-panel-header>\n        </mat-expansion-panel>\n    </mat-accordion>\n<mat-accordion>\n\n<mat-expansion-panel>\n\n    <mat-expansion-panel-header>\n        <mat-panel-title>\n            refNo\n        </mat-panel-title>\n        <mat-panel-description>\n            {{a['refNo']}} </mat-panel-description>\n    </mat-expansion-panel-header>\n    </mat-expansion-panel>\n    </mat-accordion>\n</div>\n<!-- <label></label>\n        <mat-card-header>{{a['account_noOfDepositor']}}</mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-header>{{a['amountDeposited']}}</mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-header>{{a['dateOfTransaction']}}</mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-header>{{a['nameOfDepostor']}}</mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-header>{{a['refNo']}}</mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-header>{{a['nameOfReceipient']}}</mat-card-header>\n    </mat-card> -->\n\n<!-- <table mat-table dataSource=\"{{this.aa | async}}\" class=\"mat-elevation-z8\"> -->\n\n<!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n<!-- Position Column -->\n<!-- <ng-container matColumnDef=\"nameOfDepostor\">\n          <th mat-header-cell *matHeaderCellDef> Name of Depositor </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.nameOfDepostor}} </td>\n        </ng-container>\n       -->\n<!-- Name Column -->\n<!-- <ng-container matColumnDef=\"account_noOfReceipient\">\n          <th mat-header-cell *matHeaderCellDef> Recipient Account </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.account_noOfReceipient}} </td>\n        </ng-container> -->\n<!-- <ng-container matColumnDef=\"nameOfReceipient\">\n            <th mat-header-cell *matHeaderCellDef> Recipient Account </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.nameOfReceipient}} </td>\n          </ng-container> -->\n\n<!-- Weight Column -->\n<!-- <ng-container matColumnDef=\"amountDeposited\">\n          <th mat-header-cell *matHeaderCellDef> Amount Deposited </th>\n          <td mat-cell *matCellDef=\"let element\"> <h3>{{element.amountDeposited}} </h3></td>\n        </ng-container> -->\n\n<!-- Symbol Column -->\n<!-- <ng-container matColumnDef=\"account_noOfDepositor\">\n          <th mat-header-cell *matHeaderCellDef> Sender's Account Number</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.account_noOfDepositor}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"refNo\">\n            <th mat-header-cell *matHeaderCellDef>  Reference number</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.refNo}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"dateOfTransaction\">\n            <th mat-header-cell *matHeaderCellDef>Date of Transaction</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.dateOfTransaction}} </td>\n          </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table> -->\n<!-- <> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vc/vc.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vc/vc.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar matRipple color='accent' style=\"top: 0;\">\n    <button (click)=\"goback()\" mat-icon-button aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>west</mat-icon>\n    </button>\n    <span><h6>VCs & Government Agencies</h6></span>\n    <span id=\"spacer\"></span>\n\n</mat-toolbar>\n\n<section style=\"margin-top: 80px;\">\n    <mat-accordion>\n    \n        <mat-expansion-panel *ngFor=\"let a of this.e | async\" style=\"margin: 20px;\">\n            <mat-expansion-panel-header>\n                 <mat-panel-title style=\"display: block;\">\n                    <h6>Loan ID</h6>\n                    {{a.loanId}}\n                </mat-panel-title>\n                 <mat-panel-title style=\"display: block;\">\n                    <h6>Loan Amount</h6>\n    \n                    {{a.amount}}\n                </mat-panel-title>\n                <mat-panel-description style=\"display: block;\">\n                    <h6>Date of Request</h6>\n    \n                    {{a.dateOfRequest.slice(0 ,10)}}\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-list role=\"list\">\n                <mat-list-item role=\"listitem\">\n                    <h6>interest rate</h6>&nbsp; &nbsp;{{a.intRate}}\n                </mat-list-item>\n                <mat-list-item role=\"listitem\">\n                    <h6>Summary of Business</h6>&nbsp; &nbsp;{{a.summary}}\n                </mat-list-item>\n                <mat-list-item role=\"listitem\">\n                  \n                    <h6>About Business</h6>&nbsp; &nbsp; {{a.aboutBusiness}}\n               </mat-list-item>\n                <mat-list-item role=\"listitem\">\n                  \n                <h6>Reason</h6>&nbsp; &nbsp;       {{a.reason}}\n           </mat-list-item> \n           <mat-list-item role=\"listitem\">\n                  \n            <h6>Request Account ID</h6>&nbsp; &nbsp;    {{a.acctId}}\n    \n       </mat-list-item>\n                </mat-list>\n            \n             <mat-panel-title style=\"display: block;\">\n         \n            </mat-panel-title>\n             <mat-panel-title style=\"display: block;\">\n            </mat-panel-title>\n        </mat-expansion-panel>\n    \n    </mat-accordion>\n    \n    </section>\n    \n<form style=\"padding: 1%;\" [formGroup]=\"addressForm\" validate (ngSubmit)=\"onSubmit()\">\n    <mat-card class=\"shipping-card\">\n        <mat-card-header>\n            <mat-card-title>Submitted Information</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n\n            <div>\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"number\" placeholder=\"Loan ID\" formControlName=\"contact\">\n                    <mat-error *ngIf=\"addressForm.controls['contact'].hasError('invalid')\">\n                        Phone no. is <strong>Invalid</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n           \n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-select placeholder=\"select account type\" formControlName=\"type\">\n                            <mat-option *ngFor=\"let type of types\" [value]=\"type.abbreviation\">\n                                {{ type.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"addressForm.controls['type'].hasError('invalid')\">\n                            account type <strong>invalid</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col\">\n                    <mat-form-field class=\"full-width\">\n                        <mat-select placeholder=\"State\" formControlName=\"state\">\n                            <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                                {{ state.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"addressForm.controls['state'].hasError('invalid')\">\n                            State is <strong>invalid</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-raised-button color=\"accent\" type=\"submit\">Submit an offer</button>\n        </mat-card-actions>\n    </mat-card>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw/withdraw.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw/withdraw.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>withdraw works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation, slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('HomePage <=> AboutPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> FilterPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
    ])
]);
const slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => home', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => login', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => loan', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => enrol', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => register', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => withdraw', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => receipt', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => loanstatus', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => deposit', slideTo('right')),
]);
function slideTo(direction) {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ [direction]: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ [direction]: '100%' }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ [direction]: '0%' }))
            ])
        ]),
    ];
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deposit/deposit.component */ "./src/app/deposit/deposit.component.ts");
/* harmony import */ var _enrol_enrol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enrol/enrol.component */ "./src/app/enrol/enrol.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _loan_status_loan_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan-status/loan-status.component */ "./src/app/loan-status/loan-status.component.ts");
/* harmony import */ var _loan_loan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan/loan.component */ "./src/app/loan/loan.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./receipt/receipt.component */ "./src/app/receipt/receipt.component.ts");
/* harmony import */ var _vc_vc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vc/vc.component */ "./src/app/vc/vc.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");












const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], data: { animation: 'Home' } },
    { path: 'enrol', component: _enrol_enrol_component__WEBPACK_IMPORTED_MODULE_4__["EnrolComponent"], data: { animation: 'enrol' } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], data: { animation: 'login' } },
    { path: 'loan', component: _loan_loan_component__WEBPACK_IMPORTED_MODULE_7__["LoanComponent"], data: { animation: 'loan' } },
    { path: 'loanstatus', component: _loan_status_loan_status_component__WEBPACK_IMPORTED_MODULE_6__["LoanStatusComponent"], data: { animation: 'loanstatus' } },
    { path: 'deposit', component: _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_3__["DepositComponent"], data: { animation: 'deposit' } },
    { path: 'withdraw', component: _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__["WithdrawComponent"], data: { animation: 'withdraw' } },
    { path: 'account_balance', component: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptComponent"], data: { animation: 'receipt' } },
    { path: 'VC', component: _vc_vc_component__WEBPACK_IMPORTED_MODULE_10__["VCComponent"], data: { animation: 'VC' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-drawer-container{\r\n    height: 100%!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reg-log.service */ "./src/app/reg-log.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let AppComponent = class AppComponent {
    constructor(d, r, rs) {
        this.d = d;
        this.r = r;
        this.rs = rs;
        this.z = JSON.parse(localStorage.getItem("user"));
        this.title = 'Santsi Kudi';
    }
    ngOnInit() {
        this.chk();
    }
    chk() {
        this.z = JSON.parse(localStorage.getItem("user"));
        if (this.z != null || undefined) {
            this.d.getElementById('v').innerHTML = this.z['fullName'];
            this.d.getElementById('d').innerHTML = this.z['account_no'];
            this.d.getElementById('btn').innerHTML = 'log out';
        }
        else {
            this.d.getElementById('v').innerHTML = 'You are logged out';
            this.d.getElementById('btn').innerHTML = 'Log in';
            this.d.getElementById('d').innerHTML = '';
        }
    }
    logOut() {
        this.rs.logOut(this.z['account_no']);
        localStorage.clear();
        this.r.navigateByUrl('login');
    }
    goto(r) {
        this.r.navigateByUrl(r);
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
};
AppComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_4__["RegLogService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["slider"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]))
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm2015/ngmodule-material-carousel.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _enrol_enrol_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enrol/enrol.component */ "./src/app/enrol/enrol.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _loan_loan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loan/loan.component */ "./src/app/loan/loan.component.ts");
/* harmony import */ var _loan_status_loan_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loan-status/loan-status.component */ "./src/app/loan-status/loan-status.component.ts");
/* harmony import */ var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./deposit/deposit.component */ "./src/app/deposit/deposit.component.ts");
/* harmony import */ var _vc_vc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vc/vc.component */ "./src/app/vc/vc.component.ts");
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./receipt/receipt.component */ "./src/app/receipt/receipt.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



// import { MatToolbarModule } from '@angular/material/toolbar'
// import { MatSliderModule } from '@angular/material/slider';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatIconModule } from '@angular/material/icon';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatRippleModule } from '@angular/material/core';


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _enrol_enrol_component__WEBPACK_IMPORTED_MODULE_11__["EnrolComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _loan_loan_component__WEBPACK_IMPORTED_MODULE_13__["LoanComponent"],
            _loan_status_loan_status_component__WEBPACK_IMPORTED_MODULE_14__["LoanStatusComponent"],
            _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_15__["DepositComponent"],
            _vc_vc_component__WEBPACK_IMPORTED_MODULE_16__["VCComponent"],
            _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_17__["ReceiptComponent"],
            _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_18__["WithdrawComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselModule"].forRoot(),
            angular4_paystack__WEBPACK_IMPORTED_MODULE_19__["Angular4PaystackModule"].forRoot('pk_test_c5bc80647b60c1bf05f3f6fdac32a99f82b598ce'),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ],
        exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/deposit/deposit.component.css":
/*!***********************************************!*\
  !*** ./src/app/deposit/deposit.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-tab-group{\r\n    height: 100%!important;\r\n}\r\n.mat-tab-group{\r\n    height: 100%!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwb3NpdC9kZXBvc2l0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2RlcG9zaXQvZGVwb3NpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRhYi1ncm91cHtcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC10YWItZ3JvdXB7XHJcbiAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/deposit/deposit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/deposit/deposit.component.ts ***!
  \**********************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reg-log.service */ "./src/app/reg-log.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _poisson_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../poisson.service */ "./src/app/poisson.service.ts");







let DepositComponent = class DepositComponent {
    constructor(r, l, s, fb, pS) {
        this.r = r;
        this.l = l;
        this.s = s;
        this.fb = fb;
        this.pS = pS;
        this.addressForm = this.fb.group({
            pmtType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            acctNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.show = false;
        this.pmtType = [
            { name: 'Card', abbreviation: 'Card' },
            { name: 'airtime', abbreviation: 'airtime' },
        ];
        this.amounts = [
            { name: '200,000', abbreviation: '20000000' },
            { name: '180,000', abbreviation: '10000000' },
            { name: '170,000', abbreviation: '17000000' },
            { name: '150,000', abbreviation: '15000000' },
            { name: '130,000', abbreviation: '13000000' },
            { name: '120,000', abbreviation: '12000000' },
            { name: '100,000', abbreviation: '10000000' },
            { name: '70,000', abbreviation: '7000000' },
            { name: '50,000', abbreviation: '5000000' },
            { name: '20,000', abbreviation: '2000000' },
            { name: '10,000', abbreviation: '1000000' },
            { name: '5,000', abbreviation: '500000' },
            { name: '1,000', abbreviation: '100000' }
        ];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.chkLog();
            //  this.h =  `${this.s.checkLogUser()['email']}`;
            this.ref = `${Math.floor(Math.random() * 1000000000)}`;
        });
    }
    goback() {
        this.l.back();
    }
    chkAcctNo() {
        if (this.addressForm.get('acctNo').value == null) {
            this.show = false;
            return;
        }
        this.pS.chAcct(this.addressForm.get('acctNo').value)
            .subscribe(s => {
            if (s['code'] == 0)
                this.show = false;
            this.b = s;
            console.log(this.b);
            this.show = true;
        });
    }
    paymentCancel() {
        alert('you cancelled your deposit');
    }
    paymentDone() {
        this.pS.sav(this.addressForm.get('amount').value, this.ref, this.s.checkLogUser())
            .subscribe(a => {
            console.info(a);
        });
        this.r.navigateByUrl('home');
    }
    chkLog() {
        if (this.s.checkLogUser() == null || undefined)
            this.r.navigateByUrl('login');
        this.h = this.s.checkLogUser()['email'] || JSON.parse(localStorage.getItem("user"))['email'];
        console.info(this.h);
    }
};
DepositComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_2__["RegLogService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _poisson_service__WEBPACK_IMPORTED_MODULE_6__["PoissonService"] }
];
DepositComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deposit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deposit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deposit/deposit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deposit.component.css */ "./src/app/deposit/deposit.component.css")).default]
    })
], DepositComponent);



/***/ }),

/***/ "./src/app/enrol/enrol.component.css":
/*!*******************************************!*\
  !*** ./src/app/enrol/enrol.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .shipping-card {\r\n    min-width: 120px;\r\n    margin: 20px auto;\r\n  }\r\n  \r\n  .mat-radio-button {\r\n    display: block;\r\n    margin: 5px 0;\r\n  }\r\n  \r\n  .row {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .col {\r\n    flex: 1;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  .col:last-child {\r\n    margin-right: 0;\r\n  }\r\n  \r\n  #loader{\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%!important;\r\n    background: rgba(0, 0, 0, 0.685);\r\n    display: flex;\r\n    place-content: center;\r\n    place-items: center;\r\n    z-index: 5;\r\n    visibility: hidden;\r\n    width: 100%;\r\n    will-change: visibility;\r\n    transition: visibilty .3s cubic-bezier(0.6, -0.28, 0.735, 0.045);\r\n}\r\n  \r\n  .show{\r\n    visibility: visible!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5yb2wvZW5yb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLE9BQU87SUFDUCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0VBQWdFO0FBQ3BFOztFQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvZW5yb2wvZW5yb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc2hpcHBpbmctY2FyZCB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgXHJcbiAgLmNvbCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAjbG9hZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42ODUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aWxsLWNoYW5nZTogdmlzaWJpbGl0eTtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWx0eSAuM3MgY3ViaWMtYmV6aWVyKDAuNiwgLTAuMjgsIDAuNzM1LCAwLjA0NSk7XHJcbn1cclxuLnNob3d7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/enrol/enrol.component.ts":
/*!******************************************!*\
  !*** ./src/app/enrol/enrol.component.ts ***!
  \******************************************/
/*! exports provided: EnrolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolComponent", function() { return EnrolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reg-log.service */ "./src/app/reg-log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let EnrolComponent = class EnrolComponent {
    constructor(d, fb, l, s, r) {
        this.d = d;
        this.fb = fb;
        this.l = l;
        this.s = s;
        this.r = r;
        this.ed = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
        this.addressForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.ed),
                ])
            ],
            contact: [234, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)
                ])
            ],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            abtBiz: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])
            ],
        });
        this.types = [
            { name: 'Business', abbreviation: 'primary' },
            { name: 'investor', abbreviation: 'vc' }
        ];
        this.states = [
            { name: 'Kano', abbreviation: 'Kano' },
            { name: 'Kaduna', abbreviation: 'Kaduna' },
            { name: 'Niger', abbreviation: 'Niger' },
            { name: 'Katsina', abbreviation: 'Katsina' },
            { name: 'Bornu', abbreviation: 'Bornu' },
            { name: 'Sokoto', abbreviation: 'Sokoto' },
            { name: 'Jigawa', abbreviation: 'Jigawa' },
            { name: 'Taraba', abbreviation: 'Taraba' },
            { name: 'Kwara', abbreviation: 'Kwara' },
            { name: 'Nasarawa', abbreviation: 'Nasarawa' },
            { name: 'Zamfara', abbreviation: 'Zamfara' },
            { name: 'Kebbi', abbreviation: 'Kebbi' },
            { name: 'Kogi', abbreviation: 'Kogi' },
            { name: 'Gombe', abbreviation: 'Gombe' },
        ];
    }
    goback() {
        this.l.back();
    }
    onSubmit() {
        console.info(this.addressForm.value);
        if (this.addressForm.valid) {
            this.d.getElementById('loader').classList.add('show');
            this.s.reg(this.addressForm.value)
                .subscribe(s => {
                switch (s['code']) {
                    case 1:
                        {
                            this.hu = s;
                            this.show = true;
                            // alert()
                            // this.d.getElementById('dialog').showModal();
                            var r = confirm(s['msg'] + +"\n" + "You account no " + s['user']['account_no'] + "\n" + "Make sure you keep it safe");
                            if (r == true) {
                                this.r.navigateByUrl('login');
                            }
                            else {
                                this.r.navigateByUrl('login');
                            }
                        }
                        break;
                    case 0:
                        {
                            r = confirm(s['msg']);
                            this.hu = s;
                            this.show = true;
                            // this.d.getElementsByClassName('dialog')
                            // this.d.getElementById('dialog').showModal();
                            // g.
                            console.info(s['msg']);
                        }
                        break;
                    default: alert(s);
                }
            });
        }
    }
    close() {
        this.show = false;
    }
    ngOnInit() { }
};
EnrolComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_4__["RegLogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EnrolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enrol',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enrol.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enrol/enrol.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enrol.component.css */ "./src/app/enrol/enrol.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], EnrolComponent);



/***/ }),

/***/ "./src/app/home.service.ts":
/*!*********************************!*\
  !*** ./src/app/home.service.ts ***!
  \*********************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomeService = class HomeService {
    constructor(Http) {
        this.Http = Http;
    }
    // Sandbox-Key                     your-sandbox-key
    // content-type                    application/json
    // accept                          application/json
    // x-ibm-client-id                 f
    kol() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        headers.append('accept', 'applicatiion/json');
        headers.append('x-ibm-client-id', 'f');
        headers.append(' Sandbox-Key', '37de4935bccdfa335f59b3783a0368d0');
        return this.Http.post('https://sandboxapi.fsi.ng/fcmb/payments/nip/transfers', {
            "nameEnquiryRef": "999214190218121217000001177403",
            "destinationInstitutionCode": "999063",
            "channelCode": "2",
            "beneficiaryAccountNumber": "0000000000",
            "beneficiaryAccountName": "OBIOHA O. GODDY",
            "beneficiaryBankVerificationNumber": "1",
            "beneficiaryKYCLevel": "3",
            "originatorAccountName": "OKUBOTE IDOWU OLUWAKEMI",
            "originatorAccountNumber": "0000000000",
            "transactionNarration": "Esb Test",
            "paymentReference": "12345",
            "amount": "100.1",
            "traceId": "12345",
            "chargeAmount": "52.59",
            "platformType": "ESB"
        }, { headers: headers }).subscribe(e => { console.info(e); });
    }
    koll() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post('http://localhost:3000/verifyBVN', { a: "mklmkmk" }, { headers: headers });
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tiles{\r\n    margin: 10% 4%;\r\n    height: 70px;\r\n    width: 100px;\r\n    background-color: var(--lemon);\r\n    box-sizing: border-box;\r\n    border-radius: 20px;\r\n    flex-grow: 1 ;\r\n    order: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZXN7XHJcbiAgICBtYXJnaW46IDEwJSA0JTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxlbW9uKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZmxleC1ncm93OiAxIDtcclxuICAgIG9yZGVyOiAyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home.service */ "./src/app/home.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(s, r) {
        this.s = s;
        this.r = r;
        this.slides = [
            { 'image': '/santsikudi/blob/gh-pages/assets/images/slide_image.jpg' },
            { 'image': '/santsikudi/blob/gh-pages/assets/images/slide_image1.jpg' },
            { 'image': '/santsikudi/blob/gh-pages/assets/images/slide_image0.jpg' },
        ];
        this.show = false;
    }
    chk() {
        var z = JSON.parse(localStorage.getItem("lang"));
        if (z == null || undefined) {
            var w = confirm('would you like hausa');
            if (w == true) {
                localStorage.setItem('lang', JSON.stringify('h'));
                this.show = true;
            }
            else {
                this.show = false;
                localStorage.setItem('lang', JSON.stringify('e'));
            }
        }
        else if (z == 'e')
            this.show = false;
        else if (z == 'h')
            this.show = true;
    }
    router(r) {
        this.r.navigateByUrl(r);
    }
    ngOnInit() {
        this.s.koll().subscribe(e => {
            console.info(e);
        });
        this.chk();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/loan-status/loan-status.component.css":
/*!*******************************************************!*\
  !*** ./src/app/loan-status/loan-status.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel{margin: 10px 0px!important;}\r\nh6{\r\n    margin: 3px 0px 0px!important;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi1zdGF0dXMvbG9hbi1zdGF0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUIsMEJBQTBCLENBQUM7QUFDaEQ7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9hbi1zdGF0dXMvbG9hbi1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVse21hcmdpbjogMTBweCAwcHghaW1wb3J0YW50O31cclxuaDZ7XHJcbiAgICBtYXJnaW46IDNweCAwcHggMHB4IWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/loan-status/loan-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/loan-status/loan-status.component.ts ***!
  \******************************************************/
/*! exports provided: LoanStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanStatusComponent", function() { return LoanStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _poisson_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../poisson.service */ "./src/app/poisson.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let LoanStatusComponent = class LoanStatusComponent {
    constructor(s, l) {
        this.s = s;
        this.l = l;
    }
    ngOnInit() {
        this.e = this.s.loanHis();
    }
    goback() {
        this.l.back();
    }
};
LoanStatusComponent.ctorParameters = () => [
    { type: _poisson_service__WEBPACK_IMPORTED_MODULE_2__["PoissonService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
LoanStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-status/loan-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-status.component.css */ "./src/app/loan-status/loan-status.component.css")).default]
    })
], LoanStatusComponent);



/***/ }),

/***/ "./src/app/loan/loan.component.css":
/*!*****************************************!*\
  !*** ./src/app/loan/loan.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show{\r\nvisibility: visible!important;\r\n}\r\n#loader{\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%!important;\r\n    background: rgba(0, 0, 0, 0.685);\r\n    display: flex;\r\n    place-content: center;\r\n    place-items: center;\r\n    z-index: 5;\r\n    visibility: hidden;\r\n    width: 100%;\r\n    will-change: visibility;\r\n    transition: visibilty .3s cubic-bezier(0.6, -0.28, 0.735, 0.045);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi9sb2FuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdFQUFnRTtBQUNwRSIsImZpbGUiOiJzcmMvYXBwL2xvYW4vbG9hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3d7XHJcbnZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcbiNsb2FkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY4NSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdpbGwtY2hhbmdlOiB2aXNpYmlsaXR5O1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbHR5IC4zcyBjdWJpYy1iZXppZXIoMC42LCAtMC4yOCwgMC43MzUsIDAuMDQ1KTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/loan/loan.component.ts":
/*!****************************************!*\
  !*** ./src/app/loan/loan.component.ts ***!
  \****************************************/
/*! exports provided: LoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanComponent", function() { return LoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reg-log.service */ "./src/app/reg-log.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _poisson_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../poisson.service */ "./src/app/poisson.service.ts");







let LoanComponent = class LoanComponent {
    constructor(d, ls, fb, l, s, r) {
        this.d = d;
        this.ls = ls;
        this.fb = fb;
        this.l = l;
        this.s = s;
        this.r = r;
        this.addressForm = this.fb.group({
            reason: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            summary: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            bvn: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(11)
                ])],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            duration: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            amount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.sho = false;
        this.show = false;
        this.types = [
            { name: '25%' },
            { name: '24%' },
            { name: '23%' },
            { name: '22%' },
            { name: '21%' },
            { name: '20%' },
            { name: '15%' },
            { name: '10%' },
            { name: '5%' },
        ];
        this.durations = [
            { name: '1 year' },
            { name: '2 years' },
            { name: '3 years' },
            { name: '4 years' },
            { name: '5 years' },
            { name: '6 years' },
            { name: '7 years' },
            { name: '8 years' },
            { name: '9 years' },
            { name: '10 years' },
        ];
    }
    goback() {
        this.l.back();
    }
    ngOnInit() {
        this.chkLog();
    }
    vrf() {
        this.show = true;
        this.ls.vrfBvn(this.addressForm.get('bvn').value, JSON.parse(localStorage.getItem("user"))['account_no']);
        setTimeout(() => { this.chkLog(); }, 5000);
    }
    chkLog() {
        if (JSON.parse(localStorage.getItem("user")) == '') {
            this.r.navigateByUrl('login');
        }
        else if (JSON.parse(localStorage.getItem("user"))['verified']
            == false) {
            this.d.getElementById('loanForm').style.visibility = "hidden";
            this.d.getElementById('bvn').classList.add('show');
        }
        else if (JSON.parse(localStorage.getItem("user"))['verified']
            == true) {
            console.info('bvn');
            this.d.getElementById('loanForm').classList.add('show');
            this.d.getElementById('bvn').classList.remove('show');
        }
    }
    onSubmit() {
        this.d.getElementById('loader').classList.add('show');
        this.ls.loan(this.addressForm.value).subscribe(s => {
            var r = confirm('successfully submitted' + "\n" + "This is your Loan ID" + "\n" + s['loanId']);
            if (r == true)
                this.r.navigateByUrl('loanstatus');
            this.r.navigateByUrl('loanstatus');
        });
    }
};
LoanComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _poisson_service__WEBPACK_IMPORTED_MODULE_6__["PoissonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_4__["RegLogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan.component.css */ "./src/app/loan/loan.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], LoanComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loader{\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%!important;\r\n    background:rgba(0, 0, 0, 0.685);\r\n    display: flex;\r\n    place-content: center;\r\n    place-items: center;\r\n    z-index: 5;\r\n    visibility: hidden;\r\n    width: 100%;\r\n    will-change: visibility;\r\n    transition: visibilty .3s cubic-bezier(0.6, -0.28, 0.735, 0.045);\r\n}\r\n.show{\r\n    visibility: visible!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNjg1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHZpc2liaWxpdHk7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsdHkgLjNzIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpO1xyXG59XHJcbi5zaG93e1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reg-log.service */ "./src/app/reg-log.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let LoginComponent = class LoginComponent {
    constructor(d, r, s, fb, l) {
        this.d = d;
        this.r = r;
        this.s = s;
        this.fb = fb;
        this.l = l;
        this.addressForm = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() { }
    goback() {
        this.l.back();
    }
    login() {
        this.d.getElementById('loader').classList.add('show');
        this.s.login(this.addressForm.value);
    }
    router(r) {
        this.r.navigateByUrl(r);
    }
};
LoginComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_3__["RegLogService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/poisson.service.ts":
/*!************************************!*\
  !*** ./src/app/poisson.service.ts ***!
  \************************************/
/*! exports provided: PoissonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoissonService", function() { return PoissonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PoissonService = class PoissonService {
    constructor(Http, r) {
        this.Http = Http;
        this.r = r;
        // server = 'http://localhost:3000/';
        this.server = 'https://api-sansti-kudi.herokuapp.com/';
    }
    sav(a, b, user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server +
            'updAcct/' + a + '/' + b +
            '/' + user['fullName'] +
            '/' + user['account_no'] +
            '/' + user['account_no'] +
            '/' + user['fullName'], { headers: headers });
    }
    retrAcctBal(user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server + 'retrAcctBal/' + user['account_no'], { headers: headers });
    }
    retrCred(user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server + 'retrCred/' + user['account_no'], { headers: headers });
    }
    chAcct(s) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server + 'chAcct/' + s, { headers: headers });
    }
    vrfBvn(bvn, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server + 'verifyBVN/' + bvn + "/" + id, { headers: headers })
            .subscribe(e => {
            localStorage.setItem('user', JSON.stringify(e));
        });
    }
    loan(d) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.server + 'loan', { a: d, abtBiz: JSON.parse(localStorage.getItem("user"))['abtBiz'], acctId: JSON.parse(localStorage.getItem("user"))['account_no'] }, { headers: headers });
    }
    loanHis() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server + 'loanHis/' + JSON.parse(localStorage.getItem("user"))['account_no'], { headers: headers });
    }
    loans() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server + 'loans', { headers: headers });
    }
};
PoissonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PoissonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PoissonService);



/***/ }),

/***/ "./src/app/receipt/receipt.component.css":
/*!***********************************************!*\
  !*** ./src/app/receipt/receipt.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".df{\r\n    margin: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWlwdC9yZWNlaXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVjZWlwdC9yZWNlaXB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGZ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/receipt/receipt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/receipt/receipt.component.ts ***!
  \**********************************************/
/*! exports provided: ReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptComponent", function() { return ReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reg-log.service */ "./src/app/reg-log.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _poisson_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../poisson.service */ "./src/app/poisson.service.ts");






let ReceiptComponent = class ReceiptComponent {
    constructor(r, l, s, pS) {
        this.r = r;
        this.l = l;
        this.s = s;
        this.pS = pS;
        this.displayedColumns = [
            'dateOfTransaction',
            'nameOfDepostor',
            'account_noOfDepositor',
            'amountDeposited',
            'refNo'
        ];
    }
    goback() {
        this.l.back();
    }
    ngOnInit() {
        this.chkLog();
    }
    chkLog() {
        this.pS.retrAcctBal(this.s.checkLogUser())
            .subscribe(e => {
            this.a = e;
        });
        this.pS.retrCred(this.s.checkLogUser())
            .subscribe(e => {
            this.aa = e;
        });
    }
    rtrDebit() {
    }
};
ReceiptComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_3__["RegLogService"] },
    { type: _poisson_service__WEBPACK_IMPORTED_MODULE_5__["PoissonService"] }
];
ReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receipt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipt/receipt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receipt.component.css */ "./src/app/receipt/receipt.component.css")).default]
    })
], ReceiptComponent);



/***/ }),

/***/ "./src/app/reg-log.service.ts":
/*!************************************!*\
  !*** ./src/app/reg-log.service.ts ***!
  \************************************/
/*! exports provided: RegLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegLogService", function() { return RegLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegLogService = class RegLogService {
    constructor(d, Http, r) {
        this.d = d;
        this.Http = Http;
        this.r = r;
        // server = 'http://localhost:3000/';
        this.server = 'https://api-sansti-kudi.herokuapp.com/';
    }
    reg(data) {
        console.info(data);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.server + 'register', data, { headers: headers });
    }
    logOut(id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.get(this.server + 'chkLog/' + id, { headers: headers });
    }
    login(d) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.server + 'login', d, { headers: headers }).subscribe(d => {
            this.d.getElementById('loader').classList.remove('show');
            if (d['code'] == 1) {
                this.rr = confirm(d['msg']);
                if (this.rr == true) {
                    localStorage.setItem('user', JSON.stringify(d['user']));
                    this.r.navigateByUrl('home');
                }
                this.r.navigateByUrl('home');
                return;
            }
            this.rr = confirm(d['msg']);
            // if (this.rr == true) this.r.navigateByUrl('home');
            // this.r.navigateByUrl('home');
        });
    }
    checkLogUser() {
        var z = JSON.parse(localStorage.getItem("user"));
        if (z == null || undefined)
            this.r.navigateByUrl('login');
        return z;
        //   var headers = new HttpHeaders();
        // headers.append('Content-Type', 'applicatiion/json');
        // return this.Http.get(this.server + 'chkLog/'+z['account_no'] , { headers: headers })
    }
};
RegLogService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]))
], RegLogService);



/***/ }),

/***/ "./src/app/vc/vc.component.css":
/*!*************************************!*\
  !*** ./src/app/vc/vc.component.css ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel{margin: 10px 0px!important;}\r\nh6{\r\n    margin: 3px 0px 0px!important;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmMvdmMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUIsMEJBQTBCLENBQUM7QUFDaEQ7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmMvdmMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVse21hcmdpbjogMTBweCAwcHghaW1wb3J0YW50O31cclxuaDZ7XHJcbiAgICBtYXJnaW46IDNweCAwcHggMHB4IWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/vc/vc.component.ts":
/*!************************************!*\
  !*** ./src/app/vc/vc.component.ts ***!
  \************************************/
/*! exports provided: VCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCComponent", function() { return VCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _poisson_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../poisson.service */ "./src/app/poisson.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let VCComponent = class VCComponent {
    constructor(s, l, fb) {
        this.s = s;
        this.l = l;
        this.fb = fb;
        this.ed = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
        this.addressForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.ed),
                ])
            ],
            contact: [234, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11)
                ])
            ],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            abtBiz: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
                ])
            ],
        });
        this.types = [
            { name: 'Business', abbreviation: 'primary' },
            { name: 'investor', abbreviation: 'vc' }
        ];
        this.states = [
            { name: 'Kano', abbreviation: 'Kano' },
            { name: 'Kaduna', abbreviation: 'Kaduna' },
            { name: 'Niger', abbreviation: 'Niger' },
            { name: 'Katsina', abbreviation: 'Katsina' },
            { name: 'Bornu', abbreviation: 'Bornu' },
            { name: 'Sokoto', abbreviation: 'Sokoto' },
            { name: 'Jigawa', abbreviation: 'Jigawa' },
            { name: 'Taraba', abbreviation: 'Taraba' },
            { name: 'Kwara', abbreviation: 'Kwara' },
            { name: 'Nasarawa', abbreviation: 'Nasarawa' },
            { name: 'Zamfara', abbreviation: 'Zamfara' },
            { name: 'Kebbi', abbreviation: 'Kebbi' },
            { name: 'Kogi', abbreviation: 'Kogi' },
            { name: 'Gombe', abbreviation: 'Gombe' },
        ];
    }
    ngOnInit() {
        this.e = this.s.loans();
    }
    goback() {
        this.l.back();
    }
};
VCComponent.ctorParameters = () => [
    { type: _poisson_service__WEBPACK_IMPORTED_MODULE_2__["PoissonService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
VCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vc/vc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vc.component.css */ "./src/app/vc/vc.component.css")).default]
    })
], VCComponent);



/***/ }),

/***/ "./src/app/withdraw/withdraw.component.css":
/*!*************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpdGhkcmF3L3dpdGhkcmF3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.ts":
/*!************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.ts ***!
  \************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WithdrawComponent = class WithdrawComponent {
    constructor() { }
    ngOnInit() {
    }
};
WithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-withdraw',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./withdraw.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw/withdraw.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./withdraw.component.css */ "./src/app/withdraw/withdraw.component.css")).default]
    })
], WithdrawComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\ShopOfShop\shopOfShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map