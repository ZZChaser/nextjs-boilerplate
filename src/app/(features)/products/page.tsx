'use client';

import Product from './components/Product';
import { useProducts } from './hooks/useProducts';
import { useState } from 'react';

export default function Products() {
  const { products } = useProducts();

  return (
    <section>
      <h1 className="text-3xl py-5 font-semibold">Cookies</h1>

      <ul className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
