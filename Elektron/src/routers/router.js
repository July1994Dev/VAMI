import { createRouter, createWebHashHistory } from "vue-router";
import InicioComponent from '../components/pages/InicioComponent.vue';

const routes = [
  { path: '/', component: InicioComponent },
  // { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
