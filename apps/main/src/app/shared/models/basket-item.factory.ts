import { Product } from './product.interface';
import { BasketItem } from './basket-item.interface';

export class BasketItemFactory {
  private static readonly DEFAULT_QUANTITY = 1;

  public static createFromProduct(product: Product): BasketItem {
    return {
      name: product.name,
      price: product.price,
      quantity: this.DEFAULT_QUANTITY,
    };
  }
}
