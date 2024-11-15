// Controller 控制器: 處理請求, 協調 Model 與 View 之間的互動
import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// 創建令牌
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SRCRET)
}

// 處理使用者登入請求
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        // 將資料庫中的使用者資料 儲存到變數 user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })
        }

        // 這裡會利用 bcrypt 方法
        // 加密運算來比較密碼與雜湊密碼並返回布林值.
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// 處理使用者註冊請求
const registerUser = async (req, res) => {
    try {

        // req.body 是一個物件
        // 通常會包含從客戶端發送到伺服器的請求數據
        // 這裡將物件中的三個屬性提取, 並賦值給對應變數
        const { name, email, password } = req.body;

        // 檢查使用者是否已註冊
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // 檢查 email 註冊格式, 密碼強度
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter vaild email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }

        // 密碼雜湊(整數型態 數字越高越安全)
        const salt = await bcrypt.genSalt(10);
        // (加密)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        // 將資料庫中的使用者資料 儲存到變數 user
        const user = await newUser.save()
        // 伺服器生成一個唯一的令牌，並將其返回給客户端，用於
        // 用於身份驗證、授權、跨域請求
        const token = createToken(user._id)
        res.json({ success: true, token })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// 處理管理員登入請求
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }
