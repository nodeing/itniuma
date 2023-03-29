import fe from './fe'
import go from './go'
export default {
  ...fe,
  ...go,
  '/coding/': [
    {
      text: '导航',
      items: [
        { text: 'Go', link: '/coding/go/' },
        { text: 'web3', link: '/coding/web3/' },
        { text: 'Python', link: '/coding/python/' }
      ]
    }
  ]
}
