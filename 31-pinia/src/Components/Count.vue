<template>
    <div class="Count">
    <h2>当前求和为: {{ sum }}</h2>
    <!-- 用v-model动态绑定 -->
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="addSum">加</button>
    <button @click="lessSum">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue';

//数据
let sum = ref(0) //当前值
let n = ref(1)  //用户选择的数字
//方法
function addSum(){
    return sum.value += n.value
}

function lessSum(){
    return sum.value -= n.value
}
</script>

<style scoped>
.Count{
    background-color: cornflowerblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}

select, button{
    margin: 0 5px;
    height: 25px;
}
</style>