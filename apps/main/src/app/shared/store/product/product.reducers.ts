import * as productActions from './product.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../../../core/models/product.interface';
import { insertOrUpdateById } from '../utils/utils';

export interface ProductState {
  products?: Product[];
}

export const initialState: ProductState = {
  products: [],
};

const reducer = createReducer(
  initialState,
  on(
    productActions.store,
    (state: ProductState, { products }): ProductState => ({ products })
  ),
  on(
    productActions.storeById,
    (state: ProductState, { product }): ProductState => ({
      products: insertOrUpdateById<Product>(state.products, product),
    })
  )
);

export function productReducer(
  state: ProductState | undefined,
  action: Action
) {
  return reducer(state, action);
}
