<template>
    <div class="newscontent">
        <ul class="news-list">
            <li>
                <!-- query接收参数 -->
                编号:{{ useRoute().query.id }}
                <br>
                标题: {{ useRoute().query.title }}
                <br>
                <p>未找到相应内容!</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Detail">
// 导入useRoute接收参数
import { useRoute } from 'vue-router';
</script>

<style scoped>
.newscontent {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
.news-list {
    width: 400px;
    height: 300px;
    list-style: none;
    padding: 20px;
    margin: 0;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.05);
    background: white;
}
.news-list li {
    padding: 0;
}
.news-list p {
    color: #7f8c8d;
    margin-top: 10px;
}
</style>