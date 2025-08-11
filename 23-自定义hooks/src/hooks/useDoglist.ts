import axios from 'axios';
import { ref } from 'vue';


export default function(){
//数据
let dogList = ref([
    'https://cdn2.ettoday.net/images/7082/d7082166.jpg'
])
//方法
async function getDog() {
    //全局异常
try {   
    //使用axios请求接口获取url
    let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random') 
    //请求成功时将获得的url添加进数组，界面会自动更新图片
    dogList.value.push(result.data.message)  
}   catch(error){
    //失败，通过try-catch捕捉错误并提示
    alert(error)
}
}
//向外提供东西
return {dogList,getDog}
}