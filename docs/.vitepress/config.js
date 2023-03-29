import nav from './config/nav'
import sidebar from './config/siderbar'
export default {
  appearance: 'white',
  title: '洛邪',
  base: 'itboma',
  description: '洛邪的编程笔记｜web3教程｜web3开发｜区块链｜智能合约｜dapp开发',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8d087a0513b85ce3d318e24f4ff10057";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
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
