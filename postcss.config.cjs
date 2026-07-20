module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // PS设计稿的"点"（pt）需要乘以1.333才是真实px
      // 比如：45pt = 60px
      // rootValue = 设计稿值 / 实际px值 * 基准字体大小
      // 假设基准字体大小是16px，那么 rootValue = 45/60 * 16 = 12
      rootValue: 16,
      propList: ['font-size'], // 只转换font-size
      selectorBlackList: ['.norem'], // 忽略.norem类的选择器
      replace: true,
      mediaQuery: false, // 不转换媒体查询中的px
      minPixelValue: 0 // 忽略小于0的px值
    }
  }
}