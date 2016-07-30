import { bootstrap }    from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './_router/app.routes';
import { BaseComponent } from './_global/base/base.component';

bootstrap(BaseComponent,[
    appRouterProviders
]);
