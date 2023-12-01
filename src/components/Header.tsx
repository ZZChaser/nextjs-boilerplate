'use client';

import Link from 'next/link';
import { useUserContext } from '../stores/user';
import { useCartContext } from '@/stores/cart';

export function Header() {
  const { user } = useUserContext();
  const { products } = useCartContext();

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between p-5 shadow bg-white">
      <Link className="text-amber-700 font-black" href="/">
        Co0o0o0o0okie!!!1 🍪
      </Link>

      {!user ? (
        <Link className=" text" href="/login">
          Log in
        </Link>
      ) : (
        <Link href="/user">
          {user.name} ({products.length})
        </Link>
      )}
    </header>
  );
}
