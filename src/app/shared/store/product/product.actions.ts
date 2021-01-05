import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.interface';

export const STORE = '[Product] Store products';
export const LOAD = '[Product] Load products';
export const STORE_BY_ID = '[Product] Store product by id';
export const LOAD_BY_ID = '[Product] Load product by id';

export const store = createAction(STORE, props<{products: Product[]}>());
export const load = createAction(LOAD);

export const storeById = createAction(STORE_BY_ID, props<{product: Product}>());
export const loadById = createAction(LOAD_BY_ID, props<{id: number}>());
