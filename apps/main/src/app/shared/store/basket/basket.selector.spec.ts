import { getTotalPrice } from './basket.selectors';

describe('Basket selectors', () => {
  describe('getTotalPrice', () => {
    it('should sum up the prices', () => {
      const total = getTotalPrice.projector({
        items: [
          {
            name: 'Book',
            price: 20,
            quantity: 1,
          },
          {
            name: 'Pencil',
            price: 2,
            quantity: 3,
          },
        ],
      });
      expect(total).toEqual(26);
    });
  });
});
