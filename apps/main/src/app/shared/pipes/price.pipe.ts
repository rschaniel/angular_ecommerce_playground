import { Pipe, PipeTransform } from '@angular/core';
import { Price } from '../models/basket-item.interface';

@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
  transform(value: Price): string {
    return `${value}$`;
  }
}
