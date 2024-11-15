// 定義資料庫模型
import mongoose from "mongoose";

//定義模式, 描述集合中的文檔結構
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
})

// 當資料中有 product 模型則執行
// 沒有則使用定義的模式建立名為 product 模型 
const productModel = mongoose.model.product || mongoose.model("product", productSchema);

export default productModel;