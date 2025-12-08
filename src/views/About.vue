<template>
  <div class="about">
    <h1 class="title">关于我们</h1>
    <div class="content">
      <p>这是一个使用Vue3开发的移动端应用示例。</p>
      <p>包含以下特性：</p>
      <ul>
        <li>Vue3 Composition API</li>
        <li>移动端适配（rem）</li>
        <li>路由管理（Vue Router）</li>
        <li>响应式布局</li>
      </ul>
      <div class="button-group">
        <router-link to="/" class="button">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// About组件逻辑
</script>

<style scoped>
.about {
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
}

.content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.content p {
  font-size: 16px;
  margin-bottom: 20px;
  color: #666;
}

.content ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;
}

.content li {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.content li::before {
  content: "•";
  color: #409eff;
  font-size: 20px;
  position: absolute;
  left: 0;
  top: -2px;
}

.button-group {
  margin-top: 20px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #409eff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #66b1ff;
}
</style>
