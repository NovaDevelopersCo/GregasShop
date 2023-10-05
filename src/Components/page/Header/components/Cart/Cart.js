import React, { useState } from 'react';
import './Cart.scss'; 
import { FaShoppingCart } from 'react-icons/fa'; 

const Cart = () => {
  const [items, setItems] = useState([]); 
  
  const addToCart = (product) => {
    setItems([...items, product]);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  // Обработчик события для клика по корзине
  const handleCartClick = () => {
    // Здесь можно добавить действия, которые выполняются при клике на корзину
    // Например, переход на страницу с подробностями корзины (вместо)
    alert('Кликнули по корзине!');
  };

  return (
    <div className="cart" onClick={handleCartClick}>
      <FaShoppingCart className="cart-icon" />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.price} руб.</li>
        ))}
      </ul>
      <p> {calculateTotal()} руб.</p>
    </div>
  );
};

export default Cart;

