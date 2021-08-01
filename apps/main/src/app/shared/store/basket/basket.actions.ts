import { createAction, props } from '@ngrx/store';
import { BasketItem } from '../../../core/models/basket-item.interface';

export const STORE = '[Basket] Store items';
export const LOAD = '[Basket] Load items';
export const ADD_TO_CART = '[Basket] Add to cart';

export const store = createAction(STORE, props<{ items: BasketItem[] }>());
export const load = createAction(LOAD);
export const addToCart = createAction(
  ADD_TO_CART,
  props<{ item: BasketItem }>()
);
