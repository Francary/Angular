import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { SubteComponent } from './subte/subte.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    SubteComponent,
       
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    HijoComponent,
    SubteComponent,
  ]
})
export class ComponentsModule { }