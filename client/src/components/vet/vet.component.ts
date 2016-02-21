import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {
    RouteConfig,
        ROUTER_DIRECTIVES,
        RouterLink
} from 'angular2/router';

import {Veterinarian} from './veterinarian';
import {VetService} from './vet.service';
import {VetListComponent} from './vet.list';
import {VetFormComponent} from './vet.form';

@Component({
    selector: 'vet',
    templateUrl: './components/vet/vet.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, VetService]
})

@RouteConfig([
    {path:'/',     name: 'Vet', component: VetListComponent, useAsDefault: true},
    {path:'/new',  name: 'CreateVet', component: VetFormComponent}
])

export class VetComponent {
}
