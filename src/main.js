import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)

    // const app = Vue.createApp(...)

    .use(router).mount('#app')
    .use(VueAxios, axios)