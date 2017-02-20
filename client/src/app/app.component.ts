import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
    constructor(private _location: Location) {
    }

    isActive(path: string) {
        if (this._location.path() === ""
            && (path === "/home" || path == "/")
            || path === "") {
            return true;
        }
        return this._location.path().lastIndexOf(path, 0) === 0;
    }
}
