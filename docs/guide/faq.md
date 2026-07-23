# 常见问题

## GPT 5.6 系列模型对话时生图失败

部分用户通过平台将 API Key 一键导入 CC Switch 后，图片相关请求异常。

**解决方法：**

1. 打开 CC Switch，切换到 Codex
2. 找到导入的服务商，点击「编辑」
3. 在 `config.toml` 配置编辑区域，找到 `[model_providers.custom]` 配置段
4. 加入以下两行：

```toml
requires_openai_auth = false
http_headers = { "x-openai-actor-authorization" = "local-image-extension" }
```

**完整配置示例：**

```toml
model_provider = "custom"
model = "gpt-5.6-sol"
model_reasoning_effort = "xhigh"

[model_providers.custom]
name = "气泡水"
base_url = "https://qipaoshui.buzz"
wire_api = "responses"
requires_openai_auth = false
http_headers = { "x-openai-actor-authorization" = "local-image-extension" }
```

保存配置后，在 CC Switch 中重新启用或切换一次该服务商，并重启 Codex。

::: warning 注意事项
- 这两行必须放在 `[model_providers.custom]` 下，不能写在配置文件顶层
- 如果重新导入 API Key、删除后重新创建服务商，或 CC Switch 重新生成了配置，请再次检查这两项是否仍然存在
:::

## 连接后提示「无可用账号」

通常是上游账号未配置模型映射，或在批量修改时跨平台覆盖了 OpenAI 的模型白名单。

- **快速修复**：在批量修改里补回透传映射（例如 `gpt-5.3-codex -> gpt-5.3-codex-spark`）
- **彻底重建**：删除并重新添加相关账号

## 使用 Nginx 反代时多账号粘性会话失效

在 Nginx `http` 块加入：

```nginx
underscores_in_headers on;
```

Nginx 默认会丢弃带下划线的请求头（如 `session_id`），导致粘性会话路由失败。

## 忘记 PostgreSQL 密码

1. 修改 `pg_hba.conf` 将 `scram-sha-256` 改为 `trust`
2. 重启 PostgreSQL 服务后无密码登录并 `ALTER USER` 重置密码
3. 改回 `scram-sha-256` 并重启

## 仍无法解决？

请在 [GitHub Issues](https://github.com/BurstWhite/qipaoshui/issues) 提交问题并附上：
- 服务端版本号（后台左上角可见）
- 复现步骤与报错截图