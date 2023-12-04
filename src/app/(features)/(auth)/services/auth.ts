import { User } from '@/features/users';

export async function register() {}

export async function login({
  name,
  email,
}: {
  name: string;
  email: string;
}): Promise<User> {
  return {
    name,
    email,
    id: 'testId',
    allergies: ['cocoa', 'cherry'],
    preferences: ['marshmallow', 'peanuts'],
  };
}

export async function logout() {}
