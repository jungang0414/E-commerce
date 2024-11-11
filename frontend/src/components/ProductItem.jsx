// 組件將顯示產品的圖片、名稱和價格，
// 並且當用戶點擊該項目時，會導航到相應的產品詳情頁面。

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

// 組件接收傳遞過來的資料並顯示
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 curcor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          // 當滑鼠懸停時將元素放大110%
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
