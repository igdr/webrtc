import {bootstrap} from 'angular2/platform/browser';
import {bind, provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
]);