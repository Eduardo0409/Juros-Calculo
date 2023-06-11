import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./main.html`,
})
export class App {
  value: number;
  rate: number;
  month: number;

  constructor(){
    this.value = 0;
    this.rate = 0;
    this.month = 0;
  }

  getPartialInterest(){
    return this.value * Math.pow(1 + this.rate, this.month);
  }

  getInteresetValues(){
    let list: number[] = [];
    for(let i=1; i<=this.month; i++){
      list.push(this.getPartialInterest());
    }
    return list;
  }
}

bootstrapApplication(App);
