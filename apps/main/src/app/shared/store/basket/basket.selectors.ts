import { createSelector } from '@ngrx/store';
import { BasketState } from './basket.reducers';
import { selectBasketState } from '../../../reducers';
import { calculateTotalPrice } from '../../../core/basket/price-calculator';

const selectBasket = createSelector(
  selectBasketState,
  (state: BasketState) => state
);

export const selectBasketItems = createSelector(
  selectBasket,
  (state: BasketState) => state.items
);

export const getTotalPrice = createSelector(
  selectBasketItems,
  calculateTotalPrice
);
