import ai from './ai'
import fe from './fe'
import go from './go'

export default {
  ...ai,
  ...fe,
  ...go,
  '/learn-path/': [
    {
      text: '路线导航',
      items: [
        { text: '前端', link: '/learn-path/fe/' },
        { text: 'Go', link: '/learn-path/go/' },
        { text: 'Python', link: '/learn-path/python/' },
        { text: 'JavaEE', link: '/learn-path/java/' },
        { text: '大数据', link: '/learn-path/big-data/' },
        { text: '人工智能', link: '/learn-path/ai/' },
        { text: 'Linux云计算', link: '/learn-path/linux/' },
        { text: '产品经理', link: '/learn-path/pm/' },
        { text: '软件测试', link: '/learn-path/qa/' },
        { text: '网络安全', link: '/learn-path/ns/' }
      ]
    }
  ]
}
