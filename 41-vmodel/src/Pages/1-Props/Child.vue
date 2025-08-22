<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具: {{ toy }}</h4>
        <!-- 使用读取的数据 -->
        <h4>老爸给的车：{{ che }}</h4>
        <button @click="sendToy(toy)">将玩具给老爸付钱</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue';


//数据
let toy = ref('奥特曼')

//互相传输props
defineProps(['che', 'sendToy'])
</script>

<style scoped>
.child{
    background-color: aqua;
    padding: 10px;
    box-shadow: 0 0 10 black;
    border-radius: 10px;
}
</style>