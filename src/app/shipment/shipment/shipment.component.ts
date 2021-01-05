import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectShipment } from '../../shared/store/shipment/shipment.selectors';
import { Shipment } from '../../shared/models/shipment.interface';
import * as shipmentActions from '../../shared/store/shipment/shipment.actions';
import { ShipmentState } from '../../shared/store/shipment/shipment.reducers';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  shipment$: Observable<Shipment>;

  constructor(private store: Store<ShipmentState>) { }

  ngOnInit(): void {
    this.store.dispatch(shipmentActions.load());
    this.shipment$ = this.store.select(selectShipment);
  }

}
