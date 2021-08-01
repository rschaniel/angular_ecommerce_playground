import { calculateTotalPrice } from './price-calculator';

describe('Price calculator', () => {
  describe('calculateTotalPrice', () => {
    it('should sum up the prices', () => {
      const total = calculateTotalPrice([
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
      ]);
      expect(total).toEqual(26);
    });
  });
});
