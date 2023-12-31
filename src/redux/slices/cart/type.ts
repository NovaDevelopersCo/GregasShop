export type CartItem = {
    _id: Object;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
    oldPrice: number;
  };
  
  export interface CartSliceState {
    totalPrice: number;
    totalSale: number;
    items: CartItem[];
  }