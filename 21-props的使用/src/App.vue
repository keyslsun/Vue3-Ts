<template>
  <!-- 组件间传递 -->
  <person a="哈哈哈哈" />
  <!-- 看懂下行代码 -->
   <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">测试</h2> -->
</template>

<script lang="ts" setup name="App">

import Person from './components/Person.vue';
import { reactive } from 'vue';
import { type Persons } from '../src/types'

let personList = reactive<Persons>([
  {id: 'sb1', name: 'ssq', age: 23 }, 
  {id: 'lm', name: 'sas', age: 49 },
  {id: 'lb', name: 'ssr', age: 51 }
])

console.log(personList)

// let x = 10

</script>

