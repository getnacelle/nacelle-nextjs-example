import React from 'react';
import $nacelle from 'services/nacelle';
import Link from 'next/link';
import Head from 'next/head';

function ProductEntry({ product }) {
  return (
    <li>
      <Link href={`/products/${product.handle}`}>
        <a>{product.handle}</a>
      </Link>
    </li>
  );
}

export default function Shop({ products }) {
  return (
    <>
      <Head></Head>
      <main>
        <ul>
          {products.map((product) => (
            <ProductEntry product={product} key={product.id} />
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const products = await $nacelle.data.allProducts();
    return {
      props: { products }
    };
  } catch (err) {
    console.error(`Error fetching products on homepage:\n${err}`);
  }
}
