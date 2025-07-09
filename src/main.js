import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // adjust if needed
import './main.css'; // includes Tailwind

createApp(App).use(router).mount('#app');
