# 前端頁面

[Live demo](https://e-commerce-lac-gamma.vercel.app/)

## 專案簡介

實現簡易的電商平台前端建構邏輯.

## 前端安裝與運行

1. 下載專案
```
clone https://github.com/jungang0414/E-commerce.git
```

2. 安裝依賴
```
cd frontend
npm install
```

3. 啟動開發伺服器
```
npm run dev
```

## 技術堆疊

- Vite & React
- react-router-dom
- Tailwind CSS

## 專案結構

```
frontend/
    .gitignore
    eslint.config.js
    index.html
    package.json
    postcss.config.js
    public/
    README.md
    src/
        App.jsx
        assets/
        components/
        context/
        index.css
        main.jsx
        pages/
    tailwind.config.js
    vite.config.js
```

### 根目錄:

- .gitignore: 設定不需要Git追蹤的檔案或目錄, 來避免上傳至Github, 如: .env、 node_modules。
- eslint.config.js: ESLint的配置文件, 主要用來定義JS程式碼的規範。
- index.html: HTML頁面。
- package.json: npm管理器的配置文件, 紀錄專案所依賴的套件。
- postcss.config.js: PostCSS的配置文件, 處理CSS。
- public: 儲存靜態資料。
- tailwind.config.js: Tailwind CSS的配置文件。
- vite.config.js: Vite的配置文件。

### src目錄

- App.jsx: 應用程式的根組件, 渲染整個應用。
- assets: 存放圖片、音訊、影片。
- components: 存放可重用組件。
- context: 存放 React Context，用於應用程式中不同組件中共享資料。
- index.css: 全域CSS樣式。
- main.jsx: 應用程式入口點，用來渲染App組件。
- pages: 存放不同的頁面組件。

### 參考文件

[MERN](https://greatstack.dev/)