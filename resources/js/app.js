import "./bootstrap";
import "aos/dist/aos.css";
import { createApp } from "vue";

import App from "@/App.vue";
import Router from "./Route";
import store from "./Store";

window.vueSpatiePermissions = store.getters.token
    ? await store.dispatch("getCurrentUser")
    : 0;

import LaravelPermissionToVueJS from "./LaravelPermissions";

const app = createApp(App);
app.use(LaravelPermissionToVueJS);
app.use(store);
app.use(Router);
app.mount("#app");
