interface NominalTyping<NominalT> {
  type?: NominalT;
}
export type Nominal<T, NominalT> = T & NominalTyping<NominalT>;

export type Price = Nominal<number, 'Price'>;

export interface Product {
  id: number;
  name: string;
  price: Price;
  image?: string;
  description?: string;
}
