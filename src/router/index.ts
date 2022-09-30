import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/users",
        name: "users",
        component: () => import("@/components/UserList.vue"),
    },
    {
        path: "/users/:userId",
        name: "UserDetails",
        component: () => import("@/components/UserDetails.vue"),
    },
    {
        path: "/continents",
        name: "continents",
        component: () => import("@/components/geo-locations/Continent.vue"),
    },
    {
        path: "/continents/:continent",
        name: "CountryList",
        component: () => import("@/components/geo-locations/Country.vue"),
    },
    {
        path: "/countries/:country",
        name: "CountryDetail",
        component: () => import("@/components/geo-locations/CountryDetail.vue"),
    },
    {
        path: "/test",
        name: "testpage",
        component: () => import("@/components/geo-locations/TestPage.vue"),
    },
    {
        path: "/counter",
        name: "counter",
        component: () => import("@/components/Counter.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/components/Register.vue"),
    },
    {
        path: "/props",
        name: "props",
        component: () => import("@/components/Props.vue"),
    },
    {
        path: "/states",
        name: "states",
        component: () => import("@/components/States.vue"),
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
