import $nacelle from 'services/nacelle';

const Product = ({ product }) => {
  return <pre>{JSON.stringify(product)}</pre>;
};

export default Product

export async function getStaticPaths() {
  try {
    const products = await $nacelle.data.allProducts()
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
  const product = await $nacelle.data.product({ handle: params.handle });

  return {
    props: { product } // will be passed to the page component as props
  };
}
