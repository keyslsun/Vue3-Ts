<template>
  <div class="about">
    <h1 class="title">关于我们</h1>
    <div class="content">
      <p>Vue初学者。</p>
      <router-link to="/" class="back-link">返回首页</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// 无需逻辑时可省略 script

onMounted(()=>{
  console.log('About被挂载了')
})

onUnmounted(()=>{
  console.log('About被卸载了')
})
</script>

<style scoped>
.about {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
}
.content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
}
.back-link {
  display: inline-block;
  margin-top: 20px;
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
}
</style>