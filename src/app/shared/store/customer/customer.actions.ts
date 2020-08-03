import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer.interface';

export const STORE = '[Customer] Store customer';
export const LOAD = '[Customer] Load customer';

export const Store = createAction(STORE, props<{customer: Customer}>());
export const Load = createAction(LOAD);
