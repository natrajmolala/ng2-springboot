import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

import {Veterinarian} from './veterinarian';
import {VetService} from './vet.service';

@Component({
    selector: 'vet-form',
    templateUrl: './components/vet/vet.form.html',
    providers: [VetService]
})

export class VetFormComponent{

    submitted = false;
    errorMessage: string;
    selectedSpeciality: string;

    vet = new Veterinarian("", "", "");
    specialities = ["Surgery", "Radiology", "X-Ray", "Nutrition"];
    constructor(private _vetService: VetService){}

    onSubmit() {
        this.vet.speciality = this.selectedSpeciality;
        //console.log(JSON.stringify(this.vet));
        if (!this.vet) {return;}
        this._vetService.create(this.vet)
                .subscribe(
                        error =>  this.errorMessage = <any>error);
        this.submitted = true;
    }

    onChange(newVal){
        this.selectedSpeciality = newVal;
    }

}