import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: './components/home/home.html'
})

export class HomeComponent {
    constructor();
    greeting: string = 'Hello world!';
}
