import React from 'react';
import Helmet from 'react-helmet';

export default function SEO({
  title,
  description,
  image,
  url,
  keywords,
  lang,
}) {
  return (
    <Helmet>
      <html lang={lang || 'fr'} />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
}
