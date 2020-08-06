import React from 'react';

const galleryStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(25em, 1fr))',
  marginLeft: '0',
  marginTop: '4em',
  marginBottom: '4em',
  gridRowGap: '10em',
  placeItems: 'center'
};

const ProductGallery = ({ children }) => (
  <div css={galleryStyles}>{children}</div>
);

export default ProductGallery;
