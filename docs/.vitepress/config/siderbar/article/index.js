import article from './article'

export default {
  ...article,
  '/article/': [
    {
      text: '文章归档',
      items: [
        // This shows `/guide/index.md` page.
        { text: '热点资讯', link: '/article/news/' }
      ]
    }
  ]
}
