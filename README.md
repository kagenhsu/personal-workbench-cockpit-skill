# personal-workbench-cockpit

個人工作台／AI 駕駛艙 Skill，供 Codex 與 Claude Code 使用。

本 Skill 以 `console-builder` 的控制台建造流程為基礎，加入個人工作台的 Markdown／Obsidian 資料邊界、工作項目與進度模型、生成前四項藍圖、推看決令駕駛艙運作層、自然語言痛點探索、方案比較、PM／設計稿／MCP／Agent 交接、UI／UX Pro Max 搭配、AI 草稿確認與安全驗收規則。

複雜的新建或重大改版可搭配已安裝的 `grill-me` 逐題釐清需求；介面工作可搭配已安裝的 `impeccable` 做品質檢查與收尾。兩者都是條件式搭配，不會讓單一錯誤或細部調整變成完整訪談。

## 安裝

Codex：將整個資料夾放到：

```text
~/.codex/skills/personal-workbench-cockpit/
```

Claude Code：將整個資料夾放到：

```text
~/.claude/skills/personal-workbench-cockpit/
```

安裝後重新啟動對應工具。使用者不需要記住提示詞；在工作台脈絡中直接說「這裡不順」、「想加功能」或「幫我調整一下」即可由 Skill 先協助釐清痛點，也可明確使用 `$personal-workbench-cockpit`。

當需求涉及畫面、資訊層級、互動或響應式行為時，本 Skill 會在痛點與方案確認後搭配 `ui-ux-pro-max`；純後端、資料庫或明確錯誤修正不會強行啟動 UI 設計流程。

新建或重大改版一定先確認：誰在用、每天反覆處理什麼、流程如何從紀錄走到完成、最後要看到哪些進度／風險／數據／復盤。預設流程為「靈感 → 腳本／任務 → 發布／通知 → 數據 → 復盤」，目標是生成真正能運作、可長期訪問的工作台，而不是只有漂亮卡片。

工作台或駕駛艙的運作檢查為「推：主動推送關鍵事實、看：整合全局狀況、決：提供判斷與方案、令：將決策拆成任務並追蹤結果」。每一項都必須對應資料來源、使用者操作與結果紀錄。

網站與行動 App 的開發流程為：

```text
PM Skill → 設計稿 → MCP → Agent 規劃設計 → 開發落地
```

PM Skill 與 `grill-me` 一起梳理目標用戶、核心場景、頁面結構、大圖比例、卡片層級、顏色變量、字體層級與組件狀態，再產出可編輯、可覆用、可協作的高保真設計源文件。之後透過 MCP 交接最小必要資訊，讓 Agent 以 D2C 方式接續頁面、互動與功能開發。

設計研究可參考 [Cuelume](https://cuelume.dev/)、[Paper Shaders](https://shaders.paper.design/)、[Deck Gallery](https://www.deck.gallery/)、[21st](https://www.21st.sh/) 與 [Brand Archive](https://brandarchive.xyz/)。這些資源只作方向研究，使用前仍要確認授權、依賴、效能、無障礙與品牌使用邊界，詳見 `references/design-inspiration-libraries.md`。

需要學習管理時，Skill 可依 `LearningProgress` 保存目標、項目、證據、下一步與復盤，並以 Markdown／JSON 導入與導出。需要網站化時，先確認 Cloud Studio 的實際供應商與可見性，再依本機驗收、預覽部署、使用者確認、正式部署的順序執行。

## 網站說明

可先開啟 [個人工作台／AI 駕駛艙 Skill 文件中心](docs/index.html)，再依文件導覽進入各個獨立頁面。網站提供 Skill 功能、四項藍圖、推看決令、完整流程、開發方法、模板案例、安裝教學、使用教學、提示詞中心與安全邊界。這是 repo 內的私人靜態文件網站，不代表已啟用公開 GitHub Pages。

直接入口：

- [Skill 功能](docs/overview.html)
- [四項藍圖](docs/blueprint.html)
- [完整流程](docs/workflow.html)
- [安裝教學](docs/install.html)
- [使用教學](docs/usage.html)
- [提示詞中心](docs/prompts.html)
- [驗收與持續優化](docs/optimize.html)

## 核心使用方式

使用者不需要學會固定提示詞，只要自然地說：

- 「這裡用起來不順」
- 「首頁太亂」
- 「我想加個提醒」

Skill 會先協助確認痛點與使用情境，再提出方案；選定方案後，才進入工作台的資料、介面、部署與驗收設計。

## 安全範圍

本 repo 只保存通用 Skill、參考規則、範例與測試提示詞，不保存工作台正式資料、Obsidian Vault、帳密、Token、API Key 或個人助理人設資料。
