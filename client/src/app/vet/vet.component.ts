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
    addingVet = false;

    constructor(private _vetService: VetService){}

    ngOnInit(){
        this.getAllVets();
    }

    getAllVets(): void {
      this._vetService
        .getAll()
        .subscribe(
            veterinaries => this.veterinaries = veterinaries,
            error => this.errorMessage = <any>error);
    }

    addVet(): void {
      this.addingVet = true;
    }

    close(savedVet: Veterinarian): void {
      this.addingVet = false;
      if (savedVet) { this.getAllVets(); }
    }
}