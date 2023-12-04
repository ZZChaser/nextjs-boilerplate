import type { Cart } from '@/features/carts/types';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export interface Order {
  user: string;
  cart: Cart;
  created: string;
  status: OrderStatus;
  total: number;
}
