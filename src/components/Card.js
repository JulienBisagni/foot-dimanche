import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import loadable from '@loadable/component';

const Tag = loadable(() => import('./Tag'));

export default function Card({ data }) {
  return (
    <Link to='/' className='card'>
      {data.image && (
        <Img
          fluid={data.image.fluid}
          alt={data.image?.description}
          className='card__image'
        />
      )}
      <div className='card__content'>
        <div className='card__tags tags'>
          {data.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className='card__title'>{data.title}</div>
      </div>
    </Link>
  );
}
