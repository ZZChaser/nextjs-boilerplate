import { Product } from '@/features/products';
import type { Cart } from '../types';

export function contains(cart: Cart, product: Product): boolean {
  return cart.products.some(({ id }) => id === product.id);
}
