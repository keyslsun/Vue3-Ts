<template>
    <div class="Count">
        <!-- 读数据 -->
    <h2>当前求和为: {{ sum }};  放大十倍后{{ bigSum }}</h2>
        <!-- 用v-model动态绑定 -->
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="addSum">加</button>
    <button @click="lessSum">减</button>
    <!-- 读数据 -->
    <br>
    <h3>Welcome： 这是我的 Vue3, 我就读于 {{ school }}</h3>
    <br>
    <h3>坐标: {{ city }}</h3>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref, toRefs } from 'vue';
import { useCountStore } from '../Store/Count'; //导入pinia数据
import { storeToRefs } from 'pinia';

//数据
let countStore = useCountStore()
let n = ref(1)  //用户选择的数字
// const {sum, school, city} = toRefs(countStore)  //解构：通过toRefs获得响应式，但性能影响大
const {sum, school, city, bigSum} = storeToRefs(countStore) //storeToRefs性能影响小，只影响数据 结论：无脑用

//以下方式可以得到pinia=>state中的数据
//countStore.sum已经自动拆解（countStore.sum.value)
console.log('@@', countStore.sum)
//方法
function addSum(){
    // 方法3：直接调用actions（逻辑公共，提高复用）
    countStore.increment(n.value)
}

function lessSum(){
    countStore.sum -= n.value
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