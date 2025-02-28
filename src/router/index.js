import { createRouter, createWebHistory } from 'vue-router';
import artistas from "@/components/artistas.vue";
import albumes from "@/components/albumes.vue";
import generos from "@/components/generos.vue";

const routes = [
    { path: '/', component: artistas },
    { path: '/albumes', component:albumes},
    { path: '/generos', component: generos }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
