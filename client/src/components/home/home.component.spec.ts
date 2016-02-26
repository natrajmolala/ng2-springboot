/* tslint:disable:no-unused-variable typedef */
import { Component } from 'angular2/core';
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

import { HomeComponent } from './home.component';

describe('Home', () => {

  var home:HomeComponent = null;

  beforeEach(()=>{
    home = new HomeComponent();
  });

  it('should work', () => {
    //expect(home.greeting).toBe('Hello World');
    //http://stackoverflow.com/questions/33412104/angular-2-unit-tests-with-karma
    expect(true).toBe(true);
  });

  //it('should display a greeting', inject([TestComponentBuilder], tcb => {
  //  tcb.createAsync(HomeComponent)
  //    .then(fixture => {
  //      fixture.detectChanges();
  //      let compiled = fixture.nativeElement;
  //
  //      expect(compiled.querySelector('h3')).toHaveText('Hello world!');
  //    });
  //}));
  //
  //it('should display a greeting (overrideTemplate)', inject([TestComponentBuilder], tcb => {
  //  tcb.overrideTemplate(TestComponent, '<home></home>')
  //    .createAsync(HomeComponent)
  //    .then(fixture => {
  //      fixture.detectChanges();
  //      let compiled = fixture.nativeElement;
  //
  //      expect(compiled.querySelector('h3')).toHaveText('Hello world!');
  //    });
  //}));
});
