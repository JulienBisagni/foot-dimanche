import React, { useRef } from 'react';
import loadable from '@loadable/component';

import { useSearch } from '../hooks/useSearch';

const Icon = loadable(() => import('../components/Icon'));

export default function Searchbar() {
  const inputRef = useRef();
  const {
    expanded,
    query,
    handleClickSearch,
    handleChangeSearch,
  } = useSearch();

  const handleClick = () => {
    handleClickSearch();
    if (expanded) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`searchbar ${expanded ? '--active' : ''}`}>
      <input
        ref={inputRef}
        type='text'
        className='searchbar__input'
        value={query}
        onChange={(e) => handleChangeSearch(e)}
      />
      <button type='button' onClick={handleClick} className='btn --icon'>
        <Icon icon='search' additionalClassName='searchbar__icon' />
      </button>
    </div>
  );
}
