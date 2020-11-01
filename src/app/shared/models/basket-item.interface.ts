interface Flavoring<FlavorT> {
  _type?: FlavorT;
}
export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;

export type Price = Flavor<number, 'Price'>;
export type Quantity = Flavor<number, 'Quantity'>;

export interface BasketItem {
  name: string;
  price: Price;
  quantity: Quantity;
}
