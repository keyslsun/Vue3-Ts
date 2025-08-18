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
import { ref } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid'; //引入nanoid
import { useLoveStore } from '../Store/Love';
//数据
const LoveStore = useLoveStore()
//方法
async function nextTalk(){
    //发请求
//    let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//    //将请求回来的字符串封装成对象
//    let obj = {id:nanoid(), content:result.data.content}
//    //放到数组中
//    LoveStore.loveList.unshift(obj)
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