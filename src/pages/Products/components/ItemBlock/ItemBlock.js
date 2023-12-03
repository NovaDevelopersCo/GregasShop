import React from 'react';
import './ItemBlock.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../../../redux/slices/CartSlice';
import { selectCartItemById } from '../../../../redux/slices/itemSlice';

export const ItemBlock = ({ title, price, image,viewsCount, id }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = { id, title, price, image };

    dispatch(addItem(item));
  };

  return (
    <div className="ItemBlock">
      <div className="NewPhotos">
        <Link to={`/product/${id}/${encodeURIComponent(title)}/${price}/${encodeURIComponent(image)}/${id}`}>
          <div className="Item-container">
            <div className="image-container">
              <img className="image-item" key={image} src={image} alt="Product 1" />
            </div>
            <p className="ItemBlockParag">
              <a key={title} href="/home/" className="link">
                {title}
              </a>
              <a href="/home/"></a>
              <p key={price} className="Price">
                {price}₽
              </p>
              <p className="Stock">
                В наличии: <b>666</b>
                <div className="line"></div>
                <p className="Sold">
                  Продано за месяц: <b>{viewsCount} шт</b>
                </p>
              </p>
            </p>
          </div>
        </Link>
      </div>

      {addedCount > 0 ? (
        <button
          type="button"
          className="addtoButton-active"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          <span onClick={onClickAdd} className="ScoreBtn">
            Добавлено ({addedCount})
          </span>
        </button>
      ) : (
        <button type="button" className="addtoButton" data-toggle="button" aria-pressed="false" autocomplete="off">
          <span onClick={onClickAdd} className="ScoreBtn">
            В корзину
          </span>
        </button>
      )}
    </div>
  );
};
