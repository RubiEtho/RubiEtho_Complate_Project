import { createRouter, createWebHistory } from "vue-router";
import store from "../Store";

const routes = [
    {
        path: "/",
        component: () => import("../Component/Layout/GuestLayout.vue"),
        children: [
            {
                path: "/",
                component: () => import("../Pages/Index.vue"),
            },
            {
                path: "/Blog",
                component: () => import("../Pages/Blog/Index.vue"),
            },
            {
                path: "/PrivacyPolicy",
                component: () => import("../Pages/PrivacyPolicy.vue"),
            },
            {
                path: "/Licensing",
                component: () => import("../Pages/Licensing.vue"),
            },
            {
                path: "/Contact",
                component: () => import("../Pages/Contact.vue"),
            },
        ],
    },
    {
        path: "/Dashboard",
        component: () => import("../Component/Layout/DashboardLayout.vue"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "/Dashboard",
                name: "Dashboard",
                component: () => import("../Pages/Dashboard/Dashboard.vue"),
            },
            {
                path: "/Users",
                name: "Users",
                component: () => import("../Pages/Dashboard/Users.vue"),
            },
            {
                path: "/Help-Desk",
                name: "Help-Desk",
                component: () => import("../Pages/Dashboard/Help.vue"),
            },
            {
                path: "/Category",
                name: "Category",
                component: () => import("../Pages/Dashboard/Category.vue"),
            },
            {
                path: "/Products",
                name: "Products",
                component: () => import("../Pages/Dashboard/Product.vue"),
            },
            {
                path: "/Order",
                name: "Order",
                component: () => import("../Pages/Dashboard/Order.vue"),
            },
            {
                path: "/Report",
                name: "Report",
                component: () => import("../Pages/Dashboard/Report.vue"),
            },
        ],
    },
    {
        path: "/",
        component: () => import("../Component/Layout/AuthLayout.vue"),
        children: [
            {
                path: "/Login",
                name: "login",
                component: () => import("../Pages/Auth/Login.vue"),
            },
            {
                path: "/Register",
                name: "register",
                component: () => import("../Pages/Auth/Register.vue"),
            },
            {
                path: "/Forget",
                name: "forget",
                component: () => import("../Pages/Auth/Forget.vue"),
            },
        ],
    },
    {
        path: "/Error",
        component: () => import("../Pages/NoFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "login" });
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});
export default router;
