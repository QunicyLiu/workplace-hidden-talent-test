import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { randomBytes } from 'node:crypto';
import { join, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const dataDirectory = join(root, '.data');
const usagePath = join(dataDirectory, 'use-counts.json');
const codePath = join(root, 'codes.json');
const maxUses = 3;
const port = Number(process.env.PORT || 8787);
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon' };

if (!existsSync(codePath)) {
  console.error('缺少 codes.json。请复制 codes.example.json 为 codes.json，并设置私密测试密码。');
  process.exit(1);
}

let codeList = JSON.parse(readFileSync(codePath, 'utf8')).codes;
if (!Array.isArray(codeList) || !codeList.length || codeList.some((code) => typeof code !== 'string' || code.length < 6)) {
  throw new Error('codes.json 需要包含至少一个长度不少于 6 的密码。');
}
let codes = new Set(codeList.map((code) => code.trim().toUpperCase()));
const adminKey = process.env.ADMIN_KEY || 'manage-2026';
mkdirSync(dataDirectory, { recursive: true });
if (!existsSync(usagePath)) writeFileSync(usagePath, '{}');
const usage = JSON.parse(readFileSync(usagePath, 'utf8'));
const attempts = new Map();

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
  });
  response.end(JSON.stringify(payload));
}

function reloadCodes() {
  codeList = JSON.parse(readFileSync(codePath, 'utf8')).codes;
  codes = new Set(codeList.map((code) => code.trim().toUpperCase()));
}

function randomCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let value = '';
  const bytes = randomBytes(10);
  for (let index = 0; index < 10; index += 1) value += alphabet[bytes[index] % alphabet.length];
  return `TALENT-${value.slice(0, 5)}-${value.slice(5)}`;
}

function isAdminAuthorized(request, body = {}) {
  return request.headers['x-admin-key'] === adminKey || body.adminKey === adminKey;
}

function persistCodes(nextCodes) {
  writeFileSync(codePath, JSON.stringify({ codes: nextCodes }, null, 2));
  reloadCodes();
}

function sendStatic(request, response, pathname) {
  const dist = resolve(root, 'dist');
  const filename = pathname === '/' ? '/index.html' : pathname;
  const baseDirectory = pathname === '/admin.html' ? resolve(root, 'public') : dist;
  const target = resolve(baseDirectory, '.' + filename);
  if (!target.startsWith(baseDirectory + '\\') && !target.startsWith(baseDirectory + '/')) {
    response.writeHead(403); response.end(); return;
  }
  try {
    if (!statSync(target).isFile()) throw new Error('Not a file');
    const content = readFileSync(target);
    response.writeHead(200, { 'content-type': mimeTypes[extname(target)] || 'application/octet-stream' });
    response.end(content);
  } catch {
    response.writeHead(404); response.end('Not found');
  }
}

createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  if (pathname.startsWith('/api/') && request.method === 'OPTIONS') {
    response.writeHead(204, {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
      'access-control-max-age': '86400',
    });
    response.end();
    return;
  }
  if (pathname === '/api/admin/codes' && request.method === 'GET') {
    if (request.headers['x-admin-key'] !== adminKey) { sendJson(response, 401, { error: '管理员口令不正确。' }); return; }
    sendJson(response, 200, { codes: codeList.map((code) => ({ code, used: usage[code] || 0, remaining: Math.max(0, maxUses - (usage[code] || 0)) })) });
    return;
  }
  if (pathname === '/api/admin/codes' && request.method === 'POST') {
    let body = '';
    for await (const chunk of request) {
      body += chunk;
      if (body.length > 2000) { sendJson(response, 413, { error: '请求内容过长。' }); return; }
    }
    let payload;
    try { payload = JSON.parse(body || '{}'); } catch { sendJson(response, 400, { error: '请求格式错误。' }); return; }
    if (!isAdminAuthorized(request, payload)) { sendJson(response, 401, { error: '管理员口令不正确。' }); return; }
    const count = Math.min(100, Math.max(1, Number.parseInt(payload.count, 10) || 1));
    const generated = [];
    while (generated.length < count) {
      const code = randomCode();
      if (!codes.has(code) && !generated.includes(code)) generated.push(code);
    }
    persistCodes([...codeList, ...generated]);
    sendJson(response, 201, { codes: generated });
    return;
  }
  if (pathname !== '/api/redeem') {
    if (request.method !== 'GET') { response.writeHead(405); response.end(); return; }
    sendStatic(request, response, pathname);
    return;
  }
  if (request.method !== 'POST') { sendJson(response, 405, { error: '请求方式错误' }); return; }
  const ip = request.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const previous = attempts.get(ip) || [];
  const recent = previous.filter((time) => now - time < 60_000);
  if (recent.length >= 15) { sendJson(response, 429, { error: '尝试次数太多，请稍后再试。' }); return; }
  attempts.set(ip, [...recent, now]);
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 1000) { sendJson(response, 413, { error: '输入内容过长。' }); return; }
  }
  let code;
  try { code = String(JSON.parse(body).code || '').trim().toUpperCase(); }
  catch { sendJson(response, 400, { error: '请输入测试密码。' }); return; }
  if (!codes.has(code)) { sendJson(response, 401, { error: '密码不正确，请检查后重试。' }); return; }
  if ((usage[code] || 0) >= maxUses) { sendJson(response, 403, { error: '这个密码的测试次数已用完。' }); return; }
  usage[code] = (usage[code] || 0) + 1;
  writeFileSync(usagePath, JSON.stringify(usage, null, 2));
  sendJson(response, 200, { remaining: maxUses - usage[code] });
}).listen(port, '0.0.0.0', () => console.log(`测试服务已启动：http://localhost:${port}`));
