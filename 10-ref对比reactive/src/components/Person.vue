<template>
    <div class="person">
    <h2>汽车信息：一辆{{car.brand}}的车,价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和值:{{ sum }}</h2>
    <button @click="changeSum">点我求和值+1</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
//导入
import {ref, reactive} from 'vue';
//数据
// let car = reactive({brand: '小米', price: 30})  
let car = ref({brand: '小米', price: 30})
let sum = ref(0)

console.log(car) //ref套了一个reactive（实际开发仅使用ref即可）


//方法
function changePrice(){
   car.value.price += 10 //ref定义情况下想碰到对象的值需要在对象后添加.value
}
function changeBrand(){
    car.value.brand = '红旗'
}
function changeCar(){
    // car = {brand:'捞特莱斯', price: 1000}  注意：reactive若重新分配对象会导致失去响应式
    // 以下写法是深度拷贝，可以在页面上显示
    // Object.assign(car,{brand:'奇瑞QQ', price: 2}) 

    //若响应式由ref声明, 可以直接定义
    car.value = {brand: '奇瑞qq', price: 2}
}
function changeSum(){
    sum.value += 1
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