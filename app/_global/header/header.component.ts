import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'cs-header',
    templateUrl: 'app/_global/header/header.component.html',
    directives: [
        [ROUTER_DIRECTIVES]
    ]
})
export class HeaderComponent {
    constructor(private router: Router){}
}
