import React from 'react';
import loadable from '@loadable/component';

const Tag = loadable(() => import('./Tag'));
const Image = loadable(() => import('./Image'));

export default function Post({ post }) {
  const { title, contentHtml, image, tags, publishedDate } = post;
  return (
    <div className='post'>
      {tags?.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
      <Image img={image} additionalClassNames='post__image' />
      <h2 className='post__title'>
        {title} - <small>{publishedDate}</small>
      </h2>
      <div
        className='post__description'
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      />
    </div>
  );
}
