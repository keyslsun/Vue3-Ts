<template>
    <div class="person">
    <h2>当前求和为： {{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

//数据
let sum = ref(0)

//方法
function add(){
    sum.value += 1
}
//Vue3生命周期
//创建
console.log('创建')

//挂载前
onBeforeMount(()=>{
    console.log('挂载前')
})

//挂载完毕
onMounted(()=>{
    console.log('挂载完毕')
})

//更新前
onBeforeUpdate(()=>{
    console.log('更新前')
})

//更新完毕
onUpdated(()=>{
    console.log('更新完毕')
})

//卸载前
onBeforeUnmount(()=>{
    console.log('卸载前')
})

//卸载完毕
onUnmounted(()=>{
    console.log('卸载完毕')
})

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