import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMusicListComponent } from './components/list/music-list.component';
import { MyMusicItemComponent } from './components/item/music-item.component';

const routes: Routes = [
  {
    path: '',
    component: MyMusicListComponent,
  },
  {
    path: ':id',
    component: MyMusicItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMusicListRouting {}
