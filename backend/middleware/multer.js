import multer from "multer";

// 這裡定義了文件的儲存配置
const storage = multer.diskStorage({
  // 將儲存文件的名稱設為原始名稱
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

// 這裡將配置傳遞給upload 用於匯出給其他組件使用
const upload = multer({ storage });

export default upload;
