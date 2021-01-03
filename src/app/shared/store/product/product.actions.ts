import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.interface';

export const STORE = '[Product] Store product';
export const LOAD = '[Product] Load product';

export const Store = createAction(STORE, props<{products: Product[]}>());
export const Load = createAction(LOAD);
