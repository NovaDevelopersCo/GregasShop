import React from 'react';
import { Cart, BackToTopButton, MainGui, Search } from './components';
import { useLocation } from 'react-router-dom';
export const Header = () => {
  const location = useLocation();
  return (
    <>
      <BackToTopButton />
      <MainGui />
    </>
  );
};
