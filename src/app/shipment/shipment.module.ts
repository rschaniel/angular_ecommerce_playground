import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ShipmentComponent],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    NavigationModule,
    MatProgressSpinnerModule
  ]
})
export class ShipmentModule { }
