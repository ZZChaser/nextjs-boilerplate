import { ingredients } from '@/features/products';
import type { User } from '..';

type Profile = Omit<User, 'id'>;

export default function Profile(props: Profile) {
  return (
    <>
      <h1 className="text-3xl py-5 font-semibold">{props.name}</h1>
      <p className=" py-1">{props.email}</p>

      <p className="py-1">Allergies</p>
      <ul className="list-disc px-10">
        {props.allergies.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>

      <p className="py-1">Preferences</p>
      <ul className="list-disc px-10">
        {props.preferences.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
    </>
  );
}
