import React from 'react';
import loadable from '@loadable/component';

const SEO = loadable(() => import('../components/SEO'));
const Articles = loadable(() => import('../components/Articles'));

export default function Home({ data }) {
  const articles = data.allContentfulBlogPost.nodes;
  return (
    <>
      <SEO />
      <Articles articles={articles} />
    </>
  );
}

export const pageQuery = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        title
        tags
        slug
        id
        contentful_id
        updatedAt
        image {
          description
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;
