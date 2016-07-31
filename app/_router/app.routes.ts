import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../sections/home/home.component';
import { PageNotFoundComponent } from '../sections/page-not-found/page-not-found.component';
import { FindProduct } from '../sections/find-product/find-product.component';


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
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
                component: FindProduct
            }
        ]
    },
    {
        path: 'product',
        component: FindProduct
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
