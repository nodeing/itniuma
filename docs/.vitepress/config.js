import nav from './config/nav'
import sidebar from './config/siderbar'
export default {
  appearance: 'white',
  title: '洛邪',
  description: 'rust学习笔记',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    siteTitle: '洛邪',
    logo: '/logo.png',
    outlineTitle: '大纲',
    nav,
    sidebar,
    outline: [1, 3],
    footer: {
      message: '我的微信: nodeing-cn',
      copyright:
        "课程内容版权均归 洛邪 版权所有;ICP备案号：<a href='https://beian.miit.gov.cn/#/Integrated/index'>蜀ICP备2022017859号</a>"
    }
  }
}
