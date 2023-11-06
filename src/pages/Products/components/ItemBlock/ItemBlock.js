import React from 'react';
import './ItemBlock.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../../../redux/slices/CartSlice';

export const ItemBlock = ({ title, price, image, rating, id }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.CartSlice.items.find((obj) => obj.id === id));

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
              <img key={image} src={image} alt="Product 1" />
            </div>
            <p className="ItemBlockParag">
              <a key={title} href="/home/" className="link">
                {title}
              </a>
              <a href="/home/"></a>
              <p className="Stock">
                В Наличии &#10004; 1
                <p className="Sold">
                  Продано За Месяц &#10004; <b className="Rating">{rating}</b>
                </p>
                <p key={price} className="Price">
                  Цена: {price} <span className="ScoreBtn">{addedCount > 0 && <span>{addedCount}</span>}</span>
                </p> 
              </p>
            </p>
          </div>
        </Link>
      </div>
     
      <button
        onClick={onClickAdd}
        type="button"
        class="addtoButton btn-danger"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
      >
        +
      </button>
    </div>
  );
};
