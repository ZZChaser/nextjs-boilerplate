'use client';

import React, { useState } from 'react';
import { useUserContext } from '@/features/users';
import { useCartContext } from '@/features/carts';
import { useOrderProducts } from '../hooks/useOrderProducts';

export default function Buy() {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserContext();
  const cart = useCartContext();
  const [name, setName] = useState<string>(user?.name ?? '');
  const [email, setEmail] = useState<string>(user?.email ?? '');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user || !cart.products.length) return null;

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();
    await orderProducts(user!, cart);
    setLoading(false);
  }

  return (
    <section>
      <h2 className="text-2xl py-5 font-semibold">Checkout</h2>

      <form onSubmit={handleSubmit}>
        <label className="flex gap-5 mb-5">
          <span className="basis-20">Name</span>
          <input
            type="text"
            name="name"
            className=" border-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </label>
        <label className="flex gap-5 mb-5">
          <span className="basis-20">Email</span>
          <input
            type="email"
            name="email"
            className=" border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex gap-5 mb-5">
          <span className="basis-20">Address</span>
          <textarea
            name="address"
            className=" border-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>

        <button
          className="bg-gray-200 px-2 rounded border border-gray-500"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Preparing an order...' : 'Checkout'}
        </button>
      </form>
    </section>
  );
}
