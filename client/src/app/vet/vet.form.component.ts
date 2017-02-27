import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Veterinarian } from './veterinarian';
import { VetService } from './vet.service';

@Component({
    selector: 'vet-form',
    templateUrl: './app/vet/vet.form.component.html',
    providers: [ VetService ]
})

export class VetFormComponent {

    submitted = false;
    errorMessage: string;
    selectedSpeciality: string;

    vet = new Veterinarian("", "", "");
    specialities = ["Surgery", "Radiology", "X-Ray", "Nutrition"];
    constructor(private router: Router, private vetService: VetService){
        //vetService.vetAdded$.subscribe(
         //     vet => {
         //       this.history.push('${vet} added');
          //    });
    }

    onSubmit() {
        console.log(JSON.stringify(this.vet));
        if (!this.vet) {return;}
        this.vetService.create(this.vet)
                .subscribe(
                        error =>  this.errorMessage = <any>error);

        this.submitted = true;
        //this.vetService.confirmVetAdded(this.vet);

        //refresh list
        //this.router.navigate(['/vet']);
    }

}