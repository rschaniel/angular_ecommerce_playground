import { ShipmentService } from './shipment.service';
import { CustomerService } from './customer.service';
import { DeliveryMethod, ShipmentOption } from '../models/shipment.interface';
import { Observable, of, Subject } from 'rxjs';
import { Address } from '../models/address.interface';
import { DeliveryMethodService } from './delivery-method.service';

describe('Shipment Service Subject', () => {
  let shipmentService: ShipmentService;
  let customerService: CustomerService;
  let deliveryMethodService: DeliveryMethodService;
  const address: Address = {
    name: 'John Doe',
    street: 'Main Street',
    city: 'Zurich',
    postalCode: '8000',
  };
  const customerId = 1;
  const deliveryMethodsOutput$ = new Subject<DeliveryMethod[]>();

  beforeEach(() => {
    deliveryMethodService = ({
      getDeliveryMethods: (): Observable<DeliveryMethod[]> =>
        deliveryMethodsOutput$.asObservable(),
    } as unknown) as DeliveryMethodService;

    customerService = ({
      getCustomerAddresses: (): Observable<Address[]> => of([address]),
    } as unknown) as CustomerService;

    shipmentService = new ShipmentService(
      deliveryMethodService,
      customerService
    );
  });

  it('should return the delivery methods with address if Post is available', () => {
    deliveryMethodsOutput$.next(['Pickup', 'Post']);
    const shipmentOptions$: Observable<
      ShipmentOption[]
    > = shipmentService.getShipmentOptions(customerId);
    const expected: ShipmentOption[] = [
      { deliveryMethod: 'Pickup' },
      { deliveryMethod: 'Post', address },
    ];

    shipmentOptions$.subscribe((options: ShipmentOption[]) => {
      expect(options).toEqual(expected);
    });
  });

  xit('should return the delivery methods without fetching the address if only pickup is available', () => {
    deliveryMethodsOutput$.next(['Pickup']);
    customerService.getCustomerAddresses = () => of([]);

    const shipmentOptions$: Observable<
      ShipmentOption[]
    > = shipmentService.getShipmentOptions(customerId);
    const expected: ShipmentOption[] = [{ deliveryMethod: 'Pickup' }];

    shipmentOptions$.subscribe((options: ShipmentOption[]) => {
      expect(options).toEqual(expected);
    });
  });

  it('should return the delivery methods without address if no address returned', () => {
    deliveryMethodsOutput$.next(['Pickup', 'Post']);
    customerService.getCustomerAddresses = () => of([]);

    const shipmentOptions$: Observable<
      ShipmentOption[]
    > = shipmentService.getShipmentOptions(customerId);
    const expected: ShipmentOption[] = [
      { deliveryMethod: 'Pickup' },
      { deliveryMethod: 'Post' },
    ];

    shipmentOptions$.subscribe((options: ShipmentOption[]) => {
      expect(options).toEqual(expected);
    });
  });
});
