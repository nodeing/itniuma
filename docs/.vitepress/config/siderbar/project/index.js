import fe from './fe'
export default {
  ...fe,
  '/project/': [
    {
      text: '项目导航',
      items: [
        // This shows `/guide/index.md` page.
        { text: '前端', link: '/project/fe/' },
        { text: 'Java', link: '/project/java/' },
        { text: 'Go', link: '/project/go/' },
        { text: 'Python', link: '/project/python/' }
      ]
    }
  ]
}
