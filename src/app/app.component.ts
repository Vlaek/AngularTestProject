import { Component } from '@angular/core';

const currentDate = new Date();

const correctDateFormat = (date: string) => {
  const [day, month, year] = date.split('.');
  const formattedDay = day.length === 1 ? `0${day}` : day;
  const formattedMonth = month.length === 1 ? `0${month}` : month;

  return `${formattedDay}.${formattedMonth}.${year}`;
};

const fullDate = correctDateFormat(
  `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
);

interface dateObject {
  year: number;
  month: number;
  day: number;
  fullDate: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Angular Test Project';
  public tooltip: string = 'Подсказка';
  protected date: dateObject = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    fullDate,
  };
  public showMessage(): void {
    alert('showMessage!');
  }
}
