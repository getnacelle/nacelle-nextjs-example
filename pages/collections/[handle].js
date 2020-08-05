import React from 'react'
import useCollection from 'hooks/use-collection'
import $nacelle from 'services/nacelle.js'
import { ProductGallery, ProductCard, Sections } from 'components'

const Collection = ({ collection, page }) => {
  const products = useCollection(collection)
  return (
    <>
      <Sections sections={page.sections} />
      <ProductGallery>
        {products.map(product => (
          <ProductCard product={product} key={product.id} linkToPDP />)
        )}
      </ProductGallery>
    </>
  )
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
      fallback: false
    };
  } catch(err) {
    console.error(`Error fetching collections on collection PLP:\n${err}`)
  }  
}

export async function getStaticProps({ params }) {
  const collection = await $nacelle.data.collection({
    handle: params.handle
  })

  const page = await $nacelle.data.page({
    handle: params.handle
  })

  return {
    props: { collection, page }, // will be passed to the page component as props
  }
}
