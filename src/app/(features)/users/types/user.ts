import { Ingredient } from '@/features/products';

export interface User {
  id: string;
  name: string;
  preferences: Ingredient[];
  allergies: Ingredient[];
}
