import { createSelector } from '@ngrx/store';
import { BasketState } from './basket.reducers';
import { selectBasketState } from '../../../reducers';
import { BasketItem, Price } from '../../models/basket-item.interface';


const selectBasket = createSelector(
  selectBasketState,
  (state: BasketState) => state
);

export const selectBasketItems = createSelector(
  selectBasket,
  (state: BasketState) => state.items
);

export const getTotalPrice = createSelector(
  selectBasket,
  (state: BasketState) => state.items.reduce((a: Price, b: BasketItem): Price => a + b.quantity * b.price, 0)
);
