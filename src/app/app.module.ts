import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent, } from './app.component';
import { HelloComponent } from './hello.component';
import { Micro2 } from './micro.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ComponentsModule,PagesModule,AppRoutingModule, ReactiveFormsModule],
  declarations: [ Micro2, AppComponent, HelloComponent, LoginComponent],
  bootstrap:    [ AppComponent,ComponentsModule]
})
export class AppModule { }
