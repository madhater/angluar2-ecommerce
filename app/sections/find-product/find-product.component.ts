import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductModelLight } from '../../_model/product/ProductModelLight';
import { FindProductService } from './find-product.service';

@Component({
    styleUrls: ['app/sections/find-product/find-product.component.css'],
    templateUrl: 'app/sections/find-product/find-product.component.html',
    providers: [ FindProductService ],
    directives: [
        [ROUTER_DIRECTIVES]
    ]
})
export class FindProduct implements OnInit{
    errorMessage: string;
    productList: ProductModelLight[];
    mode = 'Observable';

    constructor (private findProductService: FindProductService) {}
    ngOnInit() { this.findProducts(); }

    findProducts() {
        this.findProductService.findProducts()
        .subscribe(
            productList => this.productList = productList,
            error =>  this.errorMessage = <any>error);
    }
}
