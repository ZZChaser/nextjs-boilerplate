import { useEffect, useState } from 'react';
import { Product } from '..';
import { getProducts } from '../services/products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    initProducts();
  }, []);

  const initProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  return { products };
}
