(() => {
  const pages = [
    { key: "index", href: "index.html", label: "首頁：先看懂它", icon: "⌂", group: "先了解" },
    { key: "overview", href: "overview.html", label: "Skill 可以幫你什麼", icon: "✦", group: "先了解" },
    { key: "blueprint", href: "blueprint.html", label: "規劃自己的系統", icon: "01", group: "規劃自己的系統" },
    { key: "templates", href: "templates.html", label: "挑一個工作案例", icon: "▦", group: "規劃自己的系統" },
    { key: "build", href: "build.html", label: "把想法做成第一版", icon: "⌘", group: "做出與改善" },
    { key: "cockpit", href: "cockpit.html", label: "讓 AI 介入已開發系統", icon: "↔", group: "AI 介入已開發系統" },
    { key: "workflow", href: "workflow.html", label: "AI 協助的工作循環", icon: "→", group: "AI 介入已開發系統" },
    { key: "install", href: "install.html", label: "把 Skill 放進 AI 工具", icon: "↓", group: "開始使用" },
    { key: "usage", href: "usage.html", label: "開始使用自己的系統", icon: "◌", group: "開始使用" },
    { key: "prompts", href: "prompts.html", label: "和 AI 說明需求", icon: "?", group: "開始使用" },
    { key: "guardrails", href: "guardrails.html", label: "使用前確認邊界", icon: "!", group: "開始使用" },
    { key: "optimize", href: "optimize.html", label: "重複更新自己的系統", icon: "✓", group: "重複更新自己的系統" }
  ];
  const current = document.body.dataset.page || "index";
  const title = document.body.dataset.title || "個人工作台／AI 駕駛艙";
  const visualSpecs = {
    index: { illustration: "assets/hero-personal-skill.png", illustrationAlt: "手繪人物請 AI 協助把混亂工作整理成自己的工作台", diagram: "assets/guide-personal-skill.png", diagramAlt: "手繪四步驟說明從說出工作卡點、AI 釐清、做成工作台到每天使用", label: "從一句話走到自己的工作台" },
    overview: { illustration: "assets/blueprint-editorial.png", illustrationAlt: "人物把想法、日程與工作事項整理在桌上的手繪插圖", diagram: "assets/guide-overview-skill-human.png", diagramAlt: "手繪人物與五個步驟說明自然語言入口、痛點探索、方案比較、資料流程到持續演化", label: "從一句話走到可驗收結果" },
    blueprint: { illustration: "assets/blueprint-editorial.png", illustrationAlt: "人物整理使用者、工作項目與流程筆記的手繪插圖", diagram: "assets/guide-system-planning-public.png", diagramAlt: "手繪四個問題說明誰會使用、每天處理什麼、AI 怎麼協助與最後要看到什麼", label: "先回答四個問題，規劃自己的系統" },
    cockpit: { illustration: "assets/hero-editorial.png", illustrationAlt: "人物觀察工作資料並整理下一步的手繪插圖", diagram: "assets/guide-cockpit-cycle-human.png", diagramAlt: "手繪人物與四個彩色對話框說明推看決令形成決策循環", label: "讓資訊變成每天可以採取的行動" },
    workflow: { illustration: "assets/workflow-editorial.png", illustrationAlt: "人物觀察系統資料、確認 AI 建議並追蹤工作結果的手繪插圖", diagram: "assets/guide-ai-system-loop.png", diagramAlt: "手繪五步驟說明資料進系統、AI 讀取、AI 提醒與建議、使用者確認執行、結果寫回系統", label: "讓 AI 介入已開發系統，形成可重複的工作循環" },
    build: { illustration: "assets/hero-editorial.png", illustrationAlt: "人物在工作桌前整理設計與開發交接的手繪插圖", diagram: "assets/guide-build-and-improve.png", diagramAlt: "手繪四個步驟說明 Skill 設計規劃完成、交給 AI 開發、做出第一版與實際測試改善", label: "Skill 設計、規劃完成後，先做小版本再改善" },
    templates: { illustration: "assets/blueprint-editorial.png", illustrationAlt: "人物從多種工作事項中挑選最小工作流程的手繪插圖", diagram: "assets/guide-personal-skill-templates.png", diagramAlt: "手繪四步驟說明自己的 Skill 整理需求、交給 AI 工具開發、做出工作台並持續使用", label: "先挑一件反覆工作，再做成自己的工作台" },
    optimize: { illustration: "assets/workflow-editorial.png", illustrationAlt: "人物檢查工作流程與使用結果並持續調整的手繪插圖", diagram: "assets/guide-usage-human.png", diagramAlt: "日常創作者與手繪對話框說明驗收後持續優化工作台", label: "完成驗收，再讓工作台持續變好" },
    install: { illustration: "assets/hero-editorial.png", illustrationAlt: "人物準備專用主機、工具與控制台的手繪插圖", diagram: "assets/guide-install-host-first.png", diagramAlt: "手繪六步驟說明準備專用小電腦或主機、準備工具與網路、安裝 Skill、連接 AI、重新啟動測試與開始使用", label: "主機先就位，再安裝 Skill、連接 AI 與測試啟用" },
    usage: { illustration: "assets/workflow-editorial.png", illustrationAlt: "人物把不順的工作流程拆開並逐步調整的手繪插圖", diagram: "assets/guide-usage-human.png", diagramAlt: "日常創作者與五個對話框說明自然語言持續修改工作台", label: "不用背提示詞，只要說明哪裡不順" },
    prompts: { illustration: "assets/hero-editorial.png", illustrationAlt: "人物從筆記中挑選可直接使用的提示詞手繪插圖", diagram: "assets/guide-prompts-skills-human.png", diagramAlt: "手繪人物與五個步驟說明工作台規劃、PM 梳理、設計檢查、MCP Agent 開發到驗收優化", label: "把常用動作整理成可複製入口" },
    guardrails: { illustration: "assets/blueprint-editorial.png", illustrationAlt: "人物檢查資料、風險與是否可以執行的手繪插圖", diagram: "assets/guide-guardrails-human.png", diagramAlt: "真人創作者四格手繪圖說明 AI 草稿人工確認正式動作與結果紀錄安全邊界", label: "先看清楚，再確認，再執行" }
  };
  const groups = [...new Set(pages.map((page) => page.group))];
  const promptText = (...lines) => lines.join("&#10;");
  const promptBlock = (title, description, activation, prompt) => `<section class="content-section" id="activate"><p class="section-label">交給 AI 的說法</p><h2>${title}</h2><p>${description}</p><div class="callout blue"><strong>第一段：先啟用 Skill</strong><p>先把工作規則交給 AI，再貼上下面的完整工作提示詞。</p></div><div class="code-card" data-skill-activation><button class="copy-button" type="button" data-copy>複製啟用提示詞</button><pre>${activation}</pre><span class="copy-status" aria-live="polite"></span></div><div class="callout green"><strong>第二段：完整工作提示詞</strong></div><div class="code-card"><button class="copy-button" type="button" data-copy>複製完整提示詞</button><pre>${prompt}</pre><span class="copy-status" aria-live="polite"></span></div></section>`;
  const hostRequirementMarkup = '<section class="content-section" id="host-requirement"><p class="section-label">長期運作前提</p><h2>準備一台專門長時間運作控制台的小電腦或主機</h2><p class="section-lede">Windows 或 Mac 都可以。這台電腦是個人控制台或 CEO 控制台的運作核心，負責執行系統、保存必要資料，並讓 AI 工作流程可以持續使用。</p><div class="callout yellow"><strong>請先分清楚</strong><p>不建議使用日常筆電作為主要主機；NAS 主要用來存檔與備份，也不要把 NAS 當成控制台的主要運行主機。</p></div></section>';
  const hostCheckMarkup = '<section class="content-section" id="host-check"><p class="section-label">安裝前先檢查</p><h2>先請 AI 確認這台電腦能不能當控制台主機</h2><p>即使 Skill 尚未安裝，也可以先請目前使用的 AI 工具做受控的唯讀檢查；先確認規格與環境，再決定是否安裝。</p><div class="code-card"><button class="copy-button" type="button" data-copy>複製主機檢查提示詞</button><pre>請準備使用 personal-workbench-cockpit Skill。\n如果這個 Skill 已經安裝，請先啟用並讀取它的工作規則；如果尚未安裝，請明確告訴我，不要假設已安裝。\n無論 Skill 是否已安裝，請先在這台準備作為個人控制台或 CEO 控制台的電腦上做唯讀檢查，不要安裝、刪除或修改任何內容。\n請檢查：作業系統與版本、CPU 與核心數、記憶體、磁碟總容量與剩餘空間、網路、睡眠與自動重啟設定，以及目前使用者權限。\n請分別列出：可以使用、建議改善、無法確認，並說明這台電腦是否適合長時間運作控制台。\nWindows 與 macOS 請依實際系統檢查，不要猜測；不要回報密碼、Token、API Key 或不必要的個人資料。\n如果目前工具沒有執行唯讀檢查的權限，請告訴我需要自行執行哪些檢查，不要自行安裝套件或修改設定。\n確認我同意後，才進入 Skill 安裝。</pre><span class="copy-status" aria-live="polite"></span></div></section>';
  const installGuideMarkup = `<section class="content-section" id="host-requirement"><p class="section-label">第一步｜準備專用主機</p><h2>先準備一台專門長時間運作控制台的電腦</h2><p class="section-lede">Windows 或 Mac 都可以。Mac mini M4 可以作為示範方案；重點是這台電腦專門運作個人控制台或 CEO 控制台，不把日常筆電或 NAS 當成主要主機。</p><div class="info-grid"><div class="info-card"><span class="index-number">基本配置</span><h3>16 GB 記憶體／512 GB SSD</h3><p>適合控制台、資料整理與一般 AI 連接；如果會同時跑多個服務，建議 32 GB／1 TB。</p></div><div class="info-card"><span class="index-number">網路與穩定</span><h3>有線網路、散熱與自動重啟</h3><p>主機放在固定位置，保持網路穩定，並設定更新、斷電恢復與備份。</p></div><div class="info-card"><span class="index-number">本機 AI</span><h3>要跑模型才需要更高規格</h3><p>如果只是連接訂閱制 AI，不一定需要獨立顯卡；要在主機本機跑 AI 模型，再另外評估記憶體、顯卡或 Apple Silicon 規格。</p></div></div><div class="callout blue"><strong>這台主機的角色</strong><p>它像控制台的固定基地：執行系統、保存必要資料、提供 AI 可以受控使用的入口。訂閱制 AI 的會員資格，不會自動讓它連到這台主機。</p></div></section><section class="content-section" id="source"><p class="section-label">第二步｜準備工具與網路</p><h2>先把基本工具準備好</h2><ul class="check-list"><li>Windows 或 macOS 作業系統</li><li>Git，用來取得與更新 Skill</li><li>穩定網路與固定主機位置</li><li>資料保存位置與備份方式</li><li>你平常使用的 AI 工具</li></ul><p><a href="https://support.apple.com/en-ie/121555" target="_blank" rel="noopener">查看 Apple Mac mini 技術規格 ↗</a></p></section><section class="content-section" id="directory"><p class="section-label">第三步｜安裝自己的 Skill</p><h2>取得檔案，放進 AI 工具能讀到的位置</h2><p>從 GitHub 取得 Skill，放到對應的技能目錄；確認資料夾內可以直接看到 <code>SKILL.md</code>，不要多包一層同名資料夾。</p><div class="code-card"><button class="copy-button" type="button" data-copy>複製取得指令</button><pre>git clone https://github.com/kagenhsu/personal-workbench-cockpit-skill.git</pre><span class="copy-status" aria-live="polite"></span></div><div class="path-box"><b>Codex</b><span>~/.codex/skills/personal-workbench-cockpit/</span></div><div class="path-box"><b>Claude Code</b><span>~/.claude/skills/personal-workbench-cockpit/</span></div></section><section class="content-section" id="connect"><p class="section-label">第四步｜連接 AI 到系統</p><h2>訂閱制 AI 不等於自動連上主機</h2><p>先確認你使用的 AI 工具是否能讀取本機或遠端主機的資料，再選擇登入使用、API 或其他受控連接方式。連接前要設定資料範圍、可以做的動作與人工確認點。</p><div class="callout yellow"><strong>安全原則</strong><p>不要把密碼、Token 或 API Key 寫進網站、Skill、提示詞或圖片；正式寫入、發布、通知與外部動作都要等你確認。</p></div></section><section class="content-section" id="restart"><p class="section-label">第五步｜重新啟動測試</p><h2>讓工具重新讀取 Skill，再做一次測試</h2><ol class="step-list"><li><div><strong>重新啟動 Codex、Claude Code 或使用中的 AI 工具</strong><p>讓工具重新掃描 Skill 目錄與目前系統規則</p></div></li><li><div><strong>確認主機與網路正常</strong><p>確認控制台服務可以開啟，資料位置與備份方式正確</p></div></li><li><div><strong>先用一句自然語言測試</strong><p>不要先做正式寫入，先確認 AI 能理解你的工作問題</p></div></li></ol></section><section class="content-section" id="verify"><p class="section-label">第六步｜開始使用</p><h2>從一件真實工作開始</h2><p>直接說出今天想完成或需要追蹤的事情，確認 AI 能整理資料、提出建議，並在你確認後留下結果。</p><div class="code-card"><button class="copy-button" type="button" data-copy>複製測試句</button><pre>我要開始使用我的個人控制台，請先問我今天最需要完成的一件事。</pre><span class="copy-status" aria-live="polite"></span></div><ul class="check-list"><li>主機可以長時間運作</li><li>Skill 已被 AI 工具讀取</li><li>AI 只讀取允許的資料</li><li>正式動作前會等待確認</li><li>完成結果會回到系統保存</li></ul><div class="progress-panel"><p>完成安裝與測試後，開始使用自己的系統</p><div class="progress-actions"><button class="progress-button" type="button" data-progress-key="install">標記完成</button><a class="text-button" href="usage.html">下一頁：使用教學</a></div></div></section>`;
  const developmentPrompts = {
    overview: promptBlock("先請 AI 說明這套個人控制台", "如果還不熟悉 Skill，可以先請 AI 用白話說明，不必一開始就理解技術名詞", promptText("請啟用 personal-workbench-cockpit Skill。", "如果找不到這個 Skill，請先明確告訴我，不要假設已安裝。", "啟用後請先讀取它的工作規則，再等待我的下一個問題。"), promptText("我想了解個人控制台 Skill。", "請用白話說明它是什麼、不是什麼、可以幫我改善哪些工作或生活問題。", "請說明它如何和其他 AI 工具一起規劃、開發與使用系統。", "請先不要講 MCP、Agent 或 API；如果必須提到，請先用一句白話解釋。", "請說明專用小電腦或主機在長期運作中的用途，並區分筆電與 NAS。", "最後列出我下一步需要回答的四個問題。")),
    blueprint: promptBlock("請 AI 陪我規劃自己的系統", "這段提示詞會讓 AI 先問清楚目標與流程，不會直接跳到畫面或程式", promptText("請啟用 personal-workbench-cockpit Skill。", "如果需要逐題釐清，再使用 grill-me Skill。", "如果找不到任何一個 Skill，請先告訴我，不要假設已安裝。"), promptText("我想規劃自己的個人控制台。", "請一次問我一個最重要的問題。", "請依序確認：誰會使用、每天反覆處理什麼、事情怎麼完成、最後想看到什麼。", "請同時確認 AI 什麼時候協助、AI 可以讀什麼、我在哪裡確認。", "請把專用小電腦或主機、資料保存、備份與遠端使用列為規劃檢查項目。", "四個答案和主機前提還不清楚前，請不要寫程式或設計畫面。", "最後整理成一份可以交給開發 AI 使用的系統規劃。")),
    build: '<section class="content-section" id="activate"><p class="section-label">啟用 Skill</p><h2>先叫對工具，再開始開發</h2><p>把已確認的需求交給正確的 Skill 組合，先釐清規格與設計，再進入 MCP、Agent 與程式開發</p><div class="callout blue"><strong>本頁啟用組合</strong><p><code>/pm-workbench-planner</code> ＋ <code>/grill-me</code> ＋ <code>/emil-design-eng</code> ＋ <code>/ui-ux-pro-max</code> ＋ <code>/console-builder</code></p></div><div class="code-card"><button class="copy-button" type="button" data-copy>複製</button><pre>/pm-workbench-planner&#10;/grill-me&#10;/emil-design-eng&#10;/ui-ux-pro-max&#10;/console-builder&#10;&#10;我要把已確認的個人工作台或 AI 駕駛艙開發成網站或行動 App&#10;請先檢查以上 Skill 是否可用，缺少的 Skill 請明確列出，不要假設已安裝&#10;請先讀取既有的產品規格、四項藍圖、流程、推看決令規則與安全邊界&#10;請依序完成：PM 規格確認、UI／UX 設計規範、可編輯設計源文件、MCP 能力盤點、Agent 分工與開發計畫&#10;開發前請先列出頁面結構、資料流程、元件狀態、驗收條件與不在本次範圍的內容&#10;開發時請使用最小可行範圍，完成一個區塊就回報已完成、待確認與阻塞&#10;不要直接發布、通知、寫入正式資料或執行外部動作&#10;最後請提供本機啟動方式、測試方式、驗收入口、已知限制與下一步</pre><span class="copy-status" aria-live="polite"></span></div></section>',
    cockpit: promptBlock("請 AI 介入我已經做好的系統", "這段提示詞用來盤點 AI 可以讀什麼、建議什麼，以及哪些動作一定要先經過你確認", promptText("請啟用 personal-workbench-cockpit Skill。", "如果找不到這個 Skill，請先明確告訴我，不要假設已安裝。", "啟用後請先讀取目前系統的資料與安全規則。"), promptText("我已經有一個可以使用的個人控制台，想讓 AI 介入。", "請先盤點 AI 可以讀取的資料、可以提出的建議，以及需要我確認後才能執行的動作。", "請設計：資料進入、AI 整理、我確認、系統執行、結果回寫。", "請說明 AI 需要透過什麼受控連接使用系統，不要假設訂閱制 AI 自動可以存取我的主機。", "不要直接修改正式資料、發布、通知或執行外部動作。", "最後請列出連接方式、權限範圍、確認點與驗收清單。")),
    workflow: promptBlock("請 AI 陪我走一次完整工作流程", "用同一件真實工作測試 AI 是否真的接上系統，而不是只有聊天或展示畫面", promptText("請啟用 personal-workbench-cockpit Skill。", "如果找不到這個 Skill，請先明確告訴我，不要假設已安裝。", "啟用後請先讀取目前系統的流程與安全規則。"), promptText("請陪我走一次這條流程：資料進系統 → AI 整理與建議 → 我確認 → 執行 → 結果回寫。", "每一步請說明使用了哪些資料、產生什麼結果，以及結果保存在哪裡。", "如果使用的是訂閱制 AI，請先說明它目前能不能連到我的專用主機；不能就列出需要的連接方式。", "遇到不確定的地方請先停下並標記待確認。", "不要自行寫入正式資料、發布或通知他人。", "完成後請列出下一次可以改善的地方。")),
    install: promptBlock("請 AI 先檢查主機，再協助安裝控制台", "這段提示詞會先確認電腦規格與環境是否適合，再進入 Skill 安裝；小電腦或主機是長期運作核心，筆電與 NAS 有不同用途", promptText("請準備使用 personal-workbench-cockpit Skill。", "如果這個 Skill 已經安裝，請先啟用並讀取它的工作規則；如果尚未安裝，請明確告訴我，不要假設已安裝。", "無論 Skill 是否已安裝，請先做唯讀的主機規格與環境檢查，不要先安裝、刪除或修改任何內容。"), promptText("我要把個人控制台 Skill 安裝到一台專用小電腦或主機。", "如果這個 Skill 已經安裝，請先啟用並讀取規則；如果尚未安裝，請先使用目前 AI 工具做唯讀檢查，不要假設已安裝。", "請先檢查：作業系統與版本、CPU 與核心數、記憶體、磁碟總容量與剩餘空間、網路、睡眠與自動重啟設定，以及目前使用者權限。", "請分別列出：可以使用、建議改善、無法確認，並說明是否適合長時間運作控制台。", "請明確區分：Windows 或 macOS 都可以；日常筆電只作開發測試；NAS 主要作檔案與備份儲存。", "如果目前工具沒有執行唯讀檢查的權限，請告訴我需要自行執行哪些檢查，不要自行安裝套件或修改設定。", "請說明控制台主機如何和我使用的訂閱制 AI 工具連接，並區分登入使用與 API／受控連接。", "請先提供檢查結果與安裝清單，不要直接安裝、修改正式環境或執行外部動作。", "不要回報或保存密碼、Token、API Key 或不必要的個人資料；確認我同意後，才進入 Skill 安裝。")),
    usage: promptBlock("請 AI 教我開始使用自己的系統", "不必背指令，直接把要做的工作說出來，讓 AI 按照已規劃的系統協助你", promptText("請啟用 personal-workbench-cockpit Skill。", "如果找不到這個 Skill，請先明確告訴我，不要假設已安裝。", "啟用後請先讀取我的系統規則與使用邊界。"), promptText("我要開始使用我的個人控制台。", "請先問我今天最想完成或最需要追蹤的一件事。", "請把我的話整理成資料、任務、下一步與需要我確認的動作。", "如果需要讀取系統資料，請先說明資料來源與讀取範圍。", "請用白話說明，不要要求我記固定指令。", "正式寫入、發布、通知或外部動作前，請先等我確認。", "完成後請留下結果與下一步，讓我下次可以接著使用。")),
    guardrails: promptBlock("請 AI 先檢查這次動作的邊界", "當 AI 要讀資料、寫回系統或執行外部動作時，先用這段話確認風險", promptText("請啟用 personal-workbench-cockpit Skill。", "如果找不到這個 Skill，請先明確告訴我，不要假設已安裝。", "啟用後請先讀取資料與 AI 動作的安全規則。"), promptText("請先檢查這次 AI 工作的安全邊界。", "列出要讀取的資料、要產生的草稿、要寫入的內容，以及可能影響的人或系統。", "把可以直接做、需要我確認、禁止執行的動作分開。", "請檢查目前使用的訂閱制 AI 是否真的有權限連到我的專用主機；沒有就標記為待設定。", "不要自行發布、通知、付款、刪除或修改正式資料。", "最後請等待我的明確確認，並列出完成後要留下的紀錄。")),
    templates: '<section class="content-section" id="activate"><p class="section-label">啟用 Skill</p><h2>從一個案例開始建立第一個閉環</h2><p>先用工作台 Skill 找到反覆工作的痛點，再用 PM Skill 把案例整理成可以交給設計與開發的最小版本</p><div class="callout blue"><strong>本頁啟用組合</strong><p><code>/personal-workbench-cockpit</code> ＋ <code>/grill-me</code> ＋ <code>/pm-workbench-planner</code></p></div><div class="code-card"><button class="copy-button" type="button" data-copy>複製</button><pre>/personal-workbench-cockpit&#10;/grill-me&#10;/pm-workbench-planner&#10;&#10;我想用「[學校／職場／創業／創作／個人管理]」建立一個個人工作台或 AI 駕駛艙&#10;請先問我一個最重要的問題，確認目標用戶、每天反覆處理的工作、從輸入到完成的流程，以及最後要看到的結果&#10;請從這個案例挑出一個最小閉環，不要一次設計完整系統&#10;請把案例整理成：使用情境、資料來源、頁面結構、任務狀態、提醒條件、結果紀錄與下一步&#10;請明確區分草稿、正式寫入、發布、通知與外部動作，所有正式動作都保留人工確認&#10;最後請輸出第一版工作台規格、需要啟用的後續 Skill、開發順序與驗收清單</pre><span class="copy-status" aria-live="polite"></span></div></section>',
    optimize: '<section class="content-section" id="activate"><p class="section-label">啟用 Skill</p><h2>用驗收結果推動下一輪修改</h2><p>完成第一版後，使用同一條真實流程記錄問題，再啟用對應 Skill 提出最小修改與重新驗收</p><div class="callout green"><strong>本頁啟用組合</strong><p><code>/personal-workbench-cockpit</code> ＋ <code>/emil-design-eng</code> ＋ <code>/ui-ux-pro-max</code>，明確錯誤再加上 <code>/diagnose</code></p></div><div class="code-card"><button class="copy-button" type="button" data-copy>複製</button><pre>/personal-workbench-cockpit&#10;/emil-design-eng&#10;/ui-ux-pro-max&#10;&#10;我要持續驗收與優化這個個人工作台或 AI 駕駛艙&#10;請先檢查目前版本與上一輪驗收紀錄，實際走一次輸入、執行、結果與下一步&#10;請把觀察結果分成：通過、待確認、阻塞、不在本次範圍&#10;針對最重要的一個痛點，先提出兩到三個方案&#10;每個方案請說明解決的痛點、使用方式、優點、限制、修改範圍與驗收方式&#10;涉及畫面或互動時，請檢查資訊層級、文字可讀性、元件狀態、手機版與一致性&#10;使用者選定方案後才修改檔案，修改後請重新驗收流程、資料保存、結果回寫與安全邊界&#10;最後請留下修改紀錄、前後差異、未解決問題與下一輪要觀察的結果&#10;如果是明確錯誤，請改用 /diagnose，先提供重現步驟與最小修正方案</pre><span class="copy-status" aria-live="polite"></span></div></section>'
 };
  const templateDashboardPromptData = [
    { id: "personal", number: "01", title: "個人生活控制台", summary: "把目標、習慣、健康、家庭與設備事項放進同一條可追蹤流程", skills: "/personal-workbench-cockpit ＋ /grill-me ＋ /pm-workbench-planner", prompt: ["/personal-workbench-cockpit", "/grill-me", "/pm-workbench-planner", "", "我要建立一個個人生活控制台，管理目標、習慣、健康、家庭與設備事項", "請先問我一個最重要的問題，確認我最常處理、最容易遺漏或最需要追蹤的生活事項", "請把輸入、安排、提醒、執行、完成、結果紀錄與下一步整理成一個最小閉環", "請分別規劃今日重點、待辦、週期任務、到期提醒、異常狀況與復盤內容", "請輸出四項藍圖、頁面結構、資料欄位、狀態變化、提醒條件與驗收清單", "不要一次建立完整人生管理系統，先選一個本週可以驗收的生活流程", "正式寫入、通知與外部動作都保留使用者確認"].join("\\n") },
    { id: "learning", number: "02", title: "學習教學控制台", summary: "把課程、作業、筆記、測驗與學習進度接成可以回顧的學習流程", skills: "/personal-workbench-cockpit ＋ /grill-me ＋ /pm-workbench-planner", prompt: ["/personal-workbench-cockpit", "/grill-me", "/pm-workbench-planner", "", "我要建立一個學習教學控制台，管理課程、作業、筆記、測驗與學習進度", "請先確認學習者是誰、每週反覆處理哪些學習任務，以及什麼結果代表真的學會", "請把教材或靈感收進來，整理成學習任務，安排時間，記錄完成證據與測驗結果", "請設計今日學習重點、落後提醒、待複習項目、問題清單與階段復盤", "請輸出四項藍圖、學習流程、資料欄位、任務狀態、進度計算方式與驗收清單", "先完成一門課或一個學習單元的閉環，不要先做全部課程管理功能", "資料導入、正式修改與通知前請先顯示草稿並等待確認"].join("\\n") },
    { id: "work", number: "03", title: "工作專案控制台", summary: "把工作項目、里程碑、阻塞、會議與交付變成能推進的專案狀態", skills: "/personal-workbench-cockpit ＋ /grill-me ＋ /pm-workbench-planner ＋ /console-builder", prompt: ["/personal-workbench-cockpit", "/grill-me", "/pm-workbench-planner", "/console-builder", "", "我要建立一個工作專案控制台，管理工作項目、里程碑、阻塞、會議與交付", "請先確認使用者角色、專案目標、每天反覆處理的工作，以及目前最影響交付的阻塞", "請把會議紀錄或工作輸入整理成任務，設定負責人、期限、依賴、狀態與完成證據", "請設計推看決令：主動推送風險，看全局進度，提供判斷方案，將決策拆成任務並追蹤結果", "請輸出 PM 規格、頁面結構、資料流、權限邊界、MCP 需求、Agent 分工與驗收清單", "先完成一條工作項目到交付的閉環，不要先做大型企業專案平台", "不要直接變更正式專案資料或通知團隊，先產生開發與寫入草稿"].join("\\n") },
    { id: "creator", number: "04", title: "創作者內容控制台", summary: "把選題、腳本、發布、數據與復盤接成可以持續改善的內容循環", skills: "/personal-workbench-cockpit ＋ /grill-me ＋ /pm-workbench-planner ＋ /console-builder", prompt: ["/personal-workbench-cockpit", "/grill-me", "/pm-workbench-planner", "/console-builder", "", "我要建立一個創作者內容控制台，管理選題、腳本、發布、數據與復盤", "請先確認創作者的內容平台、目標受眾、發布頻率與最想改善的結果", "請把靈感收進來，整理成腳本與任務，設定發布或通知時間，核准後執行", "發布後請記錄實際數據、留言與觀察，最後產出下一次選題與腳本的調整依據", "請輸出內容流程、頁面結構、欄位、狀態、發布確認點、數據指標與驗收清單", "先完成一個選題到復盤的最小閉環，不要只做內容卡片展示", "發布、通知、平台連線與正式資料寫入都必須等待使用者確認"].join("\\n") },
    { id: "operations", number: "05", title: "數據營運控制台", summary: "把指標、異常、判斷、任務與結果追蹤接成每天可採取行動的營運流程", skills: "/personal-workbench-cockpit ＋ /pm-workbench-planner ＋ /console-builder ＋ /data-analytics（若已安裝）", prompt: ["/personal-workbench-cockpit", "/pm-workbench-planner", "/console-builder", "/data-analytics", "", "我要建立一個數據營運控制台，管理指標、異常、判斷、任務與結果追蹤", "請先檢查以上 Skill 是否可用，若 /data-analytics 未安裝，請用可驗證的手動分析流程替代", "請確認每天要看的指標、資料來源、更新頻率、異常門檻與需要採取的行動", "請把資料整理成推看決令流程：推送關鍵事實，看全局變化，提供判斷方案，拆成任務並回寫結果", "請輸出指標定義、資料字典、頁面結構、異常狀態、操作權限、結果紀錄與驗收清單", "先完成一個指標到行動結果的閉環，不要先堆疊大量圖表", "資料連線、正式計算、通知與外部寫入前請先列出風險並等待確認"].join("\\n") },
    { id: "equipment", number: "06", title: "家庭設備控制台", summary: "把保養、到期日、採購、維修與通知變成不容易遺漏的家庭管理流程", skills: "/personal-workbench-cockpit ＋ /grill-me ＋ /pm-workbench-planner ＋ /console-builder", prompt: ["/personal-workbench-cockpit", "/grill-me", "/pm-workbench-planner", "/console-builder", "", "我要建立一個家庭設備控制台，管理保養、到期日、採購、維修與通知", "請先確認設備使用者、設備清單、最常發生的維護工作，以及最怕遺漏的時間點", "請把設備資料、保固或到期日、異常紀錄、處理任務、完成證據與下一次日期接成流程", "請設計今日提醒、即將到期、異常待處理、採購比較與維修復盤等區塊", "請輸出四項藍圖、頁面結構、資料欄位、提醒規則、狀態變化與驗收清單", "先完成一項設備保養或到期提醒的閉環，不要先做所有家庭物品管理", "通知、採購、維修聯絡與資料正式寫入都保留使用者確認"].join("\\n") }
  ];
  const templateDashboardPrompts = '<section class="content-section" id="dashboard-prompts"><p class="section-label">六種控制台</p><h2>選一個反覆工作，直接啟用對應 Skill</h2><p>每個入口都先釐清使用情境，再把輸入、執行、結果與下一步整理成可開發的控制台</p><div class="template-prompt-grid">' + templateDashboardPromptData.map((item) => '<article class="template-prompt-card"><span class="index-number">' + item.number + '</span><h3 id="dashboard-' + item.id + '">' + item.title + '</h3><p>' + item.summary + '</p><div class="callout blue"><strong>啟用 Skill</strong><p>' + item.skills + '</p></div><div class="code-card"><button class="copy-button" type="button" data-copy>複製</button><pre>' + item.prompt + '</pre><span class="copy-status" aria-live="polite"></span></div></article>').join('') + '</div></section>';
  const blueprintExampleMarkup = '<p class="section-label">實際案例</p><h2>以創作者內容工作台為例</h2><p class="section-lede">把選題變成每天可運轉的內容流程，重點不是展示卡片，而是每一站都有輸入、操作、結果與下一步</p><div class="case-brief-grid"><div class="case-brief"><span class="index-number">01 · 誰在用</span><h3>獨立創作者</h3><p>每天需要處理選題、內容任務與發布安排</p></div><div class="case-brief"><span class="index-number">02 · 每天處理</span><h3>選題與腳本</h3><p>把靈感整理成可以執行、排程與追蹤的內容</p></div><div class="case-brief"><span class="index-number">03 · 怎麼運作</span><h3>靈感到復盤</h3><p>靈感 → 腳本 → 發布 → 數據 → 復盤</p></div><div class="case-brief"><span class="index-number">04 · 最後看到</span><h3>結果與下一步</h3><p>今日待完成腳本、發布結果、數據變化與下一個調整方向</p></div></div><figure class="case-figure"><img src="assets/guide-blueprint-example-human.png" alt="真人創作者五格手繪圖說明靈感腳本發布數據復盤的內容工作台流程"><figcaption>每一站都留下下一站需要的資料，結果回寫後才能持續調整</figcaption></figure><div class="case-loop"><p class="section-label">案例閉環</p><div class="flow-board"><div class="flow-stage"><b>01</b><strong>靈感</strong><span>先收進來</span></div><div class="flow-stage"><b>02</b><strong>腳本</strong><span>整理成任務</span></div><div class="flow-stage"><b>03</b><strong>發布</strong><span>設定時間</span></div><div class="flow-stage"><b>04</b><strong>數據</strong><span>記錄結果</span></div><div class="flow-stage"><b>05</b><strong>復盤</strong><span>調整下一次</span></div></div></div>';
  const cockpitModelMarkup = `<p class="section-label">運作模型</p><h2>四個動作形成一個決策循環</h2><p class="section-lede">駕駛艙先把今天最重要的事推到你面前，再協助你看懂全局、做出判斷、拆成行動，最後把結果寫回下一輪資料</p><div class="cycle-board" aria-label="推看決令四個動作形成決策循環"><article class="cycle-step cycle-step-push"><span class="cycle-key">推</span><div><h3>今日關鍵事實</h3><p>整理逾期、異常、風險、等待與新結果</p></div><span class="cycle-arrow" aria-hidden="true">→</span></article><article class="cycle-step cycle-step-see"><span class="cycle-key">看</span><div><h3>全局工作狀況</h3><p>看見目前位置、阻塞、期限與下一步</p></div><span class="cycle-arrow" aria-hidden="true">↓</span></article><article class="cycle-step cycle-step-decide"><span class="cycle-key">決</span><div><h3>判斷與行動建議</h3><p>根據資料比較優先順序與可行方案</p></div><span class="cycle-arrow" aria-hidden="true">↑</span></article><article class="cycle-step cycle-step-command"><span class="cycle-key">令</span><div><h3>任務拆解與結果追蹤</h3><p>留下任務、時間、完成條件與實際結果</p></div><span class="cycle-arrow" aria-hidden="true">←</span></article><div class="cycle-return"><strong>結果回寫後，回到下一輪資料</strong><span>沒有結果回寫，就還只是一次性的畫面</span></div></div>`;
  const brand = '<img class="brand-logo" src="assets/personal-workbench-logo-blue.png" alt="個人工作台夥伴 Logo">';
  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `<div class="header-inner"><a class="brand" href="index.html">${brand}<span class="brand-name"><strong>個人工作台</strong><span>用 AI 打造自己的工作系統</span></span></a><a class="header-note" href="https://github.com/kagenhsu/personal-workbench-cockpit-skill" target="_blank" rel="noopener">GitHub 原始碼</a><button class="menu-button" type="button" aria-label="開啟文件導覽" aria-expanded="false" data-menu-button><span></span><span></span><span></span></button></div>`;
  }
  const sidebar = document.querySelector("[data-site-sidebar]");
  if (sidebar) {
    const sidebarStateKey = "personal-workbench-sidebar-groups-v2";
    const readSidebarState = () => { try { return JSON.parse(localStorage.getItem(sidebarStateKey) || "{}"); } catch { return {}; } };
    const writeSidebarState = (state) => { try { localStorage.setItem(sidebarStateKey, JSON.stringify(state)); } catch {} };
    const sidebarState = readSidebarState();
    sidebar.innerHTML = `<div class="sidebar-inner"><p class="sidebar-heading">主題導覽</p>${groups.map((group, index) => { const groupId = `nav-group-${index}`; const expanded = sidebarState[index] === true; return `<section class="nav-group-section"><button class="nav-group" type="button" data-nav-group="${index}" aria-expanded="${expanded}" aria-controls="${groupId}"><span>${group}</span><span class="nav-group-chevron" aria-hidden="true">⌄</span></button><div class="nav-group-links" id="${groupId}"${expanded ? "" : " hidden"}>${pages.filter((page) => page.group === group).map((page) => `<a class="nav-link" data-page-key="${page.key}" href="${page.href}"${page.key === current ? ' aria-current="page"' : ""}><span class="nav-icon">${page.icon}</span><span>${page.label}</span></a>`).join("")}</div></section>`; }).join("")}<div class="sidebar-foot"><strong>個人控制台 Skill</strong><span>公開介紹、規劃與使用教學</span></div></div>`;
    sidebar.querySelectorAll("[data-nav-group]").forEach((button) => button.addEventListener("click", () => { const group = button.dataset.navGroup; const expanded = button.getAttribute("aria-expanded") === "true"; const nextExpanded = !expanded; const links = document.getElementById(button.getAttribute("aria-controls")); button.setAttribute("aria-expanded", String(nextExpanded)); if (links) links.hidden = !nextExpanded; const nextState = readSidebarState(); nextState[group] = nextExpanded; writeSidebarState(nextState); }));
  }
  const overlay = document.querySelector("[data-sidebar-overlay]");
  const menuButton = document.querySelector("[data-menu-button]");
  const closeMenu = () => { document.body.classList.remove("nav-open"); menuButton?.setAttribute("aria-expanded", "false"); };
  menuButton?.addEventListener("click", () => { const open = document.body.classList.toggle("nav-open"); menuButton.setAttribute("aria-expanded", String(open)); });
  overlay?.addEventListener("click", closeMenu);
  document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", closeMenu));

  const article = document.querySelector("article[data-doc]");
  const visual = visualSpecs[current];
  if (article && visual && !article.querySelector(".page-visual")) {
    const header = article.querySelector(".article-header");
      header?.insertAdjacentHTML("afterend", `<section class="page-visual" aria-label="${visual.label}"><figure class="visual-card diagram-card"><img src="${visual.diagram}" alt="${visual.diagramAlt}" loading="lazy"><figcaption><span class="visual-label">看懂這一頁</span>${visual.label}。</figcaption></figure></section>`);
  }
  if (article && current === "install" && !article.dataset.installRedesigned) {
    article.querySelectorAll(".content-section").forEach((section) => section.remove());
    article.querySelector(".page-footer")?.insertAdjacentHTML("beforebegin", installGuideMarkup);
    article.dataset.installRedesigned = "true";
  }
  if (article && current === "install" && !article.querySelector("#host-check")) {
    article.querySelector("#source")?.insertAdjacentHTML("beforebegin", hostCheckMarkup);
  }
  if (article && developmentPrompts[current] && !article.querySelector("#activate")) {
    article.querySelector(".page-footer")?.insertAdjacentHTML("beforebegin", developmentPrompts[current]);
    article.querySelector("#activate h2")?.setAttribute("id", "activate-title");
  }
  if (article && current !== "index" && current !== "prompts") {
    const activationSection = article.querySelector("#activate");
    if (activationSection && !activationSection.querySelector("[data-skill-activation]")) {
      activationSection.insertAdjacentHTML("afterbegin", `<div class="callout blue"><strong>先啟用提示詞</strong><p>先讓 AI 載入這套工作規則；如果找不到 Skill，請先告訴我，不要假設已安裝。</p></div><div class="code-card" data-skill-activation><button class="copy-button" type="button" data-copy>複製啟用提示詞</button><pre>${promptText("請啟用 personal-workbench-cockpit Skill。", "請先讀取 SKILL.md 的工作規則，再等待我的下一個問題。", "如果找不到這個 Skill，請明確告訴我，不要假設已安裝。")}</pre><span class="copy-status" aria-live="polite"></span></div>`);
    }
  }
  if (article && current === "install" && !article.querySelector("#host-requirement")) {
    article.querySelector("#source")?.insertAdjacentHTML("beforebegin", hostRequirementMarkup);
  }
  if (article && current === "templates" && !article.querySelector("#dashboard-prompts")) {
    article.querySelector("#case")?.insertAdjacentHTML("beforebegin", templateDashboardPrompts);
    article.querySelector("#dashboard-prompts h2")?.setAttribute("id", "dashboard-prompts-title");
    article.querySelectorAll("#dashboard-prompts pre").forEach((pre) => { pre.textContent = pre.textContent.split("\\n").join(String.fromCharCode(10)); });
  }
  if (article && current === "blueprint") {
    const example = article.querySelector("#example");
    if (example && !example.dataset.redesigned) { example.innerHTML = blueprintExampleMarkup; example.dataset.redesigned = "true"; }
  }
  if (article && current === "cockpit") {
    const model = article.querySelector("#model");
    if (model && !model.dataset.redesigned) { model.innerHTML = cockpitModelMarkup; model.dataset.redesigned = "true"; }
  }
  if (article) {
    article.querySelectorAll("h2").forEach((heading, index) => { if (!heading.id) heading.id = `section-${index + 1}`; });
  }
  const toc = document.querySelector("[data-toc]");
  if (article && toc) {
    const headings = [...article.querySelectorAll("h2[id]")];
    toc.innerHTML = `<div class="toc-title">本頁章節</div>${headings.map((heading) => `<a href="#${heading.id}">${heading.textContent}</a>`).join("")}`;
    if (headings.length > 0 && "IntersectionObserver" in window) {
      const links = [...toc.querySelectorAll("a")];
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)); } }), { rootMargin: "-15% 0px -70% 0px" });
      headings.forEach((heading) => observer.observe(heading));
    }
  }

  const backTop = document.querySelector("[data-back-top]");
  backTop?.setAttribute("aria-label", "回到頂端");
  backTop?.setAttribute("title", "回到頂端");
  const onScroll = () => backTop?.classList.toggle("is-visible", window.scrollY > 420);
  window.addEventListener("scroll", onScroll, { passive: true });
  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelectorAll("[data-copy]").forEach((button) => button.addEventListener("click", async () => {
    const text = button.closest(".code-card")?.querySelector("pre")?.textContent || button.dataset.copy || "";
    try { await navigator.clipboard.writeText(text); } catch { const area = document.createElement("textarea"); area.value = text; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
    const status = button.closest(".code-card")?.querySelector(".copy-status");
    if (status) status.textContent = "已複製，可直接貼到對話中";
    window.setTimeout(() => { if (status) status.textContent = ""; }, 1800);
  }));

  const progressKey = "personal-workbench-doc-progress";
  const readProgress = () => { try { return JSON.parse(localStorage.getItem(progressKey) || "{}"); } catch { return {}; } };
  const writeProgress = (progress) => localStorage.setItem(progressKey, JSON.stringify(progress));
  document.querySelectorAll("[data-progress-key]").forEach((button) => {
    const key = button.dataset.progressKey; const progress = readProgress(); const done = Boolean(progress[key]); button.dataset.complete = String(done); button.textContent = done ? "已完成閱讀" : "標記完成";
    button.addEventListener("click", () => { const next = readProgress(); next[key] = !next[key]; writeProgress(next); const complete = Boolean(next[key]); button.dataset.complete = String(complete); button.textContent = complete ? "已完成閱讀" : "標記完成"; });
  });
  document.querySelector("[data-progress-export]")?.addEventListener("click", () => { const blob = new Blob([JSON.stringify(readProgress(), null, 2)], { type: "application/json" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "personal-workbench-learning-progress.json"; link.click(); URL.revokeObjectURL(link.href); });
  document.querySelector("[data-progress-import]")?.addEventListener("change", (event) => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const data = JSON.parse(String(reader.result)); if (data && typeof data === "object" && !Array.isArray(data)) { writeProgress(data); window.location.reload(); } } catch { window.alert("進度檔案格式無法讀取"); } }; reader.readAsText(file); });
})();
