import React from 'react';
import { Cart, BackToTopButton, MainGui, Search, Catalog, BreadCrumbs } from './components';
// import { BreadCrumbs } from './components/BreadCrumbs';

export const Header = ({searchValue, setSearchValue}) => {
  return (
    <>

      <BackToTopButton />
      <Cart/>
      <MainGui />
      <Search  searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Catalog />
      <BreadCrumbs />
    </>
  );
};
