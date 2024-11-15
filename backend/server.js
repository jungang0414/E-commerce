import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";


// App Config
const app = express();
const port = process.env.PORT || 4000
connectDB();

// middlewares
app.use(express.json()); // 解析 JSON 格式
app.use(cors()); // 跨域共享


// api endpoints
app.get('/', (req, res) => {
    res.send("API Working");
})

// 監聽 port
app.listen(port, () => console.log('Server started on PORT : ' + port));