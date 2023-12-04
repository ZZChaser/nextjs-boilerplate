import { Cart } from '@/features/carts/types';
import { User } from '@/features/users';
import { useCartContext } from '@/features/carts';
import { usePayment } from './usePayment';
import { createOrder, useOrderContext } from '..';

export function useOrderProducts() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.
  const payment = usePayment();
  const orderStorage = useOrderContext();
  const cartStorage = useCartContext();

  // We can also get `user` and `cart` right here through the corresponding hooks
  // and not pass them as arguments to a function.

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function orderProducts(user: User, cart: Cart) {
    // Here we can validate the data before creating the order.

    const order = await createOrder(user, cart);

    // The use case function doesn't call third-party services directly,
    // instead, it relies on the interfaces we declared earlier.
    const paid = await payment.tryPay(order.total);
    if (!paid) return console.log("The payment wasn't successful 🤷");

    // And here we can save the order on the server, if necessary.

    const { orders } = orderStorage;
    orderStorage.setOrder([...orders, order]);
    cartStorage.emptyCart();
  }

  return { orderProducts };
}
