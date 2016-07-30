import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../sections/home/home.component';
import { PageNotFoundComponent } from '../sections/page-not-found/page-not-found.component';


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
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
