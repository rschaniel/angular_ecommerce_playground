import { createSelector } from '@ngrx/store';
import { ProductState } from './product.reducers';
import { selectProductState } from '../../../reducers';
import { Product } from '../../models/product.interface';

export interface IdProps {
  id: number;
}

const selectProductData = createSelector(
  selectProductState,
  (state: ProductState) => state
);

export const selectProducts = createSelector(
  selectProductData,
  (state: ProductState): Product[] => state.products
);

export const selectProductById = createSelector(
  selectProducts,
  (products: Product[], props: IdProps): Product | undefined =>
    products?.find((product) => product.id === props.id)
);
