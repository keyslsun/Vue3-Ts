<template>
    <div class="Love">
    <button @click="nextTalk">获取一份土味情话</button>
    <ul >
        <!-- 读取数据：LoveStore=====>loveList -->
        <li v-for="talk in LoveStore.loveList" :key="talk.id">{{ talk.content }}</li>
    </ul>
    </div>
</template>

<script setup lang="ts" name="Love">

import { useLoveStore } from '../Store/Love';
//数据
const LoveStore = useLoveStore()
//方法
LoveStore.$subscribe((mutate, state)=>{ //监视
    console.log('LoveStore改变了', mutate, state)
    localStorage.setItem('loveList', JSON.stringify(state.loveList)) //将loveList变为字符串存于本地仓库
})
function nextTalk(){
    LoveStore.getTalk()
}
</script>

<style scoped>
.Love{
    background-color: lightpink;
    border-radius: 10px;
    box-shadow: 0 0 10;
    padding: 10px;
}
</style>