'use client';

import { useUserContext } from '@/stores/user';
import { Orders } from './components/Orders';
import Profile from './components/Profile';
import { redirect } from 'next/navigation';
import { Cart } from '@/features/carts';

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
      {/* <Buy /> */}
    </section>
  );
}
