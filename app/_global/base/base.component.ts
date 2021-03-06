import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
    selector: 'cs-base',
    templateUrl: 'app/_global/base/base.component.html',
    styleUrls: ['app/_global/base/base.component.css'],
    directives: [
        [ROUTER_DIRECTIVES],
        HeaderComponent,
        FooterComponent
    ]
})
export class BaseComponent { }
