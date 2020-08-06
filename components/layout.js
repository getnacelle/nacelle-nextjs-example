import React from 'react';
import Head from 'next/head';
import { CartProvider } from 'hooks/use-cart';
import { Header, Cart, Footer } from 'components';

const Layout = ({ children, space }) => {
  return (
    <CartProvider>
      <Head>
        <title>{space.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header space={space} />
      <Cart />
      <main>{children}</main>
      <Footer space={space} />
    </CartProvider>
  );
};

export default Layout;
