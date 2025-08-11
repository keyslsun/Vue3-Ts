<template>
  <h2 ref="city">你好</h2>
  <button @click="showHello" class="person">点我输出h2元素</button>
  <button @click="test">测试</button>
  <person ref="ren"/>
</template>

<script lang="ts" setup name="App">

import { ref } from 'vue';
import Person from './components/Person.vue';

let city = ref()
let ren = ref()

function showHello(){
  console.log(city.value)
}
//输出组件实例对象, 但是看不见子组件的数据，因为被封装保护了
//需要子组件添加defineExpose主动暴露属性
function test(){
  console.log(ren.value)
}
</script>

