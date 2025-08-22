<template>
    <div class="father">
        <h3>父组件</h3>
        <MittChild1/>
        <MittChild2/>
    </div>
</template>

<script setup lang="ts" name="mittFather">
import MittChild2 from './mittChild2.vue';
import MittChild1 from './mittChild1.vue';


</script>

<style scoped>
.father{
    background-color: aliceblue;
    padding: 20px;
    border-radius: 10px;
}
</style>