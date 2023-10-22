import React from 'react';
import './Search.scss';
import debounce from 'lodash.debounce';
import { useSearch } from '../../../../../hooks/context/SearchContext';


export const Search = () => {
  const [value, setValue] = React.useState()
  const {setSearchValue } = useSearch("");
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };


  const updateSearchValue = React.useCallback(
    debounce((str) => {
    setSearchValue(str);
  },450), //Задержка для оптимизированного поиска!
  [],
  );


  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className="nav-container">
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="search-input"
        placeholder="Search..."
      />
      {value && (
        <svg onClick={onClickClear} className="clearIcon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};
