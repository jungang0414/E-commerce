import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
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

  // 購物車的共享狀態 這裡用的是物件
  // 目的是因為商品可能會有不同的規格, 而這些不同的規格可以使用物件的鍵值來表示
  const [cartItems, setCartItems] = useState({});

  // 將商品加入購物車 記住商品狀態所選規格 itemId, size
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("請選擇商品規格");
      return;
    }

    // 將cartItems深拷貝, 創建完全獨立的副本
    // 這樣在修改cartDate的時候就不會影響到原始的cartItems
    let cartDate = structuredClone(cartItems);

    if (cartDate[itemId]) {
      if (cartDate[itemId][size]) {
        cartDate[itemId][size] += 1;
      } else {
        cartDate[itemId][size] = 1;
      }
    } else {
      cartDate[itemId] = {};
      cartDate[itemId][size] = 1;
    }

    setCartItems(cartDate);
  };

  // 取得購物車數量
  const getCartCount = () => {
    // 這裡會返回一個陣列 (cartItems 物件中所有值)
    // 並使用 reduce 遍歷陣列將每個商品總數從0開始累加到 totalCount
    return Object.values(cartItems).reduce((totalCount, product) => {
      return (
        totalCount +
        // 這裡會返回一個陣列 (每個商品中所有規格的數量)
        // 並使用 reduce 遍歷陣列將每個規格的數量從0開始累加到 itemCount
        Object.values(product).reduce((itemCount, quantity) => {
          // 最後將每個商品的總數加起來
          return itemCount + quantity;
        }, 0)
      );
    }, 0);
  };

  // 更新購物車數量
  const updateQuantity = async (itemId, size, quantity) => {

    // 深拷貝 cartItems 創建副本
    let cartData = structuredClone(cartItems);

    // 利用物件的鍵值來更新對應的值
    cartData[itemId][size] = quantity;

    // 更新 cartItems 
    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
