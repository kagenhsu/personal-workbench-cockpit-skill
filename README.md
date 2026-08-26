# personal-workbench-cockpit

個人工作台／AI 駕駛艙 Skill，供 Codex 與 Claude Code 使用。

本 Skill 以 `console-builder` 的控制台建造流程為基礎，加入個人工作台的 Markdown／Obsidian 資料邊界、工作項目與進度模型、五個正式職務領域、自然語言痛點探索、方案比較、UI／UX Pro Max 搭配、AI 草稿確認與安全驗收規則。

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

## 安全範圍

本 repo 只保存通用 Skill、參考規則、範例與測試提示詞，不保存工作台正式資料、Obsidian Vault、帳密、Token、API Key 或個人助理人設資料。
