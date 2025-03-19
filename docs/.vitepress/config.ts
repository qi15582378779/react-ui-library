import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/my-react-ui-library/",
  title: "React UI Library",
  description: "一个现代化的React UI组件库",
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '介绍', link: '/guide/' },
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Accordion 手风琴', link: '/components/accordion' },
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'ScrollArea 滚动区域', link: '/components/scroll-area' },
          ]
        },
        {
          text: '主题',
          items: [
            { text: 'Theme 主题', link: '/components/theme' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/react-ui-library' }
    ]
  }
})