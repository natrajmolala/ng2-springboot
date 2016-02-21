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
    vet = new Veterinarian("", "");
    constructor(private _vetService: VetService){}

    onSubmit() {
        console.log(JSON.stringify(this.vet));
        if (!this.vet) {return;}
        this._vetService.create(this.vet)
                .subscribe(
                        error =>  this.errorMessage = <any>error);
        this.submitted = true;
    }

}