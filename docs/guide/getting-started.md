# 开始使用

本篇带你完成气泡水 Sub2API 的初次部署与基本使用。

## 部署前准备

- 一台 Linux 服务器（amd64 或 arm64）
- PostgreSQL 15+ 已安装并运行
- Redis 7+ 已安装并运行
- 拥有 root 权限

## 脚本一键安装（推荐）

```bash
curl -sSL https://raw.githubusercontent.com/BurstWhite/qipaoshui/main/deploy/install.sh | sudo bash
```

脚本会自动检测系统架构、下载最新发行版二进制、安装到 `/opt/sub2api` 并创建 systemd 服务。

## 初始化配置

安装完成后启动服务并开放 8080 端口：

```bash
sudo systemctl start sub2api
sudo systemctl enable sub2api
```

浏览器访问 `http://你的服务器IP:8080`，根据引导完成：

- 数据库配置
- Redis 配置
- 管理员账号创建

## 升级

可直接在管理后台左上角点击「检查更新」一键升级，支持回滚。

::: tip
更多部署细节可参考项目根目录 README 的 Deployment 章节。
:::