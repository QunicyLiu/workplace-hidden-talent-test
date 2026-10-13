import { spawn } from 'node:child_process';
import { spawnSync } from 'node:child_process';

const build = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], { stdio: 'inherit', shell: process.platform === 'win32' });
if (build.status !== 0) process.exit(build.status || 1);

const server = spawn(process.execPath, ['server.mjs'], {
  stdio: 'inherit',
  env: { ...process.env, PORT: '5173' },
});

function stop() { server.kill(); }
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
server.on('exit', (code) => process.exitCode = code || 0);
