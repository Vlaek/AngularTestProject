import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesList } from './shared/constants';
import { MyEmptyPage } from './features/components/empty-route/empty-route.component';

const emptyRoot = {
  path: '**',
  component: MyEmptyPage,
};

const routes: Routes = [...routesList, emptyRoot];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
