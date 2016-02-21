import {Injectable} from 'angular2/core';
import {Veterinarian} from './veterinarian';

@Injectable()
export class VetService {

    getVeterinarians() {
        return [
            new Veterinarian('John', 'Rambo'),
            new Veterinarian('Adam', 'Smith'),
            new Veterinarian('Ian', 'Miller'),
        ];
    }
}