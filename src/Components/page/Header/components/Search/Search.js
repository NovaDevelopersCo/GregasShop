import React from 'react';
import './Search.scss';
import { useSearch } from '../../../../../hooks/context/SearchContext';
export const Search = () => {
  const { searchValue, setSearchValue } = useSearch();
  return (
    <div className="nav-container">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="search-input"
        placeholder="    Search..."
        type="search"
      />
    </div>
  );
};
