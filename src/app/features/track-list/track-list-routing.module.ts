import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTrackListComponent } from './components/list/track-list.component';
import { MyTrackItemComponent } from './components/item/track-item.component';

const routes: Routes = [
  {
    path: '',
    component: MyTrackListComponent,
  },
  {
    path: ':id',
    component: MyTrackItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTrackListRouting {}
