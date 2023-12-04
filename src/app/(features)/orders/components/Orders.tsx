import { useOrderContext } from '..';
import Order from './Order';

export default function Orders() {
  const { orders } = useOrderContext();

  if (!orders.length) return null;

  return (
    <section>
      <h2 className="text-2xl py-5 font-semibold">Orders</h2>

      <ul className=" list-disc px-10">
        {orders.map((order) => (
          <Order key={order.created} {...order} />
        ))}
      </ul>
    </section>
  );
}
