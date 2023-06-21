import article from './article'

export default {
  ...article,
  '/article/': [
    {
      text: '文章',
      items: [
        // This shows `/guide/index.md` page.
        { text: '文章归档', link: '/article/' },
        { text: '重学CSS', link: '/article/css/' },
        { text: '重学Linux', link: '/article/linux/' },
        { text: '重学Java', link: '/article/java/' },
        { text: '重学Python', link: '/article/python/' }
      ]
    }
  ]
}
