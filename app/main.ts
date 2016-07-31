import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './_router/app.routes';
import { BaseComponent } from './_global/base/base.component';

bootstrap(BaseComponent,[
    appRouterProviders,
    HTTP_PROVIDERS
]);
