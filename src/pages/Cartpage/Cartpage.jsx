import styles from './Cartpage.module.scss'; // модульность css
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/CartSlice';
import { CartEmpty } from './CartEmtry/CartEmpty';
import { Link } from 'react-router-dom';

export const Cartpage = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.CartSlice);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const е = () => {
    if (window.confirm('Отчистить Корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
<<<<<<< HEAD
    <div className={styles.wrapper}>
      <h1>Корзина</h1>
      <div className='cart-name'>Корзина</div>
      <h4>Главная - Корзина</h4>
      <div className='box'>
        <div className='box-line'>вапджыдваоп</div>
        <div className='box-section'>
          <div className='box-img'>вапвап</div>
          <div className='box-name'>ываыва</div>
          <div className='box-pricePerOne'>ываываы</div>
          <div className='box-quantity'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
        </div>
=======
    <div className={styles.Wrapper}>
      <div className={styles.Top}>
        <span className={styles.title}>Корзина</span>
       <Link to="/"> <span className={styles.back}>Вернуться назад</span> </Link>
>>>>>>> main
      </div>
      <div className={styles.Sidebox}>
          <div className={styles.CartName}>Ваша корзина</div>
          <div className={styles.WrapperSum}>
            <div className={styles.sumItem}>Товары ({totalCount})</div>
            <div className={styles.sumPrice}> <b>{totalPrice}₽</b></div>
          </div>
          <div className={styles.BottomSide}>
            <div className={styles.Payment}>Способ оплаты</div>
            <button className={styles.buy}>Перейти к оформлению</button>
          </div>
        </div>
        <div className={styles.CartItems}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        
        
      </div>

  );
};
//<div className={styles.text}>Корзина:</div>
//      <div onClick={onClickClear} className={styles.clearCart}>
//        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//          <path
//            d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
//            stroke="#000000"
//            stroke-width="2"
//            stroke-linecap="round"
//            stroke-linejoin="round"
//          />
//        </svg>
//        Очистить Корзину
//      </div>
//      {
//        items.map(item => <CartItem key={item.id} {...item}/>)
//        }
//      <div className={styles.WrapperSum}>
//        <div className={styles.sumItem}>Всего товаров:{totalCount}</div>
//        <div className={styles.sumPrice}>Сумма заказа: {totalPrice}</div>
//      </div>
//      <div className={styles.WrapperBtn}>
//        <button className={styles.back}>Вернуться назад</button>
//        <button className={styles.buy}>Оформить заказ</button>
//      </div>
