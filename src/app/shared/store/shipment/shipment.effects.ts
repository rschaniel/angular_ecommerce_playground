import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as shipmentActions from './shipment.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ShipmentService } from '../../services/shipment.service';

@Injectable()
export class ShipmentEffects {

  loadShipmentInfo$ = createEffect(() => this.actions$.pipe(
    ofType(shipmentActions.LOAD),
    switchMap(() => this.shipmentService.getShipmentInfo()
      .pipe(
        map(shipment => shipmentActions.Store({ shipment })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private shipmentService: ShipmentService
  ) {}
}
