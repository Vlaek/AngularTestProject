import { Routes } from '@angular/router';

import { MyCalculatorComponent } from '../calculator/components/my-calculator/my-calculator.component';

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
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, corporis laudantium? Aliquam maxime exercitationem odio eligendi explicabo, ex repudiandae eos.',
  },
  {
    id: 1,
    title: 'second',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam doloribus voluptatibus distinctio similique recusandae culpa asperiores animi ullam consequuntur?',
  },
  {
    id: 2,
    title: 'third',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sunt fugit autem animi. Voluptatem, dolores.',
  },
  {
    id: 3,
    title: 'fourth',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi necessitatibus accusantium deserunt hic sapiente.',
  },
  {
    id: 4,
    title: 'fifth',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda animi qui nostrum est similique provident officiis itaque. Maxime, ipsam!',
  },
];
