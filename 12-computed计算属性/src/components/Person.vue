<template>
    <div class="person">
    <!-- 用v-model对数据进行一个双向绑定（获取用户的输入） -->
    姓： <input type="text" v-model="firstName"> <br> 
    名： <input type="text" v-model="lastName"> <br>
    姓名：<span>{{ fullName }}</span> <br>
    <button @click="changeFullName">改变姓名为：sun-jiankai</button>
    </div>
</template>

<script lang="ts"> 
export default{     
    name: 'person', 
}
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue';

//数据
let firstName = ref('孙')
let lastName = ref('建凯')
//computed计算属性用于计算组合，且当过程与结果一致时不重复调用（有缓存）
// let fullName = computed(()=>{ //这么定义的fullName是一个计算属性，是只读的，不可修改
//    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// }) 

//如此定义计算属性，可读可写
let fullName = computed({
    get(){ //当读取fullName的值时，自动执行get
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val){ //当修改fullName的值时自动执行set
    const [str1, str2] = val.split('-') //拆分输入值（如 "sun-jiankai" → ["sun", "jiankai"]）
    firstName.value = str1 //将拆分结果分别赋值
    lastName.value = str2 //将拆分结果分别赋值
    }
})

function changeFullName(){
    fullName.value = 'sun-jiankai'
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