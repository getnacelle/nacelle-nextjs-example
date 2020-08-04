import React from 'react';
import NacelleClient from '@nacelle/client-js-sdk';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>

      <main>
        <Link href="/products/alonso-shoes">
          <a>Alonso Shoes</a>
        </Link>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const settings = {
    id: 'rude-parrot-iBiKZQDPOa',
    token: '8638f8ca-4934-436e-80bd-851a710abc04',
    locale: 'en-us',
    staticBasePath:
      'https://nacelle-demo-sites-git-feature-dash-dash.nacelle.vercel.app/',
    nacelleEndpoint: 'https://hailfrequency.com/v2/graphql'
  };

  const client = new NacelleClient(settings);
  const space = await client.data.space();
  // const product = await client.data.product({ handle: 'tanja-heel-sandals' });
  const product = await client.data.products({
    handles: ['alonso-shoes']
  });

  console.log(product);

  return {
    props: { space, product }
  };
}
