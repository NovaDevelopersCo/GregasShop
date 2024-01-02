import React from 'react';
import { Header, Footer } from '../../Components';
import { Outlet } from 'react-router-dom';
import './BaseLayout.scss';
import { SearchProvider } from '../../hooks/context/SearchContext';
import ScrollToTop from '../../hooks/ScrollToTop';

export const BaseLayout = () => {
  return (
    <div className='App'>
      <SearchProvider>
        <div className='HeaderWrapper'>
          <Header />
        </div>
        <ScrollToTop />
        <Outlet />
        <Footer />
      </SearchProvider>
    </div>
  );
};
