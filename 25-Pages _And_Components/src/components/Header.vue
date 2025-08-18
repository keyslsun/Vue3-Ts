<template>
    <div>
        <h2 class="title">Vue路由测试</h2>
    </div>
</template>

<script setup lang="ts" name="App" >

</script>

<style scoped>
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

</style>