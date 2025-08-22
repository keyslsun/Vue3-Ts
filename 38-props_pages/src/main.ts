//引入createApp用于创建应用
import { createApp } from "vue";
//引入App根组件
import App from './App.vue'
//创建一个应用
//第一步：引入pinia
import { createPinia } from "pinia";
import Router from './Router'
//第二步：创建pinia
const pinia = createPinia()
const app = createApp(App)
app.use(Router)
//第三步： 挂载pinia
app.use(pinia)
//挂载整个应用到app容器中
app.mount('#app')
