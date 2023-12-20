import React from 'react';
import styles from './UserPage.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth, selectUserData } from '../../redux/slices/auth';

import { Navigate } from 'react-router-dom';
import EmtryUser from './EmtryUser';
const UserPage = () => {
  const dispatch = useDispatch();


  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchAuthMe(token));
    }
  }, [dispatch]);

  if (!isAuth) {
    return <EmtryUser/>;
  }

  return (
    

    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link to="/">
          <span className={styles.back}>Вернуться назад</span>
        </Link>
        <div className={styles.topTitle}>
          <h1>Личный кабинет</h1>
          <p>Здравствуйте,{userData && userData.Name} добро пожаловать в ваш личный кабинет</p>
        </div>
        <div className={styles.orders}>
          <div className={styles.titleOrders}>
            <div className={styles.subtitle}>Заказы</div>
          </div>
        </div>
        <div className={styles.userData}>
          <div className={styles.userTitle}>
            <div className={styles.subtitle}>Личные данные</div>
          </div>
          <div className={styles.userInfo}>
            <ul className={styles.listInfo}>
              <li><b>{userData && userData.Name} {userData && userData.SecondName} {userData && userData.Patronymic}</b></li>
              <li>{userData && userData.email}</li>
              <li >+ {userData && userData.phone}</li>
            </ul>
            <a href="/userPage">Изменить личные данные</a>
            <br />
            <a href="/userPage">Изменить пароль</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserPage;
