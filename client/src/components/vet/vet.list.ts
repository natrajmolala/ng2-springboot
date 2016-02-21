import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {
    RouteConfig,
        ROUTER_DIRECTIVES,
        RouterLink
} from 'angular2/router';

import {Veterinarian} from './veterinarian';
import {VetService} from './vet.service';
import {VetFormComponent} from './vet.form';

@Component({
    selector: 'vet-list',
    templateUrl: './components/vet/vet.list.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, VetService]
})

export class VetListComponent implements OnInit{

    errorMessage: string;
    veterinaries: Veterinarian[];

    constructor(private _vetService: VetService){}

    ngOnInit(){
        this._vetService.getVeterinarians().subscribe(
            veterinaries => this.veterinaries = veterinaries,
            error => this.errorMessage = <any>error);
    }
}
