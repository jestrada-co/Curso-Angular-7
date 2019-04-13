import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sw = false;
  num = '';
  num1 = 0;
  num2 = 0;
  result = 0;
  operator = '';
  expresion = '';
  isAuthenticated = false;
  getNumber(num: string) {
    this.num = this.num + num;
    this.result = Number(this.num);
  }
  setResult(value: string) {
    if (value === '=') {
      this.sw = false;
      let resultOper = 0;
      if (this.operator === '+') {
        resultOper = this.num1 + this.num2;
      } else if (this.operator === '-') {
        resultOper = this.num1 - this.num2;
      } else if (this.operator === '*') {
        resultOper = this.num1 * this.num2;
      } else if (this.operator === '/') {
        resultOper = this.num1 / this.num2;
      }
      this.result = resultOper;
    } else {
      this.operator = value;
      if (this.sw) {
        this.num2 = Number(this.num);
        this.sw = false;
      } else {
        this.num1 = Number(this.num);
        this.sw = true;
      }
    }
    this.num = '';
  }
  authenticate() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
