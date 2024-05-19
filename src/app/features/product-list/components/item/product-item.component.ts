import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '@shared/types/model';
import { MyProductListService } from '../../product-list.service';

@Component({
  selector: 'my-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class MyProductItemComponent implements OnInit {
  public myProductItem$?: IProduct;

  constructor(private route: ActivatedRoute,
    private myProductListService: MyProductListService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.myProductListService.getProductById(params['id']).subscribe(item => {
        this.myProductItem$ = item;
      })
   })
  }
}
