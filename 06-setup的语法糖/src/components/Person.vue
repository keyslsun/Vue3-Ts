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
export default{     // 若没写暴露，则存在插件支持（开发时需要考虑）
    name: 'person234', //注意： 暴露不可省略不写，不然无法对代码对象命名.
}
</script>

<script lang="ts" setup> //setup封装前需添加ts声明，否则默认为js
//<script setup>可以自行封装return
//可以不用再手动暴露 export default{    }, 如果添加则会报错
    //数据
    let name = '张三' //注意此时的数据都非响应式的
    let age = 18
    let tel = 1234567890
    let address = '浙江省丽水市青田县东源-孙岸'

    //方法
    function changeName () {
        name = 'zhang-san' //注意：这样修改页面是无法变化的
    }

    function changeAge () {
        age += 1
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