import { createContext } from "react";
import { products } from "../assets/assets";
// 用於創建一個 Context 對象，
// 這個對象可以在組件樹中傳遞數據，而不需要逐層傳遞 props
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = { products, currency, delivery_fee };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
