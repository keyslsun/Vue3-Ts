<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <h2>属地: {{ address }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>

import { ref } from 'vue'; //将动态数据函数从vue中导入

    //数据
    let name = ref('张三') // ref（）使数据可以动态保存
    let age = ref(18)
    let tel = 1234567890
    let address = '浙江省丽水市青田县东源-孙岸'

    //方法
    function changeName () {
        //name = 'zhang-san' 注意：这样修改页面是无法变化的
        name.value = 'zhang-san' //.value可以动态赋值
        console.log(name)
    }

    function changeAge () {
        //age += 1
        age.value += 1
        console.log(age)
    }

    function showTel () {
        alert(tel)
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
</style>