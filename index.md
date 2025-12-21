---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "duococo"
  text: "多coco制作了一些文档"
  tagline: duococo教程系列
  actions:
    - theme: brand
      text: go go go!
      link: \docs\index\index.md
    - theme: alt
      text: coco快捷导航pro max！
      link: /docs/nav/
    - theme: alt
      text: 官方聊天室！
      link: https://chat.hinincs.top/#/chat/channel/1
  image:
      src: https://static.codemao.cn/flowchunkflex/ryW6fbpIxg.png?hash=Fi87WXogaaaZqReQugMCPjZOPXhL
      alt: 这是一个多儿



features:
  - title: 震撼美味！
    details: 定期更新最新内容，😋💩（赤石）也要吃热乎的
  - title: 姬霓太美
    details: 我不知道这里怎么填
  - title: 简单易用
    details: 简单的不用教，不简单的文档里会写。小训练师，你们就甭操心啦！
---

<br>
<br>

<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: 'https://static.codemao.cn/flowchunkflex/Hk-C9uvIxx.jpg?hash=FqLgfIjRXxxDq_Mot4VozW6yBL10',
    name: 'Explore114',
    title: '项目发起者，文档编写人员',
    links: [
      { icon: 'github', link: 'https://github.com/Explore114' },
    ]
  },
    {
    avatar: 'https://foruda.gitee.com/avatar/1737804117832914260/14728329_enzyme-youming-studio_1737804117.png!avatar200',
    name: '酶游明',
    title: '文档编写人员',
    links: [
      { icon: 'github', link: 'https://github.com/mymstudio/' },
      { icon: 'gitee', link: 'https://gitee.com/enzyme-youming-studio' },
    ]
  },
  
]
</script>

## 编写/开发团队

努力写文档的多儿们！

<VPTeamMembers size="small" :members />

## 友情链接
<a href="/docs/nav/#友情链接">友情链接从陋室（底部栏）升级到校长办公室啦！点击看看吧！</a>
