import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserContextProvider } from '@/features/users';
import { CartContextProvider } from '@/features/carts';
import { OrderContextProvider } from '@/features/orders';
import { Header } from '../components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Demonstrates the domain-specific directory structure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' p-5 pt-20'}>
        <UserContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <Header />
              {children}
            </OrderContextProvider>
          </CartContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
