import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

// Load Font Awesome css, Bootstrap css and js
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(store).use(router).mount('#app');
