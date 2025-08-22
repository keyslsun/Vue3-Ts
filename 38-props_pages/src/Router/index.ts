import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Father from "../Pages/1-Props/Father.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/props'
        },
        {
            path: '/props',
            component: Father
        }
    ]

})

export default router