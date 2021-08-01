import * as customerActions from './customer.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from '../../../core/models/customer.interface';

export interface CustomerState {
  customer?: Customer;
}

export const initialState: CustomerState = {};

const reducer = createReducer(
  initialState,
  on(customerActions.store, (state, { customer }) => ({ customer }))
);

export function customerReducer(
  state: CustomerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
