<template>
    <div class="father">
        <h3>父组件</h3>
        <button @click="pik">点击</button>
        <!-- 给子组件绑定事件 -->
         <h4 v-show="wif">获得Wif： {{ wif }}</h4>
         <!-- @senWif自定义事件 -->
        <CustomEventChild @sendWif="saveWif"/>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue';
import CustomEventChild from './CustomEventChild.vue';

//数据
let wif = ref('')

//方法
function pik(){
    console.log('点击')
}
//保存传递过来的wif
function saveWif(value:string){ //接收参数
    wif.value = value 
    console.log('得到了wif')
}

</script>

<style scoped>
.father{
    background-color: aliceblue;
    padding: 20px;
    border-radius: 10px;
}
</style>