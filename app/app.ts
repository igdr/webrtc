

import {Component, View, bind} from 'angular2/core';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig, RouterLink, Location} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';
import 'rxjs/add/operator/map';

import {AboutComponent} from './components/about/about.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: './app/app.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/', component: DashboardComponent, as: 'Home'},
    {path: '/about/:id', component: AboutComponent, as: 'About'},
])
export class AppComponent {
    location:Location;

    constructor(location:Location) {
        this.location = location;
    }

    isActive(path) {
        return this.location.path() === path;
    }
}