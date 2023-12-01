export type Ingredient =
  | 'chocolate'
  | 'peanuts'
  | 'cocoa'
  | 'marshmallow'
  | 'cherry';

export interface Product {
  id: string;
  title: string;
  price: number;
  toppings: Ingredient[];
}

export const ingredients: Record<Ingredient, string> = {
  chocolate: 'Chocolate',
  cocoa: 'Cocoa Powder',
  cherry: 'Cherry',
  marshmallow: 'Marshmallow',
  peanuts: 'Peanut Butter',
};
