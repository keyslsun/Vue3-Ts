<template>
    <div class="person">
    <h2>当前求和为： {{ sum }}</h2>
    <h2>十倍后的值: {{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(img, index) in dogList" :src="img" :key="index">
    <button @click="getDog">点击获取更多基</button>
    </div>
</template>

<script lang="ts" setup name="person">
import useDoglist from '../hooks/useDoglist';
import useSum from '../hooks/useSum';
//hooks调用 组合式
const {sum, add, bigSum} = useSum() 
const {dogList, getDog} = useDoglist()
</script> 
<!-- 局部样式属性scoped可以使组件独立，结论：无脑加 -->
<style scoped> 
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

img{
    height: 100px;
    margin: 2px;
}
</style>