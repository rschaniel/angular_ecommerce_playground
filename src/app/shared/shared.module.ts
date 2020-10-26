import { NgModule } from '@angular/core';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  declarations: [
    PricePipe,
  ],
  imports: [
  ],
  exports: [
    PricePipe,
  ]
})
export class SharedModule { }
