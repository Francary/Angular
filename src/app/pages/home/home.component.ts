import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string = 'Nombre Usuario ';

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombre = 'Francary Molina';
    this.dataService.nombreUsuario = this.nombre;
  }
  hijoCambioNombre ( nuevoNomnbre: string ){
    this.nombre = nuevoNomnbre;
    this.dataService.nombreUsuario = nuevoNomnbre;
  }

}
