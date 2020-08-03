import { createSelector } from '@ngrx/store';
import { ShipmentState } from './shipment.reducers';
import { AppState, selectShipmentState } from '../../../reducers';
import { Shipment } from '../../models/shipment.interface';


const selectShipmentData = createSelector(
  selectShipmentState,
  (state: ShipmentState) => state
);

export const selectShipment = createSelector(
  selectShipmentData,
  (state: ShipmentState) => state.shipment
);
