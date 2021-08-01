import { BasketItem, Price } from '../models/basket-item.interface';

export function calculateTotalPrice(items: BasketItem[]): number {
  return items.reduce(
    (a: Price, b: BasketItem): Price => a + b.quantity * b.price,
    0
  );
}
