import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as customerActions from './customer.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BasketItemsService } from '../../services/basket-items.service';
import { EMPTY } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

@Injectable()
export class CustomerEffects {

  loadCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(customerActions.LOAD),
    switchMap(() => this.customerService.getCustomer()
      .pipe(
        map(customer => customerActions.Store({ customer })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
