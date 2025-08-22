<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>汽车: {{ car }}</h4>
        <!-- 数据传递 -->
        <h4 v-show="toy">需要给儿子买的玩具： {{ toy }}</h4>
        <Child :che="car" :sendToy="getToy"/>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue';
import Child from './Child.vue';

//数据
let car = ref('劳斯莱斯')
let toy = ref('')
//方法
function getToy(value:string){
    toy.value = value  //传递值
}
</script>

<style scoped>
.father{
    background-color: aliceblue;
    padding: 20px;
    border-radius: 10px;
}
</style>