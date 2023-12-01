import { contains } from '@/features/carts';
import { Toppings } from './Toppings';
import { User, hasAllergy } from '@/features/users';
import { useUserContext } from '@/stores/user';
import { useCartContext } from '@/stores/cart';
import { Product } from '../types/product';

type ProductProps = Product;

const Product: React.FC<ProductProps> = (props) => {
  const { title, price, toppings } = props;

  const { user } = useUserContext();
  const cart = useCartContext();

  const handleAddToCart = (user: User, product: Product) => {
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));
    if (isDangerous) {
      const warning = 'This cookie is dangerous to your health! 😱';
      return alert(warning);
    }

    cart.addProduct(product);
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
          onClick={() => handleAddToCart(user as unknown as User, props)}
        >
          {price / 100} ₽
        </button>
      )}

      {contains(cart, props) && <span className=" ml-1">In your cart</span>}
    </article>
  );
};

export default Product;
