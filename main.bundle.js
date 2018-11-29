webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<app-navbar></app-navbar>\n<app-home></app-home>\n<app-sobremi></app-sobremi>\n<app-habilidades></app-habilidades>\n<app-educacion></app-educacion>\n<app-portfolio></app-portfolio>\n<app-contacto></app-contacto>\n<app-footer></app-footer>\n<!--<router-outlet></router-outlet>-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sobremi_sobremi_component__ = __webpack_require__("./src/app/components/sobremi/sobremi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_habilidades_habilidades_component__ = __webpack_require__("./src/app/components/habilidades/habilidades.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_educacion_educacion_component__ = __webpack_require__("./src/app/components/educacion/educacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_portfolio_portfolio_component__ = __webpack_require__("./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contacto_contacto_component__ = __webpack_require__("./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components








// services


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_sobremi_sobremi_component__["a" /* SobremiComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_habilidades_habilidades_component__["a" /* HabilidadesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_educacion_educacion_component__["a" /* EducacionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_contacto_contacto_component__["a" /* ContactoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_bbdd_service__["a" /* BbddService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"contact\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-offset-1 col-xs-12 col-sm-7 col-md-7 col-lg-7\">\n        <h2 ng-bind=\"sectionContact\">{{ sectionTitle }}</h2>\n\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <div class=\"row\">\n            <div class=\"col-xs-7 text-right\">\n              <img [src]=\" sectionImg \" alt=\"\" class=\"img-responsive img-footer\">\n            </div>\n            <div class=\"col-xs-5 no-padding\">\n              <ul *ngFor=\"let socialnet of socialNetworks\">\n                <li class=\"text-map\"><a href=\"{{socialnet.LINK}}\" target=\"_blank\"><i class=\"fa fa-2x\" ngClass=\"{{socialnet.CLASS}}\"></i> {{ socialnet.CHANNEL }}</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 logos-lenguajes\">\n          <p class=\"small\">{{ construct }}</p>\n          <div class=\"p-section--logos-table\">\n            <div class=\"p-section--logos-table-container\" >\n              <div class=\"p-section--logos-cell\" *ngFor=\"let img of imgLogos\">\n                <img [src]=\" img.logo \" alt=\" {{ img.alt }} \" title=\" {{ img.title }} \">\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n        <section class=\"diff\">\n          <p>{{ cv }} </p>\n          <div class=\"text-center wow shake\">\n            <a href=\"docs/curriculum_mauricio_correa.pdf\" target=\"_blank\">\n              <img class=\"perfil\" [src]=\" imgPerfil \" alt=\"curriculum\">\n            </a>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactoComponent = (function () {
    function ContactoComponent(_bbdd) {
        this._bbdd = _bbdd;
        this.texts = [];
        this.imgLogos = [];
        this.socialNetworks = [];
    }
    ContactoComponent.prototype.ngOnInit = function () {
        this.texts = this._bbdd.getTexts().slice();
        this.sectionTitle = this.texts[0].CONTACT.TITLESECTION;
        this.sectionImg = this.texts[0].CONTACT.IMGSOCIALNETWORKS;
        this.imgLogos = this.texts[0].CONTACT.CONSTRUCT.IMGS;
        this.construct = this.texts[0].CONTACT.CONSTRUCT.WEB;
        this.cv = this.texts[0].CONTACT.CV;
        this.cr = this.texts[0].CONTACT.CR;
        this.imgPerfil = this.texts[0].CONTACT.IMGPERFIL;
        this.socialNetworks = this.texts[0].CONTACT.SOCIALNETWORKS;
    };
    return ContactoComponent;
}());
ContactoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-contacto',
        template: __webpack_require__("./src/app/components/contacto/contacto.component.html"),
        styles: [__webpack_require__("./src/app/components/contacto/contacto.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */]) === "function" && _a || Object])
], ContactoComponent);

var _a;
//# sourceMappingURL=contacto.component.js.map

/***/ }),

/***/ "./src/app/components/educacion/educacion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/educacion/educacion.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"education\" class=\"bgEducation\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <h2 ng-bind=\"sectionEducation\">{{ sectionTitle }}</h2>\n\n            <div *ngFor=\"let item of sectionContent\" class=\"col-lg-3 col-md-6 text-center\">\n                <div class=\"service-box\">\n                    <i class=\"fa fa-6x wow bounceIn text-primary\" [ngClass]=\"item.class\"></i>\n                    <h3>{{ item.subtitles }}</h3>\n                    <p>{{ item.description }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/educacion/educacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducacionComponent = (function () {
    function EducacionComponent() {
        this.sectionTitle = "Educación";
        this.sectionContent = [
            {
                "subtitles": "{ Desarrollo front-end con frameworks Javascript }",
                "class": "fa-beer",
                "description": "Universitat Oberta de Catalunya",
            },
            {
                "subtitles": "{ Desarrollo en HTML5, CSS y Javascript de WebApps, incluyendo móviles FirefoxOS }",
                "class": "fa-coffee",
                "description": "Universidad Politécnica de Madrid",
            },
            {
                "subtitles": "{ Desarrollo de servicios en la nube con HTML5, Javascript y Node.js }",
                "class": "fa-flask",
                "description": "Universidad Politécnica de Madrid",
            },
            {
                "subtitles": "{ Desarrollo de aplicaciones web }",
                "class": "fa-glass",
                "description": "Centre d´Estudis Politécnics - UCOC",
            }
        ];
    }
    EducacionComponent.prototype.ngOnInit = function () {
    };
    return EducacionComponent;
}());
EducacionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-educacion',
        template: __webpack_require__("./src/app/components/educacion/educacion.component.html"),
        styles: [__webpack_require__("./src/app/components/educacion/educacion.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EducacionComponent);

//# sourceMappingURL=educacion.component.js.map

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"container text-right\">\n      <small class=\"copyright\">Copyright @ {{ anio }} | <span>{{ name }}</span></small>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(_bbdd) {
        this._bbdd = _bbdd;
        this.texts = [];
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.texts = this._bbdd.getTexts().slice();
        this.name = this.texts[0].HOME.NAME;
        var anio = new Date().getFullYear();
        this.anio = anio;
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/components/habilidades/habilidades.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/habilidades/habilidades.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\" class=\"bgSkills\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2 ng-bind=\"sectionSkill\">Habilidades</h2>\n      <div \n        *ngFor=\"let item of sectionContent\"\n        class=\"col-lg-4 vertical-space text-center\">\n        <img \n          [src]=\"item.img\"\n          class=\"img-responsive wow flipInX\" data-wow-delay=\".3s\"\n          [alt]=\"item.subtitles\">\n        <h3>{{ item.subtitles }}</h3>\n        <ul>\n          <li\n            *ngFor=\"let list of item.list\">\n            {{ list }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/habilidades/habilidades.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HabilidadesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HabilidadesComponent = (function () {
    function HabilidadesComponent(_bbdd) {
        this._bbdd = _bbdd;
        this.texts = [];
        this.sectionContent = [];
    }
    HabilidadesComponent.prototype.ngOnInit = function () {
        this.texts = this._bbdd.getTexts().slice();
        this.sectionContent = this.texts[0].SKYLLS.slice();
    };
    return HabilidadesComponent;
}());
HabilidadesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-habilidades',
        template: __webpack_require__("./src/app/components/habilidades/habilidades.component.html"),
        styles: [__webpack_require__("./src/app/components/habilidades/habilidades.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */]) === "function" && _a || Object])
], HabilidadesComponent);

var _a;
//# sourceMappingURL=habilidades.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"home\">\n  <div class=\"header-content\">\n    <div class=\"header-content-inner\">\n      <div class=\"img-home\">\n        <img src=\"assets/img/img-home.png\" alt=\"Home\" class=\"img-responsive wow fadeIn\" data-wow-delay=\"1s\">\n      </div>\n    </div>\n  </div>\n  <div class=\"header-title\">\n    <h1 class=\"wow fadeInUp\" data-wow-delay=\"0.3s\" itemprop=\"name\">{{ name }}</h1>\n    <p class=\"wow fadeInUp\" data-wow-delay=\"1.2s\" itemprop=\"description\">{{ jobTitle }}</p>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_bbdd) {
        this._bbdd = _bbdd;
        this.texts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.texts = this._bbdd.getTexts().slice();
        this.name = this.texts[0].HOME.NAME;
        this.jobTitle = this.texts[0].HOME.TITLE;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\t<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand page-scroll\" href=\"#page-top\">{{ menu[0].HOME.NAME | uppercase}}</a>\n\t\t\t</div>\n\n\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n          <li  *ngFor=\"let item of menu[0].MENU\">\n            <a class=\"page-scroll\" (click)=\"removeClass()\" href=\"#{{ item.link }}\">{{ item.item }}</a>\n          </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<!-- /.navbar-collapse -->\n\t\t</div>\n\t\t<!-- /.container-fluid -->\n\t</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(_service) {
        this._service = _service;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.menu = this._service.getTexts();
    };
    NavbarComponent.prototype.removeClass = function () {
        var clas = document.getElementsByClassName('navbar-collapse');
        clas[0].classList.remove('in');
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\" class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2 ng-bind=\"sectionPortfolio\">{{ sectionTitle }}</h2>\n      <div class=\"col-lg-12\">\n        <img [src]=\"img\" class=\"img-responsive\" alt=\"Portafolio\">\n      </div>\n    </div>\n    <div class=\"row center-block\">\n      <button class=\"btn btn-success center-block\">\n        <a class=\"btn-ver\" href=\"https://github.com/codemcu\" target=\"_blank\"> {{ textButton }} </a></button>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = (function () {
    function PortfolioComponent(_bbdd) {
        this._bbdd = _bbdd;
        this.texts = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.texts = this._bbdd.getTexts().slice();
        this.sectionTitle = this.texts[0].PORTFOLIO.TITLE;
        this.img = this.texts[0].PORTFOLIO.IMG;
        this.textButton = this.texts[0].PORTFOLIO.TEXTBUTTON;
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("./src/app/components/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("./src/app/components/portfolio/portfolio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */]) === "function" && _a || Object])
], PortfolioComponent);

var _a;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "./src/app/components/sobremi/sobremi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/sobremi/sobremi.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"aboutMe\" class=\"aboutMe\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 text-right text-faded wow fadeInLeft\">\n        <h2 class=\"section-heading\">{{ sectionLiveTitle }}</h2>\n        <p>{{ sectionLiveParagraph }}</p>\n        <p class=\"title\">{{listProgramming.title}}</p>\n        <ul class=\"\" *ngFor=\"let item of listProgramming.list\">\n          <li>{{item}}</li>\n        </ul>\n        <p class=\"title\">{{listTools.title}}</p>\n        <ul class=\"\" *ngFor=\"let item of listTools.list\">\n          <li>{{item}}</li>\n        </ul>\n        <p class=\"title\">{{listMethodology.title}}</p>\n        <ul class=\"\" *ngFor=\"let item of listMethodology.list\">\n          <li>{{item}}</li>\n        </ul>\n\n      </div>\n      <div class=\"col-lg-6 wow fadeInRight\">\n        <img src=\"assets/img/img-alcala.png\" alt=\"Puerta de Alcalá\" class=\"img-responsive\">\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"bgSecundary\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-offset-2 col-lg-4 col-md-6 container-hexagon wow fadeInLeft\" [ngStyle]=\"{'background-image': 'url(../assets/img/img-panel.png)'}\">\n        <div class=\"container-hexagon-imgs\">\n          <div class=\"hexagon h-0 wow fadeInLeft\" data-wow-delay=\"1.3s\">\n            <img src=\"assets/img/img-videojuegos.png\" alt=\"videojuegos\">\n          </div>\n          <div class=\"hexagon h-1 wow fadeInLeft\" data-wow-delay=\"1.1s\">\n            <a href=\"http://steamcommunity.com/id/mauaunot/\" target=\"_blank\"><i class=\"fa fa-steam\" aria-hidden=\"true\"></i></a>\n          </div>\n          <div class=\"hexagon h-1b wow fadeInLeft\" data-wow-delay=\".7s\">\n            <img src=\"assets/img/img-cine.png\" alt=\"cine\">\n          </div>\n          <div class=\"hexagon h-2 wow fadeInLeft\" data-wow-delay=\".7s\">\n            <a href=\"https://www.youtube.com/channel/UC26MiwyceG9CEr8_jqmC4QA?view_as=subscriber\" target=\"_blank\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n          </div>\n          <!--<div class=\"hexagon h-3\" data-wow-delay=\".9s\">-->\n            <!--<img src=\"assets/img/img-musica.png\" alt=\"musica\">-->\n          <!--</div>-->\n          <div class=\"hexagon h-3 wow fadeInLeft\" data-wow-delay=\".9s\">\n            <a href=\"https://www.last.fm/es/user/mauaunot\" target=\"_blank\"><i class=\"fa fa-lastfm\" aria-hidden=\"true\"></i></a>\n          </div>\n          <div class=\"hexagon h-4 wow fadeInLeft\" data-wow-delay=\".5s\">\n            <img src=\"assets/img/img-viajar.png\" alt=\"viajar\">\n          </div>\n          <div class=\"hexagon h-5 wow fadeInLeft\" data-wow-delay=\".3s\">\n            <a href=\"https://trakt.tv/users/mauaunot\" target=\"_blank\"><img src=\"assets/img/img-trakt.png\" alt=\"batman\"></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-6 text-left text-faded wow fadeInRight\">\n        <h2 class=\"section-heading\">{{ sectionMeTitle }}</h2>\n        <div *ngFor=\"let p of sectionMeParagraph\">\n          <p>{{ p }}</p>\n        </div>\n        <small class=\"smallDemo\"><em>{{sectionMeTextSmall}}</em></small>\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/sobremi/sobremi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__ = __webpack_require__("./src/app/services/bbdd.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobremiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobremiComponent = (function () {
    function SobremiComponent(_bbdd) {
        this._bbdd = _bbdd;
        this.texts = [];
    }
    SobremiComponent.prototype.ngOnInit = function () {
        this.texts = this._bbdd.getTexts().slice();
        console.log(this.texts[0]);
        this.sectionLiveTitle = this.texts[0].ABOUTME.LIVETITLE;
        this.sectionLiveParagraph = this.texts[0].ABOUTME.LIVE[0].paragraph;
        this.listProgramming = this.texts[0].ABOUTME.LIVE[0].programming;
        this.listTools = this.texts[0].ABOUTME.LIVE[0].tools;
        this.listMethodology = this.texts[0].ABOUTME.LIVE[0].methodology;
        this.sectionMeTitle = this.texts[0].ABOUTME.METITLE;
        this.sectionMeParagraph = this.texts[0].ABOUTME.ME.paragraphs;
        this.sectionMeTextSmall = this.texts[0].ABOUTME.ME.textSmall;
    };
    return SobremiComponent;
}());
SobremiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-sobremi',
        template: __webpack_require__("./src/app/components/sobremi/sobremi.component.html"),
        styles: [__webpack_require__("./src/app/components/sobremi/sobremi.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bbdd_service__["a" /* BbddService */]) === "function" && _a || Object])
], SobremiComponent);

var _a;
//# sourceMappingURL=sobremi.component.js.map

/***/ }),

/***/ "./src/app/services/bbdd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BbddService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BbddService = (function () {
    function BbddService() {
        this.texts = [
            {
                MENU: [
                    { item: 'Home', link: 'home' },
                    { item: 'Sobre mí', link: 'aboutMe' },
                    { item: 'Habilidades', link: 'skills' },
                    { item: 'Educación', link: 'education' },
                    { item: 'Portfolio', link: 'portfolio' },
                    { item: 'Contacto', link: 'contact' }
                ],
                HOME: {
                    NAME: 'Mauricio Correa',
                    TITLE: 'Front-end developer'
                },
                ABOUTME: {
                    LIVETITLE: 'Vivo en Madrid',
                    LIVE: [
                        {
                            paragraph: 'Soy front-end web developer y cuento con, aproximadamente, 10 años de experiencia. Aquí puedes leer todas las tecnologías con las que he trabajado. También tengo experiencia en UX y con el paquete AdobeSuite para diseño web (Photoshop, Illustrator, AfterEffects)',
                            programming: {
                                title: 'Lenguajes / Frameworks',
                                list: [
                                    'Programación Java, Typescript',
                                    'Desarrollo web: Javascript (AngularJS, JQuery, NodeJS, NVM, NPM, Gulp, Grunt, Modernizr, BabelJS, Bower, ES6), HTML5, CSS3 (Bootstrap 3, Responsive web design, Media Queries), SASS, LESS, PHP, SQL'
                                ]
                            },
                            tools: {
                                title: 'Herramientas de desarrollo',
                                list: [
                                    'VCS: Git (Sourcetree)',
                                    'Sistemas de seguimiento de errores: JIRA, Confluence, Jenkins (Integración continua)',
                                    'IDE´s: Eclipse, Visual Studio Code, Webstorm, SublimeText'
                                ]
                            },
                            methodology: {
                                title: 'Metodologías',
                                list: [
                                    'Agile, Scrum'
                                ]
                            }
                        }
                    ],
                    METITLE: 'Sobre mí',
                    ME: {
                        paragraphs: [
                            'Me considero un ‘friki’ de las tecnologías, actualmente estoy estudiando un Máster en Programación FullStack con JavaScript y Node.js en la escuela Fictizia. Tengo una cuenta en Github en la que voy subindo alguna que otra cosilla y en mi poco tiempo libre me lo paso con videojuegos, comics, o escuchando música',
                            'Me gusta el aprendizaje continuo, los nuevos retos y me entusiasma aprender algo nuevo cada día. Puedo aportar algo de experiencia y buen rollo en los equipos de trabajo'
                        ]
                    }
                },
                SKYLLS: [
                    {
                        subtitles: '{ Maquetación responsive }',
                        img: 'assets/img/habilidades_1.png',
                        list: [
                            'HTML5 (7 años)',
                            'CSS3 (7 años)',
                            'SASS (2 años)',
                            'Bootstrap 3 (3 años)',
                            'Bootstrap 4 (1 años)',
                            'Responsive design (3 años)',
                            'Wireframes y Prototipado (6 meses)'
                        ]
                    },
                    {
                        subtitles: '{ Software gráfico }',
                        img: 'assets/img/habilidades_2.png',
                        list: [
                            'Illustrator CS6 (6 años)',
                            'Photoshop CS6 (6 años)',
                            'Premiere CS6 (1 año)',
                            'After Effects CS6 (1 año)',
                            'Cinema 4D (1 año)',
                            'Flash CS6 (3 años)'
                        ]
                    },
                    {
                        subtitles: '{ Code Scripting }',
                        img: 'assets/img/habilidades_3.png',
                        list: [
                            'Javascript (3 años)',
                            'JQuery (1 año)',
                            'AngularJs (8 meses)',
                            'Angular 2-5 (1 año)',
                            'Node.js (1 año)',
                            'GIT (2 año)',
                            'Typescript (1 año)'
                        ]
                    }
                ],
                EDUCATION: [
                    {
                        subtitles: '{ Desarrollo front-end con frameworks Javascript }',
                        class: 'fa-beer',
                        description: 'Universitat Oberta de Catalunya',
                    },
                    {
                        subtitles: '{ Desarrollo en HTML5, CSS y Javascript de WebApps, incluyendo móviles FirefoxOS }',
                        class: 'fa-coffee',
                        description: 'Universidad Politécnica de Madrid',
                    },
                    {
                        subtitles: '{ Desarrollo de servicios en la nube con HTML5, Javascript y Node.js }',
                        class: 'fa-flask',
                        description: 'Universidad Politécnica de Madrid',
                    },
                    {
                        subtitles: '{ Desarrollo de aplicaciones web }',
                        class: 'fa-glass',
                        description: 'Centre d´Estudis Politécnics - UCOC',
                    }
                ],
                PORTFOLIO: {
                    TITLE: 'Portafolio',
                    IMG: 'assets/img/img-estudios.jpg',
                    TEXTBUTTON: 'Ver portafolio'
                },
                CONTACT: {
                    TITLESECTION: 'Contacto',
                    IMGSOCIALNETWORKS: 'assets/img/img-footer.png',
                    SOCIALNETWORKS: [
                        {
                            CHANNEL: '680686932',
                            CLASS: 'fa-phone',
                            LINK: 'tel:34680686932'
                        },
                        {
                            CHANNEL: 'github',
                            CLASS: 'fa-github',
                            LINK: 'https://github.com/codemcu'
                        },
                        {
                            CHANNEL: 'twitter',
                            CLASS: 'fa-twitter',
                            LINK: 'https://twitter.com/codemcu'
                        },
                        {
                            CHANNEL: 'email',
                            CLASS: 'fa-google',
                            LINK: 'mailto:frontend.mcu@gmail.com'
                        },
                        {
                            CHANNEL: 'linkedin',
                            CLASS: 'fa-linkedin',
                            LINK: 'https://es.linkedin.com/in/mauriciocorreaurizar'
                        }
                    ],
                    CONSTRUCT: {
                        WEB: 'Web contruida con:',
                        IMGS: [
                            { logo: 'assets/img/logo-HTML5.png', alt: 'logo HTML5', title: 'HTML5' },
                            { logo: 'assets/img/logo-javascript.png', alt: 'logo Javascript', title: 'Javascript' },
                            { logo: 'assets/img/logo-sass.png', alt: 'logo SASS', title: 'Sass' },
                            { logo: 'assets/img/logo-angular.png', alt: 'logo Angular', title: 'Angular' },
                            { logo: 'assets/img/logo-bootstrap.png', alt: 'logo Bootstrap', title: 'Bootstrap' }
                        ]
                    },
                    CV: '¿Quieres saber más?, descarga mi curriculum completo',
                    CR: 'Copyright @ 2017 | Mauricio Correa',
                    IMGPERFIL: 'assets/img/img-perfil.jpg'
                }
            }
        ];
        console.log('service!!!');
    }
    BbddService.prototype.getTexts = function () {
        return this.texts;
    };
    return BbddService;
}());
BbddService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BbddService);

//# sourceMappingURL=bbdd.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map