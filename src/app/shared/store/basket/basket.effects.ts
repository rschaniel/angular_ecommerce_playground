import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as basketActions from './basket.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BasketItemsService } from '../../services/basket-items.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class BasketEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(basketActions.LOAD),
    switchMap(() => this.basketItemsService.getItems()
      .pipe(
        map(items => basketActions.Store({ items })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private basketItemsService: BasketItemsService
  ) {}
}
