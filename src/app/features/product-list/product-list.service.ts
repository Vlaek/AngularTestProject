import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, map } from 'rxjs';
import { IProduct } from '../../shared/types/model';

@Injectable({
  providedIn: 'root'
})
export class MyProductListService {

  constructor(private _httpClient: HttpClient) {}

  public getProductList(): Observable<IProduct[]> {
    const response = this._httpClient
      .get<IProduct[]>('https://651d237544e393af2d5938ea.mockapi.io/products');

    return response;
  }

  public getProductById(id: number): Observable<IProduct> {
    const response = this._httpClient
      .get<IProduct[]>(`https://651d237544e393af2d5938ea.mockapi.io/products?id=${id}`);

    return response.pipe(
      map((item: IProduct[]) => item[0]),
      first()
    );
  }
}
