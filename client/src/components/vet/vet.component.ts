import {Component, OnInit} from 'angular2/core';

import {Veterinarian} from './veterinarian';
import {VetService} from './vet.service';

@Component({
    selector: 'vet',
    templateUrl: './components/vet/vet.html',
    providers: [VetService]
})

export class VetComponent implements OnInit{

    veterinaries: Veterinarian[];

    constructor(private _vetService: VetService){}

    ngOnInit(){
        this.veterinaries = this._vetService.getVeterinarians();
    }
}
