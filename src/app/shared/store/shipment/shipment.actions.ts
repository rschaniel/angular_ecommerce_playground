import { createAction, props } from '@ngrx/store';
import { Shipment } from '../../models/shipment.interface';

export const STORE = '[Shipment] Store shipment data';
export const LOAD = '[Shipment] Load shipment data';

export const store = createAction(STORE, props<{shipment: Shipment}>());
export const load = createAction(LOAD);
