// 處理與使用者相關路由

import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

// 創建路由器實例
const userRouter = express.Router();

// 定義具體路由, 將不同的請求映射到相應的控制器函數
userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/admin', adminLogin);

export default userRouter;