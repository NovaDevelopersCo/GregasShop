import React from 'react';
import { Cart, BackToTopButton, MainGui, Search, Catalog, BreadCrumbs } from './components';
// import { BreadCrumbs } from './components/BreadCrumbs';

export const Header = ({searchValue, setSearchValue}) => {
import { Cart, BackToTopButton, MainGui, Search } from './components';
import { useLocation } from 'react-router-dom';
export const Header = () => {
  const location = useLocation();
  return (
      <BackToTopButton />
      <MainGui />
      <Search  searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Catalog />
      <BreadCrumbs />
    </>
  );
};
