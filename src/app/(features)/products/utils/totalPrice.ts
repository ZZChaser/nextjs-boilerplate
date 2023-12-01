import { Product } from '../types/product';

export function totalPrice(products: Product[]): number {
  return products.reduce((total, { price }) => total + price, 0);
}
