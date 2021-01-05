import { createAction, props } from '@ngrx/store';
import { BasketItem } from '../../models/basket-item.interface';

export const STORE = '[Basket] Store items';
export const LOAD = '[Basket] Load items';

export const store = createAction(STORE, props<{items: BasketItem[]}>());
export const load = createAction(LOAD);
