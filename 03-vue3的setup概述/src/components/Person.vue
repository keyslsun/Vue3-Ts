<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
export default{
    beforeCreate (){
        console.log('beforeCreate')
    },

    name: 'person',
    setup() {
    //数据
    let name = '张三' //注意此时的数据都非响应式的
    let age = 18
    let tel = 1234567890

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

    return {name, age, changeName, changeAge, showTel} //return将对象交出去，不然无法使用

    },

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