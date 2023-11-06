import React from 'react';
import { Header } from '../../Components';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../Components';
import './BaseLayout.scss';
import { SearchProvider } from '../../hooks/context/SearchContext';

export const BaseLayout = () => {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
    </div>
  );
};
