<template>
  <div class="home">
    <h1 class="title">欢迎来到新闻中心</h1>
    <p class="subtitle">每日精选全球热点新闻</p>
    <router-link to="/news" class="nav-button">查看新闻</router-link>
  </div>
</template>

<script setup>
// 无需逻辑时可省略 script
</script>

<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
}
.title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 15px;
}
.subtitle {
  color: #7f8c8d;
  font-size: 1.2rem;
  margin-bottom: 30px;
}
.nav-button {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #42b983, #35495e);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.3s;
}
.nav-button:hover {
  transform: translateY(-3px);
}
</style>