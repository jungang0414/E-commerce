// 身分驗證工具
import jwt from "jsonwebtoken";


const adminAuth = async (req, res, next) => {
    try {
        // 解構出 token 用來比對是否具有授權
        const { token } = req.headers
        // 當沒有提供令牌時則返回未授權的訊息
        if (!token) {
            return res.json({ success: false, message: "Not Authorized Login Again" })
        }
        // 這裡使用函數驗證令牌, 並解碼令牌來與環境變數中的憑證比較
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized Login Again" })
        }
        // 如通過驗證則繼續處理後續的程序, 如:路由處理
        next()

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth;