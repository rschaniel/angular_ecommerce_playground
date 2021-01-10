import { ShipmentService } from './shipment.service';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { DeliveryMethod, ShipmentOption } from '../models/shipment.interface';
import { Observable, of } from 'rxjs';
import { Address } from '../models/address.interface';

fdescribe('Shipment Service', () => {

  let shipmentService: ShipmentService;
  let httpClient: HttpClient;
  let customerService: CustomerService;
  const address: Address = { name: 'John Doe', street: 'Main Street', city: 'Zurich', postalCode: '8000'};
  const customerId = 1;

  beforeEach(() => {
    httpClient = {
      get: (): Observable<DeliveryMethod[]> => of(['Pickup', 'Post'])
    } as unknown as HttpClient;

    customerService = {
      getCustomerAddresses: (): Observable<Address[]> => of([address])
    } as unknown as CustomerService;

    shipmentService = new ShipmentService(httpClient, customerService);
  });

  it('should return the delivery methods with address if Post is available', () => {
    const shipmentOptions$: Observable<ShipmentOption[]> = shipmentService.getShipmentOptions(customerId);
    const expected: ShipmentOption[] = [
      { deliveryMethod: 'Pickup' },
      { deliveryMethod: 'Post', address },
    ];

    shipmentOptions$.subscribe((options: ShipmentOption[]) => {
      expect(options).toEqual(expected);
    });
  });

  it('should return the delivery methods without address if no address returned', () => {
    customerService.getCustomerAddresses = () => of([]);

    const shipmentOptions$: Observable<ShipmentOption[]> = shipmentService.getShipmentOptions(customerId);
    const expected: ShipmentOption[] = [
      { deliveryMethod: 'Pickup' },
      { deliveryMethod: 'Post' },
    ];

    shipmentOptions$.subscribe((options: ShipmentOption[]) => {
      expect(options).toEqual(expected);
    });
  });

});
