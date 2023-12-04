'use client';

import { redirect } from 'next/navigation';
import { useUserContext } from '@/features/users';
import { Buy, Orders } from '@/features/orders';
import { Cart } from '@/features/carts';
import Profile from './components/Profile';

export default function User() {
  const { user } = useUserContext();

  if (!user) {
    redirect('/login');
  }

  return (
    <section>
      <Profile
        name={user!.name}
        email={user!.email}
        allergies={user!.allergies}
        preferences={user!.preferences}
      />
      <Orders />
      <Cart />
      <Buy />
    </section>
  );
}
