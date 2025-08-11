<template>
    <div class="person">
    ？？？
    <h2>{{ a }}</h2>
    <ul>
        <!-- v-for=“某项 在 某源” 遍历 -->
        <li v-for="item in personList " :key="item.id">
            {{ item.name }} -- {{ item.age }}
        </li>
    </ul>
    </div>
</template>

<script lang="ts" setup name="person">
import { type PersonInter, type Persons } from '../types' //../可以从根目录引入路径; 引入对象时需要添加type
import { withDefaults } from 'vue';
//define... 宏函数无需引入
//接收a，仅接收： 
// defineProps(['a']) 

//接收同时+限制类型
// defineProps<{personList:Persons}>()

//接收 + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{a?:string; personList?:Persons}>(),{ //?:自行判断，若无不收；
    personList:()=>[{   
        //指定默认值
        id: 'sg', name: '孙建凯', age: 25  
    }]
}) 

// console.log(a)无法打印a(此时是变量)
//将props的a 保存
// let x = defineProps(['a'])
// console.log(x) 

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