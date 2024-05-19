import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: MyCalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCalculatorRouting {}
