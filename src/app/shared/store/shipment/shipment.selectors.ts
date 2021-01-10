import { createSelector } from '@ngrx/store';
import { ShipmentState } from './shipment.reducers';
import { selectShipmentState } from '../../../reducers';


const selectShipmentData = createSelector(
  selectShipmentState,
  (state: ShipmentState) => state
);

export const selectShipmentOptions = createSelector(
  selectShipmentData,
  (state: ShipmentState) => state.shipmentOptions
);
