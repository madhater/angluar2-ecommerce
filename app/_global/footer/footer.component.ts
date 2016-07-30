import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'cs-footer',
    templateUrl: 'app/_global/footer/footer.component.html',
    styleUrls: ['app/_global/footer/footer.component.css'],
    directives: [
        [ROUTER_DIRECTIVES]
    ]
})
export class FooterComponent {
    constructor(private router: Router){}
}
