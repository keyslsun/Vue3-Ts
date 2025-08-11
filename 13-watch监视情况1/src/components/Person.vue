<template>
    <div class="person">
    <h2>情况1：监视【ref】定义的【基本类型】数据</h2>
    <h2>当前求和值为:{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
import { ref,watch } from 'vue';

//数据
let sum = ref(0)

//方法
function changeSum(){
    sum.value += 1
}

//监视情况1：
const stop = watch(sum,(newValue, oldValue)=>{ //this=undefin，因此可使用箭头函数
    console.log('sum变化了',newValue, oldValue)
    //添加判断，用于停止监视
    if(newValue >= 10){ //生命周期为10
        stop() //回调内部调用自身停止监视(vue内部自动清理逻辑)
    }
})
</script>

<style>
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