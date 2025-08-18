<template>
  <div class="news">
    <h1 class="title">最新动态</h1>
    <ul class="news-list">
      <li v-for="nws in news" :key="nws.title">
        
        <router-link class="h3" to="/news/detail">{{ nws.title }}</router-link>
        <p>{{ nws.summary }}</p>
        <!-- 展示区 -->
        <router-view/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="News">
const news = [
  { title: 'Vue 3.4 正式发布', summary: '新版本优化了响应式性能...' },
  { title: '前端开发趋势分析', summary: '2025年最值得关注的技术...' },
  { title: 'CSS新特性预览', summary: '即将推出的容器查询功能...' }
]
</script>

<style scoped>
.news {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.news-list {
  list-style: none;
  padding: 0;
}
.news-list li {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.news-list .h3 {
  color: #2c3e50;
  margin-top: 0;
}
.news-list p {
  color: #7f8c8d;
}
</style>