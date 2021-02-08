import React, { useState, useEffect, useContext } from 'react';

export const SearchContext = React.createContext({});

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (initialList = []) => {
  const { query, setQuery } = useContext(SearchContext);

  const [expanded, setExpanded] = useState(false);
  const [list, setList] = useState(initialList);

  const handleClickSearch = () => {
    setExpanded(!expanded);
    setQuery('');
  };
  const handleChangeSearch = (e) => {
    setQuery(e.currentTarget.value);
  };

  useEffect(() => {
    const isQueryInTitle = (title) => title.toLowerCase().includes(query);
    const isQueryInTags = (tags) =>
      tags?.some((tag) => tag.toLowerCase().includes(query));
    const filterList = () => {
      !query
        ? setList(initialList)
        : setList(
            initialList.filter(
              (element) =>
                isQueryInTitle(element.title) || isQueryInTags(element.tags)
            )
          );
    };
    filterList();
  }, [query]);

  return {
    list,
    expanded,
    query,
    handleClickSearch,
    handleChangeSearch,
  };
};
