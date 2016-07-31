"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../sections/home/home.component');
var page_not_found_component_1 = require('../sections/page-not-found/page-not-found.component');
var find_product_component_1 = require('../sections/find-product/find-product.component');
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                redirectTo: '/page-not-found',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: find_product_component_1.FindProduct
            }
        ]
    },
    {
        path: 'product',
        component: find_product_component_1.FindProduct
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map