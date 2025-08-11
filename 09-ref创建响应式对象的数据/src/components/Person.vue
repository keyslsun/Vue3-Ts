<template>
    <div class="person">
    <h2>汽车信息：一辆{{car.brand}}的车,价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li> 
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <hr>

    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
//导入
import {ref} from 'vue';
//数据
let car = ref({brand: '小米', price: 30})  //ref可以定义对象类型的响应式数据
let games = ref([
    {id: 'game1', name: '崩铁'},
    {id: 'game2', name: '原神'},
    {id: 'game3', name: 'ZZZ'}
])

console.log(car) //ref套了一个reactive（实际开发仅使用ref即可）


//方法
function changePrice(){
   car.value.price += 10 //ref定义情况下想碰到对象的值需要在对象后添加.value
}
function changeFirstGame(){
   games.value[0].name = '英雄联盟' //ref数组同理
}

</script>

<style>
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
</style>