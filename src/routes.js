import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import About from './views/About.vue';
import Edit from './views/Edit.vue';
import Add from './views/Add.vue';


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/tarea/:id/edit",
        component: Edit,
        props: true
    },
    {
        path: "/nueva-tarea",
        component: Add
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router }