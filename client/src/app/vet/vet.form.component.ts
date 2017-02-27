import { Component, EventEmitter, NgModule, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Veterinarian } from './veterinarian';
import { VetService } from './vet.service';

@Component({
    selector: 'vet-form',
    templateUrl: './app/vet/vet.form.component.html',
    providers: [ VetService ]
})

export class VetFormComponent implements OnInit {

    @Input() vet: Veterinarian;
    @Output() close = new EventEmitter();

    submitted = false;
    errorMessage: string;
    selectedSpeciality: string;
    specialities = ["Surgery", "Radiology", "X-Ray", "Nutrition"];

    constructor(private router: Router, private vetService: VetService){
    }

    ngOnInit(): void {
      this.vet = new Veterinarian("", "", "");
    }

    onSubmit() {
        console.log(JSON.stringify(this.vet));
        if (!this.vet) {return;}
        this.vetService
              .create(this.vet)
              .subscribe(saveResult => { this.vet = saveResult; this.refreshList(saveResult); },
               error =>  this.errorMessage = <any>error);

        this.submitted = true;
    }

    refreshList(savedVet: Veterinarian = null): void {
      this.close.emit(savedVet);
    }

}