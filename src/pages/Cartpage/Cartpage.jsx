import styles from './Cartpage.module.scss'; // модульность css
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, selectCart } from '../../redux/slices/cart/CartSlice';
import { CartEmpty } from './CartEmtry/CartEmpty';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Cartpage = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const clearCart = () => {
    toast.promise(
      new Promise((resolve) => {
        if (items.length === 0) {
          toast.error('Корзина уже пуста');
          resolve();
          return;
        }
        toast.promise(dispatch(clearItems()), {
          loading: 'Очистка...',
          success: 'Корзина очищена',
          error: 'Ошибка при очистке корзины',
        });
        resolve();
      })
    );
  };


  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className={styles.Wrapper}>
      <div className="content">
        <div className={styles.Top}>
          <span className={styles.title}>Корзина</span>
          <Link to="/">
            {' '}
            <span className={styles.back}>Вернуться назад</span>{' '}
          </Link>
        </div>
        <div className={styles.Sidebox}>
          <div className={styles.CartName}>Ваша корзина</div>
          <div className={styles.WrapperSum}>
            <div className={styles.sumItem}>Товары </div>
            <div className={styles.sumPrice}>
              {' '}
              <b>{totalPrice}₽</b>
            </div>
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
    </div>
  );
};
