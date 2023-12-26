import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { Search, Cart } from '../index';

function Navigation({ searchValue, setSearchValue }) {
  return (
    
    <div className={styles.navbar}>
        
      <div className={`${styles.container} ${styles.navContainer}`}>
      <input className={styles.checkbox} type="checkbox"  />
        <div className={styles.hamburgerLines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <ul className={styles.menuItems}>
        
          <li>
            <Link to="/catalogpage">Каталог</Link>
          </li>
          <li>
            <Link to="/all"> ALL</Link>
          </li>
          <li>
            <Link to="/hits">Хиты</Link>
          </li>
          <li>
            <Link to="/sales">Скидки</Link>
          </li>
          <li>
            <Link to="/">Новинки</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
