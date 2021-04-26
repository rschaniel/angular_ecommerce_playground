import { createAction, props } from '@ngrx/store';
import { ShipmentOption } from '../../models/shipment.interface';

export const STORE = '[Shipment] Store shipment options';
export const LOAD = '[Shipment] Load shipment options';

export const store = createAction(
  STORE,
  props<{ shipmentOptions: ShipmentOption[] }>()
);
export const load = createAction(LOAD);
