import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cart/CartSlice';
import { addItem, minusItem, removeItem } from '../../redux/slices/cart/CartSlice';
import styles from './Cartpage.module.scss'; // модульность css
import { Link } from 'react-router-dom';
import React from 'react';

const CartItem = ({ id, title, price, count, image, totalCount }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(selectCart);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
        price,
        count,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Удалить это?')) {
      const updatedItems = items.filter(item => item.id !== id);
      const json = JSON.stringify(updatedItems);
      localStorage.setItem('cart', json);
      dispatch(removeItem(id));
    }
  };

  console.log('Rendering CartItem:', { id, title, price, count, image, totalCount });

  return (
    <div className={styles.itemCart}>
      <Link to={`/product/${id}/${encodeURIComponent(title)}/${price}/${encodeURIComponent(image)}/${id}`}>
        <img className={styles.CartImage} src={image}></img>
      </Link>
      <div className={styles.price}>{price * count}₽</div>
      <div className={styles.title}>
        {title} ({count}){' '}
      </div>
      <div className={styles.CountBox}>
        <button onClick={onClickPlus} className={styles.btn}>
          {' '}
          +{' '}
        </button>
        <div>{count}</div>
        <button onClick={count > 1 ? onClickMinus : onClickRemove} className={styles.btn}>
          {' '}
          -{' '}
        </button>
      </div>
      <div className={styles.removeBox} onClick={onClickRemove}>
        <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
