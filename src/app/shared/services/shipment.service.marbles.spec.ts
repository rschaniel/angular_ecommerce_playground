import { ShipmentService } from './shipment.service';
import { CustomerService } from './customer.service';
import { DeliveryMethod, ShipmentOption } from '../models/shipment.interface';
import { Observable, of } from 'rxjs';
import { Address } from '../models/address.interface';
import { TestScheduler } from 'rxjs/testing';
import { DeliveryMethodService } from './delivery-method.service';

fdescribe('Shipment Service Marbles', () => {

  let shipmentService: ShipmentService;
  let customerService: CustomerService;
  let deliveryMethodService: DeliveryMethodService;
  let scheduler: TestScheduler;
  const address: Address = {name: 'John Doe', street: 'Main Street', city: 'Zurich', postalCode: '8000'};
  const customerId = 1;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));

    deliveryMethodService = {
      getDeliveryMethods: (): Observable<DeliveryMethod[]> => of(['Pickup', 'Post'])
    } as unknown as DeliveryMethodService;

    customerService = {
      getCustomerAddresses: (): Observable<Address[]> => of([address])
    } as unknown as CustomerService;

    shipmentService = new ShipmentService(deliveryMethodService, customerService);
  });

  it('should return the delivery methods with address if Post is available', () => {
    scheduler.run(({cold, expectObservable}) => {
      deliveryMethodService.getDeliveryMethods = () => cold('a|', {a: ['Pickup', 'Post']});
      customerService.getCustomerAddresses = () => cold('-a|', {a: [address]});

      const shipmentOptions$: Observable<ShipmentOption[]> = shipmentService.getShipmentOptions(customerId);
      const expected: ShipmentOption[] = [
        {deliveryMethod: 'Pickup'},
        {deliveryMethod: 'Post', address},
      ];

      expectObservable(shipmentOptions$).toBe('-a|', {a: expected});
    });
  });

  it('should return the delivery methods without address if no address returned', () => {
    scheduler.run(({cold, expectObservable}) => {
      deliveryMethodService.getDeliveryMethods = () => cold('a|', {a: ['Pickup', 'Post']});
      customerService.getCustomerAddresses = () => cold('-a|', {a: []});

      const shipmentOptions$: Observable<ShipmentOption[]> = shipmentService.getShipmentOptions(customerId);
      const expected: ShipmentOption[] = [
        {deliveryMethod: 'Pickup'},
        {deliveryMethod: 'Post'},
      ];

      expectObservable(shipmentOptions$).toBe('-a|', {a: expected});
    });
  });

  it('should return the delivery methods without fetching the address if only pickup is available', () => {
    scheduler.run(({cold, expectObservable}) => {
      deliveryMethodService.getDeliveryMethods = () => cold('a|', {a: ['Pickup']});
      customerService.getCustomerAddresses = () => cold('#');

      const shipmentOptions$: Observable<ShipmentOption[]> = shipmentService.getShipmentOptions(customerId);
      const expected: ShipmentOption[] = [
        {deliveryMethod: 'Pickup'},
      ];

      expectObservable(shipmentOptions$).toBe('a|', {a: expected});
    });
  });

});
