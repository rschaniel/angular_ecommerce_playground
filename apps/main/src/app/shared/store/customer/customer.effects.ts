import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as customerActions from './customer.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

const customerId = 1;

@Injectable()
export class CustomerEffects {
  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.LOAD),
      switchMap(() =>
        this.customerService.getCustomer(customerId).pipe(
          map((customer) => customerActions.store({ customer })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
