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
        <div className='HeaderWrapper'>
          <Header />
        </div>
        <Outlet />
        <Footer />
      </SearchProvider>
    </div>
  );
};
