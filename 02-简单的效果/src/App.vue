<template>
  <div class="app">
    <h1>你好</h1>
  <person/>
  </div>
</template>

<script lang="ts">

import Person from './components/Person.vue';

export default{
  name: 'App',//组件名
  components : {Person} // 注册组件
}
</script>

<style >
.app {
  background-color: antiquewhite;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10;
  width: 100%;
}
</style>