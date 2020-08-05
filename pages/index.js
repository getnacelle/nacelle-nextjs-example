import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { CartProvider } from '../hooks/use-cart';
import Test from '../components/test';

export default function Home() {
  return (
    <CartProvider>
      <div className={styles.container}>
        <Head></Head>

        <main>
          <Test />
          <Link href="/products/alonso-shoes">
            <a>Alonso Shoes</a>
          </Link>
        </main>
      </div>
    </CartProvider>
  );
}
