import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeliveryMethod } from '../models/shipment.interface';

@Injectable({
  providedIn: 'root',
})
export class DeliveryMethodService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getDeliveryMethods(): Observable<DeliveryMethod[]> {
    return this.httpClient.get<DeliveryMethod[]>(this.baseUrl + 'shipment');
  }
}
