import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as productActions from './product.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ProductService } from '../../services/product.service';
import * as basketActions from '../basket/basket.actions';
import { BasketItem } from '../../../core/models/basket-item.interface';
import { BasketItemFactory } from '../../../core/models/basket-item.factory';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.LOAD),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => productActions.store({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.LOAD_BY_ID),
      switchMap(({ id }) =>
        this.productService.getProductById(id).pipe(
          map((product) => productActions.storeById({ product })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.ADD_TO_CART),
      map(
        ({ product }): BasketItem =>
          BasketItemFactory.createFromProduct(product)
      ),
      map((basketItem: BasketItem) =>
        basketActions.addToCart({ item: basketItem })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
