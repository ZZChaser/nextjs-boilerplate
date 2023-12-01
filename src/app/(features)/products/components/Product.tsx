import { Product } from '..';
import { Cart, contains } from '@/features/carts';
import { Toppings } from './Toppings';
import { User } from '@/features/users';
import { useUserContext } from '@/stores/user';

type ProductProps = Product & {
  onAddToCart: (user: User, product: Product) => void;
};

const Product: React.FC<ProductProps> = (props) => {
  const { onAddToCart, ...product } = props;
  const { title, price, toppings } = product;

  const { user } = useUserContext();

  const cart: Cart = {
    products: [],
  };

  return (
    <article className="shadow-inner p-2">
      <span className="block text-9xl text-center">🍪</span>
      <span>{title}</span>
      <Toppings toppings={toppings} />

      {!!user && (
        <button
          className="bg-gray-200 px-2 rounded border border-gray-500 mt-2"
          type="button"
          onClick={() => onAddToCart(user, product)}
        >
          {price / 100} ₽
        </button>
      )}

      {contains(cart, product) && <span>In your cart</span>}
    </article>
  );
};

export default Product;
