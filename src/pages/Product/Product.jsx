import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Product.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import './Product1.js';
import { addItem, minusItem } from '../../redux/slices/CartSlice.js';
import { selectCartItemById } from '../../redux/slices/itemSlice.js';

export const Product = () => {
  const dispatch = useDispatch();

  const { productId, title, price, image, id } = useParams();
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  // const [count, setCount] = useState(0);
  
  const addToCart = () => {
    const item = { price, id, title, image };
    dispatch(addItem(item));
  };
  const removeFromCart = () => {
    const item = { price, id, title, image };
    dispatch(minusItem(id));
  };


  return (
    <div>
      <h3 className={style.TitleBox}> {title} </h3>
      <div className={style.ProductBox}>
        <br></br>
        <img className={style.ProductImage} src={image} alt={`Изображение ${title}`} />
        {/* Add more images as needed */}

        <div className={style.PriceBox}>
          <p className={style.PriceTag}>

            Цена:<b className={style.price}> {price} ₽</b>{' '}
          </p>
          <p className={style.OrderDate}>

            <b>доставка 5 дней</b>
          </p>
          <div className={style.addButton}>
            <button className={style.addtocart} onClick={addToCart}>
               в корзину
              {addedCount>0? <b>: {addedCount} </b>:null}
            </button>
            {addedCount>0? <button className={style.MinusCart} onClick={removeFromCart}>
               -
            </button>:null }
          </div>
        </div>
        <br></br>
        <div className={style.ProductDetails}>
          <div className={style.ProductDetailsList}>
            <p>
              <b className={style.ProductDetailsItem}>В наличии 368</b>{' '}
            </p>
            <p>
              <b className={style.ProductDetailsItem}>Продано за месяц 666</b>
            </p>
            <p>
              <b className={style.ProductDetailsItem}>Минимальная сумма заказа 9 999</b>
            </p>
          </div>
          <div className={style.Sales}>
            <p className={style.SalesItem}> Скидка от 50 000 - 3% </p>
            <p className={style.SalesItem}> Скидка от 100 000 - 5% </p>
            <p className={style.SalesItem}> Скидка от 200 000 - 10% </p>
          </div>
        </div>
        <div className={style.Description}>
          <h4>Описание</h4>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias dolorum asperiores, similique
            fugiat ipsa voluptate nihil, facere harum vero amet labore quisquam illo veniam beatae porro repudiandae
            repellendus suscipit!
          </p>
        </div>
      </div>
    </div>
  );
};
