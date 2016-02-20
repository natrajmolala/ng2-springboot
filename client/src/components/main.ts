import {bootstrap} from 'angular2/platform/browser';
import {
    provide,
    Component
} from 'angular2/core';
import {APP_BASE_HREF,ROUTER_PROVIDERS, RouterLink, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app/app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);
