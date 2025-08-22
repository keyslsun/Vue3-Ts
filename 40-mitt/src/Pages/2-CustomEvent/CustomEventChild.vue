<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>wif: {{ wif }}</h4>
        <!-- 捆绑点击事件触发 -->
         <!-- 传参 -->
        <button @click="emit('sendWif', wif)">test</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import { onMounted, ref } from 'vue';


//数据
let wif = ref('莉莉丝')

//声明自定义事件
const emit = defineEmits(['sendWif'])
// 利用emit触发事件
// onMounted(()=>{
//     setTimeout(()=>{
//         emit('sendWif') //触发
//     }, 3000)
// })
</script>

<style scoped>
.child{
    background-color: aqua;
    padding: 10px;
    box-shadow: 0 0 10 black;
    border-radius: 10px;
    margin-top: 10px;
}
</style>