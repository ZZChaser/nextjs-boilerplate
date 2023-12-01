'use client';

import Product from './components/Product';
import { useProducts } from './hooks/useProducts';
import { useState } from 'react';

export default function Products() {
  const { products } = useProducts();
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1 className="text-3xl py-5 font-semibold">Cookies</h1>

      <span onClick={() => setCount(count + 1)}>test: {count}</span>

      <ul className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
