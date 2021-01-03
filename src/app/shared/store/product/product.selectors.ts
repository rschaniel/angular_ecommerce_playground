import { createSelector } from '@ngrx/store';
import { ProductState } from './product.reducers';
import { selectProductState } from '../../../reducers';


const selectProductData = createSelector(
  selectProductState,
  (state: ProductState) => state
);

export const selectProducts = createSelector(
  selectProductData,
  (state: ProductState) => state.products
);
