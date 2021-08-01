import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../core/models/customer.interface';

export const STORE = '[Customer] Store customer';
export const LOAD = '[Customer] Load customer';

export const store = createAction(STORE, props<{ customer: Customer }>());
export const load = createAction(LOAD);
