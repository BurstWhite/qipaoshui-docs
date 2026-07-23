# 常见问题

## 连接后提示「无可用账号」

通常是上游账号未配置模型映射，或在批量修改时跨平台覆盖了 OpenAI 的模型白名单。

- 快速修复：在批量修改里补回透传映射（例如 `gpt-5.3-codex -> gpt-5.3-codex-spark`）。
- 彻底重建：删除并重新添加相关账号。

## 使用 Nginx 反代时多账号粘性会话失效

在 Nginx `http` 块加入：

```nginx
underscores_in_headers on;
```

Nginx 默认会丢弃带下划线的请求头（如 `session_id`），导致粘性会话路由失败。

## 忘记 PostgreSQL 密码

1. 修改 `pg_hba.conf` 将 `scram-sha-256` 改为 `trust`。
2. 重启 PostgreSQL 服务后无密码登录并 `ALTER USER` 重置密码。
3. 改回 `scram-sha-256` 并重启。

## 仍无法解决？

请在 [GitHub Issues](https://github.com/BurstWhite/qipaoshui/issues) 提交问题并附上：
- 服务端版本号（后台左上角可见）
- 复现步骤与报错截图