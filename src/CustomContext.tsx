import { createContext } from "react";

export interface ShoppingCartDatatype {
  name: string;
  img: string;
  price: number;
  quantity: number;
}

export const ShoppingCartContext = createContext<{
  shoppingCart: ShoppingCartDatatype[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartDatatype[]>>;
}>({
  shoppingCart: [],
  setShoppingCart: () => {},
});
