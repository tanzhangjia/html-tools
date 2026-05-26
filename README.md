# 🛠 HTML 工具集 / HTML Tools

纯前端 HTML 编辑器 + HTML 转 PDF 工具，所有处理在浏览器内完成，无需后端服务器。

A pure front-end HTML editor and HTML-to-PDF tool. Everything runs in your browser — no server needed.

---

## 🇨🇳 中文

### ✏️ HTML 编辑器

可视化编辑 HTML 页面，所见即所得。

- 粘贴 HTML 代码加载 / 同步编辑内容
- 可视化编辑：复制、粘贴、删除元素
- 拖拽移动元素位置
- 新增内容模板（标题、文本框、图片容器、按钮、分隔线）
- 图片素材库，支持点击选中后本地替换
- 上传本地 `.html` 文件编辑
- 导出编辑后的 HTML 文件下载
- 缩放预览（百分比 / 自适应窗口）
- PDF 导出（完整长页 / 分页 A4）
- 一键跳转到 HTML 转 PDF 工具

### 📄 HTML 转 PDF

上传 HTML 文件，一键转为完整长页 PDF。

- 点击上传或拖拽 HTML 文件
- 实时预览渲染效果
- 按内容实际尺寸生成单页超长 PDF（不分页）
- 转换 + 下载两步操作
- 支持从编辑器一键跳转
- 纯前端处理，文件不上传服务器

---

## 🇬🇧 English

### ✏️ HTML Editor

WYSIWYG HTML editor with visual editing.

- Paste HTML code to load / sync edited content
- Visual editing: copy, paste, delete elements
- Drag and drop to re-position elements
- Add content templates (heading, text, image, button, divider)
- Image gallery with click-to-select and local replacement
- Upload local `.html` files for editing
- Download edited HTML as a file
- Zoom preview (percentage / fit window)
- PDF export (full-page or A4 paginated)
- One-click jump to the HTML-to-PDF tool

### 📄 HTML to PDF

Upload an HTML file and convert it to a full-page PDF in one click.

- Click to upload or drag & drop HTML files
- Live preview of rendered content
- Generates a single long-page PDF matching the actual content size
- Convert + download, two-step operation
- Supports one-click jump from the HTML editor
- Fully client-side — files never leave your browser

---

## 🚀 Quick Start

### Option 1: Open directly

Open `index.html` in any browser, or open individual tool pages.

### Option 2: Local server

```bash
node server.js
# or
bash start.sh
```

Then visit: `http://localhost:1200/html-tools/`

---

## 🧱 Tech Stack

- **html2canvas** — page screenshot
- **jsPDF** — PDF generation
- **Tailwind CSS** — UI styling
- **Google Fonts** — Noto Sans SC / Source Code Pro / Roboto Flex

All dependencies are bundled in `lib/` and `fonts/` — fully offline.

---

## 📁 Project Structure

```
html-tools/
├── index.html          # Home / navigation page
├── editor.html         # HTML editor
├── html2pdf.html       # HTML to PDF converter
├── server.js           # Local dev server
├── start.sh            # Startup script
├── lib/                # JavaScript dependencies
│   ├── tailwind.js
│   ├── html2canvas.min.js
│   └── jspdf.umd.min.js
├── fonts/              # Font files
│   ├── google-fonts.css
│   ├── material-icons.css
│   └── *.ttf
└── css/
```

---

## 📄 License

MIT
