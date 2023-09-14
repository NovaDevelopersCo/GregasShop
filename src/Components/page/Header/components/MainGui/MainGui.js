import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import LogoImage from '../../../../../assets/images/LogoMain.png';
import classNames from 'classnames';
import { Catalog } from '../Catalog/Catalog';
import { Link } from 'react-router-dom';
export const MainGui = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = classNames(styles.MainWrapper, {
    [styles.sticky]: isSticky,
  });

  return (
    <header className={headerClasses}>
      <div className={styles.MainLogo}>
        <Link to="/home">
          <img src={LogoImage}></img>
        </Link>
      </div>
      <ul className={styles.MenuWrapper}>
        <li>
          <Link to="/collection">
            Коллекции
          </Link>
        </li>
        <li>
          <Link to="/home" >
            Хиты
          </Link>
        </li>
        <li>
          <Link to="/home" >
            Sale
          </Link>
        </li>
        <li>
          <Link to="/home" >
            Новые поступления
          </Link>
        </li>
      </ul>
    </header>
  );
};
