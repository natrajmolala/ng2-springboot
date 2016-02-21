import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Veterinarian} from './veterinarian';
import {VetService} from './vet.service';

@Component({
    selector: 'vet',
    templateUrl: './components/vet/vet.html',
    providers: [HTTP_PROVIDERS, VetService]
})

export class VetComponent implements OnInit{

    errorMessage: string;
    veterinaries: Veterinarian[];

    constructor(private _vetService: VetService){}

    ngOnInit(){
        this._vetService.getVeterinarians().subscribe(
            veterinaries => this.veterinaries = veterinaries,
            error => this.errorMessage = <any>error);
    }
}
