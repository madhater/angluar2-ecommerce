import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'cs-base',
    templateUrl: 'app/_global/base/base.component.html',
    directives: [
        [ROUTER_DIRECTIVES],
        HeaderComponent,
        FooterComponent
    ]
})
export class BaseComponent { }
