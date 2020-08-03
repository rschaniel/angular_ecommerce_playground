import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket-component/basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { NavigationModule } from '../shared/navigation/navigation.module';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    NavigationModule,
  ]
})
export class BasketModule {
}
