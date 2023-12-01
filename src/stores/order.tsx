'use client';

import { Order } from '@/app/(features)/orders';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type OrderContext = {
  orders: Order[];
  setOrder: Dispatch<SetStateAction<Order[]>>;
};

export const OrderContext = createContext<OrderContext>({
  orders: [],
  setOrder: () => {},
});

export const useOrderContext = () => useContext(OrderContext);

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrder] = useState<Order[]>([]);

  return (
    <OrderContext.Provider value={{ orders, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
