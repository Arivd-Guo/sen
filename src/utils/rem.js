// 设置根元素字体大小
function setRemUnit() {
  // 设计稿宽度
  const designWidth = 375
  // 计算缩放比例
  const scale = document.documentElement.clientWidth / designWidth
  // 设置根元素字体大小，最大不超过2倍设计稿
  document.documentElement.style.fontSize = Math.min(scale * 100, 200) + 'px'
}

// 初始化
setRemUnit()

// 监听窗口大小变化
window.addEventListener('resize', setRemUnit)

// 监听页面旋转
window.addEventListener('orientationchange', setRemUnit)
