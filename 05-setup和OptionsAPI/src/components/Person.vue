<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <hr></hr>
        <h2>测试1: {{ a }}</h2>
        <h2>测试2: {{ c }}</h2>
        <h2>测试3：{{ d }}</h2>
        <button @click="b">测试</button>
    </div>
</template>

<script lang="ts">
export default{
    beforeCreate (){
        console.log('beforeCreate')
    },
    //data 可以和setup同时存在
    data() { 
        return{
            a: 100,
            c: this.name, // 报错， this 在 data 中可以访问 setup 的返回值,setup是一个初始化
            d: 900
        }
    },
    //methods 可以和setup同时存在
    methods:{
        b(){
            console.log('b')
        }
    }, 
    name: 'person',
    setup() {
    //数据
    let name = '张三' //注意此时的数据都非响应式的
    let age = 18
    let tel = 1234567890
    // let x = d , 报错：旧的可以访问新的但新的无法访问旧的
    // let x = this.d , 注意：setup中的this-> undefined

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

    return {name, age, changeName, changeAge, showTel}

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