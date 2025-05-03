import { createRouter, createWebHistory } from "vue-router";
import FuzzyWaddleView from "../views/FuzzyWaddleView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: FuzzyWaddleView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/HomeView.vue"),
        },
        {
            // TODO: add a guard
            path: "/tax",
            name: "tax",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/TaxView.vue"),
        },
    ],
});

export default router;
