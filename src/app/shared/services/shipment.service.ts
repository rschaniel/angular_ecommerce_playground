import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeliveryMethod, ShipmentOption } from '../models/shipment.interface';
import { map, switchMap } from 'rxjs/operators';
import { CustomerService } from './customer.service';
import { Address } from '../models/address.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient,
              private customerService: CustomerService) {
  }

  public getShipmentOptions(customerId: number): Observable<ShipmentOption[]> {
    return this.getDeliveryMethods().pipe(
      map((methods: DeliveryMethod[]) =>
        methods.map((method: DeliveryMethod) => ({deliveryMethod: method}))
      ),
      switchMap((shipmentOptions: ShipmentOption[]) => {
          if (shipmentOptions.find(option => option.deliveryMethod === 'Post')) {
            return this.customerService.getCustomerAddresses(customerId).pipe(
              map((addresses: Address[]) => {
                if (!addresses || addresses.length === 0) {
                  return shipmentOptions;
                } else {
                  return shipmentOptions
                    .filter(option => option.deliveryMethod !== 'Post')
                    .concat({ deliveryMethod: 'Post', address: addresses[0] });
                }
              })
            );
          } else {
            return of(shipmentOptions);
          }
        }
      )
    );
  }

  private getDeliveryMethods(): Observable<DeliveryMethod[]> {
    return this.httpClient.get<DeliveryMethod[]>(this.baseUrl + 'shipment');
  }
}
