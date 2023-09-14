import React from 'react';
import './Search.scss';

export const Search = () => {
  return (
    <div className="nav-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <button type="submit" className="Search-submit">
        Искать
      </button>
    </div>
  );
};
