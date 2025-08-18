<template>
    <div class="Love">
    <button @click="nextTalk">获取一份土味情话</button>
    <ul >
        <li v-for="talk in loveList" :key="talk.id">{{ talk.content }}</li>
    </ul>
    </div>
</template>

<script setup lang="ts" name="Love">
import { ref } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid'; //引入nanoid
//数据
let loveList = ref([
    {id: 1, content: '我觉得你特别像一款游戏——我的世界'},
    {id: 2, content: '你有地图吗？我在你的眼睛里迷路了。'},
    {id: 3, content: '我在找一匹马。什么马？你的微信号码。'}
])

//方法
async function nextTalk(){
    //发请求
   let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
   //将请求回来的字符串封装成对象
   let obj = {id:nanoid(), content:result.data.content}
   //放到数组中
   loveList.value.unshift(obj)
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