import { NgModule } from '@angular/core';
import { MyProductListRouting } from './product-list-routing.module';
import { MyProductItemComponent } from './components/item/product-item.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MyProductListService } from './product-list.service';
import { MyProductListComponent } from './components/list/product-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, MyProductListRouting],
  exports: [MyProductListComponent, MyProductItemComponent],
  declarations: [MyProductListComponent, MyProductItemComponent],
  providers: [MyProductListService],
})
export class MyProductListModule {}
