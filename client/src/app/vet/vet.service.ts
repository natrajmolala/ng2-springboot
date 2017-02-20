
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }   from 'rxjs/Rx';

import { Veterinarian } from './veterinarian';

@Injectable()
export class VetService {

constructor (private http: Http) {}

    getAll(): Observable<Veterinarian[]> {
        return this.http
            .get('/api/vet/list', {headers: this.getHeaders()})
            .map(res => <Veterinarian[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error.json());
        return Observable.throw(error.json().error || 'Server error');
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}