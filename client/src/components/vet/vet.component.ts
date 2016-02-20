import {Component} from 'angular2/core';

@Component({
    selector: 'vet',
    templateUrl: './components/vet/vet.html'
})

export class VetComponent {
    veterinaries = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
}
