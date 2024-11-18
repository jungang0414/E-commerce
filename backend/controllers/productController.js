import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// 增加商品
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // 這邊處理圖片上傳
    // 從req.files中獲取上傳的圖片並過濾掉未定義的圖片
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // 這裡並行上傳圖片至雲端平台 Cloudinary, 並獲取圖片的 URL
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // 建構商品資料物件
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imageUrl,
      date: Date.now(),
    };

    console.log(productData);

    // 創建商品模型並儲存到資料庫
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// 取得所有商品
const listProduct = async (req, res) => {
  try {

    const products = await productModel.find({});
    res.json({ success: true, products })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// 刪除商品(用id篩選出要刪除的商品)
const removeProduct = async (req, res) => {
  try {

    await productModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: "Product Remove" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// 搜尋單項商品(使用id篩選出要搜尋的商品)
const singleProduct = async (req, res) => {
  try {

    const { productId } = req.body
    const product = await productModel.findById(productId);

    res.json({ success: true, product })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
