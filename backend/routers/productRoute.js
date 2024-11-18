import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
// 用來驗證管理員的中介軟體
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// 路由會依照順序處理程序, 以/add為例
productRouter.post(
  "/add", // 使用者呼叫api
  adminAuth, // 首先執行中介軟體, 驗證該請求是否來自管理員
  upload.fields([ // 通過驗證才會處理圖片
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProduct);

export default productRouter;
