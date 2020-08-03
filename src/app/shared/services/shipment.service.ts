import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Shipment } from '../models/shipment.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  public getShipmentInfo(): Observable<Shipment> {
    return this.httpClient.get<Shipment>(this.baseUrl + 'shipment');
  }

}
