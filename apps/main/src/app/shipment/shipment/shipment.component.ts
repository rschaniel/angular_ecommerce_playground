import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shipmentActions from '../../shared/store/shipment/shipment.actions';
import { ShipmentState } from '../../shared/store/shipment/shipment.reducers';
import { ShipmentOption } from '../../shared/models/shipment.interface';
import { selectShipmentOptions } from '../../shared/store/shipment/shipment.selectors';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'],
})
export class ShipmentComponent implements OnInit {
  shipmentOptions$: Observable<ShipmentOption[]>;

  constructor(private store: Store<ShipmentState>) {}

  ngOnInit(): void {
    this.store.dispatch(shipmentActions.load());
    this.shipmentOptions$ = this.store.select(selectShipmentOptions);
  }
}
