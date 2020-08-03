import { BasketItem } from '../../models/basket-item.interface';
import * as basketActions from './basket.actions';
import { Action, createReducer, on } from '@ngrx/store';


export interface BasketState {
  items?: BasketItem[];
}

export const initialState: BasketState = {};

const reducer = createReducer(
  initialState,
  on(basketActions.Store, (state, { items }) => ({ items }))
);

export function basketReducer(state: BasketState | undefined, action: Action) {
  return reducer(state, action);
}
