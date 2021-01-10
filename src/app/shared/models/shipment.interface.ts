import { Address } from './address.interface';

export type DeliveryMethod = 'Post' | 'Pickup';

export interface ShipmentOption {
  deliveryMethod: DeliveryMethod;
  address?: Address;
}
