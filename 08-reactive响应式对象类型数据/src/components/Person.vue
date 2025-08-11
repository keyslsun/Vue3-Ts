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
    <h2>测试: {{ Obj.a.b.c }}</h2>
    <button @click="changeObj">测试</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
//导入
import {reactive} from 'vue';
//数据
let car = reactive({brand: '小米', price: 30})  //响应式对象数据
let games = reactive([  //响应式数组数据
    {id: 'game1', name: '崩铁'},
    {id: 'game2', name: '原神'},
    {id: 'game3', name: 'ZZZ'}
])
let Obj = reactive({        //深层次响应式数据
    a:{
        b:{
            c:666
        }
    }
})

//方法
function changePrice(){
    car.price += 10
}
function changeFirstGame(){
    games[0].name = '英雄联盟'
}
function changeObj(){
    Obj.a.b.c = 999
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