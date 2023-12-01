import type { Cart } from '@/features/carts';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export interface Order {
  user: string;
  cart: Cart;
  created: string;
  status: OrderStatus;
  total: number;
}
