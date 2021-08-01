import { Component, OnInit } from '@angular/core';
import { Customer } from '../../core/models/customer.interface';
import { Observable } from 'rxjs';
import { CustomerState } from '../../shared/store/customer/customer.reducers';
import { Store } from '@ngrx/store';
import * as customerActions from '../../shared/store/customer/customer.actions';
import { selectCustomer } from '../../shared/store/customer/customer.selectors';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss'],
})
export class CustomerDataComponent implements OnInit {
  customer$: Observable<Customer>;

  constructor(private store: Store<CustomerState>) {}

  ngOnInit(): void {
    this.store.dispatch(customerActions.load());
    this.customer$ = this.store.select(selectCustomer);
  }
}
