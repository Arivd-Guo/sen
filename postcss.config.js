export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度的1/10，假设设计稿为375px
      propList: ['*'], // 需要转换的属性，*表示所有属性
      selectorBlackList: [], // 不需要转换的选择器
      exclude: /node_modules/i, // 排除node_modules目录
      minPixelValue: 1 // 最小转换像素值
    }
  }
}
