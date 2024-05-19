import { Routes } from '@angular/router';

// import { MyCalculatorComponent } from '../calculator/components/my-calculator/my-calculator.component';

export const routesList: Routes = [
  {
    path: 'calculator',
    loadChildren: () =>
      import('../features/calculator/my-calculator.module').then(
        (m) => m.MyCalculatorModule
      ),
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('../features/object-list/object-list.module').then(
        (m) => m.MyObjectListModule
      ),
  },
  {
    path: 'music-list',
    loadChildren: () =>
      import('../features/music-list/music-list.module').then(
        (m) => m.MyMusicListModule
      ),
  },
  {
    path: 'track-list',
    loadChildren: () =>
      import('../features/track-list/track-list.module').then(
        (m) => m.MyTrackListModule
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
