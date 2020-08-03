import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { NavigationModule } from '../shared/navigation/navigation.module';


@NgModule({
  declarations: [ShipmentComponent],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    NavigationModule
  ]
})
export class ShipmentModule { }
