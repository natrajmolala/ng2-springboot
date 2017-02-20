import { Component, OnInit } from '@angular/core';

import { Veterinarian } from './veterinarian';
import { VetService } from './vet.service';

@Component({
    selector: 'vet',
    templateUrl: './app/vet/vet.component.html',
    providers: [ VetService ]
})

export class VetComponent implements OnInit {
    title: string = 'Vet page of Pet clinic!';
    errorMessage: string;
    veterinaries: Veterinarian[];

    constructor(private _vetService: VetService){}

    ngOnInit(){
        this._vetService
        .getAll()
        .subscribe(
            veterinaries => this.veterinaries = veterinaries,
            error => this.errorMessage = <any>error);
    }
}