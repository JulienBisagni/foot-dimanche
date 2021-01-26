import React from 'react';

import './src/styles/app.scss';

import { QueryParamProvider } from 'use-query-params';
import { SearchProvider } from './src/hooks/useSearch';

export const wrapRootElement = ({ element }) => (
  <QueryParamProvider>
    <SearchProvider>{element}</SearchProvider>
  </QueryParamProvider>
);
