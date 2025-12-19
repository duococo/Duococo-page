// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import MNavLinks from './components/MNavLinks.vue'
import ArticleMetadata from "./components/ArticleMetadata.vue"


export default {
  extends: DefaultTheme,
  
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
    
  },
  

    setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'duococo/Duococo-page', //仓库
      repoId: 'R_kgDOQoVoiQ', //仓库ID
      category: 'General', // 讨论分类
      categoryId: 'DIC_kwDOQoVoic4Czwq3', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
    },

    
  enhanceApp({ app, router, siteData }) {
        app.component('MNavLinks' , MNavLinks)
    // 注册全局组件
    app.component('ArticleMetadata' , ArticleMetadata)
  }
} satisfies Theme
