import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../core/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + 'products');
  }

  public getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + 'products/' + id);
  }
}
