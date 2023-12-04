import { User, hasAllergy, useUserContext } from '@/features/users';
import { useCartContext, contains } from '@/features/carts';
import { Product } from '../types/product';
import { Toppings } from './Toppings';

type ProductProps = Product;

const Product: React.FC<ProductProps> = (product) => {
  const { title, price, toppings } = product;

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
          onClick={() => handleAddToCart(user as unknown as User, product)}
        >
          {price / 100} ₽
        </button>
      )}

      {contains(cart, product) && <span className=" ml-1">In your cart</span>}
    </article>
  );
};

export default Product;
