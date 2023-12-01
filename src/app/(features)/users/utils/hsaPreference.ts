import type { Ingredient } from '@/features/products';
import { User } from '../types/user';

export function hasPreference(user: User, ingredient: Ingredient) {
  return user.preferences.includes(ingredient);
}
