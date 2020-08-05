import NacelleClient from '@nacelle/client-js-sdk';

const Product = ({ product }) => {
  return <pre>{JSON.stringify(product)}</pre>;
};

export default Product

const settings = {
  id: 'rude-parrot-iBiKZQDPOa',
  token: '8638f8ca-4934-436e-80bd-851a710abc04',
  locale: 'en-us',
  staticBasePath:
    'https://nacelle-demo-store-data.s3.amazonaws.com/',
  nacelleEndpoint: 'https://hailfrequency.com/v2/graphql'
};

const client = new NacelleClient(settings);

export async function getStaticPaths() {
  try {
    const products = await client.data.allProducts()
    return {
      paths: products.map(product => {
        const { handle } = product
        return { params: { handle }}
      }),
      fallback: false // See the "fallback" section below
    };
  } catch(err) {
    console.error(`Error fetching products on homepage:\n${err}`)
  }  
}

export async function getStaticProps({ params }) {
  const product = await client.data.product({
    handle: params.handle
  });
  return {
    props: { product }, // will be passed to the page component as props
  }
}

