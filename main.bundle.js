webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Pre-Loader -->\r\n<div class=\"page-preloader\">\r\n  <div class=\"preloader\">\r\n    <img src=\"../assets/img/preloader.gif\" alt=\"Preloader\">\r\n  </div>\r\n</div><!-- .page-preloader -->\r\n\r\n<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <app-footer></app-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("./src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_pages_home_home_module__ = __webpack_require__("./src/app/pages/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_product_product_module__ = __webpack_require__("./src/app/pages/product/product.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_8_app_pages_home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_product_product_module__["a" /* ProductModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
    }
];


/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Featured Categories -->\r\n<section class=\"container-fluid\" style=\"padding-top: 7px;margin-top:55px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <a href=\"#\" class=\"category-tile\">\r\n        <div class=\"inner\">\r\n          <div class=\"column\">\r\n            <h3 class=\"space-bottom-half\">Bến Tre</h3>\r\n            <p class=\"text-sm text-gray\">Từ 50,000 VNĐ</p>\r\n          </div>\r\n          <div class=\"column\">\r\n            <div class=\"category-thumb\">\r\n              <img src=\"assets/img/ben-tre/chuot-dua.jpg\" alt=\"Category\" style=\"height: 300px;\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <a href=\"#\" class=\"category-tile\">\r\n        <div class=\"inner\">\r\n          <div class=\"column\">\r\n            <h3>Nha Trang</h3>\r\n            <p class=\"text-sm text-gray\">Từ 50,000 VNĐ</p>\r\n          </div>\r\n          <div class=\"column\">\r\n            <div class=\"category-thumb\">\r\n              <img src=\"assets/img/nha-trang/mamca.jpg\" alt=\"Category\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div><!-- .row -->\r\n</section><!-- .container-fluid -->\r\n\r\n<!-- Product Grid -->\r\n<section class=\"container padding-top-3x\">\r\n\r\n  <!-- Bestsellers -->\r\n  <h3 class=\"text-center\">Best seller</h3>\r\n  <div class=\"row padding-top\">\r\n    <!-- Item -->\r\n    <div class=\"col-md-4 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n              <span class=\"item-rating text-warning\">\r\n                <i class=\"material-icons star\"></i>\r\n                <i class=\"material-icons star\"></i>\r\n                <i class=\"material-icons star\"></i>\r\n                <i class=\"material-icons star_half\"></i>\r\n                <i class=\"material-icons star_border\"></i>\r\n              </span>\r\n          <a href=\"shop-single.html\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th14.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n               data-original-title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"shop-single.html\">Ceramic Watch</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $299.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-md-4.col-sm-6 -->\r\n    <div class=\"col-md-4 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n              <span class=\"item-rating text-warning\">\r\n                <i class=\"material-icons star\"></i>\r\n                <i class=\"material-icons star\"></i>\r\n                <i class=\"material-icons star\"></i>\r\n                <i class=\"material-icons star\"></i>\r\n                <i class=\"material-icons star_border\"></i>\r\n              </span>\r\n          <a href=\"shop-single.html\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th11.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n               data-original-title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"shop-single.html\">Stylish Chair</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $417.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div>\r\n    <!-- Item -->\r\n    <div class=\"col-md-4 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n\r\n          <a href=\"shop-single.html\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th16.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n               data-original-title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"shop-single.html\">Pendant Lamp</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $27.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-md-4.col-sm-6 -->\r\n  </div><!-- .row -->\r\n</section><!-- .container -->\r\n\r\n<!-- Special Offer -->\r\n<section class=\"fw-section bg-gray padding-top padding-bottom-2x space-top-3x\">\r\n  <div class=\"container\">\r\n\r\n    <!-- Special Offer -->\r\n    <div class=\"info-box text-center\">\r\n      <h2 class=\"padding-top\">Special Offer <span class=\"text-danger\">-30%</span></h2>\r\n      <a href=\"shop-single.html\" class=\"inline\">\r\n        <img src=\"assets/img/shop/special-offer2.jpg\" alt=\"Special Offer\">\r\n      </a>\r\n      <h3 class=\"lead text-normal space-bottom-half\"><a href=\"shop-single.html\" class=\"link-title\">Living Room Sofa\r\n        Transformer</a></h3>\r\n      <span class=\"lead text-normal text-gray text-crossed\">$1900.00</span>\r\n      <span class=\"h4 text-normal text-danger\">$950.00</span><br>\r\n\r\n      <!-- Countdown -->\r\n      <!-- Date Format: month/day/year. \"date-time\" data attribute is required. -->\r\n      <div class=\"countdown space-top-half padding-top\" data-date-time=\"07/30/2017 12:00:00\">\r\n        <div class=\"item\">\r\n          <div class=\"days\">00</div>\r\n          <span class=\"days_ref\">Days</span>\r\n        </div>\r\n        <div class=\"item\">\r\n          <div class=\"hours\">00</div>\r\n          <span class=\"hours_ref\">Hours</span>\r\n        </div>\r\n        <div class=\"item\">\r\n          <div class=\"minutes\">00</div>\r\n          <span class=\"minutes_ref\">Mins</span>\r\n        </div>\r\n        <div class=\"item\">\r\n          <div class=\"seconds\">00</div>\r\n          <span class=\"seconds_ref\">Secs</span>\r\n        </div>\r\n      </div><!-- .counter -->\r\n    </div><!-- .info-box -->\r\n  </div>\r\n</section>\r\n\r\n<!-- New Arrivals -->\r\n<section class=\"container padding-top-3x space-top-half\">\r\n  <h3 class=\"text-center\">New Arrivals</h3>\r\n  <div class=\"row padding-top\">\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <span class=\"shop-label text-danger\">Sale</span>\r\n          <a href=\"#\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th05.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n               data-original-title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"#\">Wall Clock</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                <span class=\"old-price\">$69.00</span>\r\n                $48.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <a href=\"#\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th06.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n               data-original-title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"#\">LED Lighting</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $130.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <a href=\"#\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th04.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n               data-original-title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"#\">Alarm Clock</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $178.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <a href=\"#\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th08.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n               data-original-title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"#\">Hook Basket</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $112.35\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <a href=\"shop-single.html\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th14.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"/>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"shop-single.html\">Ceramic Watch</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $299.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <a href=\"shop-single.html\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th13.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"/>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"shop-single.html\">Storage Jar</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $19.80\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <a href=\"shop-single.html\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th15.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"/>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"shop-single.html\">Tissue Holder</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $76.40\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n    <div class=\"col-lg-3 col-sm-6\">\r\n      <div class=\"shop-item\">\r\n        <div class=\"shop-thumbnail\">\r\n          <a href=\"shop-single.html\" class=\"item-link\"></a>\r\n          <img src=\"assets/img/shop/th16.jpg\" alt=\"Shop item\">\r\n          <div class=\"shop-item-tools\">\r\n            <a href=\"#\" class=\"add-to-whishlist\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wishlist\">\r\n              <i class=\"material-icons favorite_border\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"add-to-cart\">\r\n              <em>Add to Cart</em>\r\n              <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\r\n                <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\"\r\n                      stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\"\r\n                      d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"/>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"shop-item-details\">\r\n          <h3 class=\"shop-item-title\"><a href=\"shop-single.html\">Pendant Lamp</a></h3>\r\n          <span class=\"shop-item-price\">\r\n                $27.00\r\n              </span>\r\n        </div>\r\n      </div><!-- .shop-item -->\r\n    </div><!-- .col-lg-3.col-sm-6 -->\r\n  </div><!-- .row -->\r\n</section><!-- .container -->\r\n\r\n<!-- Brands -->\r\n<section class=\"container padding-top-2x padding-bottom\">\r\n  <hr>\r\n  <h3 class=\"text-center padding-top-2x\">More brands</h3>\r\n  <div class=\"row padding-top\">\r\n    <!-- Brand -->\r\n    <div class=\"col-sm-4 col-xs-6\">\r\n      <a href=\"#\" class=\"brand\">\r\n        <div class=\"brand-logo opacity-75\">\r\n          <img src=\"assets/img/brands/01.svg\" alt=\"Brand\">\r\n        </div>\r\n        <p class=\"brand-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente\r\n          itaque.</p>\r\n      </a>\r\n    </div>\r\n    <!-- Brand -->\r\n    <div class=\"col-sm-4 col-xs-6\">\r\n      <a href=\"#\" class=\"brand\">\r\n        <div class=\"brand-logo opacity-75\">\r\n          <img src=\"assets/img/brands/02.svg\" alt=\"Brand\">\r\n        </div>\r\n        <p class=\"brand-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente\r\n          itaque.</p>\r\n      </a>\r\n    </div>\r\n    <!-- Brand -->\r\n    <div class=\"col-sm-4 col-xs-6\">\r\n      <a href=\"#\" class=\"brand\">\r\n        <div class=\"brand-logo opacity-75\">\r\n          <img src=\"assets/img/brands/03.svg\" alt=\"Brand\">\r\n        </div>\r\n        <p class=\"brand-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente\r\n          itaque.</p>\r\n      </a>\r\n    </div>\r\n    <!-- Brand -->\r\n    <div class=\"col-sm-4 col-xs-6\">\r\n      <a href=\"#\" class=\"brand\">\r\n        <div class=\"brand-logo opacity-75\">\r\n          <img src=\"assets/img/brands/04.svg\" alt=\"Brand\">\r\n        </div>\r\n        <p class=\"brand-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente\r\n          itaque.</p>\r\n      </a>\r\n    </div>\r\n    <!-- Brand -->\r\n    <div class=\"col-sm-4 col-xs-6\">\r\n      <a href=\"#\" class=\"brand\">\r\n        <div class=\"brand-logo opacity-75\">\r\n          <img src=\"assets/img/brands/05.svg\" alt=\"Brand\">\r\n        </div>\r\n        <p class=\"brand-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente\r\n          itaque.</p>\r\n      </a>\r\n    </div>\r\n    <!-- Brand -->\r\n    <div class=\"col-sm-4 col-xs-6\">\r\n      <a href=\"#\" class=\"brand\">\r\n        <div class=\"brand-logo opacity-75\">\r\n          <img src=\"assets/img/brands/06.svg\" alt=\"Brand\">\r\n        </div>\r\n        <p class=\"brand-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente\r\n          itaque.</p>\r\n      </a>\r\n    </div>\r\n  </div><!-- .row -->\r\n</section><!-- .container -->\r\n\r\n<!-- Video Popup -->\r\n<div class=\"fw-section space-top-2x padding-top-3x padding-bottom-3x\"\r\n     style=\"background-image: url(assets/img/video_bg.jpg);\">\r\n  <div class=\"container padding-top-3x padding-bottom-3x text-center\">\r\n    <div class=\"space-top-3x space-bottom\">\r\n      <!-- Add \".light-skin\" class to alter appearance. -->\r\n      <a href=\"https://player.vimeo.com/video/135832597?color=77cde3&amp;title=0&amp;byline=0&amp;portrait=0\"\r\n         class=\"video-popup-btn\">\r\n        <i class=\"material-icons play_arrow\"></i>\r\n      </a>\r\n    </div>\r\n    <p class=\"space-bottom-2x\">M-Store - your reliable partner.</p>\r\n  </div>\r\n</div><!-- .fw-section -->\r\n\r\n<!-- Features -->\r\n<section class=\"container space-top space-bottom padding-top-3x padding-bottom-3x\">\r\n  <div class=\"row\">\r\n    <!-- Feature -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"feature text-center\">\r\n        <div class=\"feature-icon\">\r\n          <i class=\"material-icons location_on\"></i>\r\n        </div>\r\n        <h4 class=\"feature-title\">Free World-Wide Shipping</h4>\r\n        <p class=\"feature-text\">Free shipping on all orders over $100</p>\r\n      </div>\r\n    </div>\r\n    <!-- Feature -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"feature text-center\">\r\n        <div class=\"feature-icon\">\r\n          <i class=\"material-icons autorenew\"></i>\r\n        </div>\r\n        <h4 class=\"feature-title\">Money Back Guarantee</h4>\r\n        <p class=\"feature-text\">We return money within 30 days</p>\r\n      </div>\r\n    </div>\r\n    <!-- Feature -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"feature text-center\">\r\n        <div class=\"feature-icon\">\r\n          <i class=\"material-icons headset_mic\"></i>\r\n        </div>\r\n        <h4 class=\"feature-title\">24/7 Online Support</h4>\r\n        <p class=\"feature-text\">Friendly 24/7 customer support</p>\r\n      </div>\r\n    </div>\r\n    <!-- Feature -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n      <div class=\"feature text-center\">\r\n        <div class=\"feature-icon\">\r\n          <i class=\"material-icons credit_card\"></i>\r\n        </div>\r\n        <h4 class=\"feature-title\">Secure Online Payments</h4>\r\n        <p class=\"feature-text\">We posess SSL / Secure Certificate</p>\r\n      </div>\r\n    </div>\r\n  </div><!-- .row -->\r\n</section><!-- .container -->\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutes", function() { return homeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var homeRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(homeRoutes),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pages/product/pg-product-detail/pg-product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pg-product-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/product/pg-product-detail/pg-product-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/product/pg-product-detail/pg-product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PgProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PgProductDetailComponent = /** @class */ (function () {
    function PgProductDetailComponent() {
    }
    PgProductDetailComponent.prototype.ngOnInit = function () {
    };
    PgProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pg-product-detail',
            template: __webpack_require__("./src/app/pages/product/pg-product-detail/pg-product-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/product/pg-product-detail/pg-product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PgProductDetailComponent);
    return PgProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/pg-product-list/pg-product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pg-product-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/product/pg-product-list/pg-product-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/product/pg-product-list/pg-product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PgProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PgProductListComponent = /** @class */ (function () {
    function PgProductListComponent() {
    }
    PgProductListComponent.prototype.ngOnInit = function () {
    };
    PgProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pg-product-list',
            template: __webpack_require__("./src/app/pages/product/pg-product-list/pg-product-list.component.html"),
            styles: [__webpack_require__("./src/app/pages/product/pg-product-list/pg-product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PgProductListComponent);
    return PgProductListComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pg_product_detail_pg_product_detail_component__ = __webpack_require__("./src/app/pages/product/pg-product-detail/pg-product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pg_product_list_pg_product_list_component__ = __webpack_require__("./src/app/pages/product/pg-product-list/pg-product-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pg_product_list_pg_product_list_component__["a" /* PgProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pg_product_detail_pg_product_detail_component__["a" /* PgProductDetailComponent */]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            exports: [],
            declarations: [],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<footer class=\"footer\">\r\n  <div class=\"column\">\r\n    <p class=\"text-sm\"> Need support? Call <span class=\"text-primary\">(+84) 0919 212 871</span></p>\r\n    <div class=\"social-bar text-center space-bottom\">\r\n      <a href=\"#\" class=\"sb-skype\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Skype\">\r\n        <i class=\"socicon-skype\"></i>\r\n      </a>\r\n      <a href=\"https://www.facebook.com/dacsan2mien\" class=\"sb-facebook\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\" target=\"_blank\">\r\n        <i class=\"socicon-facebook\"></i>\r\n      </a>\r\n    </div><!-- .social-bar -->\r\n    <p class=\"copyright\">&copy; 2018. Made with <i class=\"text-danger material-icons favorite\"></i> by <a href=\"https://github.com/trilnh92\">trilnh92</a>.</p>\r\n  </div><!-- .column -->\r\n  <div class=\"column\">\r\n    <h3 class=\"widget-title\">\r\n      Subscription\r\n      <small>To receive latest offers and discounts from the shop.</small>\r\n    </h3>\r\n    <form class=\"subscribe-form\" novalidate>\r\n      <input type=\"email\" class=\"form-control\" name=\"EMAIL\" placeholder=\"Your e-mail\">\r\n      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n      <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\r\n        <input type=\"text\"              name=\"b_c7103e2c981361a6639545bd5_1194bb7544\"\r\n                                                                                tabindex=\"-1\" value=\"\"></div>\r\n      <button type=\"submit\"><i class=\"material-icons send\"></i></button>\r\n    </form>\r\n  </div><!-- .column -->\r\n  <div class=\"column\">\r\n    <h3 class=\"widget-title\">\r\n      Payment Methods\r\n      <small>We support one of the following payment methods.</small>\r\n    </h3>\r\n    <div class=\"cards\"><img src=\"assets/img/cards.png\" alt=\"Cards\"></div>\r\n    <!-- Scroll To Top Button -->\r\n    <div class=\"scroll-to-top-btn\"><i class=\"material-icons trending_flat\"></i></div>\r\n  </div><!-- .column -->\r\n</footer><!-- .footer -->\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<!-- Remove \".navbar-sticky\" class to make navigation bar scrollable with the page. -->\r\n<header class=\"navbar navbar-sticky\">\r\n\r\n  <!-- Site Logo -->\r\n  <a [routerLink]=\"['/home']\" class=\"site-logo visible-desktop\">\r\n    <span>[</span> DAC SAN 2 MIEN\r\n    <span>]</span>\r\n  </a><!-- site-logo.visible-desktop -->\r\n  <a [routerLink]=\"['/home']\" class=\"site-logo visible-mobile\">\r\n    <span>[</span> DS2M <span>]</span>\r\n  </a><!-- site-logo.visible-mobile -->\r\n\r\n  <!-- Language Switcher -->\r\n  <!--<div class=\"lang-switcher\">-->\r\n    <!--<div class=\"lang-toggle\">-->\r\n      <!--<img src=\"img/flags/GB.png\" alt=\"English\">-->\r\n      <!--<i class=\"material-icons arrow_drop_down\"></i>-->\r\n      <!--<ul class=\"lang-dropdown\">-->\r\n        <!--<li><a href=\"#\"><img src=\"img/flags/FR.png\" alt=\"French\">FR</a></li>-->\r\n        <!--<li><a href=\"#\"><img src=\"img/flags/DE.png\" alt=\"German\">DE</a></li>-->\r\n        <!--<li><a href=\"#\"><img src=\"img/flags/IT.png\" alt=\"Italian\">IT</a></li>-->\r\n      <!--</ul>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n  <!-- .lang-switcher -->\r\n\r\n  <!-- Main Navigation -->\r\n  <!-- Control the position of navigation via modifier classes: \"text-left, text-center, text-right\" -->\r\n  <nav class=\"main-navigation text-center\">\r\n    <ul class=\"menu\">\r\n      <li class=\"current-menu-item\">\r\n        <a [routerLink]=\"['/home']\">Home</a>\r\n      </li>\r\n      <!--<li class=\"menu-item-has-children\">-->\r\n        <!--<a href=\"#\">Shop</a>-->\r\n        <!--<ul class=\"sub-menu\">-->\r\n          <!--<li><a href=\"shop-fullwidth-sl.html\">Full Width Sidebar Left</a></li>-->\r\n          <!--<li><a href=\"shop-fullwidth-sr.html\">Full Width Sidebar Right</a></li>-->\r\n          <!--<li><a href=\"shop-fullwidth-ft.html\">Full Width Filters Top</a></li>-->\r\n          <!--<li><a href=\"shop-boxed-sl.html\">Boxed Sidebar Left</a></li>-->\r\n          <!--<li><a href=\"shop-boxed-sr.html\">Boxed Sidebar Right</a></li>-->\r\n          <!--<li><a href=\"shop-boxed-ft.html\">Boxed Filters Top</a></li>-->\r\n          <!--<li><a href=\"shop-single.html\">Single Product</a></li>-->\r\n          <!--<li><a href=\"shopping-cart.html\">Shopping Cart</a></li>-->\r\n          <!--<li><a href=\"checkout.html\">Checkout</a></li>-->\r\n          <!--<li><a href=\"login.html\">Login / Register Page</a></li>-->\r\n          <!--<li><a href=\"account.html\">User Account Page</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <li><a href=\"#\">Bến Tre</a></li>\r\n      <li><a href=\"#\">Nha Trang</a></li>\r\n      <!--<li class=\"menu-item-has-children\">-->\r\n        <!--<a href=\"#\">Gallery</a>-->\r\n        <!--<ul class=\"sub-menu\">-->\r\n          <!--<li><a href=\"gallery-fullwidth-with-gap.html\">Full Width With Gap</a></li>-->\r\n          <!--<li><a href=\"gallery-fullwidth-no-gap.html\">Full Width No Gap</a></li>-->\r\n          <!--<li><a href=\"gallery-boxed-with-gap.html\">Boxed With Gap</a></li>-->\r\n          <!--<li><a href=\"gallery-boxed-no-gap.html\">Boxed No Gap</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"menu-item-has-children\">-->\r\n        <!--<a href=\"#\">Multilevel</a>-->\r\n        <!--<ul class=\"sub-menu\">-->\r\n          <!--<li class=\"submenu-item-has-children\">-->\r\n            <!--<a href=\"#\">Submenu Item 1</a>-->\r\n            <!--<ul class=\"sub-menu\">-->\r\n              <!--<li><a href=\"#\">Submenu Item 1</a></li>-->\r\n              <!--<li><a href=\"#\">Submenu Item 2</a></li>-->\r\n              <!--<li><a href=\"#\">Submenu Item 3</a></li>-->\r\n            <!--</ul>-->\r\n          <!--</li>-->\r\n          <!--<li class=\"submenu-item-has-children\">-->\r\n            <!--<a href=\"#\">Submenu Item 2</a>-->\r\n            <!--<ul class=\"sub-menu\">-->\r\n              <!--<li><a href=\"#\">Submenu Item 1</a></li>-->\r\n              <!--<li><a href=\"#\">Submenu Item 2</a></li>-->\r\n              <!--<li><a href=\"#\">Submenu Item 3</a></li>-->\r\n            <!--</ul>-->\r\n          <!--</li>-->\r\n          <!--<li><a href=\"#\">Submenu Item 3</a></li>-->\r\n          <!--<li><a href=\"#\">Submenu Item 4</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"menu-item-has-children\">-->\r\n        <!--<a href=\"#\">Pages</a>-->\r\n        <!--<ul class=\"sub-menu\">-->\r\n          <!--<li><a href=\"about.html\">About</a></li>-->\r\n          <!--<li><a href=\"contacts.html\">Contacts</a></li>-->\r\n          <!--<li><a href=\"faq.html\">FAQ</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!---->\r\n      <li><a href=\"#\">Liên hệ</a></li>\r\n    </ul><!-- .menu -->\r\n  </nav><!-- .main-navigation -->\r\n\r\n  <!-- Toolbar -->\r\n  <div class=\"toolbar\">\r\n    <div class=\"inner\">\r\n      <a href=\"#\" class=\"mobile-menu-toggle\"><i class=\"material-icons menu\"></i></a>\r\n      <a href=\"account.html\"><i class=\"material-icons person\"></i></a>\r\n      <div class=\"cart-btn\">\r\n        <a href=\"shopping-cart.html\">\r\n          <i>\r\n            <span class=\"material-icons shopping_basket\"></span>\r\n            <span class=\"count\">2</span>\r\n          </i>\r\n        </a>\r\n        <!-- Cart Dropdown -->\r\n        <div class=\"cart-dropdown\">\r\n          <div class=\"cart-item\">\r\n            <a href=\"shop-single.html\" class=\"item-thumb\">\r\n              <img src=\"assets/img/cart/item01.jpg\" alt=\"Item\">\r\n            </a>\r\n            <div class=\"item-details\">\r\n              <h3 class=\"item-title\"><a href=\"shop-single.html\">Concrete Lamp</a></h3>\r\n              <h4 class=\"item-price\">1 x $85.90</h4>\r\n            </div>\r\n            <a href=\"#\" class=\"close-btn\">\r\n              <i class=\"material-icons close\"></i>\r\n            </a>\r\n          </div><!-- .cart-item -->\r\n          <div class=\"cart-item\">\r\n            <a href=\"shop-single.html\" class=\"item-thumb\">\r\n              <img src=\"assets/img/cart/item02.jpg\" alt=\"Item\">\r\n            </a>\r\n            <div class=\"item-details\">\r\n              <h3 class=\"item-title\"><a href=\"shop-single.html\">Storage Box</a></h3>\r\n              <h4 class=\"item-price\">2 x $38.00</h4>\r\n            </div>\r\n            <a href=\"#\" class=\"close-btn\">\r\n              <i class=\"material-icons close\"></i>\r\n            </a>\r\n          </div><!-- .cart-item -->\r\n          <div class=\"cart-subtotal\">\r\n            <div class=\"column\">\r\n              <span>Subtotal:</span>\r\n            </div>\r\n            <div class=\"column\">\r\n              <span class=\"amount\">$161.90</span>\r\n            </div>\r\n          </div>\r\n        </div><!-- .cart-dropdown -->\r\n      </div><!-- .cart-btn -->\r\n    </div><!-- .inner -->\r\n  </div><!-- .toolbar -->\r\n</header><!-- .navbar.navbar-sticky -->\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map