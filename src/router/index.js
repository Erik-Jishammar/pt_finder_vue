import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import Home_page from "@/components/Home_page.vue";
import List_pt from "@/components/List_pt.vue";
import Register_pt from "@/components/Register_pt.vue";
import Details_pt from "@/components/Details_pt.vue";
import ViewRequests from "@/components/ViewRequests.vue";


const routes = [{
        path: '/',
        component: Home_page
    },
    {   path:'/pts',
        component: List_pt
    },
    {
        path: '/pts/:id',
        component: Details_pt

    },
    {
        path: '/register',
        component: Register_pt
    },
    {
        path: '/requests',
        component: ViewRequests
    }]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;