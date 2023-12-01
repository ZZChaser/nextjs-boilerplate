import { Ingredient } from '@/features/products';
import { User } from '../types/user';

export function hasAllergy(user: User, ingredient: Ingredient): boolean {
  return user.allergies.includes(ingredient);
}
