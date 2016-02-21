import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';

import {Veterinarian} from './veterinarian';
import {Observable}   from 'rxjs/Observable';

@Injectable()
export class VetService {

    constructor (private http: Http) {}

    getVeterinarians() {
        return this.http.get('/api/vet/list')
            .map(res => <Veterinarian[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    create(vet:Veterinarian):Observable<Veterinarian> {
        let body = JSON.stringify(vet);
        console.log('Body' + body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/vet/new', body, options)
            .map(res =>  <Veterinarian> res.json())
            .do(data => console.log(data))
            .catch(this.handleError)
    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}