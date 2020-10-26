import { Pipe, PipeTransform } from '@angular/core';
import { price } from '../models/basket-item.interface';


@Pipe({name: 'price'})
export class PricePipe implements PipeTransform {

  transform(value: price): string {
    return `${value}$`;
  }

}
