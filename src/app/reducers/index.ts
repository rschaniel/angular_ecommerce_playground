import { BasketState } from '../shared/store/basket/basket.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as basketReducers from '../shared/store/basket/basket.reducers';
import * as customerReducers from '../shared/store/customer/customer.reducers';
import * as shipmentReducers from '../shared/store/shipment/shipment.reducers';
import { CustomerState } from '../shared/store/customer/customer.reducers';
import { ShipmentState } from '../shared/store/shipment/shipment.reducers';


export interface AppState {
  basket: BasketState;
  customer: CustomerState;
  shipment: ShipmentState;
}

export const reducers: ActionReducerMap<AppState> = {
  basket: basketReducers.basketReducer,
  customer: customerReducers.customerReducer,
  shipment: shipmentReducers.shipmentReducer,
};

export const selectBasketState = createFeatureSelector<
  BasketState
  >('basket');

export const selectCustomerState = createFeatureSelector<
  CustomerState
  >('customer');

export const selectShipmentState = createFeatureSelector<
  ShipmentState
  >('shipment');
