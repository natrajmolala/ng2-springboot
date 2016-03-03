/* tslint:disable:no-unused-variable typedef */
import { Component, provide } from 'angular2/core';
import { RouteRegistry, Location } from 'angular2/router';
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit,
  beforeEachProviders,
  inject,
  TestComponentBuilder
} from 'angular2/testing';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import { AppComponent } from './app.component';

describe('AppComponent Navbar item', () => {

  var app:AppComponent = null;
  var location;

  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation})
  ]);

  beforeEach(inject([Location], (loc) => {
    location = loc;
    app = new AppComponent(location);
  }));

  it('Home should stay active when the home routerLink clicked', () => {
    spyOn(location, 'path').and.returnValue('/home');
    expect(app.isActive('/home')).toBe(true);
  });

  it('Home should stay active when the root routerLink clicked', () => {
    spyOn(location, 'path').and.returnValue('');
    expect(app.isActive('/home')).toBe(true);
  });

  it('About should stay active when the about routerLink clicked', () => {
    spyOn(location, 'path').and.returnValue('/about');
    expect(app.isActive('/about')).toBe(true);
  });

  it('Veterinarian should stay active when child page create new Vet is clicked', () => {
    spyOn(location, 'path').and.returnValue('/vet/new');
    expect(app.isActive('/vet')).toBe(true);
  });

});
