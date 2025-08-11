
import { computed, onBeforeMount, onMounted, ref } from 'vue';


export default function(){
//数据
let sum = ref(0)
let bigSum = ref(computed(()=>{
    return sum.value * 10
}))
//方法
function add(){
    sum.value += 1
}

//钩子
onBeforeMount(()=>{
    console.log('Sum挂载前')
})

onMounted(()=>{
    console.log('Sum挂载完毕')
})
//给出东西
return {sum, add, bigSum}
}
