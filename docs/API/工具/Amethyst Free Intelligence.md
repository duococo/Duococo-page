# Amethyst Free Intelligence <Badge type="tip" text="2025/7/31 正常服务" /><Badge type="warning" text="推荐指数🌟🌟🌟🌟🌟" />

:::tip 嗯对，免费的AI不用白不用
（虽然但是宝子们不要滥用哦！靴靴）
本文档仅收录OpenAI格式
:::

请求方式: <Badge type="warning" text="POST" /> 
返回格式: <Badge type="warning" text="application/json " /> 
## API链接
https://free.amethyst.ltd/v1/chat/completions

## 请求参数

| 请求头                                   |
| --------------------------------------- |
| 'Content-Type': 'application/json'      | 
| 'Authorization': 'Bearer sk-AmethystFree' |


| 接口名称     | 是否必填                                     | 参数类型                                 | 接口说明                    |
| ----------- | ------------------------------------------- | --------------------------------------- | -------------------------- |
| model       | <Badge type="warning" text="必须" />         | <Badge type="info" text="string" />    | 指定使用的模型                |
| messages    | <Badge type="warning" text="必须" />         | <Badge type="info" text="Array" />     | 包含对话消息的数组<Badge type="tip" text="数组中的对象包含 role（角色，这里是 "user" 表示用户）和 content（消息内容 "你好，世界！"）" />     |

## 返回值
:::danger 暂无返回值参考
原文档没有填写返回值，后续会补充
:::

### 正确返回示例
```json
{
    "id":"chatcmpl-2492f079-1c51-4475-82f0-4a5f236e6178",
    "object":"chat.completion",
    "created":1753979785,
    "model":"gemini-2.5-pro",
    "choices":[{"index":0,"message":{"role":"assistant","content":"你好！很高兴与你交谈。\n\n有什么可以帮助你的吗？无论你是想寻找信息、获得灵感，还是只是想聊聊天，我都在这里。",
    "reasoning_content":"",
    "tool_calls":[]},"finish_reason":"stop"}],
    "usage":{"prompt_tokens":5,"completion_tokens":36,"total_tokens":1007}}
}
```

### 错误返回示例（401） <Badge type="danger" text="请求头参数配置错误" />
```json
{
    {"error":{"code":"http_error","message":"Missing Authorization header"}}
}
```
## 代码参考

:::warning 暂无图形化代码参考！
:::

::: code-group

```curl [shell]
# curl 示例 (chat/completions)
curl https://free.amethyst.ltd/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-AmethystFree" \
  -d '{
    "model": "gemini-2.5-pro",
    "messages": [
      { "role": "user", "content": "你好，世界！" }
    ]
  }'

```
:::



:::tip 原文档没有说明返回值的接口说明哦，后续会补充！
此话写于2025/7/31
:::

