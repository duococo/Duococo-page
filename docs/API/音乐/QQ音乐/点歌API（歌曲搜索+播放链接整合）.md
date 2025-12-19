# 点歌 API <Badge type="tip" text="2025/7/22 正常服务" /><Badge type="warning" text="推荐指数🌟🌟🌟" />

:::tip 本API来自落月API（ <https://doc.vkeys.cn/api-doc/> ）
原文档链接：<https://doc.vkeys.cn/api-doc/v2/%E9%9F%B3%E4%B9%90%E6%A8%A1%E5%9D%97/QQ%E9%9F%B3%E4%B9%90/1-tencent.html><br>
*当前 API 为 V2 版本<br>
*已完整标注原文档链接，如有侵权行为请联系duococo删除！

:::

请求方式: <Badge type="warning" text="GET / POST" />
返回格式: <Badge type="warning" text="application/json " />

## API链接

<https://api.vkeys.cn/v2/music/tencent>
:::info 请求示例
<https://api.vkeys.cn/v2/music/tencent?word=狐妖小红娘><br>
<https://api.vkeys.cn/v2/music/tencent?word=狐妖小红娘&choose=1&quality=8><br>
<https://api.vkeys.cn/v2/music/tencent?id=105648974><br>
<https://api.vkeys.cn/v2/music/tencent?mid=0023CVP23SH17s><br>
<https://api.vkeys.cn/v2/music/tencent?mid=0023CVP23SH17s&ekey=1！>
:::

## 请求参数

| 接口名称     | 是否必填                                    | 参数类型                                 | 接口说明                   |
| ----------- | ------------------------------------------ | --------------------------------------- | -------------------------- |
| word        | <Badge type="warning" text="必须" />        | <Badge type="info" text="string" />       | 歌名（有id或mid参数可不填）                    |
| page        | <Badge type="warning" text="可选" />        | <Badge type="info" text="int" />     | 页数（默认为1）     |
| num       | <Badge type="warning" text="可选" />        | <Badge type="info" text="int" />       | 每页显示数（默认为10）<br>区间：[1,60]                    |
| choose       | <Badge type="warning" text="可选" />        | <Badge type="info" text="int" />     | 选择歌曲（0 不可填写）     |
| grp      | <Badge type="warning" text="可选" />        | <Badge type="info" text="int" />       | 多版本音乐序号<br>如需使用参数num为必填                    |
| quality       | <Badge type="warning" text="可选" />        | <Badge type="info" text="int" />     | 最大支持音质（默认值14）<br>区间：[0,16]     |
| id        | <Badge type="warning" text="必须 / 可选" />        | <Badge type="info" text="int" />       | 根据音乐id获取音乐链接<br>(id与mid选择其中一个即可)                  |
| mid      | <Badge type="warning" text="必须 / 可选" />        | <Badge type="info" text="string" />     | 根据音乐mid获取音乐链接<br>(id与mid选择其中一个即可)     |
| type       | <Badge type="warning" text="可选" />        | <Badge type="info" text="int" />       | 歌曲类型（默认为0）                   |
| ekey        | <Badge type="warning" text="可选" />        | <Badge type="info" text="bool" />     | 是否获取加密的音乐链接     |

:::tip 关于 ekey
ekey是加密音乐文件的密钥，可使用解密网站获取对应的解密文件<br>
ekey解密网站：<https://um-react.netlify.app/>
:::

## quality参数说明（音质选择）

:::warning 参数提示
虽然此 API 提供了 15，16 音质，但我们不推荐你使用
:::

:::danger  大小警告
臻品母带 2.0 音质文件大小普遍在 100MB 以上，将耗费较多网络流量，请谨慎选择！
:::

| 参数值      | 说明                   |
| ----------- | ------------------------- |
| 0        | 试听音质（QQ音乐客户端试听 VIP 歌曲时使用的音质）   |
| 1~3       | 有损音质（意义未知）  |
| 4~7        | 标准音质       |
| 8 ~ 9       | 8为HQ高音质，9为HQ高音质（增强）       |
| 10       | SQ无损音质         |
| 11        | Hi-Res音质               |
| 12     | 杜比全景声（Dolby Atmos）      |
| 13       | 臻品全景声               |
| 14        | 臻品母带2.0（大小过大）           |
| 15        | AI伴唱模式（4轨，2原唱2伴唱）       |
| 16        | AI5.1音质（6音轨）       |

## 参数type可选值（歌曲类型）

:::warning 参数提示
此参数只对id点歌和mid点歌有效，此模式由于无法确定歌曲类型，所以由用户提供。同一个id的情况下不同歌曲类型返回不同歌曲
:::

| 参数值      | 说明                   |
| ----------- | ------------------------- |
| 0或1        | 常规歌曲  |
| 111      | 华语群星  |
| 112        | 铃声      |
| 113     | 伴奏 |

## 返回值

### 正确返回示例

::: code-group

```json[搜索模式]
{
    "code": 200,
    "message": "请求成功！",
    "data": [
        {
            "id": 105648974,
            "mid": "0023CVP23SH17s",
            "vid": "v00199a1i1e",
            "song": "梦回还",
            "subtitle": "《狐妖小红娘·王权篇》网络动画片头曲",
            "album": "狐妖小红娘 动画原声带",
            "singer": "呦猫UNEKO",
            "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000wd19g0wTd0d.jpg",
            "pay": "付费",
            "time": "2016-07-08",
            "type": 0,
            "bpm": 84,
            "quality": "臻品母带2.0",
            "grp": [
                {
                    "id": 235069670,
                    "mid": "001SYUfq0ou27J",
                    "vid": "i0031dmklxx",
                    "song": "梦回还",
                    "subtitle": "《狐妖小红娘·王权篇》网络动画片头曲",
                    "album": "狐妖小红娘·王权篇 动画原声大碟 轮转",
                    "singer": "呦猫UNEKO",
                    "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000LAXp222pE4w.jpg",
                    "pay": "付费",
                    "time": "2019-07-31",
                    "type": 0,
                    "bpm": 84,
                    "quality": "臻品母带2.0",
                    "grp": []
                }
            ]
        }
    ],
    "time": "2024-08-03 18:37:34",
    "pid": 12,
    "tips": "欢迎使用API-Server"
}
```

```json[点歌模式]
{
    "code": 200,
    "message": "请求成功！",
    "data": {
        "id": 105648974,
        "mid": "0023CVP23SH17s",
        "vid": "v00199a1i1e",
        "song": "梦回还",
        "subtitle": "《狐妖小红娘·王权篇》网络动画片头曲",
        "album": "狐妖小红娘 动画原声带",
        "singer": "呦猫UNEKO",
        "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000wd19g0wTd0d.jpg",
        "pay": "付费",
        "time": "2016-07-08",
        "type": 0,
        "bpm": 84,
        "quality": "SQ无损音质",
        "interval": "4分10秒",
        "link": "https://i.y.qq.com/v8/playsong.html?songmid=0023CVP23SH17s&type=0",
        "size": "56.05MB",
        "kbps": "1862kbps",
        "url": "http://ws.stream.qqmusic.qq.com/F000003t4TGX46UGp7.flac?guid=api.vkeys.cn&vkey=F052EA8F74368F9021DE77360BA46DD0F10BC87EA5749271DC4B1F50258B00C258FC2D95EEB95A516470289AC1A11FE56AF09877E8225816&uin=3503185131&fromtag=119114",
        "ekey": ""
    },
    "time": "2024-08-01 12:25:49",
    "pid": 19236,
    "tips": "欢迎使用API-Server"
}
```

:::

| 接口名称     | 参数类型                                    | 参数说明                                    |
| ----------- | ------------------------------------------ | ------------------------------------------ |
| code     | <Badge type="info" text="code" />          | 请求状态码，200为正常，非200为异常          |
| message         | <Badge type="info" text="string" />        |  响应信息，请求成功时为“请求成功！”         |
| data      | <Badge type="info" text="array" />        | 响应数据，详见[此处](点歌API（歌曲搜索+播放链接整合）.html#data参数说明)         |
| time        | <Badge type="info" text="date" />        | 请求时间         |
| pid        | <Badge type="info" text="int" />        | 未知（可能是请求ID）         |
| tips       |  <Badge type="info" text="string" />        | 未知     |

### Data（data.grp）参数说明

| 接口名称     | 参数类型                                    | 参数说明                                    |
| ----------- | ------------------------------------------ | ------------------------------------------ |
| id     | <Badge type="info" text="number" />          | 歌曲ID          |
| mid       | <Badge type="info" text="string" />        |  歌曲MID         |
| vid      | <Badge type="info" text="string" />        | 此歌曲的MVID       |
| song         | <Badge type="info" text="string" />        | 歌曲名称          |
| subtitle       | <Badge type="info" text="string" />        | 歌曲副标题          |
| album        |  <Badge type="info" text="string" />        | 此歌曲的专辑     |
| singer     | <Badge type="info" text="string" />          | 歌曲歌手        |
| cover      | <Badge type="info" text="string" />        | 歌曲封面         |
| pay     | <Badge type="info" text="string" />        | 此歌曲是/否付费      |
| time  | <Badge type="info" text="string" />        | 歌曲发布时间（不确定）         |
| type      | <Badge type="info" text="string" />        | 见[此处](点歌API（歌曲搜索+播放链接整合）.html#参数type可选值-歌曲类型)          |
| bpm        |  <Badge type="info" text="int" />        | 此歌曲的BPM     |
| quality     | <Badge type="info" text="string" />          | 歌曲音质<br>见[此处](点歌API（歌曲搜索+播放链接整合）.html#quality参数说明-音质选择)           |
| grp       | <Badge type="info" text="array" />        |  歌曲其他版本信息        |

### Data（点歌模式）特有参数说明

| 接口名称     | 参数类型                                    | 参数说明                                    |
| ----------- | ------------------------------------------ | ------------------------------------------ |
| interval   | <Badge type="info" text="string" />          | 歌曲总时长         |
| link      | <Badge type="info" text="string" />        |  歌曲官网链接        |
| size      | <Badge type="info" text="string" />        | 歌曲文件大小    |
| kbps         | <Badge type="info" text="string" />        | 歌曲文件比特率   |
| url       | <Badge type="info" text="string" />        | 歌曲链接          |
| ekey      |  <Badge type="info" text="string" />        | 见[此处](点歌API（歌曲搜索+播放链接整合）.html#请求参数)        |

### 错误返回示例

:::warning 暂无错误返回示例！
后续将会补充
:::

## 代码参考

:::warning 暂无代码参考！
后续将会补充
:::
