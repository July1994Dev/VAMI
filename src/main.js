import "../src/assets/lib/easing/easing.min.js";
import "../src/assets/lib/waypoints/waypoints.min.js";
import "../src/assets/lib/counterup/counterup.min.js";
import "../src/assets/lib/owlcarousel/owl.carousel.min.js";
import "../src/assets/js/main.js";

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routers/router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');