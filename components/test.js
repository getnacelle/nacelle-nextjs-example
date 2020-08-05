import React, { Fragment } from 'react';
import useCart from '../hooks/use-cart';

const Test = () => {
  const [{ cart }, cartActions] = useCart();

  const item = {
    id: 'pepper-wood-apparel.myshopify.com::alonso-shoes::en-us',
    handle: 'alonso-shoes',
    locale: 'en-us',
    globalHandle: 'alonso-shoes::en-us',
    pimSyncSourceDomain: 'pepper-wood-apparel.myshopify.com',
    title: 'Alonso Shoes',
    description:
      '<p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p>',
    priceRange: {
      min: '140.0',
      max: '140.0',
      currencyCode: 'USD'
    },
    availableForSale: true,
    tags: ['footwear', 'men'],
    media: [
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTYyODQ5MTgzODI3Mjc=',
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0344/4362/4583/products/pexels-photo-1122605.jpg?v=1587622908&width=100',
        src:
          'https://cdn.shopify.com/s/files/1/0344/4362/4583/products/pexels-photo-1122605.jpg?v=1587622908',
        type: 'image',
        altText: 'Alonso Shoes'
      }
    ],
    metafields: [],
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMzg5NDEyNzQwMzE0Mw==',
      title: 'Default Title',
      price: '140.0',
      priceCurrency: 'USD',
      compareAtPrice: null,
      compareAtPriceCurrency: null,
      swatchSrc: null,
      selectedOptions: [
        {
          name: 'Title',
          value: 'Default Title'
        }
      ],
      featuredMedia: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTYyODQ5MTgzODI3Mjc=',
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0344/4362/4583/products/pexels-photo-1122605.jpg?v=1587622908&width=100',
        src:
          'https://cdn.shopify.com/s/files/1/0344/4362/4583/products/pexels-photo-1122605.jpg?v=1587622908',
        type: 'image',
        altText: null
      },
      sku: null,
      availableForSale: true,
      metafields: [],
      priceRules: null
    },
    indexedAt: 1595961239,
    pimSyncSource: 'shopify',
    pimSyncSourceProductId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ5MTU2OTY0MzUzMzU=',
    productType: null,
    featuredMedia: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTYyODQ5MTgzODI3Mjc=',
      thumbnailSrc:
        'https://cdn.shopify.com/s/files/1/0344/4362/4583/products/pexels-photo-1122605.jpg?v=1587622908&width=100',
      src:
        'https://cdn.shopify.com/s/files/1/0344/4362/4583/products/pexels-photo-1122605.jpg?v=1587622908',
      type: 'image',
      altText: 'Alonso Shoes'
    },
    vendor: 'Prairie Wind Apparel',
    createdAt: 1587622908
  };

  return (
    <Fragment>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <button onClick={() => cartActions.addToCart(item)}>Add To Cart</button>
      <button onClick={() => cartActions.incrementItem(item)}>Increment</button>
      <button onClick={() => cartActions.decrementItem(item)}>Decrement</button>
      <button onClick={() => cartActions.removeFromCart(item)}>
        Remove From Cart
      </button>
    </Fragment>
  );
};

export default Test;
