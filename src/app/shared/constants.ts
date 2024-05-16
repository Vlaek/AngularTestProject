import { Routes } from '@angular/router';

import { MyCalculatorComponent } from '../calculator/components/my-calculator/my-calculator.component';
import { MyEmptyPage } from '../components/empty-route/empty-route.component';
import { MyObjectListComponent } from '../object-list/components/list/object-list.component';

export const routesList: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('../object-list/object-list.module').then(
        (m) => m.MyObjectListModule
      ),
  },
  {
    path: '**',
    component: MyEmptyPage,
  },
];

export interface MyObject {
  id: number;
  title: string;
  content: string;
}

export const myObjects: MyObject[] = [
  {
    id: 0,
    title: 'first',
    content: 'Lorem Ipsum first',
  },
  {
    id: 1,
    title: 'second',
    content: 'Lorem Ipsum second',
  },
  {
    id: 2,
    title: 'third',
    content: 'Lorem Ipsum third',
  },
  {
    id: 3,
    title: 'four',
    content: 'Lorem Ipsum four',
  },
  {
    id: 4,
    title: 'five',
    content: 'Lorem Ipsum five',
  },
];
