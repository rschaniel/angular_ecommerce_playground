import { ShipmentService } from './shipment.service';
import { CustomerService } from './customer.service';
import { DeliveryMethod, ShipmentOption } from '../models/shipment.interface';
import { Observable, of } from 'rxjs';
import { Address } from '../models/address.interface';
import { DeliveryMethodService } from './delivery-method.service';

describe('Shipment Service Observable', () => {

  let shipmentService: ShipmentService;
  let customerService: CustomerService;
  let deliveryMethodService: DeliveryMethodService;
  const address: Address = {name: 'John Doe', street: 'Main Street', city: 'Zurich', postalCode: '8000'};
  const customerId = 1;

  beforeEach(() => {
    deliveryMethodService = {
      getDeliveryMethods: (): Observable<DeliveryMethod[]> => of(['Pickup', 'Post'])
    } as unknown as DeliveryMethodService;

    customerService = {
      getCustomerAddresses: (): Observable<Address[]> => of([address])
    } as unknown as CustomerService;

    shipmentService = new ShipmentService(deliveryMethodService, customerService);
  });

  it('should return the delivery methods with address if Post is available', (done) => {
    const shipmentOptions$: Observable<ShipmentOption[]> = shipmentService.getShipmentOptions(customerId);
    const expected: ShipmentOption[] = [
      {deliveryMethod: 'Pickup'},
      {deliveryMethod: 'Post', address},
    ];

    shipmentOptions$.subscribe((options: ShipmentOption[]) => {
      expect(options).toEqual(expected);
      done();
    });
  });

  it('should return the delivery methods without address if no address returned', () => {
    customerService.getCustomerAddresses = () => of([]);

    const shipmentOptions$: Observable<ShipmentOption[]> = shipmentService.getShipmentOptions(customerId);
    const expected: ShipmentOption[] = [
      {deliveryMethod: 'Pickup'},
      {deliveryMethod: 'Post'},
    ];

    shipmentOptions$.subscribe((options: ShipmentOption[]) => {
      expect(options).toEqual(expected);
    });
  });

});
