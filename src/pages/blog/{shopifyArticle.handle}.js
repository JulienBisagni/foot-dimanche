import React from 'react';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';

const Post = loadable(() => import('../../components/Post'));

export default function BlogArticlePage({ data }) {
  const post = data.shopifyArticle;

  return (
    <>
      <Post post={post} />
    </>
  );
}

export const query = graphql`
  query($id: String) {
    shopifyArticle(id: { eq: $id }) {
      title
      handle
      contentHtml
      publishedAt
      image {
        src
      }
    }
  }
`;
