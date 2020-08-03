import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketItem } from '../models/basket-item.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketItemsService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  public getItems(): Observable<BasketItem[]> {
    return this.httpClient.get<BasketItem[]>(this.baseUrl + 'basket-items');
  }

}
