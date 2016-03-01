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

  it('should display a greeting', () => {
    expect(home.title).toBe('Welcome to Pet clinic!');
  });

});
