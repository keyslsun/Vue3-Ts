<template>
<div class="title">
    <h1>VUE3 组件通信</h1>
    <br>
</div>
<div class="body">
<div class="nav">
    <!-- 导航区 -->
        <router-link active-class="active" :to="{path:'/props'}">1.props</router-link>
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
    border-right: 1px solid #eee;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.nav a {
    padding: 10px 15px;
    text-decoration: none;
    color: #000;
    border-radius: 4px;
    transition: all 0.3s;
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