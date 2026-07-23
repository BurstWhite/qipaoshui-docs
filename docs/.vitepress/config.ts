import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '气泡水 Sub2API',
  description: '气泡水 Sub2API 使用教程文档',
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://docs.qipaoshui.buzz',
  },
  themeConfig: {
    nav: [
      { text: '开始使用', link: '/guide/getting-started' },
      { text: '使用指南', link: '/guide/usage' },
      { text: '常见问题', link: '/guide/faq' },
    ],
    sidebar: [
      {
        text: '教程',
        items: [
          { text: '开始使用', link: '/guide/getting-started' },
          { text: '使用指南', link: '/guide/usage' },
          { text: '常见问题', link: '/guide/faq' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BurstWhite/qipaoshui' },
    ],
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',
  },
})