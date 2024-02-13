import nav from './config/nav'
import sidebar from './config/siderbar'
export default {
  title: '牛马程序员',
  base: '/',
  description:
    '牛马程序员编程笔记｜web3教程｜Java开发｜python开发｜前端开发｜Golang开发',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.12.0/katex.min.css'
      }
    ],
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a1928e3d15e2ea2a39cf19172f3a9918";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();

      `
    ]
  ],
  themeConfig: {
    siteTitle: '牛马程序员',
    logo: '/logo.png',
    outlineTitle: '大纲',
    nav,
    sidebar,
    outline: [1, 3],
    footer: {
      message: '我的微信: nodeing-cn',
      copyright:
        "课程内容版权均归 洛邪 版权所有;ICP备案号：<a href='https://beian.miit.gov.cn/#/Integrated/index'>蜀ICP备2022017859号-4</a>"
    }
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!markdownItLatex
      md.use(require('markdown-it-katex'))
    }
  }
}
