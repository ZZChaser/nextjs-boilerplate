import { useOrderContext } from '@/stores/order';
import Order from './Order';

export function Orders() {
  const { orders } = useOrderContext();

  return (
    <section>
      <h2>Orders</h2>

      <ul>
        {orders.map((order) => (
          <li key={order.created}>
            {order.created} | {order.total / 100} ₽ | {order.status}
          </li>
        ))}
      </ul>
    </section>
  );
}
