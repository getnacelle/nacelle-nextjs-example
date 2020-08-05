import React from 'react'
import useCollection from 'hooks/use-collection'
import $nacelle from 'services/nacelle.js'
import { ProductGallery, ProductCard, Sections } from 'components'

const Collection = ({ collection, page }) => {
  const products = useCollection(collection)
  return (
    <>
      {page && <Sections sections={page.sections} />}
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
  let collection, page
  
  try {
    collection = await $nacelle.data
      .collection({
        handle: params.handle
      })
  } catch {
    console.warn(`Problem fetching collection data for collection page with handle '${params.handle}'`)
  }

  try {
    page = await $nacelle.data
      .page({
        handle: params.handle
      })
  } catch {
    console.warn(`Problem fetching page data for collection page with handle '${params.handle}'`)
  }

  return {
    props: { collection, page: page || null }, // will be passed to the page component as props
  }
}
