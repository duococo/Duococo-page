---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
---

<style src="/.vitepress/theme/untils/nav.css"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>

# coco快捷导航pro max！（吗？）

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br>

::: danger 版权警告😨

本站部分链接源于互联网和原coco**已标明开源协议/知识产权协议的**我们将严格遵守，未标明的将默认按照**MIT开源协议**或**知识共享署名-非商业性使用 4.0 国际许可协议**制作引导链接！我们会及时删除！图标版权归原作者，未标明图标的将使用平台图标。如有版权问题请与Duococo联系

右上角均标有作者/制作团队的哦！

:::