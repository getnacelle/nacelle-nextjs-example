import React from 'react';
import $nacelle from 'services/nacelle';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout/Layout';

function ProductEntry({ product }) {
  return (
    <li>
      <Link href={`/products/${product.handle}`}>
        <a>{product.handle}</a>
      </Link>
    </li>
  );
}

export default function Shop({ products, space }) {
  return (
    <Layout space={space}>
      <div>
        <Head></Head>
        <main>
          <ul>
            {products.map((product) => (
              <ProductEntry product={product} key={product.id} />
            ))}
          </ul>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const space = await $nacelle.data.space();
    const products = await $nacelle.data.allProducts();
    return {
      props: { space, products }
    };
  } catch (err) {
    console.error(`Error fetching products on homepage:\n${err}`);
  }
}
