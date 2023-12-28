export type CartItem = {
    _id: Object;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }