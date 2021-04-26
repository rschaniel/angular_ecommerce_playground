import * as shipmentActions from './shipment.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { ShipmentOption } from '../../models/shipment.interface';

export interface ShipmentState {
  shipmentOptions?: ShipmentOption[];
}

export const initialState: ShipmentState = {};

const reducer = createReducer(
  initialState,
  on(shipmentActions.store, (state, { shipmentOptions }) => ({
    shipmentOptions,
  }))
);

export function shipmentReducer(
  state: ShipmentState | undefined,
  action: Action
) {
  return reducer(state, action);
}
