<template>
    <div class="person">
    <h1>情况4：监视【ref】或【reactive】定义的【对象类型】的某个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>座驾: {{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一辆车</button>
    <button @click="changeC2">修改第二辆车</button>
    <button @click="changeCar">修改座驾</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
import { reactive,watch } from 'vue';
//数据
let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '劳斯莱斯',
        c2: '梅赛德斯'
    }
})

//方法
function changeName(){
    person.name += '~'
}

function changeAge(){
    person.age += 1 
}

function changeC1(){
    person.car.c1 = '路虎'
}

function changeC2(){
    person.car.c2 = '保时捷'
}

function changeCar(){
    person.car.c1 = '兰博基尼',
    person.car.c2 = '卡宴'
}

//监视情况4：仅监听一个响应式对象的某个值而非整个对象，且该属性是基本类型的，要写成函数形式

watch(()=>person.name,(newValue, oldValue)=>{
    console.log('person.name改变', newValue, oldValue)
})

//监视响应式对象中的某个对象时可以直接使用watch监视，但只能感知对象的变化
// watch(person.car,(newValue, oldValue)=>{
//     console.log('person.car变化了', newValue, oldValue)
// })
//所以建议使用函数形式

watch(()=>person.car,(newValue, oldValue)=>{
    console.log('person.car变化了', newValue, oldValue)
},{deep:true})//注意开启深度监测

//结论：监视对象时都使用函数形式即可
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