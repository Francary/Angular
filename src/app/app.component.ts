import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '-----> Esta en app.component.ts Angular Recalculando' + VERSION.major;
  primer = ' Micro Linea A';
  lineaA = 'Subte Linea A';
  lineaB = 'Subte Linea B';
  lineaC = 'Subte Linea C';
}