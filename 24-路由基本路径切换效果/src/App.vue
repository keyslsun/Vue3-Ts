<template>
<div>
  <h2 class="title">Vue路由测试</h2>
  <!-- 导航区 -->
   <div class="nav">
    <!-- router-link需要搭配to来更改路径 -->
    <!-- router-link组件中的active-class可以触发激活效果 -->
    <router-link to="home" active-class="active">首页</router-link>
    <router-link to="News" active-class="active">新闻</router-link>
    <router-link to="About" active-class="active">关于</router-link>
   </div> 
  <!-- 展示区 -->
   <div class="content">
    <!-- 路由器展示占位 -->
    <router-view></router-view> 
   </div>
</div>
</template>

<script lang="ts" setup name="App">
//引入路由器展示,和RouterLink
import { RouterView,RouterLink } from 'vue-router';

</script>

<style scoped>
/* 全局基础样式 */
div {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 标题样式 */
.title {
  color: #2c3e50;
  text-align: center;
  margin: 30px 0;
  font-size: 2.5rem;
  position: relative;
  padding-bottom: 15px;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #42b983, #35495e);
}

/* 导航栏样式 */
.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.nav a {
  position: relative;
  padding: 12px 24px;
  text-decoration: none;
  color: #34495e;
  font-weight: 600;
  border-radius: 30px;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.nav .active{
  color: white;
  background: linear-gradient(135deg, #42b983, #35495e);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}


.nav a:hover {
  color: white;
  background: linear-gradient(135deg, #42b983, #35495e);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.nav a::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid rgba(66, 185, 131, 0.3);
  border-radius: 35px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav a:hover::before {
  opacity: 1;
}

/* 内容区域样式 */
.content {
  min-height: 300px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.05);
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;
}

.content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #42b983, #35495e);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .nav {
    gap: 10px;
  }
  
  .nav a {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
  
  .content {
    padding: 20px;
  }
}

/* 加载动画占位符 */
.content:empty::after {
  content: '即将展示路由内容...';
  display: block;
  text-align: center;
  color: #7f8c8d;
  font-style: italic;
  margin-top: 50px;
}
</style>
