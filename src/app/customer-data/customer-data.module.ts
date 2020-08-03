import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerDataRoutingModule } from './customer-data-routing.module';
import { NavigationModule } from '../shared/navigation/navigation.module';


@NgModule({
  declarations: [CustomerDataComponent],
  imports: [
    CommonModule,
    CustomerDataRoutingModule,
    NavigationModule
  ]
})
export class CustomerDataModule {
}
