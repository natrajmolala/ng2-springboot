import {Component, ViewEncapsulation} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    RouterLink
} from 'angular2/router';

import {HomeComponent} from '../home/home.component';
import {OwnerComponent} from '../owner/owner.component';
import {VetComponent} from '../vet/vet.component';
import {AboutComponent} from '../about/about.component';

@Component({
    selector: 'app',
    templateUrl: './components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    encapsulation: ViewEncapsulation.None
})

@RouteConfig([
    { path: '/', as: 'Home', component: HomeComponent },
    { path: '/home', as: 'Home', component: HomeComponent },
    { path: '/owner', as: 'Owner', component: OwnerComponent },
    { path: '/vet/...', as: 'Vet', component: VetComponent },
    { path: '/about', as: 'About', component: AboutComponent }
])

export class AppComponent {
    items = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
}
