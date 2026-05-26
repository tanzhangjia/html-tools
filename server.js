const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 1200;
const TOOLS_ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
};

// ─── 其他服务路由 ───────────────────────────────
// 如果 1200 端口之前有其他服务，在这里添加路由
// 例如：
// const PROXY_TARGETS = [
//   { prefix: '/other-service', target: 'http://localhost:3001' },
// ];

// ─── 工具页面路由 ───────────────────────────────
function serveTool(urlPath, res) {
  // 对 /html-tools/xxx 重写为本地文件 /xxx
  let relPath = urlPath.replace(/^\/html-tools/, '') || '/';
  if (relPath === '/') relPath = '/index.html';

  const filePath = path.join(TOOLS_ROOT, relPath);

  // 安全检查：不能越狱到 TOOLS_ROOT 之外
  if (!filePath.startsWith(TOOLS_ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('Internal Server Error');
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

// ─── 主路由 ─────────────────────────────────────
const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // 1) 工具页面路由
  if (urlPath.startsWith('/html-tools')) {
    return serveTool(urlPath, res);
  }

  // 2) 其他服务路由（添加 proxy 逻辑）
  // 如果端口 1200 之前有其他服务，在这里处理

  // 3) 默认：404
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`HTML 工具集: http://localhost:${PORT}/html-tools/`);
  console.log(`  → 编辑器:   http://localhost:${PORT}/html-tools/editor.html`);
  console.log(`  → HTML转PDF: http://localhost:${PORT}/html-tools/html2pdf.html`);
});
