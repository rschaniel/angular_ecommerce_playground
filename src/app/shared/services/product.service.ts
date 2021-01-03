import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + 'products');
  }

}
