import { NgModule } from '@angular/core';
import { PricePipe } from './pipes/price.pipe';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [PricePipe, AddressComponent],
  imports: [],
  exports: [PricePipe, AddressComponent],
})
export class SharedModule {}
