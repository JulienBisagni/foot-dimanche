import React from 'react';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';

const Product = loadable(() => import('../../components/Product'));

export default function ProductPage({ data }) {
  const product = data.shopifyProduct;

  return (
    <>
      <Product product={product} />
    </>
  );
}

export const query = graphql`
  query($id: String) {
    shopifyProduct(id: { eq: $id }) {
      id
      handle
      description
      availableForSale
      tags
      title
      variants {
        id
        shopifyId
        price
        title
      }
      productType
      images {
        originalSrc
      }
    }
  }
`;
