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

    add(): void {
      this.addingVet = true;
    }

    delete(selectedVet: Veterinarian): void {
      console.log('delete called for: ' + selectedVet);
      this._vetService
      .delete(selectedVet['id'])
      .subscribe(saveResult => { this.getAllVets(); },
                     error =>  this.errorMessage = <any>error);;
    }

    close(savedVet: Veterinarian): void {
      this.addingVet = false;
      if (savedVet) { this.getAllVets(); }
    }
}