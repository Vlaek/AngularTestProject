import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';
import { CommonModule } from '@angular/common';
import { MyCalculatorRouting } from './my-calculator.routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, MyCalculatorRouting],
  exports: [MyCalculatorComponent],
  declarations: [MyCalculatorComponent],
  providers: [],
})
export class MyCalculatorModule {}
