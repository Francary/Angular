import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { SubteComponent } from './subte/subte.component';
import { BarraComponent } from './barra/barra.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    SubteComponent,
    BarraComponent,
       
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NavbarComponent,
    HijoComponent,
    SubteComponent,
    BarraComponent,
  ]
})
export class ComponentsModule { }
