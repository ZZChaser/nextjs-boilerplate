import { Ingredient } from '@/features/products';

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: Ingredient[];
  allergies: Ingredient[];
}
