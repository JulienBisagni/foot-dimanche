import React from 'react';

import './src/styles/app.scss';
import { QueryParamProvider } from 'use-query-params';
import { SearchProvider } from './src/hooks/useSearch';
import StoreProvider from './src/providers/StoreProvider';

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <QueryParamProvider>
      <SearchProvider>{element}</SearchProvider>
    </QueryParamProvider>
  </StoreProvider>
);
