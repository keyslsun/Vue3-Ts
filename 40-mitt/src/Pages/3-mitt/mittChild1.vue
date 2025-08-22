<template>
    <div class="child">
        <h3>子组件1</h3>
        <h4>玩具: {{ computer }}</h4>
        <!-- 通过emit触发事件并传输参数 -->
        <button @click="emitter.emit('sendComputer', computer)">把玩具给弟弟</button>
    </div>
</template>

<script setup lang="ts" name="mittChild1">
import { ref } from 'vue';
import emitter from '../../utils/emitter';

//数据
let computer = ref("外星人笔记本")
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