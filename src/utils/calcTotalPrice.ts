import { CartItem } from '../redux/slices/cart/type';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
export const calcTotalSale = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.oldPrice * obj.count + sum, 0);
};
