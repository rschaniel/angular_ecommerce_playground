import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as productActions from './product.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.LOAD),
    switchMap(() => this.productService.getProducts()
      .pipe(
        map(products => productActions.store({ products })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadProductById$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.LOAD_BY_ID),
    switchMap(({id}) => this.productService.getProductById(id)
      .pipe(
        map(product => productActions.storeById({ product })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
