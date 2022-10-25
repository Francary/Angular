import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subte',
  templateUrl: './subte.component.html',
  styleUrls: ['./subte.component.css']
})
export class SubteComponent implements OnInit {

  linea: string = ' En que linea viajas hoy ...!';

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  lineaA(){
    this.linea = 'Disfruta tu viaje en la Linea A';
  }

  lineaB(){
    this.linea = 'Disfruta tu viaje en la Linea B';
  }
  lineaC(){
    this.linea = 'Disfruta tu viaje en la Linea C';
  }
  lineaD(){
    this.linea = 'Disfruta tu viaje en la Linea D';
  }

}
