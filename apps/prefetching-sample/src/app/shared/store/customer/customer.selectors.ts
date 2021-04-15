import { createSelector } from '@ngrx/store';
import { CustomerState } from './customer.reducers';
import { selectCustomerState } from '../../../reducers';


const selectCustomerData = createSelector(
  selectCustomerState,
  (state: CustomerState) => state
);

export const selectCustomer = createSelector(
  selectCustomerData,
  (state: CustomerState) => state.customer
);
