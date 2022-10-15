import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { AppComponent2Component } from './components/app-component2/app-component2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, HelloComponent, AppComponent2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
