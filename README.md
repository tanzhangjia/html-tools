# 🛠️ HTML Tools

纯前端 HTML 编辑器 + HTML 转 PDF 工具，所有处理在浏览器内完成，无需后端服务器。

Pure frontend HTML tools — no backend, open and use.

---

## 中文 / Chinese

| 工具 | 说明 |
|------|------|
| [✏️ HTML 编辑器](https://tanzhangjia.github.io/html-tools/editor.html) | 粘贴代码 → 拖拽编辑 → 同步导出。支持上传 HTML、导出 HTML、PDF 导出 |
| [📄 HTML 转 PDF](https://tanzhangjia.github.io/html-tools/to-pdf.html) | 上传 HTML 文件 → 完整长页 PDF 输出。支持拖拽上传 |

## English

| Tool | Description |
|------|-------------|
| [✏️ HTML Editor](https://tanzhangjia.github.io/html-tools/editor-en.html) | Paste HTML → Drag & drop edit → Sync code. Upload HTML, export HTML, PDF export. |
| [📄 HTML to PDF](https://tanzhangjia.github.io/html-tools/to-pdf-en.html) | Upload HTML file → Full page PDF output. Drag & drop supported. |

---

## Features

### ✏️ HTML Editor
- Paste HTML code / Sync edited content
- Visual editing: copy, paste, delete elements
- Drag & drop to reposition elements
- Add content templates (heading, text, image, button, divider)
- Image gallery with local replacement
- Upload local `.html` files
- Download edited HTML
- Zoom preview
- PDF export (full-page / A4 paginated)
- One-click jump to HTML-to-PDF tool

### 📄 HTML to PDF
- Click or drag & drop to upload HTML
- Live preview
- Generates a single long-page PDF
- Convert + download, two-step
- One-click jump from editor
- Fully client-side

---

## Quick Start

Open any page directly in your browser, or run a local server:

```bash
node server.js
# or
bash start.sh
```

Visit `http://localhost:1200/html-tools/`

---

## Tech Stack

- **html2canvas** — page screenshot
- **jsPDF** — PDF generation
- **Tailwind CSS** — UI styling
- **Google Fonts** — Noto Sans SC / Source Code Pro / Roboto Flex

All dependencies bundled in `lib/` and `fonts/` — fully offline.

---

## Project Structure

```
html-tools/
├── index.html / index-en.html  # Home pages (ZH / EN)
├── editor.html / editor-en.html  # HTML editor (ZH / EN)
├── to-pdf.html / to-pdf-en.html  # HTML to PDF (ZH / EN)
├── server.js           # Local dev server
├── start.sh            # Startup script
├── lib/                # JavaScript dependencies
├── fonts/              # Font files
└── css/
```

---

## License

MIT
