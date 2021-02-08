import React from 'react';
import { Link } from 'gatsby';

import loadable from '@loadable/component';

const Tag = loadable(() => import('./Tag'));
const Image = loadable(() => import('./Image'));

export default function Card({ img, tags = [], title, linkTo = '/' }) {
  return (
    <Link to={linkTo} className='card'>
      <Image img={img} additionalClassNames='card__image' />
      <div className='card__content'>
        <div className='card__tags tags'>
          {tags?.slice(0, 3).map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className='card__title'>{title}</div>
      </div>
    </Link>
  );
}
