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
var find_product_service_1 = require('./find-product.service');
var FindProduct = (function () {
    function FindProduct(findProductService) {
        this.findProductService = findProductService;
        this.mode = 'Observable';
    }
    FindProduct.prototype.ngOnInit = function () { this.findProducts(); };
    FindProduct.prototype.findProducts = function () {
        var _this = this;
        this.findProductService.findProducts()
            .subscribe(function (productList) { return _this.productList = productList; }, function (error) { return _this.errorMessage = error; });
    };
    FindProduct = __decorate([
        core_1.Component({
            styleUrls: ['app/sections/find-product/find-product.component.css'],
            templateUrl: 'app/sections/find-product/find-product.component.html',
            providers: [find_product_service_1.FindProductService],
            directives: [
                [router_1.ROUTER_DIRECTIVES]
            ]
        }), 
        __metadata('design:paramtypes', [find_product_service_1.FindProductService])
    ], FindProduct);
    return FindProduct;
}());
exports.FindProduct = FindProduct;
//# sourceMappingURL=find-product.component.js.map