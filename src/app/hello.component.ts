import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> Esta en hello.component.ts <br> Hello Argentina Programa {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string | undefined;
}

