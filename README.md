# 🛠 HTML 工具集

纯前端 HTML 编辑器 + HTML 转 PDF 工具，所有处理在浏览器内完成，无需后端服务器。

## 工具

### ✏️ HTML 编辑器 (`editor.html`)

可视化编辑 HTML 页面，所见即所得。

**功能：**
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

### 📄 HTML 转 PDF (`html2pdf.html`)

上传 HTML 文件，一键转为完整长页 PDF。

**功能：**
- 点击上传或拖拽 HTML 文件
- 实时预览渲染效果
- 按内容实际尺寸生成单页超长 PDF（不分页）
- 转换 + 下载两步操作
- 支持从编辑器一键跳转
- 纯前端处理，文件不上传服务器

## 快速开始

### 方式一：直接打开

用浏览器打开 `index.html` 或直接访问各个工具页面即可。

### 方式二：本地服务器

```bash
# 安装依赖（无需安装，纯静态文件）
# 启动服务器
node server.js
# 或
bash start.sh
```

然后访问 `http://localhost:1200/html-tools/`

## 技术栈

- **html2canvas** — 页面截图
- **jsPDF** — PDF 生成
- **Tailwind CSS** — UI 样式
- **Google Fonts** — Noto Sans SC / Source Code Pro / Roboto Flex

所有依赖已下载到 `lib/` 和 `fonts/` 目录，完全离线可用。

## 预览

在线预览：[服务器地址](http://121.199.61.74:1200/html-tools/)

## 项目结构

```
html-tools/
├── index.html          # 首页/导航
├── editor.html         # HTML 编辑器
├── html2pdf.html       # HTML 转 PDF
├── server.js           # 本地服务器
├── start.sh            # 启动脚本
├── lib/                # 前端依赖
│   ├── tailwind.js
│   ├── html2canvas.min.js
│   └── jspdf.umd.min.js
├── fonts/              # 字体文件
│   ├── google-fonts.css
│   ├── material-icons.css
│   └── *.ttf
└── css/
```
