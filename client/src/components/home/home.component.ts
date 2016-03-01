import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: './components/home/home.html'
})

export class HomeComponent {
    title: string = 'Welcome to Pet clinic!';
}
