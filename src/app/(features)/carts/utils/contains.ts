import { Cart } from '..';
import { Product } from '@/features/products';

export function contains(cart: Cart, product: Product): boolean {
  return cart.products.some(({ id }) => id === product.id);
}
