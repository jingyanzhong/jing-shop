module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/jing-shop/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [meta] = args
      meta.title = '京式會社 | 日本服飾、雜貨代購'
      meta.icon = 'favicon.ico'
      meta.meta = {
        description:
          '京式會社為代購日本品牌服飾及雜貨，因全部都為日本空運來台，需等待至少7-20個工作天才能出貨，煩請下單的小仙女們耐心等候，美好的事物值得等待。',
        og: {
          type: 'website',
          // url: 'https://a94s84.github.io/Hermosa/#/',
          title: '京式會社',
          image: '@/public/favicon.ico',
          description:
            '京式會社為代購日本品牌服飾及雜貨，因全部都為日本空運來台，需等待至少7-20個工作天才能出貨，煩請下單的小仙女們耐心等候，美好的事物值得等待。'
        }
      }
      return args
    })
  }
}
