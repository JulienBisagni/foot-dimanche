import React from 'react';
import loadable from '@loadable/component';
import { graphql } from 'gatsby';

import { useSearch } from '../hooks/useSearch';
import { getListFromTwoArrays } from '../utils/getters';

const SEO = loadable(() => import('../components/SEO'));
const Grid = loadable(() => import('../components/Grid'));

export default function Home({ data }) {
  const articles = data.articles.nodes;
  const products = data.products.nodes;
  console.log(products);
  const { list } = useSearch(getListFromTwoArrays(articles, products));

  return (
    <>
      <SEO />
      <Grid list={list} />
    </>
  );
}

export const pageQuery = graphql`
  query {
    articles: allShopifyArticle {
      nodes {
        handle
        publishedAt
        title
        contentHtml
        gatsbyPath(filePath: "/blog/{shopifyArticle.handle}")
        image {
          src
        }
      }
    }
    products: allShopifyProduct {
      nodes {
        id
        handle
        description
        availableForSale
        tags
        title
        gatsbyPath(filePath: "/products/{shopifyProduct.handle}")
        variants {
          price
          title
        }
        productType
        images {
          originalSrc
        }
      }
    }
  }
`;
