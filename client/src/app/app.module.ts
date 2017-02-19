import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, routedComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }