import { createSelector } from '@ngrx/store';
import { BasketState } from './basket.reducers';
import { selectBasketState } from '../../../reducers';


const selectBasket = createSelector(
  selectBasketState,
  (state: BasketState) => state
);

export const selectBasketItems = createSelector(
  selectBasket,
  (state: BasketState) => state.items
);
