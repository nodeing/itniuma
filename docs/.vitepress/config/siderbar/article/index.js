import article from './article'

export default {
  ...article,
  '/article/': [
    {
      text: '导航',
      items: [
        // This shows `/guide/index.md` page.
        { text: '文章归档', link: '/article/' },
        { text: '前端面试', link: '/article/interview/fe/' },
        { text: '重学CSS', link: '/article/css/' },
        { text: '重学Linux', link: '/article/linux/' },
        { text: '重学Java', link: '/article/java/' },
        { text: '重学Python', link: '/article/python/' },
        { text: '英语学习笔记', link: '/article/english/' }
      ]
    }
  ]
}
