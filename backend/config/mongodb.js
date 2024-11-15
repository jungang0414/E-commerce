// 這裡用來與資料庫溝通
import mongoose from "mongoose";

const connectDB = async () => {

    // 監聽 connected 事件, 當 connected 事件被觸發後會執行 console.log 函數
    mongoose.connection.on('connected', () => {
        console.log('DB Connected');
    })

    // 連線資料庫
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)

}

export default connectDB;