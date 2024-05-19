import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyProductListService } from '../../product-list.service';
import { Observable } from 'rxjs';
import { IProduct } from '@shared/types/model';

@Component({
  selector: 'my-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class MyProductListComponent {
  constructor(private router: Router, private route: ActivatedRoute,
    private myProductListService: MyProductListService) {}

  public myProductList$?: Observable<IProduct[]>;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  public ngOnInit(): void {
    this.myProductList$ = this.myProductListService.getProductList()
  }
}
