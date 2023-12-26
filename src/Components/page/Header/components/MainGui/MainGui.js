import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import LogoImage from '../../../../../assets/images/LogoMain.png';
import { Link, useLocation } from 'react-router-dom';
import { Search, Cart } from '../index';
import user from '../../../../../assets/images/user.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { logout, selectIsAuth, fetchAuthMe, initializeAuth} from '../../../../../redux/slices/auth';
import toast from 'react-hot-toast';

export const MainGui = ({ searchValue, setSearchValue }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    // Инициализация состояния аутентификации при загрузке компонента
    dispatch(initializeAuth());
  }, [dispatch]);

  
  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      toast.error("Вы вышли из аккаунта")
    }
  };
  const handleItemClick = () => {
    setShow(false);
  };
  
  return (
    <header className={styles.MainWrapper}>
      <div className={styles.Headerbox}>
        <Link to="/">
          <img className={styles.GregaLogo} src={LogoImage} alt="Logo"></img>
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
            <Link to="/sales" className={styles.itemText}>
              Скидки
            </Link>
          </div>
          <div className={styles.Item}>
            <Link to="/" className={styles.itemText}>
              Новинки
            </Link>
          </div>
          <div className={styles.ItemNav}>
            <ul className={show ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
              <div className={styles.NavList}>
              <li>
                <Link to="/catalogpage" onClick={handleItemClick}>Каталог</Link>
              </li>
              <li>
                <Link to="/all" onClick={handleItemClick}>ALL</Link>
              </li>
              <li>
                <Link to="/hits" onClick={handleItemClick}>Хиты</Link>
              </li>
              <li>
                <Link to="/sales" onClick={handleItemClick}>Скидки</Link>
              </li>
              <li>
                <Link to="/" onClick={handleItemClick}>Новинки</Link>
              </li>
            </div>
            </ul>
            <div onClick={() => setShow(!show)} className={styles.mobileBtn}>
              {show ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
            </div>
          </div>
          <Search className={styles.search} searchValue={searchValue} setSearchValue={setSearchValue} />


          {isAuth ? (
            <>
              <Button onClick={onClickLogout} className={styles.signOut}>
                Выйти
              </Button>
              <Link to="/userpage">
                <img src={user} className={styles.user} alt="User" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button className={styles.sign}>Войти</Button>
              </Link>
              <Link to="/register">
                <Button className={styles.signUp}>Регистрация</Button>
              </Link>
            </>
          )}

          {location.pathname !== '/Cartpage' && <Cart />}
        </div>
      </div>
    </header>
  );
};
