import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProductListComponent } from './components/list/product-list.component';
import { MyProductItemComponent } from './components/item/product-item.component';

const routes: Routes = [
  {
    path: '',
    component: MyProductListComponent,
  },
  {
    path: ':id',
    component: MyProductItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProductListRouting {}
