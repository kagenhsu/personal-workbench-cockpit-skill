# Cloud Studio 部署規則

## 先確認平台

「Cloud Studio」可能指不同供應商或產品。使用者未說明時，只記錄為「Cloud Studio，供應商待確認」，不要自行把 Firebase Studio、Google Cloud、騰訊 Cloud Studio 或其他服務視為同一平台。

部署前一次只確認一題：

- 實際平台名稱與網址
- 網站是靜態說明頁、前端 SPA，還是需要後端的工作台
- 是否需要登入、跨裝置資料與正式資料庫
- 網站要私人、協作者可見，還是公開
- 可接受的費用、區域與維護方式

## 部署順序

```text
需求與資料邊界 → 本機驗收 → Cloud Studio 建立專案 → 設定環境變數
→ 部署預覽 → 使用者確認 → 正式部署 → 網址與資料持久化驗收
```

- 靜態說明頁優先使用靜態網站託管，不為說明頁加入後端
- 需要登入、資料庫、通知或 AI API 的工作台，先建立清楚的前後端與資料保存邊界
- Secret、Token、API Key 只放平台的受保護環境變數，不放 repo、前端 bundle、截圖或 Skill
- 正式部署、公開網址、付費服務與外部通知都要先取得使用者確認
- 部署成功不等於產品完成，還要驗證指定網址、登入、資料新增、重新整理、重新登入、重啟與下一步流程
- 記錄部署網址、版本或 commit、時間、建置結果、資料庫／儲存位置、回滾方式與仍待確認事項

## 平台分支

若使用者確認為 Google Firebase Studio，先依網站類型選 Firebase Hosting、Firebase App Hosting 或 Cloud Run，並核對權限、計費與公開範圍。Firebase 官方文件指出，Firebase Hosting 適合靜態網站與 SPA，App Hosting 適合支援的動態框架，Cloud Run 適合容器化應用；Cloud Run 與部分 App Hosting 情境可能需要啟用計費。

若使用者確認為其他 Cloud Studio，先讀該平台官方部署文件，建立對應的部署分支，不把 Firebase 指令套用到其他平台。
