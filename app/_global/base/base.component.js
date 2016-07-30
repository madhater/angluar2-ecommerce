"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var header_component_1 = require('../header/header.component');
var footer_component_1 = require('../footer/footer.component');
var BaseComponent = (function () {
    function BaseComponent() {
    }
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'cs-base',
            templateUrl: 'app/_global/base/base.component.html',
            styleUrls: ['app/_global/base/base.component.css'],
            directives: [
                [router_1.ROUTER_DIRECTIVES],
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map