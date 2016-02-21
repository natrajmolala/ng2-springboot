import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Veterinarian} from './veterinarian';
import {Observable}   from 'rxjs/Observable';

@Injectable()
export class VetService {

    private _vetsUrl = '/api/vet/list';

    constructor (private http: Http) {}

    getVeterinarians() {
        return this.http.get(this._vetsUrl)
            .map(res => <Veterinarian[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}