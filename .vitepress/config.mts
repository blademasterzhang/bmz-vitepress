import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "剑圣智能软件工作室",
  description: "剑圣智能软件工作室",
  head: [
    ['link', { rel: 'icon', href: '/logo2.svg' }]
  ],
  base: '/bmz-vitepress/',
  themeConfig: {
    logo: {
      light: '/logo1.svg',
      dark: '/logo2.svg'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '实例', 
        items: [
          { text: 'Vue 2', link: '/vue2/' },
          { text: 'markdown实例', link: '/markdown-examples' }
        ]
       }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 实例', link: '/markdown-examples' },
          { text: 'Runtime API 实例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    search: {
      provider: 'local'
    }
  }
})
