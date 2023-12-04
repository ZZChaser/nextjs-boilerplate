import {
  User,
  hasAllergy,
  hasPreference,
  useUserContext,
} from '@/features/users';
import { Ingredient, ingredients } from '..';

type ToppingsProps = {
  toppings: Ingredient[];
};
export function Toppings({ toppings }: ToppingsProps) {
  const { user } = useUserContext();

  return (
    <ul className=" list-disc px-10">
      {toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}{' '}
          {!!user && hasPreference(user as unknown as User, topping) && <>👍</>}{' '}
          {!!user && hasAllergy(user as unknown as User, topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}
