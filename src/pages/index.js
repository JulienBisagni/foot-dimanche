import React from 'react';
import loadable from '@loadable/component';

const SEO = loadable(() => import('../components/SEO'));

export default function Home({ data }) {
  return (
    <>
      This is foot-dimanche site
      <SEO />
    </>
  );
}
