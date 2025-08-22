<template>
    <div class="father">
        <h3>父组件</h3>
        <!-- 双向绑定v-model, 用在html标签上 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- 本质: <input type="text" :value="username" @input="username = $event.target!.value"> -->
         
        <!-- v-model 用在组件标签上 -->
         <sjkInput v-model="username"/>
        <!-- 本质: <sjkInput :modelValue="username" @update:modelValue = "username = $event" -->
    </div>
</template>

<script setup lang="ts" name="VmodelFather">
import { ref } from 'vue';
import sjkInput from './sjkInput.vue';

//数据
let username = ref('Siqi')
</script>

<style scoped>
.father{
    background-color: aliceblue;
    padding: 20px;
    border-radius: 10px;
}
</style>