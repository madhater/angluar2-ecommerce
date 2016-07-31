"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_routes_1 = require('./_router/app.routes');
var base_component_1 = require('./_global/base/base.component');
platform_browser_dynamic_1.bootstrap(base_component_1.BaseComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map