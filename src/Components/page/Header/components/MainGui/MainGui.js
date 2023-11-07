import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import LogoImage from '../../../../../assets/images/LogoMain.png';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const MainGui = () => {
  const location = useLocation();

  return (
    <header className={styles.MainWrapper}>
      <div className={styles.MainLogo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="93" viewBox="0 0 97 93" fill="none">
          <path
            d="M96.0587 46.5C96.0587 71.9051 74.7061 92.5 48.3663 92.5C22.0266 92.5 0.674042 71.9051 0.674042 46.5C0.674042 21.0949 22.0266 0.5 48.3663 0.5C74.7061 0.5 96.0587 21.0949 96.0587 46.5Z"
            fill="#F5F3F4"
          />
        </svg>
        <Link to="/home">
          <img src={LogoImage}></img>
        </Link>
      </div>
      <ul className={styles.MenuWrapper}>
        {location.pathname !== '/collection' ? (
          <li>
            <Link to="/collection">
              <span>Коллекции</span>
            </Link>
          </li>
        ) : (
          <li style={{ background: "white" }}>
            <Link style={{ color: "black" }} to="/collection">
              <span>Коллекции</span>
            </Link>
          </li>
        )}
        <li>
          <Link to="/home">
            <span>Хиты</span>
          </Link>
        </li>
        <li>
          <Link to="/home">
            <span>Скидки</span>
          </Link>
        </li>
        <li>
          <Link to="/home">
            <span>Новое</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};
