import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DeliveryMethod, ShipmentOption } from '../../core/models/shipment.interface';
import { map, switchMap } from 'rxjs/operators';
import { CustomerService } from './customer.service';
import { Address } from '../../core/models/address.interface';
import { DeliveryMethodService } from './delivery-method.service';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  constructor(
    private deliveryMethodService: DeliveryMethodService,
    private customerService: CustomerService
  ) {}

  public getShipmentOptions(customerId: number): Observable<ShipmentOption[]> {
    return this.deliveryMethodService.getDeliveryMethods().pipe(
      map((methods: DeliveryMethod[]) =>
        methods.map((method: DeliveryMethod) => ({ deliveryMethod: method }))
      ),
      switchMap((shipmentOptions: ShipmentOption[]) => {
        if (
          shipmentOptions.find((option) => option.deliveryMethod === 'Post')
        ) {
          return this.customerService.getCustomerAddresses(customerId).pipe(
            map((addresses: Address[]) => {
              if (!addresses || addresses.length === 0) {
                return shipmentOptions;
              } else {
                return shipmentOptions
                  .filter((option) => option.deliveryMethod !== 'Post')
                  .concat({ deliveryMethod: 'Post', address: addresses[0] });
              }
            })
          );
        } else {
          return of(shipmentOptions);
        }
      })
    );
  }
}
