import React from 'react';
import { Cart, BackToTopButton, MainGui, Search, Catalog } from './components';
import { useLocation } from 'react-router-dom';
export const Header = ({ searchValue, setSearchValue }) => {
  const location = useLocation();
  return (
    <>
      <BackToTopButton />

      {location.pathname !== '/Cartpage' && <Cart />}
      <MainGui />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Catalog />
    </>
  );
};
