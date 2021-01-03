interface NominalTyping<NominalT> {
  type?: NominalT;
}
export type Nominal<T, NominalT> = T & NominalTyping<NominalT>;

export type Price = Nominal<number, 'Price'>;

export interface Product {
  name: string;
  price: Price;
  image?: string;
}
