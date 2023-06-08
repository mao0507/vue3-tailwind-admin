/* eslint-disable */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 引入 tailwind csss
import './style/index.css';
// 引入 PerfectScrollbar
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import PerfectScrollbar from 'vue3-perfect-scrollbar';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PerfectScrollbar);

app.mount('#app');
