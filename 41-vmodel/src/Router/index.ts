import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Father from "../Pages/1-Props/Father.vue";
import CustomEventFather from "../Pages/2-CustomEvent/CustomEventFather.vue";
import MittFather from "../Pages/3-mitt/mittFather.vue";
import VmodelFather from "../Pages/4.v-model/VmodelFather.vue";

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
        },
        {
            path: '/mitt',
            component: MittFather
        },
        {
            path: '/v-model',
            component: VmodelFather
        }
    ]

})

export default router