<template>
    <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄: {{ person.age }}, {{ n1 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
import { reactive, toRefs, toRef } from 'vue';
//数据
let person = reactive({name: '张三', age: 18})

let {name, age} = toRefs(person) //将reactive的值变化为ref，批量操作
let n1 = toRef(person,'age') //toRef 仅获取单个元素
//方法
function changeName(){
    name.value += '~'
    console.log(name.value, person.name) //解构：toRef后name的值源于reactive的对象值
    //改name的值的同时person对象中的值也跟着变
}
function changeAge(){
    age.value += 1
     //age值变动n1也跟着变动
    console.log(age.value, n1)
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