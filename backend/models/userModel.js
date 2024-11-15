import mongoose from "mongoose";

// 定義模式, 描述集合中的文檔結構
// mongoose預設會將模式最小化, 所以空對象會被移除
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, reqired: true, unique: true }, // unique 唯一值
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }, // default 預設值
}, { minimize: false }) // 這裡最小模式設為 false 將空對象保留在資料庫中

// 當資料中有 user 模型則執行
// 沒有則使用定義的模式建立名為 user 模型 
const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;