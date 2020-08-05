import $nacelle from 'services/nacelle';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Test from '../components/test';

function ProductEntry({ product }) {
  return (
    <li>
      <Link href={`/products/${product.handle}`}>
        <a>{product.handle}</a>
      </Link>
    </li>
  )
}

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Test />
      <br />
        <ul>
          {products.map(product =>
            <ProductEntry product={product} key={product.id} />
          )}
        </ul>
    </div>
  );
}

export async function getStaticProps() {
    try {
    const space = await $nacelle.data.space();
    const products = await $nacelle.data.allProducts()
    return {
      props: { space, products }
    };
  } catch(err) {
    console.error(`Error fetching products on homepage:\n${err}`)
  }
}
