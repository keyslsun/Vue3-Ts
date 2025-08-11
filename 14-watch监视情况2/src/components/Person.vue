<template>
    <div class="person">
    <h1>情况2：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名： {{ person.name }}</h2>
    <h2>年龄： {{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
import { ref,watch } from 'vue';

//数据
let person = ref({name: '张三', age: 18})

//方法
function changeName(){
    person.value.name += '~'
}
function changeAge(){
    person.value.age += 1
}
function changePerson (){
    person.value = {name: '孙建凯', age: 25}
}
// 监视1, 监视的是ref定义的对象类型的数据，监视的是对象的地址值，若想监视对象内部变化需要开启深度监视
// 监视的第一个参数是：被监视的数据
// 监视的第二个参数是：监视的回调
// 监视的第三个参数是：配置对象（deep,immediate......）
watch(person,(newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
},{deep:true, immediate:true}) //开启深度监视和立即监视
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