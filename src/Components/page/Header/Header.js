import React from 'react';
import { Cart, Favorite, UserProfile,Locate, BackToTopButton, MainGui, Search, Catalog } from './components';

export const Header = () => {
  return (
    <>
      <Locate />
      <BackToTopButton />
      <Cart/>
      <Favorite/>
      <UserProfile/>
      <MainGui />
      <Search />
      <Catalog />
    </>
  );
};
