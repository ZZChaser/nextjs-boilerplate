'use client';

import { useUserContext } from '@/features/users/stores/user';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '../services/auth';

export default function Login() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, setUser } = useUserContext();

  if (!!user) {
    // TODO:
  }

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    const user = await login({ name, email });
    setUser(user);
    setLoading(false);

    router.push('/products');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex gap-5 mb-5">
        <span className=" basis-20">Name: </span>
        <input
          className=" border-2"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </label>
      <label className=" flex gap-5 mb-5">
        <span className="basis-20">Email: </span>
        <input
          className=" border-2"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button
        className="bg-gray-200 px-2 rounded border border-gray-500"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Trying to login...' : 'Login'}
      </button>
    </form>
  );
}
