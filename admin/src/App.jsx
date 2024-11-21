import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 後端API
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  // 令牌狀態
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  // 當依賴數組 token 變更則執行 useEffect 中的依賴函數 將 token 儲存到本地
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {/* 這裡使用三元運算子 
      當 token 為空值時顯示登入組件
      反之若是有 token 值則顯示後端頁面 */}
      {token === "" ? (
        // 這裡將 setToken函數傳遞給 Login 組件使用
        // 在 Login 組件中設定 Token
        <Login setToken={setToken} />
      ) : (
        <>
          {/* 將setToken函數傳遞 來重設 token 為空值使其登出 */}
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                {/* 傳遞 token 來驗證管理員身分 */}
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
