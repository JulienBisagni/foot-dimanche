import React from 'react';
import loadable from '@loadable/component';

const Card = loadable(() => import('./Card'));

export default function Grid({ list }) {
  return (
    <div className='grid'>
      {list.map((element) => (
        <Card
          key={element.handle}
          title={element.title}
          tags={element.tags}
          img={
            element.images ? element.images[0].originalSrc : element.image.src
          }
          linkTo={element.gatsbyPath}
        />
      ))}
    </div>
  );
}
