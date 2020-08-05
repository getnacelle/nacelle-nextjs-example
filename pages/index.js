import $nacelle from 'services/nacelle';
import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout/Layout';

const circleStyle = {
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: 'darkorange'
};

function ProductEntry({ product }) {
  return (
    <li>
      <Link href={`/products/${product.handle}`}>
        <a>{product.handle}</a>
      </Link>
    </li>
  );
}

export default function Home({ products, space }) {
  console.log({ space });
  return (
    <Layout space={space}>
      <div>
        <div css={circleStyle} />
        <br />
        <ul>
          {products.map((product) => (
            <ProductEntry product={product} key={product.id} />
          ))}
        </ul>
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
