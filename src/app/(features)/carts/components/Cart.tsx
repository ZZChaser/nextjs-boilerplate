import { useCartContext } from '@/stores/cart';
import { Product, totalPrice } from '@/features/products';

export default function Cart() {
  const cart = useCartContext();

  return (
    <section>
      <h2>Cart</h2>

      <ul className="grid grid-cols-3 gap-5">
        {cart.products.map((product) => (
          <li key={product.id}>{<Product {...product} />}</li>
        ))}
      </ul>

      <p>Total: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  );
}
