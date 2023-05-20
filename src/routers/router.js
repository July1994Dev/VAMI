import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import InicioComponent from '../components/pages/InicioComponent.vue';

const routes = [
  { path: '/', component: InicioComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
