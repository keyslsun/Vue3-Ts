import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Father from "../Pages/1-Props/Father.vue";
import CustomEventFather from "../Pages/2-CustomEvent/CustomEventFather.vue";

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
        },
        {
            path: '/CustomEvent',
            component: CustomEventFather
        }
    ]

})

export default router