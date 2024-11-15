// 這裡用來與雲端平台溝通
import { v2 as cloudinary } from "cloudinary";

const connectCloundinary = async () => {

    // 連線配置
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });
}

export default connectCloundinary;