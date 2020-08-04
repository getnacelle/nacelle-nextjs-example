import React from 'react';
import nacelleClient from '../../services/nacelle';

const Product = ({ product }) => {
  return <pre>{JSON.stringify(product)}</pre>;
};

export default Product;

export async function getStaticPaths() {
  const products = await nacelleClient.data.products({
    handles: ['alonso-shoes'],
  });

  return {
    paths: products.map((product) => {
      const { handle } = product;
      return { params: { handle } };
    }),
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const product = await nacelleClient.data.product({ handle: params.handle });

  return {
    props: { product }, // will be passed to the page component as props
  };
}
