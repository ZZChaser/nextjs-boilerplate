import { useUserContext } from '@/stores/user';
import { Ingredient, ingredients } from '..';
import { User, hasAllergy, hasPreference } from '@/features/users';

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
          {!!user && hasPreference(user, topping) && <>👍</>}{' '}
          {!!user && hasAllergy(user, topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}
