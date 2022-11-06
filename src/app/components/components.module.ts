import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { SubteComponent } from './subte/subte.component';
import { BarraComponent } from './barra/barra.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    SubteComponent,
    BarraComponent,
       
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    HijoComponent,
    SubteComponent,
    BarraComponent,
  ]
})
export class ComponentsModule { }
