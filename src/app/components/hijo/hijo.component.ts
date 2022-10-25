import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
//import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string =' Pasajero';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  //constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre () {
    this.nombreHijo = 'Perla Carvajal';
    this.cambioNombreHijo.emit(this.nombreHijo);
    //this.dataService.nombreUsuario = this.nombreHijo;
  }

}
