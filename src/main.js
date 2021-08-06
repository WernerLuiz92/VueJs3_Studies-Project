import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import Transform from './directives/Transform';

import './assets/css/tailwind.css';

const app = createApp(App);

app.use(
    VueAxios, 
    axios, 
    axios.defaults.baseURL = 'http://localhost:3000/'
);
app.use(router);
app.directive('wl-transform',Transform)
app.mount('#app');