import { Ingredient, ingredients } from '@/features/products';

type Profile = {
  name: string;
  email: string;
  allergies: Ingredient[];
  preferences: Ingredient[];
};

export default function Profile(props: Profile) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>Allergies</p>
      <ul>
        {props.allergies.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
      <p>Preferences</p>
      <ul>
        {props.preferences.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
    </>
  );
}
