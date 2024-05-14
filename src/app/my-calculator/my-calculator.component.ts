import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 1;
  public operation: string = '+';
  public operationList: string[] = ['+', '-', '*', '/'];
  public result?: number;
  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
      default:
        this.result = undefined;
        break;
    }
  }
}
