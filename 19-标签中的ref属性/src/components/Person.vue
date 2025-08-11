<template>
    <div class="person">
    <h1>中国</h1>
    <h2 ref="city">广州</h2>
    <h3>暨南大学</h3>
    <button @click="cityP">点击输出h2元素</button>
    </div>
</template>

<script lang="ts" setup name="person">
import { ref, defineExpose } from 'vue';


//方法
//Dom绑定可能导致id互相覆盖
// function cityP(){
//     console.log(document.querySelector('h2'))
// }

//数据
//创建一个city用于存储ref标记的内容
let city = ref()
//ref标记可以避免id覆盖问题
function cityP(){
    console.log(city.value)
}

//添加defineExpose属性，实现父子通讯，定义暴露属性
defineExpose({city}) 
</script> 
<!-- 局部样式属性scoped可以使组件独立，结论：无脑加 -->
<style scoped> 
.person{
    background-color: skyblue;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10;
}

button{
    margin: 0 5px;
}

li{
    font-size: 20px;
}
</style>