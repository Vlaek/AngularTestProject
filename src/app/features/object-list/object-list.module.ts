import { NgModule } from '@angular/core';
import { MyObjectListRouting } from './object-list-routing.module';
import { MyObjectListComponent } from './components/list/object-list.component';
import { MyObjectItemComponent } from './components/item/object-item.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, MyObjectListRouting],
  exports: [MyObjectListComponent, MyObjectItemComponent],
  declarations: [MyObjectListComponent, MyObjectItemComponent],
  providers: [],
})
export class MyObjectListModule {}
