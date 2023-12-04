import { Order } from '..';
import { Cart } from '@/features/carts/types';
import { User } from '@/features/users';
import { totalPrice } from '@/features/products';

export async function createOrder(user: User, cart: Cart): Promise<Order> {
  return {
    cart,
    user: user.id,
    status: 'new',
    created: new Date() + '',
    total: totalPrice(cart.products),
  };
}

export async function tryPay(amount: number): Promise<boolean> {
  return true;
}
