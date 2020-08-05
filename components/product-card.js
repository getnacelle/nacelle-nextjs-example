import React from 'react'
import Link from 'next/link'

function formatPrice(product, price) {
  return new Intl
    .NumberFormat(product.locale, { style: 'currency', currency: product.priceRange.currencyCode })
    .format(price)
}

const LinkPDP = ({ linkToPDP, children }) => {
  if (linkToPDP) {
    return (
      <Link href={linkToPDP}>
        <a>{children}</a>
      </Link>
    )
  } else {
    return children
  }
}

const ProductCard = ({ product, linkToPDP }) => {
  const minPrice = formatPrice(product, product.priceRange.min)
  const maxPrice = formatPrice(product, product.priceRange.max)
  const price = product.priceRange.min === product.priceRange.max
    ? minPrice
    : `$${minPrice} - $${maxPrice}`

  return (
    <article>
      <LinkPDP linkToPDP={linkToPDP ? `/products/${product.handle}` : null}>
        <>
          <picture>
            <img src={product.featuredMedia.src} css={{width: '300px'}} />
          </picture>
          <h4>{product.title}</h4>
          <p>{price}</p>
        </>
      </LinkPDP>
    </article>
  )
}

export default ProductCard
