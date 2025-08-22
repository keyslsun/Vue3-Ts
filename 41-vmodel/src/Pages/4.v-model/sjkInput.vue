<template>
    <div>
        <!-- :value显示父传子, input子传父 -->
        <input type="text" 
        :value="modelValue" 
        @input="emit('update:modelValue', (<HTMLInputElement>$event.target!.value))"
        >
        
    </div>
</template>

<script setup lang="ts" name="sjkInput">
defineProps (['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
input{
    border: 2px solid black;
    font-size: 20px;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    color: white;
}
</style>