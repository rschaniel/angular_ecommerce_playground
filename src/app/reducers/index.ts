import { BasketState } from '../shared/store/basket/basket.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as basketReducers from '../shared/store/basket/basket.reducers';
import * as customerReducers from '../shared/store/customer/customer.reducers';
import * as shipmentReducers from '../shared/store/shipment/shipment.reducers';
import * as productReducers from '../shared/store/product/product.reducers';
import { CustomerState } from '../shared/store/customer/customer.reducers';
import { ShipmentState } from '../shared/store/shipment/shipment.reducers';
import { ProductState } from '../shared/store/product/product.reducers';


export interface AppState {
  basket: BasketState;
  customer: CustomerState;
  shipment: ShipmentState;
  product: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  basket: basketReducers.basketReducer,
  customer: customerReducers.customerReducer,
  shipment: shipmentReducers.shipmentReducer,
  product: productReducers.productReducer,
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

export const selectProductState = createFeatureSelector<
  ProductState
  >('product');
