import React from 'react';
import loadable from '@loadable/component';

import { useSearch } from '../hooks/useSearch';

const Card = loadable(() => import('../components/Card'));

export default function Articles({ articles }) {
  const { list } = useSearch(articles);
  return (
    <div className='articles'>
      {list?.map((article) => (
        <Card key={article.id} data={article} />
      ))}
    </div>
  );
}
