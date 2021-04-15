import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as shipmentActions from './shipment.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ShipmentService } from '../../services/shipment.service';

const customerId = 1;

@Injectable()
export class ShipmentEffects {

  loadShipmentOptions$ = createEffect(() => this.actions$.pipe(
    ofType(shipmentActions.LOAD),
    switchMap(() => this.shipmentService.getShipmentOptions(customerId)
      .pipe(
        map(shipmentOptions => shipmentActions.store({ shipmentOptions })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private shipmentService: ShipmentService
  ) {}
}
