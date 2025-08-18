<template>
    <div>
        <ul class="news-list">
        <li>内容不存在!
            <br>
            找不到指定的新闻内容。
        </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Detail">

</script>

<style scoped>
.news-list {
  list-style: none;
  padding: 0;
}
.news-list li {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
</style>