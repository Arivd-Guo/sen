<template>
  <div class="home">
    <h1 class="title">首页</h1>
    <div class="content">
      <p>欢迎来到Vue3移动端应用！</p>
      <div class="button-group">
        <router-link to="/about" class="button">关于我们</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Home组件逻辑
</script>

<style scoped>
.home {
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
