import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { BarraComponent } from '../components/barra/barra.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    BarraComponent

  ]
})
export class PagesModule { }