/// <reference path="../../../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts" />

import {it, describe, expect, beforeEach, inject} from 'angular2/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {

    beforeEach(function() {
        this.app = new AppComponent();
    });

    it('should have hello property', function() {
        expect(this.app.hello).toEqual('Hello');
    });

});
