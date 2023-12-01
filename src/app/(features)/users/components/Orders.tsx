import Order from './Order';

export function Orders() {
  return (
    <section>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <Order key={order.created} {...order} />
        ))}
      </ul>
    </section>
  );
}
