import React from 'react'

const galleryStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(22em, 1fr))',
  marginLeft: '0',
  gridRowGap: '2em',
  justifyItems: 'center',
  justifyContent: 'center'
}

const ProductGallery = ({ children }) => (
  <div css={galleryStyles}>{children}</div>
)

export default ProductGallery
