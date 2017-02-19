import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
    constructor(private _location: Location) {
    }
}
