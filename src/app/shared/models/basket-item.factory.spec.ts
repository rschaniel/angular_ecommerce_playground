import { BasketItemFactory } from './basket-item.factory';
import { Price, Product } from './product.interface';

describe('BasketItemFactory', () => {

  it('should create a basket item from a product', () => {
    const product: Product = {
      id: 1,
      name: 'Pen',
      price: 10.0,
    };
    const basketItem = BasketItemFactory.createFromProduct(product);

    expect(basketItem).toEqual({
      name: 'Pen',
      price: 10.0,
      quantity: 1
    });
  });
});
