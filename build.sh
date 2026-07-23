#!/usr/bin/env bash
# Cloudflare Workers Builds 构建脚本
# 确保可用包管理器 -> 安装依赖 -> 构建 VitePress -> 校验产物存在
set -euo pipefail

echo "==> Node: $(node -v)  npm: $(npm -v)"

# 优先用 pnpm；若环境没装则通过 corepack 启用
if ! command -v pnpm >/dev/null 2>&1; then
  echo "==> pnpm 未预装，启用 corepack..."
  corepack enable
  corepack prepare pnpm@latest --activate
fi
echo "==> pnpm: $(pnpm -v)"

echo "==> 安装依赖..."
pnpm install --frozen-lockfile=false

echo "==> 构建 VitePress..."
pnpm docs:build

# 校验产物确实生成，避免 wrangler 报 "assets.directory does not exist"
DIST="docs/.vitepress/dist"
if [ ! -d "$DIST" ]; then
  echo "✘ 构建产物目录 $DIST 不存在，构建失败" >&2
  ls -la docs/.vitepress/ || true
  exit 1
fi
echo "==> 构建产物已生成：$DIST"
ls -la "$DIST" | head