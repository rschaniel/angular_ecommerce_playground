import * as shipmentActions from './shipment.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Shipment } from '../../models/shipment.interface';


export interface ShipmentState {
  shipment?: Shipment;
}

export const initialState: ShipmentState = {};

const reducer = createReducer(
  initialState,
  on(shipmentActions.Store, (state, { shipment }) => ({ shipment }))
);

export function shipmentReducer(state: ShipmentState | undefined, action: Action) {
  return reducer(state, action);
}
