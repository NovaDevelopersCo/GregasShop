import React from 'react';
import style from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../../../redux/slices/cart/CartSlice';
import cart from '../../../../../assets/images/cart.png';

const Cart = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={style.WrapperCart}>
      <Link to="/Cartpage" className={style.cart}>
        <img src={cart} height="35px" width="35px" />
        <div className={style.count}>{totalCount}</div>
      </Link>
    </div>
  );
};

export default Cart;
