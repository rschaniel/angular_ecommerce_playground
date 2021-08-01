import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketItem } from '../../core/models/basket-item.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BasketItemsService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  public getItems(): Observable<BasketItem[]> {
    return this.httpClient.get<BasketItem[]>(this.baseUrl + 'basket-items');
  }

  public addItem(basketItem: BasketItem): Observable<BasketItem> {
    console.log(basketItem);
    return this.httpClient.post<BasketItem>(
      this.baseUrl + 'basket-items',
      basketItem
    );
  }
}
