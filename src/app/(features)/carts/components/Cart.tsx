import { Product, totalPrice } from '@/features/products';
import { useCartContext } from '..';

export default function Cart() {
  const cart = useCartContext();

  return (
    <section>
      <h2 className="text-2xl py-5 font-semibold">Cart</h2>

      <ul className="grid grid-cols-3 gap-5">
        {cart.products.map((product) => (
          <li key={product.id}>{<Product {...product} />}</li>
        ))}
      </ul>

      <p className=" mt-2">Total: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  );
}
