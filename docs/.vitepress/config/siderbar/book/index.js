import fe from './fe'
import java from './java'
export default {
  ...fe,
  ...java,
  '/book/': [
    {
      text: '学习路线导航',
      items: [
        // This shows `/guide/index.md` page.
        { text: '前端', link: '/book/fe/' },
        { text: 'Java', link: '/book/java/' },
        { text: 'Go', link: '/book/go/' },
        { text: 'Python', link: '/book/python/' }
      ]
    }
  ]
}
