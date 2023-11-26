import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import LogoImage from '../../../../../assets/images/LogoMain.png';
import { Link, useLocation } from 'react-router-dom';
import { Search, Cart } from '../index';
import user from '../../../../../assets/images/user.png';
import Navigation from '../Navigation/Navigation'
export const MainGui = ({ searchValue, setSearchValue }) => {
  const location = useLocation();

  return (
    <header className={styles.MainWrapper}>
      <div className={styles.Headerbox}>
        <Link to="/">
          <img className={styles.GregaLogo} src={LogoImage}></img>
        </Link>
        <div className={styles.menuItems}>
          <div className={styles.Catalog}>
            <Link to="/catalogpage" className={styles.itemText}>
              Каталог
            </Link>
          </div>
          <div className={styles.Item}>
            <Link className={styles.itemText} to="/all">
              ALL
            </Link>
          </div>

          <div className={styles.Item}>
            <Link to="/hits" className={styles.itemText}>
              Хиты
            </Link>
          </div>

          <div className={styles.Item}>
            <Link to="/" className={styles.itemText}>
              Скидки
            </Link>
          </div>

          <div className={styles.Item}>
            <Link to="/" className={styles.itemText}>
              Новинки
            </Link>
          </div>
          
        </div>
        <div className={styles.Navigation}>
          {/*<Navigation searchValue={searchValue} setSearchValue={setSearchValue} />*/}
        </div>
        <Search className={styles.search} searchValue={searchValue} setSearchValue={setSearchValue} />
        {location.pathname !== '/Cartpage' && <Cart />}
        <img src={user} className={styles.user} />
        <span className={styles.sign}>sign in</span>
        
      </div>
    </header>
  );
};
