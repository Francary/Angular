import { Component, Input } from '@angular/core';

@Component({
  selector: 'micro2',
  template: `<h1>Componente Principal Micro ---- >{{primer}}!</h1>`,
  styleUrls: ['./app.component.css']
})

export class Micro2 {
    @Input() 
    
    primer: string | undefined;
  }
  