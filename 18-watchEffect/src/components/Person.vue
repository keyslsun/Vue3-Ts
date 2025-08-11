<template>
    <div class="person">
    <h2>需求：当水温到达60°或者水位到达80时，向服务器发送请求</h2>
    <h2>当前水温:   {{ temp }}°C</h2>
    <h2>当前水位:   {{ height }}M</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue';

//数据
let temp = ref(10)
let height = ref(0)

//方法
function changeTemp(){
    temp.value += 10
}
function changeHeight(){
    height.value += 10
}

//监视 
//传统watch监视 :
// watch([temp, height],(value)=>{
//     //监测水温和水位
//     let [newTemp, newHeight] = value
//     console.log(newTemp, newHeight)
//     //弱满足需求就发送请求
//     if(temp.value >= 60 || height.value >= 80){
//         console.log('发送请求', value)
//     }
// },{deep:true})

//用watchEffect来监视：可以自动识别
watchEffect(()=>{
    if(temp.value >= 60 || height.value >= 80){
        console.log('向服务器发送请求')
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