# Emotion Curation CMS

這是一個「情緒導向選物網站」的 Next.js + Sanity CMS 版本。

你會有：

- 前台選物網站
- `/studio` 後台 CMS
- 首頁內容可編輯
- 今日情緒可編輯
- 選物商品可新增 / 編輯 / 隱藏
- 商品圖片可上傳
- 商品詳情頁

---

## 1. 上傳到 GitHub

解壓縮 ZIP 後，進入資料夾，把裡面的所有檔案上傳到 GitHub repository。

請確認 GitHub 根目錄直接看得到：

```txt
app/
lib/
schemas/
package.json
sanity.config.js
```

不要把整個資料夾包在另一層資料夾裡。

---

## 2. 先部署到 Vercel

到 Vercel Import 你的 GitHub repository。

如果還沒有設定 Sanity，網站會先顯示預設 Demo 內容，所以可以先部署成功。

---

## 3. 建立 Sanity 後台專案

到 Sanity 建立一個新 Project：

https://www.sanity.io/manage

建立後複製：

- Project ID
- Dataset，通常是 `production`

---

## 4. 在 Vercel 設定環境變數

到 Vercel 專案：

```txt
Settings → Environment Variables
```

新增：

```txt
NEXT_PUBLIC_SANITY_PROJECT_ID=你的ProjectID
NEXT_PUBLIC_SANITY_DATASET=production
```

設定後重新 Deploy。

---

## 5. 進入後台

部署完成後，打開：

```txt
https://你的網站網址/studio
```

你就可以登入 Sanity 後台，開始編輯：

- 首頁設定 Homepage
- 選物商品 Objects
- 情緒分類 Emotions

---

## 6. Sanity CORS 設定

如果後台或圖片讀取有問題，到 Sanity Manage：

```txt
API → CORS Origins
```

加入你的 Vercel 網址，例如：

```txt
https://your-site.vercel.app
```

並允許 credentials。

---

## 本機開發

```bash
npm install
npm run dev
```

然後打開：

```txt
http://localhost:3000
http://localhost:3000/studio
```

---

## 注意

這個版本沒有放 `package-lock.json`，避免鎖住舊版 Next.js 導致 Vercel 安全檢查失敗。


---

## 版本檢查

這個檔案已檢查過：

- ZIP 可以正常解壓縮
- `package.json` 是合法 JSON
- 沒有 `package-lock.json`
- Next / React 版本已固定，避免 Vercel 每次安裝到不同版本
- `/studio` 在尚未設定 Sanity Project ID 前，會顯示設定提示，不會直接壞掉
