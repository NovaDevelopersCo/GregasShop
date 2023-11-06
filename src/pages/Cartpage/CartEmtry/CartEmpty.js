import React from 'react';
import { Link } from 'react-router-dom';
import "./CartEmpty.scss";
import cartEmptyImg from '../../../assets/images/empty-cart.png';

export const CartEmpty= () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая
    </h2>
    <p>
      Вероятней всего, вы не заказывали товар.
      <br />
      Для того, чтобы заказать товар, перейди на главную страницу.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);