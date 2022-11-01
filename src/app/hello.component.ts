import { Component, Input, OnInit, VERSION } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'hello',
  templateUrl:  './hello.micro.component.html',
  styleUrls: ['./app.component.css']
})
export class HelloComponent implements OnInit {
  
  @Input() 
  namehello: string = '--> Esta en hello.component.ts ' + VERSION.major;
  Linea140: string = 'Linea 140';
  constructor() { }
  
  ngOnInit(): void {
  }
 }