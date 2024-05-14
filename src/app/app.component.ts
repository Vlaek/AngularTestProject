import { Component } from '@angular/core';

const currentDate = new Date();

interface dateObject {
  year: number;
  month: number;
  day: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Test Title';
  public tooltip: string = 'Подсказка';
  protected date: dateObject = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  };
  public showMessage(): void {
    alert('showMessage!');
  }
}
