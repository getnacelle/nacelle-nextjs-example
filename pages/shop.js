import NacelleClient from '@nacelle/client-js-sdk';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Shop({ products }) {
  return (
    <div className={styles.container}>
      <Head></Head>
      <main>
        {products.map(product => {
          const { id } = product
            return (
              <Link href={`/products/${product.handle}`}>
                <a>{product.handle}</a>
              </Link>
            )
        })}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const settings = {
    id: 'rude-parrot-iBiKZQDPOa',
    token: '8638f8ca-4934-436e-80bd-851a710abc04',
    locale: 'en-us',
    staticBasePath:
      'https://nacelle-demo-store-data.s3.amazonaws.com/',
    nacelleEndpoint: 'https://hailfrequency.com/v2/graphql'
  };

  const client = new NacelleClient(settings);
  const space = await client.data.space();

  try {
    const products = await client.data.allProducts()
    return {
      props: { space, products }
    };
  } catch(err) {
    console.error(`Error fetching products on homepage:\n${err}`)
  }
}
