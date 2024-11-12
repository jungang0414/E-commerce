import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  // 取得共享狀態
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  // 抓取當前網頁路徑
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // 當路徑改變時 檢查路徑內是否包含 collection 字符
  // 當包含則將 visible 設為 true 否則 false
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // 當兩個條件都符合時才會顯示, 否則 null
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="search icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="cross icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
