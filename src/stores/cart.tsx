'use client';

import { Product } from '@/app/(features)/products';
import { ReactNode, createContext, useContext, useState } from 'react';

type CartContext = {
  products: Product[];
  addProduct: (product: Product) => void;
  emptyCart: () => void;
};

export const CartContext = createContext<CartContext>({
  products: [],
  addProduct: () => {},
  emptyCart: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const emptyCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
