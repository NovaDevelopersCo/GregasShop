// ItemBlock.jsx

import React from 'react';
import './ItemBlock.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addItem } from '../../../../redux/slices/cart/CartSlice';
import { selectCartItemById } from '../../../../redux/slices/itemSlice';

export const ItemBlock = ({ title, price, image, viewsCount, _id,  sale, oldPrice }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(_id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = { _id, title, price, image, sale, oldPrice };
    dispatch(addItem(item));
    toast.success('Товар добавлен в корзину');
  };

  return (
    <div className="ItemBlock">
      <Link to={`/itm/${_id}`} className="ItemLink">
        <div className="ItemImageContainer">
          <img className="ItemImage" src={image} alt={title} />
        </div>
        <div className="ItemDetails">
          <p className="ItemTitle">{title}</p>
          <div className="PriceWrapper">
            <p className="ItemPrice">{price}₽</p>
            {sale && <p className="OldPrice">{oldPrice}₽</p>}
          </div>
          <p className="ItemStock">В наличии: <b>666</b></p>
          <p className="ItemSold">Продано за месяц: <b>{viewsCount} шт</b></p>
        </div>
      </Link>

      <button
        type="button"
        className={`AddToCartButton ${addedCount > 0 ? 'active' : ''}`}
        onClick={onClickAdd}
      >
        {addedCount > 0 ? `Добавлено (${addedCount})` : 'В корзину'}
      </button>
    </div>
  );
};
