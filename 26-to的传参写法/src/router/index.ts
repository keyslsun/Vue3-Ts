//创建一个路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router";

//引入一个一个的路由（可能要呈现的）组件
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import About from "../pages/About.vue";

//创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',  // 根路径重定向
      redirect: '/home'
    },
    {
      path: '/home',  // 正确的URL路径
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/about',
      component: About
    }
  ]
});

//暴露router
export default router