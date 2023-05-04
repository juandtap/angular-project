import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component1Component } from './component1/component1.component';



@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, Component1Component],
  templateUrl: './main.html',
  styleUrls:['./main.css'],
})
export class App {
  name = 'Diego';
  title = 'Calculadora';

  a = 10;
  b = 2;
  suma = 0;
  resta=0
  producto=0
  division=0


  calcular() {

    console.log('hello Ups ' + this.a)
   
    this.suma =+this.a + +this.b
    this.resta =this.a-this.b
    this.producto=this.a*this.b
    this.division=this.a/this.b
  }
 
  items = ['item1', 'item2',];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}

bootstrapApplication(App);