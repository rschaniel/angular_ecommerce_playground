import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Address } from '../../models/address.interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent {

  @Input()
  address: Address;

}
