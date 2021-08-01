import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../core/models/product.interface';

@Pipe({ name: 'filterByTitle' })
export class TitleFilterPipe implements PipeTransform {
  transform(products: Product[], searchValue: string): Product[] {
    if (!searchValue) {
      return products;
    }
    return products.filter((product) =>
      product.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
