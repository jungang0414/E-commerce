import { createContext, useState } from "react";
import { products } from "../assets/assets";
// 用於創建一個 Context 對象，
// 這個對象可以在組件樹中傳遞數據，而不需要逐層傳遞 props
export const ShopContext = createContext();

// 這裡的函數組件定義了共享的狀態變量,
// 並將這些變量透過 value 屬性傳遞給需要共享的子組件
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  // 搜尋的共享狀態, 透過 value 傳遞給子組件
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
