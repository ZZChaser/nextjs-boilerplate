'use client';

import { User, hasAllergy } from '@/features/users';
import Product from './components/Product';
import { useProducts } from './hooks/useProducts';
import { useCartContext } from '@/stores/cart';
import { useState } from 'react';

export default function Products() {
  const { products } = useProducts();
  const cart = useCartContext();

  const [count, setCount] = useState(0);

  const handleAddToCart = (user: User, product: Product) => {
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));
    if (isDangerous) {
      const warning = 'This cookie is dangerous to your health! 😱';
      return alert(warning);
    }

    cart.addProduct(product);
  };

  return (
    <section>
      <h1 className="text-3xl py-5 font-semibold">Cookies</h1>

      <span onClick={() => setCount(count + 1)}>test: {count}</span>

      <ul className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ul>
    </section>
  );
}
