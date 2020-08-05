import $nacelle from 'services/nacelle.js'

const Collection = ({ collection }) => {
  return <pre>{JSON.stringify(collection)}</pre>;
};

export default Collection

export async function getStaticPaths() {
  try {
    const collections = await $nacelle.data.allCollections()
    return {
      paths: collections.map(collection => {
        const { handle } = collection
        return { params: { handle }}
      }),
      fallback: false // See the "fallback" section below
    };
  } catch(err) {
    console.error(`Error fetching collections on collection PLP:\n${err}`)
  }  
}

export async function getStaticProps({ params }) {
  const collection = await $nacelle.data.collection({
    handle: params.handle
  });
  return {
    props: { collection }, // will be passed to the page component as props
  }
}
