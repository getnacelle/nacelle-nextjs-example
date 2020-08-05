import React from 'react';
import Head from 'next/head';

import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import { CartProvider } from '../../hooks/use-cart';

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Cart />
      <main>{children}</main>
      <footer>
        <span>Prairie Wind Apparel</span>
        <span>&#169; 2020</span>
      </footer>
    </CartProvider>
  );
};

export default Layout;
