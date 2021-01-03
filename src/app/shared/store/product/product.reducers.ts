import * as productActions from './product.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.interface';


export interface ProductState {
  products?: Product[];
}

export const initialState: ProductState = {};

const reducer = createReducer(
  initialState,
  on(productActions.Store, (state, { products }) => ({ products }))
);

export function productReducer(state: ProductState | undefined, action: Action) {
  return reducer(state, action);
}
