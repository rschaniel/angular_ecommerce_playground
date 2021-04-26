interface NominalTyping<NominalT> {
  type?: NominalT;
}
export type Nominal<T, NominalT> = T & NominalTyping<NominalT>;

export type Price = Nominal<number, 'Price'>;
export type Quantity = Nominal<number, 'Quantity'>;

export interface BasketItem {
  name: string;
  price: Price;
  quantity: Quantity;
}
