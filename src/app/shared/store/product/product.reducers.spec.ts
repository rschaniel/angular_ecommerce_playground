import * as fromReducers from './product.reducers';
import { storeById } from './product.actions';
import { ProductState } from './product.reducers';

describe('Product Reducers', () => {

  describe('StoreById', () => {

    it('should return the correct state', () => {
      let action = storeById({product: {id: 1, name: 'Product 1', price: 5}});
      let state: ProductState = fromReducers.productReducer(undefined, action);

      expect(state).toEqual({
        products: [
          {id: 1, name: 'Product 1', price: 5},
        ]
      });


      action = storeById({product: {id: 2, name: 'Product 2', price: 10}});
      state = fromReducers.productReducer(state, action);

      expect(state).toEqual({
        products: [
          {id: 1, name: 'Product 1', price: 5},
          {id: 2, name: 'Product 2', price: 10},
        ]
      });


      action = storeById({product: {id: 2, name: 'Product 2 updated', price: 10}});
      state = fromReducers.productReducer(state, action);

      expect(state).toEqual({
        products: [
          {id: 1, name: 'Product 1', price: 5},
          {id: 2, name: 'Product 2 updated', price: 10},
        ]
      });
    });
  });
});
