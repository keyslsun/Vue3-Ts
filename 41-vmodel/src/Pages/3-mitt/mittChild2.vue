<template>
    <div class="child">
        <h3>子组件2</h3>
        <h4>玩具: {{ phone }}</h4>
        <h4 v-show="toy">哥哥给的玩具: {{ toy }}</h4>
    </div>
</template>

<script setup lang="ts" name="mittChild2">
import { onUnmounted, ref } from 'vue';
import emitter from '../../utils/emitter';


//数据
let phone = ref('华为P70')
let toy = ref('')
//绑定自定义事件sendComputer,接收任意基本类型value并保存
emitter.on('sendComputer',(value:any)=>{
    toy.value = value
})

//卸载时解绑: 避免内存泄露
onUnmounted(()=>{
    emitter.off('sendComputer')
    console.log('mittChild2已卸载,sendComputer被解绑')
})
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