(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/user-edit/user-edit.component */ "./src/components/user-edit/user-edit.component.ts");
/* harmony import */ var src_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/user-list/user-list.component */ "./src/components/user-list/user-list.component.ts");





var routes = [
    { path: '', component: src_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: 'user-edit/:id', component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"] },
    { path: 'user-add', component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>User Management App</h1>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/user-edit/user-edit.component */ "./src/components/user-edit/user-edit.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/user-list/user-list.component */ "./src/components/user-list/user-list.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/page-header/page-header.component */ "./src/components/page-header/page-header.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"],
                _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2000 } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/page-header/page-header.component.html":
/*!***************************************************************!*\
  !*** ./src/components/page-header/page-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNewButton\" class=\"user-add-button\">\n    <a [routerLink]=\"['/user-add']\" color=\"primary\" mat-mini-fab>\n        <mat-icon>add</mat-icon>\n    </a>\n</div>\n\n<h2>{{ title }}</h2>\n\n<button *ngIf=\"showGoBackButton\" (click)=\"onGoBackButtonClick()\" mat-button>\n    <mat-icon>arrow_back</mat-icon>\n    Go Back\n</button>\n\n\n"

/***/ }),

/***/ "./src/components/page-header/page-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/page-header/page-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-add-button {\n  float: right;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1Byb2plY3RzL3VzZXItbWFuYWdlbWVudC9zcmMvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1hZGQtYnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/page-header/page-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/page-header/page-header.component.ts ***!
  \*************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent(location) {
        this.location = location;
    }
    PageHeaderComponent.prototype.onGoBackButtonClick = function () {
        this.location.back();
    };
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PageHeaderComponent.prototype, "showGoBackButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PageHeaderComponent.prototype, "showNewButton", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/components/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/components/page-header/page-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/components/user-edit/user-edit.component.html":
/*!***********************************************************!*\
  !*** ./src/components/user-edit/user-edit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [title]=\"!userId ? 'Add New User' : userLabel\" showGoBackButton=\"true\"></app-page-header>\n\n<form class=\"user-edit\" [formGroup]=\"userForm\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"No.\" formControlName=\"number\">\n        <mat-error *ngIf=\"userForm.get('number').errors?.required\">\n            Number is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\n        <mat-error *ngIf=\"userForm.get('firstName').errors?.required\">\n            First name is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n        <mat-error *ngIf=\"userForm.get('lastName').errors?.required\">\n            Last name is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Email Address\" formControlName=\"email\">\n        <mat-error *ngIf=\"userForm.get('email').errors?.required\">\n            Email is <strong>required</strong>\n        </mat-error>\n        <mat-error *ngIf=\"userForm.get('email').errors?.email\">\n            Email is <strong>not valid</strong>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Age\" formControlName=\"age\">\n    </mat-form-field>\n</form>\n\n<button mat-raised-button color=\"primary\" [disabled]=\"!userForm.valid\" (click)=\"onSubmitClick()\">Submit</button>\n"

/***/ }),

/***/ "./src/components/user-edit/user-edit.component.scss":
/*!***********************************************************!*\
  !*** ./src/components/user-edit/user-edit.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-edit {\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1Byb2plY3RzL3VzZXItbWFuYWdlbWVudC9zcmMvY29tcG9uZW50cy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1lZGl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/user-edit/user-edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/user-edit/user-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/user-storage.service */ "./src/services/user-storage.service.ts");






var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, router, fb, snackBar, userStorageService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.snackBar = snackBar;
        this.userStorageService = userStorageService;
        this.userForm = this.fb.group({
            number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            age: ['']
        });
    }
    UserEditComponent.prototype.onSubmitClick = function () {
        var _this = this;
        var user = this.userForm.value;
        if (this.userId) {
            this.userStorageService.put(this.userId, user)
                .subscribe(function () { return _this.snackBar.open("User updated"); });
        }
        else {
            this.userStorageService.post(user)
                .subscribe(function (user) { return _this.router.navigate(['user-edit', user._id])
                .then(function () { return _this.snackBar.open("User created"); }); });
        }
    };
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            if (id) {
                _this.userStorageService.get(id).subscribe(function (user) {
                    _this.userForm.patchValue(user);
                    _this.userLabel = user.firstName + " " + user.lastName;
                    _this.userId = user._id;
                });
            }
        });
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/components/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/components/user-edit/user-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_services_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/components/user-list/user-list.component.html":
/*!***********************************************************!*\
  !*** ./src/components/user-list/user-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"List of Users\" showNewButton=\"true\" ></app-page-header>\n\n<table mat-table [dataSource]=\"users\" matSort class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.number}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"firstName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"lastName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"age\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Age </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.age}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"rowClicked(row)\"></tr>\n</table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n"

/***/ }),

/***/ "./src/components/user-list/user-list.component.scss":
/*!***********************************************************!*\
  !*** ./src/components/user-list/user-list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\ntr {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1Byb2plY3RzL3VzZXItbWFuYWdlbWVudC9zcmMvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/components/user-list/user-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/user-list/user-list.component.ts ***!
  \*********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_user_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/user-storage.service */ "./src/services/user-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserListComponent = /** @class */ (function () {
    function UserListComponent(userStorageService, router) {
        this.userStorageService = userStorageService;
        this.router = router;
        this.displayedColumns = ['number', 'firstName', 'lastName', 'email', 'age'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userStorageService.getList().subscribe(function (users) {
            _this.users = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](users);
            _this.users.paginator = _this.paginator;
            _this.users.sort = _this.sort;
        });
    };
    UserListComponent.prototype.rowClicked = function (user) {
        this.router.navigate(['user-edit', user._id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UserListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], UserListComponent.prototype, "sort", void 0);
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/components/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_user_storage_service__WEBPACK_IMPORTED_MODULE_3__["UserStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/user-storage.service.ts":
/*!**********************************************!*\
  !*** ./src/services/user-storage.service.ts ***!
  \**********************************************/
/*! exports provided: UserStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStorageService", function() { return UserStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _users_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.mock */ "./src/services/users.mock.ts");




var UserStorageService = /** @class */ (function () {
    function UserStorageService() {
        this.data = _users_mock__WEBPACK_IMPORTED_MODULE_3__["usersMock"];
    }
    UserStorageService.prototype.getList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data);
    };
    UserStorageService.prototype.get = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data.filter(function (user) { return user._id === id; })[0]);
    };
    UserStorageService.prototype.put = function (id, user) {
        var dest = this.data.find(function (user) { return user._id === id; });
        var data = Object.assign({}, user);
        delete data._id;
        Object.assign(dest, data);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(dest);
    };
    UserStorageService.prototype.post = function (user) {
        user._id = this.newId();
        this.data.push(user);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
    };
    UserStorageService.prototype.newId = function () {
        return Math.random().toString(36).substr(2, 9);
    };
    UserStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserStorageService);
    return UserStorageService;
}());



/***/ }),

/***/ "./src/services/users.mock.ts":
/*!************************************!*\
  !*** ./src/services/users.mock.ts ***!
  \************************************/
/*! exports provided: usersMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersMock", function() { return usersMock; });
var usersMock = [
    {
        "_id": "5cb1e4516e8656a8ed1118d8",
        "number": 1,
        "age": 28,
        "firstName": "Nixon",
        "lastName": "Oneil",
        "email": "nixononeil@talkola.com"
    },
    {
        "_id": "5cb1e4514992f85729570d44",
        "number": 2,
        "age": 39,
        "firstName": "Lucinda",
        "lastName": "Foreman",
        "email": "lucindaforeman@talkola.com"
    },
    {
        "_id": "5cb1e4518fde554d674f7b99",
        "number": 3,
        "age": 28,
        "firstName": "Allen",
        "lastName": "Villarreal",
        "email": "allenvillarreal@talkola.com"
    },
    {
        "_id": "5cb1e451db9ffc3db1dec7d1",
        "number": 4,
        "age": 22,
        "firstName": "Fran",
        "lastName": "Ramsey",
        "email": "franramsey@talkola.com"
    },
    {
        "_id": "5cb1e451ff92c700f8ba8684",
        "number": 5,
        "age": 27,
        "firstName": "Burnett",
        "lastName": "Blanchard",
        "email": "burnettblanchard@talkola.com"
    },
    {
        "_id": "5cb1e451d7ccff87f3239bd0",
        "number": 6,
        "age": 33,
        "firstName": "Sims",
        "lastName": "Hines",
        "email": "simshines@talkola.com"
    },
    {
        "_id": "5cb1e451b60c154a70b68eff",
        "number": 7,
        "age": 24,
        "firstName": "Rosie",
        "lastName": "Rush",
        "email": "rosierush@talkola.com"
    },
    {
        "_id": "5cb1e45187227bdd4320df63",
        "number": 8,
        "age": 23,
        "firstName": "Mcguire",
        "lastName": "Mercado",
        "email": "mcguiremercado@talkola.com"
    },
    {
        "_id": "5cb1e451b32da6b0b8fc1f69",
        "number": 9,
        "age": 21,
        "firstName": "Duran",
        "lastName": "Hughes",
        "email": "duranhughes@talkola.com"
    },
    {
        "_id": "5cb1e4512b91e23ce1bc21ee",
        "number": 10,
        "age": 37,
        "firstName": "Shelley",
        "lastName": "Davenport",
        "email": "shelleydavenport@talkola.com"
    },
    {
        "_id": "5cb1e45111d4c7a259d40092",
        "number": 11,
        "age": 34,
        "firstName": "Bridget",
        "lastName": "Hays",
        "email": "bridgethays@talkola.com"
    },
    {
        "_id": "5cb1e451cecd45206b032377",
        "number": 12,
        "age": 26,
        "firstName": "Church",
        "lastName": "Reeves",
        "email": "churchreeves@talkola.com"
    },
    {
        "_id": "5cb1e4510ed61f70950d99a6",
        "number": 13,
        "age": 22,
        "firstName": "Bradshaw",
        "lastName": "Ayala",
        "email": "bradshawayala@talkola.com"
    },
    {
        "_id": "5cb1e4513cf695e315485c83",
        "number": 14,
        "age": 22,
        "firstName": "Arline",
        "lastName": "Randolph",
        "email": "arlinerandolph@talkola.com"
    },
    {
        "_id": "5cb1e45149bd027c785809bf",
        "number": 15,
        "age": 37,
        "firstName": "Catherine",
        "lastName": "Gay",
        "email": "catherinegay@talkola.com"
    }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivan/Library/Mobile Documents/com~apple~CloudDocs/Projects/user-management/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map