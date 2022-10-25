import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> Esta en hello.component.ts <br> Hello Argentina Programa {{name}}!</h1>`,
  styleUrls: ['./app.component.css']
})
export class HelloComponent  {
  @Input() name: string | undefined;
}

