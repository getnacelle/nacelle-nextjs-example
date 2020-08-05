import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Test from '../components/test';

export default function Home() {
  return (
    <div className={styles.container}>
      <Test />
      <br />
      <Link href="/products/alonso-shoes">
        <a>Alonso Shoes</a>
      </Link>
    </div>
  );
}
