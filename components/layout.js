import React, { Fragment } from 'react';
import Head from 'next/head';

import Header from './header';
import Cart from './cart';

const Layout = ({ children, space }) => {
  return (
    <Fragment>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header space={space} />
      <Cart />
      <main>{children}</main>
      <footer>
        <span>Prairie Wind Apparel</span>
        <span>&#169; 2020</span>
      </footer>
    </Fragment>
  );
};

export default Layout;
