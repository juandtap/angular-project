import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
 


}

bootstrapApplication(App);