<template>
<div class="title">
    <h1>VUE3 组件通信</h1>
    <br>
</div>
<div class="body">
<div class="nav">
    <!-- 导航区 -->
        <router-link active-class="active" :to="{path:'/props'}">1.props</router-link>
        <router-link active-class="active" :to="{path:'/CustomEvent'}">2.CustomEvent</router-link>
        <router-link active-class="active" :to="{path:'/mitt'}">3.mitt</router-link>
        <router-link active-class="active" :to="{path:'/v-model'}">4.v-model</router-link>
</div>
<div class="show">
<!-- 展示区 -->
 <router-view/>
</div>
</div>
</template>

<script lang="ts" setup name="App">
import { RouterLink } from 'vue-router';


</script>

<style scoped>
.title {
    text-align: center;
    margin-bottom: 20px;
}

.title h1 {
    font-size: 24px;
    color: #000;
}

.body {
    display: flex;
    width: 100%;
}

.nav {
    width: 20%;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0px;
}

.nav a {
    padding: 10px 15px;
    text-decoration: none;
    color: #020202;
    border-radius: 0px;
    transition: all 0.3s;
    border: 1.2px solid rgb(11, 11, 11);
}

.nav a:hover {
    background-color: #f0f0f0;
}

.nav a.active {
    background-color: #409eff;
    color: white;
}

.show {
    width: 80%;
    padding: 20px;
}

</style>