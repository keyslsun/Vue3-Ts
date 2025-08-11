<template>
    <div class="person">
    ？？？
    </div>
</template>

<script lang="ts" setup name="person">
import { type PersonInter, type Persons } from '../types' //../可以从根目录引入路径; 引入对象时需要添加type
 
// let person :PersonInter = {id:'wstcsjk', name: '孙建凯', age: 25}
// console.log(person)

//需求：定义一个数组，数组中的对象是personInter规范的
// let personList : Array<PersonInter> = [ =====> 这是较为传统的写法
// 可以在ts组件定义声明，以优化可读性
let personList : Persons = [
    {id: 'wstcssq', name: 'ssq', age: 22},
    {id: 'wstcsas', name: 'sas', age: 49},
    {id: 'wstcssr', name: 'ssr', age: 52}
]
console.log(personList)
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
</style>